import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Course, CourseStatus } from 'src/app/core/data/model/course.model';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { copyToClipBoard, sortItems } from 'src/app/core/util/data.util';
import { getCurrentDateString } from 'src/app/core/util/date.util';
import { CourseDialogService } from 'src/app/shared/dialog/course-dialog/course-dialog.service';
import { CourseRateDialogComponent } from 'src/app/shared/dialog/course-dialog/course-rate-dialog/course-rate-dialog.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ReportProblemDialogComponent } from 'src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component';
import { ContentType } from 'src/constant/app.constant';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.scss']
})
export class MyCourseComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private courseService: CourseService,
    private userCourseService: UserCourseService,
    private curriculumService: CurriculumService,
    private courseDialogService: CourseDialogService,
    private excelService: ExcelService,
    private snackBar: MatSnackBar,
  ) { }

  CourseStatus = CourseStatus;
  PageIsLoading = true;
  StatusFilterForm = new FormControl(-1);
  List = new BehaviorSubject<Course[]>([]);
  FilteredList = combineLatest([
    this.StatusFilterForm.valueChanges.pipe(startWith(-1)),
    this.List.pipe(
      map((data) => sortItems(data))
    )
  ]).pipe(
    map(
      ([StatusFilter, List]) => {
        switch (StatusFilter) {
          case -1:
            return List;
            break;
          case 1:
            return List.filter(e => e.Status === CourseStatus.Completed);
            break;
          case 0:
            return List.filter(e => e.Status === CourseStatus.Pending);
            break;
          default:
            return List;
        }
      }
    ),
  );


  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.PageIsLoading = true;
    const recordList = await this.userCourseService.getAll();
    const courseIdArr = recordList.map(e => e.CourseId);
    const [courseList, curriculumList] = await Promise.all([
      this.courseService.getItemsByIdArr(courseIdArr),
      this.curriculumService.getItemsByCourseIdArr(courseIdArr),
    ]);
    const MappedCourseList = courseList.map(e => {
      e.Record = this.userCourseService.getRecord(e.Id);
      e.CurriculumNameArr = curriculumList
        .filter(i => i.CoursesId.has(e.Id))
        .map(i => i.Title);
      return e;
    });
    this.List.next(MappedCourseList);
    this.PageIsLoading = false;
  }

  async exportReport() {
    const courseData = [
      ['Course Title', 'Curriculum', 'Status', 'Completion Date', 'Course Duration'],
      ...this.List.value.map(
        (e) => {
          const { Title, CurriculumNames, Status, Duration, CompletionDate } = e;
          return [
            Title,
            CurriculumNames,
            Status,
            Status === CourseStatus.Completed ? CompletionDate : '',
            Duration,
          ];
        }
      )
    ];
    this.excelService.exportArrayAsExcelFile(courseData, `My_Course_List_${getCurrentDateString()}`);
  }

  // #region component functions
  async moreInfoCourse(item: Course) {
    const updatedItem: Course = await this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
    if (updatedItem) {
      const { Record } = updatedItem;
      if (Record) {
        let message = 'Added to My Courses!';
        if (Record.Status === CourseStatus.Completed) {
          message = 'Marked as Complete!';
        }
        this.snackBar.open(message);
      }
    }
  }

  async launchCourse(item: Course) {
    const updatedItem = await this.courseDialogService.launchCourse(item);
  }

  async copyToClipBoard(Title: string) {
    await copyToClipBoard(Title, ContentType.COURSES);
    this.snackBar.open('Link Copied!');
  }

  reportProblem(item: Course) {
    this.dialogService.open(
      ReportProblemDialogComponent, {
        data: { item, itemType: 'Course' }
      }
    );
  }

  // #endregion

}

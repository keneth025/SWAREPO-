import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Exam, ExamStatus, UserExam } from 'src/app/core/data/model/exam.model';
import { CourseService } from 'src/app/core/data/service/course.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { convertToFilterMap, copyToClipBoard } from 'src/app/core/util/data.util';
import { ContentType } from 'src/constant/app.constant';
import { CourseDialogService } from '../course-dialog/course-dialog.service';
import { CourseRateDialogComponent } from '../course-dialog/course-rate-dialog/course-rate-dialog.component';
import { DialogService } from '../dialog.service';
import { ExaminationDialogComponent } from '../examination-dialog/examination-dialog.component';
import { ReportProblemDialogComponent } from '../report-problem-dialog/report-problem-dialog.component';



@Component({
  templateUrl: './curriculum-description-dialog.component.html',
  styleUrls: ['./curriculum-description-dialog.component.scss']
})
export class CurriculumDescriptionDialogComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private examService: ExamService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
    private courseDialogService: CourseDialogService,
    private dialogService: DialogService,
    private dialogRef: MatDialogRef<CurriculumDescriptionDialogComponent>,
    private snackbar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: { item: Curriculum },
  ) { }

  CourseStatus  = CourseStatus;
  ExamStatus    = ExamStatus;
  ContentType   = ContentType;

  ActiveItem: Curriculum = null;
  CurriculumIsLoading = true;
  CoursesIdArr: number[] = [];
  ExamsIdArr: number[] = [];
  CourseMap: { [Id: number]: Course };
  ExamMap: { [Id: number]: Exam };

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'curriculum-description']);
    if (this.data) {
      const { item } = this.data;
      this.ActiveItem = item;
      this.loadData();
    }
  }

  async loadData() {
    this.CurriculumIsLoading = true;
    if (this.ActiveItem) {
      if (
        !this.userCourseService.DataIsLoaded &&
        !this.userExamService.DataIsLoaded
      ) {
        await Promise.all([
          this.userCourseService.getAll(),
          this.userExamService.getAll(),
        ]);
      }
      const { CoursesId, ExamsId } = this.ActiveItem;
      this.CoursesIdArr = Array.from(CoursesId);
      this.ExamsIdArr = Array.from(ExamsId);
      const [
        CourseArr,
        ExamsArr,
      ] = await Promise.all([
        this.courseService.getItemsByIdArr(this.CoursesIdArr),
        this.examService.getItemsByIdArr(this.ExamsIdArr),
      ]);

      const recordedCourses = CourseArr.map(e => {
        e.Record = this.userCourseService.getRecord(e.Id);
        return e;
      });
      const recordedExams = ExamsArr.map(e => {
        e.Record = this.userExamService.getRecord(e.Id);
        return e;
      });

      this.CourseMap = convertToFilterMap(recordedCourses, 'Id');
      this.ExamMap = convertToFilterMap(recordedExams, 'Id');

      this.ActiveItem.DurationList = this.CoursesIdArr.map(e => this.CourseMap[e].Duration);
    }
    this.CurriculumIsLoading = false;
  }

  async copyToClipBoard(Title: string, contentType: ContentType) {
    await copyToClipBoard(Title, contentType);
    this.snackbar.open('Link Copied!');
  }

  reportProblem(item: Course | Exam, itemType: 'Course' | 'Exam') {
    this.dialogService.open(
      ReportProblemDialogComponent, {
        data: { item, itemType }
      }
    );
  }

  // #region Courses
  async moreInfoCourse(item: Course) {
    const updatedItem: Course = await this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
    if (updatedItem) {
      const { Record } = updatedItem;
      if (Record) {
        let message = 'Added to My Courses!';
        if (Record.Status === CourseStatus.Completed) {
          message = 'Marked as Complete!';
        }
        this.snackbar.open(message);
      }
    }
  }

  async launchCourse(item: Course) {
    await this.courseDialogService.launchCourse(item);
  }

  async addToMyCourse(item: Course) {
    const loaderDialog = this.dialogService.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserCourse({CourseId: item.Id});
    const updatedRecord = await this.userCourseService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackbar.open('Added to My Courses!');
  }

  async markCourseAsComplete(item: Course) {
    if (item) {
      const loaderDialog = this.dialogService.loaderDialog();
      const { Record } = item;
      const activeRecord = Record || new UserCourse({CourseId: item.Id});
      activeRecord.Status = CourseStatus.Completed;
      const updatedRecord = await this.userCourseService.save(activeRecord);
      item.Record = updatedRecord;
      loaderDialog.close();
      this.snackbar.open(`Course completed!`);
      const isRated = await this.dialogService.open(CourseRateDialogComponent, { data: { item } }).afterClosed().toPromise();
      if (isRated) {
        this.snackbar.open('Rated Successfully!');
      }
    }
  }

  async openCourseDescription(item: Course) {
    this.courseDialogService.courseDescriptionDialog(item);
  }
  // #endregion Courses


  // #region Exams
  async addToMyExam(item: Exam) {
    const loaderDialog = this.dialogService.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserExam({ExamId: item.Id});
    const updatedRecord = await this.userExamService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackbar.open('Added to My Exams!');
  }

  async launchExam(item: Exam) {
    this.dialogService.open(ExaminationDialogComponent, {
      data: { item }
    });
  }
  // #endregion Exams


  async addCoursesAndExams() {
    const loaderDialog = this.dialogService.loaderDialog();
    const { CoursesIdArr, ExamsIdArr } = this;
    const CoursePromises = CoursesIdArr.map(
      (e) => {
        const { Record } = this.CourseMap[e];
        const activeRecord = Record || new UserCourse({ CourseId: e });
        if (activeRecord.Id === -1) {
          return this.userCourseService.save(activeRecord)
            .then((res) => this.CourseMap[e].Record = res)
            .then(() => true);
        }
        return Promise.resolve(true);
      }
    );
    const ExamPromises = ExamsIdArr.map(
      (e) => {
        const { Record } = this.ExamMap[e];
        const activeRecord = Record || new UserExam({ ExamId: e });
        if (activeRecord.Id === -1) {
          return this.userExamService.save(activeRecord)
            .then((res) => this.ExamMap[e].Record = res)
            .then(() => true);
        }
        return Promise.resolve(true);
      }
    );

    await Promise.all([
      ...CoursePromises,
      ...ExamPromises
    ]);

    loaderDialog.close();

    this.snackbar.open('Added to My Courses and My Exams!');
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Exam, ExamStatus } from 'src/app/core/data/model/exam.model';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { copyToClipBoard, sortItems } from 'src/app/core/util/data.util';
import { getCurrentDateString } from 'src/app/core/util/date.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExaminationDialogComponent } from 'src/app/shared/dialog/examination-dialog/examination-dialog.component';
import { ReportProblemDialogComponent } from 'src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component';
import { ContentType } from 'src/constant/app.constant';

@Component({
  selector: 'app-my-exam',
  templateUrl: './my-exam.component.html',
  styleUrls: ['./my-exam.component.scss']
})
export class MyExamComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private dialogService: DialogService,
    private examService: ExamService,
    private userExamService: UserExamService,
    private curriculumService: CurriculumService,
    private excelService: ExcelService,
  ) { }

  ExamStatus = ExamStatus;
  PageIsLoading = true;
  StatusFilterForm = new FormControl(-1);
  List = new BehaviorSubject<Exam[]>([]);
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
          case 0:
            return List.filter(e => e.Status === ExamStatus.NOT_YET_TAKEN);
            break;
          case 1:
            return List.filter(e => e.Status === ExamStatus.FAILED);
            break;
          case 2:
            return List.filter(e => e.Status === ExamStatus.PASSED);
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
    const recordList = await this.userExamService.getAll();
    const examIdArr = recordList.map(e => e.ExamId);
    const [examlist, curriculumList] = await Promise.all([
      this.examService.getItemsByIdArr(examIdArr),
      this.curriculumService.getItemsByExamIdArr(examIdArr),
    ]);
    const MappedCourseList = examlist.map(e => {
      e.Record = this.userExamService.getRecord(e.Id);
      e.CurriculumNameArr = curriculumList
        .filter(i => i.ExamsId.has(e.Id))
        .map(i => i.Title);
      return e;
    });
    this.List.next(MappedCourseList);
    this.PageIsLoading = false;
  }

  async exportReport() {
    const courseData = [
      ['Course Title', 'Curriculum', 'Status', 'Completion Date'],
      ...this.List.value.map(
        (e) => {
          const { Title, CurriculumNames, Status, CompletionDate } = e;
          return [
            Title,
            CurriculumNames,
            Status,
            Status === ExamStatus.PASSED ? CompletionDate : ''
          ];
        }
      )
    ];
    this.excelService.exportArrayAsExcelFile(courseData, `My_Exam_List_${getCurrentDateString()}`);
  }

  // #region component functions
  launch(item: Exam) {
    this.dialogService.open(ExaminationDialogComponent, { data: { item } });
  }

  async copyToClipBoard(Title: string) {
    await copyToClipBoard(Title, ContentType.EXAMS);
    this.snackBar.open('Link Copied!');
  }

  reportProblem(item: Exam) {
    this.dialogService.open(
      ReportProblemDialogComponent, {
        data: { item, itemType: 'Exam' }
      }
    );
  }
  // #endregion
}

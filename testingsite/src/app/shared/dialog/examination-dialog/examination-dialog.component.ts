import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Course, CourseStatus } from 'src/app/core/data/model/course.model';
import { Exam, ExamStatus, Question, QuestionType, UserExam } from 'src/app/core/data/model/exam.model';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { CourseDialogService } from '../course-dialog/course-dialog.service';
import { DialogService } from '../dialog.service';

@Component({
  templateUrl: './examination-dialog.component.html',
  styleUrls: ['./examination-dialog.component.scss'],
})
export class ExaminationDialogComponent implements OnInit {

  constructor(
    private examService: ExamService,
    private courseService: CourseService,
    private curriculumService: CurriculumService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
    private dialog: DialogService,
    private courseDialogService: CourseDialogService,
    public dialogRef: MatDialogRef<ExaminationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { item: Exam },
  ) { }

  @ViewChild('examStepper') private examStepper: MatStepper;
  QuestionType = QuestionType;
  CourseStatus = CourseStatus;
  ExamStatus = ExamStatus;
  ActiveItem: Exam = null;
  ExamIsLoading = true;
  ExamIsSubmitted = false;
  CurrentQuestionIdx = 0;
  QuestionCount = 0;
  QuestionList: Question[] = [];
  RelatedCourses: Course[] = [];

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
    if (this.data) {
      this.ActiveItem = this.data.item;
      this.loadData();
    }
  }

  async loadData() {
    const { ActiveItem } = this;
    const CourseIds = Array.from(ActiveItem.RelatedCoursesId);
    this.ExamIsLoading = true;
    const [
      RelatedCourses,
      RelatedCurriculum,
      QuestionList,
    ] = await Promise.all([
      this.courseService.getItemsByIdArr(CourseIds),
      this.curriculumService.getItemsByCourseIdArr(CourseIds),
      this.examService.getQuestionsAndAnswers(ActiveItem.Id),
    ]);
    console.log(QuestionList);
    this.RelatedCourses = RelatedCourses.map(
      e => {
        e.Record = this.userCourseService.getRecord(e.Id);
        e.CurriculumNameArr = RelatedCurriculum.filter(i => i.CoursesId.has(e.Id)).map(i => i.Title);
        return e;
      }
    );
    this.QuestionList = QuestionList;
    this.QuestionCount = this.QuestionList.length;
    this.ExamIsLoading = false;
  }

  async openCourseDescription(item: Course) {
    this.courseDialogService.courseDescriptionDialog(item);
  }

  async launchCourse(item: Course) {
    this.courseDialogService.launchCourse(item);
  }

  async saveExam() {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Record } = this.ActiveItem;
    const Request = Record || new UserExam({ ExamId: Id });
    const UpdatedData = await this.userExamService.save(Request);
    this.ActiveItem.Record = UpdatedData;
    loaderDialog.close();
  }

  async submitExam() {
    const promptDialog = this.dialog.promptDialog(
      'Submit Exam',
      `Are you sure you want to submit your answers?`,
      'Submit',
      'Go back',
    );

    const proceed = await promptDialog.afterClosed().toPromise();
    if (proceed) {
      await this.computeScore();
    }
  }

  async computeScore() {
    this.ExamIsSubmitted = true;
    const loadingDialog = this.dialog.loaderDialog();
    const { QuestionList, QuestionCount } = this;
    const score = QuestionList.filter(e => e.IsCorrect()).length;
    const percentageScore = Math.round((score / QuestionCount) * 10000) / 100;
    const { Id, PassingRate, Record } = this.ActiveItem;
    const Request = Record || new UserExam({
      ExamId: Id,
      PassingScore: PassingRate,
    });
    Request.Score = percentageScore;
    Request.IsTaken = true;
    Request.Attempts += 1;
    const UpdatedData = await this.userExamService.save(Request);
    this.ActiveItem.Record = UpdatedData;
    loadingDialog.close();
    this.examStepper.next();
  }

  async cancelExam() {
    const { ExamIsSubmitted, ActiveItem } = this;
    if (!ExamIsSubmitted) {
      const promptDialog = this.dialog.promptDialog(
        ActiveItem.Title,
        `Your exam will not be recorded. Proceed?`,
        'Yes',
        'No',
      );

      const proceed = await promptDialog.afterClosed().toPromise();
      if (proceed) {
        this.dialogRef.close();
      }
    } else {
      this.closeDialog();
    }
  }

  closeDialog() {
    this.dialogRef.close(this.ActiveItem);
  }

}

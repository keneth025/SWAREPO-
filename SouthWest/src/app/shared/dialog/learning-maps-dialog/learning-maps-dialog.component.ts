import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Exam, ExamStatus, UserExam } from 'src/app/core/data/model/exam.model';
import { Role, UserRole } from 'src/app/core/data/model/role.model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { convertToFilterMap, copyToClipBoard } from 'src/app/core/util/data.util';
import { ContentType } from 'src/constant/app.constant';
import { CourseDialogService } from '../course-dialog/course-dialog.service';
import { CourseRateDialogComponent } from '../course-dialog/course-rate-dialog/course-rate-dialog.component';
import { CurriculumDescriptionDialogComponent } from '../curriculum-description-dialog/curriculum-description-dialog.component';
import { DialogService } from '../dialog.service';
import { ExaminationDialogComponent } from '../examination-dialog/examination-dialog.component';
import { ReportProblemDialogComponent } from '../report-problem-dialog/report-problem-dialog.component';


@Component({
  templateUrl: './learning-maps-dialog.component.html',
  styleUrls: ['./learning-maps-dialog.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)', transformOrigin: 'center center' })),
      state('expanded', style({ transform: 'rotate(180deg)', transformOrigin: 'center center' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class LearningMapsDialogComponent implements OnInit {

  CourseStatus  = CourseStatus;
  ExamStatus    = ExamStatus;
  ContentType   = ContentType;

  ActiveItem: Role = null;
  RoleIsLoading = true;
  CurriculumIdArr: number[] = [];
  CoursesIdArr: number[] = [];
  ExamsIdArr: number[] = [];
  RequiredCurriculumIdArr: number[] = [];
  RequiredCourseIdArr: number[] = [];
  RequiredExamIdArr: number[] = [];
  InitialRecomendedCurriculumIdArr: number[] = [];
  InitialRecomendedCourseIdArr: number[] = [];
  InitialRecomendedExamIdArr: number[] = [];
  RecomendedCurriculumIdArr: number[] = [];
  RecomendedCourseIdArr: number[] = [];
  RecomendedExamIdArr: number[] = [];
  CurriculumMap: { [Id: number]: Curriculum } = {};
  CourseMap: { [Id: number]: Course };
  ExamMap: { [Id: number]: Exam };

  constructor(
    private dialog: DialogService,
    private snackBar: MatSnackBar,
    private courseDialogService: CourseDialogService,
    private curriculumService: CurriculumService,
    private courseService: CourseService,
    private examService: ExamService,
    private accountService: AccountService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
    private userRoleService: UserRoleService,
    private dialogRef: MatDialogRef<LearningMapsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { item: Role },
  ) { }

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
    if (this.data) {
      const { item } = this.data;
      this.ActiveItem = item;
      this.loadData();
    }
  }

  async loadData() {
    this.CoursesIdArr = [];
    this.ExamsIdArr = [];
    this.RoleIsLoading = true;
    if (this.ActiveItem) {
      if (
        !this.userCourseService.DataIsLoaded ||
        !this.userExamService.DataIsLoaded ||
        !this.userRoleService.DataIsLoaded
      ) {
        await Promise.all([
          this.userCourseService.getAll(),
          this.userExamService.getAll(),
          this.userRoleService.getAll(),
        ]);
      }

      this.ActiveItem.Record = this.userRoleService.getRecord(this.ActiveItem.Id);

      const {
        CurriculaId,
        CoursesId,
        ExamsId,
      } = this.ActiveItem;


      const CurriculaIdArr = Array.from(
        new Set([
          ...Array.from(CurriculaId)
        ])
      );

      const CurriculaArr = await this.curriculumService.getItemsByIdArr(CurriculaIdArr);
      this.CurriculumMap = convertToFilterMap(CurriculaArr);

      // #region Required Items
      const CurriculumCoursesIdArr: number[] = [];
      const CurriculumExamsIdArr: number[] = [];


      for (const Id of CurriculaIdArr) {
        if (!this.CurriculumMap[Id]) {
          console.log(`[Learning Maps Dialog]: Curriculum Id not found (ID: ${Id})`);
          continue;
        }
        const { CoursesId: CurriculumCourseIds, ExamsId: CurriculumExamIds } = this.CurriculumMap[Id];
        CurriculumCoursesIdArr.push(...Array.from(CurriculumCourseIds));
        CurriculumExamsIdArr.push(...Array.from(CurriculumExamIds));
      }

      const CourseIdArr = [
        ...CurriculumCoursesIdArr,
        ...Array.from(CoursesId)
      ];

      const ExamIdArr = [
        ...CurriculumExamsIdArr,
        ...Array.from(ExamsId),
      ];

      const CourseIdSet = new Set(CourseIdArr);
      const ExamIdSet = new Set(ExamIdArr);
      // #endregion Required Items

      const OverAllCourseIdSet = CourseIdSet;

      const OverAllExamIdSet = ExamIdSet;

      const [ CourseArr, ExamArr ] = await Promise.all([
        this.courseService.getItemsByIdArr(Array.from(OverAllCourseIdSet)),
        this.examService.getItemsByIdArr(Array.from(OverAllExamIdSet)),
      ]);

      this.CourseMap = convertToFilterMap(CourseArr);
      this.ExamMap = convertToFilterMap(ExamArr);

      // #region Required Items
      const CurriculumCoursesIdSet = new Set(CurriculumCoursesIdArr);
      const CurriculumExamsIdSet = new Set(CurriculumExamsIdArr);

      this.CurriculumIdArr = CurriculaIdArr;
      this.CoursesIdArr = Array.from(CourseIdSet);
      this.ExamsIdArr = Array.from(ExamIdSet);

      const Curricula = CurriculaIdArr;
      const FilteredCourses = this.CoursesIdArr
        .filter(e => !CurriculumCoursesIdSet.has(e));
      const FilteredExams = this.ExamsIdArr
        .filter(e => !CurriculumExamsIdSet.has(e));

      this.RequiredCurriculumIdArr = Curricula;
      this.RequiredCourseIdArr = FilteredCourses;
      this.RequiredExamIdArr = FilteredExams;
      // #endregion Required Items

      for (const CurriculumId of CurriculaIdArr) {
        const { CoursesId: TempCourseIds } = this.CurriculumMap[CurriculumId];
        const TempDurationArr = Array.from(TempCourseIds).map(e => {
          if (this.CourseMap[e]) {
            return this.CourseMap[e].Duration;
          }
          return '';
        });
        this.CurriculumMap[CurriculumId].DurationList = TempDurationArr;
      }

      this.ActiveItem.DurationList = [
        ...this.RequiredCurriculumIdArr.map(e => this.CurriculumMap[e].TotalDuration),
        ...this.RequiredCourseIdArr.map(e => this.CourseMap[e].Duration),
      ];
    }
    this.refreshData();
    this.RoleIsLoading = false;
  }

  async copyToClipBoard(Title: string, contentType: ContentType) {
    await copyToClipBoard(Title, contentType);
    this.snackBar.open('Link Copied!');
  }

  reportProblem(item: Course | Exam, itemType: 'Course' | 'Exam') {
    this.dialog.open(
      ReportProblemDialogComponent, {
        data: { item, itemType }
      }
    );
  }

  async launchCurriculum(item: Curriculum) {
    await this.dialog.open(CurriculumDescriptionDialogComponent, {
      data: { item }
    }).afterClosed().toPromise();
    this.refreshData();
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
        this.snackBar.open(message);
      }
    }
    this.refreshData();
  }

  async launchCourse(item: Course) {
    await this.courseDialogService.launchCourse(item);
    this.refreshData();
  }

  async addToMyCourse(item: Course) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserCourse({CourseId: item.Id});
    const updatedRecord = await this.userCourseService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Courses!');
    this.refreshData();
  }

  async markCourseAsComplete(item: Course) {
    if (item) {
      const loaderDialog = this.dialog.loaderDialog();
      const { Record } = item;
      const activeRecord = Record || new UserCourse({CourseId: item.Id});
      activeRecord.Status = CourseStatus.Completed;
      const updatedRecord = await this.userCourseService.save(activeRecord);
      item.Record = updatedRecord;
      loaderDialog.close();
      this.snackBar.open(`Course completed!`);
      this.refreshData();
      const isRated = await this.dialog.open(CourseRateDialogComponent, { data: { item } }).afterClosed().toPromise();
      if (isRated) {
        this.snackBar.open('Rated Successfully!');
      }
    }
  }
  // #endregion Courses


  // #region Exam
  async launchExam(item: Exam) {
    await this.dialog.open(ExaminationDialogComponent, {
      data: { item }
    }).afterClosed().toPromise();
    this.refreshData();
  }

  async addToMyExam(item: Exam) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserExam({ExamId: item.Id});
    const updatedRecord = await this.userExamService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Exams!');
    this.refreshData();
  }
  // #endregion

  async addCoursesAndExams() {
    const loaderDialog = this.dialog.loaderDialog();
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

    this.snackBar.open('Added to My Courses and My Exams!');
  }

  async addCurrentRole() {
    const loader = this.dialog.loaderDialog();
    let Record = this.ActiveItem.Record || new UserRole({ RoleId: this.ActiveItem.Id });
    Record = await this.userRoleService.save(Record);
    this.ActiveItem.Record = Record;
    loader.close();
    this.snackBar.open('Added as Current Role.');
  }

  refreshData() {
    const OverAllCurriculumId = [...this.RequiredCurriculumIdArr, ...this.InitialRecomendedCurriculumIdArr];
    const OverAllCourseId = [...this.RequiredCourseIdArr, ...this.InitialRecomendedCourseIdArr];
    const OverAllExamId = [...this.RequiredExamIdArr, ...this.InitialRecomendedExamIdArr];
    for (const Id of OverAllCourseId) {
      this.CourseMap[Id].Record = this.userCourseService.getRecord(Id);
    }
    for (const Id of OverAllExamId) {
      this.ExamMap[Id].Record = this.userExamService.getRecord(Id);
    }
    for (const Id of OverAllCurriculumId) {
      this.CurriculumMap[Id].CompletionPercentage = this.computeCurriculumScore(this.CurriculumMap[Id]);
    }
  }

  computeCurriculumScore(item: Curriculum): number {
    const { CoursesId, ExamsId } = item;
    const CoursesIdArr = Array.from(CoursesId);
    const ExamsIdArr = Array.from(ExamsId);
    const CourseCompletedCount = CoursesIdArr.filter(e => this.CourseMap[e].Status === CourseStatus.Completed).length;
    const ExamCompletedCount = ExamsIdArr.filter(e => this.ExamMap[e].Status === ExamStatus.PASSED).length;
    const TotalCount = CoursesIdArr.length + ExamsIdArr.length;
    let CompletedCount = CourseCompletedCount + ExamCompletedCount;
    let Progress = 0;

    if (TotalCount === 0) {
      CompletedCount = 0;
      Progress = 0;
    } else {
      Progress = CompletedCount === 0 ? 0 : Math.round((CompletedCount / TotalCount) * 100);
    }
    return Progress;
  }

}

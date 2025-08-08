import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, tap, map, startWith, debounceTime, mapTo } from 'rxjs/operators';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Exam, ExamStatus, UserExam } from 'src/app/core/data/model/exam.model';
import { Role } from 'src/app/core/data/model/role.model';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { OthersService } from 'src/app/core/data/service/others.service';
import { RoleService } from 'src/app/core/data/service/role.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { convertToFilterMap, copyToClipBoard, searchString } from 'src/app/core/util/data.util';
import { getCurrentDateString } from 'src/app/core/util/date.util';
import { CourseDialogService } from 'src/app/shared/dialog/course-dialog/course-dialog.service';
import { CourseRateDialogComponent } from 'src/app/shared/dialog/course-dialog/course-rate-dialog/course-rate-dialog.component';
import { CurriculumDescriptionDialogComponent } from 'src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExaminationDialogComponent } from 'src/app/shared/dialog/examination-dialog/examination-dialog.component';
import { ReportProblemDialogComponent } from 'src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component';
import { ContentType } from 'src/constant/app.constant';

@Component({
  templateUrl: './my-progress.component.html',
  styleUrls: ['./my-progress.component.scss'],
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
export class MyProgressComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private dialog: DialogService,
    private snackBar: MatSnackBar,
    private dropdownService: DropdownService,
    private otherService: OthersService,
    private excelService: ExcelService,
    private accountService: AccountService,
    private userProfileService: UserProfileService,
    private courseDialogService: CourseDialogService,
    private userRoleService: UserRoleService,
    private roleService: RoleService,
    private curriculumService: CurriculumService,
    private courseService: CourseService,
    private examService: ExamService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
  ) { }

  ContentType = ContentType;

  CourseStatus = CourseStatus;
  ExamStatus = ExamStatus;

  PageIsLoading = true;
  DataIsLoading = true;

  IsOtherUser = false;
  ProfileNotFound = false;
  private ActiveUserProfile: UserProfile = null;
  private ActiveRoleId: number = null;

  KeyWordForm = new FormControl('');
  CurriculumForm = new FormControl([]);
  StatusForm = new FormControl([]);

  CurriculumList = new BehaviorSubject<Curriculum[]>([]);

  ActiveRoleIdx = 0;
  HasRole = false;
  RolesList: Role[] = [];
  SelectedRole = new BehaviorSubject<Role>(null);
  SelectedRoleObs = this.SelectedRole.pipe(
    tap(() => this.DataIsLoading = true),
    debounceTime(250),
    switchMap((data) => this.LoadData(data)),
    tap(
      ({
        CurriculumList,
        CourseList,
        ExamList,
      }) => {
        this.resetScore();
        this.AssignedCurriculumList.next(CurriculumList);
        this.AssignedCourseList.next(CourseList);
        this.AssignedExamList.next(ExamList);

        this.TotalCount = this.RequiredCourseId.length + this.RequiredExamId.length;
        this.computeScore();
        this.DataIsLoading = false;
      }
    ),
    mapTo(''),
  );

  RequiredCurriculumId: number[] = [];
  RequiredCourseId: number[] = [];
  RequiredExamId: number[] = [];

  RecomendedCurriculumId: number[] = [];
  RecomendedCourseId: number[] = [];
  RecomendedExamId: number[] = [];

  CompletedCount = 0;
  TotalCount = 0;
  Progress = 0;
  RoleMap: { [Id: number]: Role } = {};
  CurriculumMap: { [Id: number]: Curriculum } = {};
  CourseMap: { [Id: number]: Course } = {};
  ExamMap: { [Id: number]: Exam } = {};

  // #region Filtering Data

  AssignedCurriculumList = new BehaviorSubject<number[]>([]);
  FilteredAssignedCurriculumList = combineLatest([
    this.KeyWordForm.valueChanges.pipe<string>(startWith('')),
    // #region Filtered by status
    combineLatest([
      this.StatusForm.valueChanges.pipe<(ExamStatus|CourseStatus)[]>(startWith([])),
      // #region Filtered By Curriculum
      combineLatest([
        this.CurriculumForm.valueChanges.pipe<Curriculum[]>(startWith([])),
        this.AssignedCurriculumList,
      ]).pipe(
        map(
          ([ SelectedFilterCurriculum, List ]) => {
            if (SelectedFilterCurriculum.length === 0) { return List; }
            return List.filter(
              (e) => {
                const { CoursesId, ExamsId } = this.CurriculumMap[e];
                const CoursesIdArr = Array.from(CoursesId);
                const ExamsIdArr = Array.from(ExamsId);
                return SelectedFilterCurriculum.some(
                  (curriculum) => CoursesIdArr.some(i => curriculum.CoursesId.has(i)) ||
                    ExamsIdArr.some(i => curriculum.ExamsId.has(i))
                );
              }
            );
          }
        )
      )
      // #endregion
    ]).pipe(
      map(
        ([StatusList, List]) => {
          if (StatusList.length === 0) { return List; }
          return List.filter(
            e => {
              const { CoursesId: CourseIdSet, ExamsId: ExamIdSet } = this.CurriculumMap[e];
              const CourseIdArr = Array.from(CourseIdSet);
              const ExamIdArr = Array.from(ExamIdSet);
              return CourseIdArr.some(i => StatusList.includes(this.CourseMap[i].Status)) ||
                ExamIdArr.some(i => StatusList.includes(this.ExamMap[i].Status));
            }
          );
        }
      )
    )
    // #endregion
  ]).pipe(
    map(
      ([keyword, List]) => {
        const trimmedKeyword = keyword.trim();
        if (!trimmedKeyword) { return List; }
        return List.filter(
          (e) => {
            const curriculumObj = this.CurriculumMap[e];
            const { Title, CoursesId, ExamsId } = curriculumObj;
            const CourseIdArr = Array.from(CoursesId);
            const ExamsIdArr = Array.from(ExamsId);
            return searchString(Title, keyword) ||
              CourseIdArr.some(i => searchString(this.CourseMap[i].Title, keyword)) ||
              ExamsIdArr.some(i => searchString(this.ExamMap[i].Title, keyword));
          }
        );
      }
    )
  );


  AssignedCourseList = new BehaviorSubject<number[]>([]);
  FilteredAssignedCourseList = combineLatest([
    this.KeyWordForm.valueChanges.pipe<string>(startWith('')),
    // #region Filtered by status
    combineLatest([
      this.StatusForm.valueChanges.pipe<(ExamStatus|CourseStatus)[]>(startWith([])),
      // #region Filtered By Curriculum
      combineLatest([
        this.CurriculumForm.valueChanges.pipe<Curriculum[]>(startWith([])),
        this.AssignedCourseList,
      ]).pipe(
        map(
          ([ SelectedFilterCurriculum, List ]) => {
            if (SelectedFilterCurriculum.length === 0) { return List; }
            return List.filter(
              (e) => SelectedFilterCurriculum
                .some((curriculum) => curriculum.CoursesId.has(e))
            );
          }
        )
      )
      // #endregion Filtered By Curriculum
    ]).pipe(
      map(
        ([StatusList, List]) => {
          if (StatusList.length === 0) { return List; }
          return List.filter(
            e => StatusList.includes(this.CourseMap[e].Status)
          );
        }
      )
    )
    // #endregion
  ]).pipe(
    map(
      ([keyword, List]) => {
        const trimmedKeyword = keyword.trim();
        if (!trimmedKeyword) { return List; }
        return List.filter(
          (e) => searchString(this.CourseMap[e].Title, keyword)
        );
      }
    )
  );


  AssignedExamList = new BehaviorSubject<number[]>([]);
  FilteredAssignedExamList = combineLatest([
    this.KeyWordForm.valueChanges.pipe<string>(startWith('')),
    // #region Filtered by status
    combineLatest([
      this.StatusForm.valueChanges.pipe<(ExamStatus|CourseStatus)[]>(startWith([])),
      // #region Filtered By Curriculum
      combineLatest([
        this.CurriculumForm.valueChanges.pipe<Curriculum[]>(startWith([])),
        this.AssignedExamList,
      ]).pipe(
        map(
          ([ SelectedFilterCurriculum, List ]) => {
            if (SelectedFilterCurriculum.length === 0) { return List; }
            return List.filter(
              (e) => SelectedFilterCurriculum
                .some((curriculum) => curriculum.ExamsId.has(e))
            );
          }
        )
      ),
      // #endregion
    ]).pipe(
      map(
        ([StatusList, List]) => {
          if (StatusList.length === 0) { return List; }
          return List.filter(
            e => StatusList.includes(this.ExamMap[e].Status)
          );
        }
      )
    )
    // #endregion
  ]).pipe(
    map(
      ([keyword, List]) => {
        const trimmedKeyword = keyword.trim();
        if (!trimmedKeyword) { return List; }
        return List.filter(
          (e) => searchString(this.ExamMap[e].Title, keyword)
        );
      }
    )
  );
  // #endregion

  ngOnInit() {
    this.initialLoad();
  }

  ngOnDestroy() {
    this.userCourseService.unsetActiveUser();
    this.userExamService.unsetActiveUser();
    this.userRoleService.unsetActiveUser();
  }

  async initialLoad() {
    this.PageIsLoading = true;
    await this.loadProfile();
    if (!this.ProfileNotFound) {
      await Promise.all([ this.loadRoles(), this.loadFilters() ]);
    }
    this.PageIsLoading = false;
  }

  async loadProfile() {
    const QueryParamRoleId = this.activatedRoute.snapshot.queryParamMap.get('roleId');
    const ParamProfileId = this.activatedRoute.snapshot.paramMap.get('Id');
    if (QueryParamRoleId) {
      this.ActiveRoleId = parseInt(QueryParamRoleId, 10);
    }
    if (ParamProfileId) {
      const ProfileId = parseInt(ParamProfileId, 10);
      this.IsOtherUser = true;
      this.ActiveUserProfile = await this.userProfileService.getItemByUserId(ProfileId);
      if (!this.ActiveUserProfile) {
        this.ProfileNotFound = true;
      } else {
        const { Id } = this.ActiveUserProfile.User ?? {};
        
     if (this.ActiveUserProfile.User) {
      const { Id } = this.ActiveUserProfile.User;
      // use Id here
      } else {
       // handle the null case, maybe show a message or skip logic
      }

        this.userCourseService.setActiveUser(Id);
        this.userRoleService.setActiveUser(Id);
        this.userExamService.setActiveUser(Id);
      }
    } else {
      this.ActiveUserProfile = await this.userProfileService.getItemByUserId(this.accountService.account.Id);
    }
  }

  async loadRoles() {
    const userRoleList = await this.userRoleService.getAll();

    const RolesId = userRoleList.map(e => e.RoleId);
    const RoleSet = new Set(RolesId);
    const RolesArr = await this.roleService.getItemsByIdArr(Array.from(RoleSet));
    this.RolesList = RolesArr;
    if (this.ActiveRoleId) {
      this.ActiveRoleIdx = this.RolesList.findIndex(e => e.Id === this.ActiveRoleId);
    }
    this.SelectedRole.next(this.RolesList[this.ActiveRoleIdx]);
    this.HasRole = this.RolesList.length > 0;
  }

  async loadFilters() {
    const curriculumList = await this.curriculumService.getAll();
    this.CurriculumMap = convertToFilterMap(curriculumList);
    this.CurriculumList.next(curriculumList);
  }

  async LoadData(role: Role) {
    this.RequiredCourseId = [];
    this.RequiredExamId = [];

    if (!role) {
      return {
        CurriculumList: [],
        CourseList: [],
        ExamList: [],
        RecomendedCurriculumList: [],
        RecomendedCourseList: [],
        RecomendedExamList: [],
      };
    }

    this.DataIsLoading = true;
    await Promise.all([
      this.userCourseService.getAll(),
      this.userExamService.getAll(),
    ]);
    const {
      CurriculaId,
      CoursesId,
      ExamsId,
    } = role;

    const CurriculaIdArr = Array.from(CurriculaId);

    const CurriculumCoursesIdArr: number[] = [];
    const CurriculumExamsIdArr: number[] = [];

    // #region Required Items
    const CurriculumIdSet = new Set(CurriculaIdArr);
    for (const Id of Array.from(CurriculumIdSet)) {
      if (!this.CurriculumMap[Id]) {
        console.log(`[My Progress]: Curriculum Id not found (ID: ${Id})`);
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
      ...Array.from(ExamsId)
    ];

    const CourseIdSet = new Set(CourseIdArr);
    const ExamIdSet = new Set(ExamIdArr);
    // #endregion Required Items

    const OverAllCourseIdSet = CourseIdSet;

    const OverAllExamIdSet = ExamIdSet;

    let [ CourseArr, ExamArr ] = await Promise.all([
      this.courseService.getItemsByIdArr(Array.from(OverAllCourseIdSet)),
      this.examService.getItemsByIdArr(Array.from(OverAllExamIdSet)),
    ]);

    CourseArr = CourseArr.map(
      e => {
        e.CurriculumNameArr = this.CurriculumList.value
          .filter(i => i.CoursesId.has(e.Id))
          .map(i => i.Title);
        return e;
      }
    );

    ExamArr = ExamArr.map(
      e => {
        e.CurriculumNameArr = this.CurriculumList.value
          .filter(i => i.ExamsId.has(e.Id))
          .map(i => i.Title);
        return e;
      }
    );

    this.CourseMap = convertToFilterMap(CourseArr);
    this.ExamMap = convertToFilterMap(ExamArr);

    // #region Required Items
    const CurriculumCoursesIdSet = new Set(CurriculumCoursesIdArr);
    const CurriculumExamsIdSet = new Set(CurriculumExamsIdArr);

    this.RequiredCurriculumId = Array.from(CurriculumIdSet);
    this.RequiredCourseId = Array.from(CourseIdSet);
    this.RequiredExamId = Array.from(ExamIdSet);

    const Curricula = Array.from(CurriculumIdSet);
    const FilteredCourses = this.RequiredCourseId.filter(e => !CurriculumCoursesIdSet.has(e));
    const FilteredExams = this.RequiredExamId.filter(e => !CurriculumExamsIdSet.has(e));
    // #endregion Required Items

    for (const CurriculumId of Curricula) {
      const { CoursesId: TempCourseIds } = this.CurriculumMap[CurriculumId];
      const TempDurationArr = Array.from(TempCourseIds).map(e => this.CourseMap[e].Duration);
      this.CurriculumMap[CurriculumId].DurationList = TempDurationArr;
    }

    this.refreshData();

    return {
      CurriculumList: Curricula,
      CourseList: FilteredCourses,
      ExamList: FilteredExams,
    };
  }

  updatePage() {
    this.refreshData();
    this.computeScore();
  }

  refreshData() {
    const OverAllCurriculumId = [...this.RequiredCurriculumId, ...this.RecomendedCurriculumId];
    const OverAllCourseId = [...this.RequiredCourseId, ...this.RecomendedCourseId];
    const OverAllExamId = [...this.RequiredExamId, ...this.RecomendedExamId];
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

  resetScore() {
    this.CompletedCount = 0;
    this.TotalCount = 0;
    this.Progress = 0;
  }

  computeScore() {
    const CourseCompletedCount = this.RequiredCourseId.filter(e => this.CourseMap[e].Status === CourseStatus.Completed).length;
    const ExamCompletedCount = this.RequiredExamId.filter(e => this.ExamMap[e].Status === ExamStatus.PASSED).length;
    this.CompletedCount = CourseCompletedCount + ExamCompletedCount;
    const { CompletedCount, TotalCount } = this;
    if (TotalCount === 0) {
      this.CompletedCount = 0;
      this.Progress = 0;
    } else {
      this.Progress = CompletedCount === 0 ? 0 : Math.round((CompletedCount / TotalCount) * 100);
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

  changeRole(isNext = false) {
    let updatedIdx = false;
    if (isNext) {
      if (this.ActiveRoleIdx < (this.RolesList.length - 1)) {
        this.ActiveRoleIdx += 1;
        updatedIdx = true;
      }
    } else {
      if (this.ActiveRoleIdx > 0) {
        this.ActiveRoleIdx -= 1;
        updatedIdx = true;
      }
    }
    if (updatedIdx) {
      const { ActiveRoleIdx, RolesList } = this;
      this.SelectedRole.next(RolesList[ActiveRoleIdx]);
    }
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

  // #region Curriculum
  async moreInfoCurriculum(item: Curriculum) {
    await this.dialog.open(CurriculumDescriptionDialogComponent, { data: { item } })
      .afterClosed()
      .toPromise();
    this.updatePage();
  }
  // #endregion

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
    this.updatePage();
  }

  async launchCourse(item: Course) {
    await this.courseDialogService.launchCourse(item);
    this.updatePage();
  }

  async addToMyCourse(item: Course) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserCourse({CourseId: item.Id});
    const updatedRecord = await this.userCourseService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Courses!');
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
      const isRated = await this.dialog.open(CourseRateDialogComponent, { data: { item } }).afterClosed().toPromise();
      if (isRated) {
        this.snackBar.open('Rated Successfully!');
      }
    }
  }
  // #endregion Courses

  // #region Exam
  async launchExam(item: Exam) {
    this.dialog.open(ExaminationDialogComponent, { data: { item } });
    this.updatePage();
  }

  async addToMyExam(item: Exam) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserExam({ExamId: item.Id});
    const updatedRecord = await this.userExamService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Exams!');
    this.updatePage();
  }
  // #endregion

  async exportData() {
    const { User, Manager } = this.ActiveUserProfile;
    const SelectedRole = this.SelectedRole.value;
    const { HasRole, Progress } = this;
    const ProfileSection = [
      ['Name:', User.Title],
      ['Email Address:', User.EMail],
      ['People Manager:', Manager.Title],
      ['Role:', SelectedRole.Title],
      ['% Completion:', HasRole ? `${Progress}%` : 'N/A'],
    ];

    let CurriculumData: (string|number) [][] = [
      ['Curriculum'],
    ];

    for (const curriculumId of this.AssignedCurriculumList.value) {
      const { Title, CompletionPercentage, CoursesId, ExamsId } = this.CurriculumMap[curriculumId];
      let TempCurriculumData: (string|number) [][] = [
        [Title, '', '', '', `${CompletionPercentage}%`],
      ];
      const CourseIdArr = Array.from(CoursesId);
      const ExamIdArr = Array.from(ExamsId);

      if (CourseIdArr.length > 0) {
        TempCurriculumData = [
          ...TempCurriculumData,
          [''],
          ['Courses'],
          ...CourseIdArr.map(
            (courseId, idx) => {
              const { Title: CourseTitle, DurationString, Status, CompletionDate } = this.CourseMap[courseId];
              return [
                idx + 1,
                CourseTitle,
                DurationString,
                Status,
                Status === CourseStatus.Completed ? CompletionDate : '',
              ];
            }
          )
        ];
      }

      if (ExamIdArr.length > 0) {
        TempCurriculumData = [
          ...TempCurriculumData,
          [''],
          ['Exams'],
          ...ExamIdArr.map(
            (examId, idx) => {
              const { Title: ExamTitle, Status, CompletionDate } = this.ExamMap[examId];
              return [
                idx + 1,
                ExamTitle,
                '',
                Status,
                Status === ExamStatus.PASSED ? CompletionDate : '',
              ];
            }
          )
        ];
      }

      TempCurriculumData = [
        ...TempCurriculumData,
      ];

      CurriculumData = [
        ...CurriculumData,
        ...TempCurriculumData,
        [''],
        [''],
      ];
    }

    const CourseData = [
      ['Courses'],
      ['Course Title', 'Curriculum', 'Status', 'Completion Date', 'Course Duration'],
      ...this.AssignedCourseList.value.map(
        (courseId) => {
          const { Title, CurriculumNames, Status, CompletionDate, Duration } = this.CourseMap[courseId];
          return [
            Title,
            CurriculumNames,
            Status,
            Status === CourseStatus.Completed ? CompletionDate : '',
            Duration
          ];
        }
      )
    ];

    const ExamData = [
      ['Examination'],
      ['Exam Title', 'Curriculum', 'Status', 'Completion Date'],
      ...this.AssignedExamList.value.map(
        (examId) => {
          const { Title, CurriculumNames, Status, CompletionDate } = this.ExamMap[examId];
          return [
            Title, CurriculumNames, Status, Status === ExamStatus.PASSED ? CompletionDate : ''
          ];
        }
      )
    ];

    const ReportData = [
      ...ProfileSection,
      [''],
      ...CurriculumData,
      [''],
      ...ExamData,
      [''],
      ...CourseData,
    ];
    this.excelService.exportArrayAsExcelFile(ReportData, `MyProgress_${getCurrentDateString()}`);
  }

}

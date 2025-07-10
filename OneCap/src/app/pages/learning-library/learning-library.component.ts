import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PagedItemCollection } from '@pnp/sp/items';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, mergeScan, startWith, switchMap, tap } from 'rxjs/operators';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { LearningCategory, LearningSubCategory, RoleCategory, RoleSubCategory } from 'src/app/core/data/model/dropdown.model';
import { Exam, ExamStatus, UserExam } from 'src/app/core/data/model/exam.model';
import { Role, UserRole } from 'src/app/core/data/model/role.model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { RoleService } from 'src/app/core/data/service/role.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { convertToFilterMap, copyToClipBoard } from 'src/app/core/util/data.util';
import { CourseDialogService } from 'src/app/shared/dialog/course-dialog/course-dialog.service';
import { CurriculumDescriptionDialogComponent } from 'src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExaminationDialogComponent } from 'src/app/shared/dialog/examination-dialog/examination-dialog.component';
import { LearningMapsDialogComponent } from 'src/app/shared/dialog/learning-maps-dialog/learning-maps-dialog.component';
import { ReportProblemDialogComponent } from 'src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component';
import { ContentType } from 'src/constant/app.constant';




@Component({
  selector: 'app-learning-library',
  templateUrl: './learning-library.component.html',
  styleUrls: ['./learning-library.component.scss']
})
export class LearningLibraryComponent implements AfterViewInit {

  constructor(
    private accountService: AccountService,
    private userRoleService: UserRoleService,
    private userCourseService: UserCourseService,
    private userExamService: UserExamService,
    private roleService: RoleService,
    private curriculumService: CurriculumService,
    private courseService: CourseService,
    private examService: ExamService,
    private dropdownService: DropdownService,
    private activatedRoute: ActivatedRoute,
    private dialogService: DialogService,
    private courseDialogService: CourseDialogService,
    private snackBar: MatSnackBar,
  ) { }

  CourseStatus = CourseStatus;
  ExamStatus = ExamStatus;
  ContentType = ContentType;

  PageIsLoading = true;
  NextPageLoading = false;
  CourseCurriculumNameMap: { [CourseId: number]: string[] } = {};

  LearningCategoryMap: { [Id: number]: LearningCategory } = {};
  LearningSubCategoryMap: { [Id: number]: LearningSubCategory } = {};
  LearningCategoryList: LearningCategory[] = [];
  LearningSubCategoryList: LearningSubCategory[] = [];
  HoveredCategory: LearningCategory = null;
  ActiveSubCategoryList = new BehaviorSubject<LearningSubCategory[]>([]);

  RoleCategoryMap: { [Id: number]: RoleCategory } = {};
  RoleSubCategoryMap: { [Id: number]: RoleSubCategory } = {};
  RoleCategoryList: RoleCategory[] = [];

  RoleCategoryForm = new FormControl(null);
  RoleSubCategoryObs = combineLatest([
    this.RoleCategoryForm.valueChanges
  ]).pipe(
    map(([Category]) => {
      if (Category) {
        return (Category as RoleCategory).RoleSubCategoryList.map(e => e.Id);
      }
      return null;
    }),
    startWith(null as number[]),
  );

  CategoryForm = new FormControl(null);
  SubCategoryForm = new FormControl(null);
  SubCategoryObs = combineLatest([
    this.CategoryForm.valueChanges.pipe(
      tap(() => this.SubCategoryForm.setValue(null)),
    ),
    this.SubCategoryForm.valueChanges
  ]).pipe(
    map(([Category, SubCategory]) => {
      if (SubCategory) {
        return [SubCategory.Id];
      }
      if (Category) {
        return (Category as LearningCategory).SubCategoryList.map(e => e.Id);
      }
      return null;
    }),
    startWith(null as number[]),
  );

  SelectionSubCategoryObs = combineLatest([
    this.RoleSubCategoryObs,
    this.SubCategoryObs,
  ]).pipe(
    tap(() => this.CurriculumIsLoading = true),
    tap(() => this.CourseIsLoading = true),
    tap(() => this.ExamIsLoading = true),
    tap(() => this.LearningMapsIsLoading = true),
    debounceTime(250),
    map(
      ([RoleSubCategoryIds, SubCategoryIds]) => {
        if (RoleSubCategoryIds && !SubCategoryIds) {
          SubCategoryIds = [-1];
        }
        if (!RoleSubCategoryIds && SubCategoryIds) {
          RoleSubCategoryIds = [-1];
        }
        return {
          RoleSubCategoryIds,
          SubCategoryIds
        };
      }
    ),
    startWith(({RoleSubCategoryIds: null, SubCategoryIds: null}))
  );



  SearchQueryForm = new FormControl('');
  SearchQueryObs = this.SearchQueryForm.valueChanges.pipe(
    startWith(this.SearchQueryForm.value),
    tap(() => this.LearningMapsIsLoading = true),
    tap(() => this.CurriculumIsLoading = true),
    tap(() => this.CourseIsLoading = true),
    tap(() => this.ExamIsLoading = true),
    debounceTime(250),
  );
  ContentTypeForm = new FormControl(ContentType.ALL_TYPE);
  ContentTypeObs = this.ContentTypeForm.valueChanges.pipe(
    startWith(this.ContentTypeForm.value),
  );

  // #region Items Query

  // #region Learning Maps
  LearningMapsIsLoading = true;
  LearningMapsQuery = combineLatest([
    this.SearchQueryObs,
    this.SelectionSubCategoryObs,
  ]).pipe(
    switchMap(
      ([strQuery, SelectionSubCategoryIds]) => {
        let query = {};
        if (strQuery) {
          query = {
            ...query,
            ['Title']: strQuery,
          };
        }
        const { RoleSubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
        if (SubCategoryId) {
          query = {
            ...query,
            ['RoleSubCategoryId']: SubCategoryId
          };
        }
        return this.roleService.getPagedData(query);
      }
    ),
    map((res) => {
      const { results } = res;
      res.results = this.mapLearningMapsToRoleCategory(results);
      return res;
    }),
    tap(() => this.LearningMapsPageIdx.next(0)),
    tap(() => this.LearningMapsIsLoading = false),
  );
  LearningMapsPageIdx = new BehaviorSubject(0);
  LearningMapsPage = combineLatest([
    this.ContentTypeObs.pipe(tap(() => this.LearningMapsPageIdx.next(0))),
    this.LearningMapsPageIdx,
    this.LearningMapsQuery,
  ]).pipe(
    mergeScan(
      (acc, data) => {
        const [ContentTypeValue, idx, initialData] = data;
        const query = acc;
        if (idx === 0 || !query.hasNext) {
          const returnData = Object.assign(
            Object.create(
              Object.getPrototypeOf(initialData)
            ),
            initialData
          );
          const { results } = returnData;
          if (ContentTypeValue === ContentType.ALL_TYPE) {
            returnData.results = results.slice(0, 4);
          }
          return Promise.resolve(returnData);
        }
        this.NextPageLoading = true;
        return this.roleService.getNextPage(query).then(
          (pagedData) => {
            const { results } = pagedData;
            pagedData.results = [
              ...query.results,
              ...this.mapLearningMapsToRoleCategory(results),
            ];
            this.NextPageLoading = false;
            return pagedData;
          }
        );
      }, (null as PagedItemCollection<Role[]>)
    ),
    map((data) => data),
  );
  // #endregion Learning Maps

  // #region Curriculum
  CurriculumIsLoading = true;
  CurriculumQuery = combineLatest([
    this.SearchQueryObs,
    this.SelectionSubCategoryObs,
  ]).pipe(
    switchMap(
      ([strQuery, SelectionSubCategoryIds]) => {
        let query = {};
        if (strQuery) {
          query = {
            ...query,
            ['Title']: strQuery,
          };
        }
        const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
        if (SubCategoryId) {
          query = {
            ...query,
            ['LearningSubCategoryId']: SubCategoryId
          };
        }
        return this.curriculumService.getPagedData(query);
      }
    ),
    map((res) => {
      const { results } = res;
      res.results = this.mapCurriculumToSubCategory(results);
      return res;
    }),
    tap(() => this.CurriculumPageIdx.next(0)),
    tap(() => this.CurriculumIsLoading = false),
  );
  CurriculumPageIdx = new BehaviorSubject(0);
  CurriculumPage = combineLatest([
    this.ContentTypeObs.pipe(tap(() => this.CurriculumPageIdx.next(0))),
    this.CurriculumPageIdx,
    this.CurriculumQuery,
  ]).pipe(
    mergeScan(
      (acc, data) => {
        const [ContentTypeValue, idx, initialData] = data;
        const query = acc;
        if (idx === 0 || !query.hasNext) {
          const returnData = Object.assign(
            Object.create(
              Object.getPrototypeOf(initialData)
            ),
            initialData
          );
          const { results } = returnData;
          if (ContentTypeValue === ContentType.ALL_TYPE) {
            returnData.results = results.slice(0, 4);
          }
          return Promise.resolve(returnData);
        }
        this.NextPageLoading = true;
        return this.curriculumService.getNextPage(query).then(
          (pagedData) => {
            const { results } = pagedData;
            pagedData.results = [
              ...query.results,
              ...this.mapCurriculumToSubCategory(results),
            ];
            this.NextPageLoading = false;
            return pagedData;
          }
        );
      }, (null as PagedItemCollection<Curriculum[]>)
    ),
    map((data) => data),
  );
  // #endregion Curriculum

  // #region Course
  CourseIsLoading = true;
  CourseQuery = combineLatest([
    this.SearchQueryObs,
    this.SelectionSubCategoryObs,
  ]).pipe(
    switchMap(
      ([strQuery, SelectionSubCategoryIds]) => {
        let query = {};
        if (strQuery) {
          query = {
            ...query,
            ['Title|Tags']: strQuery,
          };
        }
        const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
        if (SubCategoryId) {
          query = {
            ...query,
            ['LearningSubCategoryId']: SubCategoryId
          };
        }
        return this.courseService.getPagedData(query);
      }
    ),
    map((res) => {
      const { results } = res;
      res.results = this.mapCoursesToRecords(results);
      return res;
    }),
    tap(() => this.CoursePageIdx.next(0)),
    tap(() => this.CourseIsLoading = false),
  );
  CoursePageIdx = new BehaviorSubject(0);
  CoursePage = combineLatest([
    this.ContentTypeObs.pipe(tap(() => this.CoursePageIdx.next(0))),
    this.CoursePageIdx,
    this.CourseQuery,
  ]).pipe(
    mergeScan(
      (acc, data) => {
        const [ContentTypeValue, idx, initialData] = data;
        const query = acc;
        if (idx === 0 || !query.hasNext) {
          const returnData = Object.assign(
            Object.create(
              Object.getPrototypeOf(initialData)
            ),
            initialData
          );
          const { results } = returnData;
          if (ContentTypeValue === ContentType.ALL_TYPE) {
            returnData.results = results.slice(0, 4);
          }
          return Promise.resolve(returnData);
        }
        this.NextPageLoading = true;
        return this.courseService.getNextPage(query).then(
          (pagedData) => {
            const { results } = pagedData;
            pagedData.results = [
              ...query.results,
              ...this.mapCoursesToRecords(results),
            ];
            this.NextPageLoading = false;
            return pagedData;
          }
        );
      }, (null as PagedItemCollection<Course[]>)
    ),
    map((data) => data),
  );
  // #endregion Course

  // #region Exam
  ExamIsLoading = true;
  ExamQuery = combineLatest([
    this.SearchQueryObs,
    this.SelectionSubCategoryObs,
  ]).pipe(
    switchMap(
      ([strQuery, SelectionSubCategoryIds]) => {
        let query = {};
        if (strQuery) {
          query = {
            ...query,
            ['Title|Tags']: strQuery,
          };
        }
        const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
        if (SubCategoryId) {
          query = {
            ...query,
            ['LearningSubCategoryId']: SubCategoryId
          };
        }
        return this.examService.getPagedData(query);
      }
    ),
    map((res) => {
      const { results } = res;
      res.results = this.mapExamsToRecords(results);
      return res;
    }),
    tap(() => this.ExamPageIdx.next(0)),
    tap(() => this.ExamIsLoading = false),
  );
  ExamPageIdx = new BehaviorSubject(0);
  ExamPage = combineLatest([
    this.ContentTypeObs.pipe(tap(() => this.ExamPageIdx.next(0))),
    this.ExamPageIdx,
    this.ExamQuery,
  ]).pipe(
    mergeScan(
      (acc, data) => {
        const [ContentTypeValue, idx, initialData] = data;
        const query = acc;
        if (idx === 0 || !query.hasNext) {
          const returnData = Object.assign(
            Object.create(
              Object.getPrototypeOf(initialData)
            ),
            initialData
          );
          const { results } = returnData;
          if (ContentTypeValue === ContentType.ALL_TYPE) {
            returnData.results = results.slice(0, 4);
          }
          return Promise.resolve(returnData);
        }
        this.NextPageLoading = true;
        return this.examService.getNextPage(query).then(
          (pagedData) => {
            const { results } = pagedData;
            pagedData.results = [
              ...query.results,
              ...this.mapExamsToRecords(results),
            ];
            this.NextPageLoading = false;
            return pagedData;
          }
        );
      }, (null as PagedItemCollection<Exam[]>)
    ),
    map((data) => data),
  );
  // #endregion Exam

  // #endregion Items Query


  ngAfterViewInit() {
    this.initialLoad();
  }

  mapLearningMapsToRoleCategory(listData: Role[]) {
    return listData.map(
      (e) => {
        const { SubCategoryId } = e;
        const SubCategory = this.RoleSubCategoryMap[SubCategoryId];
        const Category = SubCategory ? this.RoleCategoryMap[SubCategory.CategoryId] : null;
        e.CategoryName = Category ? Category.Title : '';
        e.Record = this.userRoleService.getRecord(e.Id);
        return e;
      }
    );
  }

  mapCurriculumToSubCategory(listData: Curriculum[]) {
    return listData.map(
      (e) => {
        const { LearningSubCategoryId } = e;
        const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
        e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
        return e;
      }
    );
  }

  mapCoursesToRecords(listData: Course[]) {
    return listData.map(
      (e) => {
        const { LearningSubCategoryId } = e;
        const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
        e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
        e.Record = this.userCourseService.getRecord(e.Id);
        e.CurriculumNameArr = this.CourseCurriculumNameMap[e.Id] || [];
        return e;
      }
    );
  }

  mapExamsToRecords(listData: Exam[]) {
    return listData.map(
      (e) => {
        const { LearningSubCategoryId } = e;
        const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
        e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
        e.Record = this.userExamService.getRecord(e.Id);
        return e;
      }
    );
  }

  async initialLoad() {
    this.PageIsLoading = true;
    const curriculumList = await this.curriculumService.getAll();
    for (const item of curriculumList) {
      const { CoursesId } = item;
      const CourseIdArr = Array.from(CoursesId);
      for (const Id of CourseIdArr) {
        if (!this.CourseCurriculumNameMap[Id]) {
          this.CourseCurriculumNameMap[Id] = [item.Title];
          continue;
        }
        this.CourseCurriculumNameMap[Id].push(item.Title);
      }
    }


    await Promise.all([
      this.userRoleService.getAll(),
      this.userCourseService.getAll(),
      this.userExamService.getAll(),
    ]);

    const [LearningCategoryList, LearningSubCategoryList] = await Promise.all([
      this.dropdownService.getLearningCategory(),
      this.dropdownService.getLearningSubCategory(),
    ]);

    this.LearningCategoryMap = convertToFilterMap(LearningCategoryList, 'Id');
    this.LearningSubCategoryMap = convertToFilterMap(LearningSubCategoryList, 'Id');
    this.LearningCategoryList = LearningCategoryList.map(
      e => {
        e.SubCategoryList = LearningSubCategoryList.filter(i => i.CategoryId === e.Id);
        return e;
      }
    );

    const [RoleCategoryList, RoleSubCategoryList] = await Promise.all([
      this.dropdownService.getRoleCategory(),
      this.dropdownService.getRoleSubCategory(),
    ]);

    this.RoleCategoryMap = convertToFilterMap(RoleCategoryList);
    this.RoleSubCategoryMap = convertToFilterMap(RoleSubCategoryList);
    this.RoleCategoryList = RoleCategoryList.map(
      e => {
        e.RoleSubCategoryList = RoleSubCategoryList.filter(i => i.CategoryId === e.Id);
        return e;
      }
    );

    this.PageIsLoading = false;
    const ContentTypeValue = this.activatedRoute.snapshot.queryParamMap.get('ContentType') as ContentType;
    const Title = this.activatedRoute.snapshot.queryParamMap.get('Title');
    if (ContentTypeValue) {
      this.ContentTypeForm.setValue(ContentTypeValue);
    }
    if (Title) {
      this.SearchQueryForm.setValue(Title);
    } else {
      this.SearchQueryForm.setValue('');
    }
  }

  async copyToClipBoard(Title: string, contentType: ContentType) {
    await copyToClipBoard(Title, contentType);
    this.snackBar.open('Link Copied!');
  }

  reportProblem(item: Course | Exam, itemType: 'Course' | 'Exam') {
    this.dialogService.open(
      ReportProblemDialogComponent, {
        data: { item, itemType }
      }
    );
  }

  // #region Role
  async moreInfoRole(item: Role) {
    await this.dialogService.open(LearningMapsDialogComponent, { data: { item } });
  }

  async addToRoleAspirations(item: Role) {
    // const loader = this.dialogService.loaderDialog();
    // const { Record } = item;
    // const activeRecord = Record || new UserRole({ RoleId: item.Id });
    // const updatedRecord = await this.userRoleService.save(activeRecord);
    // item.Record = updatedRecord;
    // loader.close();
    // this.snackBar.open('Added as Role Aspiration');
  }

  async addCurrentRole(item: Role) {
    // const editEmployeeDialog$ = this.dialogService.open(
    //   EditProfileDialogComponent, {
    //     data: { userId: this.accountService.account.Id, IsUserProfile: true, roleId: item.Id },
    //   }
    // );
    // await editEmployeeDialog$.afterClosed().toPromise();
    // await this.initialLoad();
  }

  // #endregion

  // #region Curriculum
  async moreInfoCurriculum(item: Curriculum) {
    await this.dialogService.open(CurriculumDescriptionDialogComponent, { data: { item } });
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
  }

  async launchCourse(item: Course) {
    const updatedItem = await this.courseDialogService.launchCourse(item);
  }

  async addToMyCourse(item: Course) {
    const loaderDialog = this.dialogService.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserCourse({CourseId: item.Id});
    const updatedRecord = await this.userCourseService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Courses!');
  }

  // #endregion Courses

  // #region Exam
  async launchExam(item: Exam) {
    this.dialogService.open(ExaminationDialogComponent, {
      data: { item }
    });
  }

  async addToMyExam(item: Exam) {
    const loaderDialog = this.dialogService.loaderDialog();
    const { Record } = item;
    const activeRecord = Record || new UserExam({ExamId: item.Id});
    const updatedRecord = await this.userExamService.save(activeRecord);
    item.Record = updatedRecord;
    loaderDialog.close();
    this.snackBar.open('Added to My Exams!');
  }

}

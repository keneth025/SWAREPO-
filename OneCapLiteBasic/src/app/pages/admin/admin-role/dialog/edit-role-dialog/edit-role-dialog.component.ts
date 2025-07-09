import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BehaviorSubject, combineLatest, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';

import { AccountService } from 'src/app/core/data/service/account.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { RoleService } from 'src/app/core/data/service/role.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

import { Role } from 'src/app/core/data/model/role.model';
import { getDescriptionCount, searchString } from 'src/app/core/util/data.util';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Course } from 'src/app/core/data/model/course.model';
import { RoleCategory, RoleSubCategory } from 'src/app/core/data/model/dropdown.model';
import { Exam } from 'src/app/core/data/model/exam.model';
import { Person } from 'src/app/core/data/model/_model';


@Component({
  templateUrl: './edit-role-dialog.component.html',
  styleUrls: ['./edit-role-dialog.component.scss'],
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
export class EditRoleDialogComponent implements OnInit {

  constructor(
    private dropdownService: DropdownService,
    private roleService: RoleService,
    private accountService: AccountService,
    private userService: UserService,
    private curriculumService: CurriculumService,
    private courseService: CourseService,
    private examService: ExamService,
    private dialog: DialogService,
    public dialogRef: MatDialogRef<EditRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { role: Role },
  ) { }

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  dialogTitle: 'Edit' | 'Create' = 'Create';

  editor = ClassicEditor;
  editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  dialogIsLoading = true;
  curriculaIsLoading = true;
  coursesIsLoading = true;
  examsIsLoading = true;

  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Title: new FormControl('', {
      validators: [Validators.required]
    }),
    Description: new FormControl(''),
    Category: new FormControl(null, {
      validators: [Validators.required]
    }),
    SubCategory: new FormControl(null, {
      validators: [Validators.required]
    }),
    Owners: new FormControl([], {
      validators: [Validators.required]
    }),
  });

  DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(
    startWith(''),
    map((data) => getDescriptionCount(data)),
  );

  OwnersControl = new FormControl('');
  IsSearchingUser = false;
  SearchUserList = this.OwnersControl.valueChanges.pipe(
    tap(() => this.IsSearchingUser = true),
    debounceTime(750),
    distinctUntilChanged(),
    map((input) => typeof input === 'string' ? input : null),
    switchMap((input) => this.userService.searchUser(input)),
    tap(() => this.IsSearchingUser = false),
  );

  // #region Lists > Roles
  CategoryList = new BehaviorSubject<RoleCategory[]>([]);
  SubCategoryList = new BehaviorSubject<RoleSubCategory[]>([]);
  FilteredSubCategoryList = combineLatest([
    this.SubCategoryList,
    this.FormDetails.get('Category').valueChanges.pipe(
      startWith(null as RoleSubCategory),
      tap(() => this.FormDetails.get('SubCategory').setValue(null)),
    )
  ]).pipe(
    map(([SubCategoryList, Category]) => {
      if (Category === null) {
        return [];
      }
      return SubCategoryList.filter(e => e.CategoryId === Category.Id);
    }),
  );
  // #endregion

  // #region List > Curricula
  CurriculumSearchFilter = new FormControl('');
  CurriculumList = new BehaviorSubject<Curriculum[]>([]);
  // #endregion

  // #region List > Courses
  CourseSearchFilter = new FormControl('');
  CourseList = new BehaviorSubject<Course[]>([]);
  // #endregion

  // #region List > Exams
  ExamSearchFilter = new FormControl('');
  ExamList = new BehaviorSubject<Exam[]>([]);
  // #endregion

  // #region Curricula
  AssignedCurriculum = new SelectionModel<Curriculum>(true);
  AssignedCurriculum$ = this.AssignedCurriculum.changed.pipe(
    startWith(null as SelectionChange<Curriculum>),
    map(data => data?.source?.selected || [])
  );
  FilteredCurriculumList$ = combineLatest([
    this.AssignedCurriculum$,
    this.CurriculumList,
    this.CurriculumSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
        ].every(c => c);
      }
    ))
  );
  // #endregion

  // #region Courses
  AssignedCourse = new SelectionModel<Course>(true);
  AssignedCourse$ = this.AssignedCourse.changed.pipe(
    startWith(null as SelectionChange<Course>),
    map(data => data?.source?.selected || []),
  );
  CurriculumCourses$ = this.AssignedCurriculum$.pipe(
    map((data) => {
      const courseIds = data.reduce(
        (returnValue, currentItem) => {
          return [
            ...returnValue,
            ...Array.from(currentItem.CoursesId),
          ];
        }, [] as number[]
      );
      return Array.from(new Set(courseIds))
        .map(e => this.CourseList.value.find(i => i.Id === e));
    }),
    tap((data) => this.AssignedCourse.deselect(...data)),
  );
  OverAllCourse$ = combineLatest([
    this.CurriculumCourses$,
    this.AssignedCourse$,
  ]).pipe(
    map(([CurriculumItem, SelectedItem]) => [...CurriculumItem, ...SelectedItem])
  );

  FilteredCourseList$ = combineLatest([
    this.OverAllCourse$,
    this.CourseList,
    this.CourseSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
        ].every(c => c);
      }
    ))
  );
  // #endregion

  // #region Exam
  AssignedExam = new SelectionModel<Exam>(true);
  AssignedExam$ = this.AssignedExam.changed.pipe(
    startWith(null as SelectionChange<Exam>),
    map(data => data?.source?.selected || [])
  );
  CurriculumExam$ = this.AssignedCurriculum$.pipe(
    map((data) => {
      const examIds = data.reduce(
        (returnValue, currentItem) => {
          return [
            ...returnValue,
            ...Array.from(currentItem.ExamsId),
          ];
        }, [] as number[]
      );
      return Array.from(new Set(examIds))
        .map(e => this.ExamList.value.find(i => i.Id === e));
    }),
  );
  OverAllExam = combineLatest([
    this.CurriculumExam$,
    this.AssignedExam$,
  ]).pipe(
    map(([CurriculumItem, SelectedItem]) => [...CurriculumItem, ...SelectedItem])
  );
  FilteredExamList$ = combineLatest([
    this.OverAllExam,
    this.ExamList,
    this.ExamSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
        ].every(c => c);
      }
    ))
  );
  // #endregion

  get dialogName() { return `${this.dialogTitle} Role`; }

  displayFn = (data) => data ? data.DisplayText : '';

  ngOnInit(): void {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'role-form']);
    this.dialogTitle = this.data ? 'Edit' : 'Create';
    this.initialLoad();
  }

  async initialLoad() {
    this.dialogIsLoading = true;
    this.curriculaIsLoading = true;
    this.coursesIsLoading = true;
    this.examsIsLoading = true;

    const [
      RoleCategoryList,
      RoleSubCategoryList,
    ] = await Promise.all([
      this.dropdownService.getRoleCategory(),
      this.dropdownService.getRoleSubCategory(),
    ]);

    this.CategoryList.next(RoleCategoryList);
    this.SubCategoryList.next(RoleSubCategoryList);

    await Promise.all([
      this.curriculumService.getAll().then((curriculumList) => {
        this.CurriculumList.next(curriculumList);
        this.updatedAssignedCurricula();
        this.curriculaIsLoading = false;
      }),
      this.courseService.getAll().then((courseList) => {
        this.CourseList.next(courseList);
        this.updateAssignedCourses();
        this.coursesIsLoading = false;
      }),
      this.examService.getAll().then((examList) => {
        this.ExamList.next(examList);
        this.updateAssignedExams();
        this.examsIsLoading = false;
      }),
    ]);

    await this.updateDetails();
    this.dialogIsLoading = false;
  }

  async close() {
    const promptDialog = this.dialog.promptDialog(
      this.dialogName,
      'Changes will NOT be saved. Proceed?',
    );
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      this.dialogRef.close(false);
    }
  }

  private async updateDetails() {
    if (this.data) {
      console.log('Update Role', this.data);
      const {
        Id,
        Title,
        Description,
        SubCategoryId,
        Owners,
      } = this.data.role;
      const SubCategory = this.SubCategoryList.value.find(e => e.Id === (SubCategoryId || -1)) || null;
      const Category = this.CategoryList.value.find(e => e.Id === (SubCategory?.CategoryId || -1) ) || null;

      this.FormDetails.setValue({
        Id,
        Title,
        Description,
        Category,
        SubCategory,
        Owners,
      });
    } else {
      const profile = await this.userService.ensureUser(
        this.accountService.account.LoginName
      );
      this.FormDetails.patchValue({ Owners: [profile] });
    }
  }

  private updatedAssignedCurricula() {
    if (this.data) {
      const { CurriculaId } = this.data.role;
      this.AssignedCurriculum.select(
        ...Array.from(CurriculaId).map(e => this.CurriculumList.value.find(i => i.Id === e))
      );
    }
  }

  private updateAssignedCourses() {
    if (this.data) {
      const { CoursesId } = this.data.role;
      this.AssignedCourse.select(
        ...Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e))
      );
    }
  }

  private updateAssignedExams() {
    if (this.data) {
      const { ExamsId } = this.data.role;
      this.AssignedExam.select(
        ...Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e))
      );
    }
  }

  // #region Owner Section
  addOwner(value) {
    const loaderDialog = this.dialog.loaderDialog();
    this.userService.ensureUser(value.Key)
    .then((person) => {
      const Owners = this.FormDetails.get('Owners').value;
      this.FormDetails.get('Owners').setValue([...Owners, person]);
      this.OwnersControl.setValue('');
      loaderDialog.close();
    });
  }

  removeOwner(idx: number) {
    const Owners = this.FormDetails.get('Owners').value;
    Owners.splice(idx, 1);
    this.FormDetails.get('Owners').setValue(Owners);
  }
  // #endregion Owner Section

  // #region Ordering Trainings
  reorderItems<T>(selectionItem: SelectionModel<T>, $event: CdkDragDrop<T[]>) {
    const items = selectionItem.selected;
    moveItemInArray(items, $event.previousIndex, $event.currentIndex);
    selectionItem.clear();
    selectionItem.select(...items);
  }
  // #endregion Ordering Trainings

  async validateName(skip = false) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Title } = this.FormDetails.value;
    const validated = await this.roleService.validateTitle(Title, Id);
    loaderDialog.close();
    if (validated) {
      if (!skip) {
        this.stepper.next();
      } else {
        this.stepper.selectedIndex = 4;
      }
    } else {
      this.FormDetails.get('Title').setErrors({ titleExisting: true });
      this.dialog.alertDialog(
        this.dialogName,
        `${Title} is already created.`
      );
    }
  }

  async save() {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Title, Description, SubCategory, Owners } = this.FormDetails.value;
    const CurriculaId = this.AssignedCurriculum.selected.map(e => e.Id);
    const CoursesId = this.AssignedCourse.selected.map(e => e.Id);
    const ExamsId = this.AssignedExam.selected.map(e => e.Id);

    let EditorObj = new Person({});
    let DateModified = null;
    if (this.data) {
      const { Editor, Modified } = this.data.role;
      EditorObj = Editor;
      DateModified = Modified;
    }

    const requestData = new Role({
      Id,
      Title,
      Description,
      SubCategoryId: SubCategory.Id,
      CurriculaId: new Set(CurriculaId),
      CoursesId: new Set(CoursesId),
      ExamsId: new Set(ExamsId),
      Owners,
      Editor: EditorObj,
      Modified: DateModified,
    });

    console.log('Request Data', requestData);

    const SavedData = await this.roleService.save(requestData);

    loaderDialog.close();
    this.dialogRef.close(true);
  }

}

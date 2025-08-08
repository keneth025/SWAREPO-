import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  tap,
} from 'rxjs/operators';


import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { AccountService } from 'src/app/core/data/service/account.service';
import { getDescriptionCount, searchString } from 'src/app/core/util/data.util';

import { LearningCategory, LearningSubCategory } from 'src/app/core/data/model/dropdown.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Course } from 'src/app/core/data/model/course.model';
import { Exam } from 'src/app/core/data/model/exam.model';
import { Person } from 'src/app/core/data/model/_model';

@Component({
  templateUrl: './edit-curriculum-dialog.component.html',
  styleUrls: ['./edit-curriculum-dialog.component.scss']
})
export class EditCurriculumDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private userService: UserService,
    private dropdownService: DropdownService,
    private courseService: CourseService,
    private examService: ExamService,
    private curriculumService: CurriculumService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EditCurriculumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { curriculum: Curriculum },
  ) { }

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  dialogTitle: 'Edit' | 'Create' = 'Create';

  editor = ClassicEditor;
  editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  // Data
  dialogIsLoading = true;
  coursesIsLoading = true;
  examsIsLoading = true;

  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Title: new FormControl('', {
      validators: [Validators.required]
    }),
    Description: new FormControl(''),
    Owners: new FormControl([], {
      validators: [Validators.required]
    }),
    LearningCategory: new FormControl(null, {
      validators: [Validators.required]
    }),
    LearningSubCategory: new FormControl(null, {
      validators: [Validators.required]
    })
  });

  DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(
    startWith(''),
    map((data) => getDescriptionCount(data)),
  );

  LearningCategoryList = new BehaviorSubject<LearningCategory[]>([]);
  LearningSubCategoryList = new BehaviorSubject<LearningSubCategory[]>([]);
  FilteredLearningSubCategoryList = combineLatest([
    this.FormDetails.get('LearningCategory').valueChanges.pipe(
      tap(() => this.FormDetails.get('LearningSubCategory').setValue(null)),
      startWith(null as LearningCategory),
    ),
    this.LearningSubCategoryList,
  ]).pipe(
    map(
      ([selectedCategory, List]) => {
        if (selectedCategory === null) { return []; }
        return List.filter(e => e.CategoryId === selectedCategory.Id);
      }
    )
  );

  AssignedCourse = new SelectionModel<Course>(true);
  AssignedCourse$ = this.AssignedCourse.changed.pipe(
    startWith(null as SelectionChange<Course>),
    map(data => data?.source?.selected || []),
  );
  CourseSearchFilter = new FormControl('');
  CourseList = new BehaviorSubject<Course[]>([]);
  FilteredCourseList = combineLatest([
    this.AssignedCourse$,
    this.CourseList,
    this.CourseSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
          e.IsOwner,
        ].every(c => c);
      }
    ))
  );

  AssignedExam = new SelectionModel<Exam>(true);
  AssignedExam$ = this.AssignedExam.changed.pipe(
    startWith(null as SelectionChange<Exam>),
    map(data => data?.source?.selected || []),
  );
  ExamSearchFilter = new FormControl('');
  ExamList = new BehaviorSubject<Exam[]>([]);
  FilteredExamList = combineLatest([
    this.AssignedExam$,
    this.ExamList,
    this.ExamSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
          e.IsOwner,
        ].every(c => c);
      }
    ))
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

  dialogName = () => `${this.dialogTitle} Curriculum`;

  displayFn = (data) => data ? data.DisplayText : '';

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

  reorderItems<T>(selectionItem: SelectionModel<T>, $event: CdkDragDrop<T[]>) {
    const items = selectionItem.selected;
    moveItemInArray(items, $event.previousIndex, $event.currentIndex);
    selectionItem.clear();
    selectionItem.select(...items);
  }

  closeDialog() {
    const self = this;
    const promptDialog = self.dialog.promptDialog(
      this.dialogName(),
      'Changes will NOT be saved. Proceed?',
    );
    promptDialog.afterClosed().subscribe(
      (proceed: boolean) => {
        if (proceed) {
          self.dialogRef.close(false);
        }
      }
    );
  }


  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
    this.dialogTitle = this.data ? 'Edit' : 'Create';
    this.initialLoad();
  }

  async initialLoad() {
    this.dialogIsLoading = true;
    this.coursesIsLoading = true;
    this.examsIsLoading = true;
    const [LearningCategoryList, LearningSubCategoryList] = await Promise.all([
      this.dropdownService.getLearningCategory(),
      this.dropdownService.getLearningSubCategory()
    ]);
    this.LearningCategoryList.next(LearningCategoryList);
    this.LearningSubCategoryList.next(LearningSubCategoryList);
    await this.updateDetails();
    this.dialogIsLoading = false;

    await Promise.all([
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
  }

  private async updateDetails() {
    if (this.data) {
      const { Id, Title, Description, Owners, LearningSubCategoryId  } = this.data.curriculum;
      let LearningCategoryObj = null;
      let LearningSubCategoryObj = null;

      LearningSubCategoryObj = this.LearningSubCategoryList.value.find(e => e.Id === LearningSubCategoryId);
      console.log(LearningSubCategoryObj);
      if (LearningSubCategoryObj) {
        LearningCategoryObj = this.LearningCategoryList.value.find(e => e.Id === LearningSubCategoryObj.CategoryId);
      }
      this.FormDetails.patchValue({
        Id,
        Title,
        Description,
        Owners,
        LearningCategory: LearningCategoryObj,
        LearningSubCategory: LearningSubCategoryObj,
      });
    } else {
      const profile = await this.userService.ensureUser(
        this.accountService.account.LoginName
      );
      this.FormDetails.patchValue({ Owners: [profile] });
    }
  }

  private updateAssignedCourses() {
    if (this.data) {
      const { CoursesId } = this.data.curriculum;
      this.AssignedCourse.select(
        ...Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e))
      );
    }
  }

  private updateAssignedExams() {
    if (this.data) {
      const { ExamsId } = this.data.curriculum;
      this.AssignedExam.select(
        ...Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e))
      );
    }
  }

  async validateName(skip = false) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Title } = this.FormDetails.value;
    const validated = await this.curriculumService.validateTitle(Title, Id);
    loaderDialog.close();
    if (validated) {
      if (!skip) {
        this.stepper.next();
      } else {
        this.stepper.selectedIndex = 3;
      }
    } else {
      this.FormDetails.get('Title').setErrors({ titleExisting: true });
      this.dialog.alertDialog(
        this.dialogName(),
        `${Title} is already created.`
      );
    }
  }

  async save() {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Title, Description, Owners, LearningSubCategory: LearningSubCategoryObj } = this.FormDetails.value;
    const CoursesId = this.AssignedCourse.selected.map(e => e.Id);
    const ExamsId = this.AssignedExam.selected.map(e => e.Id);

    let EditorObj = new Person({});
    let DateModified = null;
    if (this.data) {
      const { Editor, Modified } = this.data.curriculum;
      EditorObj = Editor;
      DateModified = Modified;
    }

    const saveData = new Curriculum({
      Id,
      Title,
      Description,
      Owners,
      CoursesId: new Set(CoursesId),
      ExamsId: new Set(ExamsId),
      IsOwner: true,
      LearningSubCategoryId: LearningSubCategoryObj.Id,
      Editor: EditorObj,
      Modified: DateModified,
    });

    await this.curriculumService.save(saveData);
    loaderDialog.close();
    this.dialogRef.close(true);
  }

}

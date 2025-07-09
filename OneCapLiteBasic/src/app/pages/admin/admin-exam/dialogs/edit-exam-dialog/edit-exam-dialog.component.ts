import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormArray,
  ValidatorFn
} from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { SelectionModel, SelectionChange } from '@angular/cdk/collections';
import {
   BehaviorSubject,
   combineLatest
  } from 'rxjs';
import {
  startWith,
  map,
  tap,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { AccountService } from 'src/app/core/data/service/account.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';


import { getDescriptionCount, searchString } from 'src/app/core/util/data.util';
import { Answer, Exam, Question, QuestionType } from 'src/app/core/data/model/exam.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { LearningCategory, LearningSubCategory } from 'src/app/core/data/model/dropdown.model';
import { Course } from 'src/app/core/data/model/course.model';
import { Person } from 'src/app/core/data/model/_model';

const MultipleAnswersValidation: ValidatorFn = (control: FormArray) => {
  const valueArray: any[] = control.value;
  if (valueArray.some(e => e.IsAnswer)) {
    return null;
  }
  return {
    error: 'Must have atleast 1 correct answer.'
  };
};

const QuestionTypeValidation: ValidatorFn = (child) => {
  const control = child.parent;
  if (!control) { return null; }
  const QuestionTypeSelection = child;
  const AnswersControl = control.get('Answers') as FormArray;
  for (const AnswerControl of AnswersControl.controls) {
    AnswerControl.get('AnswerText').clearValidators();
    switch (QuestionTypeSelection.value) {
      case QuestionType.SINGLE_ANSWER:
      case QuestionType.MULTIPLE_ANSWER:
        AnswerControl.get('AnswerText').setValidators([
          Validators.required
        ]);
        break;
    }
    AnswerControl.get('AnswerText').updateValueAndValidity();
  }

  AnswersControl.clearValidators();
  if (QuestionTypeSelection.value === QuestionType.MULTIPLE_ANSWER) {
    AnswersControl.setValidators([MultipleAnswersValidation]);
  }
  AnswersControl.updateValueAndValidity();
  return null;
};

@Component({
  templateUrl: './edit-exam-dialog.component.html',
  styleUrls: ['./edit-exam-dialog.component.scss']
})
export class EditExamDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private dropdownService: DropdownService,
    private userService: UserService,
    private examService: ExamService,
    private courseService: CourseService,
    private curriculumService: CurriculumService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EditExamDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { exam: Exam },
  ) { }

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  QuestionType  = QuestionType;

  dialogTitle: 'Edit' | 'Create' = 'Create';

  editor = ClassicEditor;
  editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  // Data
  dialogIsLoading = true;
  questionIsLoading = true;
  curriculumIsLoading = true;
  courseIsLoading = true;

  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Title: new FormControl('', {
      validators: [Validators.required]
    }),
    Description: new FormControl(''),
    Owners: new FormControl([], {
      validators: [Validators.required]
    }),
    PassingRate: new FormControl(0, {
      validators: [
        Validators.min(1),
        Validators.max(100),
        Validators.required
      ]
    }),
    Tags: new FormControl(''),
    LearningCategory: new FormControl(null, {
      validators: [Validators.required]
    }),
    LearningSubCategory: new FormControl(null, {
      validators: [Validators.required]
    }),
  });

  DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(
    startWith(''),
    map((data) => getDescriptionCount(data)),
  );

  QuestionForm = new FormArray([], {
    validators: [
      Validators.minLength(1),
      Validators.required
    ]
  });
  QuestionsToBeDeleted: Question[] = [];

  InitialAssignedCurriculum: Curriculum[] = [];
  AssignedCurriculum = new SelectionModel<Curriculum>(true);

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

  CurriculumSearchFilter = new FormControl('');
  CurriculumList = new BehaviorSubject<Curriculum[]>([]);
  FilteredCurriculumList = combineLatest([
    this.AssignedCurriculum.changed.pipe(startWith(null as SelectionChange<Curriculum>)),
    this.CurriculumList,
    this.CurriculumSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = SelectedItems ? !SelectedItems.source.isSelected(e) : true;
        return [
          isSearched,
          isNotSelected,
          e.IsOwner,
        ].every(c => c);
      }
    ))
  );

  AssignedCourse = new SelectionModel<Course>(true);
  CourseSearchFilter = new FormControl('');
  CourseList = new BehaviorSubject<Course[]>([]);
  FilteredCourseList = combineLatest([
    this.AssignedCourse.changed.pipe(startWith(null as SelectionChange<Course>)),
    this.CourseList,
    this.CourseSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = SelectedItems ? !SelectedItems.source.isSelected(e) : true;
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

  dialogName = () => `${this.dialogTitle} Exam`;

  displayFn = (data) => data ? data.DisplayText : '';

  hideElement(isHidden: boolean) {
    return { display: isHidden ? 'none' : null };
  }

  filterNumberInputs($event) {
    if ($event.which !== 8 && $event.which !== 0 && $event.which < 48 || $event.which > 57) {
      $event.preventDefault();
    }
  }

  revertToMinOrMax($event) {
    const { value } = $event.target;
    if (value > 100 || value < 0) {
      this.FormDetails.get('PassingRate').setValue(value > 100 ? 100 : 0);
    }
  }

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

  addQuestionToBeDeleted(questionValue) {
    console.log('Question Value', questionValue);
    const { Id, Title, QuestionIsTrue, Type} = questionValue;
    this.QuestionsToBeDeleted = [
      ...this.QuestionsToBeDeleted,
      new Question({
        Id,
        Title,
        IsTrue: QuestionIsTrue,
        Type,
      })
    ];
  }

  createQuestionForm(questionObj: Question = new Question({})) {
    console.log('quesiont OBj', questionObj);
    const { Id, Title, QuestionText, Type, Answers, IsTrue } = questionObj;
    let correctAnswerIdx = 0;
    let answersFormGroup: FormGroup[] = new Array(4).fill(null);
    if (Answers.length > 0) {
      correctAnswerIdx = Answers.findIndex(e => e.IsAnswer);
      answersFormGroup = Answers.map(e => this.createAnswerForm(e));
    } else {
      answersFormGroup = answersFormGroup.map(
        (e, idx) => this.createAnswerForm(new Answer({}))
      );
    }
    return new FormGroup({
      Id: new FormControl(Id),
      QuestionText: new FormControl(QuestionText, {
        validators: [
          Validators.required,
          Validators.maxLength(255)
        ]
      }),
      Type: new FormControl(Type, {
        validators: [
          Validators.required,
          QuestionTypeValidation
        ]
      }),
      CorrectAnswerIdx: new FormControl(correctAnswerIdx),
      QuestionIsTrue: new FormControl(IsTrue),
      Answers: new FormArray(answersFormGroup)
    });
  }

  createAnswerForm(answerObj: Answer = new Answer({})) {
    const { Id, AnswerText, IsAnswer } = answerObj;
    return new FormGroup({
      Id: new FormControl(Id),
      AnswerText: new FormControl(AnswerText, {
        validators: [Validators.maxLength(255)]
      }),
      IsAnswer: new FormControl(IsAnswer)
    });
  }

  answersControl(formArray: FormArray) {
    return formArray.controls;
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
    this.questionIsLoading = true;
    this.curriculumIsLoading = true;
    this.courseIsLoading = true;

    const [LearningCategoryList, LearningSubCategoryList] = await Promise.all([
      this.dropdownService.getLearningCategory(),
      this.dropdownService.getLearningSubCategory()
    ]);
    this.LearningCategoryList.next(LearningCategoryList);
    this.LearningSubCategoryList.next(LearningSubCategoryList);


    await this.updateDetails();
    this.dialogIsLoading = false;
    await this.updateQuestions();
    this.questionIsLoading = false;

    await Promise.all([
      this.curriculumService.getAll().then((CurriculumList) => {
        this.CurriculumList.next(CurriculumList);
        this.updateAssignedCurriculum();
        this.curriculumIsLoading = false;
      }),
      this.courseService.getAll().then((courseList) => {
        this.CourseList.next(courseList);
        this.updatedAssignedCourses();
        this.courseIsLoading = false;
      }),
    ]);
  }

  private async updateDetails() {
    if (this.data) {
      const { Id, Title, Description, Tags, Owners, PassingRate, LearningSubCategoryId } = this.data.exam;
      let LearningCategoryObj = null;
      let LearningSubCategoryObj = null;

      LearningSubCategoryObj = this.LearningSubCategoryList.value.find(e => e.Id === LearningSubCategoryId);
      console.log(LearningSubCategoryObj);
      if (LearningSubCategoryObj) {
        LearningCategoryObj = this.LearningCategoryList.value.find(e => e.Id === LearningSubCategoryObj.CategoryId);
      }
      console.log(this.data.exam);

      this.FormDetails.patchValue({
        Id,
        Title,
        Description,
        Tags,
        Owners,
        PassingRate,
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

  private async updateQuestions() {
    if (this.data) {
      const { Id } = this.data.exam;
      const questions = await this.examService.getQuestionsAndAnswers(Id);
      questions.forEach(question => {
        this.QuestionForm.push(this.createQuestionForm(question));
      });
    } else {
      this.QuestionForm.push(this.createQuestionForm());
    }
  }

  private updateAssignedCurriculum() {
    if (this.data) {
      const { Id } = this.data.exam;
      this.InitialAssignedCurriculum = this.CurriculumList.value.filter(e => e.ExamsId.has(Id));
      this.AssignedCurriculum.select(
        ...this.InitialAssignedCurriculum
      );
    }
  }

  private updatedAssignedCourses() {
    if (this.data) {
      const { RelatedCoursesId } = this.data.exam;
      this.AssignedCourse.select(
        ...RelatedCoursesId
          .map(e => this.CourseList.value.find(i => i.Id === e))
          .filter(e => e)
      );
    }
  }

  async validateName(skip = false) {
    const loaderDialog = this.dialog.loaderDialog();
    const { Id, Title } = this.FormDetails.value;
    const validated = await this.examService.validateTitle(Title, Id);
    loaderDialog.close();
    if (validated) {
      if (!skip) {
        this.stepper.next();
      } else {
        this.stepper.selectedIndex = 2;
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
    const { Id, Title, Description, Owners, PassingRate, Tags, LearningSubCategory: LearningSubCategoryObj  } = this.FormDetails.value;
    const RelatedCoursesId = this.AssignedCourse.selected.map(e => e.Id);

    let EditorObj = new Person({});
    let DateModified = null;
    if (this.data) {
      const { Editor, Modified } = this.data.exam;
      EditorObj = Editor;
      DateModified = Modified;
    }


    const requestData = new Exam({
      Id,
      Title,
      Description,
      Owners,
      PassingRate,
      Tags,
      RelatedCoursesId,
      LearningSubCategoryId: LearningSubCategoryObj.Id,
      Editor: EditorObj,
      Modified: DateModified,
    });

    const savedData = await this.examService.save(requestData);
    let curriculumsToBeUpdated: Curriculum[] = [];

    // Curricula to be removed
    for (const curriculum of this.InitialAssignedCurriculum) {
      if (this.AssignedCurriculum.isSelected(curriculum)) {
        continue;
      }
      const newCurriculum = new Curriculum(curriculum);
      newCurriculum.ExamsId.delete(savedData.Id);
      curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
    }

    // Curricula to be added
    for (const curriculum of this.AssignedCurriculum.selected) {
      if (this.InitialAssignedCurriculum.some(e => e.Id === curriculum.Id)) {
        continue;
      }
      const newCurriculum = new Curriculum(curriculum);
      newCurriculum.ExamsId.add(savedData.Id);
      curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
    }
    await this.curriculumService.batchSave(curriculumsToBeUpdated);

    // Questions to Delete
    await this.examService.removeQuestionList(this.QuestionsToBeDeleted);

    // Save Questions
    const UpdatedQuestions = this.QuestionForm.controls
      .filter(e => e.dirty)
      .map(e => {
        const { Id: QuestionId, QuestionText, Type, QuestionIsTrue, CorrectAnswerIdx, Answers } = e.value;
        const answerObjList: Answer[] = Answers.map(
          (a, Idx) => new Answer({
            Id: a.Id,
            QuestionId,
            AnswerText: a.AnswerText,
            IsAnswer: (Type === QuestionType.SINGLE_ANSWER) ? (Idx === CorrectAnswerIdx) : a.IsAnswer
          })
        );
        return new Question({
          Id: QuestionId,
          QuestionText,
          ExamId: savedData.Id,
          Answers: answerObjList,
          IsTrue: QuestionIsTrue,
          Type
        });
      });
    await this.examService.saveQuestionList(UpdatedQuestions);

    loaderDialog.close();
    this.dialogRef.close(true);
  }


}

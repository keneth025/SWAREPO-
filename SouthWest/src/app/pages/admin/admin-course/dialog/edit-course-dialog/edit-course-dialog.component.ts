import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Course } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { LearningCategory, LearningSubCategory } from 'src/app/core/data/model/dropdown.model';
import { Person } from 'src/app/core/data/model/_model';
import { environment } from 'src/environments/environment';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { FileService } from 'src/app/core/data/service/file.service';
import { AccountService } from 'src/app/core/data/service/account.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getDescriptionCount, searchString } from 'src/app/core/util/data.util';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';


enum CourseMaterialOption {
  Link = -1,
  IstructorLed = 1,
  Upload = 2,
}

const URLValidation: ValidatorFn = (control) => {
  if (control.value) {
    try {
      const testUrl = new URL(control.value);
      return null;
    } catch (e) {
      return {
        message: 'Enter valid url.',
        data: control.value
      };
    }
  }
  return null;
};

const DurationValidation: ValidatorFn = (control) => {
  const { value } = control;
  const regExp = /\d{2}:\d{2}/;
  const validPattern = regExp.test(value);
  if (validPattern) {
    const [hour, minutes] = value.split(':').map(e => parseInt(e, 10));
    if (hour < 100 && minutes < 60) {
      return null;
    }
  }
  return {
    message: 'Please use HH:MM format. Maximum of 99hours and 59minutes.',
    data: value
  };
};

const CourseMaterialValidation: ValidatorFn = (child) => {
  const control = child.parent;
  if (!control) { return null; }
  const SelectedOption = child;
  const Link = control.get('Link');
  const SelectedFolder = control.get('SelectedFolder');
  const UploadFile = control.get('UploadFile');

  Link.clearValidators();
  SelectedFolder.clearValidators();
  UploadFile.clearValidators();

  Link.disable({onlySelf: true});
  SelectedFolder.disable({onlySelf: true});
  UploadFile.disable({onlySelf: true});

  switch (SelectedOption.value) {
    case CourseMaterialOption.Link:
      Link.enable({ onlySelf: true });
      Link.setValidators([
        Validators.required,
        URLValidation
      ]);
      break;
    case CourseMaterialOption.Upload:
      SelectedFolder.enable({ onlySelf: true });
      UploadFile.enable({ onlySelf: true });
      SelectedFolder.setValidators(Validators.required);
      UploadFile.setValidators(Validators.required);
      break;
  }

  Link.updateValueAndValidity({onlySelf: true});
  SelectedFolder.updateValueAndValidity({onlySelf: true});
  UploadFile.updateValueAndValidity({onlySelf: true});

  return null;
};

@Component({
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.scss']
})
export class EditCourseDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private dropdownService: DropdownService,
    private userService: UserService,
    private courseService: CourseService,
    private curriculumService: CurriculumService,
    private fileService: FileService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { course: Course },
  ) { }

  OneCapDownloadUrl = `${environment.SiteURL}_layouts/download.aspx?SourceUrl=`;
  HasCourseMaterial = false;
  CourseMaterialLink = '';

  CourseMaterialOptions = CourseMaterialOption;

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  ContactEmail = environment.SupportMail;

  dialogTitle: 'Edit' | 'Create' = 'Create';

  editor = ClassicEditor;
  editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  // Data
  dialogIsLoading = true;
  curriculumIsLoading = true;

  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Title: new FormControl('', {
      validators: [Validators.required]
    }),
    Description: new FormControl(''),
    Tags: new FormControl(''),
    Owners: new FormControl([], {
      validators: [Validators.required]
    }),
    Duration: new FormControl('', {
      validators: [
        Validators.required,
        DurationValidation,
      ]
    }),
    Material: new FormGroup({
      SelectedOption: new FormControl(CourseMaterialOption.Link, {
        validators: [CourseMaterialValidation]
      }),
      Link: new FormControl(''),
      SelectedFolder: new FormControl(null),
      UploadFile: new FormControl(null),
    }),
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

  InitialAssignedCurriculum: Curriculum[] = [];
  AssignedCurriculum = new SelectionModel<Curriculum>(true);

  CurriculumSearchFilter = new FormControl('');
  CurriculumList = new BehaviorSubject<Curriculum[]>([]);
  FilteredCurriculumList = combineLatest([
    this.AssignedCurriculum.changed.pipe(startWith(null as SelectionChange<Curriculum>)),
    this.CurriculumList.pipe(startWith([])),
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

  FolderList = new BehaviorSubject<string[]>([]);

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

  dialogName = () => `${this.dialogTitle} Course`;

  displayFn = (data) => data ? data.DisplayText : '';

  courseMaterialUpdated($event) {
    this.FormDetails.get('Material').get('UploadFile').setValue(
      ($event.target as any).files[0]
    );
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
    const [FolderList, LearningCategoryList, LearningSubCategoryList] = await Promise.all([
      this.fileService.getCourseMaterialFolders(),
      this.dropdownService.getLearningCategory(),
      this.dropdownService.getLearningSubCategory()
    ]);

    this.FolderList.next(FolderList);

    this.LearningCategoryList.next(LearningCategoryList);
    this.LearningSubCategoryList.next(LearningSubCategoryList);

    await this.updateDetails();
    this.dialogIsLoading = false;

    this.curriculumIsLoading = true;
    const CurriculumList = await this.curriculumService.getAll();
    this.CurriculumList.next(CurriculumList);
    this.updateAssignedCurriculum();
    this.curriculumIsLoading = false;
  }

  private async updateDetails() {
    if (this.data) {
      const { Id, Title, Description, LearningSubCategoryId, Tags, Owners, IsClassroom, Duration, MaterialLink } = this.data.course;
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
        Description: Description || '',
        Tags,
        Owners,
        Duration,
        Material: {
          SelectedOption: IsClassroom ? CourseMaterialOption.IstructorLed : CourseMaterialOption.Link,
          Link: MaterialLink
        },
        LearningCategory: LearningCategoryObj,
        LearningSubCategory: LearningSubCategoryObj,
      });
      if (!IsClassroom && MaterialLink.indexOf(environment.SiteURL) === 0) {
        this.HasCourseMaterial = true;
        this.CourseMaterialLink = this.OneCapDownloadUrl + MaterialLink;
      }
    } else {
      const profile = await this.userService.ensureUser(
        this.accountService.account.LoginName
      );
      this.FormDetails.patchValue({ Owners: [profile] });
    }
  }

  private updateAssignedCurriculum() {
    if (this.data) {
      const { Id } = this.data.course;
      this.InitialAssignedCurriculum = this.CurriculumList.value.filter(e => e.CoursesId.has(Id));
      this.AssignedCurriculum.select(
        ...this.InitialAssignedCurriculum
      );
    }
  }

  async validateName(skip = false) {
    const { Id, Title, Material } = this.FormDetails.value;
    if (Material.SelectedOption === CourseMaterialOption.Upload) {
      const FileToCheck: File = Material.UploadFile;
      if (FileToCheck.size > 262144000) {
        this.dialog.alertDialog(
          this.dialogName(),
          `
            The file size exceeds the 250 MB limit.
            Please contact <a href="mailto:${this.ContactEmail}">${this.ContactEmail}</a> for assistance.
          `
        );
        return;
      }
    }

    const loaderDialog = this.dialog.loaderDialog();
    const validated = await this.courseService.validateTitle(Title, Id);
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
    try {

      const details = this.FormDetails.value;
      const { Id, Title, Description, Tags, Owners, Duration, Material, LearningSubCategory: LearningSubCategoryObj } = details;
      let MaterialLink = '';
      let IsClassroom = false;
      switch (Material.SelectedOption) {
        case CourseMaterialOption.IstructorLed:
          IsClassroom = true;
          break;
        case CourseMaterialOption.Link:
          MaterialLink = Material.Link;
          break;
        case CourseMaterialOption.Upload:
          const res = await this.fileService
            .uploadCourseMaterial(Material.SelectedFolder, Material.UploadFile);
          console.log('res file', res);
          MaterialLink = res.data.LinkingUri.split('?')[0];
          break;
      }
      let EditorObj = new Person({});
      let DateModified = null;

      if (this.data) {
        const { Editor, Modified } = this.data.course;
        EditorObj = Editor;
        DateModified = Modified;
      }

      const requestData = new Course({
        Id,
        Title,
        Description,
        Tags,
        Owners,
        Duration,
        MaterialLink,
        IsClassroom,
        LearningSubCategoryId: LearningSubCategoryObj.Id,
        Editor: EditorObj,
        Modified: DateModified,
      });
      const savedData = await this.courseService.save(requestData);
      let curriculumsToBeUpdated: Curriculum[] = [];
      // Curricula to be removed
      for (const curriculum of this.InitialAssignedCurriculum) {
        if (this.AssignedCurriculum.isSelected(curriculum)) {
          continue;
        }
        const newCurriculum = new Curriculum(curriculum);
        newCurriculum.CoursesId.delete(savedData.Id);
        curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
      }

      // Curricula to be added
      for (const curriculum of this.AssignedCurriculum.selected) {
        if (this.InitialAssignedCurriculum.some(e => e.Id === curriculum.Id)) {
          continue;
        }
        const newCurriculum = new Curriculum(curriculum);
        newCurriculum.CoursesId.add(savedData.Id);
        curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
      }

      await this.curriculumService.batchSave(curriculumsToBeUpdated);
      loaderDialog.close();
      this.dialogRef.close(true);
    } catch (e) {
      loaderDialog.close();
      console.log('Error Object', e);
      this.dialog.alertDialog(
        this.dialogName(),
        e.Message,
      );
    }
  }

}

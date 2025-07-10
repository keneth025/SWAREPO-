import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, switchMap, startWith, tap } from 'rxjs/operators';
import { SelectionModel, SelectionChange } from '@angular/cdk/collections';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { MandatoryTrainingService } from 'src/app/core/data/service/mandatory-training.service';
import { MandatoryTraining } from 'src/app/core/data/model/mandatory-training.model';
import { Course } from 'src/app/core/data/model/course.model';
import { Exam } from 'src/app/core/data/model/exam.model';
import { getDescriptionCount } from 'src/app/core/util/data.util';

const mandatoryTrainingValidation: ValidatorFn = (control): {[key: string]: any} | null => {
  const DeadLineForm = control.get('Deadline');
  const LastNotificationForm = control.get('LastNotification');

  const deadline = DeadLineForm.value;
  const lastNotificationDate = LastNotificationForm.value;

  if (deadline.length > 0 && lastNotificationDate.length > 0) {
    const deadlineDate = new Date(deadline);
    const lastNotificationDateData = new Date(lastNotificationDate);
    if (deadlineDate.getTime() > lastNotificationDateData.getTime()) {
      const invalidValues = {
        message: 'Last notification date must be later than deadline date.',
        values: control.value
      };
      DeadLineForm.setErrors({ invalidValues });
      LastNotificationForm.setErrors({ invalidValues });
    } else {
      DeadLineForm.setErrors(null);
      LastNotificationForm.setErrors(null);
    }
  }
  return null;
};


@Component({
  templateUrl: './edit-mandatory-training-dialog.component.html',
  styleUrls: ['./edit-mandatory-training-dialog.component.scss']
})
export class EditMandatoryTrainingDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private courseService: CourseService,
    private examService: ExamService,
    private mandatoryTrainingService: MandatoryTrainingService,
    public dialogRef: MatDialogRef<EditMandatoryTrainingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mandatoryTraining: MandatoryTraining },
    ) { }


  dialogTitle: 'Edit' | 'Create' = 'Create';
  currentDate = new Date().toISOString().split('T')[0];

  public editor = ClassicEditor;
  public editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  // Data
  dialogIsLoading = true;
  coursesIsLoading = true;
  examsIsLoading = true;

  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Deadline: new FormControl(this.currentDate, {
      validators: [Validators.required]
    }),
    LastNotification: new FormControl('', {
      validators: [Validators.required]
    }),
    NotificationSubject: new FormControl('', {
      validators: [Validators.required]
    }),
    NotificationMessage: new FormControl('', {
      validators: [Validators.required]
    }),
  }, {
    validators: [Validators.required, mandatoryTrainingValidation],
  });

  SelectedCourses = new SelectionModel<Course>(true);
  SelectedExams = new SelectionModel<Exam>(true);

  NotificationMessageCount = this.FormDetails.get('NotificationMessage').valueChanges.pipe(
    startWith(''),
    map((data) => getDescriptionCount(data)),
  );

  CourseSearchFilter = new FormControl('');
  CourseList = new BehaviorSubject<Course[]>([]);
  FilteredCourseList = combineLatest([
    this.CourseList,
    this.SelectedCourses.changed.pipe(startWith(null as SelectionChange<Course>)),
  ]).pipe(
    map(([List, selectedItems]) => {
      return List.filter(e => selectedItems ? !selectedItems.source.isSelected(e) : true );
    })
  );

  ExamSearchFilter = new FormControl('');
  ExamList = new BehaviorSubject<Exam[]>([]);
  FilteredExamList = combineLatest([
    this.ExamList,
    this.SelectedExams.changed.pipe(startWith(null as SelectionChange<Exam>)),
  ]).pipe(
    map(([List, selectedItems]) => {
      return List.filter(e => selectedItems ? !selectedItems.source.isSelected(e) : true );
    })
  );

  dialogName = () => `${this.dialogTitle} Curriculum`;

  closeDialog() {
    const self = this;
    const promptDialog = self.dialog.promptDialog(
      `${this.dialogTitle} Mandatory Training`,
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
    const [
      courseList,
      examList,
    ] = await Promise.all([
      this.courseService.getAll(),
      this.examService.getAll(),
    ]);

    this.CourseList.next(courseList);
    this.ExamList.next(examList);
    await this.updateDetails();
    this.dialogIsLoading = false;
  }

  private async updateDetails() {
    if (this.data) {
      const { mandatoryTraining } = this.data;
      const {
        Id,
        CoursesId,
        ExamsId,
        DueDate,
        FinalDate,
        NotificationSubject,
        NotificationMessage,
      } = mandatoryTraining;

      const Courses = Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e));
      const Exams = Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e));
      const DeadlineDate = DueDate.toISOString().split('T')[0];
      const LastNotificationDate = FinalDate ? FinalDate.toISOString().split('T')[0] : '';

      this.SelectedCourses.select(...Courses);
      this.SelectedExams.select(...Exams);

      console.log('Mandatory Training:', mandatoryTraining);

      this.FormDetails.patchValue({
        Id,
        NotificationSubject,
        NotificationMessage,
        Deadline: DeadlineDate,
        LastNotification: LastNotificationDate,
      });
    }
  }

  reorderItems<T>(selectionItem: SelectionModel<T>, $event: CdkDragDrop<T[]>) {
    const items = selectionItem.selected;
    moveItemInArray(items, $event.previousIndex, $event.currentIndex);
    selectionItem.clear();
    selectionItem.select(...items);
  }

  filterNumberInputs($event) {
    if ($event.which !== 8 && $event.which !== 0 && $event.which < 48 || $event.which > 57) {
      $event.preventDefault();
    }
  }

  revertToMinOrMax($event, controlName) {
    const { value } = $event.target;
    if (value > 100 || value < 0) {
      this.FormDetails.get(controlName).setValue(value > 100 ? 100 : 0);
    }
  }

  async save() {
    const loaderDialog = this.dialog.loaderDialog();
    const {
      Id,
      Deadline,
      LastNotification,
      NotificationSubject,
      NotificationMessage,
    } = this.FormDetails.value;

    const Courses = this.SelectedCourses.selected;
    const Exams = this.SelectedExams.selected;

    const requestData = new MandatoryTraining({
      Id,
      NotificationSubject,
      NotificationMessage,
      CoursesId: new Set(Courses.map(e => e.Id)),
      ExamsId: new Set(Exams.map(e => e.Id)),
      DueDate: new Date(Deadline),
      FinalDate: LastNotification ? new Date(LastNotification) : null,
    });

    const updatedData = await this.mandatoryTrainingService.save(requestData);
    loaderDialog.close();
    this.dialogRef.close(true);
  }
}

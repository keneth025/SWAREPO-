import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './ui/loader/loader.component';
import { NavBarComponent } from './ui/nav-bar/nav-bar.component';

import { NavListItemComponent } from './ui/nav-bar/nav-list-item/nav-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatSnackBarModule, MatSnackBarConfig, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';


import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AlertDialogComponent } from './dialog/alert-dialog/alert-dialog.component';
import { PromptDialogComponent } from './dialog/prompt-dialog/prompt-dialog.component';
import { ConfirmDeleteDialogComponent } from './dialog/confirm-delete-dialog/confirm-delete-dialog.component';
import { LoaderDialogComponent } from './dialog/loader-dialog/loader-dialog.component';
import { StarRatingComponent } from './ui/star-rating/star-rating.component';
import { LearningMapsDialogComponent } from './dialog/learning-maps-dialog/learning-maps-dialog.component';
import { ExaminationDialogComponent } from './dialog/examination-dialog/examination-dialog.component';
import { CourseConfirmationDialogComponent } from './dialog/course-dialog/course-confirmation-dialog/course-confirmation-dialog.component';
import { CourseDescriptionDialogComponent } from './dialog/course-dialog/course-description-dialog/course-description-dialog.component';
import { CourseRateDialogComponent } from './dialog/course-dialog/course-rate-dialog/course-rate-dialog.component';
import { CurriculumDescriptionDialogComponent } from './dialog/curriculum-description-dialog/curriculum-description-dialog.component';
import { ReportProblemDialogComponent } from './dialog/report-problem-dialog/report-problem-dialog.component';
import { UserFeedbackDialogComponent } from './dialog/user-feedback-dialog/user-feedback-dialog.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { EditProfileDialogComponent } from './dialog/edit-profile-dialog/edit-profile-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const UIComponents = [
  LoaderComponent,
  StarRatingComponent,
  NavBarComponent,
  ProgressBarComponent,
];

const DialogComponents = [
  AlertDialogComponent,
  PromptDialogComponent,
  ConfirmDeleteDialogComponent,
  LoaderDialogComponent,
  ReportProblemDialogComponent,
  UserFeedbackDialogComponent,
  LearningMapsDialogComponent,
  CurriculumDescriptionDialogComponent,
  ExaminationDialogComponent,
  CourseDescriptionDialogComponent,
  CourseConfirmationDialogComponent,
  CourseRateDialogComponent,
];

const AppModules = [
  ReactiveFormsModule,
  FormsModule,
  DragDropModule,
  CKEditorModule,
  MatDialogModule,
  MatSelectModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatRadioModule,
  MatCheckboxModule,
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

const matDialogConfig: MatDialogConfig = {
  maxWidth: '100vw',
  hasBackdrop: true,
  disableClose: true,
  data: null,
};

const matSnackBarConfig: MatSnackBarConfig = {
  duration: 1500,
  panelClass: ['onecap-snackbar'],
};

@NgModule({
  declarations: [
    ...UIComponents,
    ...DialogComponents,
    NavListItemComponent,
    EditProfileDialogComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ...AppModules,
  ],
  exports: [
    ...UIComponents,
    ...DialogComponents,
    ...AppModules,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogConfig },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: matSnackBarConfig }
  ]
})
export class SharedModule { }

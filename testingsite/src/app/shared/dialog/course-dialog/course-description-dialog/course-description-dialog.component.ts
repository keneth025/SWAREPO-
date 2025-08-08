import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseRateDialogComponent } from '../course-rate-dialog/course-rate-dialog.component';
import { DialogService } from '../../dialog.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { CourseConfirmationDialogComponent } from '../course-confirmation-dialog/course-confirmation-dialog.component';

@Component({
  templateUrl: './course-description-dialog.component.html',
  styleUrls: ['./course-description-dialog.component.scss'],
})
export class CourseDescriptionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseDescriptionDialogComponent>,
    private dialogService: DialogService,
    private dialog: DialogService,
    private snackBar: MatSnackBar,
    private userCourseService: UserCourseService,
    @Inject(MAT_DIALOG_DATA) public data: { item: Course },
  ) { }

  CourseStatus = CourseStatus;
  item: Course = null;

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'description']);
    if (this.data) {
      const { item } = this.data;
      this.item = item;
    }
  }

  async launchCourse() {
    const { item } = this;
    if (item) {
      window.open(item.MaterialLink, '_blank');
      const updatedItem: Course = await this.dialog.open(
        CourseConfirmationDialogComponent,
        { data: { item } }
      ).afterClosed().toPromise();
      if (updatedItem) {
        const { Record } = updatedItem;
        if (Record) {
          let message = 'Added to My Courses!';
          if (Record.Status === CourseStatus.Completed) {
            message = 'Marked as Complete!';
          }
          this.snackBar.open(message);
          if (Record.Status === CourseStatus.Completed) {
            const isRated = await this.dialog.open(CourseRateDialogComponent, { data: { item } }).afterClosed().toPromise();
            if (isRated) {
              this.snackBar.open('Rated Successfully!');
            }
          }
        }
        this.closeDialog();
      }
    }
  }

  async saveToMyCourse(IsComplete = false) {
    const { item } = this;
    if (item) {
      const loaderDialog = this.dialogService.loaderDialog();
      const { Record } = item;
      const activeRecord = Record || new UserCourse({CourseId: item.Id});
      if (IsComplete) {
        activeRecord.Status = CourseStatus.Completed;
      }
      const updatedRecord = await this.userCourseService.save(activeRecord);
      item.Record = updatedRecord;
      this.item = item;
      loaderDialog.close();
      this.closeDialog();
      if (updatedRecord) {
        let message = 'Added to My Courses!';
        if (Record.Status === CourseStatus.Completed) {
          message = 'Marked as Complete!';
        }
        this.snackBar.open(message);
        if (updatedRecord.Status === CourseStatus.Completed) {
          const isRated = await this.dialog.open(CourseRateDialogComponent, { data: { item } }).afterClosed().toPromise();
          if (isRated) {
            this.snackBar.open('Rated Successfully!');
          }
        }
      }
    }
  }

  closeDialog() {
    this.dialogRef.close(this.item);
  }

}

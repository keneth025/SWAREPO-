import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { DialogService } from '../../dialog.service';
@Component({
  templateUrl: './course-confirmation-dialog.component.html',
  styleUrls: ['./course-confirmation-dialog.component.scss']
})
export class CourseConfirmationDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseConfirmationDialogComponent>,
    private dialogService: DialogService,
    private userCourseService: UserCourseService,
    @Inject(MAT_DIALOG_DATA) public data: { item: Course },
  ) { }

  CourseStatus = CourseStatus;
  item: Course = null;

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form']);
    if (this.data) {
      const { item } = this.data;
      this.item = item;
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
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }

  closeDialog() {
    this.dialogRef.close(this.item);
  }

}

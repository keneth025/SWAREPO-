import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course, CourseStatus } from 'src/app/core/data/model/course.model';
import { DialogService } from '../dialog.service';
import { CourseConfirmationDialogComponent } from './course-confirmation-dialog/course-confirmation-dialog.component';
import { CourseDescriptionDialogComponent } from './course-description-dialog/course-description-dialog.component';
import { CourseRateDialogComponent } from './course-rate-dialog/course-rate-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CourseDialogService {
  constructor(
    private dialog: DialogService,
    private snackBar: MatSnackBar,
  ) { }

  async launchCourse(item: Course) {
    let updatedItem: Course = null;
    if (!item.IsClassroom) {
      window.open(item.MaterialLink, '_blank');
      updatedItem = await this.courseConfirmationDialog(item).afterClosed().toPromise();
    } else {
      updatedItem = await this.courseDescriptionDialog(item).afterClosed().toPromise();
    }
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
    }
    return updatedItem;
  }

  courseDescriptionDialog(item: Course) {
    return this.dialog.open(CourseDescriptionDialogComponent, { data: { item } });
  }

  courseConfirmationDialog(item: Course) {
    return this.dialog.open(CourseConfirmationDialogComponent, { data: { item } });
  }
}

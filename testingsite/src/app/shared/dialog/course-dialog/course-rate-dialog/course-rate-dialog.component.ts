import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogService } from '../../dialog.service';
import { Course, UserCourseRating } from 'src/app/core/data/model/course.model';
import { UserCourseRatingService } from 'src/app/core/data/service/user-course-rating.service';

@Component({
  templateUrl: './course-rate-dialog.component.html',
  styleUrls: ['./course-rate-dialog.component.scss']
})
export class CourseRateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseRateDialogComponent>,
    private dialogService: DialogService,
    private userCourseRatingService: UserCourseRatingService,
    @Inject(MAT_DIALOG_DATA) public data: { item: Course },
  ) { }

  item: Course = null;
  record: UserCourseRating = null;
  dialogIsLoading = true;

  itemRatingFrm = new FormGroup({
    Rating: new FormControl(0, { validators: Validators.min(1) }),
    Review: new FormControl('')
  });

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form']);
    if (this.data) {
      const { item } = this.data;
      this.item = item;
      this.initialLoad();
    }
  }

  async initialLoad() {
    this.dialogIsLoading = true;
    if (!this.userCourseRatingService.DataIsLoaded) {
      await this.userCourseRatingService.getAll();
    }
    const tempRecord = this.userCourseRatingService.getRecord(this.item.Id);
    this.record = tempRecord || new UserCourseRating({ CourseId: this.item.Id });
    this.itemRatingFrm.setValue({
      Rating: this.record.Rating,
      Review: this.record.Review,
    });
    this.dialogIsLoading = false;
  }

  async save() {
    const Loader = this.dialogService.loaderDialog();
    const { Rating, Review } = this.itemRatingFrm.value;
    const tempRecord = this.record;
    tempRecord.Rating = Rating;
    tempRecord.Review = Review;
    this.record = await this.userCourseRatingService.save(tempRecord);
    Loader.close();
    this.dialogRef.close(true);
  }


}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserCourseRatingService } from 'src/app/core/data/service/user-course-rating.service';
import { Course, UserCourseRating } from 'src/app/core/data/model/course.model';

enum SortingOptions {
  Date = 'Date',
  LowestToHighest = 'Lowest to Highest',
  HighestToLowest = 'Highest to Lowest',
}

@Component({
  templateUrl: './course-rating-report-dialog.component.html',
  styleUrls: ['./course-rating-report-dialog.component.scss']
})
export class CourseRatingReportDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseRatingReportDialogComponent>,
    private userCourseRatingService: UserCourseRatingService,
    @Inject(MAT_DIALOG_DATA) public data: { item: Course },
  ) { }

  item: Course = null;
  SortingOptions = SortingOptions;
  dialogIsLoading = true;
  totalRating = 4;

  sortingOption = new FormControl(SortingOptions.Date);
  reviewList = new BehaviorSubject<UserCourseRating[]>([]);
  sortedReviewList = combineLatest([
    this.sortingOption.valueChanges.pipe(startWith(SortingOptions.Date)),
    this.reviewList
  ]).pipe(
    map(
      ([sortingOption, List]) => {
        switch (sortingOption) {
          case SortingOptions.Date:
            return this.sortByDate(List);
          case SortingOptions.HighestToLowest:
            return this.sortByRate(List, true);
          case SortingOptions.LowestToHighest:
            return this.sortByRate(List);
          default:
            return [];
        }
      }
    )
  );

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
    if (this.data) {
      const { item } = this.data;
      this.item = item;
      this.initialLoad();
    }
  }

  async initialLoad() {
    this.dialogIsLoading = true;
    const reviewList = await this.userCourseRatingService.getReport([this.item.Id]);
    this.reviewList.next(reviewList);
    const sum = reviewList.reduce((returnVal, item) => returnVal + item.Rating, 0);
    const length = reviewList.length;
    this.totalRating = length > 0 ? sum / length : 0;
    this.dialogIsLoading = false;
  }

  sortByDate(itemArr: UserCourseRating[]) {
    return itemArr.sort(
      (a, b) => {
        const dateA = a.Modified.getTime();
        const dateB = b.Modified.getTime();
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      }
    );
  }

  sortByRate(itemArr: UserCourseRating[], reverse: boolean = false) {
    return itemArr.sort(
      (a, b) => {
        const rateA = a.Rating;
        const rateB = b.Rating;
        if (rateA > rateB) {
          return !reverse ? 1 : -1;
        }
        if (rateA < rateB) {
          return !reverse ? -1 : 1;
        }
        return 0;
      }
    );
  }

}

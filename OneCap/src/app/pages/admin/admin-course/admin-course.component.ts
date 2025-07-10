import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

import { Course } from 'src/app/core/data/model/course.model';
import { CourseService } from 'src/app/core/data/service/course.service';
import { searchString } from 'src/app/core/util/data.util';

import { DialogService } from 'src/app/shared/dialog/dialog.service';

import { EditCourseDialogComponent } from './dialog/edit-course-dialog/edit-course-dialog.component';
import { UploadRegistrationDialogComponent } from './dialog/upload-registration-dialog/upload-registration-dialog.component';
import { UploadAttendanceSheetDialogComponent } from './dialog/upload-attendance-sheet-dialog/upload-attendance-sheet-dialog.component';
import { CourseRatingReportDialogComponent } from './dialog/course-rating-report-dialog/course-rating-report-dialog.component';

@Component({
  selector: 'app-admin-course',
  templateUrl: './admin-course.component.html',
  styleUrls: ['./admin-course.component.scss']
})
export class AdminCourseComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private courseService: CourseService,
  ) {}

  pageIsLoading = false;
  dataIsLoading = true;

  courseList = new BehaviorSubject<Course[]>([]);

  keywordFilter = new FormControl('');
  ownerFilter = new FormControl(1);

  ownedCourseList = combineLatest([
    this.ownerFilter.valueChanges.pipe(startWith(1)),
    this.courseList,
  ]).pipe(
    map(([isOwner, List]) => {
      if (isOwner === 1) {
        return List.filter(e => e.IsOwner);
      }
      return List;
    })
  );

  filteredCourseList = combineLatest([
    this.ownedCourseList,
    this.keywordFilter.valueChanges.pipe(
      debounceTime(125),
      startWith('')
    ),
  ]).pipe(
    map(([courseList, keyword]) => {
      if (keyword === '') {
        return courseList;
      }
      return courseList.filter(e => searchString(e.Title, keyword));
    }),
  );

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.dataIsLoading = true;
    const CourseList = await this.courseService.getAll();
    this.courseList.next(CourseList);
    this.dataIsLoading = false;
  }

  async uploadAttendanceSheet() {
    const uploadDialog = this.dialog.open(UploadAttendanceSheetDialogComponent, { data: { CourseList: this.courseList.value } });

    const isSaved = await uploadDialog.afterClosed().toPromise();
    if (isSaved) {
      this.loadData();
    }
  }

  async uploadRegistrationSheet() {
    const uploadDialog = this.dialog.open(UploadRegistrationDialogComponent, { data: { CourseList: this.courseList.value } });

    const isSaved = await uploadDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async create() {
    const addDialog = this.dialog.open(EditCourseDialogComponent);

    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async update(data: Course) {
    if (data.IsOwner) {
      const editDialog = this.dialog.open(
        EditCourseDialogComponent, { data: { course: new Course(data) } }
      );

      const isSaved = await editDialog.afterClosed().toPromise();
      if (isSaved) {
        await this.loadData();
      }
    }
  }

  async delete(data: Course) {
    const promptDialog = this.dialog.deleteDialog(data.Title);
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      const loaderDialog = this.dialog.loaderDialog();
      await this.courseService.delete(data);
      loaderDialog.close();
      await this.loadData();
    }
  }

  showReviews(item: Course) {
    const reviewsDialog = this.dialog.open(CourseRatingReportDialogComponent, { data: { item } });
  }
}

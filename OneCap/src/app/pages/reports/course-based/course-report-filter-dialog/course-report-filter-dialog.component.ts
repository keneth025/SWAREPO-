import { Component, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Course } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Country } from 'src/app/core/data/model/dropdown.model';
import { Person } from 'src/app/core/data/model/_model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { searchString } from 'src/app/core/util/data.util';

@Component({
  templateUrl: './course-report-filter-dialog.component.html',
  styleUrls: ['./course-report-filter-dialog.component.scss']
})
export class CourseReportFilterDialogComponent implements AfterViewInit {

  constructor(
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<CourseReportFilterDialogComponent>,
  ) { }

  CurriculumMap: { [Id: number]: Curriculum } = {};
  CourseMap: { [Id: number]: Course } = {};

  // User Profile
  selectedEmployeeName = new FormControl('');

  selectedManager = new FormControl([]);
  ManagerList = new BehaviorSubject<Person[]>([]);
  ManagerSearchFilter = new FormControl('');
  FilteredManagerList = combineLatest([
    this.ManagerList.pipe(startWith<Person[]>([])),
    this.ManagerSearchFilter.valueChanges.pipe(
      startWith(''),
    )
  ]).pipe(
    map(
      ([List, KeyWord]) => {
        if (KeyWord === '') {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord) || searchString(e.EMail, KeyWord));
      }
    )
  );

  selectedCountry = new FormControl([]);
  CountryList = new BehaviorSubject<Country[]>([]);
  CountrySearchFilter = new FormControl('');
  FilteredCountryList = combineLatest([
    this.CountryList.pipe(startWith<Country[]>([])),
    this.CountrySearchFilter.valueChanges.pipe(
      startWith(''),
    )
  ]).pipe(
    map(
      ([List, KeyWord]) => {
        if (KeyWord === '') {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord));
      }
    )
  );

  selectedCurriculum = new FormControl([]);
  CurriculumList = new BehaviorSubject<Curriculum[]>([]);
  CurriculumSearchFilter = new FormControl('');
  FilteredCurriculumList = combineLatest([
    this.CurriculumList.pipe(startWith<Curriculum[]>([])),
    this.CurriculumSearchFilter.valueChanges.pipe(
      startWith(''),
    )
  ]).pipe(
    map(
      ([List, KeyWord]) => {
        if (KeyWord === '') {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord));
      }
    )
  );

  selectedCourse = new FormControl([]);
  CourseList = new BehaviorSubject<Course[]>([]);
  CourseSearchFilter = new FormControl('');
  FilteredCourseList = combineLatest([
    this.CourseSearchFilter.valueChanges.pipe(
      startWith(''),
    ),
    combineLatest([
      this.CourseList.pipe(startWith<Course[]>([])),
      this.selectedCurriculum.valueChanges.pipe(
        tap(() => this.selectedCourse.setValue([])),
        startWith([])
      )
    ]).pipe(
      map(
        ([List, selectedCurriculumIds]) => {
          const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
          let courseIds: number[] = [];
          if (!hasSelectedCurriculumIds) { return List; }

          for (const curriculumId of selectedCurriculumIds) {
            if (!this.CurriculumMap[curriculumId]) { continue; }
            const curriculumObj = this.CurriculumMap[curriculumId];
            courseIds = [
              ...courseIds,
              ...Array.from(curriculumObj.CoursesId),
            ];
          }
          const courseIdSet = new Set(courseIds);
          return List.filter(e => courseIdSet.has(e.Id));
        }
      )
    ),
  ]).pipe(
    map(
      ([KeyWord, List]) => {
        if (!KeyWord) {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord));
      }
    )
  );

  fromDate = new FormControl('');
  toDate = new FormControl('');

  ngAfterViewInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'report-filters']);
    this.InitialLoad();
  }

  async InitialLoad() {
    await this.LoadValues();
  }

  async LoadValues() {
    await setTimeout(() => {}, 500);
    const {
      selectedEmployeeName,
      selectedCourse,
      selectedManager,
      selectedCountry,
      selectedCurriculum,
      fromDate,
      toDate,
      ManagerList,
      CountryList,
      CourseList,
      CurriculumList,
      CurriculumMap,
    } = this.data;
    this.CurriculumMap = CurriculumMap;
    this.ManagerList.next(ManagerList);
    this.CountryList.next(CountryList);
    this.CourseList.next(CourseList);
    this.CurriculumList.next(CurriculumList);

    this.selectedEmployeeName.setValue(selectedEmployeeName);
    this.selectedCurriculum.setValue(selectedCurriculum);
    this.selectedCourse.setValue(selectedCourse);
    this.selectedManager.setValue(selectedManager);
    this.selectedCountry.setValue(selectedCountry);
    this.fromDate.setValue(fromDate);
    this.toDate.setValue(toDate);
  }

  generate() {
    const {
      selectedEmployeeName,
      selectedCourse,
      selectedManager,
      selectedCountry,
      selectedCurriculum,
      fromDate,
      toDate,
    } = this;
    const returnData = {
      selectedEmployeeName: selectedEmployeeName.value,
      selectedCourse: selectedCourse.value,
      selectedManager: selectedManager.value,
      selectedCountry: selectedCountry.value,
      selectedCurriculum: selectedCurriculum.value,
      fromDate: fromDate.value,
      toDate: toDate.value,
    };
    this.dialogRef.close(returnData);
  }

}

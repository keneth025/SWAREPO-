import { Component, Inject, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Country } from 'src/app/core/data/model/dropdown.model';
import { Exam } from 'src/app/core/data/model/exam.model';
import { Person } from 'src/app/core/data/model/_model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { searchString } from 'src/app/core/util/data.util';

@Component({
  templateUrl: './exam-report-filter-dialog.component.html',
  styleUrls: ['./exam-report-filter-dialog.component.scss']
})
export class ExamReportFilterDialogComponent implements AfterViewInit {

  constructor(
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<ExamReportFilterDialogComponent>,
  ) { }

  CurriculumMap: { [Id: number]: Curriculum } = {};
  ExamMap: { [Id: number]: Exam } = {};

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

  selectedExam = new FormControl([]);
  ExamList = new BehaviorSubject<Exam[]>([]);
  ExamSearchFilter = new FormControl('');
  FilteredExamList = combineLatest([
    this.ExamSearchFilter.valueChanges.pipe(
      startWith(''),
    ),
    combineLatest([
      this.ExamList.pipe(startWith<Exam[]>([])),
      this.selectedCurriculum.valueChanges.pipe(
        tap(() => this.selectedExam.setValue([])),
        startWith([])
      )
    ]).pipe(
      map(
        ([List, selectedCurriculumIds]) => {
          const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
          let examIds: number[] = [];
          if (!hasSelectedCurriculumIds) { return List; }

          for (const curriculumId of selectedCurriculumIds) {
            if (!this.CurriculumMap[curriculumId]) { continue; }
            const curriculumObj = this.CurriculumMap[curriculumId];
            examIds = [
              ...examIds,
              ...Array.from(curriculumObj.ExamsId),
            ];
          }
          const examIdSet = new Set(examIds);
          return List.filter(e => examIdSet.has(e.Id));
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

  ngAfterViewInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'report-filters']);
    this.LoadValues();
  }


  async LoadValues() {
    await setTimeout(() => {}, 500);
    const {
      selectedEmployeeName,
      selectedExam,
      selectedManager,
      selectedCountry,
      selectedCurriculum,
      ManagerList,
      CountryList,
      ExamList,
      CurriculumList,
      CurriculumMap,
    } = this.data;
    this.CurriculumMap = CurriculumMap;
    this.ManagerList.next(ManagerList);
    this.CountryList.next(CountryList);
    this.ExamList.next(ExamList);
    this.CurriculumList.next(CurriculumList);

    this.selectedEmployeeName.setValue(selectedEmployeeName);
    this.selectedCurriculum.setValue(selectedCurriculum);
    this.selectedExam.setValue(selectedExam);
    this.selectedManager.setValue(selectedManager);
    this.selectedCountry.setValue(selectedCountry);
  }

  generate() {
    const {
      selectedEmployeeName,
      selectedExam,
      selectedManager,
      selectedCountry,
      selectedCurriculum,
    } = this;
    const returnData = {
      selectedEmployeeName: selectedEmployeeName.value,
      selectedExam: selectedExam.value,
      selectedManager: selectedManager.value,
      selectedCountry: selectedCountry.value,
      selectedCurriculum: selectedCurriculum.value,
    };
    this.dialogRef.close(returnData);
  }

}

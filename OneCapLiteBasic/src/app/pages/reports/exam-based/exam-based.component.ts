import { Component, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { switchMap, tap, map, startWith, debounceTime } from 'rxjs/operators';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Country, OrgLvl1, OrgLvl2 } from 'src/app/core/data/model/dropdown.model';
import { Exam, ExamStatus, UserExam } from 'src/app/core/data/model/exam.model';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { Person } from 'src/app/core/data/model/_model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserExamService } from 'src/app/core/data/service/user-exam.service';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { convertToFilterMap, searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { ExamReportFilterDialogComponent } from './exam-report-filter-dialog/exam-report-filter-dialog.component';

interface ExamBasedReportItem {
  Employee: Person;
  Manager: Person;
  Country: string;
  OrgLvl1: string;
  OrgLvl2: string;
  Exam: Exam;
  Status: ExamStatus;
  Score: string;
  CompletionDate: string;
  CompletionDateExport: string;
}

@Component({
  selector: 'app-exam-based',
  templateUrl: './exam-based.component.html',
  styleUrls: ['./exam-based.component.scss']
})
export class ExamBasedComponent implements AfterViewInit {

  ExamStatus = ExamStatus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: DialogService,
    private accountService: AccountService,
    private excelService: ExcelService,
    private dropdownService: DropdownService,
    private curriculumService: CurriculumService,
    private examService: ExamService,
    private userProfileService: UserProfileService,
    private userExamService: UserExamService,
  ) { }

  PageSize = 25;
  PageIsLoading = true;
  DataIsLoading = false;
  ProjectMembersLoading = false;
  ReportGenerated = false;
  DataToExport: ExamBasedReportItem[] = [];

  OrgLvl1Map: { [Id: number]: OrgLvl1 } = {};
  OrgLvl2Map: { [Id: number]: OrgLvl2 } = {};
  CountryMap: { [Id: number]: Country } = {};
  UserProfileMap: { [Id: number]: UserProfile } = {};

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
    this.CountryList,
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
    this.CurriculumList,
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
    this.ExamList,
    this.ExamSearchFilter.valueChanges.pipe(
      startWith(''),
    ),
    this.selectedCurriculum.valueChanges.pipe(
      tap(() => this.selectedExam.setValue([])),
      startWith([])
    )
  ]).pipe(
    map(
      ([List, KeyWord, selectedCurriculumIds]) => {
        const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
        let examIds: number[] = [];
        if (hasSelectedCurriculumIds) {
          for (const curriculumId of selectedCurriculumIds) {
            if (!this.CurriculumMap[curriculumId]) { continue; }
            const curriculumObj = this.CurriculumMap[curriculumId];
            examIds = [
              ...examIds,
              ...Array.from(curriculumObj.ExamsId),
            ];
          }
        }
        const examIdSet = new Set(examIds);

        if (KeyWord === '' && !hasSelectedCurriculumIds) {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord) && (!hasSelectedCurriculumIds || examIdSet.has(e.Id)));
      }
    )
  );

  fromDate = new FormControl('');
  toDate = new FormControl('');

  dataSource = combineLatest([
    this.selectedEmployeeName.valueChanges.pipe(
      debounceTime(250),
      startWith<string>(''),
    ),
    // #region Get Exam Data
    combineLatest([
      combineLatest([
        this.selectedCountry.valueChanges.pipe(startWith([])),
        this.selectedManager.valueChanges.pipe(startWith([])),
      ]).pipe(
        map(([selectedCountry, selectedManager]: [number[], number[]]) => {
          const hasSelectedCountry = selectedCountry.length > 0;
          const hasSelectedManager = selectedManager.length > 0;
          let userIds: number[] = [];
          if (hasSelectedCountry || hasSelectedManager) {
            userIds = Object.keys(this.UserProfileMap)
              .filter((e) => {
                const Id = parseInt(e, 10);
                return (!hasSelectedCountry || selectedCountry.includes(this.UserProfileMap[Id].CountryId)) &&
                  (!hasSelectedManager || selectedManager.includes(this.UserProfileMap[Id].Manager.Id));
              })
              .map(e => parseInt(e, 10));
            return {
              hasSelection: true,
              userIds
            };
          }
          return {
            hasSelection: false,
            userIds,
          };
        })
      ),
      combineLatest([
        this.selectedCurriculum.valueChanges,
        this.selectedExam.valueChanges,
      ]).pipe(
        tap(() => this.DataIsLoading = true),
        debounceTime(250),
        switchMap(([curriculumId, examId]: [number[], number[]]) => {
          if (this.ReportGenerated) {

            const hasExam = examId.length > 0;
            const hasCurriculum = curriculumId.length > 0;
            let examIdSet = new Set<number>();

            if (hasExam) {
              examIdSet = new Set(examId);
            } else if (hasCurriculum) {
              const returnExamId = curriculumId.map(e => this.CurriculumMap[e])
                .reduce<number[]>(
                  (returnVal, currentVal) => [
                    ...returnVal,
                    ...Array.from(currentVal.ExamsId),
                  ], []
                );
              examIdSet = new Set(returnExamId);
            }

            if (hasExam || hasCurriculum) {
              const examIdQuery = Array.from(examIdSet).sort(
                (a, b) => {
                  const titleA = this.ExamMap[a].Title.trim();
                  const titleB = this.ExamMap[b].Title.trim();
                  if (titleA > titleB) {
                    return 1;
                  }
                  if (titleA < titleB) {
                    return -1;
                  }
                  return 0;
                }
              );
              if (examIdQuery.length > 0) {
                return this.userExamService.getReport(examIdQuery);
              }
              return Promise.resolve<UserExam[]>([]);
            }

            if (!this.accountService.account.IsSiteOwner) {
              const ExamIds = this.ExamList.value.map(e => e.Id);
              if (ExamIds.length > 0) {
                return this.userExamService.getReport(ExamIds);
              }
            } else {
              return this.userExamService.getReport();
            }
          }
          return Promise.resolve<UserExam[]>([]);
        }),
        tap(() => this.DataIsLoading = false),
        startWith<UserExam[]>([]),
      ),
    ]).pipe(
      map(([userProfileResult, reportData]) => {
        const hasSelections = userProfileResult.hasSelection;
        if (hasSelections) {
          let userIds: number[] = [];
          if (userProfileResult.hasSelection) {
            userIds = userProfileResult.userIds;
          }
          const userIdSet = new Set(userIds);
          return reportData.filter(e => userIdSet.has(e.User.Id));
        }
        return reportData;
      })
    )
    // #endregion Get Exam Data
  ]).pipe(
    tap(() => this.pageIndex.next(0)),
    map(
      ([employeeQuery, reportData]) => {
        const hasQuery = (employeeQuery);
        if (!hasQuery) { return reportData; }
        return reportData.filter(
          (item) => {
            const searchQuery = searchString(item.User.Title, employeeQuery) || searchString(item.User.EMail, employeeQuery);
            return searchQuery;
          }
        );
      }
    ),
    map(
      (reportData) => reportData.map<ExamBasedReportItem>(
        (item) => {
          const {
            CountryId,
            Manager,
            OrgLvl2Id,
          } = this.UserProfileMap[item.User.Id] ? this.UserProfileMap[item.User.Id] : new UserProfile({});
          const country = this.CountryMap[CountryId];
          const orgLvl2 = this.OrgLvl2Map[OrgLvl2Id];
          const orgLvl1 = orgLvl2 ? this.OrgLvl1Map[orgLvl2.OrgLvl1Id] : null;
          return {
            Employee: item.User,
            Manager,
            Country: country ? country.Title : '',
            OrgLvl1: orgLvl1 ? orgLvl1.Title : '',
            OrgLvl2: orgLvl2 ? orgLvl2.Title : '',
            Exam: this.ExamMap[item.ExamId],
            Status: item.Status,
            Score: item.Status === ExamStatus.NOT_YET_TAKEN ? 'N/A' : `${item.Score} %`,
            CompletionDate: item.Status === ExamStatus.PASSED ? item.DateModified : '',
            CompletionDateExport: item.Status === ExamStatus.PASSED ? item.DateModifiedExport : '',
          };
        }
      )
    ),
    tap((data) => this.DataToExport = data),
  );

  pageIndex = new BehaviorSubject(0);

  paginatedDataSource = combineLatest([
    this.pageIndex.pipe(startWith(0)),
    this.dataSource,
  ]).pipe(
    map(([pageIndex, dataSource]) => {
      const { PageSize } = this;
      const pagedData = dataSource.slice(pageIndex * PageSize, (pageIndex + 1) * PageSize);
      return {
        hasData: dataSource.length > 0,
        hasNext: (pageIndex + 1) * PageSize < dataSource.length,
        hasPrevious: (pageIndex > 0),
        currentIndex: pageIndex,
        data: pagedData,
      };
    })
  );

  ngAfterViewInit() {
    this.LoadPage();
  }

  async LoadPage() {
    this.PageIsLoading = true;
    await this.LoadFilters();
    this.PageIsLoading = false;
    await this.openReportsFilterDialog();
  }

  async LoadFilters() {
    const [
      orgLvl1List,
      orgLvl2List,
      countryList,
      curriculumList,
      examList,
      userProfileList,
    ] = await Promise.all([
      this.dropdownService.getOrgLvl1(),
      this.dropdownService.getOrgLvl2(),
      this.dropdownService.getCountry(),
      this.curriculumService.getAll(),
      this.examService.getAll(),
      this.userProfileService.getAll(),
    ]);

    let FilteredCurriculumList = curriculumList;
    let FilteredExamList = examList;

    FilteredCurriculumList = FilteredCurriculumList.filter(e => e.IsOwner);
    FilteredExamList = FilteredExamList.filter(e => e.IsOwner);

    this.OrgLvl1Map = convertToFilterMap(orgLvl1List);
    this.OrgLvl2Map = convertToFilterMap(orgLvl2List);
    this.CountryMap = convertToFilterMap(countryList);
    this.CurriculumMap = convertToFilterMap(curriculumList);
    this.ExamMap = convertToFilterMap(examList);

    let userProfileMap: { [Id: number]: UserProfile } = {};
    let managerList: Person[] = [];
    for (const userProfile of userProfileList) {
      if (!userProfile.User) {
        console.error(`[Reports] User Profile Id: ${userProfile.Id} has no Employee.`);
        continue;
      }
      if (!managerList.some(e => e.Id === userProfile.Manager.Id)) {
        managerList = [
          ...managerList,
          userProfile.Manager
        ];
      }
      userProfileMap = {
        ...userProfileMap,
        [userProfile.User.Id]: userProfile
      };
    }

    this.UserProfileMap = userProfileMap;

    this.ManagerList.next(managerList);
    this.CountryList.next(countryList);

    this.CurriculumList.next(FilteredCurriculumList);
    this.ExamList.next(FilteredExamList);
  }

  async openReportsFilterDialog() {
    const dialog = this.dialog.open(
      ExamReportFilterDialogComponent, {
        data: {
          selectedEmployeeName: this.selectedEmployeeName.value,
          selectedExam: this.selectedExam.value,
          selectedManager: this.selectedManager.value,
          selectedCountry: this.selectedCountry.value,
          selectedCurriculum: this.selectedCurriculum.value,
          fromDate: this.fromDate.value,
          toDate: this.toDate.value,
          ManagerList: this.ManagerList.value,
          CountryList: this.CountryList.value,
          ExamList: this.ExamList.value,
          CurriculumList: this.CurriculumList.value,
          CurriculumMap: this.CurriculumMap,
        }
      }
    );
    const data = await dialog.afterClosed().toPromise();
    if (data) {
      const {
        selectedEmployeeName,
        selectedExam,
        selectedManager,
        selectedCountry,
        selectedCurriculum,
        selectedProject,
        fromDate,
        toDate,
      } = data;
      this.ReportGenerated = true;
      this.selectedEmployeeName.setValue(selectedEmployeeName);
      this.selectedManager.setValue(selectedManager);
      this.selectedCountry.setValue(selectedCountry);
      this.selectedCurriculum.setValue(selectedCurriculum);
      this.selectedExam.setValue(selectedExam);
      this.fromDate.setValue(fromDate);
      this.toDate.setValue(toDate);
    }
  }

  async export() {
    const ExportData = this.DataToExport.map(
      (item) => {
        const {
          Employee,
          Manager,
          Country: CountryName,
          OrgLvl1: OrgLvl1Name,
          OrgLvl2: OrgLvl2Name,
          Exam: ExamObj,
          Status,
          Score,
        } = item;
        return {
          ['Name']: Employee ? Employee.Title : '',
          ['EMail']: Employee ? Employee.EMail : '',
          ['Manager']: Manager ? Manager.Title : '',
          ['Org Level 1']: OrgLvl1Name,
          ['Org Level 2']: OrgLvl2Name,
          ['Country']: CountryName,
          ['Exam Name']: ExamObj ? ExamObj.Title : '',
          ['Completion Status']: Status,
          ['Score']: Score,
        };
      }
    );

    this.excelService.exportAsExcelFile(ExportData, 'EXAM_BASED_REPORT');
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}

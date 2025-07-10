import { AfterViewInit, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith, switchMap, tap } from 'rxjs/operators';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { Country, OrgLvl1, OrgLvl2 } from 'src/app/core/data/model/dropdown.model';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { Person } from 'src/app/core/data/model/_model';
import { AccountService } from 'src/app/core/data/service/account.service';
import { CourseService } from 'src/app/core/data/service/course.service';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { convertToFilterMap, searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { CourseReportFilterDialogComponent } from './course-report-filter-dialog/course-report-filter-dialog.component';


interface CourseBasedReportItem {
  Employee: Person;
  Manager: Person;
  Country: string;
  OrgLvl1: string;
  OrgLvl2: string;
  Course: Course;
  Status: string;
  CompletionDate: string;
  CompletionDateExport: string;
}

@Component({
  selector: 'app-course-based',
  templateUrl: './course-based.component.html',
  styleUrls: ['./course-based.component.scss']
})
export class CourseBasedComponent implements AfterViewInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private dialog: DialogService,
    private accountService: AccountService,
    private excelService: ExcelService,
    private dropdownService: DropdownService,
    private curriculumService: CurriculumService,
    private courseService: CourseService,
    private userProfileService: UserProfileService,
    private userCourseService: UserCourseService,
  ) { }

  CurrentAccount = null;

  PageSize = 25;
  PageIsLoading = true;
  DataIsLoading = false;
  ProjectMembersLoading = false;
  ReportGenerated = false;
  DataToExport: CourseBasedReportItem[] = [];

  OrgLvl1Map: { [Id: number]: OrgLvl1 } = {};
  OrgLvl2Map: { [Id: number]: OrgLvl2 } = {};
  CountryMap: { [Id: number]: Country } = {};
  UserProfileMap: { [Id: number]: UserProfile } = {};

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

  selectedCourse = new FormControl([]);
  CourseList = new BehaviorSubject<Course[]>([]);
  CourseSearchFilter = new FormControl('');
  FilteredCourseList = combineLatest([
    this.CourseList,
    this.CourseSearchFilter.valueChanges.pipe(
      startWith(''),
    ),
    this.selectedCurriculum.valueChanges.pipe(
      tap(() => this.selectedCourse.setValue([])),
      startWith([])
    )
  ]).pipe(
    map(
      ([List, KeyWord, selectedCurriculumIds]) => {
        const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
        let courseIds: number[] = [];
        if (hasSelectedCurriculumIds) {
          for (const curriculumId of selectedCurriculumIds) {
            if (!this.CurriculumMap[curriculumId]) { continue; }
            const curriculumObj = this.CurriculumMap[curriculumId];
            courseIds = [
              ...courseIds,
              ...Array.from(curriculumObj.CoursesId),
            ];
          }
        }
        const courseIdSet = new Set(courseIds);

        if (KeyWord === '' && !hasSelectedCurriculumIds) {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord) && (!hasSelectedCurriculumIds || courseIdSet.has(e.Id)));
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
    this.fromDate.valueChanges.pipe(
      debounceTime(250),
      startWith<string>(''),
      map(data => {
        if (!data) {
          return null;
        }
        return new Date(data);
      })
    ),
    this.toDate.valueChanges.pipe(
      debounceTime(250),
      startWith<string>(''),
      map(data => {
        if (!data) {
          return null;
        }
        const ToDate = new Date(data);
        ToDate.setDate(ToDate.getDate() + 1);
        return ToDate;
      })
    ),
    // #region Get Course Data
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
        this.selectedCourse.valueChanges,
      ]).pipe(
        tap(() => this.DataIsLoading = true),
        debounceTime(250),
        switchMap(([curriculumId, courseId]: [number[], number[]]) => {
          if (this.ReportGenerated) {

            const hasCourse = courseId.length > 0;
            const hasCurriculum = curriculumId.length > 0;
            let courseIdSet = new Set<number>();

            if (hasCourse) {
              courseIdSet = new Set(courseId);
            } else if (hasCurriculum) {
              const returnCourseId = curriculumId.map(e => this.CurriculumMap[e])
                .reduce<number[]>(
                  (returnVal, currentVal) => [
                    ...returnVal,
                    ...Array.from(currentVal.CoursesId),
                  ], []
                );
              courseIdSet = new Set(returnCourseId);
            }

            if (hasCourse || hasCurriculum) {
              const courseIdQuery = Array.from(courseIdSet).sort(
                (a, b) => {
                  const titleA = this.CourseMap[a].Title.trim();
                  const titleB = this.CourseMap[b].Title.trim();
                  if (titleA > titleB) {
                    return 1;
                  }
                  if (titleA < titleB) {
                    return -1;
                  }
                  return 0;
                }
              );
              if (courseIdQuery.length > 0) {
                return this.userCourseService.getReport(courseIdQuery);
              }
              return Promise.resolve<UserCourse[]>([]);
            }

            if (!this.accountService.account.IsSiteOwner) {
              const CourseIds = this.CourseList.value.map(e => e.Id);
              if (CourseIds.length > 0) {
                return this.userCourseService.getReport(CourseIds);
              }
            } else {
              return this.userCourseService.getReport();
            }
          }
          return Promise.resolve<UserCourse[]>([]);
        }),
        tap(() => this.DataIsLoading = false),
        startWith<UserCourse[]>([]),
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
    // #endregion Get Course Data
  ]).pipe(
    tap(() => this.pageIndex.next(0)),
    map(
      ([employeeQuery, fromDate, toDate, reportData]) => {
        const hasQuery = (employeeQuery || fromDate || toDate);
        if (!hasQuery) { return reportData; }
        return reportData.filter(
          (item) => {
            const searchQuery = searchString(item.User.Title, employeeQuery) || searchString(item.User.EMail, employeeQuery);
            const hasCompleted = (fromDate || toDate) ? item.Status === CourseStatus.Completed : true;
            const hasFromDate = !fromDate || (fromDate.getTime() < item.Modified.getTime());
            const hasToDate = !toDate || (toDate.getTime() > item.Modified.getTime());
            return searchQuery && hasCompleted && hasFromDate && hasToDate;
          }
        );
      }
    ),
    map(
      (reportData) => reportData.map<CourseBasedReportItem>(
        (item) => {
          const {
            CountryId,
            Manager,
            OrgLvl2Id
          } = this.UserProfileMap[item.User.Id] ? this.UserProfileMap[item.User.Id] : new UserProfile({});
          const country = this.CountryMap[CountryId];
          const orgLvl2 = this.OrgLvl2Map[OrgLvl2Id];
          const orgLvl1 = orgLvl2 ? this.OrgLvl1Map[orgLvl2.OrgLvl1Id] : null;
          return {
            Employee: item.User,
            Manager,
            Country: country?.Title || '',
            OrgLvl1: orgLvl1?.Title || '',
            OrgLvl2: orgLvl2?.Title || '',
            Course: this.CourseMap[item.CourseId],
            Status: item.Status,
            CompletionDate: item.Status === CourseStatus.Completed ? item.DateModified : '',
            CompletionDateExport: item.Status === CourseStatus.Completed ? item.DateModifiedExport : '',
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
      courseList,
      userProfileList,
    ] = await Promise.all([
      this.dropdownService.getOrgLvl1(),
      this.dropdownService.getOrgLvl2(),
      this.dropdownService.getCountry(),
      this.curriculumService.getAll(),
      this.courseService.getAll(),
      this.userProfileService.getAll(),
    ]);

    const FilteredCurriculumList = curriculumList.filter(e => e.IsOwner);
    const FilteredCourseList = courseList.filter(e => e.IsOwner);

    this.OrgLvl1Map = convertToFilterMap(orgLvl1List);
    this.OrgLvl2Map = convertToFilterMap(orgLvl2List);
    this.CountryMap = convertToFilterMap(countryList);
    this.CurriculumMap = convertToFilterMap(curriculumList);
    this.CourseMap = convertToFilterMap(courseList);

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
    this.CourseList.next(FilteredCourseList);
  }

  async openReportsFilterDialog() {
    const dialog = this.dialog.open(CourseReportFilterDialogComponent, {
      data: {
        selectedEmployeeName: this.selectedEmployeeName.value,
        selectedCourse: this.selectedCourse.value,
        selectedManager: this.selectedManager.value,
        selectedCountry: this.selectedCountry.value,
        selectedCurriculum: this.selectedCurriculum.value,
        fromDate: this.fromDate.value,
        toDate: this.toDate.value,
        ManagerList: this.ManagerList.value,
        CountryList: this.CountryList.value,
        CourseList: this.CourseList.value,
        CurriculumList: this.CurriculumList.value,
        CurriculumMap: this.CurriculumMap,
      }
    });
    const data = await dialog.afterClosed().toPromise();
    if (data) {
      const {
        selectedEmployeeName,
        selectedCourse,
        selectedManager,
        selectedCountry,
        selectedCurriculum,
        fromDate,
        toDate,
      } = data;
      this.ReportGenerated = true;
      this.selectedEmployeeName.setValue(selectedEmployeeName);
      this.selectedManager.setValue(selectedManager);
      this.selectedCountry.setValue(selectedCountry);
      this.selectedCurriculum.setValue(selectedCurriculum);
      this.selectedCourse.setValue(selectedCourse);
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
          Course: CourseObj,
          Status,
          CompletionDateExport,
        } = item;
        return {
          ['Name']: Employee ? Employee.Title : '',
          ['EMail']: Employee ? Employee.EMail : '',
          ['Manager']: Manager ? Manager.Title : '',
          ['Org Level 1']: OrgLvl1Name,
          ['Org Level 2']: OrgLvl2Name,
          ['Country']: CountryName,
          ['Course Name']: CourseObj ? CourseObj.Title : '',
          ['Course Duration']: CourseObj ? CourseObj.Duration : '',
          ['Completion Status']: Status,
          ['Completion Date']: CompletionDateExport,
        };
      }
    );

    this.excelService.exportAsExcelFile(ExportData, 'COURSE_BASED_REPORT');
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}

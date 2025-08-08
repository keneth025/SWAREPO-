import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PagedItemCollection } from '@pnp/sp/items';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { Country } from 'src/app/core/data/model/dropdown.model';
import { UserRole } from 'src/app/core/data/model/role.model';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { EditEmployeeDialogComponent } from './dialog/edit-employee-dialog/edit-employee-dialog.component';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.scss']
})
export class AdminEmployeeComponent implements OnInit {
  constructor(
    private dialog: DialogService,
    private userProfileService: UserProfileService,
    private userRoleService: UserRoleService,
    private dropdownService: DropdownService,
  ) {}

  pageIsLoading = false;
  dataIsLoading = true;

  countryList = new BehaviorSubject<Country[]>([]);

  userFilter = new FormControl('');
  managerFilter = new FormControl('');
  countryIdFilter = new FormControl(-1);

  userRoleMap: { [userId: number]: UserRole[] } = {};

  userProfileList = new BehaviorSubject<UserProfile[]>([]);

  userProfileFilters = combineLatest([
    this.userFilter.valueChanges.pipe(startWith('')),
    this.managerFilter.valueChanges.pipe(startWith('')),
    this.countryIdFilter.valueChanges.pipe(startWith(-1)),
  ]).pipe(
    map(([userFilter, managerFilter, countryIdFilter]) => [
      (userFilter as string).trim(),
      (managerFilter as string).trim(),
      (countryIdFilter as number)
    ]),
  );

  filteredUserProfileList = combineLatest([
    this.userProfileFilters,
    this.userProfileList,
  ]).pipe(
    map(
      ([listFilters, list]) => {
        const [userFilter, managerFilter, countryIdFilter] = listFilters;
        return list.filter(
          (userProfile) => {
            let isUser = true;
            if (userFilter) {
              isUser = searchString(userProfile.User.Title, (userFilter as string))
              || searchString(userProfile.User.EMail, (userFilter as string));
            }

            let isManager = true;
            if (managerFilter) {
              isManager = searchString(userProfile.Manager.Title, (managerFilter as string))
              || searchString(userProfile.Manager.EMail, (managerFilter as string));
            }

            let isCountry = true;
            if (countryIdFilter > 0) {
              isCountry = userProfile.CountryId === countryIdFilter;
            }
            return [
              isUser,
              isManager,
              isCountry
            ].every(e => e);
          }
        );
      }
    )
  );

  ngOnInit() {
    this.loadFilters()
    .then(() => this.loadData());
  }

  async loadFilters() {
    this.pageIsLoading = true;
    const tempCountryList = await this.dropdownService.getCountry();
    this.countryList.next(tempCountryList);
    this.pageIsLoading = false;
  }

  async loadData() {
    this.dataIsLoading = true;
    const list = await this.userProfileService.getAll();
    this.userProfileList.next(list);
    const userRoleList = await this.userRoleService.getReport();
    this.userRoleMap = {};
    for (const item of userRoleList) {
      if (!this.userRoleMap[item?.User?.Id]) {
        this.userRoleMap[item?.User?.Id] = [];
      }
      this.userRoleMap[item?.User?.Id].push(item);
    }
    this.dataIsLoading = false;
    console.log(this.userProfileList.value);
  }

  async create() {
    const addDialog = this.dialog.open(EditEmployeeDialogComponent);

    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async update(data: UserProfile) {
    const editDialog = this.dialog.open(
      EditEmployeeDialogComponent,
      { data: { userProfile: new UserProfile(data) } }
    );
    const isSaved = await editDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async delete(data: UserProfile) {
    const promptDialog = this.dialog.deleteDialog(data.User.Title);
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      const loaderDialog = this.dialog.loaderDialog();
      await this.userProfileService.delete(data);
      loaderDialog.close();
      await this.loadData();
    }
  }

}

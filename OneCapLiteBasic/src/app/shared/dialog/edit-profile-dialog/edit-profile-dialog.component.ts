import { BehaviorSubject, combineLatest, merge } from 'rxjs';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Country, OrgLvl1, OrgLvl2 } from 'src/app/core/data/model/dropdown.model';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { MatStepper } from '@angular/material/stepper';
import { RoleService } from 'src/app/core/data/service/role.service';
import { isNotString } from 'src/app/core/util/validator.util';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IPeoplePickerEntity } from '@pnp/sp/profiles';
import { Person } from 'src/app/core/data/model/_model';
import { Role, UserRole } from 'src/app/core/data/model/role.model';
import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { searchString } from 'src/app/core/util/data.util';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { AccountService } from 'src/app/core/data/service/account.service';


const isNotValidOrgLvl: ValidatorFn = (control) => {
  const OrgLvl1Value = control.value.OrgLvl1;
  const OrgLvl2Value = control.value.OrgLvl2;
  if (OrgLvl1Value !== null && OrgLvl2Value === null) {
    control.get('OrgLvl2').setErrors({ isNotValidServiceLine: true });
    return { isNotValidServiceLine: true };
  }
  return null;
};

@Component({
  templateUrl: './edit-profile-dialog.component.html',
  styleUrls: ['./edit-profile-dialog.component.scss']
})
export class EditProfileDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private userService: UserService,
    private dropdownService: DropdownService,
    private roleService: RoleService,
    private userRoleService: UserRoleService,
    private userProfileService: UserProfileService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
  ) { }

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  // Data
  ActiveProfile: UserProfile = null;
  dialogIsLoading = true;
  roleIsLoading = true;
  FormDetails = new FormGroup({
    Id: new FormControl(-1),
    Employee: new FormControl('', {
      validators: [
        Validators.required,
        isNotString,
      ]
    }),
    Manager: new FormControl('', {
      validators: [
        Validators.required,
        isNotString,
      ]
    }),
    Country: new FormControl(null),
    OrgLvl1: new FormControl(null),
    OrgLvl2: new FormControl(null),
  }, {
    validators: [isNotValidOrgLvl]
  });

  CountryList = new BehaviorSubject<Country[]>([]);

  OrgLvl1List = new BehaviorSubject<OrgLvl1[]>([]);
  OrgLvl2List = new BehaviorSubject<OrgLvl2[]>([]);
  FilteredOrgLvl2List = combineLatest([
    this.FormDetails.get('OrgLvl1').valueChanges.pipe(
      tap(() => this.FormDetails.get('OrgLvl2').setValue(null)),
      startWith(null as OrgLvl1),
    ),
    this.OrgLvl2List
  ]).pipe(
    map(
      ([selectedCategory, List]) => {
        if (selectedCategory === null) { return []; }
        return List.filter(e => e.OrgLvl1Id === selectedCategory.Id);
      }
    )
  );

  IsSearchingUser = false;
  SearchUserList = merge(
    this.FormDetails.get('Employee').valueChanges.pipe(startWith('')),
    this.FormDetails.get('Manager').valueChanges.pipe(startWith('')),
  ).pipe(
    tap(() => this.IsSearchingUser = true),
    debounceTime(750),
    distinctUntilChanged(),
    map((input) => typeof input === 'string' ? input : null),
    switchMap((input) => input ? this.userService.searchUser(input) : Promise.resolve([])),
    tap(() => this.IsSearchingUser = false),
  );

  SavedRoles: UserRole[] = [];
  AssignedRole = new SelectionModel<Role>(true);
  AssignedRole$ = this.AssignedRole.changed.pipe(
    startWith(null as SelectionChange<Role>),
    map(data => data?.source?.selected || [])
  );
  RoleSearchFilter = new FormControl('');
  RoleList = new BehaviorSubject<Role[]>([]);
  FilteredRoleList$ = combineLatest([
    this.AssignedRole$,
    this.RoleList,
    this.RoleSearchFilter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([ SelectedItems, List, SearchFilter]) => List.filter(
      (e) => {
        SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
        const isSearched = searchString(e.Title, SearchFilter);
        const isNotSelected = !SelectedItems.includes(e);
        return [
          isSearched,
          isNotSelected,
        ].every(c => c);
      }
    ))
  );

  dialogName = () => `Edit Profile`;

  displayFn = (data) => data?.DisplayText || data?.Title || '';

  closeDialog() {
    const self = this;
    const promptDialog = self.dialog.promptDialog(
      this.dialogName(),
      'Changes will NOT be saved. Proceed?',
    );
    promptDialog.afterClosed().subscribe(
      (proceed: boolean) => {
        if (proceed) {
          self.dialogRef.close(false);
        }
      }
    );
  }

  ngOnInit(): void {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
    this.initialLoad();
  }

  async initialLoad() {
    this.dialogIsLoading = true;
    this.roleIsLoading = true;

    const [
      CountryList,
      OrgLvl1List,
      OrgLvl2List,
    ] = await Promise.all([
      this.dropdownService.getCountry(),
      this.dropdownService.getOrgLvl1(),
      this.dropdownService.getOrgLvl2(),
    ]);

    this.CountryList.next(CountryList);
    this.OrgLvl1List.next(OrgLvl1List);
    this.OrgLvl2List.next(OrgLvl2List);

    await this.updateDetails();
    this.dialogIsLoading = false;
    const roleList = await this.roleService.getAll();
    this.RoleList.next(roleList);
    await this.updateRoles();
    this.roleIsLoading = false;

  }

  async updateDetails() {
    this.ActiveProfile = await this.userProfileService.getItemByUserId(this.accountService.account.Id);
    const { Id, User, Manager, CountryId, OrgLvl2Id } = this.ActiveProfile;
    const OrgLvl2Obj = this.OrgLvl2List.value.find(e => e.Id === OrgLvl2Id);
    const OrgLvl1Obj = this.OrgLvl1List.value.find(e => e.Id === OrgLvl2Obj?.OrgLvl1Id);
    const CountryObj = this.CountryList.value.find(e => e.Id === CountryId);

    this.FormDetails.patchValue({
      Id,
      Manager,
      Employee: User,
      Country: CountryObj || null,
      OrgLvl1: OrgLvl1Obj || null,
      OrgLvl2: OrgLvl2Obj || null,
    });
    this.FormDetails.get('Employee').disable();
  }

  async updateRoles() {
    const { User } = this.ActiveProfile;
    this.SavedRoles = await this.userRoleService.getRolesByUserId(User.Id);
    const assignedRoles = this.SavedRoles
      .map(e => this.RoleList.value.find(i => i.Id === e.RoleId))
      .filter(e => e);
    this.AssignedRole.select(...assignedRoles);
  }

  async ensureManager($event: MatAutocompleteSelectedEvent) {
    const managerObj: IPeoplePickerEntity = $event.option.value;
    const loginName = managerObj.Key;
    const loader = this.dialog.loaderDialog();
    const managerData = await this.userService.ensureUser(loginName);
    this.FormDetails.get('Manager').setValue(managerData);
    loader.close();
  }

  async save() {
    const loader = this.dialog.loaderDialog();
    const {
      Id,
      Employee,
      Manager,
      Country: CountryValue,
      OrgLvl1: OrgLvl1Value,
      OrgLvl2: OrgLvl2Value,
    } = this.FormDetails.getRawValue();
    const requesData = new UserProfile({
      Id,
      User: (Employee as Person),
      Manager: (Manager as Person),
      CountryId: (CountryValue as Country)?.Id || -1,
      OrgLvl2Id: (OrgLvl2Value as OrgLvl2)?.Id || -1,
    });
    await this.userProfileService.save(requesData);

    const currentRoles = this.AssignedRole.selected;

    const rolesToSave = currentRoles
      .filter(e => !this.SavedRoles.some(i => i.RoleId === e.Id))
      .map(e => new UserRole({RoleId: e.Id, User: Employee}));
    const rolesToRemove = this.SavedRoles.filter(e => !currentRoles.some(i => i.Id === e.RoleId));
    await Promise.all([
      this.userRoleService.batchSave(rolesToSave),
      this.userRoleService.batchDelete(rolesToRemove),
    ]);
    loader.close();
    this.dialogRef.close(true);
  }

}

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
import { convertToFilterMap, convertToMap, searchString, validateEmailFormat } from 'src/app/core/util/data.util';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';
import { environment } from 'src/environments/environment';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { itemStatus } from 'src/app/core/data/service/_service';


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
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private userService: UserService,
    private dropdownService: DropdownService,
    private roleService: RoleService,
    private userRoleService: UserRoleService,
    private userProfileService: UserProfileService,
    private excelService: ExcelService,
    public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { userProfile: UserProfile },
  ) { }

  @ViewChild('stepper', { static: true }) stepper: MatStepper;

  isBatch = false;

  templateLink = environment.CREATE_EMPLOYEE_TEMPLATE;

  // Selected File
  batchProcessing   = false;
  isUploadDone      = false;
  hasInvalidRows    = false;
  invalidRows       = [];
  selectedFile: File;

  invalidUsers   = [];
  invalidOrgLvl1 = [];
  invalidOrgLvl2 = [];
  invalidRoles   = [];

  savedUsersCount     = 0;
  rolesAssignedCount  = 0;

  dialogTitle: 'Edit' | 'Create' = 'Create';

  // Data
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

  dialogName = () => `${this.dialogTitle} Employee`;

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
    this.dialogTitle = this.data ? 'Edit' : 'Create';
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
    if (this.data) {
      const { Id, User, Manager, CountryId, OrgLvl2Id } = this.data.userProfile;
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
  }

  async updateRoles() {
    if (this.data) {
      const { User } = this.data.userProfile;
      this.SavedRoles = await this.userRoleService.getRolesByUserId(User.Id);
      const assignedRoles = this.SavedRoles
        .map(e => this.RoleList.value.find(i => i.Id === e.RoleId))
        .filter(e => e);
      this.AssignedRole.select(...assignedRoles);
    }
  }

  async ensureEmployee($event: MatAutocompleteSelectedEvent) {
    const employeeObj: IPeoplePickerEntity = $event.option.value;
    const loginName = employeeObj.Key;
    const loader = this.dialog.loaderDialog();
    const [
      employeeData,
      managerData,
    ] = await Promise.all([
      this.userService.ensureUser(loginName),
      this.userService.getUserManager(loginName),
    ]);
    this.FormDetails.get('Employee').setValue(employeeData);
    this.FormDetails.get('Manager').setValue(managerData);
    loader.close();
  }

  async ensureManager($event: MatAutocompleteSelectedEvent) {
    const managerObj: IPeoplePickerEntity = $event.option.value;
    const loginName = managerObj.Key;
    const loader = this.dialog.loaderDialog();
    const managerData = await this.userService.ensureUser(loginName);
    this.FormDetails.get('Manager').setValue(managerData);
    loader.close();
  }

  async validateUserExistence(skipAssignment = false) {
    const loader = this.dialog.loaderDialog();
    const ItemId = this.FormDetails.get('Id').value as number;
    const EmployeeData = this.FormDetails.get('Employee').value as Person;
    const valid = await this.userProfileService.validateUserExistence(EmployeeData.EMail, ItemId);
    if (!valid) {
      loader.close();
      this.dialog.alertDialog(
        this.dialogName(),
        `${EmployeeData.Title} is already registered.`,
      );
    } else {
      loader.close();
      if (skipAssignment) {
        this.stepper.selectedIndex = 2;
      } else {
        this.stepper.next();
      }
    }
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

  // #region Upload File Functions
  uploadFileUpdated($event) {
    this.hasInvalidRows = false;
    this.isUploadDone = false;
    this.selectedFile = ($event.target as any).files[0];
  }

  validateTemplate() {
    this.hasInvalidRows = false;
    const { selectedFile } = this;

    if (!selectedFile) { throw new Error('No file selected.'); }

    const reader: FileReader = new FileReader();
    reader.onload = (fileData: any) => {
      const data = this.excelService.convertExcelDataToJsonData(fileData.target.result);
      const formattedData = this.formatData(data);
      console.log('Formatted Data', formattedData);

      if (!formattedData.isValid) {

        this.dialog.alertDialog(
          `Create Employee`,
          formattedData.message,
        );

      } else {
        console.log('Formatted data', formattedData);
        this.processUploadedData(formattedData);
      }

    };

    reader.readAsBinaryString(this.selectedFile);
  }

  formatData(data) {
    const wsdata          = data['Employee Template'];
    let isValid           = true;
    let message           = '';
    let employeeData      = [];
    let emailsList        = [];
    let orgLvl1List       = [];
    let orgLvl2List       = [];
    let roleList          = [];
    let invalidRows       = [];
    let records           = {};

    if (!wsdata) {
      isValid = false;
      message = `Uploaded file doesn't have 'Employee Template' worksheet.`;
    } else {
      employeeData = wsdata.slice(1);
    }

    if (isValid) {
      for (const [index, item] of employeeData.entries())  {
        const [
          email,
          orgLvl1,
          orgLvl2,
          roleString,
        ] = item;

        const roles = roleString ? (roleString + '').split(';').map(e => e.trim()) : [];

        if (!validateEmailFormat(email)) {
          invalidRows = [...invalidRows, (index + 2)];
        }

        // Email section
        if (!emailsList.includes(email)) {
          emailsList = [...emailsList, email];
        }

        // OrgLvl1
        if (!orgLvl1List.includes(orgLvl1)) {
          orgLvl1List = [...orgLvl1List, orgLvl1];
        }

        // OrgLvl2
        if (!orgLvl2List.includes(orgLvl2)) {
          orgLvl2List = [...orgLvl2List, orgLvl2];
        }

        // Roles
        for (const role of roles) {
          if (!roleList.includes(role)) {
            roleList = [...roleList, role];
          }
        }

        if (!records[email]) {
          records = {
            ...records,
            [email]: {
              email,
              orgLvl1,
              orgLvl2,
              roles,
            }
          };
        } else {
          records[email].orgLvl1  = orgLvl1;
          records[email].orgLvl2  = orgLvl2;
          records[email].roles    = roles;
        }
      }

      if (invalidRows.length > 0) {
        isValid           = false;
        message           = `Uploaded file has invalid data.`;

        this.hasInvalidRows = true;
        this.invalidRows    = invalidRows;
      }
    }

    return {
      isValid,
      message,
      emailsList,
      orgLvl1List,
      orgLvl2List,
      roleList,
      invalidRows,
      records,
    };
  }

  async processUploadedData(processedData) {
    const {
      emailsList,
      orgLvl1List,
      orgLvl2List,
      roleList,
      records
    } = processedData;
    let savingRecords: UserProfile[] = [];
    let savingUserRoleRecords: UserRole[] = [];
    const loader = this.dialog.loaderDialog();
    this.batchProcessing = true;
    const emailObjArr = (await this.userService.batchResolveUserEmailAndManager(emailsList));

    const emailMap = convertToMap(emailsList, emailObjArr, 'email');
    const orgLvl1Map = convertToMap(orgLvl1List, this.OrgLvl1List.value);
    const orgLvl2Map = convertToMap(orgLvl2List, this.OrgLvl2List.value);
    const roleMap = convertToMap(roleList, this.RoleList.value);

    if (records !== {}) {
      let invalidUsers  = [];
      let invalidOrgLvl1 = [];
      let invalidOrgLvl2 = [];
      let invalidRoles = [];

      for (const item in records) {
        if (!records[item]) { continue; }

        const {
          email,
          orgLvl1,
          orgLvl2,
          roles,
        } = records[item];

        let orgLvl1Id = null;
        let orgLvl2Id = null;
        let roleDataList: Role[] = [];

        // Segment
        let invalidOrgLvl1Str = '';
        let invalidOrgLvl2Str = '';
        let tempInvalidRoles = [];
        const orgLvl1Data = orgLvl1Map[orgLvl1];
        if (orgLvl1Data !== undefined) {
          orgLvl1Id = orgLvl1Data.Id;
        } else {
          invalidOrgLvl1Str = `${orgLvl1 || '(Blank)'}`;
        }

        let orgLvl2Data = orgLvl2Map[orgLvl2];
        if (orgLvl2Data !== undefined) {
          if (orgLvl1Data.Id === orgLvl2Data.OrgLvl1Id) {
            orgLvl2Id = orgLvl2Data.Id;
          } else {
            invalidOrgLvl2Str = `${orgLvl1 || '(Blank)'} > ${orgLvl2 || '(Blank)'}`;
          }
        } else {
          invalidOrgLvl2Str = `${orgLvl1 || '(Blank)'} > ${orgLvl2 || '(Blank)'}`;
        }

        if (orgLvl1 && invalidOrgLvl1Str.length > 0) {
          invalidOrgLvl1 = [ ...invalidOrgLvl1, { email, title: invalidOrgLvl1Str } ];
        }

        if ((orgLvl1 || orgLvl2) && invalidOrgLvl2Str.length > 0) {
          invalidOrgLvl2 = [ ...invalidOrgLvl2, { email, title: invalidOrgLvl2Str } ];
          orgLvl2Data = null;
        }

        if (roles.length > 0) {
          for (const role of roles) {
            const roleData = roleMap[role];
            if (roleData) {
              roleDataList = [
                ...roleDataList,
                roleData
              ];
            } else {
              tempInvalidRoles = [
                ...tempInvalidRoles,
                role
              ];
            }
          }
        }

        if (tempInvalidRoles.length > 0) {
          invalidRoles = [
            ...invalidRoles,
            {
              email,
              roles: tempInvalidRoles
            }
          ];
        }

        if (emailMap[email]?.found) {
          const { user, manager } = emailMap[email];
          savingRecords = [
            ...savingRecords,
            new UserProfile({
              User: user,
              Manager: manager,
              OrgLvl2Id: orgLvl2Data?.Id || -1,
            }),
          ];

          for (const role of roleDataList) {
            savingUserRoleRecords = [
              ...savingUserRoleRecords,
              new UserRole({
                User: user,
                RoleId: role.Id,
              })
            ];
          }
        } else {
          invalidUsers = [
            ...invalidUsers,
            email
          ];
        }
      }
      this.invalidUsers   = invalidUsers;
      this.invalidOrgLvl1 = invalidOrgLvl1;
      this.invalidOrgLvl2 = invalidOrgLvl2;
      this.invalidRoles   = invalidRoles;
    }

    const resultData = await this.userProfileService.batchSave(savingRecords);
    const createdItems = resultData.filter(e => e.status === itemStatus.CREATED);
    const userRoleResultData = await this.userRoleService.batchSave(savingUserRoleRecords);
    this.savedUsersCount = createdItems.length;
    loader.close();
    this.isUploadDone = true;
    this.stepper.next();
  }
  // #endregion

}

import { AccountService } from 'src/app/core/data/service/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/core/data/model/user-profile.model';
import { UserProfileService } from 'src/app/core/data/service/user-profile.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import {  UserRole } from 'src/app/core/data/model/role.model';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { EditProfileDialogComponent } from 'src/app/shared/dialog/edit-profile-dialog/edit-profile-dialog.component';
import { UserRoleService } from 'src/app/core/data/service/user-role.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private userProfileService: UserProfileService,
    private dropdownService: DropdownService,
    private userRoleService: UserRoleService,
    private dialog: DialogService,
    private router: Router,
  ) { }

  PageIsLoading   = false;
  UserProfile: UserProfile = null;
  CountryName = '';
  OrgLvl1Name = '';
  OrgLvl2Name = '';

  RolesLoading = false;
  Roles: UserRole[] = [];

  ngOnInit() {
    this.initialLoad();
  }

  async initialLoad() {
    this.PageIsLoading = true;
    this.RolesLoading = true;
    this.UserProfile = await this.userProfileService.getItemByUserId(this.accountService.account.Id);
    const { OrgLvl2Id, CountryId } = this.UserProfile ?? {};
    const [
      countryList,
      orgLvl1List,
      orgLvl2List,
    ] = await Promise.all([
      this.dropdownService.getCountry(),
      this.dropdownService.getOrgLvl1(),
      this.dropdownService.getOrgLvl2(),
    ]);
    const country = countryList.find(e => e.Id === CountryId);
    const orgLvl2 = orgLvl2List.find(e => e.Id === OrgLvl2Id);
    const orgLvl1 = orgLvl1List.find(e => e.Id === (orgLvl2?.OrgLvl1Id || -1));
    this.CountryName = country?.Title || '(Blank)';
    this.OrgLvl1Name = orgLvl1?.Title || '(Blank)';
    this.OrgLvl2Name = orgLvl2?.Title || '(Blank)';
    this.PageIsLoading = false;
    // Fetch roles explicitly for the logged-in user to avoid any leftover ActiveUserId state
    const allRoles = await this.userRoleService.getRolesByUserId(this.accountService.account.Id);
    // Keep only the latest record per RoleId (defensive de-dupe if historical rows exist)
    const latestByRoleId = new Map<number, UserRole>();
    for (const r of allRoles) {
      const prev = latestByRoleId.get(r.RoleId);
      if (!prev || (r.Modified && prev.Modified && r.Modified.getTime() > prev.Modified.getTime())) {
        latestByRoleId.set(r.RoleId, r);
      } else if (!prev) {
        latestByRoleId.set(r.RoleId, r);
      }
    }
    this.Roles = Array.from(latestByRoleId.values()).sort((a, b) => (a.RoleName || '').localeCompare(b.RoleName || ''));
    this.RolesLoading = false;
  }

  goToMyProgressPage(field: string, data: any) {
    window.scrollTo(0, 0);
    this.router.navigate(['my-progress', 'role-based-learning'], { queryParams: { [field]: data } });
  }


  async editEmployeeInformation() {
    const profileDialog = this.dialog.open(EditProfileDialogComponent);
    const isSaved = await profileDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.initialLoad();
    }
  }

}

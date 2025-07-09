import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/core/data/service/role.service';
import { Role } from 'src/app/core/data/model/role.model';
import { FormControl } from '@angular/forms';
import { searchString } from 'src/app/core/util/data.util';
import { DropdownService } from 'src/app/core/data/service/dropdown.service';
import { EditRoleDialogComponent } from './dialog/edit-role-dialog/edit-role-dialog.component';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.scss']
})
export class AdminRoleComponent implements OnInit {

  constructor(
    private roleService: RoleService,
    private dropdownService: DropdownService,
    private dialog: DialogService,
  ) { }

  pageIsLoading = true;
  dataIsLoading = true;

  roleCategoryList = new BehaviorSubject<any[]>([]);
  roleSubCategoryList = new BehaviorSubject<any[]>([]);
  roleList = new BehaviorSubject<Role[]>([]);

  keywordFilter = new FormControl('');
  selectedRoleCategory = new FormControl(-1);
  selectedRoleSubCategory = new FormControl(-1);
  ownerFilter = new FormControl(1);

  ownedRoleList = combineLatest([
    this.ownerFilter.valueChanges.pipe(startWith(1)),
    this.roleList,
  ]).pipe(
    map(([isOwner, List]) => {
      if (isOwner === 1) {
        return List.filter(e => e.IsOwner);
      }
      return List;
    })
  );

  filteredRoleSubCategoryList = combineLatest([
    this.roleSubCategoryList,
    this.selectedRoleCategory.valueChanges.pipe(
      startWith(-1),
      tap(() => this.selectedRoleSubCategory.setValue(-1)),
    )
  ]).pipe(
    map(([roleSubCategoryList, categoryId]) => {
      if (categoryId === -1) {
        return roleSubCategoryList;
      }
      return roleSubCategoryList.filter(e => e.CategoryId === categoryId);
    }),
    tap((data) => console.log('Filtered Sub Category Data', data)),
  );

  filteredRoleList = combineLatest([
    this.ownedRoleList,
    this.keywordFilter.valueChanges.pipe(startWith('')),
    this.selectedRoleCategory.valueChanges.pipe(startWith(-1)),
    this.selectedRoleSubCategory.valueChanges.pipe(startWith(-1)),
  ]).pipe(
    map(([roleList, keyword, categoryId, subCategoryId]) => {
      if (keyword === '' && categoryId === -1 && subCategoryId === -1) {
        return roleList;
      }
      return roleList.filter(e => {
        let isKeyword = true;
        let isSubCategoryId = true;

        if (keyword !== '') {
          isKeyword = searchString(e.Title, keyword);
        }
        if (categoryId !== -1 && subCategoryId === -1) {
          isSubCategoryId = this.roleSubCategoryList.getValue()
          .filter(i => i.CategoryId === categoryId)
          .some(i => i.Id === e.SubCategoryId);
        }
        if (subCategoryId !== -1) {
          isSubCategoryId = e.SubCategoryId === subCategoryId;
        }
        return [
          isKeyword,
          isSubCategoryId
        ].every(c => c);
      });
    })
  );

  ngOnInit(): void {
    this.loadFilters()
    .then(() => this.loadData());
  }

  async loadFilters() {
    this.pageIsLoading = true;
    const [Category, SubCategory] = await Promise.all([
      this.dropdownService.getRoleCategory(),
      this.dropdownService.getRoleSubCategory()
    ]);
    this.roleCategoryList.next(Category);
    this.roleSubCategoryList.next(SubCategory);
    this.pageIsLoading = false;
  }

  async loadData() {
    this.dataIsLoading = true;
    const RoleList = await this.roleService.getAll();
    this.roleList.next(RoleList);
    console.log('Role List', RoleList);
    this.dataIsLoading = false;
  }

  async create() {
    const addDialog = this.dialog.open(EditRoleDialogComponent);
    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async update(role: Role) {
    if (role.IsOwner) {
      const editDialog = this.dialog.open(
        EditRoleDialogComponent,
        { data: { role: new Role(role) } }
      );

      const isSaved = await editDialog.afterClosed().toPromise();
      if (isSaved) {
        await this.loadData();
      }
    }
  }

  async delete(role: Role) {
    const promptDialog = this.dialog.deleteDialog(role.Title);
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      const loaderDialog = this.dialog.loaderDialog();
      await this.roleService.delete(role);
      loaderDialog.close();
      await this.loadData();
    }
  }

}

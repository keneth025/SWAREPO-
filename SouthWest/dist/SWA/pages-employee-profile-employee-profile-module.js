(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-employee-profile-employee-profile-module"],{

/***/ "V4Fi":
/*!*******************************************************************!*\
  !*** ./src/app/pages/employee-profile/employee-profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileModule", function() { return EmployeeProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-profile-routing.module */ "t6vz");
/* harmony import */ var _employee_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-profile.component */ "ZxUA");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class EmployeeProfileModule {
}
EmployeeProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeProfileModule });
EmployeeProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeProfileModule_Factory(t) { return new (t || EmployeeProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeProfileRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeProfileModule, { declarations: [_employee_profile_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeProfileComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeProfileRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_employee_profile_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeProfileComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _employee_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmployeeProfileRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZxUA":
/*!**********************************************************************!*\
  !*** ./src/app/pages/employee-profile/employee-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeeProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileComponent", function() { return EmployeeProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_dialog_edit_profile_dialog_edit_profile_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/dialog/edit-profile-dialog/edit-profile-dialog.component */ "y0HF");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");












function EmployeeProfileComponent_section_9_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_section_9_div_31_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r7.goToMyProgressPage("roleId", item_r6.RoleId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.RoleName, " ");
} }
function EmployeeProfileComponent_section_9_div_31_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No role assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployeeProfileComponent_section_9_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EmployeeProfileComponent_section_9_div_31_div_5_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmployeeProfileComponent_section_9_div_31_div_6_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.Roles);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.Roles.length === 0);
} }
function EmployeeProfileComponent_section_9_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmployeeProfileComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "People Manager:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Country:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Org Level 1:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Org Level 2:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EmployeeProfileComponent_section_9_div_31_Template, 7, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EmployeeProfileComponent_section_9_div_32_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.UserProfile == null ? null : ctx_r0.UserProfile.User == null ? null : ctx_r0.UserProfile.User.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.UserProfile == null ? null : ctx_r0.UserProfile.User == null ? null : ctx_r0.UserProfile.User.EMail) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx_r0.UserProfile == null ? null : ctx_r0.UserProfile.Manager == null ? null : ctx_r0.UserProfile.Manager.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.CountryName || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.OrgLvl1Name || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.OrgLvl2Name || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.RolesLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.RolesLoading);
} }
function EmployeeProfileComponent_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EmployeeProfileComponent {
    constructor(accountService, userProfileService, dropdownService, userRoleService, dialog, router) {
        this.accountService = accountService;
        this.userProfileService = userProfileService;
        this.dropdownService = dropdownService;
        this.userRoleService = userRoleService;
        this.dialog = dialog;
        this.router = router;
        this.PageIsLoading = false;
        this.UserProfile = null;
        this.CountryName = '';
        this.OrgLvl1Name = '';
        this.OrgLvl2Name = '';
        this.RolesLoading = false;
        this.Roles = [];
    }
    ngOnInit() {
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            this.RolesLoading = true;
            this.UserProfile = yield this.userProfileService.getItemByUserId(this.accountService.account.Id);
            const { OrgLvl2Id, CountryId } = this.UserProfile;
            const [countryList, orgLvl1List, orgLvl2List,] = yield Promise.all([
                this.dropdownService.getCountry(),
                this.dropdownService.getOrgLvl1(),
                this.dropdownService.getOrgLvl2(),
            ]);
            const country = countryList.find(e => e.Id === CountryId);
            const orgLvl2 = orgLvl2List.find(e => e.Id === OrgLvl2Id);
            const orgLvl1 = orgLvl1List.find(e => e.Id === ((orgLvl2 === null || orgLvl2 === void 0 ? void 0 : orgLvl2.OrgLvl1Id) || -1));
            this.CountryName = (country === null || country === void 0 ? void 0 : country.Title) || '(Blank)';
            this.OrgLvl1Name = (orgLvl1 === null || orgLvl1 === void 0 ? void 0 : orgLvl1.Title) || '(Blank)';
            this.OrgLvl2Name = (orgLvl2 === null || orgLvl2 === void 0 ? void 0 : orgLvl2.Title) || '(Blank)';
            this.PageIsLoading = false;
            this.Roles = yield this.userRoleService.getAll();
            this.RolesLoading = false;
        });
    }
    goToMyProgressPage(field, data) {
        window.scrollTo(0, 0);
        this.router.navigate(['my-progress', 'role-based-learning'], { queryParams: { [field]: data } });
    }
    editEmployeeInformation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const profileDialog = this.dialog.open(src_app_shared_dialog_edit_profile_dialog_edit_profile_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileDialogComponent"]);
            const isSaved = yield profileDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.initialLoad();
            }
        });
    }
}
EmployeeProfileComponent.ɵfac = function EmployeeProfileComponent_Factory(t) { return new (t || EmployeeProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_6__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
EmployeeProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmployeeProfileComponent, selectors: [["app-employee-profile"]], decls: 11, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["id", "edit-profile", 1, "onecap-btn", "accent", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "profile-section", 1, "card"], ["id", "profile-name"], ["id", "profile-details"], [1, "profile-item"], ["id", "roles-section", 1, "card"], ["id", "roles-table", "class", "onecap-table", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "roles-table", 1, "onecap-table"], [1, "table-header"], [1, "section"], [1, "col-name"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "table-message", 4, "ngIf"], [1, "table-row"], [1, "list-item", 3, "click"], [1, "table-message"], [1, "status-loading"], [1, "page-loader"]], template: function EmployeeProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Employee Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EmployeeProfileComponent_Template_button_click_4_listener() { return ctx.editEmployeeInformation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, EmployeeProfileComponent_section_9_Template, 33, 8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EmployeeProfileComponent_section_10_Template, 2, 0, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], styles: [".page-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  align-items: baseline;\n}\n\n#profile-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n}\n\n#profile-section.card[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n}\n\n#profile-section[_ngcontent-%COMP%]   #profile-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: -10px;\n  font-size: var(--font-lg);\n  color: var(--onecaplite-purple);\n  border-bottom: 1px solid var(--onecaplite-darkwhite);\n}\n\n#profile-section[_ngcontent-%COMP%]   #profile-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  align-items: baseline;\n  gap: 15px;\n}\n\n#profile-section[_ngcontent-%COMP%]   #profile-details[_ngcontent-%COMP%]   .profile-item[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: baseline;\n}\n\n#profile-section[_ngcontent-%COMP%]   #profile-details[_ngcontent-%COMP%]   .profile-item[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#roles-section.card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--onecaplite-blue);\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtcHJvZmlsZS9lbXBsb3llZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUlFLGFBQUE7RUFDQSxTQUFBO0FBRkY7O0FBRkU7RUFDRSxrQkFBQTtBQUlKOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvREFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBQUo7O0FBRUk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFFTTtFQUNFLGlCQUFBO0FBQVI7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZW1wbG95ZWUtcHJvZmlsZS9lbXBsb3llZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDFmciBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICAgICA6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4jcHJvZmlsZS1zZWN0aW9uIHtcclxuICAmLmNhcmQge1xyXG4gICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG4gIH1cclxuICBkaXNwbGF5IDogZ3JpZDtcclxuICBnYXAgICAgIDogMTVweDtcclxuXHJcbiAgI3Byb2ZpbGUtbmFtZSB7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIG1hcmdpbi10b3AgICAgOiAtMTBweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiB2YXIoLS1mb250LWxnKTtcclxuICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcbiAgICBib3JkZXItYm90dG9tIDogMXB4IHNvbGlkIHZhcigtLW9uZWNhcGxpdGUtZGFya3doaXRlKTtcclxuICB9XHJcblxyXG4gICNwcm9maWxlLWRldGFpbHMge1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IHJlcGVhdCgzLCAxZnIpO1xyXG4gICAgYWxpZ24taXRlbXMgICAgICAgICAgIDogYmFzZWxpbmU7XHJcbiAgICBnYXAgICAgICAgICAgICAgICAgICAgOiAxNXB4O1xyXG5cclxuICAgIC5wcm9maWxlLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gICAgICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBiYXNlbGluZTtcclxuXHJcbiAgICAgICYgPiBsYWJlbCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4jcm9sZXMtc2VjdGlvbi5jYXJkIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIHtcclxuICBjdXJzb3IgICAgICAgICAgOiBwb2ludGVyO1xyXG4gIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtYmx1ZSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uIDogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmployeeProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-employee-profile',
                templateUrl: './employee-profile.component.html',
                styleUrls: ['./employee-profile.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_4__["UserProfileService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_5__["DropdownService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_6__["UserRoleService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, null); })();


/***/ }),

/***/ "t6vz":
/*!***************************************************************************!*\
  !*** ./src/app/pages/employee-profile/employee-profile-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EmployeeProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeProfileRoutingModule", function() { return EmployeeProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-profile.component */ "ZxUA");





const routes = [{ path: '', component: _employee_profile_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeProfileComponent"] }];
class EmployeeProfileRoutingModule {
}
EmployeeProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EmployeeProfileRoutingModule });
EmployeeProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EmployeeProfileRoutingModule_Factory(t) { return new (t || EmployeeProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-employee-profile-employee-profile-module.js.map
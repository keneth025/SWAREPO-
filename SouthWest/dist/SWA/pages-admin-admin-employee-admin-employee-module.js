(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-employee-admin-employee-module"],{

/***/ "+Zlo":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-employee/admin-employee.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEmployeeComponent", function() { return AdminEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/user-profile.model */ "Ew+s");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/edit-employee-dialog/edit-employee-dialog.component */ "AWcO");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");



















function AdminEmployeeComponent_section_4_ng_container_19_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r6.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.Title, " ");
} }
function AdminEmployeeComponent_section_4_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AdminEmployeeComponent_section_4_ng_container_19_mat_option_1_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r4);
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const role_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", role_r18.RoleName, " ");
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_container_6_div_2_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const roleList_r16 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", roleList_r16);
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " (Blank) ");
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_container_6_Template, 3, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_ng_template_7_Template, 1, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const item_r12 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.update(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const item_r12 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r21.delete(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "employee-progress/", item_r12 == null ? null : item_r12.User == null ? null : item_r12.User.Id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r12 == null ? null : item_r12.User == null ? null : item_r12.User.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.userRoleMap[item_r12 == null ? null : item_r12.User == null ? null : item_r12.User.Id])("ngIfElse", _r14);
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Employee Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminEmployeeComponent_section_4_ng_container_28_div_2_div_10_Template, 17, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r7);
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No employee available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminEmployeeComponent_section_4_ng_container_28_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminEmployeeComponent_section_4_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminEmployeeComponent_section_4_ng_container_28_div_2_Template, 11, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminEmployeeComponent_section_4_ng_container_28_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminEmployeeComponent_section_4_ng_container_28_div_4_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r7.length > 0 && !ctx_r3.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r7.length === 0 && !ctx_r3.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.dataIsLoading);
} }
function AdminEmployeeComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AdminEmployeeComponent_section_4_ng_container_19_Template, 2, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminEmployeeComponent_section_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Add Employee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, AdminEmployeeComponent_section_4_ng_container_28_Template, 5, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.userFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.managerFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.countryIdFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 6, ctx_r0.countryList));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 8, ctx_r0.filteredUserProfileList));
} }
function AdminEmployeeComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminEmployeeComponent {
    constructor(dialog, userProfileService, userRoleService, dropdownService) {
        this.dialog = dialog;
        this.userProfileService = userProfileService;
        this.userRoleService = userRoleService;
        this.dropdownService = dropdownService;
        this.pageIsLoading = false;
        this.dataIsLoading = true;
        this.countryList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.userFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.managerFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.countryIdFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](-1);
        this.userRoleMap = {};
        this.userProfileList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.userProfileFilters = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.userFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
            this.managerFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
            this.countryIdFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(-1)),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([userFilter, managerFilter, countryIdFilter]) => [
            userFilter.trim(),
            managerFilter.trim(),
            countryIdFilter
        ]));
        this.filteredUserProfileList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.userProfileFilters,
            this.userProfileList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([listFilters, list]) => {
            const [userFilter, managerFilter, countryIdFilter] = listFilters;
            return list.filter((userProfile) => {
                let isUser = true;
                if (userFilter) {
                    isUser = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(userProfile.User.Title, userFilter)
                        || Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(userProfile.User.EMail, userFilter);
                }
                let isManager = true;
                if (managerFilter) {
                    isManager = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(userProfile.Manager.Title, managerFilter)
                        || Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(userProfile.Manager.EMail, managerFilter);
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
            });
        }));
    }
    ngOnInit() {
        this.loadFilters()
            .then(() => this.loadData());
    }
    loadFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pageIsLoading = true;
            const tempCountryList = yield this.dropdownService.getCountry();
            this.countryList.next(tempCountryList);
            this.pageIsLoading = false;
        });
    }
    loadData() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const list = yield this.userProfileService.getAll();
            this.userProfileList.next(list);
            const userRoleList = yield this.userRoleService.getReport();
            this.userRoleMap = {};
            for (const item of userRoleList) {
                if (!this.userRoleMap[(_a = item === null || item === void 0 ? void 0 : item.User) === null || _a === void 0 ? void 0 : _a.Id]) {
                    this.userRoleMap[(_b = item === null || item === void 0 ? void 0 : item.User) === null || _b === void 0 ? void 0 : _b.Id] = [];
                }
                this.userRoleMap[(_c = item === null || item === void 0 ? void 0 : item.User) === null || _c === void 0 ? void 0 : _c.Id].push(item);
            }
            this.dataIsLoading = false;
            console.log(this.userProfileList.value);
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEmployeeDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const editDialog = this.dialog.open(_dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEmployeeDialogComponent"], { data: { userProfile: new src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__["UserProfile"](data) } });
            const isSaved = yield editDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promptDialog = this.dialog.deleteDialog(data.User.Title);
            const isProceed = yield promptDialog.afterClosed().toPromise();
            if (isProceed) {
                const loaderDialog = this.dialog.loaderDialog();
                yield this.userProfileService.delete(data);
                loaderDialog.close();
                yield this.loadData();
            }
        });
    }
}
AdminEmployeeComponent.ɵfac = function AdminEmployeeComponent_Factory(t) { return new (t || AdminEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_10__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["DropdownService"])); };
AdminEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminEmployeeComponent, selectors: [["app-admin-employee"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "select-container"], ["placeholder", "All Category", 3, "formControl"], [3, "value"], [4, "ngIf"], ["id", "actions"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-container"], ["id", "employee-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "employee-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-link-btn", "accent-2", 3, "routerLink"], [4, "ngIf", "ngIfElse"], ["blank", ""], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "click"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "click"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminEmployeeComponent_section_4_Template, 30, 10, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminEmployeeComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: flex-end;\n}\n\n#employee-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #employee-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 175px;\n}\n\n#employee-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .onecap-link-btn[_ngcontent-%COMP%], #employee-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .onecap-link-btn[_ngcontent-%COMP%] {\n  text-align: left;\n  justify-content: flex-start;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZW1wbG95ZWUvYWRtaW4tZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUdFO0VBQ0UsZ0NBQUE7QUFBSjs7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZW1wbG95ZWUvYWRtaW4tZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsdGVycyB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiByZXBlYXQoNCwgMWZyKTtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuI2VtcGxveWVlLXRhYmxlIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE3NXB4O1xyXG4gICAgLm9uZWNhcC1saW5rLWJ0biB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-employee',
                templateUrl: './admin-employee.component.html',
                styleUrls: ['./admin-employee.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_9__["UserProfileService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_10__["UserRoleService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_11__["DropdownService"] }]; }, null); })();


/***/ }),

/***/ "AWcO":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-employee/dialog/edit-employee-dialog/edit-employee-dialog.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: EditEmployeeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeDialogComponent", function() { return EditEmployeeDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/user-profile.model */ "Ew+s");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/validator.util */ "VFaj");
/* harmony import */ var src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/model/role.model */ "TZOz");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_data_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/_service */ "ECYA");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");






























const _c0 = ["stepper"];
function EditEmployeeDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "active": a0 }; };
function EditEmployeeDialogComponent_section_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Upload Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_section_12_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.isBatch = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_section_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.isBatch = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Batch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, !ctx_r2.isBatch));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r2.isBatch));
} }
function EditEmployeeDialogComponent_ng_container_14_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-spinner", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24);
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_11_mat_option_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No user found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", profile_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", profile_r31.DisplayText, " ");
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditEmployeeDialogComponent_ng_container_14_ng_template_11_mat_option_0_Template, 2, 1, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_ng_container_14_ng_template_11_mat_option_1_Template, 2, 2, "mat-option", 17);
} if (rf & 2) {
    const UserList_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", UserList_r20.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", UserList_r20);
} }
function EditEmployeeDialogComponent_ng_container_14_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-spinner", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24);
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_21_mat_option_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No user found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_21_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", profile_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", profile_r35.DisplayText, " ");
} }
function EditEmployeeDialogComponent_ng_container_14_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditEmployeeDialogComponent_ng_container_14_ng_template_21_mat_option_0_Template, 2, 1, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_ng_container_14_ng_template_21_mat_option_1_Template, 2, 2, "mat-option", 17);
} if (rf & 2) {
    const UserList_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", UserList_r20.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", UserList_r20);
} }
const _c2 = function (a0) { return { "invalid": a0 }; };
function EditEmployeeDialogComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-autocomplete", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditEmployeeDialogComponent_ng_container_14_Template_mat_autocomplete_optionSelected_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.ensureEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditEmployeeDialogComponent_ng_container_14_mat_option_10_Template, 3, 2, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EditEmployeeDialogComponent_ng_container_14_ng_template_11_Template, 2, 2, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-autocomplete", 35, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditEmployeeDialogComponent_ng_container_14_Template_mat_autocomplete_optionSelected_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r39.ensureManager($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EditEmployeeDialogComponent_ng_container_14_mat_option_20_Template, 3, 2, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditEmployeeDialogComponent_ng_container_14_ng_template_21_Template, 2, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c2, ctx_r3.FormDetails.get("Employee").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx_r3.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.IsSearchingUser)("ngIfElse", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c2, ctx_r3.FormDetails.get("Manager").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx_r3.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.IsSearchingUser)("ngIfElse", _r27);
} }
function EditEmployeeDialogComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r40.Title);
} }
function EditEmployeeDialogComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r41.Title);
} }
function EditEmployeeDialogComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r42.Title);
} }
function EditEmployeeDialogComponent_section_43_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Please check rows: [", ctx_r44.invalidRows.join(", "), "] ");
} }
function EditEmployeeDialogComponent_section_43_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "File");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Use the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "template");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " and upload the file below. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_section_43_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14); return _r43.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 52, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function EditEmployeeDialogComponent_section_43_Template_input_change_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r47.uploadFileUpdated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditEmployeeDialogComponent_section_43_div_15_Template, 3, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r7.templateLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedFile ? ctx_r7.selectedFile.name : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.hasInvalidRows);
} }
function EditEmployeeDialogComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_ng_container_45_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r48.validateUserExistence(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Skip Assigning Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_ng_container_45_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r50.validateUserExistence(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r8.FormDetails.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r8.FormDetails.invalid);
} }
function EditEmployeeDialogComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_ng_template_46_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r51.validateTemplate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_mat_step_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_mat_step_48_ng_container_13_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No role available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true)("value", null);
} }
function EditEmployeeDialogComponent_mat_step_48_ng_container_13_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r62.Title, " ");
} }
function EditEmployeeDialogComponent_mat_step_48_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_mat_step_48_ng_container_13_mat_option_1_Template, 2, 2, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditEmployeeDialogComponent_mat_step_48_ng_container_13_mat_option_2_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const List_r59 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", List_r59.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", List_r59);
} }
function EditEmployeeDialogComponent_mat_step_48_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_mat_step_48_div_16_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r65.AssignedRole.deselect(item_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const i_r64 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r64 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r63.Title, " ");
} }
function EditEmployeeDialogComponent_mat_step_48_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No role assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_mat_step_48_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-step", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_mat_step_48_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Role Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-autocomplete", 68, 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditEmployeeDialogComponent_mat_step_48_Template_mat_autocomplete_optionSelected_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r67.AssignedRole.select($event.option.value); return ctx_r67.RoleSearchFilter.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EditEmployeeDialogComponent_mat_step_48_ng_container_13_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditEmployeeDialogComponent_mat_step_48_div_16_Template, 9, 2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditEmployeeDialogComponent_mat_step_48_div_17_Template, 5, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("optional", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.roleIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r11.roleIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r11.RoleSearchFilter)("matAutocomplete", _r55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 8, ctx_r11.FilteredRoleList$));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.AssignedRole.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.AssignedRole.isEmpty());
} }
function EditEmployeeDialogComponent_div_50_div_1_ng_container_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No role assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_div_50_div_1_ng_container_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r75.Title, " ");
} }
function EditEmployeeDialogComponent_div_50_div_1_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_div_50_div_1_ng_container_30_div_1_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditEmployeeDialogComponent_div_50_div_1_ng_container_30_div_2_Template, 2, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r72 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", list_r72.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r72);
} }
function EditEmployeeDialogComponent_div_50_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Employee Name* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " People Manager* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Org Level 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Org Level 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, EditEmployeeDialogComponent_div_50_div_1_ng_container_30_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Detail_r70 = ctx.ngIf;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r70 == null ? null : Detail_r70.Employee == null ? null : Detail_r70.Employee.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r70 == null ? null : Detail_r70.Manager == null ? null : Detail_r70.Manager.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r70 == null ? null : Detail_r70.Country == null ? null : Detail_r70.Country.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r70 == null ? null : Detail_r70.OrgLvl1 == null ? null : Detail_r70.OrgLvl1.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r70 == null ? null : Detail_r70.OrgLvl2 == null ? null : Detail_r70.OrgLvl2.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r69.AssignedRole.selected);
} }
function EditEmployeeDialogComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditEmployeeDialogComponent_div_50_div_1_Template, 31, 6, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.FormDetails.getRawValue());
} }
function EditEmployeeDialogComponent_div_51_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const email_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", email_r81, " ");
} }
function EditEmployeeDialogComponent_div_51_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_div_51_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r82.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r82.title, " ");
} }
function EditEmployeeDialogComponent_div_51_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r83.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r83.title, " ");
} }
function EditEmployeeDialogComponent_div_51_div_25_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", title_r86, " ");
} }
function EditEmployeeDialogComponent_div_51_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditEmployeeDialogComponent_div_51_div_25_div_4_Template, 2, 1, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r84.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r84.roles);
} }
function EditEmployeeDialogComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "File uploaded successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Employees Added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Invalid Emails*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditEmployeeDialogComponent_div_51_div_12_Template, 2, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EditEmployeeDialogComponent_div_51_div_13_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Org Level 1/s not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, EditEmployeeDialogComponent_div_51_div_17_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Org Level 2/s not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditEmployeeDialogComponent_div_51_div_21_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Roles not found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, EditEmployeeDialogComponent_div_51_div_25_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r13.savedUsersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.invalidUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.invalidUsers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.invalidOrgLvl1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.invalidOrgLvl2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.invalidRoles);
} }
function EditEmployeeDialogComponent_ng_container_53_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_ng_container_53_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r87.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function EditEmployeeDialogComponent_ng_template_54_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_ng_template_54_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r90.dialogRef.close(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditEmployeeDialogComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditEmployeeDialogComponent_ng_template_54_button_0_Template, 2, 0, "button", 96);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.isBatch);
} }
const isNotValidOrgLvl = (control) => {
    const OrgLvl1Value = control.value.OrgLvl1;
    const OrgLvl2Value = control.value.OrgLvl2;
    if (OrgLvl1Value !== null && OrgLvl2Value === null) {
        control.get('OrgLvl2').setErrors({ isNotValidServiceLine: true });
        return { isNotValidServiceLine: true };
    }
    return null;
};
class EditEmployeeDialogComponent {
    constructor(dialog, userService, dropdownService, roleService, userRoleService, userProfileService, excelService, dialogRef, data) {
        this.dialog = dialog;
        this.userService = userService;
        this.dropdownService = dropdownService;
        this.roleService = roleService;
        this.userRoleService = userRoleService;
        this.userProfileService = userProfileService;
        this.excelService = excelService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.isBatch = false;
        this.templateLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].CREATE_EMPLOYEE_TEMPLATE;
        // Selected File
        this.batchProcessing = false;
        this.isUploadDone = false;
        this.hasInvalidRows = false;
        this.invalidRows = [];
        this.invalidUsers = [];
        this.invalidOrgLvl1 = [];
        this.invalidOrgLvl2 = [];
        this.invalidRoles = [];
        this.savedUsersCount = 0;
        this.rolesAssignedCount = 0;
        this.dialogTitle = 'Create';
        // Data
        this.dialogIsLoading = true;
        this.roleIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](-1),
            Employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_7__["isNotString"],
                ]
            }),
            Manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_7__["isNotString"],
                ]
            }),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            OrgLvl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            OrgLvl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        }, {
            validators: [isNotValidOrgLvl]
        });
        this.CountryList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.OrgLvl1List = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.OrgLvl2List = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.FilteredOrgLvl2List = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.FormDetails.get('OrgLvl1').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.FormDetails.get('OrgLvl2').setValue(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null)),
            this.OrgLvl2List
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([selectedCategory, List]) => {
            if (selectedCategory === null) {
                return [];
            }
            return List.filter(e => e.OrgLvl1Id === selectedCategory.Id);
        }));
        this.IsSearchingUser = false;
        this.SearchUserList = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.FormDetails.get('Employee').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')), this.FormDetails.get('Manager').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((input) => input ? this.userService.searchUser(input) : Promise.resolve([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.IsSearchingUser = false));
        this.SavedRoles = [];
        this.AssignedRole = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true);
        this.AssignedRole$ = this.AssignedRole.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.RoleSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.RoleList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.FilteredRoleList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.AssignedRole$,
            this.RoleList,
            this.RoleSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
            ].every(c => c);
        })));
        this.dialogName = () => `${this.dialogTitle} Employee`;
        this.displayFn = (data) => (data === null || data === void 0 ? void 0 : data.DisplayText) || (data === null || data === void 0 ? void 0 : data.Title) || '';
    }
    closeDialog() {
        const self = this;
        const promptDialog = self.dialog.promptDialog(this.dialogName(), 'Changes will NOT be saved. Proceed?');
        promptDialog.afterClosed().subscribe((proceed) => {
            if (proceed) {
                self.dialogRef.close(false);
            }
        });
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
        this.dialogTitle = this.data ? 'Edit' : 'Create';
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogIsLoading = true;
            this.roleIsLoading = true;
            const [CountryList, OrgLvl1List, OrgLvl2List,] = yield Promise.all([
                this.dropdownService.getCountry(),
                this.dropdownService.getOrgLvl1(),
                this.dropdownService.getOrgLvl2(),
            ]);
            this.CountryList.next(CountryList);
            this.OrgLvl1List.next(OrgLvl1List);
            this.OrgLvl2List.next(OrgLvl2List);
            yield this.updateDetails();
            this.dialogIsLoading = false;
            const roleList = yield this.roleService.getAll();
            this.RoleList.next(roleList);
            yield this.updateRoles();
            this.roleIsLoading = false;
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { Id, User, Manager, CountryId, OrgLvl2Id } = this.data.userProfile;
                const OrgLvl2Obj = this.OrgLvl2List.value.find(e => e.Id === OrgLvl2Id);
                const OrgLvl1Obj = this.OrgLvl1List.value.find(e => e.Id === (OrgLvl2Obj === null || OrgLvl2Obj === void 0 ? void 0 : OrgLvl2Obj.OrgLvl1Id));
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
        });
    }
    updateRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { User } = this.data.userProfile;
                this.SavedRoles = yield this.userRoleService.getRolesByUserId(User.Id);
                const assignedRoles = this.SavedRoles
                    .map(e => this.RoleList.value.find(i => i.Id === e.RoleId))
                    .filter(e => e);
                this.AssignedRole.select(...assignedRoles);
            }
        });
    }
    ensureEmployee($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const employeeObj = $event.option.value;
            const loginName = employeeObj.Key;
            const loader = this.dialog.loaderDialog();
            const [employeeData, managerData,] = yield Promise.all([
                this.userService.ensureUser(loginName),
                this.userService.getUserManager(loginName),
            ]);
            this.FormDetails.get('Employee').setValue(employeeData);
            this.FormDetails.get('Manager').setValue(managerData);
            loader.close();
        });
    }
    ensureManager($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const managerObj = $event.option.value;
            const loginName = managerObj.Key;
            const loader = this.dialog.loaderDialog();
            const managerData = yield this.userService.ensureUser(loginName);
            this.FormDetails.get('Manager').setValue(managerData);
            loader.close();
        });
    }
    validateUserExistence(skipAssignment = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.dialog.loaderDialog();
            const ItemId = this.FormDetails.get('Id').value;
            const EmployeeData = this.FormDetails.get('Employee').value;
            const valid = yield this.userProfileService.validateUserExistence(EmployeeData.EMail, ItemId);
            if (!valid) {
                loader.close();
                this.dialog.alertDialog(this.dialogName(), `${EmployeeData.Title} is already registered.`);
            }
            else {
                loader.close();
                if (skipAssignment) {
                    this.stepper.selectedIndex = 2;
                }
                else {
                    this.stepper.next();
                }
            }
        });
    }
    save() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.dialog.loaderDialog();
            const { Id, Employee, Manager, Country: CountryValue, OrgLvl1: OrgLvl1Value, OrgLvl2: OrgLvl2Value, } = this.FormDetails.getRawValue();
            const requesData = new src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__["UserProfile"]({
                Id,
                User: Employee,
                Manager: Manager,
                CountryId: ((_a = CountryValue) === null || _a === void 0 ? void 0 : _a.Id) || -1,
                OrgLvl2Id: ((_b = OrgLvl2Value) === null || _b === void 0 ? void 0 : _b.Id) || -1,
            });
            yield this.userProfileService.save(requesData);
            const currentRoles = this.AssignedRole.selected;
            const rolesToSave = currentRoles
                .filter(e => !this.SavedRoles.some(i => i.RoleId === e.Id))
                .map(e => new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_8__["UserRole"]({ RoleId: e.Id, User: Employee }));
            const rolesToRemove = this.SavedRoles.filter(e => !currentRoles.some(i => i.Id === e.RoleId));
            yield Promise.all([
                this.userRoleService.batchSave(rolesToSave),
                this.userRoleService.batchDelete(rolesToRemove),
            ]);
            loader.close();
            this.dialogRef.close(true);
        });
    }
    // #region Upload File Functions
    uploadFileUpdated($event) {
        this.hasInvalidRows = false;
        this.isUploadDone = false;
        this.selectedFile = $event.target.files[0];
    }
    validateTemplate() {
        this.hasInvalidRows = false;
        const { selectedFile } = this;
        if (!selectedFile) {
            throw new Error('No file selected.');
        }
        const reader = new FileReader();
        reader.onload = (fileData) => {
            const data = this.excelService.convertExcelDataToJsonData(fileData.target.result);
            const formattedData = this.formatData(data);
            console.log('Formatted Data', formattedData);
            if (!formattedData.isValid) {
                this.dialog.alertDialog(`Create Employee`, formattedData.message);
            }
            else {
                console.log('Formatted data', formattedData);
                this.processUploadedData(formattedData);
            }
        };
        reader.readAsBinaryString(this.selectedFile);
    }
    formatData(data) {
        const wsdata = data['Employee Template'];
        let isValid = true;
        let message = '';
        let employeeData = [];
        let emailsList = [];
        let orgLvl1List = [];
        let orgLvl2List = [];
        let roleList = [];
        let invalidRows = [];
        let records = {};
        if (!wsdata) {
            isValid = false;
            message = `Uploaded file doesn't have 'Employee Template' worksheet.`;
        }
        else {
            employeeData = wsdata.slice(1);
        }
        if (isValid) {
            for (const [index, item] of employeeData.entries()) {
                const [email, orgLvl1, orgLvl2, roleString,] = item;
                const roles = roleString ? (roleString + '').split(';').map(e => e.trim()) : [];
                if (!Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["validateEmailFormat"])(email)) {
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
                    records = Object.assign(Object.assign({}, records), { [email]: {
                            email,
                            orgLvl1,
                            orgLvl2,
                            roles,
                        } });
                }
                else {
                    records[email].orgLvl1 = orgLvl1;
                    records[email].orgLvl2 = orgLvl2;
                    records[email].roles = roles;
                }
            }
            if (invalidRows.length > 0) {
                isValid = false;
                message = `Uploaded file has invalid data.`;
                this.hasInvalidRows = true;
                this.invalidRows = invalidRows;
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
    processUploadedData(processedData) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { emailsList, orgLvl1List, orgLvl2List, roleList, records } = processedData;
            let savingRecords = [];
            let savingUserRoleRecords = [];
            const loader = this.dialog.loaderDialog();
            this.batchProcessing = true;
            const emailObjArr = (yield this.userService.batchResolveUserEmailAndManager(emailsList));
            const emailMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(emailsList, emailObjArr, 'email');
            const orgLvl1Map = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(orgLvl1List, this.OrgLvl1List.value);
            const orgLvl2Map = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(orgLvl2List, this.OrgLvl2List.value);
            const roleMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["convertToMap"])(roleList, this.RoleList.value);
            if (records !== {}) {
                let invalidUsers = [];
                let invalidOrgLvl1 = [];
                let invalidOrgLvl2 = [];
                let invalidRoles = [];
                for (const item in records) {
                    if (!records[item]) {
                        continue;
                    }
                    const { email, orgLvl1, orgLvl2, roles, } = records[item];
                    let orgLvl1Id = null;
                    let orgLvl2Id = null;
                    let roleDataList = [];
                    // Segment
                    let invalidOrgLvl1Str = '';
                    let invalidOrgLvl2Str = '';
                    let tempInvalidRoles = [];
                    const orgLvl1Data = orgLvl1Map[orgLvl1];
                    if (orgLvl1Data !== undefined) {
                        orgLvl1Id = orgLvl1Data.Id;
                    }
                    else {
                        invalidOrgLvl1Str = `${orgLvl1 || '(Blank)'}`;
                    }
                    let orgLvl2Data = orgLvl2Map[orgLvl2];
                    if (orgLvl2Data !== undefined) {
                        if (orgLvl1Data.Id === orgLvl2Data.OrgLvl1Id) {
                            orgLvl2Id = orgLvl2Data.Id;
                        }
                        else {
                            invalidOrgLvl2Str = `${orgLvl1 || '(Blank)'} > ${orgLvl2 || '(Blank)'}`;
                        }
                    }
                    else {
                        invalidOrgLvl2Str = `${orgLvl1 || '(Blank)'} > ${orgLvl2 || '(Blank)'}`;
                    }
                    if (orgLvl1 && invalidOrgLvl1Str.length > 0) {
                        invalidOrgLvl1 = [...invalidOrgLvl1, { email, title: invalidOrgLvl1Str }];
                    }
                    if ((orgLvl1 || orgLvl2) && invalidOrgLvl2Str.length > 0) {
                        invalidOrgLvl2 = [...invalidOrgLvl2, { email, title: invalidOrgLvl2Str }];
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
                            }
                            else {
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
                    if ((_a = emailMap[email]) === null || _a === void 0 ? void 0 : _a.found) {
                        const { user, manager } = emailMap[email];
                        savingRecords = [
                            ...savingRecords,
                            new src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__["UserProfile"]({
                                User: user,
                                Manager: manager,
                                OrgLvl2Id: (orgLvl2Data === null || orgLvl2Data === void 0 ? void 0 : orgLvl2Data.Id) || -1,
                            }),
                        ];
                        for (const role of roleDataList) {
                            savingUserRoleRecords = [
                                ...savingUserRoleRecords,
                                new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_8__["UserRole"]({
                                    User: user,
                                    RoleId: role.Id,
                                })
                            ];
                        }
                    }
                    else {
                        invalidUsers = [
                            ...invalidUsers,
                            email
                        ];
                    }
                }
                this.invalidUsers = invalidUsers;
                this.invalidOrgLvl1 = invalidOrgLvl1;
                this.invalidOrgLvl2 = invalidOrgLvl2;
                this.invalidRoles = invalidRoles;
            }
            const resultData = yield this.userProfileService.batchSave(savingRecords);
            const createdItems = resultData.filter(e => e.status === src_app_core_data_service_service__WEBPACK_IMPORTED_MODULE_12__["itemStatus"].CREATED);
            const userRoleResultData = yield this.userRoleService.batchSave(savingUserRoleRecords);
            this.savedUsersCount = createdItems.length;
            loader.close();
            this.isUploadDone = true;
            this.stepper.next();
        });
    }
}
EditEmployeeDialogComponent.ɵfac = function EditEmployeeDialogComponent_Factory(t) { return new (t || EditEmployeeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_16__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_17__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_18__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_19__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])); };
EditEmployeeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditEmployeeDialogComponent, selectors: [["ng-component"]], viewQuery: function EditEmployeeDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 56, vars: 44, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Employee Details"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "hidden"], ["id", "upload-type", 4, "ngIf"], ["id", "single-form", 3, "hidden", "formGroup"], [4, "ngIf"], [1, "onecap-input-form", 3, "ngClass"], [1, "select-container"], ["formControlName", "Country", 3, "disableOptionCentering", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "OrgLvl1", 3, "disableOptionCentering", "placeholder"], ["formControlName", "OrgLvl2", 3, "disableOptionCentering", "placeholder"], ["id", "batch-form", 4, "ngIf"], [1, "stepper-action"], [4, "ngIf", "ngIfElse"], ["batchDetailAction", ""], ["label", "Assign Roles", 3, "optional", 4, "ngIf"], ["label", "Confirm Details"], ["class", "stepper-content", 4, "ngIf"], ["BatchComplete", ""], [1, "stepper-loader"], ["id", "upload-type"], [1, "onecap-group-btn"], [1, "btn", 3, "ngClass", "click"], [1, "required"], [1, "input-container"], ["type", "text", "formControlName", "Employee", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["employeeAuto", "matAutocomplete"], [3, "disabled", 4, "ngIf", "ngIfElse"], ["userOptionList", ""], ["type", "text", "formControlName", "Manager", 3, "matAutocomplete"], ["managerAuto", "matAutocomplete"], ["managerOptionList", ""], [3, "disabled"], [1, "autocomplete-loader"], [3, "diameter"], [3, "disabled", 4, "ngIf"], ["id", "batch-form"], [1, "note"], ["target", "_blank", 3, "href"], [1, "filepicker-container"], ["id", "file-label"], ["id", "browse-btn", 3, "click"], ["hidden", "", "type", "file", 3, "change"], ["fileButton", ""], ["class", "error-messages", 4, "ngIf"], [1, "error-messages"], [1, "error-title"], [1, "onecap-link-btn", "accent-2", 3, "disabled", "click"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], [1, "onecap-btn", "accent-2", 3, "click"], ["label", "Assign Roles", 3, "optional"], [1, "stepper-content", 3, "hidden"], [1, "selection-table"], [1, "table-label"], [1, "onecap-input-form"], ["type", "text", "placeholder", "Search for a curriculum", 3, "formControl", "matAutocomplete"], ["searchField", ""], ["autoActiveFirstOption", "", 3, "optionSelected"], ["itemSelectionRole", "matAutocomplete"], [1, "table-body"], ["class", "table-row selection", 4, "ngFor", "ngForOf"], ["class", "table-row selection", 4, "ngIf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], [3, "disabled", "value", 4, "ngIf"], [3, "disabled", "value"], [1, "table-row", "selection"], [1, "col"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "onecap-lbl", "error"], [1, "stepper-content"], ["class", "result-page", 4, "ngIf"], [1, "result-page"], [1, "field-row"], [1, "field-list"], [1, "list"], ["class", "onecap-lbl error", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "results"], [1, "onecap-lbl", "completed"], [1, "results-table"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], ["class", "onecap-btn accent-2", 3, "click", 4, "ngIf"]], template: function EditEmployeeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditEmployeeDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-horizontal-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditEmployeeDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditEmployeeDialogComponent_section_12_Template, 8, 6, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EditEmployeeDialogComponent_ng_container_14_Template, 23, 14, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EditEmployeeDialogComponent_mat_option_23_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Org Level 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, EditEmployeeDialogComponent_mat_option_32_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Org Level 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, EditEmployeeDialogComponent_mat_option_41_Template, 2, 2, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, EditEmployeeDialogComponent_section_43_Template, 16, 3, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, EditEmployeeDialogComponent_ng_container_45_Template, 8, 2, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, EditEmployeeDialogComponent_ng_template_46_Template, 5, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, EditEmployeeDialogComponent_mat_step_48_Template, 29, 10, "mat-step", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-step", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, EditEmployeeDialogComponent_div_50_Template, 2, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, EditEmployeeDialogComponent_div_51_Template, 26, 6, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, EditEmployeeDialogComponent_ng_container_53_Template, 9, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, EditEmployeeDialogComponent_ng_template_54_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](47);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogTitle === "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.isBatch)("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 30, ctx.SearchUserList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](38, _c2, ctx.FormDetails.get("Country").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 32, ctx.CountryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](40, _c2, ctx.FormDetails.get("OrgLvl1").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 34, ctx.OrgLvl1List));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](42, _c2, ctx.FormDetails.get("OrgLvl2").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 36, ctx.FilteredOrgLvl2List));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isBatch)("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isBatch)("ngIfElse", _r15);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocomplete"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperNext"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]], styles: ["#details-section[_ngcontent-%COMP%] {\n  justify-content: center;\n  gap: 10px;\n}\n\n#single-form[_ngcontent-%COMP%], #batch-form[_ngcontent-%COMP%], #upload-type[_ngcontent-%COMP%] {\n  width: 512px;\n  border-radius: 10px;\n  padding: 20px;\n  background-color: rgba(217, 217, 217, 0.25);\n}\n\n#upload-type[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: max-content 240px;\n  align-items: center;\n  gap: 15px;\n}\n\n#upload-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  font-weight: bold;\n}\n\n#upload-type[_ngcontent-%COMP%]   .onecaplite-group-btn[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n#upload-type[_ngcontent-%COMP%]   .onecaplite-group-btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  height: 30px;\n}\n\n#batch-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n#batch-form[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.result-page[_ngcontent-%COMP%] {\n  margin: 0px 60px 30px;\n  display: grid;\n  gap: 20px;\n}\n\n.result-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.result-page[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 175px 1fr;\n}\n\n.result-page[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.result-page[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n\n.results[_ngcontent-%COMP%] {\n  margin: 0px 60px;\n  display: grid;\n  gap: 50px;\n}\n\n.results-table[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  align-items: baseline;\n  gap: 20px;\n}\n\n.results-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.results-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  align-items: baseline;\n  grid-template-columns: 1fr 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZW1wbG95ZWUvZGlhbG9nL2VkaXQtZW1wbG95ZWUtZGlhbG9nL2VkaXQtZW1wbG95ZWUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUFKOztBQUVJO0VBQ0UsWUFBQTtBQUFOOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQUZGOztBQUlFO0VBQ0UsaUJBQUE7QUFGSjs7QUFPQTtFQUNFLHFCQUFBO0VBRUEsYUFBQTtFQUNBLFNBQUE7QUFMRjs7QUFNRTtFQUFRLGlCQUFBO0FBSFY7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7QUFGSjs7QUFLRTtFQUNFLFNBQUE7QUFISjs7QUFJSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBRk47O0FBT0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFKRjs7QUFLRTtFQUNFLGlCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWVtcGxveWVlL2RpYWxvZy9lZGl0LWVtcGxveWVlLWRpYWxvZy9lZGl0LWVtcGxveWVlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZXRhaWxzLXNlY3Rpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG5cclxuI3NpbmdsZS1mb3JtLCAjYmF0Y2gtZm9ybSwgI3VwbG9hZC10eXBlIHtcclxuICB3aWR0aDogNTEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZDlkOWQ5LCAkYWxwaGE6IDAuMjUpO1xyXG59XHJcblxyXG4jdXBsb2FkLXR5cGUge1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zICA6IG1heC1jb250ZW50IDI0MHB4O1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICBnYXAgICAgICAgICAgICAgOiAxNXB4O1xyXG5cclxuICBsYWJlbCB7XHJcbiAgICBmb250LXNpemUgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgZm9udC13ZWlnaHQgOiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLm9uZWNhcGxpdGUtZ3JvdXAtYnRuIHtcclxuICAgIHdpZHRoICAgOiAzMDBweDtcclxuXHJcbiAgICAuYnRuIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2JhdGNoLWZvcm0ge1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgICA6IDIwcHg7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiAxZnI7XHJcblxyXG4gICYgPiBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucmVzdWx0LXBhZ2Uge1xyXG4gIG1hcmdpbjogMHB4IDYwcHggMzBweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbiAgbGFiZWwgeyBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIC5maWVsZC1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTc1cHggMWZyO1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLWxpc3Qge1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgJiA+IC5saXN0IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgbWFyZ2luICAgIDogMHB4IDYwcHg7XHJcbiAgZGlzcGxheSAgIDogZ3JpZDtcclxuICBnYXAgICAgICAgOiA1MHB4O1xyXG59XHJcblxyXG4ucmVzdWx0cy10YWJsZSB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiAyMDBweCAxZnI7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgICAgIDogYmFzZWxpbmU7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMjBweDtcclxuICBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheSAgICAgOiBncmlkO1xyXG4gICAgZ2FwICAgICAgICAgOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXMgOiBiYXNlbGluZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EditEmployeeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                templateUrl: './edit-employee-dialog.component.html',
                styleUrls: ['./edit-employee-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_15__["DropdownService"] }, { type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_16__["RoleService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_17__["UserRoleService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_18__["UserProfileService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_19__["ExcelService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"]]
            }] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "LTeQ":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-employee/admin-employee.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminEmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEmployeeModule", function() { return AdminEmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_employee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-employee-routing.module */ "kd2A");
/* harmony import */ var _admin_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-employee.component */ "+Zlo");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/edit-employee-dialog/edit-employee-dialog.component */ "AWcO");







class AdminEmployeeModule {
}
AdminEmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminEmployeeModule });
AdminEmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminEmployeeModule_Factory(t) { return new (t || AdminEmployeeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminEmployeeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminEmployeeModule, { declarations: [_admin_employee_component__WEBPACK_IMPORTED_MODULE_3__["AdminEmployeeComponent"], _dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminEmployeeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminEmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_employee_component__WEBPACK_IMPORTED_MODULE_3__["AdminEmployeeComponent"], _dialog_edit_employee_dialog_edit_employee_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditEmployeeDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_employee_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminEmployeeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kd2A":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/admin-employee/admin-employee-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminEmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEmployeeRoutingModule", function() { return AdminEmployeeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-employee.component */ "+Zlo");





const routes = [{ path: '', component: _admin_employee_component__WEBPACK_IMPORTED_MODULE_2__["AdminEmployeeComponent"] }];
class AdminEmployeeRoutingModule {
}
AdminEmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminEmployeeRoutingModule });
AdminEmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminEmployeeRoutingModule_Factory(t) { return new (t || AdminEmployeeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminEmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminEmployeeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-employee-admin-employee-module.js.map
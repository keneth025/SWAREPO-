(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-progress-my-progress-module"],{

/***/ "aS09":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-progress/my-progress-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyProgressRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProgressRoutingModule", function() { return MyProgressRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_progress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-progress.component */ "i2Sb");





const routes = [{ path: '', component: _my_progress_component__WEBPACK_IMPORTED_MODULE_2__["MyProgressComponent"] }];
class MyProgressRoutingModule {
}
MyProgressRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyProgressRoutingModule });
MyProgressRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyProgressRoutingModule_Factory(t) { return new (t || MyProgressRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyProgressRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProgressRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "i2Sb":
/*!************************************************************!*\
  !*** ./src/app/pages/my-progress/my-progress.component.ts ***!
  \************************************************************/
/*! exports provided: MyProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProgressComponent", function() { return MyProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/util/date.util */ "tnDu");
/* harmony import */ var src_app_shared_dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/course-dialog/course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component */ "UGwT");
/* harmony import */ var src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dialog/examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/others.service */ "51mG");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/dialog/course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/ui/progress-bar/progress-bar.component */ "aPzQ");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







































const _c0 = function () { return ["../../"]; };
function MyProgressComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
function MyProgressComponent_section_2_section_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-progress-bar", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.TotalCount > 0 ? ctx_r9.Progress + "%" : "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("acquiredPercentage", ctx_r9.Progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r9.CompletedCount, " out of ", ctx_r9.TotalCount, " ");
} }
function MyProgressComponent_section_2_section_2_app_loader_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
} }
function MyProgressComponent_section_2_section_2_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_section_2_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r13.changeRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_section_2_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_section_2_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r15.changeRole(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_section_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.exportData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Role Sub-Category: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MyProgressComponent_section_2_section_2_div_18_Template, 6, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, MyProgressComponent_section_2_section_2_app_loader_19_Template, 1, 0, "app-loader", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, MyProgressComponent_section_2_section_2_button_20_Template, 3, 0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, MyProgressComponent_section_2_section_2_button_21_Template, 3, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.HasRole ? ctx_r3.SelectedRole.value == null ? null : ctx_r3.SelectedRole.value.Title : "No role assigned.", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx_r3.SelectedRole.value == null ? null : ctx_r3.SelectedRole.value.SubCategoryName) || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.ActiveRoleIdx !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.ActiveRoleIdx < ctx_r3.RolesList.length - 1);
} }
function MyProgressComponent_section_2_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curriculum_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", curriculum_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curriculum_r19.Title, " ");
} }
function MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_ng_container_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const curriculum_r29 = ctx.ngIf; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r31.moreInfoCurriculum(curriculum_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-menu", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_ng_container_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const curriculum_r29 = ctx.ngIf; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r33.moreInfoCurriculum(curriculum_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "More Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const curriculum_r29 = ctx.ngIf; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r34.copyToClipBoard(curriculum_r29.Title, ctx_r34.ContentType.CURRICULA); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const curriculum_r29 = ctx.ngIf;
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curriculum_r29 ? curriculum_r29.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curriculum_r29.CompletionPercentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", curriculum_r29.TotalDurationString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r30);
} }
function MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_ng_container_1_Template, 22, 4, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curriculumId_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r26.CurriculumMap[curriculumId_r27]);
} }
function MyProgressComponent_section_2_ng_container_35_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Curriculum Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MyProgressComponent_section_2_ng_container_35_div_8_div_1_div_14_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", List_r22);
} }
function MyProgressComponent_section_2_ng_container_35_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_35_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_35_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_35_div_8_div_1_Template, 15, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyProgressComponent_section_2_ng_container_35_div_8_div_2_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MyProgressComponent_section_2_ng_container_35_div_8_div_3_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r22 = ctx.ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r21.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r21.DataIsLoading && List_r22.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.DataIsLoading);
} }
function MyProgressComponent_section_2_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_35_Template_button_click_2_listener() { const container_r20 = ctx.ngIf; return container_r20.Expanded = !container_r20.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MyProgressComponent_section_2_ng_container_35_div_8_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const container_r20 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@indicatorRotate", container_r20.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", container_r20.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 3, ctx_r5.FilteredAssignedCurriculumList));
} }
const _c1 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r48.launchCourse(course_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", null, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r50.moreInfoCourse(course_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "More information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r51.addToMyCourse(course_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r52.markCourseAsComplete(course_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r53.copyToClipBoard(course_r46.Title, ctx_r53.ContentType.COURSES); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const course_r46 = ctx.ngIf; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r54.reportProblem(course_r46, "Course"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Contact Us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const course_r46 = ctx.ngIf;
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r46.Title ? course_r46.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](9, _c1, course_r46.Status === ctx_r45.CourseStatus.Completed, course_r46.Status === ctx_r45.CourseStatus.Pending, course_r46.Status === ctx_r45.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r46.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r46.Status === ctx_r45.CourseStatus.Completed ? course_r46.CompletionDate : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", course_r46.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](course_r46.HasRecord ? "Added" : "Add to My Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", course_r46.Status === ctx_r45.CourseStatus.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r46.Status === ctx_r45.CourseStatus.Completed ? "Completed" : "Mark as Complete", " ");
} }
function MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_ng_container_1_Template, 29, 13, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const courseId_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r43.CourseMap[courseId_r44]);
} }
function MyProgressComponent_section_2_ng_container_37_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Course Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MyProgressComponent_section_2_ng_container_37_div_8_div_1_div_14_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", List_r39);
} }
function MyProgressComponent_section_2_ng_container_37_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No courses assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_37_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_37_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_37_div_8_div_1_Template, 15, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyProgressComponent_section_2_ng_container_37_div_8_div_2_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MyProgressComponent_section_2_ng_container_37_div_8_div_3_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r39 = ctx.ngIf;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r38.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r38.DataIsLoading && List_r39.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r38.DataIsLoading);
} }
function MyProgressComponent_section_2_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_37_Template_button_click_2_listener() { const container_r37 = ctx.ngIf; return container_r37.Expanded = !container_r37.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MyProgressComponent_section_2_ng_container_37_div_8_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const container_r37 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@indicatorRotate", container_r37.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", container_r37.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 3, ctx_r6.FilteredAssignedCourseList));
} }
const _c2 = function (a0, a1, a2) { return { "completed": a0, "failed": a1, "not-started": a2 }; };
function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const exam_r66 = ctx.ngIf; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r68.launchExam(exam_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", null, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const exam_r66 = ctx.ngIf; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r70.addToMyExam(exam_r66); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const exam_r66 = ctx.ngIf; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r71.copyToClipBoard(exam_r66.Title, ctx_r71.ContentType.EXAMS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const exam_r66 = ctx.ngIf; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6); return ctx_r72.reportProblem(exam_r66, "Exam"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exam_r66 = ctx.ngIf;
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r66 ? exam_r66.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](7, _c2, exam_r66.Status === ctx_r65.ExamStatus.PASSED, exam_r66.Status === ctx_r65.ExamStatus.FAILED, exam_r66.Status === ctx_r65.ExamStatus.NOT_YET_TAKEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r66.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r66.Status === ctx_r65.ExamStatus.PASSED ? exam_r66.CompletionDate : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", exam_r66.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exam_r66.HasRecord ? "Added" : "Add to My Exams");
} }
function MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_ng_container_1_Template, 25, 11, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const examId_r64 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r63.ExamMap[examId_r64]);
} }
function MyProgressComponent_section_2_ng_container_39_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Exam Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, MyProgressComponent_section_2_ng_container_39_div_8_div_1_div_14_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", List_r59);
} }
function MyProgressComponent_section_2_ng_container_39_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No exams assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_39_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MyProgressComponent_section_2_ng_container_39_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_2_ng_container_39_div_8_div_1_Template, 15, 1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyProgressComponent_section_2_ng_container_39_div_8_div_2_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MyProgressComponent_section_2_ng_container_39_div_8_div_3_Template, 2, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const List_r59 = ctx.ngIf;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r58.DataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r58.DataIsLoading && List_r59.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r58.DataIsLoading);
} }
function MyProgressComponent_section_2_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MyProgressComponent_section_2_ng_container_39_Template_button_click_2_listener() { const container_r57 = ctx.ngIf; return container_r57.Expanded = !container_r57.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Exams");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MyProgressComponent_section_2_ng_container_39_div_8_Template, 4, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const container_r57 = ctx.ngIf;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@indicatorRotate", container_r57.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@detailExpand", container_r57.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 3, ctx_r7.FilteredAssignedExamList));
} }
const _c3 = function (a0) { return { ActiveRole: a0 }; };
const _c4 = function () { return { Expanded: true }; };
function MyProgressComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyProgressComponent_section_2_section_2_Template, 22, 7, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Curriculum/Exam/Course Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, MyProgressComponent_section_2_mat_option_15_Template, 2, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-optgroup", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-optgroup", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, MyProgressComponent_section_2_ng_container_35_Template, 10, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, MyProgressComponent_section_2_ng_container_37_Template, 10, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, MyProgressComponent_section_2_ng_container_39_Template, 10, 5, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 20, ctx_r1.SelectedRoleObs)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.KeyWordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r1.CurriculumForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 22, ctx_r1.CurriculumList));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r1.StatusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.ExamStatus.NOT_YET_TAKEN);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.ExamStatus.NOT_YET_TAKEN, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.ExamStatus.FAILED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.ExamStatus.FAILED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.ExamStatus.PASSED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.ExamStatus.PASSED, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.CourseStatus.Pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.CourseStatus.Pending, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.CourseStatus.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.CourseStatus.Completed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c4));
} }
function MyProgressComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class MyProgressComponent {
    constructor(activatedRoute, route, dialog, snackBar, dropdownService, otherService, excelService, accountService, userProfileService, courseDialogService, userRoleService, roleService, curriculumService, courseService, examService, userCourseService, userExamService) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.dropdownService = dropdownService;
        this.otherService = otherService;
        this.excelService = excelService;
        this.accountService = accountService;
        this.userProfileService = userProfileService;
        this.courseDialogService = courseDialogService;
        this.userRoleService = userRoleService;
        this.roleService = roleService;
        this.curriculumService = curriculumService;
        this.courseService = courseService;
        this.examService = examService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.ContentType = src_constant_app_constant__WEBPACK_IMPORTED_MODULE_14__["ContentType"];
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["ExamStatus"];
        this.PageIsLoading = true;
        this.DataIsLoading = true;
        this.IsOtherUser = false;
        this.ProfileNotFound = false;
        this.ActiveUserProfile = null;
        this.ActiveRoleId = null;
        this.KeyWordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CurriculumForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]);
        this.StatusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]);
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.ActiveRoleIdx = 0;
        this.HasRole = false;
        this.RolesList = [];
        this.SelectedRole = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.SelectedRoleObs = this.SelectedRole.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.DataIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((data) => this.LoadData(data)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(({ CurriculumList, CourseList, ExamList, }) => {
            this.resetScore();
            this.AssignedCurriculumList.next(CurriculumList);
            this.AssignedCourseList.next(CourseList);
            this.AssignedExamList.next(ExamList);
            this.TotalCount = this.RequiredCourseId.length + this.RequiredExamId.length;
            this.computeScore();
            this.DataIsLoading = false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(''));
        this.RequiredCurriculumId = [];
        this.RequiredCourseId = [];
        this.RequiredExamId = [];
        this.RecomendedCurriculumId = [];
        this.RecomendedCourseId = [];
        this.RecomendedExamId = [];
        this.CompletedCount = 0;
        this.TotalCount = 0;
        this.Progress = 0;
        this.RoleMap = {};
        this.CurriculumMap = {};
        this.CourseMap = {};
        this.ExamMap = {};
        // #region Filtering Data
        this.AssignedCurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredAssignedCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.KeyWordForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
            // #region Filtered by status
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                this.StatusForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                // #region Filtered By Curriculum
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                    this.CurriculumForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                    this.AssignedCurriculumList,
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([SelectedFilterCurriculum, List]) => {
                    if (SelectedFilterCurriculum.length === 0) {
                        return List;
                    }
                    return List.filter((e) => {
                        const { CoursesId, ExamsId } = this.CurriculumMap[e];
                        const CoursesIdArr = Array.from(CoursesId);
                        const ExamsIdArr = Array.from(ExamsId);
                        return SelectedFilterCurriculum.some((curriculum) => CoursesIdArr.some(i => curriculum.CoursesId.has(i)) ||
                            ExamsIdArr.some(i => curriculum.ExamsId.has(i)));
                    });
                }))
                // #endregion
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([StatusList, List]) => {
                if (StatusList.length === 0) {
                    return List;
                }
                return List.filter(e => {
                    const { CoursesId: CourseIdSet, ExamsId: ExamIdSet } = this.CurriculumMap[e];
                    const CourseIdArr = Array.from(CourseIdSet);
                    const ExamIdArr = Array.from(ExamIdSet);
                    return CourseIdArr.some(i => StatusList.includes(this.CourseMap[i].Status)) ||
                        ExamIdArr.some(i => StatusList.includes(this.ExamMap[i].Status));
                });
            }))
            // #endregion
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([keyword, List]) => {
            const trimmedKeyword = keyword.trim();
            if (!trimmedKeyword) {
                return List;
            }
            return List.filter((e) => {
                const curriculumObj = this.CurriculumMap[e];
                const { Title, CoursesId, ExamsId } = curriculumObj;
                const CourseIdArr = Array.from(CoursesId);
                const ExamsIdArr = Array.from(ExamsId);
                return Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(Title, keyword) ||
                    CourseIdArr.some(i => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(this.CourseMap[i].Title, keyword)) ||
                    ExamsIdArr.some(i => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(this.ExamMap[i].Title, keyword));
            });
        }));
        this.AssignedCourseList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredAssignedCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.KeyWordForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
            // #region Filtered by status
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                this.StatusForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                // #region Filtered By Curriculum
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                    this.CurriculumForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                    this.AssignedCourseList,
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([SelectedFilterCurriculum, List]) => {
                    if (SelectedFilterCurriculum.length === 0) {
                        return List;
                    }
                    return List.filter((e) => SelectedFilterCurriculum
                        .some((curriculum) => curriculum.CoursesId.has(e)));
                }))
                // #endregion Filtered By Curriculum
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([StatusList, List]) => {
                if (StatusList.length === 0) {
                    return List;
                }
                return List.filter(e => StatusList.includes(this.CourseMap[e].Status));
            }))
            // #endregion
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([keyword, List]) => {
            const trimmedKeyword = keyword.trim();
            if (!trimmedKeyword) {
                return List;
            }
            return List.filter((e) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(this.CourseMap[e].Title, keyword));
        }));
        this.AssignedExamList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredAssignedExamList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.KeyWordForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
            // #region Filtered by status
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                this.StatusForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                // #region Filtered By Curriculum
                Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                    this.CurriculumForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                    this.AssignedExamList,
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([SelectedFilterCurriculum, List]) => {
                    if (SelectedFilterCurriculum.length === 0) {
                        return List;
                    }
                    return List.filter((e) => SelectedFilterCurriculum
                        .some((curriculum) => curriculum.ExamsId.has(e)));
                })),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([StatusList, List]) => {
                if (StatusList.length === 0) {
                    return List;
                }
                return List.filter(e => StatusList.includes(this.ExamMap[e].Status));
            }))
            // #endregion
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([keyword, List]) => {
            const trimmedKeyword = keyword.trim();
            if (!trimmedKeyword) {
                return List;
            }
            return List.filter((e) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(this.ExamMap[e].Title, keyword));
        }));
    }
    // #endregion
    ngOnInit() {
        this.initialLoad();
    }
    ngOnDestroy() {
        this.userCourseService.unsetActiveUser();
        this.userExamService.unsetActiveUser();
        this.userRoleService.unsetActiveUser();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            yield this.loadProfile();
            if (!this.ProfileNotFound) {
                yield Promise.all([this.loadRoles(), this.loadFilters()]);
            }
            this.PageIsLoading = false;
        });
    }
    loadProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const QueryParamRoleId = this.activatedRoute.snapshot.queryParamMap.get('roleId');
            const ParamProfileId = this.activatedRoute.snapshot.paramMap.get('Id');
            if (QueryParamRoleId) {
                this.ActiveRoleId = parseInt(QueryParamRoleId, 10);
            }
            if (ParamProfileId) {
                const ProfileId = parseInt(ParamProfileId, 10);
                this.IsOtherUser = true;
                this.ActiveUserProfile = yield this.userProfileService.getItemByUserId(ProfileId);
                if (!this.ActiveUserProfile) {
                    this.ProfileNotFound = true;
                }
                else {
                    const { Id } = this.ActiveUserProfile.User;
                    this.userCourseService.setActiveUser(Id);
                    this.userRoleService.setActiveUser(Id);
                    this.userExamService.setActiveUser(Id);
                }
            }
            else {
                this.ActiveUserProfile = yield this.userProfileService.getItemByUserId(this.accountService.account.Id);
            }
        });
    }
    loadRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userRoleList = yield this.userRoleService.getAll();
            const RolesId = userRoleList.map(e => e.RoleId);
            const RoleSet = new Set(RolesId);
            const RolesArr = yield this.roleService.getItemsByIdArr(Array.from(RoleSet));
            this.RolesList = RolesArr;
            if (this.ActiveRoleId) {
                this.ActiveRoleIdx = this.RolesList.findIndex(e => e.Id === this.ActiveRoleId);
            }
            this.SelectedRole.next(this.RolesList[this.ActiveRoleIdx]);
            this.HasRole = this.RolesList.length > 0;
        });
    }
    loadFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const curriculumList = yield this.curriculumService.getAll();
            this.CurriculumMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["convertToFilterMap"])(curriculumList);
            this.CurriculumList.next(curriculumList);
        });
    }
    LoadData(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.RequiredCourseId = [];
            this.RequiredExamId = [];
            if (!role) {
                return {
                    CurriculumList: [],
                    CourseList: [],
                    ExamList: [],
                    RecomendedCurriculumList: [],
                    RecomendedCourseList: [],
                    RecomendedExamList: [],
                };
            }
            this.DataIsLoading = true;
            yield Promise.all([
                this.userCourseService.getAll(),
                this.userExamService.getAll(),
            ]);
            const { CurriculaId, CoursesId, ExamsId, } = role;
            const CurriculaIdArr = Array.from(CurriculaId);
            const CurriculumCoursesIdArr = [];
            const CurriculumExamsIdArr = [];
            // #region Required Items
            const CurriculumIdSet = new Set(CurriculaIdArr);
            for (const Id of Array.from(CurriculumIdSet)) {
                if (!this.CurriculumMap[Id]) {
                    console.log(`[My Progress]: Curriculum Id not found (ID: ${Id})`);
                    continue;
                }
                const { CoursesId: CurriculumCourseIds, ExamsId: CurriculumExamIds } = this.CurriculumMap[Id];
                CurriculumCoursesIdArr.push(...Array.from(CurriculumCourseIds));
                CurriculumExamsIdArr.push(...Array.from(CurriculumExamIds));
            }
            const CourseIdArr = [
                ...CurriculumCoursesIdArr,
                ...Array.from(CoursesId)
            ];
            const ExamIdArr = [
                ...CurriculumExamsIdArr,
                ...Array.from(ExamsId)
            ];
            const CourseIdSet = new Set(CourseIdArr);
            const ExamIdSet = new Set(ExamIdArr);
            // #endregion Required Items
            const OverAllCourseIdSet = CourseIdSet;
            const OverAllExamIdSet = ExamIdSet;
            let [CourseArr, ExamArr] = yield Promise.all([
                this.courseService.getItemsByIdArr(Array.from(OverAllCourseIdSet)),
                this.examService.getItemsByIdArr(Array.from(OverAllExamIdSet)),
            ]);
            CourseArr = CourseArr.map(e => {
                e.CurriculumNameArr = this.CurriculumList.value
                    .filter(i => i.CoursesId.has(e.Id))
                    .map(i => i.Title);
                return e;
            });
            ExamArr = ExamArr.map(e => {
                e.CurriculumNameArr = this.CurriculumList.value
                    .filter(i => i.ExamsId.has(e.Id))
                    .map(i => i.Title);
                return e;
            });
            this.CourseMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["convertToFilterMap"])(CourseArr);
            this.ExamMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["convertToFilterMap"])(ExamArr);
            // #region Required Items
            const CurriculumCoursesIdSet = new Set(CurriculumCoursesIdArr);
            const CurriculumExamsIdSet = new Set(CurriculumExamsIdArr);
            this.RequiredCurriculumId = Array.from(CurriculumIdSet);
            this.RequiredCourseId = Array.from(CourseIdSet);
            this.RequiredExamId = Array.from(ExamIdSet);
            const Curricula = Array.from(CurriculumIdSet);
            const FilteredCourses = this.RequiredCourseId.filter(e => !CurriculumCoursesIdSet.has(e));
            const FilteredExams = this.RequiredExamId.filter(e => !CurriculumExamsIdSet.has(e));
            // #endregion Required Items
            for (const CurriculumId of Curricula) {
                const { CoursesId: TempCourseIds } = this.CurriculumMap[CurriculumId];
                const TempDurationArr = Array.from(TempCourseIds).map(e => this.CourseMap[e].Duration);
                this.CurriculumMap[CurriculumId].DurationList = TempDurationArr;
            }
            this.refreshData();
            return {
                CurriculumList: Curricula,
                CourseList: FilteredCourses,
                ExamList: FilteredExams,
            };
        });
    }
    updatePage() {
        this.refreshData();
        this.computeScore();
    }
    refreshData() {
        const OverAllCurriculumId = [...this.RequiredCurriculumId, ...this.RecomendedCurriculumId];
        const OverAllCourseId = [...this.RequiredCourseId, ...this.RecomendedCourseId];
        const OverAllExamId = [...this.RequiredExamId, ...this.RecomendedExamId];
        for (const Id of OverAllCourseId) {
            this.CourseMap[Id].Record = this.userCourseService.getRecord(Id);
        }
        for (const Id of OverAllExamId) {
            this.ExamMap[Id].Record = this.userExamService.getRecord(Id);
        }
        for (const Id of OverAllCurriculumId) {
            this.CurriculumMap[Id].CompletionPercentage = this.computeCurriculumScore(this.CurriculumMap[Id]);
        }
    }
    resetScore() {
        this.CompletedCount = 0;
        this.TotalCount = 0;
        this.Progress = 0;
    }
    computeScore() {
        const CourseCompletedCount = this.RequiredCourseId.filter(e => this.CourseMap[e].Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed).length;
        const ExamCompletedCount = this.RequiredExamId.filter(e => this.ExamMap[e].Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["ExamStatus"].PASSED).length;
        this.CompletedCount = CourseCompletedCount + ExamCompletedCount;
        const { CompletedCount, TotalCount } = this;
        if (TotalCount === 0) {
            this.CompletedCount = 0;
            this.Progress = 0;
        }
        else {
            this.Progress = CompletedCount === 0 ? 0 : Math.round((CompletedCount / TotalCount) * 100);
        }
    }
    computeCurriculumScore(item) {
        const { CoursesId, ExamsId } = item;
        const CoursesIdArr = Array.from(CoursesId);
        const ExamsIdArr = Array.from(ExamsId);
        const CourseCompletedCount = CoursesIdArr.filter(e => this.CourseMap[e].Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed).length;
        const ExamCompletedCount = ExamsIdArr.filter(e => this.ExamMap[e].Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["ExamStatus"].PASSED).length;
        const TotalCount = CoursesIdArr.length + ExamsIdArr.length;
        let CompletedCount = CourseCompletedCount + ExamCompletedCount;
        let Progress = 0;
        if (TotalCount === 0) {
            CompletedCount = 0;
            Progress = 0;
        }
        else {
            Progress = CompletedCount === 0 ? 0 : Math.round((CompletedCount / TotalCount) * 100);
        }
        return Progress;
    }
    changeRole(isNext = false) {
        let updatedIdx = false;
        if (isNext) {
            if (this.ActiveRoleIdx < (this.RolesList.length - 1)) {
                this.ActiveRoleIdx += 1;
                updatedIdx = true;
            }
        }
        else {
            if (this.ActiveRoleIdx > 0) {
                this.ActiveRoleIdx -= 1;
                updatedIdx = true;
            }
        }
        if (updatedIdx) {
            const { ActiveRoleIdx, RolesList } = this;
            this.SelectedRole.next(RolesList[ActiveRoleIdx]);
        }
    }
    copyToClipBoard(Title, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["copyToClipBoard"])(Title, contentType);
            this.snackBar.open('Link Copied!');
        });
    }
    reportProblem(item, itemType) {
        this.dialog.open(src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ReportProblemDialogComponent"], {
            data: { item, itemType }
        });
    }
    // #region Curriculum
    moreInfoCurriculum(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialog.open(src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CurriculumDescriptionDialogComponent"], { data: { item } })
                .afterClosed()
                .toPromise();
            this.updatePage();
        });
    }
    // #endregion
    // #region Courses
    moreInfoCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedItem = yield this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
            if (updatedItem) {
                const { Record } = updatedItem;
                if (Record) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackBar.open(message);
                }
            }
            this.updatePage();
        });
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.courseDialogService.launchCourse(item);
            this.updatePage();
        });
    }
    addToMyCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["UserCourse"]({ CourseId: item.Id });
            const updatedRecord = yield this.userCourseService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Courses!');
        });
    }
    markCourseAsComplete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item) {
                const loaderDialog = this.dialog.loaderDialog();
                const { Record } = item;
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["UserCourse"]({ CourseId: item.Id });
                activeRecord.Status = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed;
                const updatedRecord = yield this.userCourseService.save(activeRecord);
                item.Record = updatedRecord;
                loaderDialog.close();
                this.snackBar.open(`Course completed!`);
                const isRated = yield this.dialog.open(src_app_shared_dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
                if (isRated) {
                    this.snackBar.open('Rated Successfully!');
                }
            }
        });
    }
    // #endregion Courses
    // #region Exam
    launchExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialog.open(src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ExaminationDialogComponent"], { data: { item } });
            this.updatePage();
        });
    }
    addToMyExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["UserExam"]({ ExamId: item.Id });
            const updatedRecord = yield this.userExamService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Exams!');
            this.updatePage();
        });
    }
    // #endregion
    exportData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { User, Manager } = this.ActiveUserProfile;
            const SelectedRole = this.SelectedRole.value;
            const { HasRole, Progress } = this;
            const ProfileSection = [
                ['Name:', User.Title],
                ['Email Address:', User.EMail],
                ['People Manager:', Manager.Title],
                ['Role:', SelectedRole.Title],
                ['% Completion:', HasRole ? `${Progress}%` : 'N/A'],
            ];
            let CurriculumData = [
                ['Curriculum'],
            ];
            for (const curriculumId of this.AssignedCurriculumList.value) {
                const { Title, CompletionPercentage, CoursesId, ExamsId } = this.CurriculumMap[curriculumId];
                let TempCurriculumData = [
                    [Title, '', '', '', `${CompletionPercentage}%`],
                ];
                const CourseIdArr = Array.from(CoursesId);
                const ExamIdArr = Array.from(ExamsId);
                if (CourseIdArr.length > 0) {
                    TempCurriculumData = [
                        ...TempCurriculumData,
                        [''],
                        ['Courses'],
                        ...CourseIdArr.map((courseId, idx) => {
                            const { Title: CourseTitle, DurationString, Status, CompletionDate } = this.CourseMap[courseId];
                            return [
                                idx + 1,
                                CourseTitle,
                                DurationString,
                                Status,
                                Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed ? CompletionDate : '',
                            ];
                        })
                    ];
                }
                if (ExamIdArr.length > 0) {
                    TempCurriculumData = [
                        ...TempCurriculumData,
                        [''],
                        ['Exams'],
                        ...ExamIdArr.map((examId, idx) => {
                            const { Title: ExamTitle, Status, CompletionDate } = this.ExamMap[examId];
                            return [
                                idx + 1,
                                ExamTitle,
                                '',
                                Status,
                                Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["ExamStatus"].PASSED ? CompletionDate : '',
                            ];
                        })
                    ];
                }
                TempCurriculumData = [
                    ...TempCurriculumData,
                ];
                CurriculumData = [
                    ...CurriculumData,
                    ...TempCurriculumData,
                    [''],
                    [''],
                ];
            }
            const CourseData = [
                ['Courses'],
                ['Course Title', 'Curriculum', 'Status', 'Completion Date', 'Course Duration'],
                ...this.AssignedCourseList.value.map((courseId) => {
                    const { Title, CurriculumNames, Status, CompletionDate, Duration } = this.CourseMap[courseId];
                    return [
                        Title,
                        CurriculumNames,
                        Status,
                        Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["CourseStatus"].Completed ? CompletionDate : '',
                        Duration
                    ];
                })
            ];
            const ExamData = [
                ['Examination'],
                ['Exam Title', 'Curriculum', 'Status', 'Completion Date'],
                ...this.AssignedExamList.value.map((examId) => {
                    const { Title, CurriculumNames, Status, CompletionDate } = this.ExamMap[examId];
                    return [
                        Title, CurriculumNames, Status, Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_7__["ExamStatus"].PASSED ? CompletionDate : ''
                    ];
                })
            ];
            const ReportData = [
                ...ProfileSection,
                [''],
                ...CurriculumData,
                [''],
                ...ExamData,
                [''],
                ...CourseData,
            ];
            this.excelService.exportArrayAsExcelFile(ReportData, `MyProgress_${Object(src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_9__["getCurrentDateString"])()}`);
        });
    }
}
MyProgressComponent.ɵfac = function MyProgressComponent_Factory(t) { return new (t || MyProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_19__["OthersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_20__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_21__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_22__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_23__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_24__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_25__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_26__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_27__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_28__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_29__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_30__["UserExamService"])); };
MyProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MyProgressComponent, selectors: [["ng-component"]], decls: 4, vars: 3, consts: [[1, "page-container"], ["class", "other-profile-section", 4, "ngIf"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "other-profile-section"], [1, "onecap-outline-btn", "accent-2", 3, "routerLink"], [1, "page-body"], ["id", "top-row"], ["id", "role", "class", "card-section", 4, "ngIf"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Enter key words", 3, "formControl"], [1, "select-container"], ["placeholder", "All Curricula", "multiple", "", 3, "panelClass", "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "All Status", "multiple", "", 3, "panelClass", "formControl"], ["label", "Examination"], [3, "value"], ["label", "Course"], ["id", "curriculum", 1, "card-section", "colapsable"], [4, "ngIf"], ["id", "courses", 1, "card-section", "colapsable"], ["id", "exams", 1, "card-section", "colapsable"], ["id", "role", 1, "card-section"], [1, "section-header"], [1, "section-title"], [1, "section-body", "card"], [1, "card-header"], [1, "card-title"], [1, "onecap-outline-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], [1, "icon", "icon-dxc", "export", "accent-2"], [1, "card-body"], [1, "link-lbl"], ["id", "progress-area"], ["id", "progress-body", 4, "ngIf"], ["class", "prev-btn", 3, "click", 4, "ngIf"], ["class", "next-btn", 3, "click", 4, "ngIf"], ["id", "progress-body"], ["id", "progress-percentage"], ["id", "progress-bar", 3, "acquiredPercentage"], ["id", "progress-count"], [1, "prev-btn", 3, "click"], [1, "material-icons"], [1, "next-btn", 3, "click"], [1, "onecap-icon-btn", 3, "click"], [1, "section-body"], ["class", "card", 4, "ngIf"], [1, "card"], ["class", "onecap-table curriculum", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], [1, "onecap-table", "curriculum"], [1, "table-header"], [1, "section", "details"], [1, "col-name"], [1, "section"], [1, "col-name", "action"], [1, "more"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "col-name", "onecaplite-lbl"], [1, "onecap-btn", "accent", 3, "click"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], ["curriculumMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "card-message"], [1, "status-loading"], ["class", "onecap-table course-progress", 4, "ngIf"], [1, "onecap-table", "course-progress"], [1, "status-badge", 3, "ngClass"], [1, "onecap-btn", "primary", 3, "click"], ["courseMenu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"], ["class", "onecap-table exam-progress", 4, "ngIf"], [1, "onecap-table", "exam-progress"], ["examMenu", "matMenu"], [1, "page-loader"]], template: function MyProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MyProgressComponent_section_1_Template, 3, 2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MyProgressComponent_section_2_Template, 40, 29, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MyProgressComponent_section_3_Template, 2, 0, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.IsOtherUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading && !ctx.ProfileNotFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_31__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOptgroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatOption"], _shared_ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_34__["ProgressBarComponent"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_35__["LoaderComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_31__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_31__["AsyncPipe"]], styles: ["#role[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n}\n\n.card-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: var(--font-lg);\n  line-height: var(--linespace-lg);\n  letter-spacing: var(--no-char-spacing);\n  height: var(--font-lg);\n}\n\n.card-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]    + .section-body[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.card-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.page-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 40px;\n}\n\n.other-profile-section[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.other-profile-section[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  border: var(--onecaplite-blue) solid 1px;\n  color: var(--onecaplite-blue);\n  background-color: var(--onecaplite-white);\n}\n\n#top-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  grid-auto-rows: 1fr;\n  justify-content: stretch;\n  align-items: stretch;\n  gap: 40px;\n}\n\n#top-row[_ngcontent-%COMP%]   .card-section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n#filters[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#role[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  color: var(--onecaplite-blue);\n  height: unset;\n  padding: 5px 0px;\n  grid-template-columns: 1fr max-content;\n}\n\n#role[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .onecap-outline-btn[_ngcontent-%COMP%] {\n  width: 75px;\n}\n\n#role[_ngcontent-%COMP%]   .prev-btn[_ngcontent-%COMP%], #role[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: calc(50% - 15px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  border: none;\n  color: var(--onecaplite-white);\n  background-color: var(--onecaplite-purple);\n}\n\n#role[_ngcontent-%COMP%]   .prev-btn[_ngcontent-%COMP%]:focus, #role[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#role[_ngcontent-%COMP%]   .prev-btn[_ngcontent-%COMP%] {\n  left: -15px;\n}\n\n#role[_ngcontent-%COMP%]   .next-btn[_ngcontent-%COMP%] {\n  right: -15px;\n}\n\n#progress-area[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 100px;\n  margin: 8px;\n  margin-bottom: 0px;\n  background-color: rgba(217, 217, 217, 0.25);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#progress-area[_ngcontent-%COMP%]   #progress-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  width: 100%;\n  padding: 0px 25px;\n  box-sizing: border-box;\n}\n\n#progress-area[_ngcontent-%COMP%]   #progress-percentage[_ngcontent-%COMP%] {\n  align-self: center;\n  font-weight: bold;\n  font-size: var(--font-xl);\n  line-height: var(--linespace-xl);\n  letter-spacing: var(--no-char-spacing);\n  color: var(--onecaplite-blue);\n}\n\n#progress-area[_ngcontent-%COMP%]   #progress-bar[_ngcontent-%COMP%] {\n  max-width: 500px;\n  width: 100%;\n}\n\n#progress-area[_ngcontent-%COMP%]   #progress-count[_ngcontent-%COMP%] {\n  align-self: center;\n  font-weight: bold;\n  font-size: var(--font-sm);\n  line-height: var(--linespace-sm);\n  letter-spacing: var(--no-char-spacing);\n  color: var(--onecaplite-blue);\n}\n\n.card-section.colapsable[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.card-section.colapsable[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.onecap-table.curriculum[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table.curriculum[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .onecap-table.course-progress[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table.course-progress[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], .onecap-table.exam-progress[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table.exam-progress[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 3.5fr 1.5fr;\n}\n\n.onecap-table.curriculum[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%], .onecap-table.curriculum[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%], .onecap-table.course-progress[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%], .onecap-table.course-progress[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%], .onecap-table.exam-progress[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%], .onecap-table.exam-progress[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]    > .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 1.5fr 0.75fr 0.75fr;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 15px;\n}\n\n.learning-section[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.learning-section[_ngcontent-%COMP%]   .learning-section-header[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  font-weight: bold;\n  font-size: var(--font-lg);\n  color: var(--onecaplite-purple);\n}\n\n@media only screen and (max-width: 1279px) {\n  #top-row[_ngcontent-%COMP%] {\n    grid-auto-flow: row;\n  }\n}\n\n@media only screen and (max-width: 949px) {\n  .table-area.curriculum[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .table-area.curriculum[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 2fr 1fr;\n  }\n  .table-area.curriculum[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]    > .section[_ngcontent-%COMP%], .table-area.curriculum[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]    > .section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktcHJvZ3Jlc3MvbXktcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQURGOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQUROOztBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU1FO0VBQ0UsWUFBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFNRTtFQUNFLHdDQUFBO0VBQ0EsNkJBQUE7RUFDQSx5Q0FBQTtBQUpKOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FBTEY7O0FBT0U7RUFDRSxZQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO0FBTkY7O0FBVUU7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNDQUFBO0FBUEo7O0FBUUk7RUFDRSxXQUFBO0FBTk47O0FBVUU7RUFDRSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7QUFYSjs7QUFZSTtFQUNFLGFBQUE7QUFWTjs7QUFlRTtFQUNFLFdBQUE7QUFiSjs7QUFlRTtFQUNFLFlBQUE7QUFiSjs7QUFpQkE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFpQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWtCRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFqQko7O0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDZCQUFBO0FBbEJKOztBQXVCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBcEJKOztBQXNCRTtFQUNFLGdCQUFBO0FBcEJKOztBQTJCSTtFQUNFLGtDQUFBO0FBeEJOOztBQTBCUTtFQUNFLDBDQUFBO0FBeEJWOztBQStCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBNUJGOztBQStCQTtFQUNFLGFBQUE7QUE1QkY7O0FBOEJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUE1Qko7O0FBZ0NBO0VBQ0U7SUFDRSxtQkFBQTtFQTdCRjtBQUNGOztBQWdDQTtFQUVJO0lBQ0UsOEJBQUE7RUEvQko7RUFnQ0k7SUFDRSwwQkFBQTtJQUNBLDJCQUFBO0VBOUJOO0FBQ0Y7O0FBbUNBLGVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1wcm9ncmVzcy9teS1wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyb2xlIHtcclxuICAuc2VjdGlvbi1ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gIDogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50IDogZmxleC1zdGFydDtcclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgLnNlY3Rpb24tdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gICAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LWxnKTtcclxuICAgICAgbGluZS1oZWlnaHQgICAgIDogdmFyKC0tbGluZXNwYWNlLWxnKTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmcgIDogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICAgICAgaGVpZ2h0ICAgICAgICAgIDogdmFyKC0tZm9udC1sZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1oZWFkZXIgKyAuc2VjdGlvbi1ib2R5IHtcclxuICAgIG1hcmdpbi10b3AgIDogNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb24tYm9keSB7XHJcbiAgICBmbGV4LWdyb3cgICA6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1ib2R5IHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDFmcjtcclxuICBnYXAgICAgICAgICAgICAgICAgICAgOiA0MHB4O1xyXG59XHJcblxyXG4ub3RoZXItcHJvZmlsZS1zZWN0aW9uIHtcclxuICBib3gtc2l6aW5nICA6IGJvcmRlci1ib3g7XHJcbiAgLmJhY2stYnRuIHtcclxuICAgIGJvcmRlciAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtYmx1ZSkgc29saWQgMXB4O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG4gIH1cclxufVxyXG5cclxuI3RvcC1yb3cge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICAgICA6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3cgICAgICAgIDogY29sdW1uO1xyXG4gIGdyaWQtYXV0by1jb2x1bW5zICAgICA6IDFmcjtcclxuICBncmlkLWF1dG8tcm93cyAgICAgICAgOiAxZnI7XHJcbiAganVzdGlmeS1jb250ZW50ICAgICAgIDogc3RyZXRjaDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBzdHJldGNoO1xyXG4gIGdhcCAgICAgICAgICAgICAgICAgICA6IDQwcHg7XHJcblxyXG4gIC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgZmxleC1ncm93IDogMTtcclxuICB9XHJcbn1cclxuXHJcbiNmaWx0ZXJzIHtcclxuICBkaXNwbGF5IDogZ3JpZDtcclxuICBnYXAgICAgIDogMTBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG59XHJcblxyXG4jcm9sZSB7XHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWJsdWUpO1xyXG4gICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuICAgIC5vbmVjYXAtb3V0bGluZS1idG4ge1xyXG4gICAgICB3aWR0aCAgICAgICAgICAgOiA3NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByZXYtYnRuLCAubmV4dC1idG4ge1xyXG4gICAgY3Vyc29yICA6IHBvaW50ZXI7XHJcblxyXG4gICAgcG9zaXRpb24gIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgOiBjYWxjKDUwJSAtIDE1cHgpO1xyXG5cclxuICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMzBweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiBub25lO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAucHJldi1idG4ge1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgfVxyXG4gIC5uZXh0LWJ0biB7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4jcHJvZ3Jlc3MtYXJlYSB7XHJcbiAgYm94LXNpemluZyAgICAgICAgOiBib3JkZXItYm94O1xyXG4gIGhlaWdodCAgICAgICAgICAgIDogMTAwcHg7XHJcbiAgbWFyZ2luICAgICAgICAgICAgOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjI1KTtcclxuXHJcbiAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuXHJcbiAgI3Byb2dyZXNzLWJvZHkge1xyXG4gICAgZmxleC1ncm93ICAgICAgIDogMTtcclxuICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICBnYXAgICAgICAgICAgICAgOiA1cHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4IDI1cHg7XHJcbiAgICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgI3Byb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gICAgYWxpZ24tc2VsZiAgICA6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQteGwpO1xyXG4gICAgbGluZS1oZWlnaHQgICA6IHZhcigtLWxpbmVzcGFjZS14bCk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWJsdWUpO1xyXG4gIH1cclxuXHJcbiAgI3Byb2dyZXNzLWJhciB7XHJcbiAgICBtYXgtd2lkdGggOiA1MDBweDtcclxuICAgIHdpZHRoICAgICA6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAjcHJvZ3Jlc3MtY291bnQge1xyXG4gICAgYWxpZ24tc2VsZiAgICA6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgbGluZS1oZWlnaHQgICA6IHZhcigtLWxpbmVzcGFjZS1zbSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWJsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtc2VjdGlvbi5jb2xhcHNhYmxlIHtcclxuICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWJvZHkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ub25lY2FwLXRhYmxlIHtcclxuICAmLmN1cnJpY3VsdW0sICYuY291cnNlLXByb2dyZXNzLCAmLmV4YW0tcHJvZ3Jlc3Mge1xyXG4gICAgLnRhYmxlLWhlYWRlciwgLnRhYmxlLXJvdyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMy41ZnIgMS41ZnI7XHJcbiAgICAgICYgPiAuc2VjdGlvbiB7XHJcbiAgICAgICAgJi5kZXRhaWxzIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS41ZnIgMC43NWZyIDAuNzVmcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheSA6IGdyaWQ7XHJcbiAgZ2FwICAgICA6IDE1cHg7XHJcbn1cclxuXHJcbi5sZWFybmluZy1zZWN0aW9uIHtcclxuICBkaXNwbGF5IDogZ3JpZDtcclxuXHJcbiAgLmxlYXJuaW5nLXNlY3Rpb24taGVhZGVyIHtcclxuICAgIHBhZGRpbmctbGVmdCAgOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBmb250LXNpemUgICAgIDogdmFyKC0tZm9udC1sZyk7XHJcbiAgICBjb2xvciAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAjdG9wLXJvdyB7XHJcbiAgICBncmlkLWF1dG8tZmxvdyA6IHJvdztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ5cHgpIHtcclxuICAudGFibGUtYXJlYS5jdXJyaWN1bHVtIHtcclxuICAgIC50YWJsZS1oZWFkZXIsIC50YWJsZS1yb3cge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XHJcbiAgICAgICYgPiAuc2VjdGlvbiB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiAjZW5kcmVnaW9uICovXHJcblxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)', transformOrigin: 'center center' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)', transformOrigin: 'center center' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MyProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './my-progress.component.html',
                styleUrls: ['./my-progress.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('indicatorRotate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(0deg)', transformOrigin: 'center center' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'rotate(180deg)', transformOrigin: 'center center' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_18__["DropdownService"] }, { type: src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_19__["OthersService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_20__["ExcelService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_21__["AccountService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_22__["UserProfileService"] }, { type: src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_23__["CourseDialogService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_24__["UserRoleService"] }, { type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_25__["RoleService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_26__["CurriculumService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_27__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_28__["ExamService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_29__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_30__["UserExamService"] }]; }, null); })();


/***/ }),

/***/ "zmcL":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-progress/my-progress.module.ts ***!
  \*********************************************************/
/*! exports provided: MyProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProgressModule", function() { return MyProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _my_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-progress-routing.module */ "aS09");
/* harmony import */ var _my_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-progress.component */ "i2Sb");






class MyProgressModule {
}
MyProgressModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyProgressModule });
MyProgressModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyProgressModule_Factory(t) { return new (t || MyProgressModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _my_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProgressRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyProgressModule, { declarations: [_my_progress_component__WEBPACK_IMPORTED_MODULE_4__["MyProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _my_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProgressRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProgressModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_progress_component__WEBPACK_IMPORTED_MODULE_4__["MyProgressComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _my_progress_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProgressRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-my-progress-my-progress-module.js.map
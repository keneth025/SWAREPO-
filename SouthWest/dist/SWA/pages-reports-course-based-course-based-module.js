(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-course-based-course-based-module"],{

/***/ "/3/I":
/*!**********************************************************************!*\
  !*** ./src/app/pages/reports/course-based/course-based.component.ts ***!
  \**********************************************************************/
/*! exports provided: CourseBasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBasedComponent", function() { return CourseBasedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/user-profile.model */ "Ew+s");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-report-filter-dialog/course-report-filter-dialog.component */ "4LxW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");

























function CourseBasedComponent_section_4_ng_container_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No people manager available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_18_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_18_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r17.selectedManager.setValue([]); return _r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All People Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_18_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r19.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Title, " ");
} }
function CourseBasedComponent_section_4_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseBasedComponent_section_4_ng_container_18_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseBasedComponent_section_4_ng_container_18_button_2_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseBasedComponent_section_4_ng_container_18_mat_option_3_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r13.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r13.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r13);
} }
function CourseBasedComponent_section_4_ng_container_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No country available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_30_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_30_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r24.selectedCountry.setValue([]); return _r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Countries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_30_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r26.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r26.Title, " ");
} }
function CourseBasedComponent_section_4_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseBasedComponent_section_4_ng_container_30_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseBasedComponent_section_4_ng_container_30_button_2_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseBasedComponent_section_4_ng_container_30_mat_option_3_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r20 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r20.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r20.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r20);
} }
function CourseBasedComponent_section_4_ng_container_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_42_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_42_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r31.selectedCurriculum.setValue([]); return _r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Curricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_42_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r33.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r33.Title, " ");
} }
function CourseBasedComponent_section_4_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseBasedComponent_section_4_ng_container_42_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseBasedComponent_section_4_ng_container_42_button_2_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseBasedComponent_section_4_ng_container_42_mat_option_3_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r27 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r27.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r27.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r27);
} }
function CourseBasedComponent_section_4_ng_container_54_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_54_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_54_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r38.selectedCourse.setValue([]); return _r8.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_54_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r40.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r40.Title, " ");
} }
function CourseBasedComponent_section_4_ng_container_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseBasedComponent_section_4_ng_container_54_div_1_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseBasedComponent_section_4_ng_container_54_button_2_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseBasedComponent_section_4_ng_container_54_mat_option_3_Template, 2, 2, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r34 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r34.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r34.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r34);
} }
function CourseBasedComponent_section_4_ng_container_86_div_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.Employee ? item_r48.Employee.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.Manager ? item_r48.Manager.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.Country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.OrgLvl1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.OrgLvl2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.Course ? item_r48.Course.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r48.CompletionDate, " ");
} }
function CourseBasedComponent_section_4_ng_container_86_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Org Level 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Org Level 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Completion Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CourseBasedComponent_section_4_ng_container_86_div_2_div_20_Template, 19, 8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", pageData_r41.data);
} }
function CourseBasedComponent_section_4_ng_container_86_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No registered employee/s recorded. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_86_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No report generated. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_86_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseBasedComponent_section_4_ng_container_86_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_86_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const pageData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r50.pageIndex.next(pageData_r41.currentIndex - 1); return ctx_r50.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_ng_container_86_div_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const pageData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r53.pageIndex.next(pageData_r41.currentIndex + 1); return ctx_r53.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageData_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !pageData_r41.hasPrevious);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", pageData_r41.currentIndex * ctx_r46.PageSize + 1, " to ", pageData_r41.currentIndex * ctx_r46.PageSize + pageData_r41.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !pageData_r41.hasNext);
} }
function CourseBasedComponent_section_4_ng_container_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseBasedComponent_section_4_ng_container_86_div_2_Template, 21, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseBasedComponent_section_4_ng_container_86_div_3_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CourseBasedComponent_section_4_ng_container_86_div_4_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CourseBasedComponent_section_4_ng_container_86_div_5_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CourseBasedComponent_section_4_ng_container_86_div_6_Template, 9, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pageData_r41 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.DataIsLoading && ctx_r12.ReportGenerated && pageData_r41.hasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r12.DataIsLoading || ctx_r12.ProjectMembersLoading) && ctx_r12.ReportGenerated && !pageData_r41.hasData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r12.ReportGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r12.DataIsLoading || ctx_r12.ProjectMembersLoading) && ctx_r12.ReportGenerated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r12.DataIsLoading || ctx_r12.ProjectMembersLoading) && pageData_r41.hasData);
} }
function CourseBasedComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseBasedComponent_section_4_Template_mat_select_closed_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r56.ManagerSearchFilter.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseBasedComponent_section_4_Template_input_keydown_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CourseBasedComponent_section_4_ng_container_18_Template, 4, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-select", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseBasedComponent_section_4_Template_mat_select_closed_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r59.CountrySearchFilter.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseBasedComponent_section_4_Template_input_keydown_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CourseBasedComponent_section_4_ng_container_30_Template, 4, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Curricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-select", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseBasedComponent_section_4_Template_mat_select_closed_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r61.CurriculumSearchFilter.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseBasedComponent_section_4_Template_input_keydown_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CourseBasedComponent_section_4_ng_container_42_Template, 4, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseBasedComponent_section_4_Template_mat_select_closed_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r63.CourseSearchFilter.setValue(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseBasedComponent_section_4_Template_input_keydown_53_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, CourseBasedComponent_section_4_ng_container_54_Template, 4, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_Template_button_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65); return _r10.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "mat-datepicker", null, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "To");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75); return _r11.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-datepicker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_Template_button_click_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r67.openReportsFilterDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseBasedComponent_section_4_Template_button_click_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r68.export(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CourseBasedComponent_section_4_ng_container_86_Template, 7, 5, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.selectedEmployeeName.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.selectedEmployeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r0.selectedManager.value.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r0.selectedManager);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.ManagerSearchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 30, ctx_r0.FilteredManagerList));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r0.selectedCountry.value.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r0.selectedCountry);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.CountrySearchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 32, ctx_r0.FilteredCountryList));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r0.selectedCurriculum.value.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r0.selectedCurriculum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.CurriculumSearchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 34, ctx_r0.FilteredCurriculumList));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx_r0.selectedCourse.value.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx_r0.selectedCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.CourseSearchFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 36, ctx_r0.FilteredCourseList));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.fromDate.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r10)("formControl", ctx_r0.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r0.toDate.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11)("formControl", ctx_r0.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !(ctx_r0.DataIsLoading || ctx_r0.ProjectMembersLoading) && ctx_r0.DataToExport.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 38, ctx_r0.paginatedDataSource));
} }
function CourseBasedComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CourseBasedComponent {
    constructor(activatedRoute, dialog, accountService, excelService, dropdownService, curriculumService, courseService, userProfileService, userCourseService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.accountService = accountService;
        this.excelService = excelService;
        this.dropdownService = dropdownService;
        this.curriculumService = curriculumService;
        this.courseService = courseService;
        this.userProfileService = userProfileService;
        this.userCourseService = userCourseService;
        this.CurrentAccount = null;
        this.PageSize = 25;
        this.PageIsLoading = true;
        this.DataIsLoading = false;
        this.ProjectMembersLoading = false;
        this.ReportGenerated = false;
        this.DataToExport = [];
        this.OrgLvl1Map = {};
        this.OrgLvl2Map = {};
        this.CountryMap = {};
        this.UserProfileMap = {};
        this.CurriculumMap = {};
        this.CourseMap = {};
        // User Profile
        this.selectedEmployeeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.selectedManager = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.ManagerList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.ManagerSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredManagerList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ManagerList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([])),
            this.ManagerSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(e.Title, KeyWord) || Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(e.EMail, KeyWord));
        }));
        this.selectedCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CountryList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.CountrySearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCountryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.CountryList,
            this.CountrySearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(e.Title, KeyWord));
        }));
        this.selectedCurriculum = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.CurriculumSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.CurriculumList,
            this.CurriculumSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(e.Title, KeyWord));
        }));
        this.selectedCourse = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.CourseList,
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
            this.selectedCurriculum.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.selectedCourse.setValue([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([]))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([List, KeyWord, selectedCurriculumIds]) => {
            const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
            let courseIds = [];
            if (hasSelectedCurriculumIds) {
                for (const curriculumId of selectedCurriculumIds) {
                    if (!this.CurriculumMap[curriculumId]) {
                        continue;
                    }
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
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(e.Title, KeyWord) && (!hasSelectedCurriculumIds || courseIdSet.has(e.Id)));
        }));
        this.fromDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.toDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.dataSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.selectedEmployeeName.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
            this.fromDate.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
                if (!data) {
                    return null;
                }
                return new Date(data);
            })),
            this.toDate.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
                if (!data) {
                    return null;
                }
                const ToDate = new Date(data);
                ToDate.setDate(ToDate.getDate() + 1);
                return ToDate;
            })),
            // #region Get Course Data
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    this.selectedCountry.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([])),
                    this.selectedManager.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([])),
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([selectedCountry, selectedManager]) => {
                    const hasSelectedCountry = selectedCountry.length > 0;
                    const hasSelectedManager = selectedManager.length > 0;
                    let userIds = [];
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
                })),
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    this.selectedCurriculum.valueChanges,
                    this.selectedCourse.valueChanges,
                ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.DataIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([curriculumId, courseId]) => {
                    if (this.ReportGenerated) {
                        const hasCourse = courseId.length > 0;
                        const hasCurriculum = curriculumId.length > 0;
                        let courseIdSet = new Set();
                        if (hasCourse) {
                            courseIdSet = new Set(courseId);
                        }
                        else if (hasCurriculum) {
                            const returnCourseId = curriculumId.map(e => this.CurriculumMap[e])
                                .reduce((returnVal, currentVal) => [
                                ...returnVal,
                                ...Array.from(currentVal.CoursesId),
                            ], []);
                            courseIdSet = new Set(returnCourseId);
                        }
                        if (hasCourse || hasCurriculum) {
                            const courseIdQuery = Array.from(courseIdSet).sort((a, b) => {
                                const titleA = this.CourseMap[a].Title.trim();
                                const titleB = this.CourseMap[b].Title.trim();
                                if (titleA > titleB) {
                                    return 1;
                                }
                                if (titleA < titleB) {
                                    return -1;
                                }
                                return 0;
                            });
                            if (courseIdQuery.length > 0) {
                                return this.userCourseService.getReport(courseIdQuery);
                            }
                            return Promise.resolve([]);
                        }
                        if (!this.accountService.account.IsSiteOwner) {
                            const CourseIds = this.CourseList.value.map(e => e.Id);
                            if (CourseIds.length > 0) {
                                return this.userCourseService.getReport(CourseIds);
                            }
                        }
                        else {
                            return this.userCourseService.getReport();
                        }
                    }
                    return Promise.resolve([]);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.DataIsLoading = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([])),
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([userProfileResult, reportData]) => {
                const hasSelections = userProfileResult.hasSelection;
                if (hasSelections) {
                    let userIds = [];
                    if (userProfileResult.hasSelection) {
                        userIds = userProfileResult.userIds;
                    }
                    const userIdSet = new Set(userIds);
                    return reportData.filter(e => userIdSet.has(e.User.Id));
                }
                return reportData;
            }))
            // #endregion Get Course Data
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.pageIndex.next(0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([employeeQuery, fromDate, toDate, reportData]) => {
            const hasQuery = (employeeQuery || fromDate || toDate);
            if (!hasQuery) {
                return reportData;
            }
            return reportData.filter((item) => {
                const searchQuery = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(item.User.Title, employeeQuery) || Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["searchString"])(item.User.EMail, employeeQuery);
                const hasCompleted = (fromDate || toDate) ? item.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed : true;
                const hasFromDate = !fromDate || (fromDate.getTime() < item.Modified.getTime());
                const hasToDate = !toDate || (toDate.getTime() > item.Modified.getTime());
                return searchQuery && hasCompleted && hasFromDate && hasToDate;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((reportData) => reportData.map((item) => {
            const { CountryId, Manager, OrgLvl2Id } = this.UserProfileMap[item.User.Id] ? this.UserProfileMap[item.User.Id] : new src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_6__["UserProfile"]({});
            const country = this.CountryMap[CountryId];
            const orgLvl2 = this.OrgLvl2Map[OrgLvl2Id];
            const orgLvl1 = orgLvl2 ? this.OrgLvl1Map[orgLvl2.OrgLvl1Id] : null;
            return {
                Employee: item.User,
                Manager,
                Country: (country === null || country === void 0 ? void 0 : country.Title) || '',
                OrgLvl1: (orgLvl1 === null || orgLvl1 === void 0 ? void 0 : orgLvl1.Title) || '',
                OrgLvl2: (orgLvl2 === null || orgLvl2 === void 0 ? void 0 : orgLvl2.Title) || '',
                Course: this.CourseMap[item.CourseId],
                Status: item.Status,
                CompletionDate: item.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed ? item.DateModified : '',
                CompletionDateExport: item.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed ? item.DateModifiedExport : '',
            };
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => this.DataToExport = data));
        this.pageIndex = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.paginatedDataSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.pageIndex.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(0)),
            this.dataSource,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([pageIndex, dataSource]) => {
            const { PageSize } = this;
            const pagedData = dataSource.slice(pageIndex * PageSize, (pageIndex + 1) * PageSize);
            return {
                hasData: dataSource.length > 0,
                hasNext: (pageIndex + 1) * PageSize < dataSource.length,
                hasPrevious: (pageIndex > 0),
                currentIndex: pageIndex,
                data: pagedData,
            };
        }));
    }
    ngAfterViewInit() {
        this.LoadPage();
    }
    LoadPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            yield this.LoadFilters();
            this.PageIsLoading = false;
            yield this.openReportsFilterDialog();
        });
    }
    LoadFilters() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [orgLvl1List, orgLvl2List, countryList, curriculumList, courseList, userProfileList,] = yield Promise.all([
                this.dropdownService.getOrgLvl1(),
                this.dropdownService.getOrgLvl2(),
                this.dropdownService.getCountry(),
                this.curriculumService.getAll(),
                this.courseService.getAll(),
                this.userProfileService.getAll(),
            ]);
            const FilteredCurriculumList = curriculumList.filter(e => e.IsOwner);
            const FilteredCourseList = courseList.filter(e => e.IsOwner);
            this.OrgLvl1Map = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(orgLvl1List);
            this.OrgLvl2Map = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(orgLvl2List);
            this.CountryMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(countryList);
            this.CurriculumMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(curriculumList);
            this.CourseMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(courseList);
            let userProfileMap = {};
            let managerList = [];
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
                userProfileMap = Object.assign(Object.assign({}, userProfileMap), { [userProfile.User.Id]: userProfile });
            }
            this.UserProfileMap = userProfileMap;
            this.ManagerList.next(managerList);
            this.CountryList.next(countryList);
            this.CurriculumList.next(FilteredCurriculumList);
            this.CourseList.next(FilteredCourseList);
        });
    }
    openReportsFilterDialog() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = this.dialog.open(_course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CourseReportFilterDialogComponent"], {
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
            const data = yield dialog.afterClosed().toPromise();
            if (data) {
                const { selectedEmployeeName, selectedCourse, selectedManager, selectedCountry, selectedCurriculum, fromDate, toDate, } = data;
                this.ReportGenerated = true;
                this.selectedEmployeeName.setValue(selectedEmployeeName);
                this.selectedManager.setValue(selectedManager);
                this.selectedCountry.setValue(selectedCountry);
                this.selectedCurriculum.setValue(selectedCurriculum);
                this.selectedCourse.setValue(selectedCourse);
                this.fromDate.setValue(fromDate);
                this.toDate.setValue(toDate);
            }
        });
    }
    export() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ExportData = this.DataToExport.map((item) => {
                const { Employee, Manager, Country: CountryName, OrgLvl1: OrgLvl1Name, OrgLvl2: OrgLvl2Name, Course: CourseObj, Status, CompletionDateExport, } = item;
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
            });
            this.excelService.exportAsExcelFile(ExportData, 'COURSE_BASED_REPORT');
        });
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
CourseBasedComponent.ɵfac = function CourseBasedComponent_Factory(t) { return new (t || CourseBasedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_14__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_16__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_17__["UserCourseService"])); };
CourseBasedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseBasedComponent, selectors: [["app-course-based"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], [1, "card", "report-filters"], [1, "report-filter-area"], [1, "onecap-input-form", 3, "hidden"], [1, "input-container"], ["type", "text", "placeholder", "Search by name or email", 3, "formControl"], [1, "select-container"], ["placeholder", "All People Managers", "multiple", "", 3, "panelClass", "formControl", "closed"], ["managerSelect", ""], [1, "search-filter", "flex", "flex-row", "align-items-center"], [1, "material-icons"], ["type", "text", "placeholder", "Enter key words", 3, "formControl", "keydown"], [4, "ngIf"], ["placeholder", "All Countries", "multiple", "", 3, "panelClass", "formControl", "closed"], ["countrySelect", ""], ["placeholder", "All Curricula", "multiple", "", 3, "panelClass", "formControl", "closed"], ["curriculumSelect", ""], ["placeholder", "All Courses", "multiple", "", 3, "panelClass", "formControl", "closed"], ["courseSelect", ""], [1, "datepicker-container"], ["placeholder", "mm/dd/yyyy", "readonly", "", 3, "matDatepicker", "formControl"], [1, "onecap-icon-btn", 3, "click"], ["FromDatePicker", ""], ["ToDatePicker", ""], [1, "onecap-btn", "primary", "filter", 3, "click"], [1, "button-wrapper"], [1, "export-area", "hide-mobile"], [1, "onecap-outline-btn", "accent-2", 3, "disabled", "click"], [1, "icon", "icon-dxc", "export", "accent-2"], ["class", "no-results-message", 4, "ngIf"], ["class", "clear-filter", 3, "click", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "no-results-message"], [1, "clear-filter", 3, "click"], [3, "value"], [1, "card", "table-container"], ["class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["class", "pagination-section", 4, "ngIf"], [1, "onecap-table"], [1, "table-header"], [1, "section", "details"], [1, "col-name"], [1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "card-message"], [1, "status-loading"], [1, "pagination-section"], [1, "onecap-icon-btn", 3, "disabled", "click"], [1, "number-of-items"], [1, "page-loader"]], template: function CourseBasedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Course Completion Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CourseBasedComponent_section_4_Template, 88, 40, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CourseBasedComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"]], styles: [".page-body[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.pagination-section[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n  justify-self: flex-end;\n}\n\n.card.report-filters[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  gap: 10px;\n  align-items: flex-start;\n}\n\n.card.report-filters[_ngcontent-%COMP%]   .report-filter-area[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: flex-start;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n}\n\n.card.report-filters[_ngcontent-%COMP%]   .report-filter-area[_ngcontent-%COMP%]   .onecap-btn.filter[_ngcontent-%COMP%] {\n  margin-top: 23px;\n  width: 70px;\n}\n\n.card.report-filters[_ngcontent-%COMP%]   .export-area[_ngcontent-%COMP%] {\n  gap: 5px;\n  margin-top: 23px;\n}\n\n.onecap-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 5fr 3fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9jb3Vyc2UtYmFzZWQvY291cnNlLWJhc2VkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsUUFBQTtBQUVKOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FBR047O0FBRUE7RUFDRSxRQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFJRTtFQUNFLDhCQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2NvdXJzZS1iYXNlZC9jb3Vyc2UtYmFzZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmNhcmQucmVwb3J0LWZpbHRlcnMge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuICBnYXA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgLnJlcG9ydC1maWx0ZXItYXJlYSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgLm9uZWNhcC1idG4uZmlsdGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjNweDtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC5yZXBvcnQtZmlsdGVycyAuZXhwb3J0LWFyZWEge1xyXG4gIGdhcDogNXB4O1xyXG4gIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuXHJcblxyXG4ub25lY2FwLXRhYmxlIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDNmcjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseBasedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-course-based',
                templateUrl: './course-based.component.html',
                styleUrls: ['./course-based.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_11__["AccountService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_12__["ExcelService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_14__["CurriculumService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__["CourseService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_16__["UserProfileService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_17__["UserCourseService"] }]; }, null); })();


/***/ }),

/***/ "4LxW":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/reports/course-based/course-report-filter-dialog/course-report-filter-dialog.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: CourseReportFilterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseReportFilterDialogComponent", function() { return CourseReportFilterDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function CourseReportFilterDialogComponent_ng_container_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No people manager available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_26_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_ng_container_26_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); ctx_r14.selectedManager.setValue([]); return _r0.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All People Managers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_26_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r16.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r16.Title, " ");
} }
function CourseReportFilterDialogComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseReportFilterDialogComponent_ng_container_26_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseReportFilterDialogComponent_ng_container_26_button_2_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseReportFilterDialogComponent_ng_container_26_mat_option_3_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r10.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r10.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r10);
} }
function CourseReportFilterDialogComponent_ng_container_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No country available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_38_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_ng_container_38_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](33); ctx_r21.selectedCountry.setValue([]); return _r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Countries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_38_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r23.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r23.Title, " ");
} }
function CourseReportFilterDialogComponent_ng_container_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseReportFilterDialogComponent_ng_container_38_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseReportFilterDialogComponent_ng_container_38_button_2_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseReportFilterDialogComponent_ng_container_38_mat_option_3_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r17 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r17.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r17.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r17);
} }
function CourseReportFilterDialogComponent_ng_container_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_52_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_ng_container_52_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47); ctx_r28.selectedCurriculum.setValue([]); return _r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Curricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_52_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r30.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r30.Title, " ");
} }
function CourseReportFilterDialogComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseReportFilterDialogComponent_ng_container_52_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseReportFilterDialogComponent_ng_container_52_button_2_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseReportFilterDialogComponent_ng_container_52_mat_option_3_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r24 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r24.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r24.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r24);
} }
function CourseReportFilterDialogComponent_ng_container_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_64_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_ng_container_64_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](59); ctx_r35.selectedCourse.setValue([]); return _r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseReportFilterDialogComponent_ng_container_64_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r37.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r37.Title, " ");
} }
function CourseReportFilterDialogComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseReportFilterDialogComponent_ng_container_64_div_1_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseReportFilterDialogComponent_ng_container_64_button_2_Template, 2, 0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CourseReportFilterDialogComponent_ng_container_64_mat_option_3_Template, 2, 2, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r31 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r31.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r31.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r31);
} }
class CourseReportFilterDialogComponent {
    constructor(accountService, data, dialogRef) {
        this.accountService = accountService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.CurriculumMap = {};
        this.CourseMap = {};
        // User Profile
        this.selectedEmployeeName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.selectedManager = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.ManagerList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.ManagerSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredManagerList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.ManagerList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
            this.ManagerSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, KeyWord) || Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.EMail, KeyWord));
        }));
        this.selectedCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CountryList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.CountrySearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCountryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.CountryList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
            this.CountrySearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, KeyWord));
        }));
        this.selectedCurriculum = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.CurriculumSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.CurriculumList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
            this.CurriculumSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, KeyWord));
        }));
        this.selectedCourse = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([]);
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
                this.CourseList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
                this.selectedCurriculum.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.selectedCourse.setValue([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([]))
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([List, selectedCurriculumIds]) => {
                const hasSelectedCurriculumIds = selectedCurriculumIds.length > 0;
                let courseIds = [];
                if (!hasSelectedCurriculumIds) {
                    return List;
                }
                for (const curriculumId of selectedCurriculumIds) {
                    if (!this.CurriculumMap[curriculumId]) {
                        continue;
                    }
                    const curriculumObj = this.CurriculumMap[curriculumId];
                    courseIds = [
                        ...courseIds,
                        ...Array.from(curriculumObj.CoursesId),
                    ];
                }
                const courseIdSet = new Set(courseIds);
                return List.filter(e => courseIdSet.has(e.Id));
            })),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([KeyWord, List]) => {
            if (!KeyWord) {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, KeyWord));
        }));
        this.fromDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.toDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngAfterViewInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'report-filters']);
        this.InitialLoad();
    }
    InitialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.LoadValues();
        });
    }
    LoadValues() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield setTimeout(() => { }, 500);
            const { selectedEmployeeName, selectedCourse, selectedManager, selectedCountry, selectedCurriculum, fromDate, toDate, ManagerList, CountryList, CourseList, CurriculumList, CurriculumMap, } = this.data;
            this.CurriculumMap = CurriculumMap;
            this.ManagerList.next(ManagerList);
            this.CountryList.next(CountryList);
            this.CourseList.next(CourseList);
            this.CurriculumList.next(CurriculumList);
            this.selectedEmployeeName.setValue(selectedEmployeeName);
            this.selectedCurriculum.setValue(selectedCurriculum);
            this.selectedCourse.setValue(selectedCourse);
            this.selectedManager.setValue(selectedManager);
            this.selectedCountry.setValue(selectedCountry);
            this.fromDate.setValue(fromDate);
            this.toDate.setValue(toDate);
        });
    }
    generate() {
        const { selectedEmployeeName, selectedCourse, selectedManager, selectedCountry, selectedCurriculum, fromDate, toDate, } = this;
        const returnData = {
            selectedEmployeeName: selectedEmployeeName.value,
            selectedCourse: selectedCourse.value,
            selectedManager: selectedManager.value,
            selectedCountry: selectedCountry.value,
            selectedCurriculum: selectedCurriculum.value,
            fromDate: fromDate.value,
            toDate: toDate.value,
        };
        this.dialogRef.close(returnData);
    }
}
CourseReportFilterDialogComponent.ɵfac = function CourseReportFilterDialogComponent_Factory(t) { return new (t || CourseReportFilterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"])); };
CourseReportFilterDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseReportFilterDialogComponent, selectors: [["ng-component"]], decls: 95, vars: 29, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title", "onecap-lbl", "primary"], [1, "sub-title"], [1, "dialog-body"], [1, "filters"], [1, "column", 2, "order", "1"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search by name or email", 3, "formControl"], [1, "select-container"], ["placeholder", "All People Managers", "multiple", "", 3, "panelClass", "formControl", "closed"], ["managerSelect", ""], [1, "search-filter"], ["type", "text", "placeholder", "Enter key words", 3, "formControl", "keydown"], [4, "ngIf"], ["placeholder", "All Countries", "multiple", "", 3, "panelClass", "formControl", "closed"], ["countrySelect", ""], [1, "vl", 2, "order", "0"], [1, "column", 2, "order", "-1"], ["placeholder", "All Curricula", "multiple", "", 3, "panelClass", "formControl", "closed"], ["curriculumSelect", ""], ["placeholder", "All Courses", "multiple", "", 3, "panelClass", "formControl", "closed"], ["courseSelect", ""], [1, "date-filter"], [1, "datepicker-container"], ["placeholder", "mm/dd/yyyy", "readonly", "", 3, "matDatepicker", "formControl"], [1, "onecap-icon-btn"], [1, "material-icons", 3, "click"], ["FromDatePicker", ""], ["ToDatePicker", ""], [1, "notes"], [1, "header"], [1, "body"], [1, "dialog-action"], [1, "onecap-btn", "primary", 3, "click"], ["class", "no-results-message", 4, "ngIf"], ["class", "clear-filter", 3, "click", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "no-results-message"], [1, "clear-filter", 3, "click"], [3, "value"]], template: function CourseReportFilterDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_Template_button_click_0_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Course Completion Report Filters ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Please select filters to generate report. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseReportFilterDialogComponent_Template_mat_select_closed_20_listener() { return ctx.ManagerSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseReportFilterDialogComponent_Template_input_keydown_25_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CourseReportFilterDialogComponent_ng_container_26_Template, 4, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-select", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseReportFilterDialogComponent_Template_mat_select_closed_32_listener() { return ctx.CountrySearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseReportFilterDialogComponent_Template_input_keydown_37_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CourseReportFilterDialogComponent_ng_container_38_Template, 4, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Curricula");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mat-select", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseReportFilterDialogComponent_Template_mat_select_closed_46_listener() { return ctx.CurriculumSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseReportFilterDialogComponent_Template_input_keydown_51_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CourseReportFilterDialogComponent_ng_container_52_Template, 4, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function CourseReportFilterDialogComponent_Template_mat_select_closed_58_listener() { return ctx.CourseSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function CourseReportFilterDialogComponent_Template_input_keydown_63_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CourseReportFilterDialogComponent_ng_container_64_Template, 4, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_Template_span_click_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76); return _r8.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "mat-datepicker", null, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_Template_span_click_83_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](86); return _r9.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "mat-datepicker", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Note: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Generating a report containing ALL courses, people managers, and countries will take some time. Please wait for the tool to load all the data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "section", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseReportFilterDialogComponent_Template_button_click_93_listener() { return ctx.generate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " Generate Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](76);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectedEmployeeName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx.selectedManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ManagerSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 21, ctx.FilteredManagerList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx.selectedCountry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.CountrySearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 23, ctx.FilteredCountryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx.selectedCurriculum);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.CurriculumSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 25, ctx.FilteredCurriculumList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecap-option-container")("formControl", ctx.selectedCourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](65, 27, ctx.FilteredCourseList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8)("formControl", ctx.fromDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r9)("formControl", ctx.toDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-template-rows: max-content 1fr;\n  gap: 20px;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dialog-header[_ngcontent-%COMP%]   .dialog-title[_ngcontent-%COMP%] {\n  font-size: var(--font-lg);\n}\n\n.dialog-header[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.vl[_ngcontent-%COMP%] {\n  width: 0px;\n  border-left: 1px solid;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-template-columns: 1fr max-content 1fr;\n}\n\n.filters[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 10px;\n}\n\n.date-filter[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 20px;\n}\n\n.notes[_ngcontent-%COMP%] {\n  background-color: rgba(217, 217, 217, 0.25);\n  padding: 8px 15px;\n  border-radius: 8px;\n}\n\n.notes[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%] {\n  color: var(--onecaplite-black);\n  font-size: var(--font-xs);\n  line-height: var(--linespace-xs);\n  letter-spacing: var(--no-char-spacing);\n  font-weight: bold;\n}\n\n.notes[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: var(--onecaplite-black);\n  font-size: var(--font-sm);\n  line-height: var(--linespace-sm);\n  letter-spacing: var(--no-char-spacing);\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9jb3Vyc2UtYmFzZWQvY291cnNlLXJlcG9ydC1maWx0ZXItZGlhbG9nL2NvdXJzZS1yZXBvcnQtZmlsdGVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFBRTtFQUNFLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtBQUVKOztBQUVBO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FBQ0Y7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FBRUo7O0FBR0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBQURKOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2NvdXJzZS1iYXNlZC9jb3Vyc2UtcmVwb3J0LWZpbHRlci1kaWFsb2cvY291cnNlLXJlcG9ydC1maWx0ZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmRpYWxvZy1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAuZGlhbG9nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sZyk7XHJcbiAgfVxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbn1cclxuXHJcbi52bCB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uZGlhbG9nLWJvZHkge1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IDFmcjtcclxuICAuY29sdW1uIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmRhdGUtZmlsdGVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubm90ZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZDlkOWQ5LCAkYWxwaGE6IDAuMjUpO1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDhweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDhweDtcclxuXHJcbiAgJiA+IC5oZWFkZXIge1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1ibGFjayk7XHJcbiAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LXhzKTtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS14cyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICB9XHJcblxyXG4gICYgPiAuYm9keSB7XHJcbiAgICBtYXJnaW4tdG9wICAgICAgOiA1cHg7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWJsYWNrKTtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgbGluZS1oZWlnaHQgICAgIDogdmFyKC0tbGluZXNwYWNlLXNtKTtcclxuICAgIGxldHRlci1zcGFjaW5nICA6IHZhcigtLW5vLWNoYXItc3BhY2luZyk7XHJcbiAgfVxyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseReportFilterDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './course-report-filter-dialog.component.html',
                styleUrls: ['./course-report-filter-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "4r2Q":
/*!***************************************************************************!*\
  !*** ./src/app/pages/reports/course-based/course-based-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CourseBasedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBasedRoutingModule", function() { return CourseBasedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _course_based_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-based.component */ "/3/I");





const routes = [{ path: '', component: _course_based_component__WEBPACK_IMPORTED_MODULE_2__["CourseBasedComponent"] }];
class CourseBasedRoutingModule {
}
CourseBasedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseBasedRoutingModule });
CourseBasedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseBasedRoutingModule_Factory(t) { return new (t || CourseBasedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseBasedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseBasedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "q1/4":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reports/course-based/course-based.module.ts ***!
  \*******************************************************************/
/*! exports provided: CourseBasedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseBasedModule", function() { return CourseBasedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _course_based_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-based-routing.module */ "4r2Q");
/* harmony import */ var _course_based_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-based.component */ "/3/I");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-report-filter-dialog/course-report-filter-dialog.component */ "4LxW");







class CourseBasedModule {
}
CourseBasedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CourseBasedModule });
CourseBasedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CourseBasedModule_Factory(t) { return new (t || CourseBasedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _course_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseBasedRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseBasedModule, { declarations: [_course_based_component__WEBPACK_IMPORTED_MODULE_3__["CourseBasedComponent"], _course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CourseReportFilterDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _course_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseBasedRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseBasedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_course_based_component__WEBPACK_IMPORTED_MODULE_3__["CourseBasedComponent"], _course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CourseReportFilterDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _course_based_routing_module__WEBPACK_IMPORTED_MODULE_2__["CourseBasedRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ],
                entryComponents: [_course_report_filter_dialog_course_report_filter_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CourseReportFilterDialogComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-reports-course-based-course-based-module.js.map
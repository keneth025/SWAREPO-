(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-course-my-course-module"],{

/***/ "/LtP":
/*!********************************************************!*\
  !*** ./src/app/pages/my-course/my-course.component.ts ***!
  \********************************************************/
/*! exports provided: MyCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCourseComponent", function() { return MyCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/date.util */ "tnDu");
/* harmony import */ var src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dialog/course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");





















function MyCourseComponent_section_4_div_13_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curriculumName_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", curriculumName_r9, " ");
} }
const _c0 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function MyCourseComponent_section_4_div_13_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_div_13_div_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.moreInfoCourse(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MyCourseComponent_section_4_div_13_div_19_div_10_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_div_13_div_19_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.launchCourse(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-menu", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_div_13_div_19_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.moreInfoCourse(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "More information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_div_13_div_19_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.copyToClipBoard(item_r6.Title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_div_13_div_19_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r6 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r15.reportProblem(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (item_r6 == null ? null : item_r6.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r6.CurriculumNameArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c0, item_r6.Status === ctx_r4.CourseStatus.Completed, item_r6.Status === ctx_r4.CourseStatus.Pending, item_r6.Status === ctx_r4.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.Status === ctx_r4.CourseStatus.Completed ? item_r6.CompletionDate : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.Duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r8);
} }
function MyCourseComponent_section_4_div_13_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No courses assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyCourseComponent_section_4_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Course Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Course Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MyCourseComponent_section_4_div_13_div_19_Template, 34, 11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MyCourseComponent_section_4_div_13_div_20_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ItemList_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ItemList_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ItemList_r3.length === 0);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function MyCourseComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.StatusFilterForm.setValue(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.StatusFilterForm.setValue(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.StatusFilterForm.setValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCourseComponent_section_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.exportReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MyCourseComponent_section_4_div_13_Template, 21, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r0.StatusFilterForm.value === -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.StatusFilterForm.value === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r0.StatusFilterForm.value === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.PageIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 5, ctx_r0.FilteredList));
} }
function MyCourseComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MyCourseComponent {
    constructor(dialogService, courseService, userCourseService, curriculumService, courseDialogService, excelService, snackBar) {
        this.dialogService = dialogService;
        this.courseService = courseService;
        this.userCourseService = userCourseService;
        this.curriculumService = curriculumService;
        this.courseDialogService = courseDialogService;
        this.excelService = excelService;
        this.snackBar = snackBar;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"];
        this.PageIsLoading = true;
        this.StatusFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](-1);
        this.List = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.FilteredList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.StatusFilterForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(-1)),
            this.List.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["sortItems"])(data)))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([StatusFilter, List]) => {
            switch (StatusFilter) {
                case -1:
                    return List;
                    break;
                case 1:
                    return List.filter(e => e.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed);
                    break;
                case 0:
                    return List.filter(e => e.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Pending);
                    break;
                default:
                    return List;
            }
        }));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            const recordList = yield this.userCourseService.getAll();
            const courseIdArr = recordList.map(e => e.CourseId);
            const [courseList, curriculumList] = yield Promise.all([
                this.courseService.getItemsByIdArr(courseIdArr),
                this.curriculumService.getItemsByCourseIdArr(courseIdArr),
            ]);
            const MappedCourseList = courseList.map(e => {
                e.Record = this.userCourseService.getRecord(e.Id);
                e.CurriculumNameArr = curriculumList
                    .filter(i => i.CoursesId.has(e.Id))
                    .map(i => i.Title);
                return e;
            });
            this.List.next(MappedCourseList);
            this.PageIsLoading = false;
        });
    }
    exportReport() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const courseData = [
                ['Course Title', 'Curriculum', 'Status', 'Completion Date', 'Course Duration'],
                ...this.List.value.map((e) => {
                    const { Title, CurriculumNames, Status, Duration, CompletionDate } = e;
                    return [
                        Title,
                        CurriculumNames,
                        Status,
                        Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed ? CompletionDate : '',
                        Duration,
                    ];
                })
            ];
            this.excelService.exportArrayAsExcelFile(courseData, `My_Course_List_${Object(src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_7__["getCurrentDateString"])()}`);
        });
    }
    // #region component functions
    moreInfoCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedItem = yield this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
            if (updatedItem) {
                const { Record } = updatedItem;
                if (Record) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackBar.open(message);
                }
            }
        });
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedItem = yield this.courseDialogService.launchCourse(item);
        });
    }
    copyToClipBoard(Title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["copyToClipBoard"])(Title, src_constant_app_constant__WEBPACK_IMPORTED_MODULE_9__["ContentType"].COURSES);
            this.snackBar.open('Link Copied!');
        });
    }
    reportProblem(item) {
        this.dialogService.open(src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ReportProblemDialogComponent"], {
            data: { item, itemType: 'Course' }
        });
    }
}
MyCourseComponent.ɵfac = function MyCourseComponent_Factory(t) { return new (t || MyCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_11__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_15__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"])); };
MyCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyCourseComponent, selectors: [["app-my-course"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "course-action"], [1, "onecap-group-btn"], [1, "btn", 3, "ngClass", "click"], [1, "onecap-outline-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], [1, "icon", "icon-dxc", "export", "accent-2"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "onecap-table", "course"], [1, "table-header"], [1, "section"], [1, "section", "details"], [1, "col-name"], [1, "col-name", "action"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "card-message", 4, "ngIf"], [1, "table-row"], [1, "onecap-icon-btn", 3, "click"], [1, "material-icons"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "onecap-btn", "primary", 3, "click"], [1, "status-badge", 3, "ngClass"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], ["courseMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "card-message"], [1, "page-loader"]], template: function MyCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " My Course List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyCourseComponent_section_4_Template, 15, 13, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MyCourseComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".onecap-table.course[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table.course[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 30px 1fr 1fr 30px;\n}\n\n#course-action[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktY291cnNlL215LWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHdDQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOENBQUE7RUFDQSw4QkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktY291cnNlL215LWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vbmVjYXAtdGFibGUuY291cnNlIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnIgMWZyIDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jY291cnNlLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-course',
                templateUrl: './my-course.component.html',
                styleUrls: ['./my-course.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_11__["CourseService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__["UserCourseService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"] }, { type: src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__["CourseDialogService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_15__["ExcelService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "mDBS":
/*!*************************************************************!*\
  !*** ./src/app/pages/my-course/my-course-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCourseRoutingModule", function() { return MyCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-course.component */ "/LtP");





const routes = [{ path: '', component: _my_course_component__WEBPACK_IMPORTED_MODULE_2__["MyCourseComponent"] }];
class MyCourseRoutingModule {
}
MyCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyCourseRoutingModule });
MyCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyCourseRoutingModule_Factory(t) { return new (t || MyCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCourseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vzDE":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-course/my-course.module.ts ***!
  \*****************************************************/
/*! exports provided: MyCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCourseModule", function() { return MyCourseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-course-routing.module */ "mDBS");
/* harmony import */ var _my_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-course.component */ "/LtP");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class MyCourseModule {
}
MyCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyCourseModule });
MyCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyCourseModule_Factory(t) { return new (t || MyCourseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _my_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyCourseRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCourseModule, { declarations: [_my_course_component__WEBPACK_IMPORTED_MODULE_3__["MyCourseComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _my_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyCourseRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCourseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_course_component__WEBPACK_IMPORTED_MODULE_3__["MyCourseComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _my_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyCourseRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-my-course-my-course-module.js.map
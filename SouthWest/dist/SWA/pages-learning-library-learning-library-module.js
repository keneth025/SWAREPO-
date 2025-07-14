(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-learning-library-learning-library-module"],{

/***/ "X9Kk":
/*!**********************************************************************!*\
  !*** ./src/app/pages/learning-library/learning-library.component.ts ***!
  \**********************************************************************/
/*! exports provided: LearningLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningLibraryComponent", function() { return LearningLibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component */ "UGwT");
/* harmony import */ var src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dialog/examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var src_app_shared_dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/learning-maps-dialog/learning-maps-dialog.component */ "BVpE");
/* harmony import */ var src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/dialog/course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");

































const _c0 = function (a0) { return { "hovered": a0 }; };
function LearningLibraryComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function LearningLibraryComponent_button_18_Template_button_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r7.ActiveSubCategoryList.next(item_r6.SubCategoryList); return ctx_r7.HoveredCategory = item_r6; })("click", function LearningLibraryComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r9.RoleCategoryForm.setValue(null); return ctx_r9.CategoryForm.setValue(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.HoveredCategory === item_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r6.Title, " ");
} }
function LearningLibraryComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const subItem_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r11.CategoryForm.setValue(null); ctx_r11.RoleCategoryForm.setValue(null); return ctx_r11.SubCategoryForm.setValue(subItem_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subItem_r10.Title, " ");
} }
function LearningLibraryComponent_button_28_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const item_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r14.CategoryForm.setValue(null); ctx_r14.SubCategoryForm.setValue(null); return ctx_r14.RoleCategoryForm.setValue(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13.Title, " ");
} }
function LearningLibraryComponent_ng_container_44_section_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_section_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r30.ContentTypeForm.setValue(ctx_r30.ContentType.ALL_TYPE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " navigate_before ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Go Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_section_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_section_1_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r32.CategoryForm.setValue(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r27.CategoryForm.value == null ? null : ctx_r27.CategoryForm.value.Title, " ");
} }
function LearningLibraryComponent_ng_container_44_section_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_section_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r34.SubCategoryForm.setValue(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r28.SubCategoryForm.value == null ? null : ctx_r28.SubCategoryForm.value.FullName, " ");
} }
function LearningLibraryComponent_ng_container_44_section_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_section_1_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r36.RoleCategoryForm.setValue(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r29.RoleCategoryForm.value == null ? null : ctx_r29.RoleCategoryForm.value.Title, " ");
} }
function LearningLibraryComponent_ng_container_44_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_section_1_button_1_Template, 5, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LearningLibraryComponent_ng_container_44_section_1_button_2_Template, 2, 1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LearningLibraryComponent_ng_container_44_section_1_button_3_Template, 2, 1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LearningLibraryComponent_ng_container_44_section_1_button_4_Template, 2, 1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contentTypeValue_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 !== ctx_r17.ContentType.ALL_TYPE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.CategoryForm.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.SubCategoryForm.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r17.RoleCategoryForm.value);
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_5_div_1_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const item_r45 = ctx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r47.moreInfoCurriculum(item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "More Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_5_div_1_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const item_r45 = ctx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r49.copyToClipBoard(item_r45.Title, ctx_r49.ContentType.CURRICULA); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_5_div_1_div_1_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const item_r45 = ctx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r50.moreInfoCurriculum(item_r45); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r45.LearningCategoryName, " ");
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_5_div_1_div_1_Template, 19, 3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PagedData_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", PagedData_r39.results);
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_5_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r52.ContentTypeForm.setValue(ctx_r52.ContentType.CURRICULA); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_5_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r54.CurriculumPageIdx.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_5_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LearningLibraryComponent_ng_container_44_ng_container_5_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LearningLibraryComponent_ng_container_44_ng_container_5_button_4_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LearningLibraryComponent_ng_container_44_ng_container_5_button_5_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const PagedData_r39 = ctx.ngIf;
    const contentTypeValue_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r18.CurriculumIsLoading && PagedData_r39.results.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r18.CurriculumIsLoading && PagedData_r39.results.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r18.ContentType.ALL_TYPE && (!ctx_r18.CurriculumIsLoading && PagedData_r39.results.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r18.ContentType.CURRICULA && (PagedData_r39.hasNext && !ctx_r18.NextPageLoading && !ctx_r18.CurriculumIsLoading));
} }
function LearningLibraryComponent_ng_container_44_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r65.moreInfoCourse(item_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "More information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r67.addToMyCourse(item_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r68.copyToClipBoard(item_r63.Title, ctx_r68.ContentType.COURSES); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r69.reportProblem(item_r63, "Course"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const item_r63 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r70.launchCourse(item_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r63 = ctx.$implicit;
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", item_r63.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r63.HasRecord ? "Added" : "Add to My Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r63.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r63.LearningCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Duration: ", item_r63.DurationString || "No duration", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](8, _c1, item_r63.Status === ctx_r62.CourseStatus.Completed, item_r63.Status === ctx_r62.CourseStatus.Pending, item_r63.Status === ctx_r62.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Status: ", item_r63.Status, " ");
} }
function LearningLibraryComponent_ng_container_44_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_11_div_1_div_1_Template, 26, 12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PagedData_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", PagedData_r57.results);
} }
function LearningLibraryComponent_ng_container_44_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_11_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r72.ContentTypeForm.setValue(ctx_r72.ContentType.COURSES); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_11_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_11_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r74.CoursePageIdx.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_11_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LearningLibraryComponent_ng_container_44_ng_container_11_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LearningLibraryComponent_ng_container_44_ng_container_11_button_4_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LearningLibraryComponent_ng_container_44_ng_container_11_button_5_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const PagedData_r57 = ctx.ngIf;
    const contentTypeValue_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r20.CourseIsLoading && PagedData_r57.results.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r20.CourseIsLoading && PagedData_r57.results.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r20.ContentType.ALL_TYPE && (!ctx_r20.CourseIsLoading && PagedData_r57.results.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r20.ContentType.COURSES && (PagedData_r57.hasNext && !ctx_r20.NextPageLoading && !ctx_r20.CourseIsLoading));
} }
function LearningLibraryComponent_ng_container_44_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2) { return { "completed": a0, "failed": a1, "not-started": a2 }; };
function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const item_r83 = ctx.$implicit; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r85.addToMyExam(item_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const item_r83 = ctx.$implicit; const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r87.copyToClipBoard(item_r83.Title, ctx_r87.ContentType.EXAMS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const item_r83 = ctx.$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r88.reportProblem(item_r83, "Exam"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r86); const item_r83 = ctx.$implicit; const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r89.launchExam(item_r83); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r83 = ctx.$implicit;
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", item_r83.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r83.HasRecord ? "Added" : "Add to My Exams");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r83.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r83.LearningCategoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c2, item_r83.Status === ctx_r82.ExamStatus.PASSED, item_r83.Status === ctx_r82.ExamStatus.FAILED, item_r83.Status === ctx_r82.ExamStatus.NOT_YET_TAKEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Status: ", item_r83.Status, " ");
} }
function LearningLibraryComponent_ng_container_44_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_17_div_1_div_1_Template, 23, 11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PagedData_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", PagedData_r77.results);
} }
function LearningLibraryComponent_ng_container_44_ng_container_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No exam available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_17_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r91.ContentTypeForm.setValue(ctx_r91.ContentType.EXAMS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_17_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r93.ExamPageIdx.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_17_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LearningLibraryComponent_ng_container_44_ng_container_17_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LearningLibraryComponent_ng_container_44_ng_container_17_button_4_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LearningLibraryComponent_ng_container_44_ng_container_17_button_5_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const PagedData_r77 = ctx.ngIf;
    const contentTypeValue_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r22.ExamIsLoading && PagedData_r77.results.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r22.ExamIsLoading && PagedData_r77.results.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r22.ContentType.ALL_TYPE && (!ctx_r22.ExamIsLoading && PagedData_r77.results.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r22.ContentType.EXAMS && (PagedData_r77.hasNext && !ctx_r22.NextPageLoading && !ctx_r22.ExamIsLoading));
} }
function LearningLibraryComponent_ng_container_44_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const item_r102 = ctx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r104.moreInfoRole(item_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "More Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const item_r102 = ctx.$implicit; const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r106.addCurrentRole(item_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const item_r102 = ctx.$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r107.copyToClipBoard(item_r102.Title, ctx_r107.ContentType.LEARNING_MAPS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105); const item_r102 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r108.moreInfoRole(item_r102); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r102 = ctx.$implicit;
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", item_r102.IsCurrentRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r102.IsCurrentRole ? "Added as Current Role" : "Add as Current Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r102.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r102.CategoryName, " ");
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_23_div_1_div_1_Template, 21, 5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const PagedData_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", PagedData_r96.results);
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No learning maps available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r110.ContentTypeForm.setValue(ctx_r110.ContentType.LEARNING_MAPS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See all ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LearningLibraryComponent_ng_container_44_ng_container_23_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r112.LearningMapsPageIdx.next(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LearningLibraryComponent_ng_container_44_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_ng_container_23_div_1_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LearningLibraryComponent_ng_container_44_ng_container_23_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LearningLibraryComponent_ng_container_44_ng_container_23_button_4_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LearningLibraryComponent_ng_container_44_ng_container_23_button_5_Template, 5, 0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const PagedData_r96 = ctx.ngIf;
    const contentTypeValue_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r24.LearningMapsIsLoading && PagedData_r96.results.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r24.LearningMapsIsLoading && PagedData_r96.results.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r24.ContentType.ALL_TYPE && (!ctx_r24.LearningMapsIsLoading && PagedData_r96.results.length > 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 === ctx_r24.ContentType.LEARNING_MAPS && (PagedData_r96.hasNext && !ctx_r24.NextPageLoading && !ctx_r24.CurriculumIsLoading));
} }
function LearningLibraryComponent_ng_container_44_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "dark-section": a0 }; };
function LearningLibraryComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LearningLibraryComponent_ng_container_44_section_1_Template, 5, 4, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Curricula ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LearningLibraryComponent_ng_container_44_ng_container_5_Template, 6, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LearningLibraryComponent_ng_container_44_div_7_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LearningLibraryComponent_ng_container_44_ng_container_11_Template, 6, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LearningLibraryComponent_ng_container_44_div_13_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LearningLibraryComponent_ng_container_44_ng_container_17_Template, 6, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LearningLibraryComponent_ng_container_44_div_19_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Learning Maps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LearningLibraryComponent_ng_container_44_ng_container_23_Template, 6, 4, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LearningLibraryComponent_ng_container_44_div_25_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const contentTypeValue_r16 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", contentTypeValue_r16 !== ctx_r4.ContentType.ALL_TYPE || ctx_r4.SubCategoryForm.value !== null || ctx_r4.CategoryForm.value !== null || ctx_r4.RoleCategoryForm.value !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE || contentTypeValue_r16 === ctx_r4.ContentType.CURRICULA));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 15, ctx_r4.CurriculumPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.CurriculumIsLoading || ctx_r4.NextPageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c3, contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE))("hidden", !(contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE || contentTypeValue_r16 === ctx_r4.ContentType.COURSES));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 17, ctx_r4.CoursePage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.CourseIsLoading || ctx_r4.NextPageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE || contentTypeValue_r16 === ctx_r4.ContentType.EXAMS));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 19, ctx_r4.ExamPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.ExamIsLoading || ctx_r4.NextPageLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c3, contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE))("hidden", !(contentTypeValue_r16 === ctx_r4.ContentType.ALL_TYPE || contentTypeValue_r16 === ctx_r4.ContentType.LEARNING_MAPS));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 21, ctx_r4.LearningMapsPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.LearningMapsIsLoading || ctx_r4.NextPageLoading);
} }
function LearningLibraryComponent_section_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LearningLibraryComponent {
    constructor(accountService, userRoleService, userCourseService, userExamService, roleService, curriculumService, courseService, examService, dropdownService, activatedRoute, dialogService, courseDialogService, snackBar) {
        this.accountService = accountService;
        this.userRoleService = userRoleService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.roleService = roleService;
        this.curriculumService = curriculumService;
        this.courseService = courseService;
        this.examService = examService;
        this.dropdownService = dropdownService;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.courseDialogService = courseDialogService;
        this.snackBar = snackBar;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_6__["ExamStatus"];
        this.ContentType = src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"];
        this.PageIsLoading = true;
        this.NextPageLoading = false;
        this.CourseCurriculumNameMap = {};
        this.LearningCategoryMap = {};
        this.LearningSubCategoryMap = {};
        this.LearningCategoryList = [];
        this.LearningSubCategoryList = [];
        this.HoveredCategory = null;
        this.ActiveSubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.RoleCategoryMap = {};
        this.RoleSubCategoryMap = {};
        this.RoleCategoryList = [];
        this.RoleCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.RoleSubCategoryObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.RoleCategoryForm.valueChanges
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([Category]) => {
            if (Category) {
                return Category.RoleSubCategoryList.map(e => e.Id);
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null));
        this.CategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.SubCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.SubCategoryObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.CategoryForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.SubCategoryForm.setValue(null))),
            this.SubCategoryForm.valueChanges
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([Category, SubCategory]) => {
            if (SubCategory) {
                return [SubCategory.Id];
            }
            if (Category) {
                return Category.SubCategoryList.map(e => e.Id);
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null));
        this.SelectionSubCategoryObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.RoleSubCategoryObs,
            this.SubCategoryObs,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CurriculumIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CourseIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.ExamIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.LearningMapsIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([RoleSubCategoryIds, SubCategoryIds]) => {
            if (RoleSubCategoryIds && !SubCategoryIds) {
                SubCategoryIds = [-1];
            }
            if (!RoleSubCategoryIds && SubCategoryIds) {
                RoleSubCategoryIds = [-1];
            }
            return {
                RoleSubCategoryIds,
                SubCategoryIds
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(({ RoleSubCategoryIds: null, SubCategoryIds: null })));
        this.SearchQueryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.SearchQueryObs = this.SearchQueryForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.SearchQueryForm.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.LearningMapsIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CurriculumIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CourseIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.ExamIsLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(250));
        this.ContentTypeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"].ALL_TYPE);
        this.ContentTypeObs = this.ContentTypeForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(this.ContentTypeForm.value));
        // #region Items Query
        // #region Learning Maps
        this.LearningMapsIsLoading = true;
        this.LearningMapsQuery = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.SearchQueryObs,
            this.SelectionSubCategoryObs,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([strQuery, SelectionSubCategoryIds]) => {
            let query = {};
            if (strQuery) {
                query = Object.assign(Object.assign({}, query), { ['Title']: strQuery });
            }
            const { RoleSubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
            if (SubCategoryId) {
                query = Object.assign(Object.assign({}, query), { ['RoleSubCategoryId']: SubCategoryId });
            }
            return this.roleService.getPagedData(query);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            const { results } = res;
            res.results = this.mapLearningMapsToRoleCategory(results);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.LearningMapsPageIdx.next(0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.LearningMapsIsLoading = false));
        this.LearningMapsPageIdx = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.LearningMapsPage = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ContentTypeObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.LearningMapsPageIdx.next(0))),
            this.LearningMapsPageIdx,
            this.LearningMapsQuery,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeScan"])((acc, data) => {
            const [ContentTypeValue, idx, initialData] = data;
            const query = acc;
            if (idx === 0 || !query.hasNext) {
                const returnData = Object.assign(Object.create(Object.getPrototypeOf(initialData)), initialData);
                const { results } = returnData;
                if (ContentTypeValue === src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"].ALL_TYPE) {
                    returnData.results = results.slice(0, 4);
                }
                return Promise.resolve(returnData);
            }
            this.NextPageLoading = true;
            return this.roleService.getNextPage(query).then((pagedData) => {
                const { results } = pagedData;
                pagedData.results = [
                    ...query.results,
                    ...this.mapLearningMapsToRoleCategory(results),
                ];
                this.NextPageLoading = false;
                return pagedData;
            });
        }, null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
        // #endregion Learning Maps
        // #region Curriculum
        this.CurriculumIsLoading = true;
        this.CurriculumQuery = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.SearchQueryObs,
            this.SelectionSubCategoryObs,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([strQuery, SelectionSubCategoryIds]) => {
            let query = {};
            if (strQuery) {
                query = Object.assign(Object.assign({}, query), { ['Title']: strQuery });
            }
            const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
            if (SubCategoryId) {
                query = Object.assign(Object.assign({}, query), { ['LearningSubCategoryId']: SubCategoryId });
            }
            return this.curriculumService.getPagedData(query);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            const { results } = res;
            res.results = this.mapCurriculumToSubCategory(results);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CurriculumPageIdx.next(0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CurriculumIsLoading = false));
        this.CurriculumPageIdx = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.CurriculumPage = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ContentTypeObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CurriculumPageIdx.next(0))),
            this.CurriculumPageIdx,
            this.CurriculumQuery,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeScan"])((acc, data) => {
            const [ContentTypeValue, idx, initialData] = data;
            const query = acc;
            if (idx === 0 || !query.hasNext) {
                const returnData = Object.assign(Object.create(Object.getPrototypeOf(initialData)), initialData);
                const { results } = returnData;
                if (ContentTypeValue === src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"].ALL_TYPE) {
                    returnData.results = results.slice(0, 4);
                }
                return Promise.resolve(returnData);
            }
            this.NextPageLoading = true;
            return this.curriculumService.getNextPage(query).then((pagedData) => {
                const { results } = pagedData;
                pagedData.results = [
                    ...query.results,
                    ...this.mapCurriculumToSubCategory(results),
                ];
                this.NextPageLoading = false;
                return pagedData;
            });
        }, null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
        // #endregion Curriculum
        // #region Course
        this.CourseIsLoading = true;
        this.CourseQuery = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.SearchQueryObs,
            this.SelectionSubCategoryObs,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([strQuery, SelectionSubCategoryIds]) => {
            let query = {};
            if (strQuery) {
                query = Object.assign(Object.assign({}, query), { ['Title|Tags']: strQuery });
            }
            const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
            if (SubCategoryId) {
                query = Object.assign(Object.assign({}, query), { ['LearningSubCategoryId']: SubCategoryId });
            }
            return this.courseService.getPagedData(query);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            const { results } = res;
            res.results = this.mapCoursesToRecords(results);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CoursePageIdx.next(0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CourseIsLoading = false));
        this.CoursePageIdx = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.CoursePage = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ContentTypeObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.CoursePageIdx.next(0))),
            this.CoursePageIdx,
            this.CourseQuery,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeScan"])((acc, data) => {
            const [ContentTypeValue, idx, initialData] = data;
            const query = acc;
            if (idx === 0 || !query.hasNext) {
                const returnData = Object.assign(Object.create(Object.getPrototypeOf(initialData)), initialData);
                const { results } = returnData;
                if (ContentTypeValue === src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"].ALL_TYPE) {
                    returnData.results = results.slice(0, 4);
                }
                return Promise.resolve(returnData);
            }
            this.NextPageLoading = true;
            return this.courseService.getNextPage(query).then((pagedData) => {
                const { results } = pagedData;
                pagedData.results = [
                    ...query.results,
                    ...this.mapCoursesToRecords(results),
                ];
                this.NextPageLoading = false;
                return pagedData;
            });
        }, null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
        // #endregion Course
        // #region Exam
        this.ExamIsLoading = true;
        this.ExamQuery = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.SearchQueryObs,
            this.SelectionSubCategoryObs,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([strQuery, SelectionSubCategoryIds]) => {
            let query = {};
            if (strQuery) {
                query = Object.assign(Object.assign({}, query), { ['Title|Tags']: strQuery });
            }
            const { SubCategoryIds: SubCategoryId } = SelectionSubCategoryIds;
            if (SubCategoryId) {
                query = Object.assign(Object.assign({}, query), { ['LearningSubCategoryId']: SubCategoryId });
            }
            return this.examService.getPagedData(query);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((res) => {
            const { results } = res;
            res.results = this.mapExamsToRecords(results);
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.ExamPageIdx.next(0)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.ExamIsLoading = false));
        this.ExamPageIdx = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.ExamPage = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ContentTypeObs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.ExamPageIdx.next(0))),
            this.ExamPageIdx,
            this.ExamQuery,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeScan"])((acc, data) => {
            const [ContentTypeValue, idx, initialData] = data;
            const query = acc;
            if (idx === 0 || !query.hasNext) {
                const returnData = Object.assign(Object.create(Object.getPrototypeOf(initialData)), initialData);
                const { results } = returnData;
                if (ContentTypeValue === src_constant_app_constant__WEBPACK_IMPORTED_MODULE_12__["ContentType"].ALL_TYPE) {
                    returnData.results = results.slice(0, 4);
                }
                return Promise.resolve(returnData);
            }
            this.NextPageLoading = true;
            return this.examService.getNextPage(query).then((pagedData) => {
                const { results } = pagedData;
                pagedData.results = [
                    ...query.results,
                    ...this.mapExamsToRecords(results),
                ];
                this.NextPageLoading = false;
                return pagedData;
            });
        }, null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
    }
    // #endregion Exam
    // #endregion Items Query
    ngAfterViewInit() {
        this.initialLoad();
    }
    mapLearningMapsToRoleCategory(listData) {
        return listData.map((e) => {
            const { SubCategoryId } = e;
            const SubCategory = this.RoleSubCategoryMap[SubCategoryId];
            const Category = SubCategory ? this.RoleCategoryMap[SubCategory.CategoryId] : null;
            e.CategoryName = Category ? Category.Title : '';
            e.Record = this.userRoleService.getRecord(e.Id);
            return e;
        });
    }
    mapCurriculumToSubCategory(listData) {
        return listData.map((e) => {
            const { LearningSubCategoryId } = e;
            const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
            e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
            return e;
        });
    }
    mapCoursesToRecords(listData) {
        return listData.map((e) => {
            const { LearningSubCategoryId } = e;
            const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
            e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
            e.Record = this.userCourseService.getRecord(e.Id);
            e.CurriculumNameArr = this.CourseCurriculumNameMap[e.Id] || [];
            return e;
        });
    }
    mapExamsToRecords(listData) {
        return listData.map((e) => {
            const { LearningSubCategoryId } = e;
            const SubCategory = this.LearningSubCategoryMap[LearningSubCategoryId];
            e.LearningCategoryName = SubCategory ? SubCategory.FullName : '';
            e.Record = this.userExamService.getRecord(e.Id);
            return e;
        });
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            const curriculumList = yield this.curriculumService.getAll();
            for (const item of curriculumList) {
                const { CoursesId } = item;
                const CourseIdArr = Array.from(CoursesId);
                for (const Id of CourseIdArr) {
                    if (!this.CourseCurriculumNameMap[Id]) {
                        this.CourseCurriculumNameMap[Id] = [item.Title];
                        continue;
                    }
                    this.CourseCurriculumNameMap[Id].push(item.Title);
                }
            }
            yield Promise.all([
                this.userRoleService.getAll(),
                this.userCourseService.getAll(),
                this.userExamService.getAll(),
            ]);
            const [LearningCategoryList, LearningSubCategoryList] = yield Promise.all([
                this.dropdownService.getLearningCategory(),
                this.dropdownService.getLearningSubCategory(),
            ]);
            this.LearningCategoryMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(LearningCategoryList, 'Id');
            this.LearningSubCategoryMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(LearningSubCategoryList, 'Id');
            this.LearningCategoryList = LearningCategoryList.map(e => {
                e.SubCategoryList = LearningSubCategoryList.filter(i => i.CategoryId === e.Id);
                return e;
            });
            const [RoleCategoryList, RoleSubCategoryList] = yield Promise.all([
                this.dropdownService.getRoleCategory(),
                this.dropdownService.getRoleSubCategory(),
            ]);
            this.RoleCategoryMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(RoleCategoryList);
            this.RoleSubCategoryMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(RoleSubCategoryList);
            this.RoleCategoryList = RoleCategoryList.map(e => {
                e.RoleSubCategoryList = RoleSubCategoryList.filter(i => i.CategoryId === e.Id);
                return e;
            });
            this.PageIsLoading = false;
            const ContentTypeValue = this.activatedRoute.snapshot.queryParamMap.get('ContentType');
            const Title = this.activatedRoute.snapshot.queryParamMap.get('Title');
            if (ContentTypeValue) {
                this.ContentTypeForm.setValue(ContentTypeValue);
            }
            if (Title) {
                this.SearchQueryForm.setValue(Title);
            }
            else {
                this.SearchQueryForm.setValue('');
            }
        });
    }
    copyToClipBoard(Title, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["copyToClipBoard"])(Title, contentType);
            this.snackBar.open('Link Copied!');
        });
    }
    reportProblem(item, itemType) {
        this.dialogService.open(src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ReportProblemDialogComponent"], {
            data: { item, itemType }
        });
    }
    // #region Role
    moreInfoRole(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.open(src_app_shared_dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_10__["LearningMapsDialogComponent"], { data: { item } });
        });
    }
    addToRoleAspirations(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const loader = this.dialogService.loaderDialog();
            // const { Record } = item;
            // const activeRecord = Record || new UserRole({ RoleId: item.Id });
            // const updatedRecord = await this.userRoleService.save(activeRecord);
            // item.Record = updatedRecord;
            // loader.close();
            // this.snackBar.open('Added as Role Aspiration');
        });
    }
    addCurrentRole(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const editEmployeeDialog$ = this.dialogService.open(
            //   EditProfileDialogComponent, {
            //     data: { userId: this.accountService.account.Id, IsUserProfile: true, roleId: item.Id },
            //   }
            // );
            // await editEmployeeDialog$.afterClosed().toPromise();
            // await this.initialLoad();
        });
    }
    // #endregion
    // #region Curriculum
    moreInfoCurriculum(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialogService.open(src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CurriculumDescriptionDialogComponent"], { data: { item } });
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
    addToMyCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialogService.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["UserCourse"]({ CourseId: item.Id });
            const updatedRecord = yield this.userCourseService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Courses!');
        });
    }
    // #endregion Courses
    // #region Exam
    launchExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogService.open(src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ExaminationDialogComponent"], {
                data: { item }
            });
        });
    }
    addToMyExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialogService.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_6__["UserExam"]({ ExamId: item.Id });
            const updatedRecord = yield this.userExamService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Exams!');
        });
    }
}
LearningLibraryComponent.ɵfac = function LearningLibraryComponent_Factory(t) { return new (t || LearningLibraryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_15__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_16__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_18__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_19__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_20__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_23__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_24__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBar"])); };
LearningLibraryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LearningLibraryComponent, selectors: [["app-learning-library"]], decls: 47, vars: 24, consts: [[1, "page-container"], [1, "page-body", 3, "hidden"], ["id", "filters"], [1, "form-container"], [1, "search-container"], [1, "container"], [1, "onecap-btn", "primary", "explore-btn", 3, "matMenuTriggerFor"], [1, "button-wrapper"], [1, "material-icons"], [1, "explore-menu", 3, "close"], ["exploreMenu", "matMenu"], [1, "menu-container"], [1, "learning-category-section"], [1, "header"], [1, "list-container"], ["class", "menu-item category-item", 3, "ngClass", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "learning-sub-category-section"], ["class", "menu-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "role-category-section"], [1, "search-form"], ["type", "text", "placeholder", "What do you want to learn?", 3, "formControl"], [1, "content-type-select", 3, "formControl", "panelClass"], [3, "value"], [4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "menu-item", "category-item", 3, "ngClass", "mouseenter", "click"], [1, "menu-item", 3, "click"], ["class", "filter-values", 4, "ngIf"], ["id", "curriculum", 1, "grid-section", 3, "hidden"], [1, "section-header"], ["class", "section-loader", 4, "ngIf"], ["id", "course", 1, "grid-section", 3, "ngClass", "hidden"], ["id", "exam", 1, "grid-section", 3, "hidden"], ["id", "learning-maps", 1, "grid-section", 3, "ngClass", "hidden"], [1, "filter-values"], ["class", "onecap-outline-btn accent", 3, "click", 4, "ngIf"], ["class", "onecap-chip", 3, "click", 4, "ngIf"], [1, "onecap-outline-btn", "accent", 3, "click"], [1, "onecap-chip", 3, "click"], ["class", "section-body", 4, "ngIf"], ["class", "section-message", 4, "ngIf"], [1, "section-actions"], ["class", "onecap-btn", 3, "click", 4, "ngIf"], [1, "section-body"], ["class", "grid-item", 4, "ngFor", "ngForOf"], [1, "grid-item"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], ["curriculumMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "item-title"], [1, "item-category"], [1, "item-duration"], [1, "item-status"], [1, "item-action"], [1, "onecap-btn", "accent", 3, "click"], [1, "section-message"], [1, "onecap-btn", 3, "click"], [1, "section-loader"], ["courseMenu", "matMenu"], ["mat-menu-item", "", 3, "disabled", "click"], [1, "status-badge", 3, "ngClass"], [1, "onecap-btn", "primary", 3, "click"], ["examMenu", "matMenu"], [1, "page-loader"]], template: function LearningLibraryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " keyboard_arrow_down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-menu", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function LearningLibraryComponent_Template_mat_menu_close_11_listener() { ctx.HoveredCategory = null; return ctx.ActiveSubCategoryList.next([]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Learning Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LearningLibraryComponent_button_18_Template, 5, 4, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LearningLibraryComponent_button_22_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LearningLibraryComponent_button_28_Template, 2, 1, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, LearningLibraryComponent_ng_container_44_Template, 26, 27, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, LearningLibraryComponent_section_46_Template, 2, 0, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.LearningCategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 20, ctx.ActiveSubCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.RoleCategoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.SearchQueryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ContentTypeForm)("panelClass", "onecaplite-option-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ContentType.ALL_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ContentType.ALL_TYPE, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ContentType.LEARNING_MAPS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ContentType.LEARNING_MAPS, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ContentType.CURRICULA);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ContentType.CURRICULA, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ContentType.COURSES);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ContentType.COURSES, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.ContentType.EXAMS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ContentType.EXAMS, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 22, ctx.ContentTypeObs));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuItem"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_30__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"]], styles: [".mat-menu-panel.explore-menu {\n  width: 800px;\n  max-width: unset;\n}\n  .mat-menu-panel.explore-menu .menu-container {\n  display: grid;\n  align-items: stretch;\n  grid-template-columns: repeat(3, 1fr);\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section,   .mat-menu-panel.explore-menu .menu-container .role-category-section {\n  padding: 5px;\n  display: grid;\n  grid-template-rows: 20px 1fr;\n  justify-content: stretch;\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section .header,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .header,   .mat-menu-panel.explore-menu .menu-container .role-category-section .header {\n  padding-left: 5px;\n  font-weight: bold;\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section .list-container,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .list-container,   .mat-menu-panel.explore-menu .menu-container .role-category-section .list-container {\n  overflow: auto;\n  max-height: 500px;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: max-content;\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section .list-container button.menu-item,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .list-container button.menu-item,   .mat-menu-panel.explore-menu .menu-container .role-category-section .list-container button.menu-item {\n  min-height: 35px;\n  border: none;\n  background-color: transparent;\n  text-align: left;\n  padding: 5px;\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section .list-container button.menu-item.category-item,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .list-container button.menu-item.category-item,   .mat-menu-panel.explore-menu .menu-container .role-category-section .list-container button.menu-item.category-item {\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  align-items: center;\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-category-section .list-container button.menu-item:hover,   .mat-menu-panel.explore-menu .menu-container .learning-category-section .list-container button.menu-item.hovered,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .list-container button.menu-item:hover,   .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section .list-container button.menu-item.hovered,   .mat-menu-panel.explore-menu .menu-container .role-category-section .list-container button.menu-item:hover,   .mat-menu-panel.explore-menu .menu-container .role-category-section .list-container button.menu-item.hovered {\n  background-color: var(--onecaplite-darkwhite);\n}\n  .mat-menu-panel.explore-menu .menu-container .learning-sub-category-section {\n  border-left: solid 1px var(--onecaplite-black);\n  border-right: solid 1px var(--onecaplite-black);\n}\n  mat-select.content-type-select .mat-select-trigger {\n  height: inherit;\n}\n  mat-select.content-type-select .mat-select-value {\n  vertical-align: middle;\n}\n.page-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n.onecap-btn.explore-btn[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  font-size: var(--font-md);\n}\n#filters[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0px -30px;\n  margin-top: -30px;\n  border-radius: 0px;\n  padding: 15px;\n  background-color: #F8F7F7;\n  font-size: 16px;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 700px;\n  justify-self: center;\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  gap: 5px;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: inherit;\n  grid-template-columns: max-content 1fr;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   mat-menu[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--onecaplite-black);\n  display: grid;\n  grid-template-columns: 1fr max-content;\n  box-sizing: border-box;\n  align-items: center;\n  padding: 0px 20px;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  height: inherit;\n  background-color: inherit;\n  font-size: inherit;\n}\n#filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.filter-values[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  grid-auto-columns: max-content;\n  gap: 15px;\n}\n.onecaplite-btn.back-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--onecaplite-lightblue);\n  color: var(--onecaplite-lightblue);\n  background-color: var(--onecaplite-white);\n  width: 100px;\n}\nmat-select.content-type-select[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 125px;\n  padding: 0px 15px;\n  border: 1px solid var(--onecaplite-black);\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n.grid-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.grid-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.grid-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 15px;\n  grid-auto-rows: 1fr;\n}\n.grid-section[_ngcontent-%COMP%]   .section-message[_ngcontent-%COMP%], .grid-section[_ngcontent-%COMP%]   .section-loader[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  height: 100px;\n  align-items: center;\n  justify-content: center;\n  color: var(--onecaplite-purple);\n  font-weight: bold;\n}\n.grid-section[_ngcontent-%COMP%]   .section-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n.grid-item[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background-color: var(--onecaplite-white);\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 5px;\n  display: grid;\n  padding: 10px;\n  padding-bottom: 15px;\n  grid-auto-rows: max-content;\n}\n.grid-item[_ngcontent-%COMP%]   .onecap-icon-btn[_ngcontent-%COMP%] {\n  color: var(--onecaplite-lightgray);\n  justify-self: flex-end;\n}\n.grid-item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%] {\n  height: 36px;\n  display: -webkit-box;\n  display: -moz-box;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  -moz-line-clamp: 2;\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: bold;\n  font-size: var(--font-md);\n}\n.grid-item[_ngcontent-%COMP%]   .item-category[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]   .item-duration[_ngcontent-%COMP%], .grid-item[_ngcontent-%COMP%]   .item-status[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.grid-item[_ngcontent-%COMP%]   .item-category[_ngcontent-%COMP%] {\n  color: var(--onecaplite-lightgray);\n  height: 16px;\n}\n.grid-item[_ngcontent-%COMP%]   .item-duration[_ngcontent-%COMP%] {\n  color: var(--onecaplite-blue);\n  height: 16px;\n}\n.grid-item[_ngcontent-%COMP%]   .item-status[_ngcontent-%COMP%] {\n  height: 60px;\n  display: grid;\n  justify-content: flex-start;\n  align-items: center;\n}\n.grid-item[_ngcontent-%COMP%]   .item-action[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 0px 20px;\n  box-sizing: border-box;\n}\n.grid-item[_ngcontent-%COMP%]   .onecap-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid-section.dark-section[_ngcontent-%COMP%] {\n  background-color: #E9E4E4;\n  margin: 0px -30px;\n  padding: 10px 30px;\n}\n@media only screen and (min-width: 1440px) {\n  .grid-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    width: 1050px;\n    justify-self: center;\n  }\n  .grid-section[_ngcontent-%COMP%]   .section-body[_ngcontent-%COMP%] {\n    width: 1050px;\n    justify-self: center;\n  }\n}\n@media only screen and (max-width: 949px) {\n  #filters[_ngcontent-%COMP%] {\n    margin: -20px;\n    margin-bottom: 0px;\n  }\n  #filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n  #filters[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .content-type-select[_ngcontent-%COMP%] {\n    justify-self: flex-end;\n  }\n\n  .grid-section.dark-section[_ngcontent-%COMP%] {\n    background-color: #E9E4E4;\n    margin: 0px -20px;\n    padding: 10px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGVhcm5pbmctbGlicmFyeS9sZWFybmluZy1saWJyYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFDSTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBQ047QUFDTTs7O0VBR0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FBQ1I7QUFDUTs7O0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUdWO0FBQVE7OztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBSVY7QUFIVTs7O0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFPWjtBQU5ZOzs7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQVVkO0FBUlk7Ozs7O0VBQ0UsNkNBQUE7QUFjZDtBQVJNO0VBQ0UsOENBQUE7RUFDQSwrQ0FBQTtBQVVSO0FBSkk7RUFDRSxlQUFBO0FBTU47QUFKSTtFQUNFLHNCQUFBO0FBTU47QUFDQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFFRjtBQURFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxRQUFBO0FBR0o7QUFGSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFJTjtBQUZNO0VBQ0UsZUFBQTtBQUlSO0FBQUk7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRU47QUFETTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdSO0FBRlE7RUFDRSxhQUFBO0FBSVY7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBQUY7QUFHQTtFQUNFLDZDQUFBO0VBQ0Esa0NBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQUFGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUdBO0VBRUUsc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFERjtBQUdFO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtBQURKO0FBSUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUdBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSko7QUFPRTtFQUNFLGtDQUFBO0VBQ0EsWUFBQTtBQUxKO0FBUUU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBUEo7QUFVRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBUko7QUFXRTtFQUFpQixXQUFBO0FBUm5CO0FBV0E7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSRjtBQVdBO0VBRUk7SUFDRSxhQUFBO0lBQ0Esb0JBQUE7RUFUSjtFQVdFO0lBQ0UsYUFBQTtJQUNBLG9CQUFBO0VBVEo7QUFDRjtBQWFBO0VBQ0U7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUFYRjtFQVlFO0lBQ0UsMEJBQUE7SUFDQSwyQkFBQTtFQVZKO0VBWUk7SUFDRSxzQkFBQTtFQVZOOztFQWVBO0lBQ0UseUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXJuaW5nLWxpYnJhcnkvbGVhcm5pbmctbGlicmFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XHJcbiAgLm1hdC1tZW51LXBhbmVsLmV4cGxvcmUtbWVudSB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgLm1lbnUtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcblxyXG4gICAgICAubGVhcm5pbmctY2F0ZWdvcnktc2VjdGlvbixcclxuICAgICAgLmxlYXJuaW5nLXN1Yi1jYXRlZ29yeS1zZWN0aW9uLFxyXG4gICAgICAucm9sZS1jYXRlZ29yeS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwcHggMWZyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcclxuXHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcclxuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgICAgICAgIGJ1dHRvbi5tZW51LWl0ZW0ge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICYuY2F0ZWdvcnktaXRlbSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIsICYuaG92ZXJlZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgICAubGVhcm5pbmctc3ViLWNhdGVnb3J5LXNlY3Rpb24ge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggdmFyKC0tb25lY2FwbGl0ZS1ibGFjayk7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggdmFyKC0tb25lY2FwbGl0ZS1ibGFjayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1zZWxlY3QuY29udGVudC10eXBlLXNlbGVjdCB7XHJcbiAgICAubWF0LXNlbGVjdC10cmlnZ2VyIHtcclxuICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgfVxyXG4gICAgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4ucGFnZS1ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweFxyXG59XHJcblxyXG4ub25lY2FwLWJ0bi5leHBsb3JlLWJ0biB7XHJcbiAgd2lkdGggOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LW1kKTtcclxufVxyXG5cclxuI2ZpbHRlcnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luOiAwcHggLTMwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjdGNztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50O1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdhcDogaW5oZXJpdDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XHJcblxyXG4gICAgICBtYXQtbWVudSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1mb3JtIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vbmVjYXBsaXRlLWJsYWNrKTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLXZhbHVlcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xyXG4gIGdhcDogMTVweDtcclxufVxyXG5cclxuLm9uZWNhcGxpdGUtYnRuLmJhY2stYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vbmVjYXBsaXRlLWxpZ2h0Ymx1ZSk7XHJcbiAgY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtbGlnaHRibHVlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbm1hdC1zZWxlY3QuY29udGVudC10eXBlLXNlbGVjdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoIDogMTI1cHg7XHJcbiAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1ibGFjayk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5ncmlkLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiA1cHg7XHJcbiAgLnNlY3Rpb24taGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuc2VjdGlvbi1ib2R5IHtcclxuICAgIGRpc3BsYXkgOiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIGdhcCAgICAgICAgICAgICAgICAgICA6IDE1cHg7XHJcbiAgICBncmlkLWF1dG8tcm93cyAgICAgICAgOiAxZnI7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLW1lc3NhZ2UsIC5zZWN0aW9uLWxvYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JpZC1pdGVtIHtcclxuXHJcbiAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICBib3gtc2hhZG93ICAgICAgOiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGdyaWQ7XHJcbiAgcGFkZGluZyAgICAgICAgIDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbSAgOiAxNXB4O1xyXG4gIGdyaWQtYXV0by1yb3dzICA6IG1heC1jb250ZW50O1xyXG5cclxuICAub25lY2FwLWljb24tYnRuIHtcclxuICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWxpZ2h0Z3JheSk7XHJcbiAgICBqdXN0aWZ5LXNlbGYgIDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAuaXRlbS10aXRsZSB7XHJcbiAgICBoZWlnaHQgICAgICAgICAgICA6IDM2cHg7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgICA6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgOiAtbW96LWJveDtcclxuICAgIGxpbmUtY2xhbXAgICAgICAgIDogMjtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC1tb3otbGluZS1jbGFtcCAgIDogMjtcclxuICAgIGJveC1vcmllbnQgICAgICAgIDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLW1vei1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcclxuXHJcbiAgICBvdmVyZmxvdyAgICAgICAgICA6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3cgICAgIDogZWxsaXBzaXM7XHJcbiAgICBmb250LXdlaWdodCAgICAgICA6IGJvbGQ7XHJcbiAgICBmb250LXNpemUgICAgICAgICA6IHZhcigtLWZvbnQtbWQpO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tY2F0ZWdvcnksIC5pdGVtLWR1cmF0aW9uLCAuaXRlbS1zdGF0dXMge1xyXG4gICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgd2hpdGUtc3BhY2UgICA6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3cgOiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93ICAgICAgOiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuaXRlbS1jYXRlZ29yeSB7XHJcbiAgICBjb2xvciAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1saWdodGdyYXkpO1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLml0ZW0tZHVyYXRpb24ge1xyXG4gICAgY29sb3IgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtYmx1ZSk7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1zdGF0dXMge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaXRlbS1hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5vbmVjYXAtYnV0dG9uIHsgd2lkdGg6IDEwMCU7IH1cclxufVxyXG5cclxuLmdyaWQtc2VjdGlvbi5kYXJrLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU0RTQ7XHJcbiAgbWFyZ2luOiAwcHggLTMwcHg7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCl7XHJcbiAgLmdyaWQtc2VjdGlvbiB7XHJcbiAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLWJvZHkge1xyXG4gICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQ5cHgpIHtcclxuICAjZmlsdGVycyAge1xyXG4gICAgbWFyZ2luOiAtMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcblxyXG4gICAgICAuY29udGVudC10eXBlLXNlbGVjdCB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmdyaWQtc2VjdGlvbi5kYXJrLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTRFNDtcclxuICAgIG1hcmdpbjogMHB4IC0yMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LearningLibraryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-learning-library',
                templateUrl: './learning-library.component.html',
                styleUrls: ['./learning-library.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_13__["AccountService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__["UserRoleService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_15__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_16__["UserExamService"] }, { type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_18__["CurriculumService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_19__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_20__["ExamService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_21__["DropdownService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_23__["DialogService"] }, { type: src_app_shared_dialog_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_24__["CourseDialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "cRaI":
/*!*******************************************************************!*\
  !*** ./src/app/pages/learning-library/learning-library.module.ts ***!
  \*******************************************************************/
/*! exports provided: LearningLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningLibraryModule", function() { return LearningLibraryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _learning_library_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-library-routing.module */ "xNJW");
/* harmony import */ var _learning_library_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./learning-library.component */ "X9Kk");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class LearningLibraryModule {
}
LearningLibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningLibraryModule });
LearningLibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningLibraryModule_Factory(t) { return new (t || LearningLibraryModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _learning_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningLibraryRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningLibraryModule, { declarations: [_learning_library_component__WEBPACK_IMPORTED_MODULE_3__["LearningLibraryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _learning_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningLibraryRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningLibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_learning_library_component__WEBPACK_IMPORTED_MODULE_3__["LearningLibraryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _learning_library_routing_module__WEBPACK_IMPORTED_MODULE_2__["LearningLibraryRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xNJW":
/*!***************************************************************************!*\
  !*** ./src/app/pages/learning-library/learning-library-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: LearningLibraryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningLibraryRoutingModule", function() { return LearningLibraryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _learning_library_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./learning-library.component */ "X9Kk");





const routes = [{ path: '', component: _learning_library_component__WEBPACK_IMPORTED_MODULE_2__["LearningLibraryComponent"] }];
class LearningLibraryRoutingModule {
}
LearningLibraryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LearningLibraryRoutingModule });
LearningLibraryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LearningLibraryRoutingModule_Factory(t) { return new (t || LearningLibraryRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LearningLibraryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LearningLibraryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-learning-library-learning-library-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component */ "UGwT");
/* harmony import */ var src_app_shared_dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/dialog/user-feedback-dialog/user-feedback-dialog.component */ "cDpi");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/service/others.service */ "51mG");
/* harmony import */ var src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/mandatory-training.service */ "3HJw");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngu/carousel */ "Mh1x");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");




















const _c0 = function (a0) { return { "active": a0 }; };
function HomeComponent_ngu_carousel_3_ngu_item_2_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ngu_carousel_3_ngu_item_2_span_13_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const i_r15 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r7.moveTo(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.index;
    const idx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, i_r15 === idx_r12));
} }
function HomeComponent_ngu_carousel_3_ngu_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngu-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " READ MORE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HomeComponent_ngu_carousel_3_ngu_item_2_span_13_Template, 1, 3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_ngu_carousel_3_ngu_item_2_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7); return _r10.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "NEXT FEATURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", "url(" + item_r11.BackgroundImageUrl + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r11.Description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r11.Link, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.announcements);
} }
function HomeComponent_ngu_carousel_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngu-carousel", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_ngu_carousel_3_ngu_item_2_Template, 20, 6, "ngu-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputs", ctx_r0.announcementCarousel)("dataSource", ctx_r0.announcements);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No announcement available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { complete: a0, pending: a1 }; };
function HomeComponent_div_8_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_8_ng_container_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.goToCourseLibrary("Title", item_r22.Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r22.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Due on ", item_r22.DueDateString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, item_r22.Status === ctx_r23.CourseStatus.Completed, item_r22.Status === ctx_r23.CourseStatus.Pending));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r22.Status, " ");
} }
function HomeComponent_div_8_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_8_ng_container_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.goToExamLibrary("Title", item_r22.Name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r22.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Due on ", item_r22.DueDateString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c1, item_r22.Status === ctx_r24.ExamStatus.PASSED, item_r22.Status === ctx_r24.ExamStatus.FAILED));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r22.Status, " ");
} }
function HomeComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_8_ng_container_1_div_1_Template, 7, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_8_ng_container_1_div_2_Template, 7, 7, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r22.Type === "Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r22.Type === "Exam");
} }
function HomeComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_8_ng_container_1_Template, 3, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.mandatoryTrainings);
} }
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No mandatory trainings for this time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_div_5_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r41.displayCurriculumDescription(item_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r36.RawDescription, " ");
} }
function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No description available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_div_5_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_div_6_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47); const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r45.displayCurriculumDescription(item_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " View Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r36.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r36.HasDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r36.HasDescription);
} }
function HomeComponent_div_14_ngu_carousel_1_ngu_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngu-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_14_ngu_carousel_1_ngu_item_2_div_1_Template, 10, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r36["filler"]);
} }
function HomeComponent_div_14_ngu_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngu-carousel", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_14_ngu_carousel_1_ngu_item_2_Template, 2, 1, "ngu-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "west");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputs", ctx_r33.curriculumCarousel)("dataSource", ctx_r33.featuredCurricula);
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_14_ngu_carousel_1_Template, 9, 2, "ngu-carousel", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.featuredCurricula.length > 0);
} }
function HomeComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No featured curriculum this time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomeComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(otherService, mandatoryTrainingService, courseService, examService, userCourseService, userExamService, curriculumService, dialogService, router) {
        this.otherService = otherService;
        this.mandatoryTrainingService = mandatoryTrainingService;
        this.courseService = courseService;
        this.examService = examService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.curriculumService = curriculumService;
        this.dialogService = dialogService;
        this.router = router;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_2__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_3__["ExamStatus"];
        this.pageIsLoading = true;
        this.announcementCarousel = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 500,
            interval: { timing: 10000 },
            point: { visible: false },
            load: 2,
            loop: true,
            velocity: 0,
            touch: true,
        };
        this.curriculumCarousel = {
            grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
            slide: 3,
            speed: 500,
            interval: { timing: 10000 },
            point: { visible: false },
            load: 2,
            loop: true,
            velocity: 0,
            touch: true,
        };
        this.announcements = [];
        this.mandatoryTrainings = [];
        this.featuredCurricula = [];
        this.supportName = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SupportName;
        this.supportEmailAddress = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].SupportMail;
    }
    ngOnInit() {
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pageIsLoading = true;
            this.announcements = yield this.otherService.getAnnouncements();
            yield Promise.all([
                this.loadMandatorTrainings(),
                this.loadFeaturedCurriculum(),
            ]);
            this.pageIsLoading = false;
        });
    }
    loadMandatorTrainings() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mandatoryTrainingList = yield this.mandatoryTrainingService.getAll();
            yield Promise.all([
                this.userCourseService.getAll(),
                this.userExamService.getAll(),
            ]);
            let courseIdArr = [];
            let examIdArr = [];
            for (const mandatoryTrainingItem of mandatoryTrainingList) {
                courseIdArr = [
                    ...courseIdArr,
                    ...Array.from(mandatoryTrainingItem.CoursesId),
                ];
                examIdArr = [
                    ...examIdArr,
                    ...Array.from(mandatoryTrainingItem.ExamsId),
                ];
            }
            const courseIdSet = new Set(courseIdArr);
            const examIdSet = new Set(examIdArr);
            const courseList = yield this.courseService.getItemsByIdArr(Array.from(courseIdSet));
            const examList = yield this.examService.getItemsByIdArr(Array.from(examIdSet));
            for (const courseItem of courseList) {
                courseItem.Record = yield this.userCourseService.getItemByItemRecordId(courseItem.Id);
                const mandatoryTrainingDetail = mandatoryTrainingList.find(e => e.CoursesId.has(courseItem.Id));
                this.mandatoryTrainings.push({
                    Type: 'Course',
                    Name: courseItem.Title,
                    Status: courseItem.Status,
                    DueDateString: mandatoryTrainingDetail.DateDueDate,
                });
            }
            for (const examItem of examList) {
                examItem.Record = yield this.userExamService.getItemByItemRecordId(examItem.Id);
                const mandatoryTrainingDetail = mandatoryTrainingList.find(e => e.ExamsId.has(examItem.Id));
                this.mandatoryTrainings.push({
                    Type: 'Exam',
                    Name: examItem.Title,
                    Status: examItem.Status,
                    DueDateString: mandatoryTrainingDetail.DateDueDate,
                });
            }
        });
    }
    loadFeaturedCurriculum() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const featuredCurriculumList = yield this.otherService.getFeaturedCurriculum();
            const curriculumIdArr = featuredCurriculumList.map(e => e.CurriculumId);
            let curriculumList = yield this.curriculumService.getItemsByIdArr(curriculumIdArr);
            if (curriculumList.length % 3 !== 0) {
                const tempArr = new Array(3 - (curriculumList.length % 3)).fill({ filler: true });
                curriculumList = curriculumList.concat(tempArr);
            }
            this.featuredCurricula = curriculumList;
        });
    }
    displayCurriculumDescription(item) {
        const courseDescriptionDialog$ = this.dialogService.open(src_app_shared_dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CurriculumDescriptionDialogComponent"], { data: { item } });
    }
    goToCourseLibrary(field, data) {
        this.router.navigate(['learning-library'], { queryParams: { [field]: data, ['ContentType']: 'Courses' } });
    }
    goToExamLibrary(field, data) {
        this.router.navigate(['learning-library'], { queryParams: { [field]: data, ['ContentType']: 'Exams' } });
    }
    submitForm() {
        const editDialog = this.dialogService.open(src_app_shared_dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserFeedbackDialogComponent"]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_7__["OthersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryTrainingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_10__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_12__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 33, vars: 11, consts: [[1, "home-content", 3, "hidden"], [1, "top-row"], [1, "carousel"], ["class", "carousel-announcement", 3, "inputs", "dataSource", 4, "ngIf"], ["class", "carousel-announcement no-data-container", 4, "ngIf"], [1, "card-item", "mandatory-trainings"], [1, "header"], ["class", "body", 4, "ngIf"], ["class", "body no-data-container", 4, "ngIf"], [1, "bottom-row"], [1, "carousel-curriculum"], ["class", "carousel-container", 4, "ngIf"], ["class", "carousel-container no-data-container", 4, "ngIf"], [1, "card-item"], [1, "body", "contact-us"], [1, "contact-text"], [3, "href"], [1, "email-button", 3, "click"], [1, "icon", "wht", "icon-dxc", "communications-envelope"], ["class", "loading-page", 4, "ngIf"], [1, "carousel-announcement", 3, "inputs", "dataSource"], ["carouselAnnouncements", ""], [4, "nguCarouselDef"], ["NguCarouselPrev", "", "hidden", ""], ["announcementPrev", ""], ["NguCarouselNext", "", "hidden", ""], ["announcementNext", ""], [1, "announcement-carousel-item"], [1, "announcement-container"], [1, "content"], [1, "description"], ["target", "_blank", 1, "link", 3, "href"], [1, "spacer"], [1, "footer"], [1, "page-dot"], ["class", "dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "next-page", 3, "click"], [1, "round-button"], [1, "icon", "material-icons"], [1, "dot", 3, "ngClass", "click"], [1, "carousel-announcement", "no-data-container"], [1, "body"], [4, "ngFor", "ngForOf"], ["class", "course-item", 3, "click", 4, "ngIf"], [1, "course-item", 3, "click"], [1, "course-title"], [1, "label-due"], [1, "label-status", 3, "ngClass"], [1, "body", "no-data-container"], [1, "carousel-container"], ["class", "curriculum-container", 3, "inputs", "dataSource", 4, "ngIf"], [1, "curriculum-container", 3, "inputs", "dataSource"], ["carouselCurriculum", ""], ["NguCarouselPrev", "", 1, "prev-button"], [1, "material-icons"], ["NguCarouselNext", "", 1, "next-button"], ["class", "curriculum-item", 4, "ngIf"], [1, "curriculum-item"], [1, "title"], [1, "overflow-text"], ["class", "desc-container", 4, "ngIf"], ["class", "no-desc-container", 4, "ngIf"], [1, "action"], [1, "button", 3, "click"], [1, "desc-container"], [1, "overflow-text", 3, "click"], [1, "no-desc-container"], [1, "carousel-container", "no-data-container"], [1, "loading-page"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeComponent_ngu_carousel_3_Template, 9, 2, "ngu-carousel", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Ongoing Mandatory Training ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Featured Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeComponent_div_15_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Got questions, comments, or suggestions? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_29_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Submit Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, HomeComponent_div_32_Template, 2, 0, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.announcements.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.announcements.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mandatoryTrainings.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mandatoryTrainings.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featuredCurricula.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.featuredCurricula.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx.supportEmailAddress, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.supportName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.supportEmailAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__["NguCarousel"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__["NguCarouselDefDirective"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__["NguCarouselPrevDirective"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__["NguCarouselNextDirective"], _ngu_carousel__WEBPACK_IMPORTED_MODULE_17__["NguItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_18__["LoaderComponent"]], styles: [":root {\n  --home-announcement-height: 335px;\n  --home-announcement-width: 710px;\n  --home-feature-curricula-height: 160px;\n}\n  ngu-carousel.curriculum-container .ngucarousel {\n  position: unset;\n}\n[_nghost-%COMP%] {\n  display: grid;\n  justify-content: center;\n  padding: 20px;\n  height: 100%;\n}\n.top-row[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.top-row[_ngcontent-%COMP%], .bottom-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: center;\n}\n.card-item[_ngcontent-%COMP%] {\n  \n  width: 290px;\n  min-width: 290px;\n  max-width: 290px;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.card-item.mandatory-trainings[_ngcontent-%COMP%] {\n  \n  height: var(--home-announcement-height);\n  min-height: var(--home-announcement-height);\n  max-height: var(--home-announcement-height);\n}\n.card-item.mandatory-trainings[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  flex-grow: 1;\n  overflow: auto;\n  padding: 15px;\n}\n.card-item.mandatory-trainings[_ngcontent-%COMP%]    > .body.no-data-container[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-darkwhite);\n  color: var(--onecaplite-purple);\n  text-align: center;\n  font-weight: bold;\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.card-item[_ngcontent-%COMP%]    > .header[_ngcontent-%COMP%] {\n  font-size: var(--font-lg);\n  color: var(--onecaplite-black);\n  text-align: left;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.card-item[_ngcontent-%COMP%]    > .body[_ngcontent-%COMP%] {\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  border-radius: 12.5px;\n  background-color: var(--onecaplite-white);\n}\n.card-item[_ngcontent-%COMP%]    > .body.contact-us[_ngcontent-%COMP%] {\n  \n  box-sizing: border-box;\n  height: var(--home-feature-curricula-height);\n  min-height: var(--home-feature-curricula-height);\n  max-height: var(--home-feature-curricula-height);\n  padding: 10px;\n}\n\n.carousel-announcement[_ngcontent-%COMP%] {\n  height: var(--home-announcement-height);\n  width: var(--home-announcement-width);\n}\n.carousel-announcement.no-data-container[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-darkwhite);\n  color: var(--onecaplite-purple);\n  text-align: center;\n  font-weight: bold;\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12.5px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%] {\n  height: var(--home-announcement-height);\n  width: var(--home-announcement-width);\n  background-color: #606060;\n  background-size: cover !important;\n  border-radius: 12.5px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%] {\n  background-color: rgba(95, 36, 159, 0.9);\n  border-radius: 0 15% 0 0;\n  min-width: 375px;\n  max-width: 375px;\n  min-height: 310px;\n  max-height: 310px;\n  margin-top: 12px;\n  position: absolute;\n  display: grid;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  margin: 18px 20px;\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  align-items: stretch;\n  color: var(--onecaplite-white);\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: var(--font-xl);\n  font-weight: bold;\n  width: 222px;\n  margin-bottom: 18px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: var(--font-md);\n  height: 56px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -moz-box;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -moz-line-clamp: 3;\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: var(--font-xs);\n  text-decoration: none;\n  font-weight: bold;\n  align-self: flex-start;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .page-dot[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-right: 100px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .page-dot[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  min-height: 10px;\n  max-height: 10px;\n  height: 10px;\n  min-width: 10px;\n  max-width: 10px;\n  width: 10px;\n  background-color: var(--onecaplite-white);\n  border-radius: 50%;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .page-dot[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-gray);\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .next-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-self: flex-end;\n  font-weight: bold;\n  font-size: var(--font-xs);\n  border-bottom: solid 0.5px transparent;\n  cursor: pointer;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .next-page[_ngcontent-%COMP%]   .round-button[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-white);\n  color: var(--onecaplite-purple);\n  min-height: 30px;\n  max-height: 30px;\n  height: 30px;\n  min-width: 30px;\n  max-width: 30px;\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  margin-left: 10px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .next-page[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: 15px;\n  height: 15px;\n  width: 15px;\n}\n.announcement-carousel-item[_ngcontent-%COMP%]   .announcement-container[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .next-page[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n\n.course-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n  border-bottom: 1px solid var(--onecaplite-darkwhite);\n  padding-bottom: 25px;\n  margin-bottom: 10px;\n}\n.course-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n}\n.course-item[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  text-decoration: underline;\n}\n.course-item[_ngcontent-%COMP%]   .label-due[_ngcontent-%COMP%], .course-item[_ngcontent-%COMP%]   .label-status[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  line-height: var(--linespace-sm);\n  letter-spacing: var(--no-char-spacing);\n}\n.course-item[_ngcontent-%COMP%]   .label-due[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n.course-item[_ngcontent-%COMP%]   .label-status[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 24px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--onecaplite-darkwhite);\n}\n.course-item[_ngcontent-%COMP%]   .label-status.complete[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-lightgreen);\n  color: var(--onecaplite-white);\n}\n.course-item[_ngcontent-%COMP%]   .label-status.pending[_ngcontent-%COMP%] {\n  background-color: #ffcd00;\n}\n\n\n.carousel-curriculum[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: var(--home-announcement-width);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: var(--font-lg);\n  color: var(--onecaplite-black);\n  text-align: left;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: transparent;\n  border-radius: 15px;\n  height: var(--home-feature-curricula-height);\n  min-height: var(--home-feature-curricula-height);\n  max-height: var(--home-feature-curricula-height);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container.no-data-container[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-darkwhite);\n  color: var(--onecaplite-purple);\n  text-align: center;\n  font-weight: bold;\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-carousel.curriculum-container[_ngcontent-%COMP%] {\n  height: inherit;\n  min-height: inherit;\n  max-height: inherit;\n  width: inherit;\n  min-width: inherit;\n  max-width: inherit;\n  box-sizing: border-box;\n  padding: 0px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  min-width: 230px;\n  width: 230px;\n  max-width: 230px;\n  min-height: var(--home-feature-curricula-height);\n  height: var(--home-feature-curricula-height);\n  max-height: var(--home-feature-curricula-height);\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 10px;\n  background-color: var(--onecaplite-white);\n  height: var(--home-feature-curricula-height);\n  border-radius: 10px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%] {\n  min-height: 40px;\n  height: 40px;\n  max-height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px;\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  font-weight: bold;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   .overflow-text[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: -moz-box;\n  line-clamp: 2;\n  -webkit-line-clamp: 2;\n  -moz-line-clamp: 2;\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  text-align: center;\n  max-height: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .title[_ngcontent-%COMP%]   .overflow-text[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 5px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%]   .desc-container[_ngcontent-%COMP%] {\n  min-height: 60px;\n  height: 60px;\n  max-height: 60px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%]   .desc-container[_ngcontent-%COMP%]   .overflow-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: var(--font-sm);\n  line-height: var(--linespace-lg);\n  letter-spacing: var(--no-char-spacing);\n  display: -webkit-box;\n  display: -moz-box;\n  line-clamp: 3;\n  -webkit-line-clamp: 3;\n  -moz-line-clamp: 3;\n  box-orient: vertical;\n  -webkit-box-orient: vertical;\n  text-align: center;\n  max-height: inherit;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%]   .desc-container[_ngcontent-%COMP%]   .overflow-text[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .description[_ngcontent-%COMP%]   .no-desc-container[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  line-height: var(--linespace-lg);\n  letter-spacing: var(--no-char-spacing);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .curriculum-item[_ngcontent-%COMP%]    > .action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 24px;\n  width: 128px;\n  border: none;\n  border-radius: 8px;\n  background-color: var(--onecaplite-orange);\n  color: var(--onecaplite-white);\n  font-size: var(--font-sm);\n  line-height: var(--linespace-sm);\n  letter-spacing: var(--no-char-spacing);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  box-sizing: border-box;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-item[_ngcontent-%COMP%]:nth-child(3n+1) {\n  align-items: flex-start;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-item[_ngcontent-%COMP%]:nth-child(3n+2)   .curriculum-item[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-lightblue);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-item[_ngcontent-%COMP%]:nth-child(3n+3) {\n  align-items: flex-end;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   ngu-item[_ngcontent-%COMP%]:nth-child(3n+3)   .curriculum-item[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-lightgreen);\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .prev-button[_ngcontent-%COMP%], .carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .next-button[_ngcontent-%COMP%] {\n  z-index: 3;\n  height: 25px;\n  width: 25px;\n  position: absolute;\n  top: calc(50% - 12.5px);\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  background: var(--onecaplite-purple);\n  border: solid 1px var(--onecaplite-purple);\n  color: var(--onecaplite-white);\n  border-radius: 50%;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .prev-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .next-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .next-button[_ngcontent-%COMP%] {\n  right: -12.5px;\n}\n.carousel-curriculum[_ngcontent-%COMP%]   .carousel-container[_ngcontent-%COMP%]   .prev-button[_ngcontent-%COMP%] {\n  left: -12.5px;\n}\n\n\n.contact-us[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.contact-us[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%], .contact-us[_ngcontent-%COMP%]   button.email-button[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  line-height: var(--linespace-lg);\n  letter-spacing: var(--no-char-spacing);\n  text-align: center;\n}\n.contact-us[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.contact-us[_ngcontent-%COMP%]   .contact-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--onecaplite-blue);\n  text-decoration: none;\n}\n.contact-us[_ngcontent-%COMP%]   button.email-button[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-purple);\n  color: var(--onecaplite-white);\n  cursor: pointer;\n  border: none;\n  width: 176px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.contact-us[_ngcontent-%COMP%]   button.email-button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  height: 16px;\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLHNDQUFBO0FBREo7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFKRjtBQU9BO0VBQVcsbUJBQUE7QUFIWDtBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUE7RUFHRSxVQUFBO0VBQ0EsWUFIVTtFQUlWLGdCQUpVO0VBS1YsZ0JBTFU7RUFxQ1YsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQWxDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtBQUNKO0FBQ0k7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNOO0FBQ007RUFDRSw2Q0FBQTtFQUNBLCtCQUFBO0VBRUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFEUjtBQVdFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVRKO0FBWUU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFFQSxxQkFBQTtFQUNBLHlDQUFBO0FBWEo7QUFhSTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUVBLGFBQUE7QUFaTjtBQW1CQSxrQ0FBQTtBQUVBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtBQWpCRjtBQW1CRTtFQUNFLDZDQUFBO0VBQ0EsK0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBbkJKO0FBdUJBO0VBQ0UsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQXBCRjtBQXNCRTtFQUNFLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBcEJKO0FBc0JJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtBQXBCTjtBQXNCTTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFwQlI7QUF1Qk07RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUdBLGdCQUFBO0VBQ0EsdUJBQUE7QUF2QlI7QUEwQk07RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUF4QlI7QUF5QlE7RUFBVSwwQkFBQTtBQXRCbEI7QUF5Qk07RUFBVSxZQUFBO0FBdEJoQjtBQXdCTTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF0QlI7QUF3QlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQXRCVjtBQXdCVTtFQUVFLGdCQURvQjtFQUVwQixnQkFGb0I7RUFHcEIsWUFIb0I7RUFJcEIsZUFKb0I7RUFLcEIsZUFMb0I7RUFNcEIsV0FOb0I7RUFPcEIseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXZCWjtBQXdCWTtFQUNFLHdDQUFBO0FBdEJkO0FBMkJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBRUEseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7QUExQlY7QUE0QlU7RUFDRSx5Q0FBQTtFQUNBLCtCQUFBO0VBR0EsZ0JBRGdCO0VBRWhCLGdCQUZnQjtFQUdoQixZQUhnQjtFQUloQixlQUpnQjtFQUtoQixlQUxnQjtFQU1oQixXQU5nQjtFQVFoQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUE3Qlo7QUFnQ1U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBOUJaO0FBa0NZO0VBQU0sMEJBQUE7QUEvQmxCO0FBdUNBLGVBQUE7QUFHQSxnQ0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUVBLG9EQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQXZDRjtBQXlDRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXZDSjtBQTBDRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FBeENKO0FBMkNFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FBekNKO0FBNENFO0VBQWEsZUFBQTtBQXpDZjtBQTJDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkNBQUE7QUExQ0o7QUEyQ0k7RUFDRSw4Q0FBQTtFQUNBLDhCQUFBO0FBekNOO0FBNENJO0VBQ0UseUJBQUE7QUExQ047QUErQ0EsZUFBQTtBQUVBLGdDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBN0NGO0FBK0NFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTdDSjtBQWdERTtFQUNFLGtCQUFBO0VBRUEsNkJBQUE7RUFDQSxtQkFBQTtFQUVBLDRDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtBQWhESjtBQWtESTtFQUNFLDZDQUFBO0VBQ0EsK0JBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWxETjtBQXFESTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxzQkFBQTtFQUNBLFlBQUE7QUFyRE47QUF3REk7RUFDRSxzQkFBQTtFQUdBLGdCQURZO0VBRVosWUFGWTtFQUdaLGdCQUhZO0VBTVosZ0RBRFk7RUFFWiw0Q0FGWTtFQUdaLGdEQUhZO0VBS1osYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFFQSxhQUFBO0VBRUEseUNBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FBN0ROO0FBK0RNO0VBRUUsZ0JBRGdCO0VBRWhCLFlBRmdCO0VBR2hCLGdCQUhnQjtFQUtoQixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUFoRVI7QUFrRVE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBakVWO0FBbUVVO0VBQ0UsMEJBQUE7QUFqRVo7QUFzRU07RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQXJFUjtBQXVFUTtFQUVFLGdCQURZO0VBRVosWUFGWTtFQUdaLGdCQUhZO0FBbkV0QjtBQXdFVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF4RVo7QUEwRVk7RUFDRSwwQkFBQTtBQXhFZDtBQTZFUTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBQTNFVjtBQWdGTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE5RVI7QUErRVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSwwQ0FBQTtFQUNBLDhCQUFBO0VBRUEseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FBL0VWO0FBcUZJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFuRk47QUFxRk07RUFDRSx1QkFBQTtBQW5GUjtBQXVGUTtFQUNFLDZDQUFBO0FBckZWO0FBeUZNO0VBQ0UscUJBQUE7QUF2RlI7QUF3RlE7RUFDRSw4Q0FBQTtBQXRGVjtBQStGSTs7RUFFRSxVQUFBO0VBQ0EsWUFKSztFQUtMLFdBTEs7RUFNTCxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO1VBQUEsaUJBQUE7RUFFQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQS9GTjtBQWlHTTs7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQTlGUjtBQWtHSTtFQUFlLGNBQUE7QUEvRm5CO0FBZ0dJO0VBQWUsYUFBQTtBQTdGbkI7QUFpR0EsZUFBQTtBQUVBLHVCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBL0ZGO0FBaUdFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUEvRko7QUFrR0U7RUFDRSxrQkFBQTtBQWhHSjtBQWlHSTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUEvRk47QUFtR0U7RUFDRSwwQ0FBQTtFQUNBLDhCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFuR0o7QUFvR0k7RUFFRSxpQkFBQTtFQUNBLFlBRmdCO0VBR2hCLFdBSGdCO0FBaEd0QjtBQXdHQSxlQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcclxuICAmOnJvb3Qge1xyXG4gICAgLS1ob21lLWFubm91bmNlbWVudC1oZWlnaHQ6IDMzNXB4O1xyXG4gICAgLS1ob21lLWFubm91bmNlbWVudC13aWR0aCA6IDcxMHB4O1xyXG5cclxuICAgIC0taG9tZS1mZWF0dXJlLWN1cnJpY3VsYS1oZWlnaHQgOiAxNjBweDtcclxuXHJcbiAgfVxyXG5cclxuICBuZ3UtY2Fyb3VzZWwuY3VycmljdWx1bS1jb250YWluZXIgLm5ndWNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5ICAgICAgICAgOiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICBwYWRkaW5nICAgICAgICAgOiAyMHB4O1xyXG4gIGhlaWdodCAgICAgICAgICA6IDEwMCU7XHJcbn1cclxuXHJcbi50b3Atcm93IHsgbWFyZ2luLWJvdHRvbSAgIDogMjBweDsgfVxyXG4udG9wLXJvdywgLmJvdHRvbS1yb3cge1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gIDogcm93O1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IHN0cmV0Y2g7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1pdGVtIHtcclxuICAkd2lkdGggIDogMjkwcHg7XHJcblxyXG4gIC8qIFdpZHRoICovXHJcbiAgd2lkdGggICAgIDogJHdpZHRoO1xyXG4gIG1pbi13aWR0aCA6ICR3aWR0aDtcclxuICBtYXgtd2lkdGggOiAkd2lkdGg7XHJcblxyXG4gICYubWFuZGF0b3J5LXRyYWluaW5ncyB7XHJcbiAgICAvKiBIZWlnaHQgKi9cclxuICAgIGhlaWdodCAgICA6IHZhcigtLWhvbWUtYW5ub3VuY2VtZW50LWhlaWdodCk7XHJcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1ob21lLWFubm91bmNlbWVudC1oZWlnaHQpO1xyXG4gICAgbWF4LWhlaWdodDogdmFyKC0taG9tZS1hbm5vdW5jZW1lbnQtaGVpZ2h0KTtcclxuXHJcbiAgICA+IC5ib2R5IHtcclxuICAgICAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICAgICAgZmxleC1ncm93ICAgICAgIDogMTtcclxuICAgICAgb3ZlcmZsb3cgICAgICAgIDogYXV0bztcclxuICAgICAgcGFkZGluZyAgICAgICAgIDogMTVweDtcclxuXHJcbiAgICAgICYubm8tZGF0YS1jb250YWluZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtZGFya3doaXRlKTtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtbWQpO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS1tZCk7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmcgIDogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuXHJcbiAgICAgICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFyZ2luLWxlZnQgICA6IDIwcHg7XHJcbiAgZGlzcGxheSAgICAgICA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtcyAgIDogc3RyZXRjaDtcclxuXHJcbiAgPiAuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiB2YXIoLS1mb250LWxnKTtcclxuICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWJsYWNrKTtcclxuICAgIHRleHQtYWxpZ24gICAgOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogNXB4O1xyXG4gIH1cclxuXHJcbiAgPiAuYm9keSB7XHJcbiAgICBmb250LXNpemUgICAgIDogdmFyKC0tZm9udC1tZCk7XHJcbiAgICBsaW5lLWhlaWdodCAgIDogdmFyKC0tbGluZXNwYWNlLW1kKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDEyLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG5cclxuICAgICYuY29udGFjdC11cyB7XHJcbiAgICAgIC8qIEhlaWdodCAqL1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQgICAgOiB2YXIoLS1ob21lLWZlYXR1cmUtY3VycmljdWxhLWhlaWdodCk7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWhvbWUtZmVhdHVyZS1jdXJyaWN1bGEtaGVpZ2h0KTtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0taG9tZS1mZWF0dXJlLWN1cnJpY3VsYS1oZWlnaHQpO1xyXG5cclxuICAgICAgcGFkZGluZyAgIDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLyogI3JlZ2lvbiBBbm5vdW5jZW1lbnQgQ2Fyb3VzZWwgKi9cclxuXHJcbi5jYXJvdXNlbC1hbm5vdW5jZW1lbnQge1xyXG4gIGhlaWdodCAgOiB2YXIoLS1ob21lLWFubm91bmNlbWVudC1oZWlnaHQpO1xyXG4gIHdpZHRoICAgOiB2YXIoLS1ob21lLWFubm91bmNlbWVudC13aWR0aCk7XHJcblxyXG4gICYubm8tZGF0YS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG5cclxuICAgIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcbiAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LW1kKTtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS1tZCk7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG5cclxuICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAxMi41cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYW5ub3VuY2VtZW50LWNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodCAgICAgICAgICA6IHZhcigtLWhvbWUtYW5ub3VuY2VtZW50LWhlaWdodCk7XHJcbiAgd2lkdGggICAgICAgICAgIDogdmFyKC0taG9tZS1hbm5vdW5jZW1lbnQtd2lkdGgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgYmFja2dyb3VuZC1zaXplIDogY292ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzICAgOiAxMi41cHg7XHJcblxyXG4gIC5hbm5vdW5jZW1lbnQtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgIDogcmdiYSgkY29sb3I6ICM1ZjI0OWYsICRhbHBoYTogMC45KTtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgIDogMCAxNSUgMCAwO1xyXG4gICAgbWluLXdpZHRoICAgICAgICAgOiAzNzVweDtcclxuICAgIG1heC13aWR0aCAgICAgICAgIDogMzc1cHg7XHJcbiAgICBtaW4taGVpZ2h0ICAgICAgICA6IDMxMHB4O1xyXG4gICAgbWF4LWhlaWdodCAgICAgICAgOiAzMTBweDtcclxuICAgIG1hcmdpbi10b3AgICAgICAgIDogMTJweDtcclxuICAgIHBvc2l0aW9uICAgICAgICAgIDogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgICA6IGdyaWQ7XHJcblxyXG4gICAgPiAuY29udGVudCB7XHJcbiAgICAgIG1hcmdpbiAgICAgICAgOiAxOHB4IDIwcHg7XHJcbiAgICAgIGRpc3BsYXkgICAgICAgOiBmbGV4O1xyXG4gICAgICBmbGV4LWdyb3cgICAgIDogMTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXMgICA6IHN0cmV0Y2g7XHJcbiAgICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuXHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiB2YXIoLS1mb250LXhsKTtcclxuICAgICAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgICAgICB3aWR0aCAgICAgICAgIDogMjIycHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDE4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQtbWQpO1xyXG4gICAgICAgIGhlaWdodCAgICAgICAgOiA1NnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93ICAgICAgOiBoaWRkZW47XHJcblxyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgZGlzcGxheSAgICAgICAgICAgOiAtbW96LWJveDtcclxuICAgICAgICBsaW5lLWNsYW1wICAgICAgICA6IDM7XHJcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAgIC1tb3otbGluZS1jbGFtcCAgIDogMztcclxuICAgICAgICBib3gtb3JpZW50ICAgICAgICA6IHZlcnRpY2FsO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgLW1vei1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcclxuXHJcbiAgICAgICAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdyAgICAgOiBlbGxpcHNpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmsge1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC14cyk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodCAgICAgOiBib2xkO1xyXG4gICAgICAgIGFsaWduLXNlbGYgICAgICA6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgJjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbiA6IHVuZGVybGluZTsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3BhY2VyIHsgZmxleC1ncm93OiAxOyB9XHJcblxyXG4gICAgICAuZm9vdGVyIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGYgIDogZmxleC1lbmQ7XHJcbiAgICAgICAgZGlzcGxheSAgICAgICA6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtcyAgIDogY2VudGVyO1xyXG5cclxuICAgICAgICAucGFnZS1kb3Qge1xyXG4gICAgICAgICAgZmxleC1ncm93ICAgICA6IDE7XHJcbiAgICAgICAgICBkaXNwbGF5ICAgICAgIDogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtcyAgIDogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0ICA6IDEwMHB4O1xyXG5cclxuICAgICAgICAgIC5kb3Qge1xyXG4gICAgICAgICAgICAkZG90LXNpemUgICAgICAgICA6IDEwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQgICAgICAgIDogJGRvdC1zaXplO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0ICAgICAgICA6ICRkb3Qtc2l6ZTtcclxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgOiAkZG90LXNpemU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aCAgICAgICAgIDogJGRvdC1zaXplO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGggICAgICAgICA6ICRkb3Qtc2l6ZTtcclxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgICAgOiAkZG90LXNpemU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgICAgIDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgICAgICA6IDVweDtcclxuICAgICAgICAgICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1ncmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHQtcGFnZSB7XHJcbiAgICAgICAgICBkaXNwbGF5ICAgICAgIDogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtcyAgIDogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1zZWxmICA6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQteHMpO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbSA6IHNvbGlkIDAuNXB4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY3Vyc29yICAgICAgICA6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgLnJvdW5kLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yICAgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG5cclxuICAgICAgICAgICAgJGJ1dHRvbi1zaXplICA6IDMwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQgICAgOiAkYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQgICAgOiAkYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgOiAkYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aCAgICAgOiAkYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aCAgICAgOiAkYnV0dG9uLXNpemU7XHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgOiAkYnV0dG9uLXNpemU7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdCAgICAgOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgY29sb3IgICAgIDogaW5oZXJpdDtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0ICAgIDogMTVweDtcclxuICAgICAgICAgICAgd2lkdGggICAgIDogMTVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgZGl2IHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcblxyXG4vKiAjcmVnaW9uIE1hbmRhdG9yeSBUcmFpbmluZ3MgKi9cclxuLmNvdXJzZS1pdGVtIHtcclxuICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uICA6IGNvbHVtbjtcclxuICBjdXJzb3IgICAgICAgICAgOiBwb2ludGVyO1xyXG5cclxuICBib3JkZXItYm90dG9tICAgOiAxcHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gIHBhZGRpbmctYm90dG9tICA6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTBweDtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbSAgIDogbm9uZTtcclxuICAgIHBhZGRpbmctYm90dG9tICA6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b20gICA6IDBweDtcclxuICB9XHJcblxyXG4gIC5jb3Vyc2UtdGl0bGUge1xyXG4gICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1tZCk7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2UtbWQpO1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgIDogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbiA6IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC5sYWJlbC1kdWUsIC5sYWJlbC1zdGF0dXMge1xyXG4gICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1zbSk7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2Utc20pO1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgIDogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICB9XHJcblxyXG4gIC5sYWJlbC1kdWUgeyBtYXJnaW46IDVweCAwcHg7IH1cclxuXHJcbiAgLmxhYmVsLXN0YXR1cyB7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMjVweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDI0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcblxyXG4gICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uICA6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtZGFya3doaXRlKTtcclxuICAgICYuY29tcGxldGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWxpZ2h0Z3JlZW4pO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAmLnBlbmRpbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZDAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG5cclxuLyogI3JlZ2lvbiBDYXJvdXNlbCBDdXJyaWN1bHVtICovXHJcbi5jYXJvdXNlbC1jdXJyaWN1bHVtIHtcclxuICBkaXNwbGF5ICAgICAgIDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zICAgOiBzdHJldGNoO1xyXG4gIHdpZHRoICAgICAgICAgOiB2YXIoLS1ob21lLWFubm91bmNlbWVudC13aWR0aCk7XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplICAgICA6IHZhcigtLWZvbnQtbGcpO1xyXG4gICAgY29sb3IgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtYmxhY2spO1xyXG4gICAgdGV4dC1hbGlnbiAgICA6IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b20gOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDE1cHg7XHJcblxyXG4gICAgaGVpZ2h0ICAgIDogdmFyKC0taG9tZS1mZWF0dXJlLWN1cnJpY3VsYS1oZWlnaHQpO1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0taG9tZS1mZWF0dXJlLWN1cnJpY3VsYS1oZWlnaHQpO1xyXG4gICAgbWF4LWhlaWdodDogdmFyKC0taG9tZS1mZWF0dXJlLWN1cnJpY3VsYS1oZWlnaHQpO1xyXG5cclxuICAgICYubm8tZGF0YS1jb250YWluZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWRhcmt3aGl0ZSk7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuXHJcbiAgICAgIHRleHQtYWxpZ24gICAgICA6IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICAgICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1tZCk7XHJcbiAgICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS1tZCk7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nICA6IHZhcigtLW5vLWNoYXItc3BhY2luZyk7XHJcblxyXG4gICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIG5ndS1jYXJvdXNlbC5jdXJyaWN1bHVtLWNvbnRhaW5lciB7XHJcbiAgICAgIGhlaWdodCAgICA6IGluaGVyaXQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IGluaGVyaXQ7XHJcblxyXG4gICAgICB3aWR0aCAgICAgOiBpbmhlcml0O1xyXG4gICAgICBtaW4td2lkdGggOiBpbmhlcml0O1xyXG4gICAgICBtYXgtd2lkdGggOiBpbmhlcml0O1xyXG5cclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZyAgIDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyaWN1bHVtLWl0ZW0ge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgJHdpZHRoICAgIDogMjMwcHg7XHJcbiAgICAgIG1pbi13aWR0aCA6ICR3aWR0aDtcclxuICAgICAgd2lkdGggICAgIDogJHdpZHRoO1xyXG4gICAgICBtYXgtd2lkdGggOiAkd2lkdGg7XHJcblxyXG4gICAgICAkaGVpZ2h0ICAgOiB2YXIoLS1ob21lLWZlYXR1cmUtY3VycmljdWxhLWhlaWdodCk7XHJcbiAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICAgIGhlaWdodCAgICA6ICRoZWlnaHQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zICAgICA6IHN0cmV0Y2g7XHJcblxyXG4gICAgICBwYWRkaW5nICAgOiAxMHB4O1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgICAgIGhlaWdodCAgICAgICAgICA6IHZhcigtLWhvbWUtZmVhdHVyZS1jdXJyaWN1bGEtaGVpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1cyAgIDogMTBweDtcclxuXHJcbiAgICAgID4gLnRpdGxlIHtcclxuICAgICAgICAkaGVhZGVyLWhlaWdodDogNDBweDtcclxuICAgICAgICBtaW4taGVpZ2h0ICAgICAgOiAkaGVhZGVyLWhlaWdodDtcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgOiAkaGVhZGVyLWhlaWdodDtcclxuICAgICAgICBtYXgtaGVpZ2h0ICAgICAgOiAkaGVhZGVyLWhlaWdodDtcclxuXHJcbiAgICAgICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gICA6IDVweDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1tZCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICAgIDogdmFyKC0tbGluZXNwYWNlLW1kKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQ7XHJcblxyXG4gICAgICAgIC5vdmVyZmxvdy10ZXh0IHtcclxuICAgICAgICAgIGRpc3BsYXkgICAgICAgICAgIDogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICBkaXNwbGF5ICAgICAgICAgICA6IC1tb3otYm94O1xyXG4gICAgICAgICAgbGluZS1jbGFtcCAgICAgICAgOiAyO1xyXG4gICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgLW1vei1saW5lLWNsYW1wICAgOiAyO1xyXG4gICAgICAgICAgYm94LW9yaWVudCAgICAgICAgOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAtbW96LWJveC1vcmllbnQgICA6IHZlcnRpY2FsO1xyXG5cclxuICAgICAgICAgIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xyXG4gICAgICAgICAgbWF4LWhlaWdodCAgICAgICAgOiBpbmhlcml0O1xyXG4gICAgICAgICAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XHJcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93ICAgICA6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgY3Vyc29yICAgICAgICAgICAgOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgIDpob3ZlciB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbiA6IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmbGV4LWdyb3cgOiAxO1xyXG5cclxuICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAgIDogNXB4O1xyXG5cclxuICAgICAgICAuZGVzYy1jb250YWluZXIge1xyXG4gICAgICAgICAgJGhlaWdodCAgIDogNjBweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQgICAgOiAkaGVpZ2h0O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogJGhlaWdodDtcclxuXHJcbiAgICAgICAgICAub3ZlcmZsb3ctdGV4dCB7XHJcbiAgICAgICAgICAgIGN1cnNvciAgICAgICAgICA6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2UtbGcpO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheSAgICAgICAgICAgOiAtd2Via2l0LWJveDtcclxuICAgICAgICAgICAgZGlzcGxheSAgICAgICAgICAgOiAtbW96LWJveDtcclxuICAgICAgICAgICAgbGluZS1jbGFtcCAgICAgICAgOiAzO1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgICAgIC1tb3otbGluZS1jbGFtcCAgIDogMztcclxuICAgICAgICAgICAgYm94LW9yaWVudCAgICAgICAgOiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAgICAgLW1vei1ib3gtb3JpZW50ICAgOiB2ZXJ0aWNhbDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ24gICAgICAgIDogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0ICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG92ZXJmbG93ICAgICAgICAgIDogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93ICAgICA6IGVsbGlwc2lzO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uIDogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubm8tZGVzYy1jb250YWluZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1zbSk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2UtbGcpO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmcgIDogdmFyKC0tbm8tY2hhci1zcGFjaW5nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICA+IC5hY3Rpb24ge1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb24gIDogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICBjdXJzb3IgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgICAgICAgaGVpZ2h0ICAgICAgICAgIDogMjRweDtcclxuICAgICAgICAgIHdpZHRoICAgICAgICAgICA6IDEyOHB4O1xyXG4gICAgICAgICAgYm9yZGVyICAgICAgICAgIDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDhweDtcclxuXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLW9yYW5nZSk7XHJcbiAgICAgICAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuXHJcbiAgICAgICAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LXNtKTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS1zbSk7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ3UtaXRlbSB7XHJcbiAgICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgICAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICAgICAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uICA6IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgzbiArIDEpIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoM24gKyAyKSB7XHJcbiAgICAgICAgLmN1cnJpY3VsdW0taXRlbSAuYWN0aW9uIC5idXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1saWdodGJsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoM24gKyAzKSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIC5jdXJyaWN1bHVtLWl0ZW0gLmFjdGlvbiAuYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtbGlnaHRncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgJHNpemU6IDI1cHg7XHJcbiAgICAucHJldi1idXR0b24sXHJcbiAgICAubmV4dC1idXR0b24ge1xyXG4gICAgICB6LWluZGV4ICAgOiAzO1xyXG4gICAgICBoZWlnaHQgICAgOiAkc2l6ZTtcclxuICAgICAgd2lkdGggICAgIDogJHNpemU7XHJcbiAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xyXG4gICAgICB0b3AgICAgICAgOiBjYWxjKDUwJSAtICN7JHNpemUgLyAyfSk7XHJcbiAgICAgIGN1cnNvciAgICA6IHBvaW50ZXI7XHJcblxyXG4gICAgICB1c2VyLXNlbGVjdCAgICAgOiBub25lO1xyXG5cclxuICAgICAgYmFja2dyb3VuZCAgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuICAgICAgYm9yZGVyICAgICAgICA6IHNvbGlkIDFweCB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcbiAgICAgIGNvbG9yICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1cyA6IDUwJTtcclxuXHJcbiAgICAgIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcclxuICAgICAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemUgICAgICAgOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5leHQtYnV0dG9uIHsgcmlnaHQ6IC0jeyRzaXplIC8gMn07IH1cclxuICAgIC5wcmV2LWJ1dHRvbiB7IGxlZnQ6IC0jeyRzaXplIC8gMn07IH1cclxuICB9XHJcbn1cclxuXHJcbi8qICNlbmRyZWdpb24gKi9cclxuXHJcbi8qICNyZWdpb24gQ29udGFjdCBVcyAqL1xyXG4uY29udGFjdC11cyB7XHJcbiAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiAgOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbiAgLmNvbnRhY3QtdGV4dCwgYnV0dG9uLmVtYWlsLWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LXNtKTtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICA6IHZhcigtLWxpbmVzcGFjZS1sZyk7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uIDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1dHRvbi5lbWFpbC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcblxyXG4gICAgY3Vyc29yICAgICAgOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyICAgICAgOiBub25lO1xyXG4gICAgd2lkdGggICAgICAgOiAxNzZweDtcclxuICAgIGhlaWdodCAgICAgIDogMzZweDtcclxuXHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogOHB4O1xyXG4gICAgLmljb24ge1xyXG4gICAgICAkaWNvbi1zaXplICAgIDogMTZweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0ICA6IDhweDtcclxuICAgICAgaGVpZ2h0ICAgICAgICA6ICRpY29uLXNpemU7XHJcbiAgICAgIHdpZHRoICAgICAgICAgOiAkaWNvbi1zaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuLyogI2VuZHJlZ2lvbiAqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_others_service__WEBPACK_IMPORTED_MODULE_7__["OthersService"] }, { type: src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_8__["MandatoryTrainingService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_9__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_10__["ExamService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_12__["UserExamService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_13__["CurriculumService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_14__["DialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"] }]; }, null); })();


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngu/carousel */ "Mh1x");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _ngu_carousel__WEBPACK_IMPORTED_MODULE_4__["NguCarouselModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Mh1x":
/*!**************************************************************************!*\
  !*** ./node_modules/@ngu/carousel/__ivy_ngcc__/fesm2015/ngu-carousel.js ***!
  \**************************************************************************/
/*! exports provided: NguCarousel, NguCarouselConfig, NguCarouselDefDirective, NguCarouselItemDirective, NguCarouselModule, NguCarouselNextDirective, NguCarouselOutlet, NguCarouselPointDirective, NguCarouselPrevDirective, NguCarouselStore, NguItemComponent, NguTileComponent, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return NguCarousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselConfig", function() { return NguCarouselConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselDefDirective", function() { return NguCarouselDefDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselItemDirective", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return NguCarouselModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselNextDirective", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselOutlet", function() { return NguCarouselOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPointDirective", function() { return NguCarouselPointDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPrevDirective", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return NguCarouselStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguItemComponent", function() { return NguItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguTileComponent", function() { return NguTileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NguButton; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







const _c0 = ["ngucarousel"];
const _c1 = ["nguItemsContainer"];
const _c2 = ["touchContainer"];
const _c3 = [[["", "NguCarouselPrev", ""]], [["", "NguCarouselNext", ""]], [["", "NguCarouselPoint", ""]]];
const _c4 = ["[NguCarouselPrev]", "[NguCarouselNext]", "[NguCarouselPoint]"];
const _c5 = ["*"];
class NguCarouselStore {
    constructor(touch = new Touch(), vertical = new Vertical(), interval, transform = new Transfrom(), button, visibleItems, deviceType, type = 'fixed', token = '', items = 0, load = 0, deviceWidth = 0, carouselWidth = 0, itemWidth = 0, slideItems = 0, itemWidthPer = 0, itemLength = 0, currentSlide = 0, easing = 'cubic-bezier(0, 0, 0.2, 1)', speed = 200, loop = false, dexVal = 0, touchTransform = 0, isEnd = false, isFirst = true, isLast = false, RTL = false, point = true, velocity = 1) {
        this.touch = touch;
        this.vertical = vertical;
        this.interval = interval;
        this.transform = transform;
        this.button = button;
        this.visibleItems = visibleItems;
        this.deviceType = deviceType;
        this.type = type;
        this.token = token;
        this.items = items;
        this.load = load;
        this.deviceWidth = deviceWidth;
        this.carouselWidth = carouselWidth;
        this.itemWidth = itemWidth;
        this.slideItems = slideItems;
        this.itemWidthPer = itemWidthPer;
        this.itemLength = itemLength;
        this.currentSlide = currentSlide;
        this.easing = easing;
        this.speed = speed;
        this.loop = loop;
        this.dexVal = dexVal;
        this.touchTransform = touchTransform;
        this.isEnd = isEnd;
        this.isFirst = isFirst;
        this.isLast = isLast;
        this.RTL = RTL;
        this.point = point;
        this.velocity = velocity;
    }
}
class ItemsControl {
}
class Vertical {
}
class NguButton {
}
class Touch {
}
class Transfrom {
    constructor(xs = 0, sm = 0, md = 0, lg = 0, all = 0) {
        this.xs = xs;
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.all = all;
        this.xl = 0;
    }
}
/**
 * Default values
 * {sm: 768, md: 992, lg: 1200, xl: 1200}
 *
 * Bootstrap values:
 * {sm: 576, md: 768, lg: 992, xl: 1200}
 */
class Breakpoints {
    constructor(sm = 768, md = 992, lg = 1200, xl = 1200) {
        this.sm = sm;
        this.md = md;
        this.lg = lg;
        this.xl = xl;
    }
}
class NguCarouselConfig {
}
class NguCarouselOutletContext {
    constructor(data) {
        this.$implicit = data;
    }
}

class NguCarouselItemDirective {
}
NguCarouselItemDirective.ɵfac = function NguCarouselItemDirective_Factory(t) { return new (t || NguCarouselItemDirective)(); };
NguCarouselItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselItemDirective, selectors: [["", "NguCarouselItem", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselItemDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselItem]'
            }]
    }], null, null); })();
class NguCarouselNextDirective {
}
NguCarouselNextDirective.ɵfac = function NguCarouselNextDirective_Factory(t) { return new (t || NguCarouselNextDirective)(); };
NguCarouselNextDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselNextDirective, selectors: [["", "NguCarouselNext", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselNextDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselNext]'
            }]
    }], null, null); })();
class NguCarouselPrevDirective {
}
NguCarouselPrevDirective.ɵfac = function NguCarouselPrevDirective_Factory(t) { return new (t || NguCarouselPrevDirective)(); };
NguCarouselPrevDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselPrevDirective, selectors: [["", "NguCarouselPrev", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselPrevDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPrev]'
            }]
    }], null, null); })();
class NguCarouselPointDirective {
}
NguCarouselPointDirective.ɵfac = function NguCarouselPointDirective_Factory(t) { return new (t || NguCarouselPointDirective)(); };
NguCarouselPointDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselPointDirective, selectors: [["", "NguCarouselPoint", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselPointDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[NguCarouselPoint]'
            }]
    }], null, null); })();
class NguCarouselDefDirective {
    constructor(template) {
        this.template = template;
    }
}
NguCarouselDefDirective.ɵfac = function NguCarouselDefDirective_Factory(t) { return new (t || NguCarouselDefDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
NguCarouselDefDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselDefDirective, selectors: [["", "nguCarouselDef", ""]] });
NguCarouselDefDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselDefDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselDef]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, null); })();
// tslint:disable-next-line:directive-class-suffix
class NguCarouselOutlet {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
}
NguCarouselOutlet.ɵfac = function NguCarouselOutlet_Factory(t) { return new (t || NguCarouselOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])); };
NguCarouselOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NguCarouselOutlet, selectors: [["", "nguCarouselOutlet", ""]] });
NguCarouselOutlet.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[nguCarouselOutlet]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]; }, null); })();

// @dynamic
// @dynamic
// tslint:disable-next-line:component-class-suffix
class NguCarousel extends NguCarouselStore {
    constructor(_el, _renderer, _differs, platformId, cdr) {
        super();
        this._el = _el;
        this._renderer = _renderer;
        this._differs = _differs;
        this.platformId = platformId;
        this.cdr = cdr;
        this.withAnim = true;
        this.isHovered = false;
        this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-next-line:no-output-on-prefix
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._intervalController$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pointNumbers = [];
    }
    get dataSource() {
        return this._dataSource;
    }
    set dataSource(data) {
        if (data) {
            this._switchDataSource(data);
        }
    }
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    set nextBtn(btn) {
        this.listener2 && this.listener2();
        if (btn) {
            this.listener2 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(1));
        }
    }
    /** The setter is used to catch the button if the button has ngIf
     * issue id #91
     */
    set prevBtn(btn) {
        this.listener1 && this.listener1();
        if (btn) {
            this.listener1 = this._renderer.listen(btn.nativeElement, 'click', () => this._carouselScrollOne(0));
        }
    }
    /**
     * Tracking function that will be used to check the differences in data changes. Used similarly
     * to `ngFor` `trackBy` function. Optimize Items operations by identifying a Items based on its data
     * relative to the function to know if a Items should be added/removed/moved.
     * Accepts a function that takes two parameters, `index` and `item`.
     */
    get trackBy() {
        return this._trackByFn;
    }
    set trackBy(fn) {
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && fn != null && typeof fn !== 'function' && console && console.warn) {
            console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
        }
        this._trackByFn = fn;
    }
    ngOnInit() {
        this._dataDiffer = this._differs.find([]).create((_i, item) => {
            return this.trackBy ? this.trackBy(_i, item) : item;
        });
    }
    ngDoCheck() {
        this.arrayChanges = this._dataDiffer.diff(this.dataSource);
        if (this.arrayChanges && this._defDirec) {
            this._observeRenderChanges();
        }
    }
    _switchDataSource(dataSource) {
        this._dataSource = dataSource;
        if (this._defDirec) {
            this._observeRenderChanges();
        }
    }
    _observeRenderChanges() {
        let dataStream;
        if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]) {
            dataStream = this._dataSource;
        }
        else if (Array.isArray(this._dataSource)) {
            dataStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this._dataSource);
        }
        if (dataStream) {
            this._dataSubscription = dataStream
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._intervalController$))
                .subscribe(data => {
                this.renderNodeChanges(data);
                this.isLast = false;
            });
        }
    }
    renderNodeChanges(data, viewContainer = this._nodeOutlet.viewContainer) {
        if (!this.arrayChanges)
            return;
        this.arrayChanges.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
            const node = this._getNodeDef(data[currentIndex], currentIndex);
            if (item.previousIndex == null) {
                const context = new NguCarouselOutletContext(data[currentIndex]);
                context.index = currentIndex;
                viewContainer.createEmbeddedView(node.template, context, currentIndex);
            }
            else if (currentIndex == null) {
                viewContainer.remove(adjustedPreviousIndex);
            }
            else {
                const view = viewContainer.get(adjustedPreviousIndex);
                viewContainer.move(view, currentIndex);
            }
        });
        this._updateItemIndexContext();
        if (this.carousel) {
            this._storeCarouselData();
        }
    }
    /**
     * Updates the index-related context for each row to reflect any changes in the index of the rows,
     * e.g. first/last/even/odd.
     */
    _updateItemIndexContext() {
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    _getNodeDef(data, i) {
        if (this._defDirec.length === 1) {
            return this._defDirec.first;
        }
        const nodeDef = this._defDirec.find(def => def.when && def.when(i, data)) || this._defaultNodeDef;
        return nodeDef;
    }
    ngAfterViewInit() {
        this.carousel = this._el.nativeElement;
        this._inputValidation();
        this.carouselCssNode = this._createStyleElem();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this._carouselInterval();
            if (!this.vertical.enabled) {
                this._touch();
            }
            this.listener3 = this._renderer.listen('window', 'resize', event => {
                this._onResizing(event);
            });
            this._onWindowScrolling();
        }
    }
    ngAfterContentInit() {
        this._observeRenderChanges();
        this.cdr.markForCheck();
    }
    _inputValidation() {
        this.inputs.gridBreakpoints = this.inputs.gridBreakpoints ? this.inputs.gridBreakpoints : new Breakpoints();
        if (this.inputs.grid.xl === undefined) {
            this.inputs.grid.xl = this.inputs.grid.lg;
        }
        this.type = this.inputs.grid.all !== 0 ? 'fixed' : 'responsive';
        this.loop = this.inputs.loop || false;
        this.inputs.easing = this.inputs.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.touch.active = this.inputs.touch || false;
        this.RTL = this.inputs.RTL ? true : false;
        this.interval = this.inputs.interval || null;
        this.velocity = typeof this.inputs.velocity === 'number' ? this.inputs.velocity : this.velocity;
        if (this.inputs.vertical && this.inputs.vertical.enabled) {
            this.vertical.enabled = this.inputs.vertical.enabled;
            this.vertical.height = this.inputs.vertical.height;
        }
        this.directionSym = this.RTL ? '' : '-';
        this.point =
            this.inputs.point && typeof this.inputs.point.visible !== 'undefined'
                ? this.inputs.point.visible
                : true;
        this._carouselSize();
    }
    ngOnDestroy() {
        this.carouselInt && this.carouselInt.unsubscribe();
        this._intervalController$.unsubscribe();
        this.carouselLoad.complete();
        this.onMove.complete();
        /** remove listeners */
        clearTimeout(this.onScrolling);
        for (let i = 1; i <= 4; i++) {
            const str = `listener${i}`;
            this[str] && this[str]();
        }
    }
    _onResizing(event) {
        clearTimeout(this.onResize);
        this.onResize = setTimeout(() => {
            if (this.deviceWidth !== event.target.outerWidth) {
                this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
                this._storeCarouselData();
            }
        }, 500);
    }
    /** Get Touch input */
    _touch() {
        if (this.inputs.touch) {
            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! hammerjs */ "yLV6", 7)).then(() => {
                const hammertime = new Hammer(this.touchContainer.nativeElement);
                hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
                hammertime.on('panstart', (ev) => {
                    this.carouselWidth = this.nguItemsContainer.nativeElement.offsetWidth;
                    this.touchTransform = this.transform[this.deviceType];
                    this.dexVal = 0;
                    this._setStyle(this.nguItemsContainer.nativeElement, 'transition', '');
                });
                if (this.vertical.enabled) {
                    hammertime.on('panup', (ev) => {
                        this._touchHandling('panleft', ev);
                    });
                    hammertime.on('pandown', (ev) => {
                        this._touchHandling('panright', ev);
                    });
                }
                else {
                    hammertime.on('panleft', (ev) => {
                        this._touchHandling('panleft', ev);
                    });
                    hammertime.on('panright', (ev) => {
                        this._touchHandling('panright', ev);
                    });
                }
                hammertime.on('panend pancancel', (ev) => {
                    if (Math.abs(ev.velocity) >= this.velocity) {
                        this.touch.velocity = ev.velocity;
                        let direc = 0;
                        if (!this.RTL) {
                            direc = this.touch.swipe === 'panright' ? 0 : 1;
                        }
                        else {
                            direc = this.touch.swipe === 'panright' ? 1 : 0;
                        }
                        this._carouselScrollOne(direc);
                    }
                    else {
                        this.dexVal = 0;
                        this._setStyle(this.nguItemsContainer.nativeElement, 'transition', 'transform 324ms cubic-bezier(0, 0, 0.2, 1)');
                        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
                    }
                });
                hammertime.on('hammer.input', ev => {
                    // allow nested touch events to no propagate, this may have other side affects but works for now.
                    // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                    ev.srcEvent.stopPropagation();
                });
            });
        }
    }
    /** handle touch input */
    _touchHandling(e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(this.vertical.enabled ? ev.deltaY : ev.deltaX);
        let valt = ev - this.dexVal;
        valt =
            this.type === 'responsive'
                ? (Math.abs(ev - this.dexVal) /
                    (this.vertical.enabled ? this.vertical.height : this.carouselWidth)) *
                    100
                : valt;
        this.dexVal = ev;
        this.touch.swipe = e;
        this._setTouchTransfrom(e, valt);
        this._setTransformFromTouch();
    }
    _setTouchTransfrom(e, valt) {
        const condition = this.RTL ? 'panright' : 'panleft';
        this.touchTransform = e === condition ? valt + this.touchTransform : this.touchTransform - valt;
    }
    _setTransformFromTouch() {
        if (this.touchTransform < 0) {
            this.touchTransform = 0;
        }
        const type = this.type === 'responsive' ? '%' : 'px';
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', this.vertical.enabled
            ? `translate3d(0, ${this.directionSym}${this.touchTransform}${type}, 0)`
            : `translate3d(${this.directionSym}${this.touchTransform}${type}, 0, 0)`);
    }
    /** this fn used to disable the interval when it is not on the viewport */
    _onWindowScrolling() {
        const top = this.carousel.offsetTop;
        const scrollY = window.scrollY;
        const heightt = window.innerHeight;
        const carouselHeight = this.carousel.offsetHeight;
        const isCarouselOnScreen = top <= scrollY + heightt - carouselHeight / 4 && top + carouselHeight / 2 >= scrollY;
        if (isCarouselOnScreen) {
            this._intervalController$.next(1);
        }
        else {
            this._intervalController$.next(0);
        }
    }
    /** store data based on width of the screen for the carousel */
    _storeCarouselData() {
        const breakpoints = this.inputs.gridBreakpoints;
        this.deviceWidth = Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId) ? window.innerWidth : breakpoints.xl;
        this.carouselWidth = this.carouselMain1.nativeElement.offsetWidth;
        if (this.type === 'responsive') {
            this.deviceType =
                this.deviceWidth >= breakpoints.xl
                    ? 'xl'
                    : this.deviceWidth >= breakpoints.lg
                        ? 'lg'
                        : this.deviceWidth >= breakpoints.md
                            ? 'md'
                            : this.deviceWidth >= breakpoints.sm
                                ? 'sm'
                                : 'xs';
            this.items = this.inputs.grid[this.deviceType];
            this.itemWidth = this.carouselWidth / this.items;
        }
        else {
            this.items = Math.trunc(this.carouselWidth / this.inputs.grid.all);
            this.itemWidth = this.inputs.grid.all;
            this.deviceType = 'all';
        }
        this.slideItems = +(this.inputs.slide < this.items ? this.inputs.slide : this.items);
        this.load = this.inputs.load >= this.slideItems ? this.inputs.load : this.slideItems;
        this.speed = this.inputs.speed && this.inputs.speed > -1 ? this.inputs.speed : 400;
        this._carouselPoint();
    }
    /** Used to reset the carousel */
    reset(withOutAnimation) {
        withOutAnimation && (this.withAnim = false);
        this.carouselCssNode.innerHTML = '';
        this.moveTo(0);
        this._carouselPoint();
    }
    /** Init carousel point */
    _carouselPoint() {
        const Nos = this.dataSource.length - (this.items - this.slideItems);
        this.pointIndex = Math.ceil(Nos / this.slideItems);
        const pointers = [];
        if (this.pointIndex > 1 || !this.inputs.point.hideOnSingleSlide) {
            for (let i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        this._carouselPointActiver();
        if (this.pointIndex <= 1) {
            this._btnBoolean(1, 1);
        }
        else {
            if (this.currentSlide === 0 && !this.loop) {
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
            }
        }
    }
    /** change the active point in carousel */
    _carouselPointActiver() {
        const i = Math.ceil(this.currentSlide / this.slideItems);
        this.activePoint = i;
        this.cdr.markForCheck();
    }
    /** this function is used to scoll the carousel when point is clicked */
    moveTo(slide, withOutAnimation) {
        // slide = slide - 1;
        withOutAnimation && (this.withAnim = false);
        if (this.activePoint !== slide && slide < this.pointIndex) {
            let slideremains;
            const btns = this.currentSlide < slide ? 1 : 0;
            switch (slide) {
                case 0:
                    this._btnBoolean(1, 0);
                    slideremains = slide * this.slideItems;
                    break;
                case this.pointIndex - 1:
                    this._btnBoolean(0, 1);
                    slideremains = this.dataSource.length - this.items;
                    break;
                default:
                    this._btnBoolean(0, 0);
                    slideremains = slide * this.slideItems;
            }
            this._carouselScrollTwo(btns, slideremains, this.speed);
        }
    }
    /** set the style of the carousel based the inputs data */
    _carouselSize() {
        this.token = this._generateID();
        let dism = '';
        this.styleid = `.${this.token} > .ngucarousel > .ngu-touch-container > .ngucarousel-items`;
        if (this.inputs.custom === 'banner') {
            this._renderer.addClass(this.carousel, 'banner');
        }
        if (this.inputs.animation === 'lazy') {
            dism += `${this.styleid} > .item {transition: transform .6s ease;}`;
        }
        const breakpoints = this.inputs.gridBreakpoints;
        let itemStyle = '';
        if (this.vertical.enabled) {
            const itemWidthXS = `${this.styleid} > .item {height: ${this.vertical.height /
                +this.inputs.grid.xs}px}`;
            const itemWidthSM = `${this.styleid} > .item {height: ${this.vertical.height /
                +this.inputs.grid.sm}px}`;
            const itemWidthMD = `${this.styleid} > .item {height: ${this.vertical.height /
                +this.inputs.grid.md}px}`;
            const itemWidthLG = `${this.styleid} > .item {height: ${this.vertical.height /
                +this.inputs.grid.lg}px}`;
            const itemWidthXL = `${this.styleid} > .item {height: ${this.vertical.height /
                +this.inputs.grid.xl}px}`;
            itemStyle = `@media (max-width:${breakpoints.sm - 1}px){${itemWidthXS}}
                    @media (max-width:${breakpoints.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints.xl}px){${itemWidthXL}}`;
        }
        else if (this.type === 'responsive') {
            const itemWidthXS = this.inputs.type === 'mobile'
                ? `${this.styleid} .item {flex: 0 0 ${95 / +this.inputs.grid.xs}%; width: ${95 /
                    +this.inputs.grid.xs}%;}`
                : `${this.styleid} .item {flex: 0 0 ${100 / +this.inputs.grid.xs}%; width: ${100 /
                    +this.inputs.grid.xs}%;}`;
            const itemWidthSM = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.sm}%; width: ${100 / +this.inputs.grid.sm}%}`;
            const itemWidthMD = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.md}%; width: ${100 / +this.inputs.grid.md}%}`;
            const itemWidthLG = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.lg}%; width: ${100 / +this.inputs.grid.lg}%}`;
            const itemWidthXL = `${this.styleid} > .item {flex: 0 0 ${100 /
                +this.inputs.grid.xl}%; width: ${100 / +this.inputs.grid.xl}%}`;
            itemStyle = `@media (max-width:${breakpoints.sm - 1}px){${itemWidthXS}}
                    @media (min-width:${breakpoints.sm}px){${itemWidthSM}}
                    @media (min-width:${breakpoints.md}px){${itemWidthMD}}
                    @media (min-width:${breakpoints.lg}px){${itemWidthLG}}
                    @media (min-width:${breakpoints.xl}px){${itemWidthXL}}`;
        }
        else {
            itemStyle = `${this.styleid} .item {flex: 0 0 ${this.inputs.grid.all}px; width: ${this.inputs.grid.all}px;}`;
        }
        this._renderer.addClass(this.carousel, this.token);
        if (this.vertical.enabled) {
            this._renderer.addClass(this.nguItemsContainer.nativeElement, 'nguvertical');
            this._renderer.setStyle(this.carouselMain1.nativeElement, 'height', `${this.vertical.height}px`);
        }
        // tslint:disable-next-line:no-unused-expression
        this.RTL && !this.vertical.enabled && this._renderer.addClass(this.carousel, 'ngurtl');
        this._createStyleElem(`${dism} ${itemStyle}`);
        this._storeCarouselData();
    }
    /** logic to scroll the carousel step 1 */
    _carouselScrollOne(Btn) {
        let itemSpeed = this.speed;
        let translateXval = 0;
        let currentSlide = 0;
        const touchMove = Math.ceil(this.dexVal / this.itemWidth);
        this._setStyle(this.nguItemsContainer.nativeElement, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 && ((!this.loop && !this.isFirst) || this.loop)) {
            const currentSlideD = this.currentSlide - this.slideItems;
            const MoveSlide = currentSlideD + this.slideItems;
            this._btnBoolean(0, 1);
            if (this.currentSlide === 0) {
                currentSlide = this.dataSource.length - this.items;
                itemSpeed = 400;
                this._btnBoolean(0, 1);
            }
            else if (this.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide - this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.loop && !this.isLast) || this.loop)) {
            if (this.dataSource.length <= this.currentSlide + this.items + this.slideItems &&
                !this.isLast) {
                currentSlide = this.dataSource.length - this.items;
                this._btnBoolean(0, 1);
            }
            else if (this.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this._btnBoolean(1, 0);
            }
            else {
                this._btnBoolean(0, 0);
                if (touchMove > this.slideItems) {
                    currentSlide = this.currentSlide + this.slideItems + (touchMove - this.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.currentSlide + this.slideItems;
                }
            }
            this._carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
    }
    /** logic to scroll the carousel step 2 */
    _carouselScrollTwo(Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        if (this.dexVal !== 0) {
            const val = Math.abs(this.touch.velocity);
            let somt = Math.floor((this.dexVal / val / this.dexVal) * (this.deviceWidth - this.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.dexVal = 0;
        }
        if (this.withAnim) {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', `transform ${itemSpeed}ms ${this.inputs.easing}`);
            this.inputs.animation &&
                this._carouselAnimator(Btn, currentSlide + 1, currentSlide + this.items, itemSpeed, Math.abs(this.currentSlide - currentSlide));
        }
        else {
            this._setStyle(this.nguItemsContainer.nativeElement, 'transition', ``);
        }
        this.itemLength = this.dataSource.length;
        this._transformStyle(currentSlide);
        this.currentSlide = currentSlide;
        this.onMove.emit(this);
        this._carouselPointActiver();
        this._carouselLoadTrigger();
        this.withAnim = true;
    }
    /** boolean function for making isFirst and isLast */
    _btnBoolean(first, last) {
        this.isFirst = !!first;
        this.isLast = !!last;
    }
    _transformString(grid, slide) {
        let collect = '';
        collect += `${this.styleid} { transform: translate3d(`;
        if (this.vertical.enabled) {
            this.transform[grid] = (this.vertical.height / this.inputs.grid[grid]) * slide;
            collect += `0, -${this.transform[grid]}px, 0`;
        }
        else {
            this.transform[grid] = (100 / this.inputs.grid[grid]) * slide;
            collect += `${this.directionSym}${this.transform[grid]}%, 0, 0`;
        }
        collect += `); }`;
        return collect;
    }
    /** set the transform style to scroll the carousel  */
    _transformStyle(slide) {
        let slideCss = '';
        if (this.type === 'responsive') {
            const breakpoints = this.inputs.gridBreakpoints;
            slideCss = `@media (max-width: ${breakpoints.sm - 1}px) {${this._transformString('xs', slide)}}
      @media (min-width: ${breakpoints.sm}px) {${this._transformString('sm', slide)} }
      @media (min-width: ${breakpoints.md}px) {${this._transformString('md', slide)} }
      @media (min-width: ${breakpoints.lg}px) {${this._transformString('lg', slide)} }
      @media (min-width: ${breakpoints.xl}px) {${this._transformString('xl', slide)} }`;
        }
        else {
            this.transform.all = this.inputs.grid.all * slide;
            slideCss = `${this.styleid} { transform: translate3d(${this.directionSym}${this.transform.all}px, 0, 0);`;
        }
        this.carouselCssNode.textContent = slideCss;
    }
    /** this will trigger the carousel to load the items */
    _carouselLoadTrigger() {
        if (typeof this.inputs.load === 'number') {
            this.dataSource.length - this.load <= this.currentSlide + this.items &&
                this.carouselLoad.emit(this.currentSlide);
        }
    }
    /** generate Class for each carousel to set specific style */
    _generateID() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return `ngucarousel${text}`;
    }
    /** handle the auto slide */
    _carouselInterval() {
        const container = this.carouselMain1.nativeElement;
        if (this.interval && this.loop) {
            this.listener4 = this._renderer.listen('window', 'scroll', () => {
                clearTimeout(this.onScrolling);
                this.onScrolling = setTimeout(() => {
                    this._onWindowScrolling();
                }, 600);
            });
            const play$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'mouseleave').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
            const pause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'mouseenter').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(0));
            const touchPlay$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
            const touchPause$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(container, 'touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(0));
            const interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(this.inputs.interval.timing).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(1));
            setTimeout(() => {
                this.carouselInt = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(play$, touchPlay$, pause$, touchPause$, this._intervalController$)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(val => {
                    this.isHovered = !val;
                    this.cdr.markForCheck();
                    return val ? interval$ : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
                }))
                    .subscribe(res => {
                    this._carouselScrollOne(1);
                });
            }, this.interval.initialDelay);
        }
    }
    _updateItemIndexContextAni() {
        const viewContainer = this._nodeOutlet.viewContainer;
        for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
            const viewRef = viewContainer.get(renderIndex);
            const context = viewRef.context;
            context.count = count;
            context.first = renderIndex === 0;
            context.last = renderIndex === count - 1;
            context.even = renderIndex % 2 === 0;
            context.odd = !context.even;
            context.index = renderIndex;
        }
    }
    /** animate the carousel items */
    _carouselAnimator(direction, start, end, speed, length, viewContainer = this._nodeOutlet.viewContainer) {
        let val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        const collectIndex = [];
        if (direction === 1) {
            for (let i = start - 1; i < end; i++) {
                collectIndex.push(i);
                val = val * 2;
                const viewRef = viewContainer.get(i);
                const context = viewRef.context;
                context.animate = { value: true, params: { distance: val } };
            }
        }
        else {
            for (let i = end - 1; i >= start - 1; i--) {
                collectIndex.push(i);
                val = val * 2;
                const viewRef = viewContainer.get(i);
                const context = viewRef.context;
                context.animate = { value: true, params: { distance: -val } };
            }
        }
        this.cdr.markForCheck();
        setTimeout(() => {
            this._removeAnimations(collectIndex);
        }, speed * 0.7);
    }
    _removeAnimations(indexs) {
        const viewContainer = this._nodeOutlet.viewContainer;
        indexs.forEach(i => {
            const viewRef = viewContainer.get(i);
            const context = viewRef.context;
            context.animate = { value: false, params: { distance: 0 } };
        });
        this.cdr.markForCheck();
    }
    /** Short form for setElementStyle */
    _setStyle(el, prop, val) {
        this._renderer.setStyle(el, prop, val);
    }
    /** For generating style tag */
    _createStyleElem(datas) {
        const styleItem = this._renderer.createElement('style');
        if (datas) {
            const styleText = this._renderer.createText(datas);
            this._renderer.appendChild(styleItem, styleText);
        }
        this._renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    }
}
NguCarousel.ɵfac = function NguCarousel_Factory(t) { return new (t || NguCarousel)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NguCarousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NguCarousel, selectors: [["ngu-carousel"]], contentQueries: function NguCarousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselNextDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselPrevDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NguCarouselDefDirective, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nextBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.prevBtn = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._defDirec = _t);
    } }, viewQuery: function NguCarousel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](NguCarouselOutlet, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._nodeOutlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carouselMain1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nguItemsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.touchContainer = _t.first);
    } }, inputs: { dataSource: "dataSource", trackBy: "trackBy", inputs: "inputs" }, outputs: { carouselLoad: "carouselLoad", onMove: "onMove" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c4, decls: 11, vars: 0, consts: [[1, "ngucarousel"], ["ngucarousel", ""], [1, "ngu-touch-container"], ["touchContainer", ""], [1, "ngucarousel-items"], ["nguItemsContainer", ""], ["nguCarouselOutlet", ""], [1, "nguclearFix"]], template: function NguCarousel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](7, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10, 2);
    } }, directives: [NguCarouselOutlet], styles: ["[_nghost-%COMP%]{display:block;position:relative}.ngurtl[_nghost-%COMP%]{direction:rtl}.ngucarousel[_ngcontent-%COMP%]{height:100%;overflow:hidden;position:relative}.ngucarousel[_ngcontent-%COMP%]   .ngucarousel-items[_ngcontent-%COMP%]{display:flex;height:100%;position:relative}.nguvertical[_ngcontent-%COMP%]{flex-direction:column}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{bottom:20px;position:absolute;width:100%}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.55)}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#fff}.banner[_ngcontent-%COMP%]   .ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault[_ngcontent-%COMP%]   .ngucarouselPoint[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer}.nguclearFix[_ngcontent-%COMP%]{clear:both}"], changeDetection: 0 });
NguCarousel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NguCarousel.propDecorators = {
    inputs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    carouselLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['dataSource',] }],
    _defDirec: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [NguCarouselDefDirective,] }],
    _nodeOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [NguCarouselOutlet, { static: true },] }],
    nextBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    prevBtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] }],
    carouselMain1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
    nguItemsContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
    touchContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true },] }],
    trackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarousel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngu-carousel',
                template: "<div #ngucarousel class=\"ngucarousel\">\r\n  <ng-content select=\"[NguCarouselPrev]\"></ng-content>\r\n  <div #touchContainer class=\"ngu-touch-container\">\r\n    <div #nguItemsContainer class=\"ngucarousel-items\">\r\n      <ng-container nguCarouselOutlet></ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"nguclearFix\"></div>\r\n  <ng-content select=\"[NguCarouselNext]\"></ng-content>\r\n</div>\r\n<ng-content select=\"[NguCarouselPoint]\"></ng-content>\r\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{display:block;position:relative}:host.ngurtl{direction:rtl}.ngucarousel{height:100%;overflow:hidden;position:relative}.ngucarousel .ngucarousel-items{display:flex;height:100%;position:relative}.nguvertical{flex-direction:column}.banner .ngucarouselPointDefault .ngucarouselPoint{bottom:20px;position:absolute;width:100%}.banner .ngucarouselPointDefault .ngucarouselPoint li{background:hsla(0,0%,100%,.55)}.banner .ngucarouselPointDefault .ngucarouselPoint li.active{background:#fff}.banner .ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.ngucarouselPointDefault .ngucarouselPoint{box-sizing:border-box;list-style-type:none;margin:0;overflow:auto;padding:12px;text-align:center;white-space:nowrap}.ngucarouselPointDefault .ngucarouselPoint li{background:rgba(0,0,0,.55);border-radius:50%;display:inline-block;margin:0 4px;padding:4px;transition:.4s;transition-timing-function:cubic-bezier(.17,.67,.83,.67)}.ngucarouselPointDefault .ngucarouselPoint li.active{background:#6b6b6b;transform:scale(1.8)}.ngucarouselPointDefault .ngucarouselPoint li:hover{cursor:pointer}.nguclearFix{clear:both}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { carouselLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['dataSource']
        }], nextBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NguCarouselNextDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], prevBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [NguCarouselPrevDirective, /* TODO: add static flag */ { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], trackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _defDirec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [NguCarouselDefDirective]
        }], _nodeOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [NguCarouselOutlet, { static: true }]
        }], carouselMain1: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }], nguItemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['nguItemsContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }], touchContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['touchContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }]
        }] }); })();

class NguItemComponent {
    constructor() {
        this.classes = true;
    }
}
NguItemComponent.ɵfac = function NguItemComponent_Factory(t) { return new (t || NguItemComponent)(); };
NguItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NguItemComponent, selectors: [["ngu-item"]], hostVars: 2, hostBindings: function NguItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 1, vars: 0, template: function NguItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
    } }, styles: [""] });
NguItemComponent.propDecorators = {
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.item',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngu-item',
                template: "<ng-content></ng-content>\r\n",
                styles: [""]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.item']
        }] }); })();

class NguTileComponent {
    constructor() {
        this.classes = true;
    }
}
NguTileComponent.ɵfac = function NguTileComponent_Factory(t) { return new (t || NguTileComponent)(); };
NguTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NguTileComponent, selectors: [["ngu-tile"]], hostVars: 2, hostBindings: function NguTileComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("item", ctx.classes);
    } }, ngContentSelectors: _c5, decls: 2, vars: 0, consts: [[1, "tile"]], template: function NguTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{box-sizing:border-box;padding:10px}.tile[_ngcontent-%COMP%]{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"] });
NguTileComponent.propDecorators = {
    classes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.item',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngu-tile',
                template: "<div class=\"tile\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                styles: [":host{box-sizing:border-box;padding:10px}.tile{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}"]
            }]
    }], function () { return []; }, { classes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class.item']
        }] }); })();

class NguCarouselModule {
}
NguCarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NguCarouselModule });
NguCarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NguCarouselModule_Factory(t) { return new (t || NguCarouselModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NguCarouselModule, { declarations: function () { return [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NguCarousel, NguItemComponent, NguTileComponent, NguCarouselPointDirective, NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselDefDirective, NguCarouselOutlet]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NguCarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                exports: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ],
                declarations: [
                    NguCarousel,
                    NguItemComponent,
                    NguTileComponent,
                    NguCarouselPointDirective,
                    NguCarouselItemDirective,
                    NguCarouselNextDirective,
                    NguCarouselPrevDirective,
                    NguCarouselDefDirective,
                    NguCarouselOutlet
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of carousel
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngu-carousel.js.map

/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map
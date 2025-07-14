(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-exam-my-exam-module"],{

/***/ "1Lu3":
/*!****************************************************!*\
  !*** ./src/app/pages/my-exam/my-exam.component.ts ***!
  \****************************************************/
/*! exports provided: MyExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExamComponent", function() { return MyExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/date.util */ "tnDu");
/* harmony import */ var src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ "HEbm");





















function MyExamComponent_section_4_div_15_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const curriculumName_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", curriculumName_r9, " ");
} }
const _c0 = function (a0, a1) { return { "completed": a0, "error": a1 }; };
function MyExamComponent_section_4_div_15_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyExamComponent_section_4_div_15_div_16_div_6_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_div_15_div_16_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const exam_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.launch(exam_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-menu", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_div_15_div_16_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const exam_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r12.copyToClipBoard(exam_r6.Title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_div_15_div_16_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const exam_r6 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r13.reportProblem(exam_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exam_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exam_r6.Title ? exam_r6.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", exam_r6.CurriculumNameArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, exam_r6.Status === ctx_r4.ExamStatus.PASSED, exam_r6.Status === ctx_r4.ExamStatus.FAILED));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exam_r6.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exam_r6.Status === ctx_r4.ExamStatus.PASSED ? exam_r6.CompletionDate : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r8);
} }
function MyExamComponent_section_4_div_15_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No exams assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyExamComponent_section_4_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Exam Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Completion Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MyExamComponent_section_4_div_15_div_16_Template, 25, 9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MyExamComponent_section_4_div_15_div_17_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ItemList_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ItemList_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ItemList_r3.length === 0);
} }
const _c1 = function (a0) { return { "active": a0 }; };
function MyExamComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.StatusFilterForm.setValue(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.StatusFilterForm.setValue(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Not yet taken ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.StatusFilterForm.setValue(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.StatusFilterForm.setValue(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Passed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyExamComponent_section_4_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.exportReport(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MyExamComponent_section_4_div_15_Template, 18, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, ctx_r0.StatusFilterForm.value === -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx_r0.StatusFilterForm.value === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx_r0.StatusFilterForm.value === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, ctx_r0.StatusFilterForm.value === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.PageIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 6, ctx_r0.FilteredList));
} }
function MyExamComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MyExamComponent {
    constructor(snackBar, dialogService, examService, userExamService, curriculumService, excelService) {
        this.snackBar = snackBar;
        this.dialogService = dialogService;
        this.examService = examService;
        this.userExamService = userExamService;
        this.curriculumService = curriculumService;
        this.excelService = excelService;
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"];
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
                case 0:
                    return List.filter(e => e.Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"].NOT_YET_TAKEN);
                    break;
                case 1:
                    return List.filter(e => e.Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"].FAILED);
                    break;
                case 2:
                    return List.filter(e => e.Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"].PASSED);
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
            const recordList = yield this.userExamService.getAll();
            const examIdArr = recordList.map(e => e.ExamId);
            const [examlist, curriculumList] = yield Promise.all([
                this.examService.getItemsByIdArr(examIdArr),
                this.curriculumService.getItemsByExamIdArr(examIdArr),
            ]);
            const MappedCourseList = examlist.map(e => {
                e.Record = this.userExamService.getRecord(e.Id);
                e.CurriculumNameArr = curriculumList
                    .filter(i => i.ExamsId.has(e.Id))
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
                ['Course Title', 'Curriculum', 'Status', 'Completion Date'],
                ...this.List.value.map((e) => {
                    const { Title, CurriculumNames, Status, CompletionDate } = e;
                    return [
                        Title,
                        CurriculumNames,
                        Status,
                        Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"].PASSED ? CompletionDate : ''
                    ];
                })
            ];
            this.excelService.exportArrayAsExcelFile(courseData, `My_Exam_List_${Object(src_app_core_util_date_util__WEBPACK_IMPORTED_MODULE_7__["getCurrentDateString"])()}`);
        });
    }
    // #region component functions
    launch(item) {
        this.dialogService.open(src_app_shared_dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ExaminationDialogComponent"], { data: { item } });
    }
    copyToClipBoard(Title) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["copyToClipBoard"])(Title, src_constant_app_constant__WEBPACK_IMPORTED_MODULE_10__["ContentType"].EXAMS);
            this.snackBar.open('Link Copied!');
        });
    }
    reportProblem(item) {
        this.dialogService.open(src_app_shared_dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ReportProblemDialogComponent"], {
            data: { item, itemType: 'Exam' }
        });
    }
}
MyExamComponent.ɵfac = function MyExamComponent_Factory(t) { return new (t || MyExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_14__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_15__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"])); };
MyExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyExamComponent, selectors: [["app-my-exam"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "exam-action"], [1, "onecap-group-btn"], [1, "btn", 3, "ngClass", "click"], [1, "onecap-outline-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], [1, "icon", "icon-dxc", "export", "accent-2"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "onecap-table", "exams"], [1, "table-header"], [1, "section"], [1, "col-name"], [1, "col-name", "action"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["class", "card-message", 4, "ngIf"], [1, "table-row"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "onecap-btn", "primary", 3, "click"], [1, "col-name", "onecap-lbl", 3, "ngClass"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], [1, "material-icons"], ["examMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "card-message"], [1, "page-loader"]], template: function MyExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " My Exam List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyExamComponent_section_4_Template, 17, 16, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MyExamComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".onecap-table.exams[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .onecap-table.exams[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 3fr 2fr 30px;\n}\n\n#exam-action[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: max-content max-content;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktZXhhbS9teS1leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUNBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1leGFtL215LWV4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub25lY2FwLXRhYmxlLmV4YW1zIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmciAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2V4YW0tYWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-exam',
                templateUrl: './my-exam.component.html',
                styleUrls: ['./my-exam.component.scss']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__["ExamService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_14__["UserExamService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_15__["CurriculumService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"] }]; }, null); })();


/***/ }),

/***/ "FDKd":
/*!*************************************************!*\
  !*** ./src/app/pages/my-exam/my-exam.module.ts ***!
  \*************************************************/
/*! exports provided: MyExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExamModule", function() { return MyExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-exam-routing.module */ "FzVQ");
/* harmony import */ var _my_exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-exam.component */ "1Lu3");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");






class MyExamModule {
}
MyExamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyExamModule });
MyExamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyExamModule_Factory(t) { return new (t || MyExamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _my_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyExamRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyExamModule, { declarations: [_my_exam_component__WEBPACK_IMPORTED_MODULE_3__["MyExamComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _my_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyExamRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyExamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_exam_component__WEBPACK_IMPORTED_MODULE_3__["MyExamComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _my_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["MyExamRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FzVQ":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-exam/my-exam-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: MyExamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExamRoutingModule", function() { return MyExamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-exam.component */ "1Lu3");





const routes = [{ path: '', component: _my_exam_component__WEBPACK_IMPORTED_MODULE_2__["MyExamComponent"] }];
class MyExamRoutingModule {
}
MyExamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyExamRoutingModule });
MyExamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyExamRoutingModule_Factory(t) { return new (t || MyExamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyExamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyExamRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-my-exam-my-exam-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-exam-admin-exam-module"],{

/***/ "5Vx8":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/admin-exam/admin-exam.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExamComponent", function() { return AdminExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/edit-exam-dialog/edit-exam-dialog.component */ "PnC0");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");

















function AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r11.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.export(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r13.delete(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r8.DateModified, " ", item_r8.Editor.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !item_r8.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !item_r8.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !item_r8.IsOwner);
} }
function AdminExamComponent_section_4_ng_container_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Exam Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Last Modified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminExamComponent_section_4_ng_container_23_div_2_div_10_Template, 17, 6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r3);
} }
function AdminExamComponent_section_4_ng_container_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No exam available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminExamComponent_section_4_ng_container_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminExamComponent_section_4_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminExamComponent_section_4_ng_container_23_div_2_Template, 11, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminExamComponent_section_4_ng_container_23_div_3_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminExamComponent_section_4_ng_container_23_div_4_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r3.length > 0 && !ctx_r2.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r3.length === 0 && !ctx_r2.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.dataIsLoading);
} }
function AdminExamComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Exam Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Exam Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " @Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminExamComponent_section_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Create Exam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminExamComponent_section_4_ng_container_23_Template, 5, 3, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.keywordFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.ownerFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 5, ctx_r0.filteredExamList));
} }
function AdminExamComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminExamComponent {
    constructor(dialog, examService, excelService) {
        this.dialog = dialog;
        this.examService = examService;
        this.excelService = excelService;
        this.pageIsLoading = false;
        this.dataIsLoading = true;
        this.examList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.keywordFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ownerFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1);
        this.ownedExamList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ownerFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(1)),
            this.examList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([isOwner, List]) => {
            if (isOwner === 1) {
                return List.filter(e => e.IsOwner);
            }
            return List;
        }));
        this.filteredExamList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ownedExamList,
            this.keywordFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(125), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([examList, keyword]) => {
            if (keyword === '') {
                return examList;
            }
            return examList.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, keyword));
        }));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const ExamList = yield this.examService.getAll();
            this.examList.next(ExamList);
            this.dataIsLoading = false;
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditExamDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                this.loadData();
            }
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.IsOwner) {
                const editDialog = this.dialog.open(_dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditExamDialogComponent"], { data: { exam: new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["Exam"](data) } });
                const isSaved = yield editDialog.afterClosed().toPromise();
                if (isSaved) {
                    this.loadData();
                }
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promptDialog = this.dialog.deleteDialog(data.Title);
            const isProceed = yield promptDialog.afterClosed().toPromise();
            if (isProceed) {
                const loaderDialog = this.dialog.loaderDialog();
                yield this.examService.delete(data);
                loaderDialog.close();
                yield this.loadData();
            }
        });
    }
    export(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            let exportData = [
                ['Exam Name:', data.Title],
                ['Exam Description', Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["getHTMLText"])(data.Description)],
                ['Exam Owners', data.Owners.map(e => e.Title).join(';')],
                ['Passing Rate', `${data.PassingRate}%`],
                ['Tags', data.Tags],
                [],
                ['Questions', 'Question Type', 'Answers', 'IsCorrect?']
            ];
            const questionList = yield this.examService.getQuestionsAndAnswers(data.Id);
            for (const question of questionList) {
                const { QuestionText, Type, Answers, IsTrue } = question;
                let tempExport = [
                    [QuestionText, Type, '', '']
                ];
                switch (Type) {
                    case src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["QuestionType"].TRUE_OR_FALSE:
                        tempExport[0][2] = `${IsTrue}`;
                        break;
                    case 'Single Answer':
                    case 'Multiple Answers':
                        for (const [idx, answer] of Answers.entries()) {
                            if (idx === 0) {
                                tempExport[0][2] = answer.AnswerText;
                                tempExport[0][3] = `${answer.IsAnswer}`;
                                continue;
                            }
                            tempExport = [
                                ...tempExport, [
                                    '',
                                    '',
                                    answer.AnswerText,
                                    `${answer.IsAnswer}`,
                                ]
                            ];
                        }
                        break;
                }
                exportData = [
                    ...exportData,
                    ...tempExport,
                ];
            }
            yield this.excelService.exportArrayAsExcelFile(exportData, `Exam Export - ${data.Title}`);
            loaderDialog.close();
        });
    }
}
AdminExamComponent.ɵfac = function AdminExamComponent_Factory(t) { return new (t || AdminExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_9__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"])); };
AdminExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminExamComponent, selectors: [["app-admin-exam"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "select-container"], ["placeholder", "All Category", 3, "formControl"], [3, "value"], ["id", "actions"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [4, "ngIf"], [1, "table-container"], ["id", "exam-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "exam-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-link-btn", "accent-2", 3, "click"], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "disabled", "click"], ["matTooltip", "Export", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "disabled", "click"], [1, "icon", "icon-dxc", "export", "wht"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminExamComponent_section_4_Template, 25, 7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminExamComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n  justify-content: flex-end;\n}\n\n#exam-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #exam-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZXhhbS9hZG1pbi1leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHRTtFQUNFLGdDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1leGFtL2FkbWluLWV4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsdGVycyB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiByZXBlYXQoNCwgMWZyKTtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gIGRpc3BsYXkgOiBncmlkO1xyXG4gIGdhcCAgICAgOiAxMHB4O1xyXG4gIGdyaWQtYXV0by1mbG93ICA6IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LWVuZDtcclxufVxyXG5cclxuI2V4YW0tdGFibGUge1xyXG4gIC50YWJsZS1oZWFkZXIsIC50YWJsZS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTc1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-exam',
                templateUrl: './admin-exam.component.html',
                styleUrls: ['./admin-exam.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_9__["ExamService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"] }]; }, null); })();


/***/ }),

/***/ "PnC0":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-exam/dialogs/edit-exam-dialog/edit-exam-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EditExamDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExamDialogComponent", function() { return EditExamDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/model/curriculum.model */ "yh7w");
/* harmony import */ var src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/model/_model */ "Ka/f");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
































const _c0 = ["stepper"];
function EditExamDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_38_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const i_r23 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.removeOwner(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r22.Title);
} }
function EditExamDialogComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r26.Title);
} }
function EditExamDialogComponent_mat_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r27.Title);
} }
function EditExamDialogComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_83_div_1_mat_radio_group_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-radio-group", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-radio-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " True ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-radio-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " False ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
function EditExamDialogComponent_div_83_div_1_mat_radio_group_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-radio-button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r36 = ctx.$implicit;
    const aIndex_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", answer_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", aIndex_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, answer_r36.get("AnswerText").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "Answer #" + (aIndex_r37 + 1));
} }
function EditExamDialogComponent_div_83_div_1_mat_radio_group_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-radio-group", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditExamDialogComponent_div_83_div_1_mat_radio_group_22_div_1_Template, 5, 6, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r33.answersControl(question_r30.get("Answers")));
} }
function EditExamDialogComponent_div_83_div_1_div_23_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-checkbox", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const aIndex_r43 = ctx.index;
    const AnswersControl_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", aIndex_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, AnswersControl_r40[aIndex_r43].get("AnswerText").invalid));
} }
function EditExamDialogComponent_div_83_div_1_div_23_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditExamDialogComponent_div_83_div_1_div_23_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const AnswersControl_r40 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", AnswersControl_r40);
} }
function EditExamDialogComponent_div_83_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditExamDialogComponent_div_83_div_1_div_23_ng_container_1_Template, 2, 1, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r34.answersControl(question_r30.get("Answers")));
} }
function EditExamDialogComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "True or False");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Single Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Multiple Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_83_div_1_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const question_r30 = ctx.$implicit; const questionIndex_r31 = ctx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r46.addQuestionToBeDeleted(question_r30.value); return ctx_r46.QuestionForm.removeAt(questionIndex_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, EditExamDialogComponent_div_83_div_1_mat_radio_group_21_Template, 7, 2, "mat-radio-group", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EditExamDialogComponent_div_83_div_1_mat_radio_group_22_Template, 2, 1, "mat-radio-group", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, EditExamDialogComponent_div_83_div_1_div_23_Template, 2, 1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r30 = ctx.$implicit;
    const questionIndex_r31 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c1, question_r30.invalid))("formGroup", question_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecap-option-container")("disableOptionCentering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r29.QuestionType.TRUE_OR_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r29.QuestionType.SINGLE_ANSWER);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r29.QuestionType.MULTIPLE_ANSWER);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", questionIndex_r31 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, question_r30.get("QuestionText").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", "Question #" + (questionIndex_r31 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", question_r30.get("Type").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r29.QuestionType.TRUE_OR_FALSE);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r29.QuestionType.SINGLE_ANSWER);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r29.QuestionType.MULTIPLE_ANSWER);
} }
function EditExamDialogComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditExamDialogComponent_div_83_div_1_Template, 24, 18, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_83_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r48.QuestionForm.push(ctx_r48.createQuestionForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Add Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const QuestionForms_r28 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", QuestionForms_r28);
} }
function EditExamDialogComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_111_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_111_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_111_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55); const item_r53 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r54.AssignedCurriculum.select(item_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r53.Title, " ");
} }
function EditExamDialogComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Curriculum Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditExamDialogComponent_div_111_div_5_Template, 4, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditExamDialogComponent_div_111_div_6_Template, 6, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r50 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r50.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r50);
} }
function EditExamDialogComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_120_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r58); const item_r56 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r57.AssignedCurriculum.deselect(item_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !item_r56.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r56.Title, " ");
} }
function EditExamDialogComponent_div_135_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_145_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_145_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_145_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64); const item_r62 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r63.AssignedCourse.select(item_r62); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r62.Title, " ");
} }
function EditExamDialogComponent_div_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditExamDialogComponent_div_145_div_5_Template, 4, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditExamDialogComponent_div_145_div_6_Template, 6, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r59 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r59.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r59);
} }
function EditExamDialogComponent_div_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No related course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_154_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_div_154_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); const item_r65 = ctx.$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r66.AssignedCourse.deselect(item_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r65.Title, " ");
} }
function EditExamDialogComponent_div_167_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No description available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_167_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", owner_r75.Title, " ");
} }
function EditExamDialogComponent_div_167_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_167_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r76.Title, " ");
} }
function EditExamDialogComponent_div_167_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No related course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditExamDialogComponent_div_167_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r77.Title, " ");
} }
function EditExamDialogComponent_div_167_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Exam Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Exam Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditExamDialogComponent_div_167_div_12_Template, 2, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Exam Owner/s*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditExamDialogComponent_div_167_div_18_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Passing Rate*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Sub-Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Total No. of Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "section", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Assigned Curricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, EditExamDialogComponent_div_167_div_52_Template, 2, 0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, EditExamDialogComponent_div_167_div_53_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Related Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, EditExamDialogComponent_div_167_div_58_Template, 2, 0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, EditExamDialogComponent_div_167_div_59_Template, 2, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r68 = ctx.ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r16.hideElement(!ctx_r16.FormDetails.valid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r68.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", details_r68.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 14, ctx_r16.DescriptionCount) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", details_r68.Owners);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r68.PassingRate, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r68.LearningCategory ? details_r68.LearningCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r68.LearningSubCategory ? details_r68.LearningSubCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.QuestionForm.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r68.Tags ? details_r68.Tags : "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.AssignedCurriculum.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r16.AssignedCurriculum.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r16.AssignedCourse.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r16.AssignedCourse.selected);
} }
function EditExamDialogComponent_ng_template_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r78 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r78 + 1, " ");
} }
function EditExamDialogComponent_ng_template_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r80 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r80 + 1, " ");
} }
function EditExamDialogComponent_mat_option_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-spinner", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 24);
} }
function EditExamDialogComponent_ng_container_181_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", profile_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", profile_r84.DisplayText, " ");
} }
function EditExamDialogComponent_ng_container_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditExamDialogComponent_ng_container_181_mat_option_1_Template, 2, 2, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const searchedUsers_r82 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", searchedUsers_r82);
} }
const MultipleAnswersValidation = (control) => {
    const valueArray = control.value;
    if (valueArray.some(e => e.IsAnswer)) {
        return null;
    }
    return {
        error: 'Must have atleast 1 correct answer.'
    };
};
const QuestionTypeValidation = (child) => {
    const control = child.parent;
    if (!control) {
        return null;
    }
    const QuestionTypeSelection = child;
    const AnswersControl = control.get('Answers');
    for (const AnswerControl of AnswersControl.controls) {
        AnswerControl.get('AnswerText').clearValidators();
        switch (QuestionTypeSelection.value) {
            case src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["QuestionType"].SINGLE_ANSWER:
            case src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["QuestionType"].MULTIPLE_ANSWER:
                AnswerControl.get('AnswerText').setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]);
                break;
        }
        AnswerControl.get('AnswerText').updateValueAndValidity();
    }
    AnswersControl.clearValidators();
    if (QuestionTypeSelection.value === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["QuestionType"].MULTIPLE_ANSWER) {
        AnswersControl.setValidators([MultipleAnswersValidation]);
    }
    AnswersControl.updateValueAndValidity();
    return null;
};
class EditExamDialogComponent {
    constructor(dialog, dropdownService, userService, examService, courseService, curriculumService, accountService, dialogRef, data) {
        this.dialog = dialog;
        this.dropdownService = dropdownService;
        this.userService = userService;
        this.examService = examService;
        this.courseService = courseService;
        this.curriculumService = curriculumService;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.QuestionType = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["QuestionType"];
        this.dialogTitle = 'Create';
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
        // Data
        this.dialogIsLoading = true;
        this.questionIsLoading = true;
        this.curriculumIsLoading = true;
        this.courseIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-1),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Owners: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([], {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            PassingRate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
                ]
            }),
            Tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            LearningCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            LearningSubCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
        });
        this.DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["getDescriptionCount"])(data)));
        this.QuestionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([], {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]
        });
        this.QuestionsToBeDeleted = [];
        this.InitialAssignedCurriculum = [];
        this.AssignedCurriculum = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true);
        this.LearningCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.LearningSubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.FilteredLearningSubCategoryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.FormDetails.get('LearningCategory').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.FormDetails.get('LearningSubCategory').setValue(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)),
            this.LearningSubCategoryList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([selectedCategory, List]) => {
            if (selectedCategory === null) {
                return [];
            }
            return List.filter(e => e.CategoryId === selectedCategory.Id);
        }));
        this.CurriculumSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.FilteredCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.AssignedCurriculum.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)),
            this.CurriculumList,
            this.CurriculumSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = SelectedItems ? !SelectedItems.source.isSelected(e) : true;
            return [
                isSearched,
                isNotSelected,
                e.IsOwner,
            ].every(c => c);
        })));
        this.AssignedCourse = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true);
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.AssignedCourse.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)),
            this.CourseList,
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = SelectedItems ? !SelectedItems.source.isSelected(e) : true;
            return [
                isSearched,
                isNotSelected,
                e.IsOwner,
            ].every(c => c);
        })));
        this.OwnersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.IsSearchingUser = false;
        this.SearchUserList = this.OwnersControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((input) => this.userService.searchUser(input)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.IsSearchingUser = false));
        this.dialogName = () => `${this.dialogTitle} Exam`;
        this.displayFn = (data) => data ? data.DisplayText : '';
    }
    hideElement(isHidden) {
        return { display: isHidden ? 'none' : null };
    }
    filterNumberInputs($event) {
        if ($event.which !== 8 && $event.which !== 0 && $event.which < 48 || $event.which > 57) {
            $event.preventDefault();
        }
    }
    revertToMinOrMax($event) {
        const { value } = $event.target;
        if (value > 100 || value < 0) {
            this.FormDetails.get('PassingRate').setValue(value > 100 ? 100 : 0);
        }
    }
    addOwner(value) {
        const loaderDialog = this.dialog.loaderDialog();
        this.userService.ensureUser(value.Key)
            .then((person) => {
            const Owners = this.FormDetails.get('Owners').value;
            this.FormDetails.get('Owners').setValue([...Owners, person]);
            this.OwnersControl.setValue('');
            loaderDialog.close();
        });
    }
    removeOwner(idx) {
        const Owners = this.FormDetails.get('Owners').value;
        Owners.splice(idx, 1);
        this.FormDetails.get('Owners').setValue(Owners);
    }
    addQuestionToBeDeleted(questionValue) {
        console.log('Question Value', questionValue);
        const { Id, Title, QuestionIsTrue, Type } = questionValue;
        this.QuestionsToBeDeleted = [
            ...this.QuestionsToBeDeleted,
            new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Question"]({
                Id,
                Title,
                IsTrue: QuestionIsTrue,
                Type,
            })
        ];
    }
    createQuestionForm(questionObj = new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Question"]({})) {
        console.log('quesiont OBj', questionObj);
        const { Id, Title, QuestionText, Type, Answers, IsTrue } = questionObj;
        let correctAnswerIdx = 0;
        let answersFormGroup = new Array(4).fill(null);
        if (Answers.length > 0) {
            correctAnswerIdx = Answers.findIndex(e => e.IsAnswer);
            answersFormGroup = Answers.map(e => this.createAnswerForm(e));
        }
        else {
            answersFormGroup = answersFormGroup.map((e, idx) => this.createAnswerForm(new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Answer"]({})));
        }
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Id),
            QuestionText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](QuestionText, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)
                ]
            }),
            Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Type, {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    QuestionTypeValidation
                ]
            }),
            CorrectAnswerIdx: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](correctAnswerIdx),
            QuestionIsTrue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](IsTrue),
            Answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](answersFormGroup)
        });
    }
    createAnswerForm(answerObj = new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Answer"]({})) {
        const { Id, AnswerText, IsAnswer } = answerObj;
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Id),
            AnswerText: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](AnswerText, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(255)]
            }),
            IsAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](IsAnswer)
        });
    }
    answersControl(formArray) {
        return formArray.controls;
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
            this.questionIsLoading = true;
            this.curriculumIsLoading = true;
            this.courseIsLoading = true;
            const [LearningCategoryList, LearningSubCategoryList] = yield Promise.all([
                this.dropdownService.getLearningCategory(),
                this.dropdownService.getLearningSubCategory()
            ]);
            this.LearningCategoryList.next(LearningCategoryList);
            this.LearningSubCategoryList.next(LearningSubCategoryList);
            yield this.updateDetails();
            this.dialogIsLoading = false;
            yield this.updateQuestions();
            this.questionIsLoading = false;
            yield Promise.all([
                this.curriculumService.getAll().then((CurriculumList) => {
                    this.CurriculumList.next(CurriculumList);
                    this.updateAssignedCurriculum();
                    this.curriculumIsLoading = false;
                }),
                this.courseService.getAll().then((courseList) => {
                    this.CourseList.next(courseList);
                    this.updatedAssignedCourses();
                    this.courseIsLoading = false;
                }),
            ]);
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { Id, Title, Description, Tags, Owners, PassingRate, LearningSubCategoryId } = this.data.exam;
                let LearningCategoryObj = null;
                let LearningSubCategoryObj = null;
                LearningSubCategoryObj = this.LearningSubCategoryList.value.find(e => e.Id === LearningSubCategoryId);
                console.log(LearningSubCategoryObj);
                if (LearningSubCategoryObj) {
                    LearningCategoryObj = this.LearningCategoryList.value.find(e => e.Id === LearningSubCategoryObj.CategoryId);
                }
                console.log(this.data.exam);
                this.FormDetails.patchValue({
                    Id,
                    Title,
                    Description,
                    Tags,
                    Owners,
                    PassingRate,
                    LearningCategory: LearningCategoryObj,
                    LearningSubCategory: LearningSubCategoryObj,
                });
            }
            else {
                const profile = yield this.userService.ensureUser(this.accountService.account.LoginName);
                this.FormDetails.patchValue({ Owners: [profile] });
            }
        });
    }
    updateQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { Id } = this.data.exam;
                const questions = yield this.examService.getQuestionsAndAnswers(Id);
                questions.forEach(question => {
                    this.QuestionForm.push(this.createQuestionForm(question));
                });
            }
            else {
                this.QuestionForm.push(this.createQuestionForm());
            }
        });
    }
    updateAssignedCurriculum() {
        if (this.data) {
            const { Id } = this.data.exam;
            this.InitialAssignedCurriculum = this.CurriculumList.value.filter(e => e.ExamsId.has(Id));
            this.AssignedCurriculum.select(...this.InitialAssignedCurriculum);
        }
    }
    updatedAssignedCourses() {
        if (this.data) {
            const { RelatedCoursesId } = this.data.exam;
            this.AssignedCourse.select(...RelatedCoursesId
                .map(e => this.CourseList.value.find(i => i.Id === e))
                .filter(e => e));
        }
    }
    validateName(skip = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Title } = this.FormDetails.value;
            const validated = yield this.examService.validateTitle(Title, Id);
            loaderDialog.close();
            if (validated) {
                if (!skip) {
                    this.stepper.next();
                }
                else {
                    this.stepper.selectedIndex = 2;
                }
            }
            else {
                this.FormDetails.get('Title').setErrors({ titleExisting: true });
                this.dialog.alertDialog(this.dialogName(), `${Title} is already created.`);
            }
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Title, Description, Owners, PassingRate, Tags, LearningSubCategory: LearningSubCategoryObj } = this.FormDetails.value;
            const RelatedCoursesId = this.AssignedCourse.selected.map(e => e.Id);
            let EditorObj = new src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_11__["Person"]({});
            let DateModified = null;
            if (this.data) {
                const { Editor, Modified } = this.data.exam;
                EditorObj = Editor;
                DateModified = Modified;
            }
            const requestData = new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Exam"]({
                Id,
                Title,
                Description,
                Owners,
                PassingRate,
                Tags,
                RelatedCoursesId,
                LearningSubCategoryId: LearningSubCategoryObj.Id,
                Editor: EditorObj,
                Modified: DateModified,
            });
            const savedData = yield this.examService.save(requestData);
            let curriculumsToBeUpdated = [];
            // Curricula to be removed
            for (const curriculum of this.InitialAssignedCurriculum) {
                if (this.AssignedCurriculum.isSelected(curriculum)) {
                    continue;
                }
                const newCurriculum = new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_10__["Curriculum"](curriculum);
                newCurriculum.ExamsId.delete(savedData.Id);
                curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
            }
            // Curricula to be added
            for (const curriculum of this.AssignedCurriculum.selected) {
                if (this.InitialAssignedCurriculum.some(e => e.Id === curriculum.Id)) {
                    continue;
                }
                const newCurriculum = new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_10__["Curriculum"](curriculum);
                newCurriculum.ExamsId.add(savedData.Id);
                curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
            }
            yield this.curriculumService.batchSave(curriculumsToBeUpdated);
            // Questions to Delete
            yield this.examService.removeQuestionList(this.QuestionsToBeDeleted);
            // Save Questions
            const UpdatedQuestions = this.QuestionForm.controls
                .filter(e => e.dirty)
                .map(e => {
                const { Id: QuestionId, QuestionText, Type, QuestionIsTrue, CorrectAnswerIdx, Answers } = e.value;
                const answerObjList = Answers.map((a, Idx) => new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Answer"]({
                    Id: a.Id,
                    QuestionId,
                    AnswerText: a.AnswerText,
                    IsAnswer: (Type === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["QuestionType"].SINGLE_ANSWER) ? (Idx === CorrectAnswerIdx) : a.IsAnswer
                }));
                return new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_9__["Question"]({
                    Id: QuestionId,
                    QuestionText,
                    ExamId: savedData.Id,
                    Answers: answerObjList,
                    IsTrue: QuestionIsTrue,
                    Type
                });
            });
            yield this.examService.saveQuestionList(UpdatedQuestions);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
EditExamDialogComponent.ɵfac = function EditExamDialogComponent_Factory(t) { return new (t || EditExamDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_15__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
EditExamDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditExamDialogComponent, selectors: [["ng-component"]], viewQuery: function EditExamDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 183, vars: 78, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Exam Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "ngStyle"], [1, "basic-form", 3, "formGroup"], [1, "column"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "input-container"], ["type", "text", "formControlName", "Title"], [1, "editor-container"], ["formControlName", "Description", 3, "editor", "config"], [1, "counter"], [1, "onecap-input-form", 3, "ngClass", "focus", "click"], [1, "info-message"], [1, "textarea-container"], [1, "item-list"], ["class", "item-selection", 4, "ngFor", "ngForOf"], ["type", "text", 3, "formControl", "matAutocomplete"], ["inputOwner", ""], [1, "input-container", "short", "suffix"], ["type", "number", "formControlName", "PassingRate", 3, "min", "max", "keypress", "blur"], ["type", "text", "formControlName", "Tags"], [1, "select-container"], ["formControlName", "LearningCategory", 3, "panelClass", "disableOptionCentering", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "LearningSubCategory", 3, "panelClass", "disableOptionCentering", "placeholder"], [1, "stepper-action"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], ["label", "Questions & Answers", 3, "completed"], [1, "stepper-content", 3, "ngStyle"], ["id", "question-list", 4, "ngIf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2", 3, "disabled"], ["label", "Assign Curricula", 3, "optional"], [1, "stepper-content", "selection", 3, "ngStyle"], [1, "selection-section"], ["id", "filter"], [1, "onecap-input-form"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "tip"], ["id", "selection-container"], ["class", "selection-table", 4, "ngIf"], ["id", "separator"], [1, "selection-table"], [1, "table-header"], [1, "col"], ["class", "table-row", 4, "ngIf"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "onecap-link-btn", "accent-2", 3, "click"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["label", "Related Courses", 3, "optional"], ["label", "Confirm Details"], ["class", "stepper-content", 3, "ngStyle", 4, "ngIf"], [1, "onecap-btn", "accent-2", 3, "click"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "disabled", 4, "ngIf"], [4, "ngIf"], [1, "stepper-loader"], [1, "item-selection"], [1, "onecap-icon-btn", "delete", 3, "click"], [3, "value"], ["id", "question-list"], ["class", "q-item", 3, "ngClass", "formGroup", 4, "ngFor", "ngForOf"], [1, "onecap-btn", "primary", 3, "click"], [1, "q-item", 3, "ngClass", "formGroup"], [1, "spacer"], [1, "q-type"], ["placeholder", "-", "formControlName", "Type", 3, "panelClass", "disableOptionCentering"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "q-index"], [1, "q-details"], ["type", "text", "formControlName", "QuestionText", 3, "placeholder"], [3, "ngSwitch"], ["class", "onecap-radio-group form", "formControlName", "QuestionIsTrue", 4, "ngSwitchCase"], ["class", "onecap-radio-group form", "formControlName", "CorrectAnswerIdx", 4, "ngSwitchCase"], ["class", "answer-list", 4, "ngSwitchCase"], ["formControlName", "QuestionIsTrue", 1, "onecap-radio-group", "form"], [1, "radio-row"], [1, "onecap-radio-button", "primary", 3, "value"], ["formControlName", "CorrectAnswerIdx", 1, "onecap-radio-group", "form"], ["class", "radio-row input", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "radio-row", "input", 3, "formGroup"], ["type", "text", "formControlName", "AnswerText", 3, "placeholder"], [1, "answer-list"], ["formArrayName", "Answers", 4, "ngIf"], ["formArrayName", "Answers"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "formGroupName"], [1, "checkbox-row", "input"], ["formControlName", "IsAnswer", 1, "onecap-checkbox", "form", "a-item"], ["type", "text", "formControlName", "AnswerText"], [1, "table-row"], [1, "onecap-lbl", "error"], [1, "onecap-icon-btn", "accent-2", 3, "click"], [1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "basic-form", "summary"], [1, "field"], [3, "innerHTML"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "assigned-section"], ["class", "onecap-lbl error", 4, "ngIf"], [3, "disabled"], [1, "flex", "align-items-center", "justify-content-center"], [3, "diameter"]], template: function EditExamDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-horizontal-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditExamDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Exam Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Exam Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ckeditor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function EditExamDialogComponent_Template_div_focus_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r85); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40); return _r3.focus(); })("click", function EditExamDialogComponent_Template_div_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r85); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40); return _r3.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Exam Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Search by name or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, EditExamDialogComponent_div_38_Template, 6, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Passing Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function EditExamDialogComponent_Template_input_keypress_48_listener($event) { return ctx.filterNumberInputs($event); })("blur", function EditExamDialogComponent_Template_input_blur_48_listener($event) { return ctx.revertToMinOrMax($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, EditExamDialogComponent_mat_option_63_Template, 2, 2, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Sub-Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "mat-select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, EditExamDialogComponent_mat_option_72_Template, 2, 2, "mat-option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](73, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_Template_button_click_75_listener() { return ctx.validateName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "mat-step", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, EditExamDialogComponent_div_81_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, EditExamDialogComponent_div_83_Template, 7, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-step", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, EditExamDialogComponent_div_96_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Curriculum Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " By default, the exam will be added as the last exam of each curriculum. You can update the order of the exams in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Admin > Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, EditExamDialogComponent_div_111_Template, 7, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](112, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, " Assigned Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, EditExamDialogComponent_div_119_Template, 4, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, EditExamDialogComponent_div_120_Template, 6, 2, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r85); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8); return _r0.selectedIndex = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Skip Assigning Curricula and Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "mat-step", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](135, EditExamDialogComponent_div_135_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](143, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](145, EditExamDialogComponent_div_145_Template, 7, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](146, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " Related Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](153, EditExamDialogComponent_div_153_Template, 4, 0, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, EditExamDialogComponent_div_154_Template, 6, 1, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "mat-step", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](167, EditExamDialogComponent_div_167_Template, 60, 16, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditExamDialogComponent_Template_button_click_174_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](176, EditExamDialogComponent_ng_template_176_Template, 1, 1, "ng-template", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](177, EditExamDialogComponent_ng_template_177_Template, 1, 1, "ng-template", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "mat-autocomplete", 64, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function EditExamDialogComponent_Template_mat_autocomplete_optionSelected_178_listener($event) { return ctx.addOwner($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](180, EditExamDialogComponent_mat_option_180_Template, 3, 2, "mat-option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](181, EditExamDialogComponent_ng_container_181_Template, 2, 1, "ng-container", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](182, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Exam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("completed", ctx.FormDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.hideElement(ctx.dialogIsLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](64, _c1, ctx.FormDetails.get("Title").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](66, _c1, ctx.FormDetails.get("Description").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 52, ctx.DescriptionCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](68, _c1, ctx.FormDetails.get("Owners").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.FormDetails.get("Owners").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.OwnersControl)("matAutocomplete", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](70, _c1, ctx.FormDetails.get("PassingRate").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("min", 0)("max", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](72, _c1, ctx.FormDetails.get("Tags").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](74, _c1, ctx.FormDetails.get("LearningCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecap-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](64, 54, ctx.LearningCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](76, _c1, ctx.FormDetails.get("LearningSubCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecap-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](73, 56, ctx.FilteredLearningSubCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("completed", ctx.QuestionForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.questionIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.hideElement(ctx.questionIsLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.QuestionForm.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.QuestionForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.curriculumIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.hideElement(ctx.curriculumIsLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.CurriculumSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](112, 58, ctx.FilteredCurriculumList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.AssignedCurriculum.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AssignedCurriculum.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.courseIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.hideElement(ctx.courseIsLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](146, 60, ctx.FilteredCourseList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AssignedCourse.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AssignedCourse.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.FormDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.IsSearchingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.IsSearchingUser && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](182, 62, ctx.SearchUserList));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_21__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgSwitchCase"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]], styles: ["#details-section[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n  background-color: rgba(217, 217, 217, 0.25);\n  box-sizing: border-box;\n}\n#details-section[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  max-width: 300px;\n  display: grid;\n  gap: 10px;\n}\n.tip[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  align-self: flex-end;\n}\n#question-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 10px;\n}\n.q-item[_ngcontent-%COMP%] {\n  border: #969696 1px solid;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: rgba(217, 217, 217, 0.2);\n  display: grid;\n  gap: inherit;\n  grid-template-columns: 20px 1fr;\n  align-items: baseline;\n}\n.q-item.invalid[_ngcontent-%COMP%] {\n  border-color: var(--onecaplite-red);\n}\n.q-item[_ngcontent-%COMP%]   .q-index[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.q-item[_ngcontent-%COMP%]   .q-type[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  align-items: center;\n}\n.q-item[_ngcontent-%COMP%]   .q-type[_ngcontent-%COMP%]   .select-container[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.q-item[_ngcontent-%COMP%]   .q-type[_ngcontent-%COMP%]   .onecap-icon-btn[_ngcontent-%COMP%] {\n  justify-self: flex-end;\n}\n.q-item[_ngcontent-%COMP%]   .q-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: inherit;\n}\n.answer-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: inherit;\n}\n.assigned-section[_ngcontent-%COMP%] {\n  border-top: 1px inset #000000;\n}\n.basic-form.summary[_ngcontent-%COMP%] {\n  padding: 15px;\n  gap: 20px;\n}\n.basic-form.summary[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n#filter[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n#filter[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  padding-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZXhhbS9kaWFsb2dzL2VkaXQtZXhhbS1kaWFsb2cvZWRpdC1leGFtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQURKO0FBS0E7RUFDRSx5QkFBQTtFQUNBLG9CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUtBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQUZGO0FBSUU7RUFDRSxtQ0FBQTtBQUZKO0FBS0U7RUFDRSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUpKO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFPSTtFQUNFLHNCQUFBO0FBTE47QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFQSjtBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQVJGO0FBV0E7RUFDRSw2QkFBQTtBQVJGO0FBV0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQVJGO0FBU0U7RUFBVSxZQUFBO0FBTlo7QUFVRTtFQUFRLGlCQUFBO0FBTlY7QUFTQTtFQUNFLHFDQUFBO0FBTkY7QUFPRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWV4YW0vZGlhbG9ncy9lZGl0LWV4YW0tZGlhbG9nL2VkaXQtZXhhbS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiNkZXRhaWxzLXNlY3Rpb24ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjI1KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAuY29sdW1uIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAxMHB4XHJcbiAgfVxyXG59XHJcblxyXG4udGlwIHtcclxuICBmb250LXNpemU6IHZhcigtLWZvbnQteHMpO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4jcXVlc3Rpb24tbGlzdCB7XHJcbiAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBnYXAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuLnEtaXRlbSB7XHJcbiAgYm9yZGVyICAgICAgICAgICAgICAgIDogIzk2OTY5NiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICAgIDogNXB4O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgICA6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgIDogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4yKTtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdhcCAgICAgICAgICAgICAgICAgICA6IGluaGVyaXQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIDogMjBweCAxZnI7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgICAgIDogYmFzZWxpbmU7XHJcblxyXG4gICYuaW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtcmVkKTtcclxuICB9XHJcblxyXG4gIC5xLWluZGV4IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgLnEtdHlwZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMzBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm9uZWNhcC1pY29uLWJ0biB7XHJcbiAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucS1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXkgICAgICAgICA6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdyAgOiByb3c7XHJcbiAgICBnYXAgICAgICAgICAgICAgOiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuLmFuc3dlci1saXN0IHtcclxuICBkaXNwbGF5ICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93ICA6IHJvdztcclxuICBnYXAgICAgICAgICAgICAgOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYXNzaWduZWQtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGluc2V0ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5iYXNpYy1mb3JtLnN1bW1hcnkge1xyXG4gIHBhZGRpbmcgOiAxNXB4O1xyXG4gIGdhcCAgICAgOiAyMHB4O1xyXG4gIC5jb2x1bW4geyBnYXA6IGluaGVyaXQgfVxyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIGxhYmVsIHsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxufVxyXG5cclxuI2ZpbHRlciB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAudGlwIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14cyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditExamDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './edit-exam-dialog.component.html',
                styleUrls: ['./edit-exam-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_15__["ExamService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__["CourseService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "kM8D":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/admin-exam/admin-exam.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExamModule", function() { return AdminExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-exam-routing.module */ "nPLF");
/* harmony import */ var _admin_exam_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-exam.component */ "5Vx8");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/edit-exam-dialog/edit-exam-dialog.component */ "PnC0");







class AdminExamModule {
}
AdminExamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminExamModule });
AdminExamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminExamModule_Factory(t) { return new (t || AdminExamModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminExamRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminExamModule, { declarations: [_admin_exam_component__WEBPACK_IMPORTED_MODULE_3__["AdminExamComponent"],
        _dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditExamDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminExamRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminExamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_exam_component__WEBPACK_IMPORTED_MODULE_3__["AdminExamComponent"],
                    _dialogs_edit_exam_dialog_edit_exam_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditExamDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_exam_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminExamRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nPLF":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-exam/admin-exam-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminExamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminExamRoutingModule", function() { return AdminExamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-exam.component */ "5Vx8");





const routes = [{ path: '', component: _admin_exam_component__WEBPACK_IMPORTED_MODULE_2__["AdminExamComponent"] }];
class AdminExamRoutingModule {
}
AdminExamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminExamRoutingModule });
AdminExamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminExamRoutingModule_Factory(t) { return new (t || AdminExamRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminExamRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminExamRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-exam-admin-exam-module.js.map
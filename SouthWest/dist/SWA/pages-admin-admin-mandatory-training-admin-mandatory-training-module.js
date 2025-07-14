(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-mandatory-training-admin-mandatory-training-module"],{

/***/ "Kzks":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-mandatory-training/admin-mandatory-training-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: AdminMandatoryTrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMandatoryTrainingRoutingModule", function() { return AdminMandatoryTrainingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_mandatory_training_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-mandatory-training.component */ "iVLZ");





const routes = [{ path: '', component: _admin_mandatory_training_component__WEBPACK_IMPORTED_MODULE_2__["AdminMandatoryTrainingComponent"] }];
class AdminMandatoryTrainingRoutingModule {
}
AdminMandatoryTrainingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminMandatoryTrainingRoutingModule });
AdminMandatoryTrainingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminMandatoryTrainingRoutingModule_Factory(t) { return new (t || AdminMandatoryTrainingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminMandatoryTrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMandatoryTrainingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bdR7":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-mandatory-training/dialogs/edit-mandatory-training-dialog/edit-mandatory-training-dialog.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: EditMandatoryTrainingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMandatoryTrainingDialogComponent", function() { return EditMandatoryTrainingDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var src_app_core_data_model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/model/mandatory-training.model */ "WIjr");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/mandatory-training.service */ "3HJw");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

























function EditMandatoryTrainingDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditMandatoryTrainingDialogComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13.Title, " ");
} }
function EditMandatoryTrainingDialogComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditMandatoryTrainingDialogComponent_div_26_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.SelectedCourses.deselect(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r15 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r14.Title, " ");
} }
function EditMandatoryTrainingDialogComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " No courses assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditMandatoryTrainingDialogComponent_mat_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r18.Title, " ");
} }
function EditMandatoryTrainingDialogComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditMandatoryTrainingDialogComponent_div_41_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r19 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.SelectedExams.deselect(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r20 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.Title, " ");
} }
function EditMandatoryTrainingDialogComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " No exams assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditMandatoryTrainingDialogComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditMandatoryTrainingDialogComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", index_r23 + 1, " ");
} }
function EditMandatoryTrainingDialogComponent_ng_template_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", index_r25 + 1, " ");
} }
const _c0 = function (a0) { return { "invalid": a0 }; };
const mandatoryTrainingValidation = (control) => {
    const DeadLineForm = control.get('Deadline');
    const LastNotificationForm = control.get('LastNotification');
    const deadline = DeadLineForm.value;
    const lastNotificationDate = LastNotificationForm.value;
    if (deadline.length > 0 && lastNotificationDate.length > 0) {
        const deadlineDate = new Date(deadline);
        const lastNotificationDateData = new Date(lastNotificationDate);
        if (deadlineDate.getTime() > lastNotificationDateData.getTime()) {
            const invalidValues = {
                message: 'Last notification date must be later than deadline date.',
                values: control.value
            };
            DeadLineForm.setErrors({ invalidValues });
            LastNotificationForm.setErrors({ invalidValues });
        }
        else {
            DeadLineForm.setErrors(null);
            LastNotificationForm.setErrors(null);
        }
    }
    return null;
};
class EditMandatoryTrainingDialogComponent {
    constructor(dialog, courseService, examService, mandatoryTrainingService, dialogRef, data) {
        this.dialog = dialog;
        this.courseService = courseService;
        this.examService = examService;
        this.mandatoryTrainingService = mandatoryTrainingService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = 'Create';
        this.currentDate = new Date().toISOString().split('T')[0];
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
        // Data
        this.dialogIsLoading = true;
        this.coursesIsLoading = true;
        this.examsIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-1),
            Deadline: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.currentDate, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            LastNotification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            NotificationSubject: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            NotificationMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
        }, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, mandatoryTrainingValidation],
        });
        this.SelectedCourses = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true);
        this.SelectedExams = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](true);
        this.NotificationMessageCount = this.FormDetails.get('NotificationMessage').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_10__["getDescriptionCount"])(data)));
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.CourseList,
            this.SelectedCourses.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([List, selectedItems]) => {
            return List.filter(e => selectedItems ? !selectedItems.source.isSelected(e) : true);
        }));
        this.ExamSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.ExamList = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.FilteredExamList = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.ExamList,
            this.SelectedExams.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(null)),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([List, selectedItems]) => {
            return List.filter(e => selectedItems ? !selectedItems.source.isSelected(e) : true);
        }));
        this.dialogName = () => `${this.dialogTitle} Curriculum`;
    }
    closeDialog() {
        const self = this;
        const promptDialog = self.dialog.promptDialog(`${this.dialogTitle} Mandatory Training`, 'Changes will NOT be saved. Proceed?');
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
            const [courseList, examList,] = yield Promise.all([
                this.courseService.getAll(),
                this.examService.getAll(),
            ]);
            this.CourseList.next(courseList);
            this.ExamList.next(examList);
            yield this.updateDetails();
            this.dialogIsLoading = false;
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { mandatoryTraining } = this.data;
                const { Id, CoursesId, ExamsId, DueDate, FinalDate, NotificationSubject, NotificationMessage, } = mandatoryTraining;
                const Courses = Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e));
                const Exams = Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e));
                const DeadlineDate = DueDate.toISOString().split('T')[0];
                const LastNotificationDate = FinalDate ? FinalDate.toISOString().split('T')[0] : '';
                this.SelectedCourses.select(...Courses);
                this.SelectedExams.select(...Exams);
                console.log('Mandatory Training:', mandatoryTraining);
                this.FormDetails.patchValue({
                    Id,
                    NotificationSubject,
                    NotificationMessage,
                    Deadline: DeadlineDate,
                    LastNotification: LastNotificationDate,
                });
            }
        });
    }
    reorderItems(selectionItem, $event) {
        const items = selectionItem.selected;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["moveItemInArray"])(items, $event.previousIndex, $event.currentIndex);
        selectionItem.clear();
        selectionItem.select(...items);
    }
    filterNumberInputs($event) {
        if ($event.which !== 8 && $event.which !== 0 && $event.which < 48 || $event.which > 57) {
            $event.preventDefault();
        }
    }
    revertToMinOrMax($event, controlName) {
        const { value } = $event.target;
        if (value > 100 || value < 0) {
            this.FormDetails.get(controlName).setValue(value > 100 ? 100 : 0);
        }
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Deadline, LastNotification, NotificationSubject, NotificationMessage, } = this.FormDetails.value;
            const Courses = this.SelectedCourses.selected;
            const Exams = this.SelectedExams.selected;
            const requestData = new src_app_core_data_model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_9__["MandatoryTraining"]({
                Id,
                NotificationSubject,
                NotificationMessage,
                CoursesId: new Set(Courses.map(e => e.Id)),
                ExamsId: new Set(Exams.map(e => e.Id)),
                DueDate: new Date(Deadline),
                FinalDate: LastNotification ? new Date(LastNotification) : null,
            });
            const updatedData = yield this.mandatoryTrainingService.save(requestData);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
EditMandatoryTrainingDialogComponent.ɵfac = function EditMandatoryTrainingDialogComponent_Factory(t) { return new (t || EditMandatoryTrainingDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_14__["MandatoryTrainingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
EditMandatoryTrainingDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditMandatoryTrainingDialogComponent, selectors: [["ng-component"]], decls: 92, vars: 38, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Mandatory Training Details"], ["class", "stepper-loader", 4, "ngIf"], [1, "stepper-content", "selection", 3, "hidden"], [1, "selection-section"], ["id", "selection-container"], [1, "selection-table", "drag-drop"], [1, "table-label"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search for a course", 3, "formControl", "matAutocomplete"], ["autoActiveFirstOption", "", 3, "optionSelected"], ["itemSelectionCourse", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkDropList", "", 1, "table-body", 3, "cdkDropListDropped"], ["class", "table-row selection", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["class", "table-row selection", 4, "ngIf"], ["id", "separator"], ["type", "text", "placeholder", "Search for an exam", 3, "formControl", "matAutocomplete"], ["itemSelectionExam", "matAutocomplete"], [1, "stepper-action"], ["matStepperNext", "", 1, "onecap-btn", "accent-2", 3, "disabled"], [1, "button-wrapper"], ["label", "Email Reminder Details"], [1, "stepper-content", 3, "hidden"], [1, "mandatory-training-form", 3, "formGroup"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], ["type", "text", "formControlName", "NotificationSubject"], [1, "editor-container"], ["formControlName", "NotificationMessage", 3, "editor", "config"], [1, "date-section"], ["type", "date", "formControlName", "Deadline", 3, "min"], ["type", "date", "formControlName", "LastNotification", 3, "min"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], [1, "stepper-loader"], [3, "value"], ["cdkDrag", "", 1, "table-row", "selection"], ["cdkDragHandle", "", 1, "material-icons", "drag-handle"], [1, "col"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "table-row", "selection"], [1, "onecap-lbl", "error"]], template: function EditMandatoryTrainingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditMandatoryTrainingDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-horizontal-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditMandatoryTrainingDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Mandatory Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-autocomplete", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function EditMandatoryTrainingDialogComponent_Template_mat_autocomplete_optionSelected_21_listener($event) { ctx.SelectedCourses.select($event.option.value); return ctx.CourseSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, EditMandatoryTrainingDialogComponent_mat_option_23_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function EditMandatoryTrainingDialogComponent_Template_div_cdkDropListDropped_25_listener($event) { return ctx.reorderItems(ctx.SelectedCourses, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EditMandatoryTrainingDialogComponent_div_26_Template, 10, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, EditMandatoryTrainingDialogComponent_div_27_Template, 5, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Mandatory Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-autocomplete", 17, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function EditMandatoryTrainingDialogComponent_Template_mat_autocomplete_optionSelected_36_listener($event) { ctx.SelectedExams.select($event.option.value); return ctx.ExamSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, EditMandatoryTrainingDialogComponent_mat_option_38_Template, 2, 2, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function EditMandatoryTrainingDialogComponent_Template_div_cdkDropListDropped_40_listener($event) { return ctx.reorderItems(ctx.SelectedExams, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, EditMandatoryTrainingDialogComponent_div_41_Template, 10, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, EditMandatoryTrainingDialogComponent_div_42_Template, 5, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-step", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, EditMandatoryTrainingDialogComponent_div_50_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Email Notification Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Email Notification Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "ckeditor", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Due Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Final Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditMandatoryTrainingDialogComponent_Template_button_click_88_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, EditMandatoryTrainingDialogComponent_ng_template_90_Template, 1, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](91, EditMandatoryTrainingDialogComponent_ng_template_91_Template, 1, 1, "ng-template", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Mandatory Training ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter)("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 26, ctx.FilteredCourseList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.SelectedCourses.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.SelectedCourses.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ExamSearchFilter)("matAutocomplete", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 28, ctx.FilteredExamList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.SelectedExams.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.SelectedExams.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.SelectedCourses.isEmpty() && ctx.SelectedExams.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c0, ctx.FormDetails.get("NotificationSubject").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c0, ctx.FormDetails.get("NotificationMessage").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c0, ctx.FormDetails.get("Deadline").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.FormDetails.get("LastNotification").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.currentDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_18__["CKEditorComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperIcon"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDragHandle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: [".selection-section[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n}\n\n.mandatory-training-form[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n  gap: 20px;\n}\n\n.date-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 45px;\n  grid-template-columns: repeat(2, max-content);\n}\n\n.date-section[_ngcontent-%COMP%]    > .onecap-input-form[_ngcontent-%COMP%] {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWFuZGF0b3J5LXRyYWluaW5nL2RpYWxvZ3MvZWRpdC1tYW5kYXRvcnktdHJhaW5pbmctZGlhbG9nL2VkaXQtbWFuZGF0b3J5LXRyYWluaW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDZDQUFBO0FBRUY7O0FBQUU7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1tYW5kYXRvcnktdHJhaW5pbmcvZGlhbG9ncy9lZGl0LW1hbmRhdG9yeS10cmFpbmluZy1kaWFsb2cvZWRpdC1tYW5kYXRvcnktdHJhaW5pbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGlvbi1zZWN0aW9uIHtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxufVxyXG4ubWFuZGF0b3J5LXRyYWluaW5nLWZvcm0ge1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gIGdhcCAgICAgICAgICAgICA6IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXkgOiBncmlkO1xyXG4gIGdhcCAgICAgOiA0NXB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHJcbiAgJiA+IC5vbmVjYXAtaW5wdXQtZm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditMandatoryTrainingDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './edit-mandatory-training-dialog.component.html',
                styleUrls: ['./edit-mandatory-training-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_13__["ExamService"] }, { type: src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_14__["MandatoryTrainingService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "fZNN":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-mandatory-training/admin-mandatory-training.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdminMandatoryTrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMandatoryTrainingModule", function() { return AdminMandatoryTrainingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_mandatory_training_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-mandatory-training-routing.module */ "Kzks");
/* harmony import */ var _admin_mandatory_training_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-mandatory-training.component */ "iVLZ");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialogs/edit-mandatory-training-dialog/edit-mandatory-training-dialog.component */ "bdR7");







class AdminMandatoryTrainingModule {
}
AdminMandatoryTrainingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminMandatoryTrainingModule });
AdminMandatoryTrainingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminMandatoryTrainingModule_Factory(t) { return new (t || AdminMandatoryTrainingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_mandatory_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminMandatoryTrainingRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminMandatoryTrainingModule, { declarations: [_admin_mandatory_training_component__WEBPACK_IMPORTED_MODULE_3__["AdminMandatoryTrainingComponent"], _dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditMandatoryTrainingDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_mandatory_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminMandatoryTrainingRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMandatoryTrainingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_mandatory_training_component__WEBPACK_IMPORTED_MODULE_3__["AdminMandatoryTrainingComponent"], _dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditMandatoryTrainingDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_mandatory_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminMandatoryTrainingRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "iVLZ":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-mandatory-training/admin-mandatory-training.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdminMandatoryTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMandatoryTrainingComponent", function() { return AdminMandatoryTrainingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/mandatory-training.model */ "WIjr");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/edit-mandatory-training-dialog/edit-mandatory-training-dialog.component */ "bdR7");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/mandatory-training.service */ "3HJw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");














function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subItem_r11, " ");
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subItem_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subItem_r12, " ");
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_div_4_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r13.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const item_r8 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r15.delete(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r8.CourseNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r8.ExamNames);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.DateDueDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.DateFinalDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.Status, " ");
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Exam Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Final Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_div_16_Template, 21, 5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r3);
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No mandatory training available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminMandatoryTrainingComponent_section_4_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_2_Template, 17, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_3_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminMandatoryTrainingComponent_section_4_ng_container_14_div_4_Template, 2, 0, "div", 19);
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
function AdminMandatoryTrainingComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMandatoryTrainingComponent_section_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Create Mandatory Training ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AdminMandatoryTrainingComponent_section_4_ng_container_14_Template, 5, 3, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.keywordFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 2, ctx_r0.filteredMandatoryTrainingList));
} }
function AdminMandatoryTrainingComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminMandatoryTrainingComponent {
    constructor(dialog, mandatoryTrainingService) {
        this.dialog = dialog;
        this.mandatoryTrainingService = mandatoryTrainingService;
        this.pageIsLoading = false;
        this.dataIsLoading = true;
        this.mandatoryTrainingList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.keywordFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.filteredMandatoryTrainingList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.mandatoryTrainingList,
            this.keywordFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(125), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([mandatoryTrainingList, keyword]) => {
            if (keyword === '') {
                return mandatoryTrainingList;
            }
            return mandatoryTrainingList.filter(e => {
                const tagWords = [
                    e.CourseNames.join(' '),
                    e.ExamNames.join(' '),
                ].join(' ');
                return Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(tagWords, keyword);
            });
        }));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const MandatoryTrainingList = yield this.mandatoryTrainingService.getAll();
            this.mandatoryTrainingList.next(MandatoryTrainingList);
            this.dataIsLoading = false;
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditMandatoryTrainingDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const editDialog = this.dialog.open(_dialogs_edit_mandatory_training_dialog_edit_mandatory_training_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditMandatoryTrainingDialogComponent"], {
                data: { mandatoryTraining: new src_app_core_data_model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_5__["MandatoryTraining"](data) }
            });
            const isSaved = yield editDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mandatoryTrainingTitle = [...data.CourseNames, ...data.ExamNames].join(', ');
            const promptDialog = this.dialog.deleteDialog(mandatoryTrainingTitle);
            const isProceed = yield promptDialog.afterClosed().toPromise();
            if (isProceed) {
                const loader = this.dialog.loaderDialog();
                yield this.mandatoryTrainingService.delete(data);
                loader.close();
                this.loadData();
            }
        });
    }
}
AdminMandatoryTrainingComponent.ɵfac = function AdminMandatoryTrainingComponent_Factory(t) { return new (t || AdminMandatoryTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_9__["MandatoryTrainingService"])); };
AdminMandatoryTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminMandatoryTrainingComponent, selectors: [["app-admin-mandatory-training"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Course/Exam", 3, "formControl"], ["id", "actions"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [4, "ngIf"], [1, "table-container"], ["id", "mandatory-training-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "mandatory-training-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "click"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "click"], [1, "item"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminMandatoryTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Mandatory Training ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminMandatoryTrainingComponent_section_4_Template, 16, 4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminMandatoryTrainingComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: flex-end;\n}\n\n#mandatory-training-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #mandatory-training-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 125px;\n}\n\n#mandatory-training-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%], #mandatory-training-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   #details[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 2fr) repeat(3, 125px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWFuZGF0b3J5LXRyYWluaW5nL2FkbWluLW1hbmRhdG9yeS10cmFpbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUU7RUFDRSxnQ0FBQTtBQUNKOztBQUFJO0VBQ0Usc0RBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLW1hbmRhdG9yeS10cmFpbmluZy9hZG1pbi1tYW5kYXRvcnktdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsdGVycyB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiByZXBlYXQoNCwgMWZyKTtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4jbWFuZGF0b3J5LXRyYWluaW5nLXRhYmxlIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyNXB4O1xyXG4gICAgI2RldGFpbHMge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAyZnIpIHJlcGVhdCgzLCAxMjVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminMandatoryTrainingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-mandatory-training',
                templateUrl: './admin-mandatory-training.component.html',
                styleUrls: ['./admin-mandatory-training.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: src_app_core_data_service_mandatory_training_service__WEBPACK_IMPORTED_MODULE_9__["MandatoryTrainingService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-mandatory-training-admin-mandatory-training-module.js.map
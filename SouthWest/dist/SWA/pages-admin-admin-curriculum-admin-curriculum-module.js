(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-curriculum-admin-curriculum-module"],{

/***/ "94eq":
/*!****************************************************************************!*\
  !*** ./src/app/pages/admin/admin-curriculum/admin-curriculum.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdminCurriculumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCurriculumComponent", function() { return AdminCurriculumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/curriculum.model */ "yh7w");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/edit-curriculum-dialog/edit-curriculum-dialog.component */ "QcTw");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");
















function AdminCurriculumComponent_section_4_ng_container_23_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCurriculumComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.update(item_r8); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCurriculumComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r11.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCurriculumComponent_section_4_ng_container_23_div_2_div_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.delete(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "clear");
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
} }
function AdminCurriculumComponent_section_4_ng_container_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Curriculum Name ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminCurriculumComponent_section_4_ng_container_23_div_2_div_10_Template, 15, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r3);
} }
function AdminCurriculumComponent_section_4_ng_container_23_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCurriculumComponent_section_4_ng_container_23_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCurriculumComponent_section_4_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminCurriculumComponent_section_4_ng_container_23_div_2_Template, 11, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminCurriculumComponent_section_4_ng_container_23_div_3_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminCurriculumComponent_section_4_ng_container_23_div_4_Template, 2, 0, "div", 22);
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
function AdminCurriculumComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Curriculum Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Curriculum Owner");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCurriculumComponent_section_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Create Curriculum ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, AdminCurriculumComponent_section_4_ng_container_23_Template, 5, 3, "ng-container", 18);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 5, ctx_r0.filteredCurriculumList));
} }
function AdminCurriculumComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminCurriculumComponent {
    constructor(dialog, curriculumService) {
        this.dialog = dialog;
        this.curriculumService = curriculumService;
        this.pageIsLoading = false;
        this.dataIsLoading = true;
        this.curriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.keywordFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ownerFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1);
        this.ownedCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ownerFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(1)),
            this.curriculumList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([isOwner, List]) => {
            if (isOwner === 1) {
                return List.filter(e => e.IsOwner);
            }
            return List;
        }));
        this.filteredCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.keywordFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(125), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
            this.ownedCurriculumList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([keyword, curriculumList]) => {
            if (keyword === '') {
                return curriculumList;
            }
            return curriculumList.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, keyword));
        }));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const CurriculumList = yield this.curriculumService.getAll();
            this.curriculumList.next(CurriculumList);
            this.dataIsLoading = false;
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditCurriculumDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.IsOwner) {
                const editDialog = this.dialog.open(_dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditCurriculumDialogComponent"], { data: { curriculum: new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_5__["Curriculum"](data) } });
                const isSaved = yield editDialog.afterClosed().toPromise();
                if (isSaved) {
                    yield this.loadData();
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
                yield this.curriculumService.delete(data);
                loaderDialog.close();
                yield this.loadData();
            }
        });
    }
}
AdminCurriculumComponent.ɵfac = function AdminCurriculumComponent_Factory(t) { return new (t || AdminCurriculumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_9__["CurriculumService"])); };
AdminCurriculumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminCurriculumComponent, selectors: [["app-admin-curriculum"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "select-container"], ["placeholder", "All Category", 3, "formControl"], [3, "value"], ["id", "actions"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [4, "ngIf"], [1, "table-container"], ["id", "curriculum-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "curriculum-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-link-btn", "accent-2", 3, "click"], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "disabled", "click"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminCurriculumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminCurriculumComponent_section_4_Template, 25, 7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminCurriculumComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: flex-end;\n}\n\n#curriculum-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #curriculum-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY3VycmljdWx1bS9hZG1pbi1jdXJyaWN1bHVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHRTtFQUNFLGdDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1jdXJyaWN1bHVtL2FkbWluLWN1cnJpY3VsdW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZmlsdGVycyB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiByZXBlYXQoNCwgMWZyKTtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuI2FjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuI2N1cnJpY3VsdW0tdGFibGUge1xyXG4gIC50YWJsZS1oZWFkZXIsIC50YWJsZS1yb3cge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTc1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminCurriculumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-curriculum',
                templateUrl: './admin-curriculum.component.html',
                styleUrls: ['./admin-curriculum.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_9__["CurriculumService"] }]; }, null); })();


/***/ }),

/***/ "QcTw":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-curriculum/dialog/edit-curriculum-dialog/edit-curriculum-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: EditCurriculumDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCurriculumDialogComponent", function() { return EditCurriculumDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/model/curriculum.model */ "yh7w");
/* harmony import */ var src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/model/_model */ "Ka/f");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");































const _c0 = ["stepper"];
function EditCurriculumDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_div_37_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const i_r21 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.removeOwner(i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r20.Title);
} }
function EditCurriculumDialogComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r24.Title);
} }
function EditCurriculumDialogComponent_mat_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.Title);
} }
function EditCurriculumDialogComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_81_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_81_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_div_81_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const item_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.AssignedCourse.select(item_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r29.Title, " ");
} }
function EditCurriculumDialogComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Click the add button to add a course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditCurriculumDialogComponent_div_81_div_8_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditCurriculumDialogComponent_div_81_div_9_Template, 7, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r26 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r26.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r26);
} }
function EditCurriculumDialogComponent_div_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_div_93_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const item_r32 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.AssignedCourse.deselect(item_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r33 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r32.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !item_r32.IsOwner);
} }
function EditCurriculumDialogComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_116_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No exam available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_116_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_div_116_div_9_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r41); const item_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r40.AssignedExam.select(item_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r39.Title, " ");
} }
function EditCurriculumDialogComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Exam Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Click the add button to add an exam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditCurriculumDialogComponent_div_116_div_8_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditCurriculumDialogComponent_div_116_div_9_Template, 6, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r36 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r36.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r36);
} }
function EditCurriculumDialogComponent_div_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No exam assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_div_128_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const item_r42 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.AssignedExam.deselect(item_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r43 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r42.Title, " ");
} }
function EditCurriculumDialogComponent_div_141_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No description available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_141_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r51.Title, " ");
} }
function EditCurriculumDialogComponent_div_141_div_33_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_141_div_33_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r56 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r55.Title, " ");
} }
function EditCurriculumDialogComponent_div_141_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Assigned Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditCurriculumDialogComponent_div_141_div_33_div_4_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditCurriculumDialogComponent_div_141_div_33_div_5_Template, 5, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const AssignedList_r52 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", AssignedList_r52.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", AssignedList_r52.selected);
} }
function EditCurriculumDialogComponent_div_141_div_34_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No exam assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCurriculumDialogComponent_div_141_div_34_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const i_r61 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r61 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r60.Title, " ");
} }
function EditCurriculumDialogComponent_div_141_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Assigned Exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, EditCurriculumDialogComponent_div_141_div_34_div_4_Template, 2, 0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditCurriculumDialogComponent_div_141_div_34_div_5_Template, 5, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const AssignedList_r57 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", AssignedList_r57.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", AssignedList_r57.selected);
} }
function EditCurriculumDialogComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Curriculum Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Curriculum Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditCurriculumDialogComponent_div_141_div_12_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Curriculum Owner/s*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditCurriculumDialogComponent_div_141_div_18_Template, 2, 1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Sub-Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "section", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, EditCurriculumDialogComponent_div_141_div_33_Template, 6, 2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, EditCurriculumDialogComponent_div_141_div_34_Template, 6, 2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r46 = ctx.ngIf;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r14.FormDetails.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", details_r46.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, ctx_r14.DescriptionCount) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", details_r46.Owners);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.LearningCategory ? details_r46.LearningCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.LearningSubCategory ? details_r46.LearningSubCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.AssignedCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.AssignedExam);
} }
function EditCurriculumDialogComponent_ng_template_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r62 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r62 + 1, " ");
} }
function EditCurriculumDialogComponent_ng_template_151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r64 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r64 + 1, " ");
} }
function EditCurriculumDialogComponent_mat_option_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-spinner", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 24);
} }
function EditCurriculumDialogComponent_ng_container_155_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", profile_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", profile_r68.DisplayText, " ");
} }
function EditCurriculumDialogComponent_ng_container_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditCurriculumDialogComponent_ng_container_155_mat_option_1_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const searchedUsers_r66 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", searchedUsers_r66);
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
class EditCurriculumDialogComponent {
    constructor(dialog, userService, dropdownService, courseService, examService, curriculumService, accountService, dialogRef, data) {
        this.dialog = dialog;
        this.userService = userService;
        this.dropdownService = dropdownService;
        this.courseService = courseService;
        this.examService = examService;
        this.curriculumService = curriculumService;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = 'Create';
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
        // Data
        this.dialogIsLoading = true;
        this.coursesIsLoading = true;
        this.examsIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-1),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Owners: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([], {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            LearningCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            LearningSubCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
        });
        this.DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__["getDescriptionCount"])(data)));
        this.LearningCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.LearningSubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.FilteredLearningSubCategoryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.FormDetails.get('LearningCategory').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.FormDetails.get('LearningSubCategory').setValue(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null)),
            this.LearningSubCategoryList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([selectedCategory, List]) => {
            if (selectedCategory === null) {
                return [];
            }
            return List.filter(e => e.CategoryId === selectedCategory.Id);
        }));
        this.AssignedCourse = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true);
        this.AssignedCourse$ = this.AssignedCourse.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.AssignedCourse$,
            this.CourseList,
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
                e.IsOwner,
            ].every(c => c);
        })));
        this.AssignedExam = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true);
        this.AssignedExam$ = this.AssignedExam.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.ExamSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.ExamList = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]([]);
        this.FilteredExamList = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.AssignedExam$,
            this.ExamList,
            this.ExamSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
                e.IsOwner,
            ].every(c => c);
        })));
        this.OwnersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.IsSearchingUser = false;
        this.SearchUserList = this.OwnersControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((input) => this.userService.searchUser(input)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.IsSearchingUser = false));
        this.dialogName = () => `${this.dialogTitle} Curriculum`;
        this.displayFn = (data) => data ? data.DisplayText : '';
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
    reorderItems(selectionItem, $event) {
        const items = selectionItem.selected;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(items, $event.previousIndex, $event.currentIndex);
        selectionItem.clear();
        selectionItem.select(...items);
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
            this.coursesIsLoading = true;
            this.examsIsLoading = true;
            const [LearningCategoryList, LearningSubCategoryList] = yield Promise.all([
                this.dropdownService.getLearningCategory(),
                this.dropdownService.getLearningSubCategory()
            ]);
            this.LearningCategoryList.next(LearningCategoryList);
            this.LearningSubCategoryList.next(LearningSubCategoryList);
            yield this.updateDetails();
            this.dialogIsLoading = false;
            yield Promise.all([
                this.courseService.getAll().then((courseList) => {
                    this.CourseList.next(courseList);
                    this.updateAssignedCourses();
                    this.coursesIsLoading = false;
                }),
                this.examService.getAll().then((examList) => {
                    this.ExamList.next(examList);
                    this.updateAssignedExams();
                    this.examsIsLoading = false;
                }),
            ]);
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { Id, Title, Description, Owners, LearningSubCategoryId } = this.data.curriculum;
                let LearningCategoryObj = null;
                let LearningSubCategoryObj = null;
                LearningSubCategoryObj = this.LearningSubCategoryList.value.find(e => e.Id === LearningSubCategoryId);
                console.log(LearningSubCategoryObj);
                if (LearningSubCategoryObj) {
                    LearningCategoryObj = this.LearningCategoryList.value.find(e => e.Id === LearningSubCategoryObj.CategoryId);
                }
                this.FormDetails.patchValue({
                    Id,
                    Title,
                    Description,
                    Owners,
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
    updateAssignedCourses() {
        if (this.data) {
            const { CoursesId } = this.data.curriculum;
            this.AssignedCourse.select(...Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e)));
        }
    }
    updateAssignedExams() {
        if (this.data) {
            const { ExamsId } = this.data.curriculum;
            this.AssignedExam.select(...Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e)));
        }
    }
    validateName(skip = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Title } = this.FormDetails.value;
            const validated = yield this.curriculumService.validateTitle(Title, Id);
            loaderDialog.close();
            if (validated) {
                if (!skip) {
                    this.stepper.next();
                }
                else {
                    this.stepper.selectedIndex = 3;
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
            const { Id, Title, Description, Owners, LearningSubCategory: LearningSubCategoryObj } = this.FormDetails.value;
            const CoursesId = this.AssignedCourse.selected.map(e => e.Id);
            const ExamsId = this.AssignedExam.selected.map(e => e.Id);
            let EditorObj = new src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_11__["Person"]({});
            let DateModified = null;
            if (this.data) {
                const { Editor, Modified } = this.data.curriculum;
                EditorObj = Editor;
                DateModified = Modified;
            }
            const saveData = new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_10__["Curriculum"]({
                Id,
                Title,
                Description,
                Owners,
                CoursesId: new Set(CoursesId),
                ExamsId: new Set(ExamsId),
                IsOwner: true,
                LearningSubCategoryId: LearningSubCategoryObj.Id,
                Editor: EditorObj,
                Modified: DateModified,
            });
            yield this.curriculumService.save(saveData);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
EditCurriculumDialogComponent.ɵfac = function EditCurriculumDialogComponent_Factory(t) { return new (t || EditCurriculumDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_16__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
EditCurriculumDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCurriculumDialogComponent, selectors: [["ng-component"]], viewQuery: function EditCurriculumDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 157, vars: 63, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Curriculum Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "hidden"], ["id", "single-form", 3, "formGroup"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "input-container"], ["type", "text", "formControlName", "Title"], [1, "onecap-input-form"], [1, "editor-container"], ["formControlName", "Description", 3, "editor", "config"], [1, "counter"], [1, "onecap-input-form", 3, "ngClass", "focus", "click"], [1, "info-message"], [1, "textarea-container"], [1, "item-list"], ["class", "item-selection", 4, "ngFor", "ngForOf"], ["type", "text", 3, "formControl", "matAutocomplete"], ["inputOwner", ""], [1, "select-container"], ["formControlName", "LearningCategory", 3, "disableOptionCentering", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "LearningSubCategory", 3, "disableOptionCentering", "placeholder"], [1, "stepper-action"], [1, "onecap-link-btn", "accent-2", 3, "disabled", "click"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], ["label", "Assign Courses", 3, "optional"], [1, "stepper-content", "selection", 3, "hidden"], [1, "selection-section"], ["id", "filter"], ["type", "text", "placeholder", "Search", 3, "formControl"], ["id", "selection-container"], ["class", "selection-table selection", 4, "ngIf"], ["id", "separator"], [1, "selection-table", "selection", "drag-drop"], [1, "table-header"], [1, "col"], [1, "tip"], ["cdkDropList", "", 1, "table-body", 3, "cdkDropListDropped"], ["class", "table-row", 4, "ngIf"], ["class", "table-row selection", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["label", "Assign Exams", 3, "optional"], ["label", "Confirm Details"], ["class", "stepper-content", 3, "hidden", 4, "ngIf"], [1, "onecap-btn", "accent-2", 3, "click"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "disabled", 4, "ngIf"], [4, "ngIf"], [1, "stepper-loader"], [1, "item-selection"], [1, "onecap-icon-btn", "delete", 3, "click"], [1, "selection-table", "selection"], [1, "table-body"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-lbl", "error"], [1, "onecap-icon-btn", "accent-2", 3, "click"], ["cdkDrag", "", 1, "table-row", "selection"], ["cdkDragHandle", "", 1, "material-icons", "drag-handle"], [1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "index-number"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "stepper-content", 3, "hidden"], [1, "basic-form", "summary"], [1, "column"], [1, "field"], [3, "innerHTML"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "assigned-section"], ["class", "field", 4, "ngIf"], ["class", "onecap-lbl error", 4, "ngIf"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "index"], [3, "disabled"], [1, "flex", "align-items-center", "justify-content-center"], [3, "diameter"]], template: function EditCurriculumDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditCurriculumDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Curriculum Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Curriculum Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ckeditor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function EditCurriculumDialogComponent_Template_div_focus_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return _r3.focus(); })("click", function EditCurriculumDialogComponent_Template_div_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); return _r3.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Curriculum Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Search by name or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, EditCurriculumDialogComponent_div_37_Template, 6, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, EditCurriculumDialogComponent_mat_option_49_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Sub-category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, EditCurriculumDialogComponent_mat_option_60_Template, 2, 2, "mat-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](61, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_Template_button_click_63_listener() { return ctx.validateName(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Skip Assigning Courses and Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_Template_button_click_65_listener() { return ctx.validateName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "mat-step", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, EditCurriculumDialogComponent_div_71_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, EditCurriculumDialogComponent_div_81_Template, 10, 2, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Assigned Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Drag and drop the courses to arrange it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function EditCurriculumDialogComponent_Template_div_cdkDropListDropped_91_listener($event) { return ctx.reorderItems(ctx.AssignedCourse, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, EditCurriculumDialogComponent_div_92_Template, 4, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, EditCurriculumDialogComponent_div_93_Template, 10, 3, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mat-step", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, EditCurriculumDialogComponent_div_106_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Exam Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, EditCurriculumDialogComponent_div_116_Template, 10, 2, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](117, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Assigned Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " Drag and drop the exams to arrange it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function EditCurriculumDialogComponent_Template_div_cdkDropListDropped_126_listener($event) { return ctx.reorderItems(ctx.AssignedExam, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](127, EditCurriculumDialogComponent_div_127_Template, 4, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, EditCurriculumDialogComponent_div_128_Template, 10, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "mat-step", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](141, EditCurriculumDialogComponent_div_141_Template, 35, 11, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCurriculumDialogComponent_Template_button_click_148_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, EditCurriculumDialogComponent_ng_template_150_Template, 1, 1, "ng-template", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](151, EditCurriculumDialogComponent_ng_template_151_Template, 1, 1, "ng-template", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "mat-autocomplete", 58, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function EditCurriculumDialogComponent_Template_mat_autocomplete_optionSelected_152_listener($event) { return ctx.addOwner($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, EditCurriculumDialogComponent_mat_option_154_Template, 3, 2, "mat-option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, EditCurriculumDialogComponent_ng_container_155_Template, 2, 1, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](156, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Curriculum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("completed", ctx.FormDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](55, _c1, ctx.FormDetails.get("Title").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 43, ctx.DescriptionCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](57, _c1, ctx.FormDetails.get("Owners").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.FormDetails.get("Owners").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.OwnersControl)("matAutocomplete", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](59, _c1, ctx.FormDetails.get("LearningCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 45, ctx.LearningCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](61, _c1, ctx.FormDetails.get("LearningSubCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](61, 47, ctx.FilteredLearningSubCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.coursesIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.coursesIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 49, ctx.FilteredCourseList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AssignedCourse.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AssignedCourse.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.examsIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.examsIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.ExamSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](117, 51, ctx.FilteredExamList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.AssignedExam.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AssignedExam.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.FormDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.IsSearchingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.IsSearchingUser && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](156, 53, ctx.SearchUserList));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_21__["CKEditorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDragHandle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__["AsyncPipe"]], styles: [".basic-form.summary[_ngcontent-%COMP%] {\n  padding: 15px;\n  gap: 20px;\n}\n.basic-form.summary[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n.onecaplite-input.invalid[_ngcontent-%COMP%], .onecaplite-filepicker.invalid[_ngcontent-%COMP%] {\n  border-color: var(--onecaplite-red);\n}\n.onecaplite-select.invalid[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  border-color: var(--onecaplite-red);\n}\n.course-link[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  word-break: break-all;\n}\n.course-material[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 16px;\n}\n.course-material.invalid[_ngcontent-%COMP%]   span.required[_ngcontent-%COMP%] {\n  color: var(--onecaplite-red);\n}\n.course-material[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.course-material[_ngcontent-%COMP%]   mat-radio-group.onecaplite-radio-group[_ngcontent-%COMP%] {\n  gap: 10px;\n  grid-template-columns: auto 1fr;\n  grid-auto-rows: auto;\n  align-items: baseline;\n  justify-content: center;\n  column-gap: 0;\n}\n.course-material[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 5px;\n  width: 100%;\n}\n.course-material[_ngcontent-%COMP%]   .material-form[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: baseline;\n  grid-template-columns: 100px 1fr;\n}\n.course-material[_ngcontent-%COMP%]   .material-form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  margin: 0px 4px;\n  flex-grow: 1;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  font: inherit;\n  background-color: transparent;\n}\n.course-material[_ngcontent-%COMP%]   .material-form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.course-material[_ngcontent-%COMP%]   .material-form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.course-material[_ngcontent-%COMP%]   .material-form[_ngcontent-%COMP%]   .hint-message[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n}\n.course-material[_ngcontent-%COMP%]   .onecaplite-filepicker[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: var(--onecaplite-white);\n  box-sizing: border-box;\n}\n#details-section[_ngcontent-%COMP%] {\n  gap: 10px;\n  align-items: center;\n  background-color: rgba(217, 217, 217, 0.25);\n}\n#details-section[_ngcontent-%COMP%]   #upload-type[_ngcontent-%COMP%], #details-section[_ngcontent-%COMP%]   #single-form[_ngcontent-%COMP%], #details-section[_ngcontent-%COMP%]   #batch-form[_ngcontent-%COMP%] {\n  max-width: 450px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.tip[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n}\n#single-form[_ngcontent-%COMP%] {\n  padding: 20px 15px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px;\n  width: max-content;\n  align-self: center;\n  border-radius: 5px;\n}\n#single-form[_ngcontent-%COMP%]   #course-duration.onecaplite-input[_ngcontent-%COMP%] {\n  width: 150px;\n}\n#single-form[_ngcontent-%COMP%]   #course-duration.onecaplite-input[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: unset;\n}\n#single-form[_ngcontent-%COMP%]   .onecaplite-input[_ngcontent-%COMP%], #single-form[_ngcontent-%COMP%]   .onecaplite-select[_ngcontent-%COMP%] {\n  max-width: 450px;\n  width: 100%;\n}\n#single-form[_ngcontent-%COMP%]   .onecaplite-input[_ngcontent-%COMP%], #single-form[_ngcontent-%COMP%]   .onecaplite-select[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-white);\n}\n.selection-section[_ngcontent-%COMP%]    > #filter[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n#filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n}\n#filters[_ngcontent-%COMP%]   .onecaplite-input[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]   .onecaplite-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n#filters[_ngcontent-%COMP%]   .dropdown-filter[_ngcontent-%COMP%] {\n  flex-grow: 2;\n}\n#filters[_ngcontent-%COMP%]   .dropdown-filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n#filters[_ngcontent-%COMP%]   .dropdown-filter[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n  font-weight: bold;\n  align-self: center;\n}\n#filters[_ngcontent-%COMP%]   .dropdown-filter[_ngcontent-%COMP%]    > .onecaplite-select[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: unset;\n}\n.basic-form.summary[_ngcontent-%COMP%] {\n  padding: 15px;\n  gap: 20px;\n}\n.basic-form.summary[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n.assigned-section[_ngcontent-%COMP%] {\n  border-top: 1px inset #000000;\n}\n.results[_ngcontent-%COMP%] {\n  margin: 0px 60px;\n  display: grid;\n  gap: 50px;\n}\n.results-table[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  align-items: baseline;\n  gap: 20px;\n}\n.results-table[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.results-table[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-weight: normal;\n  margin-left: 20px;\n}\n.results-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  align-items: baseline;\n  grid-template-columns: 1fr 1fr;\n}\n.results-table[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--onecaplite-red);\n}\n.list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  align-items: baseline;\n  font-size: var(--font-sm);\n}\n.list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > .index[_ngcontent-%COMP%] {\n  color: #969696;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY3VycmljdWx1bS9kaWFsb2cvZWRpdC1jdXJyaWN1bHVtLWRpYWxvZy9lZGl0LWN1cnJpY3VsdW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjtBQUFFO0VBQVUsWUFBQTtBQUdaO0FBQ0U7RUFDRSxtQ0FBQTtBQUVKO0FBR0U7RUFDRSxtQ0FBQTtBQUFKO0FBSUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUlJO0VBQWdCLDRCQUFBO0FBRHBCO0FBSUU7RUFDRSxpQkFBQTtBQUZKO0FBSUU7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRko7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FBSko7QUFLSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFITjtBQUlNO0VBQ0UsMEJBQUE7QUFGUjtBQUlNO0VBQVUsYUFBQTtBQURoQjtBQUlJO0VBQWdCLHlCQUFBO0FBRHBCO0FBSUU7RUFDRSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtBQUZKO0FBTUE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUhGO0FBSUU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUZKO0FBTUE7RUFDRSx5QkFBQTtBQUhGO0FBT0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUFMRjtBQU9FO0VBQ0UsWUFBQTtBQUxKO0FBTUk7RUFDRSxZQUFBO0FBSk47QUFRRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQU5KO0FBUUU7RUFDRSx5Q0FBQTtBQU5KO0FBV0U7RUFDRSxxQkFBQTtBQVJKO0FBWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQVRGO0FBV0U7RUFDRSxZQUFBO0FBVEo7QUFZRTtFQUNFLFlBQUE7QUFWSjtBQWFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBWEo7QUFZSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVZOO0FBYUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVhOO0FBZ0JBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFiRjtBQWNFO0VBQVUsWUFBQTtBQVhaO0FBY0E7RUFDRSw2QkFBQTtBQVhGO0FBY0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBWEY7QUFjQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQVhGO0FBWUU7RUFDRSxpQkFBQTtBQVZKO0FBWUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBVko7QUFhRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQVhKO0FBWUk7RUFDRSw0QkFBQTtBQVZOO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQWJKO0FBY0k7RUFDRSxjQUFBO0FBWk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1jdXJyaWN1bHVtL2RpYWxvZy9lZGl0LWN1cnJpY3VsdW0tZGlhbG9nL2VkaXQtY3VycmljdWx1bS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMtZm9ybS5zdW1tYXJ5IHtcclxuICBwYWRkaW5nIDogMTVweDtcclxuICBnYXAgICAgIDogMjBweDtcclxuICAuY29sdW1uIHsgZ2FwOiBpbmhlcml0IH1cclxufVxyXG5cclxuLm9uZWNhcGxpdGUtaW5wdXQsIC5vbmVjYXBsaXRlLWZpbGVwaWNrZXIge1xyXG4gICYuaW52YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtcmVkKTtcclxuICB9XHJcbn1cclxuXHJcbi5vbmVjYXBsaXRlLXNlbGVjdC5pbnZhbGlkIHtcclxuICBtYXQtc2VsZWN0IHtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1yZWQpO1xyXG4gIH1cclxufVxyXG5cclxuLmNvdXJzZS1saW5rIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4uY291cnNlLW1hdGVyaWFsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblxyXG4gICYuaW52YWxpZCB7XHJcbiAgICBzcGFuLnJlcXVpcmVkIHsgY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtcmVkKTsgfVxyXG4gIH1cclxuXHJcbiAgJiA+IGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBtYXQtcmFkaW8tZ3JvdXAub25lY2FwbGl0ZS1yYWRpby1ncm91cCB7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDA7XHJcbiAgfVxyXG5cclxuICAudXBsb2FkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5ICAgICAgIDogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICBnYXAgICAgICAgICAgIDogNXB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxZnI7XHJcbiAgICAmID4gaW5wdXQge1xyXG4gICAgICBtYXJnaW4gICAgOiAwcHggNHB4O1xyXG4gICAgICBmbGV4LWdyb3cgOiAxO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBoZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nICAgOiAwcHg7XHJcbiAgICAgIGZvbnQgICAgICA6IGluaGVyaXQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3IgICA6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNDIpO1xyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhpbnQtbWVzc2FnZSB7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC14cyk7IH1cclxuICB9XHJcblxyXG4gIC5vbmVjYXBsaXRlLWZpbGVwaWNrZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG59XHJcblxyXG4jZGV0YWlscy1zZWN0aW9uIHtcclxuICBnYXAgICAgICAgICAgICAgICA6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjI1KTtcclxuICAjdXBsb2FkLXR5cGUsICNzaW5nbGUtZm9ybSwgI2JhdGNoLWZvcm0ge1xyXG4gICAgbWF4LXdpZHRoIDogNDUwcHg7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbn1cclxuXHJcbi50aXAge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14cyk7XHJcbn1cclxuXHJcblxyXG4jc2luZ2xlLWZvcm0ge1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgICA6IDIwcHggMTVweDtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDFmcjtcclxuICBnYXAgICAgICAgICAgICAgICAgICAgOiAxMHB4O1xyXG4gIHdpZHRoICAgICAgICAgICAgICAgICA6IG1heC1jb250ZW50O1xyXG4gIGFsaWduLXNlbGYgICAgICAgICAgICA6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICAgIDogNXB4O1xyXG5cclxuICAjY291cnNlLWR1cmF0aW9uLm9uZWNhcGxpdGUtaW5wdXQge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub25lY2FwbGl0ZS1pbnB1dCwgLm9uZWNhcGxpdGUtc2VsZWN0IHtcclxuICAgIG1heC13aWR0aCA6IDQ1MHB4O1xyXG4gICAgd2lkdGggICAgIDogMTAwJTtcclxuICB9XHJcbiAgLm9uZWNhcGxpdGUtaW5wdXQsIC5vbmVjYXBsaXRlLXNlbGVjdCBtYXQtc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGlvbi1zZWN0aW9uIHtcclxuICAmID4gI2ZpbHRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgfVxyXG59XHJcblxyXG4jZmlsdGVycyB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgICAgIDogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbiAgICAgICAgOiByb3c7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgICAgIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCAgICAgICA6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwICAgICAgICAgICAgICAgICAgIDogMTVweDtcclxuXHJcbiAgLm9uZWNhcGxpdGUtaW5wdXQsIC5vbmVjYXBsaXRlLXNlbGVjdCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tZmlsdGVyIHtcclxuICAgIGZsZXgtZ3JvdzogMjtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1maWx0ZXIge1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgIDogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uICAgICAgICA6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zICAgICAgICAgICA6IGNlbnRlcjtcclxuICAgIGdhcCAgICAgICAgICAgICAgICAgICA6IDEwcHg7XHJcbiAgICAmID4gbGFiZWwge1xyXG4gICAgICBmb250LXNpemUgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICAgIGFsaWduLXNlbGYgIDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYgPiAub25lY2FwbGl0ZS1zZWxlY3Qge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIHdpZHRoOiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5iYXNpYy1mb3JtLnN1bW1hcnkge1xyXG4gIHBhZGRpbmcgOiAxNXB4O1xyXG4gIGdhcCAgICAgOiAyMHB4O1xyXG4gIC5jb2x1bW4geyBnYXA6IGluaGVyaXQgfVxyXG59XHJcblxyXG4uYXNzaWduZWQtc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IGluc2V0ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICBtYXJnaW4gICAgOiAwcHggNjBweDtcclxuICBkaXNwbGF5ICAgOiBncmlkO1xyXG4gIGdhcCAgICAgICA6IDUwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzLXRhYmxlIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDMwMHB4IDFmcjtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBiYXNlbGluZTtcclxuICBnYXAgICAgICAgICAgICAgICAgICAgOiAyMHB4O1xyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuc3ViIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheSAgICAgOiBncmlkO1xyXG4gICAgZ2FwICAgICAgICAgOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXMgOiBiYXNlbGluZTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIC52YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXJlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgJiA+IC5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtKTtcclxuICAgICYgPiAuaW5kZXgge1xyXG4gICAgICBjb2xvcjogIzk2OTY5NjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditCurriculumDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './edit-curriculum-dialog.component.html',
                styleUrls: ['./edit-curriculum-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DropdownService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_15__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_16__["ExamService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_18__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "S8A/":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/admin-curriculum/admin-curriculum.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdminCurriculumModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCurriculumModule", function() { return AdminCurriculumModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_curriculum_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-curriculum-routing.module */ "Zzjz");
/* harmony import */ var _admin_curriculum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-curriculum.component */ "94eq");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/edit-curriculum-dialog/edit-curriculum-dialog.component */ "QcTw");







class AdminCurriculumModule {
}
AdminCurriculumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminCurriculumModule });
AdminCurriculumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminCurriculumModule_Factory(t) { return new (t || AdminCurriculumModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_curriculum_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCurriculumRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCurriculumModule, { declarations: [_admin_curriculum_component__WEBPACK_IMPORTED_MODULE_3__["AdminCurriculumComponent"], _dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditCurriculumDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_curriculum_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCurriculumRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCurriculumModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_curriculum_component__WEBPACK_IMPORTED_MODULE_3__["AdminCurriculumComponent"], _dialog_edit_curriculum_dialog_edit_curriculum_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditCurriculumDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_curriculum_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCurriculumRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Zzjz":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-curriculum/admin-curriculum-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: AdminCurriculumRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCurriculumRoutingModule", function() { return AdminCurriculumRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_curriculum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-curriculum.component */ "94eq");





const routes = [{ path: '', component: _admin_curriculum_component__WEBPACK_IMPORTED_MODULE_2__["AdminCurriculumComponent"] }];
class AdminCurriculumRoutingModule {
}
AdminCurriculumRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminCurriculumRoutingModule });
AdminCurriculumRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminCurriculumRoutingModule_Factory(t) { return new (t || AdminCurriculumRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCurriculumRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCurriculumRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-curriculum-admin-curriculum-module.js.map
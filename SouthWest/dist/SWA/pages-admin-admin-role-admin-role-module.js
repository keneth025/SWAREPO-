(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-role-admin-role-module"],{

/***/ "JQEf":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-role/admin-role-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdminRoleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoleRoutingModule", function() { return AdminRoleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-role.component */ "mLTA");





const routes = [{ path: '', component: _admin_role_component__WEBPACK_IMPORTED_MODULE_2__["AdminRoleComponent"] }];
class AdminRoleRoutingModule {
}
AdminRoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoleRoutingModule });
AdminRoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoleRoutingModule_Factory(t) { return new (t || AdminRoleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "SKQd":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/admin-role/admin-role.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoleModule", function() { return AdminRoleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-role-routing.module */ "JQEf");
/* harmony import */ var _admin_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-role.component */ "mLTA");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/edit-role-dialog/edit-role-dialog.component */ "b56w");







class AdminRoleModule {
}
AdminRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoleModule });
AdminRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoleModule_Factory(t) { return new (t || AdminRoleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoleRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoleModule, { declarations: [_admin_role_component__WEBPACK_IMPORTED_MODULE_3__["AdminRoleComponent"], _dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditRoleDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoleRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_admin_role_component__WEBPACK_IMPORTED_MODULE_3__["AdminRoleComponent"], _dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditRoleDialogComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoleRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "b56w":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-role/dialog/edit-role-dialog/edit-role-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EditRoleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleDialogComponent", function() { return EditRoleDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/model/role.model */ "TZOz");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/model/_model */ "Ka/f");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");

































const _c0 = ["stepper"];
function EditRoleDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28 == null ? null : item_r28.Title);
} }
function EditRoleDialogComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r29 == null ? null : item_r29.Title);
} }
function EditRoleDialogComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_div_59_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const i_r31 = ctx.index; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.removeOwner(i_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](owner_r30.Title);
} }
function EditRoleDialogComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_ng_container_87_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No curricula available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true)("value", null);
} }
function EditRoleDialogComponent_ng_container_87_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r37 == null ? null : item_r37.Title, " ");
} }
function EditRoleDialogComponent_ng_container_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_87_mat_option_1_Template, 2, 2, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_ng_container_87_mat_option_2_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const List_r34 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", List_r34.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", List_r34);
} }
function EditRoleDialogComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_div_90_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const item_r38 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r40.AssignedCurriculum.deselect(item_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r39 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r38 == null ? null : item_r38.Title, " ");
} }
function EditRoleDialogComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No curricula assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_ng_container_120_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true)("value", null);
} }
function EditRoleDialogComponent_ng_container_120_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r45 == null ? null : item_r45.Title, " ");
} }
function EditRoleDialogComponent_ng_container_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_120_mat_option_1_Template, 2, 2, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_ng_container_120_mat_option_2_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const List_r42 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", List_r42.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", List_r42);
} }
function EditRoleDialogComponent_ng_container_123_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r52 == null ? null : item_r52.Title, " ");
} }
function EditRoleDialogComponent_ng_container_123_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_ng_container_123_ng_container_1_Template_button_click_3_listener() { const container_r50 = ctx.ngIf; return container_r50.Expanded = !container_r50.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Assigned Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EditRoleDialogComponent_ng_container_123_ng_container_1_div_9_Template, 5, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const container_r50 = ctx.ngIf;
    const CurriculumCourses_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", container_r50.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@detailExpand", container_r50.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", CurriculumCourses_r46);
} }
function EditRoleDialogComponent_ng_container_123_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_ng_container_123_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r58); const item_r55 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r57.AssignedCourse.deselect(item_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const i_r56 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r56 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r55 == null ? null : item_r55.Title, " ");
} }
function EditRoleDialogComponent_ng_container_123_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { Expanded: false }; };
function EditRoleDialogComponent_ng_container_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_123_ng_container_1_Template, 10, 3, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_ng_container_123_div_2_Template, 10, 2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EditRoleDialogComponent_ng_container_123_div_3_Template, 5, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const CurriculumCourses_r46 = ctx.ngIf;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r16.AssignedCourse.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", CurriculumCourses_r46.length === 0 && ctx_r16.AssignedCourse.isEmpty());
} }
function EditRoleDialogComponent_div_137_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_ng_container_154_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No exams available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true)("value", null);
} }
function EditRoleDialogComponent_ng_container_154_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r62 == null ? null : item_r62.Title, " ");
} }
function EditRoleDialogComponent_ng_container_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_154_mat_option_1_Template, 2, 2, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_ng_container_154_mat_option_2_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const List_r59 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", List_r59.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", List_r59);
} }
function EditRoleDialogComponent_ng_container_157_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r69 == null ? null : item_r69.Title, " ");
} }
function EditRoleDialogComponent_ng_container_157_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_ng_container_157_ng_container_1_Template_button_click_3_listener() { const container_r67 = ctx.ngIf; return container_r67.Expanded = !container_r67.Expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Assigned Exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EditRoleDialogComponent_ng_container_157_ng_container_1_div_9_Template, 5, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const container_r67 = ctx.ngIf;
    const CurriculumExam_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@indicatorRotate", container_r67.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@detailExpand", container_r67.Expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", CurriculumExam_r63);
} }
function EditRoleDialogComponent_ng_container_157_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " drag_indicator ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_ng_container_157_div_2_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r75); const item_r72 = ctx.$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r74.AssignedExam.deselect(item_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const i_r73 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r73 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r72 == null ? null : item_r72.Title, " ");
} }
function EditRoleDialogComponent_ng_container_157_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No exam assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_ng_container_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_157_ng_container_1_Template, 10, 3, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_ng_container_157_div_2_Template, 10, 2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EditRoleDialogComponent_ng_container_157_div_3_Template, 5, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const CurriculumExam_r63 = ctx.ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r21.AssignedExam.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", CurriculumExam_r63.length === 0 && ctx_r21.AssignedExam.isEmpty());
} }
function EditRoleDialogComponent_div_171_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No description available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_div_171_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r82 == null ? null : item_r82.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_33_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r86 = ctx.$implicit;
    const i_r87 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r87 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r86 == null ? null : item_r86.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_33_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No required curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_div_171_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Assigned Curricula");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditRoleDialogComponent_div_171_div_33_div_4_Template, 5, 2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EditRoleDialogComponent_div_171_div_33_div_5_Template, 2, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const AssignedList_r83 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", AssignedList_r83.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", AssignedList_r83.isEmpty());
} }
function EditRoleDialogComponent_div_171_div_34_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r94 == null ? null : item_r94.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_34_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r95 = ctx.$implicit;
    const i_r96 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r96 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r95 == null ? null : item_r95.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_34_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No required course assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_div_171_div_34_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_div_171_div_34_ng_container_4_div_1_Template, 4, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_div_171_div_34_ng_container_4_div_2_Template, 5, 2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EditRoleDialogComponent_div_171_div_34_ng_container_4_div_3_Template, 2, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const CurriculumCourse_r90 = ctx.ngIf;
    const AssignedList_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", CurriculumCourse_r90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", AssignedList_r88.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", CurriculumCourse_r90.length === 0 && AssignedList_r88.isEmpty());
} }
function EditRoleDialogComponent_div_171_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Assigned Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditRoleDialogComponent_div_171_div_34_ng_container_4_Template, 4, 3, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r80.CurriculumCourses$));
} }
function EditRoleDialogComponent_div_171_div_35_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r104 == null ? null : item_r104.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_35_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r105 = ctx.$implicit;
    const i_r106 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r106 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r105 == null ? null : item_r105.Title, " ");
} }
function EditRoleDialogComponent_div_171_div_35_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No required exam assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditRoleDialogComponent_div_171_div_35_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_div_171_div_35_ng_container_4_div_1_Template, 4, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditRoleDialogComponent_div_171_div_35_ng_container_4_div_2_Template, 5, 2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EditRoleDialogComponent_div_171_div_35_ng_container_4_div_3_Template, 2, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const CurriculumExam_r100 = ctx.ngIf;
    const AssignedList_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", CurriculumExam_r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", AssignedList_r98.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", CurriculumExam_r100.length === 0 && AssignedList_r98.isEmpty());
} }
function EditRoleDialogComponent_div_171_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Assigned Exams");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EditRoleDialogComponent_div_171_div_35_ng_container_4_Template, 4, 3, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 1, ctx_r81.CurriculumExam$));
} }
function EditRoleDialogComponent_div_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Role Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Role Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditRoleDialogComponent_div_171_div_12_Template, 2, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Role Owner/s*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EditRoleDialogComponent_div_171_div_18_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Role Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Role Sub-category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "section", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, EditRoleDialogComponent_div_171_div_33_Template, 6, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, EditRoleDialogComponent_div_171_div_34_Template, 6, 3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, EditRoleDialogComponent_div_171_div_35_Template, 6, 3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r76 = ctx.ngIf;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r22.FormDetails.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (details_r76 == null ? null : details_r76.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", details_r76.Description, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, ctx_r22.DescriptionCount) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", details_r76.Owners);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (details_r76 == null ? null : details_r76.Category == null ? null : details_r76.Category.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (details_r76 == null ? null : details_r76.SubCategory == null ? null : details_r76.SubCategory.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.AssignedCurriculum);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.AssignedCourse);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.AssignedExam);
} }
function EditRoleDialogComponent_ng_template_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r108 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", index_r108 + 1, " ");
} }
function EditRoleDialogComponent_ng_template_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r110 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", index_r110 + 1, " ");
} }
function EditRoleDialogComponent_mat_option_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-spinner", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24);
} }
function EditRoleDialogComponent_ng_container_185_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", profile_r114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", profile_r114.DisplayText, " ");
} }
function EditRoleDialogComponent_ng_container_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditRoleDialogComponent_ng_container_185_mat_option_1_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const searchedUsers_r112 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", searchedUsers_r112);
} }
const _c2 = function (a0) { return { "invalid": a0 }; };
class EditRoleDialogComponent {
    constructor(dropdownService, roleService, accountService, userService, curriculumService, courseService, examService, dialog, dialogRef, data) {
        this.dropdownService = dropdownService;
        this.roleService = roleService;
        this.accountService = accountService;
        this.userService = userService;
        this.curriculumService = curriculumService;
        this.courseService = courseService;
        this.examService = examService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = 'Create';
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
        this.dialogIsLoading = true;
        this.curriculaIsLoading = true;
        this.coursesIsLoading = true;
        this.examsIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](-1),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            Category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            SubCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
            Owners: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]([], {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            }),
        });
        this.DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["getDescriptionCount"])(data)));
        this.OwnersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.IsSearchingUser = false;
        this.SearchUserList = this.OwnersControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((input) => this.userService.searchUser(input)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.IsSearchingUser = false));
        // #region Lists > Roles
        this.CategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        this.SubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        this.FilteredSubCategoryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.SubCategoryList,
            this.FormDetails.get('Category').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.FormDetails.get('SubCategory').setValue(null)))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([SubCategoryList, Category]) => {
            if (Category === null) {
                return [];
            }
            return SubCategoryList.filter(e => e.CategoryId === Category.Id);
        }));
        // #endregion
        // #region List > Curricula
        this.CurriculumSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        // #endregion
        // #region List > Courses
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        // #endregion
        // #region List > Exams
        this.ExamSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.ExamList = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        // #endregion
        // #region Curricula
        this.AssignedCurriculum = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true);
        this.AssignedCurriculum$ = this.AssignedCurriculum.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.FilteredCurriculumList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.AssignedCurriculum$,
            this.CurriculumList,
            this.CurriculumSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
            ].every(c => c);
        })));
        // #endregion
        // #region Courses
        this.AssignedCourse = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true);
        this.AssignedCourse$ = this.AssignedCourse.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.CurriculumCourses$ = this.AssignedCurriculum$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((data) => {
            const courseIds = data.reduce((returnValue, currentItem) => {
                return [
                    ...returnValue,
                    ...Array.from(currentItem.CoursesId),
                ];
            }, []);
            return Array.from(new Set(courseIds))
                .map(e => this.CourseList.value.find(i => i.Id === e));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((data) => this.AssignedCourse.deselect(...data)));
        this.OverAllCourse$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.CurriculumCourses$,
            this.AssignedCourse$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([CurriculumItem, SelectedItem]) => [...CurriculumItem, ...SelectedItem]));
        this.FilteredCourseList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.OverAllCourse$,
            this.CourseList,
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
            ].every(c => c);
        })));
        // #endregion
        // #region Exam
        this.AssignedExam = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true);
        this.AssignedExam$ = this.AssignedExam.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.CurriculumExam$ = this.AssignedCurriculum$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((data) => {
            const examIds = data.reduce((returnValue, currentItem) => {
                return [
                    ...returnValue,
                    ...Array.from(currentItem.ExamsId),
                ];
            }, []);
            return Array.from(new Set(examIds))
                .map(e => this.ExamList.value.find(i => i.Id === e));
        }));
        this.OverAllExam = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.CurriculumExam$,
            this.AssignedExam$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([CurriculumItem, SelectedItem]) => [...CurriculumItem, ...SelectedItem]));
        this.FilteredExamList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.OverAllExam,
            this.ExamList,
            this.ExamSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
            ].every(c => c);
        })));
        this.displayFn = (data) => data ? data.DisplayText : '';
    }
    // #endregion
    get dialogName() { return `${this.dialogTitle} Role`; }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'role-form']);
        this.dialogTitle = this.data ? 'Edit' : 'Create';
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogIsLoading = true;
            this.curriculaIsLoading = true;
            this.coursesIsLoading = true;
            this.examsIsLoading = true;
            const [RoleCategoryList, RoleSubCategoryList,] = yield Promise.all([
                this.dropdownService.getRoleCategory(),
                this.dropdownService.getRoleSubCategory(),
            ]);
            this.CategoryList.next(RoleCategoryList);
            this.SubCategoryList.next(RoleSubCategoryList);
            yield Promise.all([
                this.curriculumService.getAll().then((curriculumList) => {
                    this.CurriculumList.next(curriculumList);
                    this.updatedAssignedCurricula();
                    this.curriculaIsLoading = false;
                }),
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
            yield this.updateDetails();
            this.dialogIsLoading = false;
        });
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promptDialog = this.dialog.promptDialog(this.dialogName, 'Changes will NOT be saved. Proceed?');
            const isProceed = yield promptDialog.afterClosed().toPromise();
            if (isProceed) {
                this.dialogRef.close(false);
            }
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                console.log('Update Role', this.data);
                const { Id, Title, Description, SubCategoryId, Owners, } = this.data.role;
                const SubCategory = this.SubCategoryList.value.find(e => e.Id === (SubCategoryId || -1)) || null;
                const Category = this.CategoryList.value.find(e => e.Id === ((SubCategory === null || SubCategory === void 0 ? void 0 : SubCategory.CategoryId) || -1)) || null;
                this.FormDetails.setValue({
                    Id,
                    Title,
                    Description,
                    Category,
                    SubCategory,
                    Owners,
                });
            }
            else {
                const profile = yield this.userService.ensureUser(this.accountService.account.LoginName);
                this.FormDetails.patchValue({ Owners: [profile] });
            }
        });
    }
    updatedAssignedCurricula() {
        if (this.data) {
            const { CurriculaId } = this.data.role;
            this.AssignedCurriculum.select(...Array.from(CurriculaId).map(e => this.CurriculumList.value.find(i => i.Id === e)));
        }
    }
    updateAssignedCourses() {
        if (this.data) {
            const { CoursesId } = this.data.role;
            this.AssignedCourse.select(...Array.from(CoursesId).map(e => this.CourseList.value.find(i => i.Id === e)));
        }
    }
    updateAssignedExams() {
        if (this.data) {
            const { ExamsId } = this.data.role;
            this.AssignedExam.select(...Array.from(ExamsId).map(e => this.ExamList.value.find(i => i.Id === e)));
        }
    }
    // #region Owner Section
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
    // #endregion Owner Section
    // #region Ordering Trainings
    reorderItems(selectionItem, $event) {
        const items = selectionItem.selected;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(items, $event.previousIndex, $event.currentIndex);
        selectionItem.clear();
        selectionItem.select(...items);
    }
    // #endregion Ordering Trainings
    validateName(skip = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Title } = this.FormDetails.value;
            const validated = yield this.roleService.validateTitle(Title, Id);
            loaderDialog.close();
            if (validated) {
                if (!skip) {
                    this.stepper.next();
                }
                else {
                    this.stepper.selectedIndex = 4;
                }
            }
            else {
                this.FormDetails.get('Title').setErrors({ titleExisting: true });
                this.dialog.alertDialog(this.dialogName, `${Title} is already created.`);
            }
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Title, Description, SubCategory, Owners } = this.FormDetails.value;
            const CurriculaId = this.AssignedCurriculum.selected.map(e => e.Id);
            const CoursesId = this.AssignedCourse.selected.map(e => e.Id);
            const ExamsId = this.AssignedExam.selected.map(e => e.Id);
            let EditorObj = new src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_12__["Person"]({});
            let DateModified = null;
            if (this.data) {
                const { Editor, Modified } = this.data.role;
                EditorObj = Editor;
                DateModified = Modified;
            }
            const requestData = new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_10__["Role"]({
                Id,
                Title,
                Description,
                SubCategoryId: SubCategory.Id,
                CurriculaId: new Set(CurriculaId),
                CoursesId: new Set(CoursesId),
                ExamsId: new Set(ExamsId),
                Owners,
                Editor: EditorObj,
                Modified: DateModified,
            });
            console.log('Request Data', requestData);
            const SavedData = yield this.roleService.save(requestData);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
EditRoleDialogComponent.ɵfac = function EditRoleDialogComponent_Factory(t) { return new (t || EditRoleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_14__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_18__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_19__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_20__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])); };
EditRoleDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditRoleDialogComponent, selectors: [["ng-component"]], viewQuery: function EditRoleDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 187, vars: 77, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Role Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "hidden"], ["id", "single-form", 3, "formGroup"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "input-container"], ["type", "text", "formControlName", "Title"], [1, "onecap-input-form"], [1, "editor-container"], ["formControlName", "Description", 3, "editor", "config"], [1, "counter"], [1, "select-container"], ["formControlName", "Category", 3, "disableOptionCentering", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "SubCategory", 3, "disableOptionCentering", "placeholder"], [1, "onecap-input-form", 3, "ngClass", "focus", "click"], [1, "info-message"], [1, "textarea-container"], [1, "item-list"], ["class", "item-selection", 4, "ngFor", "ngForOf"], ["type", "text", 3, "formControl", "matAutocomplete"], ["inputOwner", ""], [1, "stepper-action"], [1, "onecap-link-btn", "accent-2", 3, "disabled", "click"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], ["label", "Assign Curriculum", 3, "optional"], [1, "stepper-content", 3, "hidden"], [1, "selection-table", "drag-drop"], [1, "table-label"], [1, "onecap-lbl", "accent-2"], ["type", "text", "placeholder", "Search for a curriculum", 3, "formControl", "matAutocomplete"], ["searchField", ""], ["autoActiveFirstOption", "", 3, "optionSelected"], ["itemSelectionCurriculum", "matAutocomplete"], [4, "ngIf"], ["cdkDropList", "", 1, "table-body", 3, "cdkDropListDropped"], ["class", "table-row selection", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["class", "table-row selection", 4, "ngIf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["label", "Assign Courses", 3, "optional"], ["type", "text", "placeholder", "Search for a course", 3, "formControl", "matAutocomplete"], ["itemSelectionCourse", "matAutocomplete"], ["label", "Assign Exams", 3, "optional"], [1, "table-title"], ["type", "text", "placeholder", "Search for an exam", 3, "formControl", "matAutocomplete"], ["itemSelectionExam", "matAutocomplete"], ["label", "Confirm"], ["class", "stepper-content", 3, "hidden", 4, "ngIf"], [1, "onecap-btn", "accent-2", 3, "click"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "disabled", 4, "ngIf"], [1, "stepper-loader"], [1, "item-selection"], [1, "onecap-icon-btn", "delete", 3, "click"], [3, "disabled", "value", 4, "ngIf"], [3, "disabled", "value"], ["cdkDrag", "", 1, "table-row", "selection"], ["cdkDragHandle", "", 1, "material-icons", "drag-handle"], [1, "col"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "table-row", "selection"], [1, "onecap-lbl", "error"], [1, "expand-item"], [1, "onecap-icon-btn", 3, "click"], [1, "expand-area"], ["class", "table-row selection", 4, "ngFor", "ngForOf"], [1, "basic-form", "summary"], [1, "column"], [1, "field"], [3, "innerHTML"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "assigned-section"], ["class", "field", 4, "ngIf"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "onecap-lbl error", 4, "ngIf"], [1, "item"], [1, "index"], [3, "disabled"], [1, "flex", "align-items-center", "justify-content-center"], [3, "diameter"]], template: function EditRoleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_Template_button_click_0_listener() { return ctx.close(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditRoleDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Role Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "ckeditor", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Role Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, EditRoleDialogComponent_mat_option_37_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Role Sub-category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, EditRoleDialogComponent_mat_option_48_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function EditRoleDialogComponent_Template_div_focus_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](61); return _r5.focus(); })("click", function EditRoleDialogComponent_Template_div_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r115); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](61); return _r5.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Role Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Search by name or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, EditRoleDialogComponent_div_59_Template, 6, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_Template_button_click_63_listener() { return ctx.validateName(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Skip Assigning of Learning Materials ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_Template_button_click_65_listener() { return ctx.validateName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-step", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, EditRoleDialogComponent_div_71_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, " Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Add the curriculum required for the role here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-autocomplete", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditRoleDialogComponent_Template_mat_autocomplete_optionSelected_85_listener($event) { ctx.AssignedCurriculum.select($event.option.value); return ctx.CurriculumSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, EditRoleDialogComponent_ng_container_87_Template, 3, 2, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](88, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function EditRoleDialogComponent_Template_div_cdkDropListDropped_89_listener($event) { return ctx.reorderItems(ctx.AssignedCurriculum, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, EditRoleDialogComponent_div_90_Template, 10, 2, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](91, EditRoleDialogComponent_div_91_Template, 5, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-step", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, EditRoleDialogComponent_div_104_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Add the course required for the role here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "input", 51, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "mat-autocomplete", 42, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditRoleDialogComponent_Template_mat_autocomplete_optionSelected_118_listener($event) { ctx.AssignedCourse.select($event.option.value); return ctx.CourseSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, EditRoleDialogComponent_ng_container_120_Template, 3, 2, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](121, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function EditRoleDialogComponent_Template_div_cdkDropListDropped_122_listener($event) { return ctx.reorderItems(ctx.AssignedCourse, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](123, EditRoleDialogComponent_ng_container_123_Template, 4, 4, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](124, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "mat-step", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](137, EditRoleDialogComponent_div_137_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145, "Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " Exams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Add the exam required for the role here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "input", 55, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "mat-autocomplete", 42, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditRoleDialogComponent_Template_mat_autocomplete_optionSelected_152_listener($event) { ctx.AssignedExam.select($event.option.value); return ctx.ExamSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](154, EditRoleDialogComponent_ng_container_154_Template, 3, 2, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](155, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("cdkDropListDropped", function EditRoleDialogComponent_Template_div_cdkDropListDropped_156_listener($event) { return ctx.reorderItems(ctx.AssignedExam, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](157, EditRoleDialogComponent_ng_container_157_Template, 4, 4, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](158, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "mat-step", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](171, EditRoleDialogComponent_div_171_Template, 36, 12, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](177, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditRoleDialogComponent_Template_button_click_178_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, EditRoleDialogComponent_ng_template_180_Template, 1, 1, "ng-template", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, EditRoleDialogComponent_ng_template_181_Template, 1, 1, "ng-template", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "mat-autocomplete", 62, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditRoleDialogComponent_Template_mat_autocomplete_optionSelected_182_listener($event) { return ctx.addOwner($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](184, EditRoleDialogComponent_mat_option_184_Template, 3, 2, "mat-option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](185, EditRoleDialogComponent_ng_container_185_Template, 2, 1, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](186, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](86);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](119);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](153);
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("completed", ctx.FormDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](69, _c2, ctx.FormDetails.get("Title").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 51, ctx.DescriptionCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c2, ctx.FormDetails.get("Category").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 53, ctx.CategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](73, _c2, ctx.FormDetails.get("SubCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](49, 55, ctx.FilteredSubCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](75, _c2, ctx.FormDetails.get("Owners").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.FormDetails.get("Owners").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.OwnersControl)("matAutocomplete", _r25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.curriculaIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.curriculaIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.CurriculumSearchFilter)("matAutocomplete", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](88, 57, ctx.FilteredCurriculumList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.AssignedCurriculum.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AssignedCurriculum.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.coursesIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.coursesIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter)("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](121, 59, ctx.FilteredCourseList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](124, 61, ctx.CurriculumCourses$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.examsIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.examsIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.ExamSearchFilter)("matAutocomplete", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](155, 63, ctx.FilteredExamList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](158, 65, ctx.CurriculumExam$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.FormDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsSearchingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.IsSearchingUser && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](186, 67, ctx.SearchUserList));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_23__["CKEditorComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__["MatAutocomplete"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperIcon"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_27__["LoaderComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDragHandle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  grid-template-rows: max-content 1fr;\n}\n\n#single-form[_ngcontent-%COMP%] {\n  width: 512px;\n  justify-self: center;\n  display: grid;\n  gap: 10px;\n  border-radius: 10px;\n  padding: 20px;\n  background-color: rgba(217, 217, 217, 0.25);\n}\n\n.expand-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: grid;\n  padding: 10px;\n  grid-template-columns: 30px 1fr;\n  align-items: center;\n}\n\n.expand-area[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.assigned-section[_ngcontent-%COMP%] {\n  border-top: 1px inset #000000;\n}\n\n.basic-form.summary[_ngcontent-%COMP%] {\n  padding: 15px;\n  gap: 20px;\n}\n\n.basic-form.summary[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n\n.list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr;\n  align-items: baseline;\n  font-size: var(--font-sm);\n}\n\n.list[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > .index[_ngcontent-%COMP%] {\n  color: #969696;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcm9sZS9kaWFsb2cvZWRpdC1yb2xlLWRpYWxvZy9lZGl0LXJvbGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQUU7RUFBVSxZQUFBO0FBR1o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBRUo7O0FBREk7RUFDRSxjQUFBO0FBR04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1yb2xlL2RpYWxvZy9lZGl0LXJvbGUtZGlhbG9nL2VkaXQtcm9sZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XHJcbn1cclxuXHJcbiNzaW5nbGUtZm9ybSB7XHJcbiAgd2lkdGg6IDUxMnB4O1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjI1KTtcclxufVxyXG5cclxuLmV4cGFuZC1pdGVtIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZXhwYW5kLWFyZWEge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hc3NpZ25lZC1zZWN0aW9uIHtcclxuICBib3JkZXItdG9wOiAxcHggaW5zZXQgIzAwMDAwMDtcclxufVxyXG5cclxuLmJhc2ljLWZvcm0uc3VtbWFyeSB7XHJcbiAgcGFkZGluZyA6IDE1cHg7XHJcbiAgZ2FwICAgICA6IDIwcHg7XHJcbiAgLmNvbHVtbiB7IGdhcDogaW5oZXJpdCB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAmID4gLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgJiA+IC5pbmRleCB7XHJcbiAgICAgIGNvbG9yOiAjOTY5Njk2O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)', transformOrigin: 'center center' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)', transformOrigin: 'center center' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EditRoleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                templateUrl: './edit-role-dialog.component.html',
                styleUrls: ['./edit-role-dialog.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)', transformOrigin: 'center center' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)', transformOrigin: 'center center' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])
                ],
            }]
    }], function () { return [{ type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_13__["DropdownService"] }, { type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_14__["RoleService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_15__["AccountService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_18__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_19__["ExamService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_20__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "mLTA":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin/admin-role/admin-role.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoleComponent", function() { return AdminRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/role.model */ "TZOz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/edit-role-dialog/edit-role-dialog.component */ "b56w");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");

















function AdminRoleComponent_section_4_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r5.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r5.Title, " ");
} }
function AdminRoleComponent_section_4_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r6.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.Title, " ");
} }
function AdminRoleComponent_section_4_ng_container_41_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminRoleComponent_section_4_ng_container_41_div_2_div_10_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r13.update(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminRoleComponent_section_4_ng_container_41_div_2_div_10_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r15.update(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminRoleComponent_section_4_ng_container_41_div_2_div_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const item_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r16.delete(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r12.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r12.DateModified, " ", item_r12.Editor.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !item_r12.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !item_r12.IsOwner);
} }
function AdminRoleComponent_section_4_ng_container_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Role Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Last Modified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AdminRoleComponent_section_4_ng_container_41_div_2_div_10_Template, 15, 5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r7);
} }
function AdminRoleComponent_section_4_ng_container_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No role available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminRoleComponent_section_4_ng_container_41_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AdminRoleComponent_section_4_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AdminRoleComponent_section_4_ng_container_41_div_2_Template, 11, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AdminRoleComponent_section_4_ng_container_41_div_3_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AdminRoleComponent_section_4_ng_container_41_div_4_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r7 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", list_r7.length > 0 && !ctx_r4.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", list_r7.length === 0 && !ctx_r4.dataIsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.dataIsLoading);
} }
function AdminRoleComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Role Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AdminRoleComponent_section_4_mat_option_14_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Sub-Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AdminRoleComponent_section_4_mat_option_23_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Role Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " @Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdminRoleComponent_section_4_Template_button_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Create Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, AdminRoleComponent_section_4_ng_container_41_Template, 5, 3, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](42, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.keywordFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("formControl", ctx_r0.selectedRoleCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, ctx_r0.roleCategoryList));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("formControl", ctx_r0.selectedRoleSubCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 16, ctx_r0.filteredRoleSubCategoryList));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("formControl", ctx_r0.ownerFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](42, 18, ctx_r0.filteredRoleList));
} }
function AdminRoleComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AdminRoleComponent {
    constructor(roleService, dropdownService, dialog) {
        this.roleService = roleService;
        this.dropdownService = dropdownService;
        this.dialog = dialog;
        this.pageIsLoading = true;
        this.dataIsLoading = true;
        this.roleCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.roleSubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.roleList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.keywordFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
        this.selectedRoleCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](-1);
        this.selectedRoleSubCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](-1);
        this.ownerFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](1);
        this.ownedRoleList = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.ownerFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(1)),
            this.roleList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([isOwner, List]) => {
            if (isOwner === 1) {
                return List.filter(e => e.IsOwner);
            }
            return List;
        }));
        this.filteredRoleSubCategoryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.roleSubCategoryList,
            this.selectedRoleCategory.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(-1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.selectedRoleSubCategory.setValue(-1)))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([roleSubCategoryList, categoryId]) => {
            if (categoryId === -1) {
                return roleSubCategoryList;
            }
            return roleSubCategoryList.filter(e => e.CategoryId === categoryId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => console.log('Filtered Sub Category Data', data)));
        this.filteredRoleList = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.ownedRoleList,
            this.keywordFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('')),
            this.selectedRoleCategory.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(-1)),
            this.selectedRoleSubCategory.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(-1)),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([roleList, keyword, categoryId, subCategoryId]) => {
            if (keyword === '' && categoryId === -1 && subCategoryId === -1) {
                return roleList;
            }
            return roleList.filter(e => {
                let isKeyword = true;
                let isSubCategoryId = true;
                if (keyword !== '') {
                    isKeyword = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, keyword);
                }
                if (categoryId !== -1 && subCategoryId === -1) {
                    isSubCategoryId = this.roleSubCategoryList.getValue()
                        .filter(i => i.CategoryId === categoryId)
                        .some(i => i.Id === e.SubCategoryId);
                }
                if (subCategoryId !== -1) {
                    isSubCategoryId = e.SubCategoryId === subCategoryId;
                }
                return [
                    isKeyword,
                    isSubCategoryId
                ].every(c => c);
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
            const [Category, SubCategory] = yield Promise.all([
                this.dropdownService.getRoleCategory(),
                this.dropdownService.getRoleSubCategory()
            ]);
            this.roleCategoryList.next(Category);
            this.roleSubCategoryList.next(SubCategory);
            this.pageIsLoading = false;
        });
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const RoleList = yield this.roleService.getAll();
            this.roleList.next(RoleList);
            console.log('Role List', RoleList);
            this.dataIsLoading = false;
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditRoleDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    update(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (role.IsOwner) {
                const editDialog = this.dialog.open(_dialog_edit_role_dialog_edit_role_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditRoleDialogComponent"], { data: { role: new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_4__["Role"](role) } });
                const isSaved = yield editDialog.afterClosed().toPromise();
                if (isSaved) {
                    yield this.loadData();
                }
            }
        });
    }
    delete(role) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promptDialog = this.dialog.deleteDialog(role.Title);
            const isProceed = yield promptDialog.afterClosed().toPromise();
            if (isProceed) {
                const loaderDialog = this.dialog.loaderDialog();
                yield this.roleService.delete(role);
                loaderDialog.close();
                yield this.loadData();
            }
        });
    }
}
AdminRoleComponent.ɵfac = function AdminRoleComponent_Factory(t) { return new (t || AdminRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"])); };
AdminRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AdminRoleComponent, selectors: [["app-admin-role"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "select-container"], ["placeholder", "All Category", 3, "panelClass", "formControl"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "All Sub-Category", 3, "panelClass", "formControl"], ["id", "actions"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [4, "ngIf"], [1, "table-container"], ["id", "role-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "role-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-link-btn", "accent-2", 3, "click"], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "disabled", "click"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AdminRoleComponent_section_4_Template, 43, 20, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AdminRoleComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: flex-end;\n}\n\n#role-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #role-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 175px;\n}\n\n#role-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .onecap-link-btn[_ngcontent-%COMP%], #role-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .onecap-link-btn[_ngcontent-%COMP%] {\n  text-align: left;\n  justify-content: flex-start;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcm9sZS9hZG1pbi1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFHRTtFQUNFLGdDQUFBO0FBQUo7O0FBQ0k7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFDTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXJvbGUvYWRtaW4tcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWx0ZXJzIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICAgICA6IGNlbnRlcjtcclxuICBnYXAgICAgICAgICAgICAgICAgICAgOiAxMHB4O1xyXG59XHJcblxyXG4jYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4jcm9sZS10YWJsZSB7XHJcbiAgLnRhYmxlLWhlYWRlciwgLnRhYmxlLXJvdyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNzVweDtcclxuICAgIC5vbmVjYXAtbGluay1idG4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AdminRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-admin-role',
                templateUrl: './admin-role.component.html',
                styleUrls: ['./admin-role.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_8__["RoleService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_9__["DropdownService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-role-admin-role-module.js.map
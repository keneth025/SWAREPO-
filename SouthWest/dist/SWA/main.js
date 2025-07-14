(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+eQ9":
/*!*******************************************************!*\
  !*** ./src/app/core/data/service/dropdown.service.ts ***!
  \*******************************************************/
/*! exports provided: DropdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownService", function() { return DropdownService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/dropdown.model */ "eMQo");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pnp/sp/items */ "lYrR");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.service */ "LFci");











class DropdownService {
    constructor(accountService) {
        this.accountService = accountService;
        this.sp = _pnp_sp__WEBPACK_IMPORTED_MODULE_5__["sp"];
    }
    get isSiteOwner() { return this.accountService.account.IsSiteOwner; }
    get userId() { return this.accountService.account.Id; }
    getSortedData(ListName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.sp.web.lists.getByTitle(ListName).items
                .orderBy('Title')
                .top(5000));
        });
    }
    // Organization Dropdown
    getOrgLvl1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].ORG_LVL_1);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["OrgLvl1"]({
                Id: e === null || e === void 0 ? void 0 : e.Id,
                Title: e === null || e === void 0 ? void 0 : e.Title,
            }));
        });
    }
    getOrgLvl2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].ORG_LVL_2);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["OrgLvl2"]({
                Id: e === null || e === void 0 ? void 0 : e.Id,
                Title: e === null || e === void 0 ? void 0 : e.Title,
                OrgLvl1Id: e === null || e === void 0 ? void 0 : e.OrgLvl1Id
            }));
        });
    }
    // Country Dropdown
    getCountry() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].COUNTRY);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["Country"]({
                Id: e === null || e === void 0 ? void 0 : e.Id,
                Title: e === null || e === void 0 ? void 0 : e.Title,
                CountryCode: e === null || e === void 0 ? void 0 : e.CountryCode,
            }));
        });
    }
    // Role Dropdowns
    getRoleCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].ROLE_CATEGORY);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["RoleCategory"]({
                Id: e.Id,
                Title: e.Title,
            }));
        });
    }
    getRoleSubCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].ROLE_SUB_CATEGORY);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["RoleSubCategory"]({
                Id: e.Id,
                Title: e.Title,
                CategoryId: e.CategoryId
            }));
        });
    }
    /* Learning Dropdowns */
    getLearningCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.getSortedData(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].LEARNING_CATEGORY);
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["LearningCategory"]({
                Id: e.Id,
                Title: e.Title
            }));
        });
    }
    getLearningSubCategory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].LEARNING_SUB_CATEGORY)
                .items
                .expand('Category')
                .select('*', 'Category/Title')
                .orderBy('Title')
                .top(5000));
            return tempList.map(e => new _model_dropdown_model__WEBPACK_IMPORTED_MODULE_4__["LearningSubCategory"]({
                Id: e.Id,
                Title: e.Title,
                CategoryId: e.CategoryId,
                CategoryName: e.Category ? e.Category.Title : ''
            }));
        });
    }
}
DropdownService.ɵfac = function DropdownService_Factory(t) { return new (t || DropdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"])); };
DropdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DropdownService, factory: DropdownService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "+kR4":
/*!*********************************************************!*\
  !*** ./src/app/core/data/service/curriculum.service.ts ***!
  \*********************************************************/
/*! exports provided: CurriculumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumService", function() { return CurriculumService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model_curriculum_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/curriculum.model */ "yh7w");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_service */ "ECYA");








class CurriculumService extends _service__WEBPACK_IMPORTED_MODULE_6__["SPItemService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'Curriculum Service';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].CURRICULUM).items
            .expand('Owners', 'OwnerModifiedBy')
            .select('*', 'Owners/Id', 'Owners/Title', 'Owners/EMail', 'OwnerModifiedBy/Id', 'OwnerModifiedBy/Title', 'OwnerModifiedBy/EMail')
            .orderBy('Title');
    }
    toObject(data) {
        const { Id, Title, Description, LearningSubCategoryId, CoursesId, ExamsId, Owners, OwnerModifiedBy, OwnerModified, } = data;
        const ownerArray = Owners ? Owners.map(p => new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: p.Id,
            Title: p.Title,
            EMail: p.EMail
        })) : [];
        const editorObj = OwnerModifiedBy ? new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: OwnerModifiedBy.Id,
            Title: OwnerModifiedBy.Title,
            EMail: OwnerModifiedBy.EMail
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({});
        return new _model_curriculum_model__WEBPACK_IMPORTED_MODULE_4__["Curriculum"]({
            Id,
            Title,
            Description,
            LearningSubCategoryId,
            CoursesId: new Set(CoursesId),
            ExamsId: new Set(ExamsId),
            Owners: ownerArray,
            Editor: editorObj,
            Modified: OwnerModified ? new Date(OwnerModified) : null,
            IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
        });
    }
    getItemsByRelatedId(IdArr, RelatedId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (IdArr.length > 0) {
                const { chunk, batchIdSize } = this;
                const batchSize = (chunk * batchIdSize);
                let returnArr = [];
                for (let idx = 0; idx < IdArr.length; idx += batchSize) {
                    const batchArr = IdArr.slice(idx, (idx + batchSize));
                    let queryArr = [];
                    for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
                        const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
                        const chunkQuery = chunkArr.map(e => `${RelatedId} eq ${e}`)
                            .join(' or ');
                        const query = `(${chunkQuery})`;
                        queryArr = [...queryArr, query];
                    }
                    const promiseArr = queryArr.map(e => Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
                    const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                    returnArr = [...returnArr, ...tempData];
                }
                return returnArr;
            }
            return [];
        });
    }
    getItemsByCourseIdArr(CourseIdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getItemsByRelatedId(CourseIdArr, 'CoursesId');
        });
    }
    getItemsByExamIdArr(ExamIdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.getItemsByRelatedId(ExamIdArr, 'ExamsId');
        });
    }
}
CurriculumService.ɵfac = function CurriculumService_Factory(t) { return ɵCurriculumService_BaseFactory(t || CurriculumService); };
CurriculumService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CurriculumService, factory: CurriculumService.ɵfac, providedIn: 'root' });
const ɵCurriculumService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CurriculumService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurriculumService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kcinco2\gitclone\SouthwestKnowledge\SWA\src\main.ts */"zUnb");


/***/ }),

/***/ "00IP":
/*!***************************************************!*\
  !*** ./src/app/core/data/service/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");





class UserService {
    searchUser(searchString) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield _pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"].profiles.clientPeoplePickerSearchUser({
                AllowEmailAddresses: true,
                AllowMultipleEntities: false,
                MaximumEntitySuggestions: 25,
                QueryString: searchString,
                PrincipalType: 1 /* User */,
                PrincipalSource: 15 /* All */,
            });
        });
    }
    getUserManager(loginName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const managerData = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"].profiles.getUserProfilePropertyFor(loginName, 'Manager');
            const managerDetail = yield this.ensureUser(managerData);
            return managerDetail;
        });
    }
    ensureUser(loginName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"].web.ensureUser(loginName);
            const { Id, Title, Email, LoginName } = user.data;
            return new _model_model__WEBPACK_IMPORTED_MODULE_2__["Person"]({
                Id,
                Title,
                EMail: Email,
                LoginName
            });
        });
    }
    resolveEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield _pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"].profiles.clientPeoplePickerResolveUser({
                AllowEmailAddresses: true,
                AllowMultipleEntities: false,
                MaximumEntitySuggestions: 1,
                QueryString: email,
                PrincipalType: 1 /* User */,
                PrincipalSource: 15 /* All */,
            });
        });
    }
    batchResolveEmail(emails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            emails = emails.filter(e => e.trim());
            const chunk = 5;
            let returnItem = [];
            for (let idx = 0; idx < emails.length; idx += chunk) {
                const chunkArr = emails.slice(idx, (idx + chunk));
                const chunkRequest = chunkArr.map(e => this.resolveEmail(e)
                    .then((user) => {
                    if (user.EntityType === '') {
                        return {
                            email: e,
                            found: false,
                            data: null
                        };
                    }
                    return this.ensureUser(user.Key).then((person) => ({ email: e, found: true, data: person }));
                }));
                const requestData = yield Promise.all(chunkRequest);
                returnItem = [...returnItem, ...requestData];
            }
            return returnItem;
        });
    }
    batchResolveUserEmailAndManager(emails) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            emails = emails.filter(e => e.trim());
            const chunk = 5;
            let returnItem = [];
            for (let idx = 0; idx < emails.length; idx += chunk) {
                const chunkArr = emails.slice(idx, (idx + chunk));
                const chunkRequest = chunkArr.map(e => this.resolveEmail(e)
                    .then((user) => {
                    if (user.EntityType === '') {
                        return {
                            email: e,
                            found: false,
                            user: null,
                            manager: null,
                        };
                    }
                    return Promise.all([
                        this.ensureUser(user.Key),
                        this.getUserManager(user.Key),
                    ]).then(([person, manager]) => ({ email: e, found: true, user: person, manager }));
                }));
                const requestData = yield Promise.all(chunkRequest);
                returnItem = [...returnItem, ...requestData];
            }
            return returnItem;
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "0HMM":
/*!****************************************************************************!*\
  !*** ./src/app/shared/ui/nav-bar/nav-list-item/nav-list-item.component.ts ***!
  \****************************************************************************/
/*! exports provided: NavListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavListItemComponent", function() { return NavListItemComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _nav_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav-bar.service */ "hADJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavListItemComponent_a_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("blk icon " + ctx_r2.item.IconName);
} }
function NavListItemComponent_a_0_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@indicatorRotate", ctx_r3.expanded ? "expanded" : "collapsed");
} }
const _c0 = function (a0, a1, a2) { return { "active": a0, "expanded": a1, "child": a2 }; };
const _c1 = function (a0) { return { "padding-left": a0 }; };
function NavListItemComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavListItemComponent_a_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onItemSelected(ctx_r4.item); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavListItemComponent_a_0_img_2_Template, 1, 2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavListItemComponent_a_0_span_5_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c0, ctx_r0.item.Route ? ctx_r0.router.isActive(ctx_r0.item.Route, false) && !ctx_r0.item.Children : false, ctx_r0.expanded, ctx_r0.depth > 0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, ctx_r0.depth * 16 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.IconName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.item.DisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.item.Children && ctx_r0.item.Children.length);
} }
function NavListItemComponent_div_2_app_nav_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-list-item", 10);
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", child_r7)("depth", ctx_r6.depth + 1);
} }
function NavListItemComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavListItemComponent_div_2_app_nav_list_item_1_Template, 1, 2, "app-nav-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@detailExpand", ctx_r1.expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.item.Children);
} }
const _c2 = function (a0) { return { url: a0 }; };
class NavListItemComponent {
    constructor(navBarService, router) {
        this.navBarService = navBarService;
        this.router = router;
        this.currentUrl = this.navBarService.currentUrl.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => { var _a; return this.expanded = data.includes(((_a = this.item) === null || _a === void 0 ? void 0 : _a.Route) || null); }));
        this.active = false;
        this.expanded = false;
        this.depth = 0;
    }
    ngAfterViewInit() {
        this.expanded = this.router.isActive(this.item.Route, false);
    }
    onItemSelected(item) {
        if (!item.Children || !item.Children.length) {
            this.router.navigate([item.Route]);
            this.navBarService.IsOpen.next(false);
        }
        else if (item.Children && item.Children.length) {
            this.expanded = !this.expanded;
        }
    }
}
NavListItemComponent.ɵfac = function NavListItemComponent_Factory(t) { return new (t || NavListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NavListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavListItemComponent, selectors: [["app-nav-list-item"]], inputs: { depth: "depth", item: "item" }, decls: 3, vars: 6, consts: [["class", "nav-link", 3, "ngClass", "ngStyle", "click", 4, "ngIf"], ["class", "sub-menu", 4, "ngIf"], [1, "nav-link", 3, "ngClass", "ngStyle", "click"], [1, "nav-item-container"], [3, "class", 4, "ngIf"], [1, "nav-label"], ["class", "material-icons", 4, "ngIf"], [1, "material-icons"], [1, "sub-menu"], [3, "item", "depth", 4, "ngFor", "ngForOf"], [3, "item", "depth"]], template: function NavListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavListItemComponent_a_0_Template, 6, 11, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavListItemComponent_div_2_Template, 2, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, ctx.currentUrl)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.Children && ctx.item.Children.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], NavListItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".nav-link[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 13px 7px;\n}\n.nav-link[_ngcontent-%COMP%]   .nav-item-container[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-size: var(--font-sm);\n}\n.nav-link[_ngcontent-%COMP%]   img.icon[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-black);\n  margin-right: 10px;\n  height: 15px;\n  width: 15px;\n}\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-purple);\n  color: var(--onecaplite-white);\n}\n.nav-link[_ngcontent-%COMP%]:hover   img.icon[_ngcontent-%COMP%], .nav-link.active[_ngcontent-%COMP%]   img.icon[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-white);\n}\n.sub-menu[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: rgba(217, 217, 217, 0.4);\n}\n@media only screen and (min-width: 1920px) {\n  .nav-link[_ngcontent-%COMP%]   .nav-item-container[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    font-size: var(--font-md);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpL25hdi1iYXIvbmF2LWxpc3QtaXRlbS9uYXYtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0FBQTtFQUdBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0FBRkY7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQUlJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBRk47QUFNRTtFQUNFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpKO0FBT0U7RUFDRSwwQ0FBQTtFQUNBLDhCQUFBO0FBTEo7QUFNSTtFQUNFLHlDQUFBO0FBSk47QUFTQTtFQUNFLGdCQUFBO0VBQ0EsMENBQUE7QUFORjtBQVNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EseUJBQUE7RUFORjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpL25hdi1iYXIvbmF2LWxpc3QtaXRlbS9uYXYtbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtbGluayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAubmF2LWl0ZW0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEzcHggN3B4O1xyXG5cclxuICAgIC5uYXYtbGFiZWwge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbWcuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWJsYWNrKTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciwgJi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gICAgY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG4gICAgaW1nLmljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdWItbWVudSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjQwKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAubmF2LWxpbmsgLm5hdi1pdGVtLWNvbnRhaW5lciAubmF2LWxhYmVsIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav-list-item',
                templateUrl: './nav-list-item.component.html',
                styleUrls: ['./nav-list-item.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('indicatorRotate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(0deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'rotate(180deg)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px', minHeight: '0' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ]
            }]
    }], function () { return [{ type: _nav_bar_service__WEBPACK_IMPORTED_MODULE_3__["NavBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { depth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "0MLi":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constant/nav-bar.constant */ "cv3T");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _nav_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar.service */ "hADJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-list-item/nav-list-item.component */ "0HMM");












const _c0 = ["drawer"];
function NavBarComponent_mat_drawer_container_0_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_mat_drawer_container_0_section_4_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavBarComponent_mat_drawer_container_0_ng_container_7_app_nav_list_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-list-item", 22);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("item", item_r8);
} }
function NavBarComponent_mat_drawer_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_mat_drawer_container_0_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_mat_drawer_container_0_ng_container_7_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.goToProfilePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, NavBarComponent_mat_drawer_container_0_ng_container_7_app_nav_list_item_12_Template, 1, 1, "app-nav-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " University ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.nameInitials || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.displayName || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.navItems);
} }
function NavBarComponent_mat_drawer_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-drawer-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_mat_drawer_container_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.snav.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavBarComponent_mat_drawer_container_0_section_4_Template, 4, 0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-drawer", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavBarComponent_mat_drawer_container_0_ng_container_7_Template, 21, 3, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mobile_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", mobile_r1.matches);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", !mobile_r1.matches)("mode", mobile_r1.matches ? "over" : "side");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.isLoading);
} }
const _c1 = ["*"];
class NavBarComponent {
    constructor(accountService, navbarService, router, breakpointObserver) {
        this.accountService = accountService;
        this.navbarService = navbarService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.isLoading = true;
        this.appName = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AppTitle;
        this.navItems = src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_3__["RouteMap"];
        this.nameInitials = '';
        this.displayName = '';
        this.$isOpen = null;
        this.mobileObserver = this.breakpointObserver.observe('(max-width: 949px)');
    }
    ngOnInit() {
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            this.navItems = this.filterNavItems(this.navItems);
            this.displayName = this.accountService.account.Title;
            this.nameInitials = this.getInitials(this.displayName);
            this.isLoading = false;
        });
    }
    filterNavItems(currentNavItems) {
        const currentAccount = this.accountService.account;
        if (currentAccount.hasGroup(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["GROUP"].Owner)) {
            return currentNavItems;
        }
        else {
            return currentNavItems.filter((navItem) => {
                if (navItem.AccessGroup) {
                    return navItem.AccessGroup.some((group) => currentAccount.hasGroup(group));
                }
                return true;
            }).map((navItem) => {
                if (navItem.Children) {
                    navItem.Children = this.filterNavItems(navItem.Children);
                }
                return navItem;
            });
        }
    }
    getInitials(displayName) {
        let initials;
        let tempArr;
        initials = '';
        tempArr = displayName.split(/,| /);
        tempArr = tempArr.filter(e => e).map(e => e.trim().substring(0, 1).toUpperCase()).slice(0, 2);
        initials = tempArr.join('');
        return initials;
    }
    goToProfilePage() {
        this.router.navigate(['/employee-profile']);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_bar_service__WEBPACK_IMPORTED_MODULE_5__["NavBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], viewQuery: function NavBarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.snav = _t.first);
    } }, ngContentSelectors: _c1, decls: 2, vars: 3, consts: [[4, "ngIf"], ["id", "toggle-button", 1, "icon-button", "floating", 3, "click"], [1, "material-icons"], ["id", "top-bar", 4, "ngIf"], ["id", "onecap-navigation", 3, "opened", "mode"], ["drawer", ""], ["id", "content-container"], ["id", "top-bar"], [1, "icon-button"], [1, "material-icons", 3, "click"], ["id", "toggle-button", 1, "icon-button", 3, "click"], ["id", "profile-section"], ["id", "profile-area", 3, "click"], ["id", "image-holder"], ["id", "img-place-holder"], ["id", "name-holder"], ["id", "navigation-section"], [3, "item", 4, "ngFor", "ngForOf"], ["id", "logo-section"], [1, "row"], ["id", "client-logo"], ["id", "dxc-logo"], [3, "item"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavBarComponent_mat_drawer_container_0_Template, 10, 4, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.mobileObserver));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_10__["NavListItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["mat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: transparent;\n}\n\nsection#top-bar[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  top: 0px;\n  height: 40px;\n  width: 100%;\n  z-index: 1;\n  background: #F8F7F7 0% 0% no-repeat padding-box;\n  box-shadow: 2px 3px 6px #00000029;\n  box-sizing: border-box;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nbutton.icon-button[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  height: 30px;\n  width: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n\nbutton.icon-button.floating[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px;\n  border-bottom: 1px solid var(--onecaplite-darkwhite);\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 5px;\n  align-items: center;\n  font-size: var(--font-sm);\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%] {\n  cursor: inherit;\n  height: 40px;\n  width: 40px;\n  overflow: hidden;\n  border: 0.5px solid var(--onecaplite-lightgray);\n  border-radius: 50%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%]   #img-place-holder[_ngcontent-%COMP%] {\n  cursor: inherit;\n  height: inherit;\n  width: inherit;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-lg);\n  font-weight: lighter;\n  background-color: var(--onecaplite-purple);\n  color: var(--onecaplite-white);\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%]   #image-holder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: inherit;\n  width: inherit;\n  object-fit: fill;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%]   #name-holder[_ngcontent-%COMP%] {\n  cursor: inherit;\n  color: var(--onecaplite-purple);\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #profile-section[_ngcontent-%COMP%]   #profile-area[_ngcontent-%COMP%]:hover   #name-holder[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #navigation-section[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow: auto;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #navigation-section[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  border-left: 1px solid var(--onecaplite-darkwhite);\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #navigation-section[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 5px;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #navigation-section[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--onecaplite-darkwhite);\n  border-radius: 5px;\n}\n\n#onecap-navigation[_ngcontent-%COMP%]   #navigation-section[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--onecaplite-lightgray);\n}\n\nsection#content-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n@media only screen and (max-width: 949px) {\n  section#top-bar[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n\n  section#content-container[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBRUEsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBREY7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFESjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUxOOztBQU9NO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQU5SOztBQVFRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLHlCQUFBO0VBQ0Esb0JBQUE7RUFFQSwwQ0FBQTtFQUNBLDhCQUFBO0FBUlY7O0FBV1E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBVFY7O0FBYU07RUFDRSxlQUFBO0VBQ0EsK0JBQUE7QUFYUjs7QUFlUTtFQUNFLDBCQUFBO0FBYlY7O0FBbUJFO0VBQ0UsWUFBQTtFQUVBLGNBQUE7QUFsQko7O0FBb0JJO0VBQ0UsV0FBQTtFQUNBLGtEQUFBO0FBbEJOOztBQXFCSTtFQUNFLGtCQUFBO0FBbkJOOztBQXNCSTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7QUFwQk47O0FBdUJJO0VBQ0UsdUNBQUE7QUFyQk47O0FBMkJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF4QkY7O0FBMkJBO0VBQ0U7SUFDRSxvQkFBQTtFQXhCRjs7RUEyQkE7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VBeEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdWkvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuc2VjdGlvbiN0b3AtYmFyIHtcclxuICBkaXNwbGF5IDogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wICAgICA6IDBweDtcclxuICBoZWlnaHQgIDogNDBweDtcclxuICB3aWR0aCAgIDogMTAwJTtcclxuICB6LWluZGV4IDogMTtcclxuXHJcbiAgYmFja2dyb3VuZCAgOiAjRjhGN0Y3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93ICA6IDJweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICBib3gtc2l6aW5nICA6IGJvcmRlci1ib3g7XHJcblxyXG4gIGZsZXgtZGlyZWN0aW9uICA6IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLmljb24tYnV0dG9uIHtcclxuICBib3JkZXIgICAgICAgICAgOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uICA6IHJvdztcclxuICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gIGhlaWdodCAgICAgICAgICA6IDMwcHg7XHJcbiAgd2lkdGggICAgICAgICAgIDogMzBweDtcclxuICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gIGN1cnNvciAgICAgICAgICA6IHBvaW50ZXI7XHJcblxyXG4gICYuZmxvYXRpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jb25lY2FwLW5hdmlnYXRpb24ge1xyXG5cclxuXHJcbiAgI3Byb2ZpbGUtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5ICAgICAgIDogYmxvY2s7XHJcbiAgICBwYWRkaW5nICAgICAgIDogMTVweDtcclxuICAgIGJvcmRlci1ib3R0b20gOiAxcHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG5cclxuICAgICNwcm9maWxlLWFyZWEge1xyXG4gICAgICBjdXJzb3IgICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiBhdXRvIDFmcjtcclxuICAgICAgZ2FwICAgICAgICAgICAgICAgICAgIDogNXB4O1xyXG4gICAgICBhbGlnbi1pdGVtcyAgICAgICAgICAgOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICAgICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG5cclxuICAgICAgI2ltYWdlLWhvbGRlciB7XHJcbiAgICAgICAgY3Vyc29yICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgICA6IDQwcHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICA6IDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cgICAgICA6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXIgICAgICAgIDogMC41cHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1saWdodGdyYXkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiA1MCU7XHJcblxyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb24gIDogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICNpbWctcGxhY2UtaG9sZGVyIHtcclxuICAgICAgICAgIGN1cnNvciAgICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICAgICAgICBoZWlnaHQgICAgICAgICAgOiBpbmhlcml0O1xyXG4gICAgICAgICAgd2lkdGggICAgICAgICAgIDogaW5oZXJpdDtcclxuICAgICAgICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbiAgOiByb3c7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1sZyk7XHJcbiAgICAgICAgICBmb250LXdlaWdodCAgICAgOiBsaWdodGVyO1xyXG5cclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuICAgICAgICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodCAgICA6IGluaGVyaXQ7XHJcbiAgICAgICAgICB3aWR0aCAgICAgOiBpbmhlcml0O1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNuYW1lLWhvbGRlciB7XHJcbiAgICAgICAgY3Vyc29yICA6IGluaGVyaXQ7XHJcbiAgICAgICAgY29sb3IgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgI25hbWUtaG9sZGVyIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI25hdmlnYXRpb24tc2VjdGlvbiB7XHJcbiAgICBmbGV4LWdyb3cgOiAxO1xyXG4gICAgLy8gcGFkZGluZyAgIDogMTBweCA1cHg7XHJcbiAgICBvdmVyZmxvdyAgOiBhdXRvO1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vbmVjYXBsaXRlLWxpZ2h0Z3JheSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuc2VjdGlvbiNjb250ZW50LWNvbnRhaW5lciB7XHJcbiAgd2lkdGggICAgICAgOiAxMDAlO1xyXG4gIGhlaWdodCAgICAgIDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDlweCkge1xyXG4gIHNlY3Rpb24jdG9wLWJhciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24jY29udGVudC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3AgOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQgOiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.scss'],
            }]
    }], function () { return [{ type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }, { type: _nav_bar_service__WEBPACK_IMPORTED_MODULE_5__["NavBarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"] }]; }, { snav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['drawer']
        }] }); })();


/***/ }),

/***/ "62Tn":
/*!********************************************************!*\
  !*** ./src/app/core/data/model/user-feedback.model.ts ***!
  \********************************************************/
/*! exports provided: UserFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedback", function() { return UserFeedback; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

class UserFeedback extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.User = null;
        this.PageReported = '';
        this.Feedback = '';
        Object.assign(this, args);
    }
    toSPData() {
        const { User, PageReported, Feedback } = this;
        return {
            UserId: (User === null || User === void 0 ? void 0 : User.Id) || null,
            Page_x0020_Reported: PageReported,
            Feedback,
        };
    }
}


/***/ }),

/***/ "7OpA":
/*!***************************************************!*\
  !*** ./src/app/core/data/service/exam.service.ts ***!
  \***************************************************/
/*! exports provided: ExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamService", function() { return ExamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model_exam_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/exam.model */ "dKUA");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_service */ "ECYA");








class ExamService extends _service__WEBPACK_IMPORTED_MODULE_6__["SPItemService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'Exam Service';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].EXAM).items
            .expand('Owners', 'OwnerModifiedBy')
            .select('*', 'Owners/Id', 'Owners/Title', 'Owners/EMail', 'OwnerModifiedBy/Id', 'OwnerModifiedBy/Title', 'OwnerModifiedBy/EMail')
            .orderBy('Title');
    }
    toObject(data) {
        const { Id, Title, Description, Tags, PassingRate, RelatedCoursesId, LearningSubCategoryId, Owners, OwnerModifiedBy, OwnerModified, } = data;
        const ownerArray = Owners ? Owners.map(p => new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: p.Id,
            Title: p.Title,
            EMail: p.EMail
        })) : [];
        const editorObj = OwnerModifiedBy ? new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: OwnerModifiedBy.Id,
            Title: OwnerModifiedBy.Title,
            EMail: OwnerModifiedBy.EMail
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({});
        return new _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["Exam"]({
            Id,
            Title,
            LearningSubCategoryId,
            Description,
            Tags,
            PassingRate,
            RelatedCoursesId,
            Owners: ownerArray,
            Editor: editorObj,
            Modified: OwnerModified ? new Date(OwnerModified) : null,
            IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
        });
    }
    get questionQuery() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].EXAM_QUESTION).items;
    }
    get answerQuery() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].EXAM_QUESTION_ANSWER).items;
    }
    getQuestionsAndAnswers(examId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const questionList = yield this.getQuestions(examId);
            const questionIds = questionList.map(e => e.Id);
            const answerList = yield this.getAnswers(questionIds);
            return questionList.map(question => {
                question.Answers = answerList.filter(answer => answer.QuestionId === question.Id);
                return question;
            });
        });
    }
    getQuestions(examId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const questionList = yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.questionQuery
                .filter(`ExamId eq ${examId}`));
            return questionList.map((data) => {
                const { Id, ExamId, Title, QuestionText, QuestionType: Type, QuestionIsTrue: IsTrue } = data;
                return new _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["Question"]({
                    Id,
                    ExamId,
                    Title,
                    QuestionText,
                    Type,
                    IsTrue
                });
            });
        });
    }
    getAnswers(questionIds) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk, batchIdSize } = this;
            const batchSize = (chunk * batchIdSize);
            let returnArr = [];
            for (let idx = 0; idx < questionIds.length; idx += batchSize) {
                const batchArr = questionIds.slice(idx, (idx + batchSize));
                let queryArr = [];
                for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
                    const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
                    let query = '';
                    for (const [itemIdx, questionId] of chunkArr.entries()) {
                        query += `QuestionId eq '${questionId}'`;
                        if (itemIdx < chunkArr.length - 1) {
                            query += ' or ';
                        }
                    }
                    queryArr = [...queryArr, query];
                }
                const promiseArr = queryArr.map(e => Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.answerQuery.filter(e)).then(data => data.map(i => {
                    const { Id, QuestionId, Title, AnswerText, IsCorrect } = i;
                    return new _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["Answer"]({
                        Id,
                        QuestionId,
                        Title,
                        AnswerText,
                        IsAnswer: IsCorrect,
                    });
                })));
                const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                returnArr = [...returnArr, ...tempData];
            }
            return returnArr;
        });
    }
    saveQuestionList(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const questionToUpdateList = dataArr.filter(e => e.Id !== -1);
            const questionToCreateList = dataArr.filter(e => e.Id === -1);
            const batchResult = yield this.batchSaveQuestions(questionToUpdateList);
            returnArr = [
                ...returnArr,
                ...batchResult,
            ];
            for (const question of questionToCreateList) {
                const result = yield this.saveQuestion(question);
                returnArr = [
                    ...returnArr,
                    result
                ];
            }
            return returnArr;
        });
    }
    batchSaveQuestions(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => this.saveQuestion(e));
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
    saveQuestion(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { Type, Answers } = data;
            if (data.Id === -1) {
                const res = yield this.questionQuery.add(data.toSPData());
                data.Id = res.data.ID;
                switch (Type) {
                    case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].TRUE_OR_FALSE:
                        break;
                    case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].SINGLE_ANSWER:
                    case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].MULTIPLE_ANSWER:
                        let savedAnswerList = [];
                        for (const answer of Answers) {
                            answer.QuestionId = data.Id;
                            const savedAnswer = yield this.saveAnswer(answer);
                            savedAnswerList = [
                                ...savedAnswerList,
                                savedAnswer,
                            ];
                        }
                        data.Answers = savedAnswerList;
                        break;
                }
                return data;
            }
            yield this.questionQuery.getById(data.Id).update(data.toSPData());
            switch (Type) {
                case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].TRUE_OR_FALSE:
                    break;
                case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].SINGLE_ANSWER:
                case _model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"].MULTIPLE_ANSWER:
                    let savedAnswerList = [];
                    const answersToUpdateList = Answers.filter(e => e.Id !== -1).map(e => this.saveAnswer(e));
                    const updatedAnswerList = yield Promise.all(answersToUpdateList);
                    savedAnswerList = [
                        ...savedAnswerList,
                        ...updatedAnswerList
                    ];
                    const answerToCreateList = Answers.filter(e => e.Id === -1);
                    for (const answer of answerToCreateList) {
                        answer.QuestionId = data.Id;
                        const savedAnswer = yield this.saveAnswer(answer);
                        savedAnswerList = [
                            ...savedAnswerList,
                            savedAnswer,
                        ];
                    }
                    data.Answers = savedAnswerList;
                    break;
            }
            return data;
        });
    }
    saveAnswer(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.Id === -1) {
                const res = yield this.answerQuery.add(data.toSPData());
                data.Id = res.data.ID;
                return data;
            }
            yield this.answerQuery.getById(data.Id).update(data.toSPData());
            return data;
        });
    }
    removeQuestionList(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => this.deleteQuestion(e));
                const tempArr = yield Promise.all(chunkArr);
            }
        });
    }
    deleteQuestion(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.Id !== -1) {
                return yield this.questionQuery.getById(data.Id).delete();
            }
            console.error('Invalid Question To Delete:', data);
        });
    }
}
ExamService.ɵfac = function ExamService_Factory(t) { return ɵExamService_BaseFactory(t || ExamService); };
ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExamService, factory: ExamService.ɵfac, providedIn: 'root' });
const ɵExamService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ExamService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "7rYE":
/*!*************************************************!*\
  !*** ./src/app/core/data/model/course.model.ts ***!
  \*************************************************/
/*! exports provided: CourseStatus, UserCourse, UserCourseRating, Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseStatus", function() { return CourseStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCourse", function() { return UserCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCourseRating", function() { return UserCourseRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

var CourseStatus;
(function (CourseStatus) {
    CourseStatus["Completed"] = "Completed";
    CourseStatus["Pending"] = "Pending";
    CourseStatus["NotRegistered"] = "Not Started";
})(CourseStatus || (CourseStatus = {}));
class UserCourse extends _model__WEBPACK_IMPORTED_MODULE_0__["SPEmployeeItem"] {
    constructor(args) {
        super();
        this.CourseId = -1;
        this.CourseName = '';
        this.Status = CourseStatus.Pending;
        Object.assign(this, args);
    }
    toSPData() {
        const { User, CourseId, Status } = this;
        return {
            CourseId,
            Status,
            UserId: User.Id,
        };
    }
}
class UserCourseRating extends _model__WEBPACK_IMPORTED_MODULE_0__["SPEmployeeItem"] {
    constructor(args) {
        super();
        this.CourseId = -1;
        this.Rating = 0;
        this.Review = '';
        Object.assign(this, args);
    }
    toSPData() {
        const { User, CourseId, Rating, Review } = this;
        return {
            UserId: User.Id,
            CourseId,
            Rating,
            Review,
        };
    }
}
class Course extends _model__WEBPACK_IMPORTED_MODULE_0__["SPItem"] {
    constructor(args) {
        super();
        this.MaterialLink = '';
        this.Tags = '';
        this.IsClassroom = false;
        this.LearningCategoryName = '';
        this.LearningSubCategoryId = null;
        this._CurriculumNames = '';
        this._CurriculumNameArr = [];
        this._DurationString = 'No duration';
        this._Duration = '';
        this._HasRecord = false;
        this._Status = CourseStatus.NotRegistered;
        this._CompletionDate = '';
        this._Record = null;
        Object.assign(this, args);
    }
    get CurriculumNames() { return this._CurriculumNames; }
    get CurriculumNameArr() { return this._CurriculumNameArr; }
    set CurriculumNameArr(value) {
        this._CurriculumNameArr = value;
        this._CurriculumNames = value.join(', ');
    }
    get DurationString() { return this._DurationString; }
    get Duration() { return this._Duration; }
    set Duration(value) {
        this._Duration = value;
        if (value) {
            try {
                const [hrs, min] = value.split(':').map(e => parseInt(e, 10));
                this._DurationString = `${hrs} hours ${min} mins`;
            }
            catch (_a) {
                console.error(`Invalid Course Duration! [Name: ${this.Title}]`);
                this._DurationString = 'No duration';
            }
        }
        else {
            this._DurationString = 'No duration';
        }
    }
    get HasRecord() { return this._HasRecord; }
    get Status() { return this._Status; }
    get CompletionDate() {
        return this._CompletionDate;
    }
    get Record() { return this._Record; }
    set Record(value) {
        this._Record = value;
        if (value) {
            this._Status = value.Status;
            this._HasRecord = true;
            this._CompletionDate = value.DateModified;
        }
        else {
            this._Status = CourseStatus.NotRegistered;
            this._HasRecord = false;
        }
    }
    toSPData() {
        const { Title, LearningSubCategoryId, Description, Duration, MaterialLink, Tags, IsClassroom, Owners, Editor, Modified, } = this;
        return {
            Title,
            LearningSubCategoryId,
            Description,
            Duration,
            MaterialLink,
            Tags,
            IsClassroom,
            OwnersId: { results: Owners.map(e => e.Id) },
            OwnerModifiedById: Editor ? Editor.Id : undefined,
            OwnerModified: Modified,
        };
    }
}


/***/ }),

/***/ "ADeA":
/*!************************************************************!*\
  !*** ./src/app/core/data/service/user-feedback.service.ts ***!
  \************************************************************/
/*! exports provided: UserFeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedbackService", function() { return UserFeedbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_user_feedback_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user-feedback.model */ "62Tn");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_service */ "ECYA");
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email.service */ "dt6v");








class UserFeedbackService extends _service__WEBPACK_IMPORTED_MODULE_5__["SPModelService"] {
    constructor(emailService) {
        super();
        this.emailService = emailService;
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].USER_FEEDBACK).items
            .expand('User')
            .select('*', 'User/Id', 'User/Title', 'User/EMail');
    }
    toObject(data) {
        console.log('data', data);
        const { Id, Title, User, Page_x0020_Reported, Feedback, } = data;
        const UserObj = new _model_model__WEBPACK_IMPORTED_MODULE_4__["Person"]({
            Id: User.Id,
            Title: User.Title,
            EMail: User.EMail,
        });
        return new _model_user_feedback_model__WEBPACK_IMPORTED_MODULE_3__["UserFeedback"]({
            Id,
            Title,
            Feedback,
            PageReported: Page_x0020_Reported,
            User: UserObj,
        });
    }
    save(data) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const returnData = yield _super.save.call(this, data);
            yield this.emailService.sendFeedbackNotification(returnData);
            return returnData;
        });
    }
}
UserFeedbackService.ɵfac = function UserFeedbackService_Factory(t) { return new (t || UserFeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"])); };
UserFeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserFeedbackService, factory: UserFeedbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserFeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _email_service__WEBPACK_IMPORTED_MODULE_6__["EmailService"] }]; }, null); })();


/***/ }),

/***/ "AmJm":
/*!***************************************************!*\
  !*** ./src/app/core/data/service/role.service.ts ***!
  \***************************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/role.model */ "TZOz");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_service */ "ECYA");






class RoleService extends _service__WEBPACK_IMPORTED_MODULE_4__["SPItemService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'Role Service';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__["SPList"].ROLE).items
            .expand('Owners', 'OwnerModifiedBy', 'RoleSubCategory')
            .select('*', 'RoleSubCategory/Title', 'Owners/Id', 'Owners/Title', 'Owners/EMail', 'OwnerModifiedBy/Id', 'OwnerModifiedBy/Title', 'OwnerModifiedBy/EMail')
            .orderBy('Title');
    }
    toObject(data) {
        const { Id, Title, Description, RoleSubCategory, RoleSubCategoryId, CurriculaId, CoursesId, ExamsId, Owners, OwnerModifiedBy, OwnerModified, } = data;
        const ownerArray = Owners ? Owners.map(p => new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id: p.Id,
            Title: p.Title,
            EMail: p.EMail
        })) : [];
        const editorObj = OwnerModifiedBy ? new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id: OwnerModifiedBy.Id,
            Title: OwnerModifiedBy.Title,
            EMail: OwnerModifiedBy.EMail
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({});
        return new _model_role_model__WEBPACK_IMPORTED_MODULE_2__["Role"]({
            Id,
            Title,
            Description,
            SubCategoryId: RoleSubCategoryId,
            SubCategoryName: RoleSubCategory ? RoleSubCategory.Title : '',
            CurriculaId: new Set(CurriculaId),
            CoursesId: new Set(CoursesId),
            ExamsId: new Set(ExamsId),
            Owners: ownerArray,
            Editor: editorObj,
            Modified: OwnerModified ? new Date(OwnerModified) : null,
            IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
        });
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return ɵRoleService_BaseFactory(t || RoleService); };
RoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });
const ɵRoleService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RoleService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, GROUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUP", function() { return GROUP; });
const siteCollectionURL = 'https://dxcportal.sharepoint.com/sites/https___dxcportal.sharepoint.com_sites_testingsite/';
const environment = {
    production: false,
    SupportName: 'Nickole Marilag',
    SupportMail: 'nickole.marilag@dxc.com',
    AppTitle: 'Southwest Knowledge',
    SiteURL: 'https://dxcportal.sharepoint.com/sites/https___dxcportal.sharepoint.com_sites_testingsite/QA/',
    SPUrl: 'http://localhost:8080',
    CREATE_EMPLOYEE_TEMPLATE: siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
        'https://dxcportal.sharepoint.com/sites/https___dxcportal.sharepoint.com_sites_testingsite/QA/Templates/Create%20Employee%20Template.xlsx',
    ATTENDANCE_TEMPLATE_LINK: siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
        'https://dxcportal.sharepoint.com/sites/https___dxcportal.sharepoint.com_sites_testingsite/QA/Templates/Attendance%20Sheet%20Template.xlsx',
    REGISTRATION_TEMPLATE_LINK: siteCollectionURL + '_layouts/download.aspx?SourceUrl=' +
        'https://dxcportal.sharepoint.com/sites/https___dxcportal.sharepoint.com_sites_testingsite/QA/Templates/Registration%20Sheet%20Template.xlsx',
};
var GROUP;
(function (GROUP) {
    GROUP["Owner"] = "OneCap Owners";
    GROUP["Admin"] = "QA Admins";
    GROUP["Employee"] = "QA Employees";
    GROUP["ReportAccess"] = "QA Report Access";
})(GROUP || (GROUP = {}));


/***/ }),

/***/ "BVpE":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/dialog/learning-maps-dialog/learning-maps-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LearningMapsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningMapsDialogComponent", function() { return LearningMapsDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/role.model */ "TZOz");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var _course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../course-dialog/course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var _curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../curriculum-description-dialog/curriculum-description-dialog.component */ "UGwT");
/* harmony import */ var _examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var _report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../ui/loader/loader.component */ "HEbm");




























function LearningMapsDialogComponent_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r3.ActiveItem.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function LearningMapsDialogComponent_ng_container_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No description available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LearningMapsDialogComponent_ng_container_6_div_10_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_10_div_2_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const CurriculumItem_r15 = ctx.ngIf; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r16.launchCurriculum(CurriculumItem_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_10_div_2_ng_container_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const CurriculumItem_r15 = ctx.ngIf; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r18.launchCurriculum(CurriculumItem_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const CurriculumItem_r15 = ctx.ngIf;
    const idx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idx_r13 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", CurriculumItem_r15 == null ? null : CurriculumItem_r15.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", CurriculumItem_r15 == null ? null : CurriculumItem_r15.TotalDurationString, " ");
} }
function LearningMapsDialogComponent_ng_container_6_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMapsDialogComponent_ng_container_6_div_10_div_2_ng_container_1_Template, 18, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.CurriculumMap[id_r12]);
} }
function LearningMapsDialogComponent_ng_container_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LearningMapsDialogComponent_ng_container_6_div_10_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.RequiredCurriculumIdArr);
} }
function LearningMapsDialogComponent_ng_container_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No curriculum assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r26.moreInfoCourse(course_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r28.launchCourse(course_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-menu", null, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r29.moreInfoCourse(course_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "More information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r30.addToMyCourse(course_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r31.markCourseAsComplete(course_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r32.copyToClipBoard(course_r24.Title, ctx_r32.ContentType.COURSES); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const course_r24 = ctx.ngIf; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r33.reportProblem(course_r24, "Course"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Contact Us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const course_r24 = ctx.ngIf;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
    const idx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idx_r22 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r24 == null ? null : course_r24.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r24 == null ? null : course_r24.DurationString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c0, course_r24.Status === ctx_r23.CourseStatus.Completed, course_r24.Status === ctx_r23.CourseStatus.Pending, course_r24.Status === ctx_r23.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r24.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", course_r24.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](course_r24.HasRecord ? "Added" : "Add to My Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", course_r24.Status === ctx_r23.CourseStatus.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", course_r24.Status === ctx_r23.CourseStatus.Completed ? "Completed" : "Mark as Complete", " ");
} }
function LearningMapsDialogComponent_ng_container_6_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMapsDialogComponent_ng_container_6_div_15_div_2_ng_container_1_Template, 36, 14, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r20.CourseMap[id_r21]);
} }
function LearningMapsDialogComponent_ng_container_6_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LearningMapsDialogComponent_ng_container_6_div_15_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.RequiredCourseIdArr);
} }
function LearningMapsDialogComponent_ng_container_6_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No course assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "completed": a0, "failed": a1, "not-started": a2 }; };
function LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const exam_r39 = ctx.ngIf; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r41.launchExam(exam_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-menu", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const exam_r39 = ctx.ngIf; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r43.addToMyExam(exam_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const exam_r39 = ctx.ngIf; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r44.copyToClipBoard(exam_r39.Title, ctx_r44.ContentType.EXAMS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const exam_r39 = ctx.ngIf; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r45.reportProblem(exam_r39, "Exam"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exam_r39 = ctx.ngIf;
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    const idx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", idx_r37 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r39 == null ? null : exam_r39.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](7, _c1, exam_r39.Status === ctx_r38.ExamStatus.PASSED, exam_r39.Status === ctx_r38.ExamStatus.FAILED, exam_r39.Status === ctx_r38.ExamStatus.NOT_YET_TAKEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r39.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", exam_r39.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exam_r39.HasRecord ? "Added" : "Add to My Exams");
} }
function LearningMapsDialogComponent_ng_container_6_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LearningMapsDialogComponent_ng_container_6_div_20_div_2_ng_container_1_Template, 26, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r35.ExamMap[id_r36]);
} }
function LearningMapsDialogComponent_ng_container_6_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LearningMapsDialogComponent_ng_container_6_div_20_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.RequiredExamIdArr);
} }
function LearningMapsDialogComponent_ng_container_6_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No exams assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LearningMapsDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LearningMapsDialogComponent_ng_container_6_div_5_Template, 1, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LearningMapsDialogComponent_ng_container_6_div_6_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Curriculum ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, LearningMapsDialogComponent_ng_container_6_div_10_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LearningMapsDialogComponent_ng_container_6_div_11_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LearningMapsDialogComponent_ng_container_6_div_15_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, LearningMapsDialogComponent_ng_container_6_div_16_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LearningMapsDialogComponent_ng_container_6_div_20_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LearningMapsDialogComponent_ng_container_6_div_21_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Duration: ", ctx_r0.ActiveItem.TotalDurationString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.ActiveItem == null ? null : ctx_r0.ActiveItem.HasDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r0.ActiveItem == null ? null : ctx_r0.ActiveItem.HasDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredCurriculumIdArr.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredCurriculumIdArr.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredCourseIdArr.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredCourseIdArr.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredExamIdArr.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.RequiredExamIdArr.length === 0);
} }
function LearningMapsDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LearningMapsDialogComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LearningMapsDialogComponent_section_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r47.addCurrentRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.ActiveItem.IsCurrentRole);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.ActiveItem.IsCurrentRole ? "Added as Current Role" : "Add as Current Role", " ");
} }
class LearningMapsDialogComponent {
    constructor(dialog, snackBar, courseDialogService, curriculumService, courseService, examService, accountService, userCourseService, userExamService, userRoleService, dialogRef, data) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.courseDialogService = courseDialogService;
        this.curriculumService = curriculumService;
        this.courseService = courseService;
        this.examService = examService;
        this.accountService = accountService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.userRoleService = userRoleService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"];
        this.ContentType = src_constant_app_constant__WEBPACK_IMPORTED_MODULE_8__["ContentType"];
        this.ActiveItem = null;
        this.RoleIsLoading = true;
        this.CurriculumIdArr = [];
        this.CoursesIdArr = [];
        this.ExamsIdArr = [];
        this.RequiredCurriculumIdArr = [];
        this.RequiredCourseIdArr = [];
        this.RequiredExamIdArr = [];
        this.InitialRecomendedCurriculumIdArr = [];
        this.InitialRecomendedCourseIdArr = [];
        this.InitialRecomendedExamIdArr = [];
        this.RecomendedCurriculumIdArr = [];
        this.RecomendedCourseIdArr = [];
        this.RecomendedExamIdArr = [];
        this.CurriculumMap = {};
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
        if (this.data) {
            const { item } = this.data;
            this.ActiveItem = item;
            this.loadData();
        }
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.CoursesIdArr = [];
            this.ExamsIdArr = [];
            this.RoleIsLoading = true;
            if (this.ActiveItem) {
                if (!this.userCourseService.DataIsLoaded ||
                    !this.userExamService.DataIsLoaded ||
                    !this.userRoleService.DataIsLoaded) {
                    yield Promise.all([
                        this.userCourseService.getAll(),
                        this.userExamService.getAll(),
                        this.userRoleService.getAll(),
                    ]);
                }
                this.ActiveItem.Record = this.userRoleService.getRecord(this.ActiveItem.Id);
                const { CurriculaId, CoursesId, ExamsId, } = this.ActiveItem;
                const CurriculaIdArr = Array.from(new Set([
                    ...Array.from(CurriculaId)
                ]));
                const CurriculaArr = yield this.curriculumService.getItemsByIdArr(CurriculaIdArr);
                this.CurriculumMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(CurriculaArr);
                // #region Required Items
                const CurriculumCoursesIdArr = [];
                const CurriculumExamsIdArr = [];
                for (const Id of CurriculaIdArr) {
                    if (!this.CurriculumMap[Id]) {
                        console.log(`[Learning Maps Dialog]: Curriculum Id not found (ID: ${Id})`);
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
                    ...Array.from(ExamsId),
                ];
                const CourseIdSet = new Set(CourseIdArr);
                const ExamIdSet = new Set(ExamIdArr);
                // #endregion Required Items
                const OverAllCourseIdSet = CourseIdSet;
                const OverAllExamIdSet = ExamIdSet;
                const [CourseArr, ExamArr] = yield Promise.all([
                    this.courseService.getItemsByIdArr(Array.from(OverAllCourseIdSet)),
                    this.examService.getItemsByIdArr(Array.from(OverAllExamIdSet)),
                ]);
                this.CourseMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(CourseArr);
                this.ExamMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["convertToFilterMap"])(ExamArr);
                // #region Required Items
                const CurriculumCoursesIdSet = new Set(CurriculumCoursesIdArr);
                const CurriculumExamsIdSet = new Set(CurriculumExamsIdArr);
                this.CurriculumIdArr = CurriculaIdArr;
                this.CoursesIdArr = Array.from(CourseIdSet);
                this.ExamsIdArr = Array.from(ExamIdSet);
                const Curricula = CurriculaIdArr;
                const FilteredCourses = this.CoursesIdArr
                    .filter(e => !CurriculumCoursesIdSet.has(e));
                const FilteredExams = this.ExamsIdArr
                    .filter(e => !CurriculumExamsIdSet.has(e));
                this.RequiredCurriculumIdArr = Curricula;
                this.RequiredCourseIdArr = FilteredCourses;
                this.RequiredExamIdArr = FilteredExams;
                // #endregion Required Items
                for (const CurriculumId of CurriculaIdArr) {
                    const { CoursesId: TempCourseIds } = this.CurriculumMap[CurriculumId];
                    const TempDurationArr = Array.from(TempCourseIds).map(e => {
                        if (this.CourseMap[e]) {
                            return this.CourseMap[e].Duration;
                        }
                        return '';
                    });
                    this.CurriculumMap[CurriculumId].DurationList = TempDurationArr;
                }
                this.ActiveItem.DurationList = [
                    ...this.RequiredCurriculumIdArr.map(e => this.CurriculumMap[e].TotalDuration),
                    ...this.RequiredCourseIdArr.map(e => this.CourseMap[e].Duration),
                ];
            }
            this.refreshData();
            this.RoleIsLoading = false;
        });
    }
    copyToClipBoard(Title, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_7__["copyToClipBoard"])(Title, contentType);
            this.snackBar.open('Link Copied!');
        });
    }
    reportProblem(item, itemType) {
        this.dialog.open(_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_12__["ReportProblemDialogComponent"], {
            data: { item, itemType }
        });
    }
    launchCurriculum(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.dialog.open(_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CurriculumDescriptionDialogComponent"], {
                data: { item }
            }).afterClosed().toPromise();
            this.refreshData();
        });
    }
    // #region Courses
    moreInfoCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedItem = yield this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
            if (updatedItem) {
                const { Record } = updatedItem;
                if (Record) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackBar.open(message);
                }
            }
            this.refreshData();
        });
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.courseDialogService.launchCourse(item);
            this.refreshData();
        });
    }
    addToMyCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourse"]({ CourseId: item.Id });
            const updatedRecord = yield this.userCourseService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Courses!');
            this.refreshData();
        });
    }
    markCourseAsComplete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item) {
                const loaderDialog = this.dialog.loaderDialog();
                const { Record } = item;
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourse"]({ CourseId: item.Id });
                activeRecord.Status = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed;
                const updatedRecord = yield this.userCourseService.save(activeRecord);
                item.Record = updatedRecord;
                loaderDialog.close();
                this.snackBar.open(`Course completed!`);
                this.refreshData();
                const isRated = yield this.dialog.open(_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
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
            yield this.dialog.open(_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ExaminationDialogComponent"], {
                data: { item }
            }).afterClosed().toPromise();
            this.refreshData();
        });
    }
    addToMyExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["UserExam"]({ ExamId: item.Id });
            const updatedRecord = yield this.userExamService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackBar.open('Added to My Exams!');
            this.refreshData();
        });
    }
    // #endregion
    addCoursesAndExams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { CoursesIdArr, ExamsIdArr } = this;
            const CoursePromises = CoursesIdArr.map((e) => {
                const { Record } = this.CourseMap[e];
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourse"]({ CourseId: e });
                if (activeRecord.Id === -1) {
                    return this.userCourseService.save(activeRecord)
                        .then((res) => this.CourseMap[e].Record = res)
                        .then(() => true);
                }
                return Promise.resolve(true);
            });
            const ExamPromises = ExamsIdArr.map((e) => {
                const { Record } = this.ExamMap[e];
                const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["UserExam"]({ ExamId: e });
                if (activeRecord.Id === -1) {
                    return this.userExamService.save(activeRecord)
                        .then((res) => this.ExamMap[e].Record = res)
                        .then(() => true);
                }
                return Promise.resolve(true);
            });
            yield Promise.all([
                ...CoursePromises,
                ...ExamPromises
            ]);
            loaderDialog.close();
            this.snackBar.open('Added to My Courses and My Exams!');
        });
    }
    addCurrentRole() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.dialog.loaderDialog();
            let Record = this.ActiveItem.Record || new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_6__["UserRole"]({ RoleId: this.ActiveItem.Id });
            Record = yield this.userRoleService.save(Record);
            this.ActiveItem.Record = Record;
            loader.close();
            this.snackBar.open('Added as Current Role.');
        });
    }
    refreshData() {
        const OverAllCurriculumId = [...this.RequiredCurriculumIdArr, ...this.InitialRecomendedCurriculumIdArr];
        const OverAllCourseId = [...this.RequiredCourseIdArr, ...this.InitialRecomendedCourseIdArr];
        const OverAllExamId = [...this.RequiredExamIdArr, ...this.InitialRecomendedExamIdArr];
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
    computeCurriculumScore(item) {
        const { CoursesId, ExamsId } = item;
        const CoursesIdArr = Array.from(CoursesId);
        const ExamsIdArr = Array.from(ExamsId);
        const CourseCompletedCount = CoursesIdArr.filter(e => this.CourseMap[e].Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed).length;
        const ExamCompletedCount = ExamsIdArr.filter(e => this.ExamMap[e].Status === src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_5__["ExamStatus"].PASSED).length;
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
}
LearningMapsDialogComponent.ɵfac = function LearningMapsDialogComponent_Factory(t) { return new (t || LearningMapsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_15__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_16__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_17__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_18__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_20__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_21__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_22__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
LearningMapsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LearningMapsDialogComponent, selectors: [["ng-component"]], decls: 9, vars: 4, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [4, "ngIf"], ["class", "dialog-loader", 4, "ngIf"], ["class", "dialog-action", 4, "ngIf"], [1, "duration"], [1, "onecap-label", "primary"], [1, "description-container"], ["class", "content", 3, "innerHTML", 4, "ngIf"], ["id", "no-description", 4, "ngIf"], ["id", "curriculum-section"], ["id", "header"], ["id", "list", 4, "ngIf"], ["id", "no-data-message", 4, "ngIf"], ["id", "course-section"], ["id", "exam-section"], [1, "content", 3, "innerHTML"], ["id", "no-description"], ["id", "list"], ["id", "table", 1, "onecap-table"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "section", "buttons"], [1, "col-name"], [1, "onecap-icon-btn", 3, "click"], [1, "section", "details"], [1, "onecap-lbl", "primary"], [1, "col-name", "action"], [1, "onecap-btn", "accent", 3, "click"], [1, "col-name", "status"], ["id", "no-data-message"], [1, "onecap-btn", "primary", 3, "click"], [1, "status-badge", 3, "ngClass"], [1, "col-name", "more"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], ["courseMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "click"], ["examMenu", "matMenu"], [1, "dialog-loader"], [1, "dialog-action"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"]], template: function LearningMapsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LearningMapsDialogComponent_ng_container_6_Template, 22, 9, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LearningMapsDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, LearningMapsDialogComponent_section_8_Template, 3, 2, "section", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.ActiveItem == null ? null : ctx.ActiveItem.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.RoleIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.RoleIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.RoleIsLoading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuItem"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"]], styles: [".dialog-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n}\n\n.dialog-loader[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 120px;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n#curriculum-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: sticky;\n  padding: 20px 0px;\n  top: -1px;\n  z-index: 2;\n  background-color: var(--onecaplite-white);\n  font-weight: bold;\n}\n\n#curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #d9d9d9;\n  grid-template-columns: 65px 1fr;\n}\n\n#curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%] {\n  grid-template-columns: 30px 30px;\n}\n\n#curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 2.5fr 1fr 120px 120px 30px;\n}\n\n#curriculum-section[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  box-sizing: border-box;\n  background-color: rgba(217, 217, 217, 0.25);\n  border-radius: 5px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-sm);\n  color: var(--onecaplite-purple);\n}\n\n#exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 120px 120px 30px;\n}\n\n#recomended-section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: rgba(217, 217, 217, 0.25);\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%] {\n  padding: 10px 5px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  align-items: baseline;\n  border-top: 1px solid #d9d9d9;\n  grid-template-columns: 65px 1fr;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%] {\n  grid-template-columns: 30px 30px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 2.5fr 1fr 120px 120px 30px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   #list.exam[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 120px 120px 30px;\n}\n\n#recomended-section[_ngcontent-%COMP%]   #body[_ngcontent-%COMP%]   .section-list[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  box-sizing: border-box;\n  background-color: rgba(217, 217, 217, 0.25);\n  border-radius: 5px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-sm);\n  color: var(--onecaplite-purple);\n}\n\n@media only screen and (max-width: 949px) {\n  #curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-flow: row;\n    grid-auto-rows: max-content;\n  }\n  #curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    order: 2;\n    justify-content: center;\n  }\n  #curriculum-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%], #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    order: 1;\n  }\n\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-flow: row;\n    grid-auto-rows: max-content;\n  }\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    order: 2;\n    justify-content: center;\n  }\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9sZWFybmluZy1tYXBzLWRpYWxvZy9sZWFybmluZy1tYXBzLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUdFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5Q0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBTU07RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FBSlI7O0FBS1E7RUFDRSxnQ0FBQTtBQUhWOztBQUtRO0VBQ0UsaURBQUE7QUFIVjs7QUFTRTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSwrQkFBQTtBQVRKOztBQWlCUTtFQUNFLDJDQUFBO0FBZFY7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBbEJKOztBQXFCRTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUFuQko7O0FBb0JJO0VBQ0UsaUJBQUE7QUFsQk47O0FBcUJJO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFuQk47O0FBb0JNO0VBQ0UsaUJBQUE7QUFsQlI7O0FBdUJVO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FBckJaOztBQXNCWTtFQUNFLGdDQUFBO0FBcEJkOztBQXNCWTtFQUNFLGlEQUFBO0FBcEJkOztBQThCWTtFQUNFLDJDQUFBO0FBNUJkOztBQWtDTTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSwrQkFBQTtBQWxDUjs7QUF3Q0E7RUFLVTtJQUNFLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtFQXpDVjtFQTJDVTtJQUNFLFFBQUE7SUFDQSx1QkFBQTtFQXpDWjtFQTRDVTtJQUNFLFFBQUE7RUExQ1o7O0VBc0RRO0lBQ0UsMEJBQUE7SUFDQSxtQkFBQTtJQUNBLDJCQUFBO0VBbkRWO0VBcURVO0lBQ0UsUUFBQTtJQUNBLHVCQUFBO0VBbkRaO0VBc0RVO0lBQ0UsUUFBQTtFQXBEWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZy9sZWFybmluZy1tYXBzLWRpYWxvZy9sZWFybmluZy1tYXBzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctYm9keSB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kaWFsb2ctYWN0aW9uIHtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4XHJcbn1cclxuXHJcbi5kaWFsb2ctbG9hZGVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0dXMtYmFkZ2Uge1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aCA6IDEyMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY3VycmljdWx1bS1zZWN0aW9uLCAjY291cnNlLXNlY3Rpb24sICNleGFtLXNlY3Rpb24ge1xyXG4gICNoZWFkZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uICA6IHN0aWNreTtcclxuICAgIHBhZGRpbmcgICA6IDIwcHggMHB4O1xyXG4gICAgdG9wICAgICAgIDogLTFweDtcclxuICAgIHotaW5kZXggICA6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgI2xpc3Qge1xyXG5cclxuICAgICN0YWJsZS5vbmVjYXAtdGFibGUge1xyXG4gICAgICAudGFibGUtcm93IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1cHggMWZyO1xyXG4gICAgICAgIC5zZWN0aW9uLmJ1dHRvbnMge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uLmRldGFpbHMge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyLjVmciAxZnIgMTIwcHggMTIwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNuby1kYXRhLW1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLWxlZnQgICAgIDogMTVweDtcclxuICAgIGJveC1zaXppbmcgICAgICA6IGJvcmRlci1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2Q5ZDlkOSwgJGFscGhhOiAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDc1cHg7XHJcblxyXG4gICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LXNtKTtcclxuICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuICB9XHJcbn1cclxuXHJcbiNleGFtLXNlY3Rpb24ge1xyXG4gICNsaXN0IHtcclxuICAgICN0YWJsZS50YWJsZS1hcmVhIHtcclxuICAgICAgLnRhYmxlLXJvdyB7XHJcbiAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMjBweCAxMjBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI3JlY29tZW5kZWQtc2VjdGlvbiB7XHJcbiAgZGlzcGxheSA6IGdyaWQ7XHJcbiAgZ2FwICAgICA6IDEwcHg7XHJcblxyXG4gICNoZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQgICAgICAgOiBib2xkO1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgOiBncmlkO1xyXG4gICAgYWxpZ24taXRlbXMgICAgICAgOiBjZW50ZXI7XHJcbiAgICBncmlkLWF1dG8tZmxvdyAgICA6IGNvbHVtbjtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zIDogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAjYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4yNSk7XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tbGlzdCB7XHJcbiAgICAgIGRpc3BsYXkgOiBncmlkO1xyXG4gICAgICBnYXAgICAgIDogNXB4O1xyXG4gICAgICAuc2VjdGlvbi1oZWFkZXIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjbGlzdCB7XHJcbiAgICAgICAgI3RhYmxlLnRhYmxlLWFyZWEge1xyXG4gICAgICAgICAgLnRhYmxlLXJvdyB7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjVweCAxZnI7XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWN0aW9uLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMi41ZnIgMWZyIDEyMHB4IDEyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICAjbGlzdC5leGFtIHtcclxuICAgICAgICAjdGFibGUudGFibGUtYXJlYSB7XHJcbiAgICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTIwcHggMTIwcHggMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgI25vLWRhdGEtbWVzc2FnZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQgICAgIDogMTVweDtcclxuICAgICAgICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZDlkOWQ5LCAkYWxwaGE6IDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgOiA3NXB4O1xyXG5cclxuICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDlweCkge1xyXG4gICNjdXJyaWN1bHVtLXNlY3Rpb24sICNjb3Vyc2Utc2VjdGlvbiB7XHJcbiAgICAjbGlzdCB7XHJcbiAgICAgICN0YWJsZS50YWJsZS1hcmVhIHtcclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIC5zZWN0aW9uLmRldGFpbHMge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2V4YW0tc2VjdGlvbiB7XHJcbiAgICAjbGlzdCB7XHJcbiAgICAgICN0YWJsZS50YWJsZS1hcmVhIHtcclxuICAgICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAgIC5zZWN0aW9uLmRldGFpbHMge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LearningMapsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './learning-maps-dialog.component.html',
                styleUrls: ['./learning-maps-dialog.component.scss'],
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
    }], function () { return [{ type: _dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"] }, { type: _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_15__["CourseDialogService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_16__["CurriculumService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_17__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_18__["ExamService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_20__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_21__["UserExamService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_22__["UserRoleService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Bwnv":
/*!****************************************************************!*\
  !*** ./src/app/pages/access-denied/access-denied.component.ts ***!
  \****************************************************************/
/*! exports provided: AccessDeniedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function() { return AccessDeniedComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class AccessDeniedComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.previousUrl = this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(e => e.get('url')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(e => console.log('url', e)));
    }
}
AccessDeniedComponent.ɵfac = function AccessDeniedComponent_Factory(t) { return new (t || AccessDeniedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AccessDeniedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 10, vars: 3, consts: [[1, "page-container"], [1, "header"], [1, "message"]], template: function AccessDeniedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Access Denied");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " You don't have enough privilage to access ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " url. If you do realy need to have access in this link please contact the administrators. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("'", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 1, ctx.previousUrl), "'");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: larger;\n  text-align: justify;\n  text-indent: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjZXNzLWRlbmllZC9hY2Nlc3MtZGVuaWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB0ZXh0LWluZGVudDogMWVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccessDeniedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-access-denied',
                templateUrl: './access-denied.component.html',
                styleUrls: ['./access-denied.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ECYA":
/*!***********************************************!*\
  !*** ./src/app/core/data/service/_service.ts ***!
  \***********************************************/
/*! exports provided: itemStatus, SPModelService, SPItemService, SPEmployeeItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemStatus", function() { return itemStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPModelService", function() { return SPModelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPItemService", function() { return SPItemService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEmployeeItemService", function() { return SPEmployeeItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/items */ "lYrR");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.service */ "LFci");









var itemStatus;
(function (itemStatus) {
    itemStatus[itemStatus["UPDATED"] = -1] = "UPDATED";
    itemStatus[itemStatus["CREATED"] = 1] = "CREATED";
    itemStatus[itemStatus["CANCELED"] = 0] = "CANCELED";
})(itemStatus || (itemStatus = {}));
class SPModelService {
    constructor() {
        this.serviceName = '';
        this.sp = _pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"];
        this.pageSize = 16;
        this.batch = 3;
        this.batchIdSize = 50;
        this.chunk = 5;
    }
    get query() {
        throw new Error('query must be implemented!');
    }
    toObject(data) {
        throw new Error('toObject must be implemented!');
    }
    odataEscapeString(str) {
        return str.replace(`'`, `''`);
    }
    convertFiltersToQuery(filters) {
        let queryStr = '';
        for (const field in filters) {
            if (!filters[field]) {
                continue;
            }
            if (queryStr) {
                queryStr += ' and ';
            }
            switch (typeof filters[field]) {
                case 'string':
                    const safeStr = this.odataEscapeString(filters[field]);
                    const fieldArr = field.split('|');
                    const tempSubQuery = fieldArr.map(e => `substringof('${safeStr}', ${e})`).join(' or ');
                    queryStr += `(${tempSubQuery})`;
                    break;
                case 'number':
                    queryStr += `(${field} eq ${filters[field]})`;
                    break;
                case 'object':
                    if (Array.isArray(filters[field])) {
                        let tempQuery = '';
                        if (filters[field].length > 0) {
                            for (const id of filters[field]) {
                                if (tempQuery) {
                                    tempQuery += ' or ';
                                }
                                tempQuery += `${field} eq ${id}`;
                            }
                        }
                        else {
                            tempQuery += `${field} eq -1`;
                        }
                        if (tempQuery) {
                            queryStr += `(${tempQuery})`;
                        }
                    }
                    break;
            }
        }
        return queryStr;
    }
    save(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.Id === -1) {
                const res = yield this.query.add(data.toSPData());
                return yield this.getItemById(res.data.ID);
            }
            else {
                yield this.query.getById(data.Id).update(data.toSPData());
                return data;
            }
        });
    }
    delete(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.Id !== -1) {
                return yield this.query.getById(data.Id).delete();
            }
            console.error(`Invalid Id: ${data.Id}`);
        });
    }
    getItemById(Id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.query.filter(`ID eq ${Id}`).get();
            if (data.length > 0) {
                return this.toObject(data[0]);
            }
            console.error(`[${this.serviceName}] can't get: Id - ${Id} `);
            return null;
        });
    }
    getItemsByIdArr(IdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (IdArr.length > 0) {
                const { chunk, batchIdSize } = this;
                const batchSize = (chunk * batchIdSize);
                let returnArr = [];
                for (let idx = 0; idx < IdArr.length; idx += batchSize) {
                    const batchArr = IdArr.slice(idx, (idx + batchSize));
                    let queryArr = [];
                    for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
                        const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
                        const chunkQuery = chunkArr.map(e => `ID eq ${e}`)
                            .join(' or ');
                        const query = `(${chunkQuery})`;
                        queryArr = [...queryArr, query];
                    }
                    const promiseArr = queryArr.map(e => Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
                    const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                    returnArr = [...returnArr, ...tempData];
                }
                return returnArr;
            }
            return [];
        });
    }
    getPagedData(filters) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const queryStr = this.convertFiltersToQuery(filters);
            const pagedData = yield this.query.filter(queryStr).top(this.pageSize).getPaged();
            const { results } = pagedData;
            pagedData.results = results.map(e => this.toObject(e));
            return pagedData;
        });
    }
    getNextPage(pagedData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nextData = yield pagedData.getNext();
            const { results } = nextData;
            nextData.results = results.map(e => this.toObject(e));
            return nextData;
        });
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.top(5000));
            return tempList.map(e => this.toObject(e));
        });
    }
}
SPModelService.ɵfac = function SPModelService_Factory(t) { return new (t || SPModelService)(); };
SPModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SPModelService, factory: SPModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SPModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class SPItemService extends SPModelService {
    constructor(accountService) {
        super();
        this.accountService = accountService;
    }
    get UserId() { return this.accountService.account.Id; }
    get IsSiteOwner() { return this.accountService.account.IsSiteOwner; }
    getItemsByTitle(Titles) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk, batch } = this;
            const batchSize = (chunk * batch);
            let returnArr = [];
            for (let idx = 0; idx < Titles.length; idx += batchSize) {
                const batchArr = Titles.slice(idx, (idx + batchSize));
                let queryArr = [];
                for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
                    const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
                    let query = '';
                    for (const [itemIdx, title] of chunkArr.entries()) {
                        const escapedTitle = this.odataEscapeString(title);
                        query += `Title eq '${escapedTitle}'`;
                        if (itemIdx < chunkArr.length - 1) {
                            query += ' or ';
                        }
                    }
                    queryArr = [...queryArr, query];
                }
                const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
                const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                returnArr = [...returnArr, ...tempData];
            }
            return returnArr;
        });
    }
    batchSave(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const titleArr = dataArr.map(e => e.Title);
            const itemsArr = yield this.getItemsByTitle(titleArr);
            const itemMap = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["convertToMap"])(titleArr, itemsArr, 'Title');
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => {
                    const { Title } = e;
                    let IsOwner = true;
                    if (itemMap[Title]) {
                        e.Id = itemMap[Title].Id;
                        IsOwner = itemMap[Title].IsOwner;
                    }
                    if (IsOwner) {
                        return this.save(e).then(res => ({
                            status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
                            data: e
                        }));
                    }
                    console.error(`[${this.serviceName}] can't update: '${e.Title}' is not owned.`);
                    return Promise.resolve({ status: itemStatus.CANCELED, data: e });
                });
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
    validateTitle(title, id = -1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const safeTitle = this.odataEscapeString(title);
            let filter = `Title eq '${safeTitle}'`;
            if (id !== -1) {
                filter += `and ID ne ${id}`;
            }
            filter = filter;
            const tempList = yield this.query.filter(filter).get();
            return (tempList.length === 0);
        });
    }
    save(data) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.accountService.account.IsSiteOwner) {
                data.Editor = this.accountService.account;
                data.Modified = new Date(Date.now());
            }
            return yield _super.save.call(this, data);
        });
    }
}
SPItemService.ɵfac = function SPItemService_Factory(t) { return new (t || SPItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"])); };
SPItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SPItemService, factory: SPItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SPItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }]; }, null); })();
class SPEmployeeItemService extends SPModelService {
    constructor(accountService) {
        super();
        this.accountService = accountService;
        this.userData = {};
        this.userList = [];
        this.ObjectColumn = '';
        this.ItemRecordColumn = '';
        this._ActiveUserId = -1;
        this._DataIsLoaded = false;
    }
    get ActiveUserId() {
        if (this._ActiveUserId !== -1) {
            return this._ActiveUserId;
        }
        return this.accountService.account.Id;
    }
    set ActiveUserId(value) {
        this._ActiveUserId = value;
        this.reset();
    }
    get DataIsLoaded() { return this._DataIsLoaded; }
    unsetActiveUser() {
        this.ActiveUserId = -1;
    }
    setActiveUser(ProfileId) {
        this.ActiveUserId = ProfileId;
    }
    reset() {
        this.userData = {};
        this.userList = [];
    }
    getRecord(ItemRecordId) {
        return this.userData[ItemRecordId];
    }
    getRecordList() {
        return this.userList;
    }
    getAll() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.accountService.account) {
                throw new Error(`[${this.serviceName}]: Account Not yet verified.`);
            }
            const tempList = yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.filter(`UserId eq ${this.ActiveUserId}`).top(5000));
            const transformedList = tempList.map(e => this.toObject(e));
            this.userList = transformedList;
            this.userData = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["convertToFilterMap"])(transformedList, this.ObjectColumn);
            this._DataIsLoaded = true;
            return transformedList;
        });
    }
    save(data) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!data.User) {
                data.User = this.accountService.account;
            }
            const result = yield _super.save.call(this, data);
            this.userData[result[this.ObjectColumn]] = result;
            return result;
        });
    }
    getItemsByRecordValue(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk, batch } = this;
            const batchSize = (chunk * batch);
            let returnArr = [];
            for (let idx = 0; idx < dataArr.length; idx += batchSize) {
                const batchArr = dataArr.slice(idx, (idx + batchSize));
                let queryArr = [];
                for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
                    const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
                    const userIdSet = new Set();
                    const itemRecordIdSet = new Set();
                    for (const e of chunkArr) {
                        userIdSet.add(e.User.Id);
                        itemRecordIdSet.add(e[this.ObjectColumn]);
                    }
                    const userQuery = Array.from(userIdSet).map(e => `UserId eq ${e}`)
                        .join(' or ');
                    const itemRecordQuery = Array.from(itemRecordIdSet).map(e => `${this.ItemRecordColumn} eq ${e}`)
                        .join(' or ');
                    const query = `(${userQuery}) and (${itemRecordQuery})`;
                    queryArr = [...queryArr, query];
                }
                const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
                const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                returnArr = [...returnArr, ...tempData];
            }
            return returnArr;
        });
    }
    batchSave(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const itemsArr = yield this.getItemsByRecordValue(dataArr);
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => {
                    const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i[this.ObjectColumn] === e[this.ObjectColumn]);
                    if (FoundItem) {
                        e.Id = FoundItem.Id;
                    }
                    return this.save(e).then(res => ({
                        status: e.Id !== -1 ? itemStatus.UPDATED : itemStatus.CREATED,
                        data: e
                    }));
                });
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
    delete(data) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.delete.call(this, data);
            delete this.userData[data[this.ObjectColumn]];
        });
    }
    batchDelete(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => this.delete(e));
                const tempArr = yield Promise.all(chunkArr);
            }
        });
    }
    getItemByItemRecordId(ItemRecordId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { ItemRecordColumn } = this;
            const data = yield this.query.filter(`(UserId eq ${this.ActiveUserId}) and (${ItemRecordColumn} eq ${ItemRecordId})`).get();
            if (data.length > 0) {
                return this.toObject(data[0]);
            }
            console.error(`[${this.serviceName}] can't get: Id - ${ItemRecordId} `);
            return null;
        });
    }
    getItemsByItemRecordIdArr(IdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (IdArr.length > 0) {
                const { chunk, batchIdSize, ItemRecordColumn } = this;
                const batchSize = (chunk * batchIdSize);
                let returnArr = [];
                for (let idx = 0; idx < IdArr.length; idx += batchSize) {
                    const batchArr = IdArr.slice(idx, (idx + batchSize));
                    let queryArr = [];
                    for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
                        const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
                        const chunkQuery = chunkArr.map(e => `${ItemRecordColumn} eq ${e}`)
                            .join(' or ');
                        const query = `(UserId eq ${this.ActiveUserId}) and (${chunkQuery})`;
                        queryArr = [...queryArr, query];
                    }
                    const promiseArr = queryArr.map(e => Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.filter(e).top(1000)).then(data => data.map(i => this.toObject(i))));
                    const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                    returnArr = [...returnArr, ...tempData];
                }
                return returnArr;
            }
            return [];
        });
    }
    getReport(ItemRecordIdArr = []) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.ItemRecordColumn) {
                throw new Error(`[${this.serviceName}]: ItemRecordColumn attribute not declared`);
            }
            const IdArr = ItemRecordIdArr;
            if (IdArr.length > 0) {
                const { chunk } = this;
                const batchIdSize = 1;
                const batchSize = (chunk * batchIdSize);
                let returnArr = [];
                for (let idx = 0; idx < IdArr.length; idx += batchSize) {
                    const batchArr = IdArr.slice(idx, (idx + batchSize));
                    let queryArr = [];
                    for (let batchIdx = 0; batchIdx < batchArr.length; batchIdx += batchIdSize) {
                        const chunkArr = batchArr.slice(batchIdx, (batchIdx + batchIdSize));
                        const courseQuery = chunkArr.map(e => `${this.ItemRecordColumn} eq ${e}`)
                            .join(' or ');
                        const query = `(${courseQuery})`;
                        queryArr = [...queryArr, query];
                    }
                    const promiseArr = queryArr.map(e => Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.filter(e).top(5000)).then(data => data.map(i => this.toObject(i))));
                    const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                    returnArr = [...returnArr, ...tempData];
                }
                return returnArr;
            }
            return yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_2__["getAllData"])(this.query.top(5000)).then(data => data.map(i => this.toObject(i)));
        });
    }
}
SPEmployeeItemService.ɵfac = function SPEmployeeItemService_Factory(t) { return new (t || SPEmployeeItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"])); };
SPEmployeeItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SPEmployeeItemService, factory: SPEmployeeItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SPEmployeeItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "Ew+s":
/*!*******************************************************!*\
  !*** ./src/app/core/data/model/user-profile.model.ts ***!
  \*******************************************************/
/*! exports provided: UserProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfile", function() { return UserProfile; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

class UserProfile extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.User = null;
        this.Manager = null;
        this.CountryId = -1;
        this.OrgLvl2Id = -1;
        Object.assign(this, args);
    }
    toSPData() {
        const { User, Manager, CountryId, OrgLvl2Id } = this;
        return {
            UserId: (User === null || User === void 0 ? void 0 : User.Id) || null,
            ManagerId: (Manager === null || Manager === void 0 ? void 0 : Manager.Id) || null,
            CountryId: CountryId > 0 ? CountryId : null,
            OrgLvl2Id: OrgLvl2Id > 0 ? OrgLvl2Id : null,
        };
    }
}


/***/ }),

/***/ "H12w":
/*!********************************************************!*\
  !*** ./src/app/core/data/service/user-role.service.ts ***!
  \********************************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/role.model */ "TZOz");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_service */ "ECYA");








class UserRoleService extends _service__WEBPACK_IMPORTED_MODULE_6__["SPEmployeeItemService"] {
    constructor() {
        super(...arguments);
        this.ObjectColumn = 'RoleId';
        this.ItemRecordColumn = 'RoleId';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].USER_ROLE).items
            .expand('User', 'Role')
            .select('*', 'Role/Title', 'User/Id', 'User/Title', 'User/EMail');
    }
    toObject(data) {
        const { Id, User, Role, RoleId, Modified, } = data;
        const UserObj = new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: User === null || User === void 0 ? void 0 : User.Id,
            Title: User === null || User === void 0 ? void 0 : User.Title,
            EMail: User === null || User === void 0 ? void 0 : User.EMail,
        });
        return new _model_role_model__WEBPACK_IMPORTED_MODULE_4__["UserRole"]({
            Id,
            RoleId,
            User: UserObj,
            RoleName: Role === null || Role === void 0 ? void 0 : Role.Title,
            Modified: new Date(Modified),
        });
    }
    getRolesByUserId(UserId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield Object(_util_data_util__WEBPACK_IMPORTED_MODULE_3__["getAllData"])(this.query.filter(`UserId eq ${UserId}`));
            return tempList.map(e => this.toObject(e));
        });
    }
}
UserRoleService.ɵfac = function UserRoleService_Factory(t) { return ɵUserRoleService_BaseFactory(t || UserRoleService); };
UserRoleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserRoleService, factory: UserRoleService.ɵfac, providedIn: 'root' });
const ɵUserRoleService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UserRoleService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserRoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "HEbm":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/loader/loader.component.ts ***!
  \******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 3, vars: 0, consts: [[1, "lds-ripple"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 4px solid #000;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 40px;\n    left: 40px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 80px;\n    height: 80px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsOERBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0FBQUo7O0FBR0U7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VBREo7RUFHRTtJQUNFLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmxkcy1yaXBwbGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG5cclxuICBkaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogNDBweDtcclxuICAgICAgbGVmdDogNDBweDtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HdzN":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/dialog/examination-dialog/examination-dialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExaminationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationDialogComponent", function() { return ExaminationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");




















const _c0 = ["examStepper"];
function ExaminationDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 43);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r13.ActiveItem.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function ExaminationDialogComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No description available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_11_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_div_11_div_15_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.saveExam(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Add to My Exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_11_div_19_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r23, " ");
} }
const _c1 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function ExaminationDialogComponent_div_11_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_div_11_div_19_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const item_r21 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.openCourseDescription(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExaminationDialogComponent_div_11_div_19_div_2_div_10_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_div_11_div_19_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const item_r21 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r26.launchCourse(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r21 == null ? null : item_r21.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r21.CurriculumNameArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c1, item_r21.Status === ctx_r20.CourseStatus.Completed, item_r21.Status === ctx_r20.CourseStatus.Pending, item_r21.Status === ctx_r20.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r21.Status, " ");
} }
function ExaminationDialogComponent_div_11_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_11_div_19_div_2_Template, 18, 8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.RelatedCourses);
} }
function ExaminationDialogComponent_div_11_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No related courses available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_11_div_2_Template, 1, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExaminationDialogComponent_div_11_div_3_Template, 2, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Passing Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Number of Questions : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ExaminationDialogComponent_div_11_div_15_Template, 3, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " You may review the following course/s before taking the exam: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ExaminationDialogComponent_div_11_div_19_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ExaminationDialogComponent_div_11_div_20_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.ActiveItem == null ? null : ctx_r2.ActiveItem.HasDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r2.ActiveItem == null ? null : ctx_r2.ActiveItem.HasDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.ActiveItem == null ? null : ctx_r2.ActiveItem.PassingRate, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.QuestionCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r2.ActiveItem == null ? null : ctx_r2.ActiveItem.HasRecord));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.RelatedCourses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.RelatedCourses.length === 0);
} }
function ExaminationDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_18_ng_container_4_mat_radio_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r31 == null ? null : answer_r31.AnswerText);
} }
function ExaminationDialogComponent_div_18_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_18_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.QuestionList[ctx_r32.CurrentQuestionIdx].UserAnswer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_18_ng_container_4_mat_radio_button_2_Template, 2, 2, "mat-radio-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r27.QuestionList[ctx_r27.CurrentQuestionIdx].UserAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.QuestionList[ctx_r27.CurrentQuestionIdx].Answers);
} }
function ExaminationDialogComponent_div_18_ng_container_5_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_18_ng_container_5_mat_checkbox_1_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const answer_r35 = ctx.$implicit; return answer_r35.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", answer_r35.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r35 == null ? null : answer_r35.AnswerText);
} }
function ExaminationDialogComponent_div_18_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExaminationDialogComponent_div_18_ng_container_5_mat_checkbox_1_Template, 2, 2, "mat-checkbox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r28.QuestionList[ctx_r28.CurrentQuestionIdx].Answers);
} }
function ExaminationDialogComponent_div_18_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_18_ng_container_6_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r38.QuestionList[ctx_r38.CurrentQuestionIdx].AnswerIsTrue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r29.QuestionList[ctx_r29.CurrentQuestionIdx].AnswerIsTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
} }
function ExaminationDialogComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExaminationDialogComponent_div_18_ng_container_4_Template, 3, 2, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExaminationDialogComponent_div_18_ng_container_5_Template, 2, 1, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExaminationDialogComponent_div_18_ng_container_6_Template, 6, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.QuestionList[ctx_r4.CurrentQuestionIdx] == null ? null : ctx_r4.QuestionList[ctx_r4.CurrentQuestionIdx].QuestionText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r4.QuestionList[ctx_r4.CurrentQuestionIdx].Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r4.QuestionType.SINGLE_ANSWER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r4.QuestionType.MULTIPLE_ANSWER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx_r4.QuestionType.TRUE_OR_FALSE);
} }
function ExaminationDialogComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r40.CurrentQuestionIdx = ctx_r40.CurrentQuestionIdx - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r42.CurrentQuestionIdx = ctx_r42.CurrentQuestionIdx + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.QuestionList[ctx_r7.CurrentQuestionIdx].IsAnswered());
} }
function ExaminationDialogComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r44.ExamIsSubmitted = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r8.QuestionList[ctx_r8.CurrentQuestionIdx].IsAnswered());
} }
function ExaminationDialogComponent_div_27_ng_container_4_mat_radio_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", answer_r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r52 == null ? null : answer_r52.AnswerText);
} }
function ExaminationDialogComponent_div_27_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_27_ng_container_4_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r55); const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return item_r46.UserAnswer = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_27_ng_container_4_mat_radio_button_2_Template, 2, 2, "mat-radio-button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r46.UserAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r46.Answers);
} }
function ExaminationDialogComponent_div_27_ng_container_5_mat_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-checkbox", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_27_ng_container_5_mat_checkbox_1_Template_mat_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60); const answer_r58 = ctx.$implicit; return answer_r58.IsSelected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", answer_r58.IsSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](answer_r58 == null ? null : answer_r58.AnswerText);
} }
function ExaminationDialogComponent_div_27_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExaminationDialogComponent_div_27_ng_container_5_mat_checkbox_1_Template, 2, 2, "mat-checkbox", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r46.Answers);
} }
function ExaminationDialogComponent_div_27_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-group", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExaminationDialogComponent_div_27_ng_container_6_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return item_r46.AnswerIsTrue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "True");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "False");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", item_r46.AnswerIsTrue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);
} }
function ExaminationDialogComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExaminationDialogComponent_div_27_ng_container_4_Template, 3, 2, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExaminationDialogComponent_div_27_ng_container_5_Template, 2, 1, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExaminationDialogComponent_div_27_ng_container_6_Template, 6, 3, "ng-container", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r46.QuestionText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", item_r46.Type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Single Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "Multiple Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "True or False");
} }
function ExaminationDialogComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Congratulations! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Passed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Record_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Record_r66.Score, "% ");
} }
function ExaminationDialogComponent_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Sorry, you didn't meet the passing score ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Score: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Failed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Record_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Record_r66.Score, "% ");
} }
function ExaminationDialogComponent_div_40_div_3_div_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const name_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r77, " ");
} }
function ExaminationDialogComponent_div_40_div_3_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_div_40_div_3_div_3_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const item_r75 = ctx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r78.openCourseDescription(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExaminationDialogComponent_div_40_div_3_div_3_div_2_div_10_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_div_40_div_3_div_3_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r79); const item_r75 = ctx.$implicit; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r80.launchCourse(item_r75); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r75 = ctx.$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r75 == null ? null : item_r75.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r75.CurriculumNameArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](4, _c1, item_r75.Status === ctx_r74.CourseStatus.Completed, item_r75.Status === ctx_r74.CourseStatus.Pending, item_r75.Status === ctx_r74.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r75.Status, " ");
} }
function ExaminationDialogComponent_div_40_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_40_div_3_div_3_div_2_Template, 18, 8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r72.RelatedCourses);
} }
function ExaminationDialogComponent_div_40_div_3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No related courses available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExaminationDialogComponent_div_40_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " You may review the following course/s before taking the exam: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExaminationDialogComponent_div_40_div_3_div_3_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExaminationDialogComponent_div_40_div_3_div_4_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.RelatedCourses.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.RelatedCourses.length === 0);
} }
function ExaminationDialogComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExaminationDialogComponent_div_40_div_1_Template, 13, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExaminationDialogComponent_div_40_div_2_Template, 13, 1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExaminationDialogComponent_div_40_div_3_Template, 5, 2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Record_r66 = ctx.ngIf;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", Record_r66.Status === ctx_r10.ExamStatus.PASSED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", Record_r66.Status === ctx_r10.ExamStatus.FAILED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", Record_r66.Status === ctx_r10.ExamStatus.FAILED);
} }
function ExaminationDialogComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r81 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", index_r81 + 1, " ");
} }
function ExaminationDialogComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r83 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", index_r83 + 1, " ");
} }
class ExaminationDialogComponent {
    constructor(examService, courseService, curriculumService, userCourseService, userExamService, dialog, courseDialogService, dialogRef, data) {
        this.examService = examService;
        this.courseService = courseService;
        this.curriculumService = curriculumService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.dialog = dialog;
        this.courseDialogService = courseDialogService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.QuestionType = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["QuestionType"];
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["ExamStatus"];
        this.ActiveItem = null;
        this.ExamIsLoading = true;
        this.ExamIsSubmitted = false;
        this.CurrentQuestionIdx = 0;
        this.QuestionCount = 0;
        this.QuestionList = [];
        this.RelatedCourses = [];
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
        if (this.data) {
            this.ActiveItem = this.data.item;
            this.loadData();
        }
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { ActiveItem } = this;
            const CourseIds = Array.from(ActiveItem.RelatedCoursesId);
            this.ExamIsLoading = true;
            const [RelatedCourses, RelatedCurriculum, QuestionList,] = yield Promise.all([
                this.courseService.getItemsByIdArr(CourseIds),
                this.curriculumService.getItemsByCourseIdArr(CourseIds),
                this.examService.getQuestionsAndAnswers(ActiveItem.Id),
            ]);
            console.log(QuestionList);
            this.RelatedCourses = RelatedCourses.map(e => {
                e.Record = this.userCourseService.getRecord(e.Id);
                e.CurriculumNameArr = RelatedCurriculum.filter(i => i.CoursesId.has(e.Id)).map(i => i.Title);
                return e;
            });
            this.QuestionList = QuestionList;
            this.QuestionCount = this.QuestionList.length;
            this.ExamIsLoading = false;
        });
    }
    openCourseDescription(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseDialogService.courseDescriptionDialog(item);
        });
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseDialogService.launchCourse(item);
        });
    }
    saveExam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialog.loaderDialog();
            const { Id, Record } = this.ActiveItem;
            const Request = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["UserExam"]({ ExamId: Id });
            const UpdatedData = yield this.userExamService.save(Request);
            this.ActiveItem.Record = UpdatedData;
            loaderDialog.close();
        });
    }
    submitExam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const promptDialog = this.dialog.promptDialog('Submit Exam', `Are you sure you want to submit your answers?`, 'Submit', 'Go back');
            const proceed = yield promptDialog.afterClosed().toPromise();
            if (proceed) {
                yield this.computeScore();
            }
        });
    }
    computeScore() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ExamIsSubmitted = true;
            const loadingDialog = this.dialog.loaderDialog();
            const { QuestionList, QuestionCount } = this;
            const score = QuestionList.filter(e => e.IsCorrect()).length;
            const percentageScore = Math.round((score / QuestionCount) * 10000) / 100;
            const { Id, PassingRate, Record } = this.ActiveItem;
            const Request = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["UserExam"]({
                ExamId: Id,
                PassingScore: PassingRate,
            });
            Request.Score = percentageScore;
            Request.IsTaken = true;
            Request.Attempts += 1;
            const UpdatedData = yield this.userExamService.save(Request);
            this.ActiveItem.Record = UpdatedData;
            loadingDialog.close();
            this.examStepper.next();
        });
    }
    cancelExam() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { ExamIsSubmitted, ActiveItem } = this;
            if (!ExamIsSubmitted) {
                const promptDialog = this.dialog.promptDialog(ActiveItem.Title, `Your exam will not be recorded. Proceed?`, 'Yes', 'No');
                const proceed = yield promptDialog.afterClosed().toPromise();
                if (proceed) {
                    this.dialogRef.close();
                }
            }
            else {
                this.closeDialog();
            }
        });
    }
    closeDialog() {
        this.dialogRef.close(this.ActiveItem);
    }
}
ExaminationDialogComponent.ɵfac = function ExaminationDialogComponent_Factory(t) { return new (t || ExaminationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_9__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_11__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ExaminationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExaminationDialogComponent, selectors: [["ng-component"]], viewQuery: function ExaminationDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.examStepper = _t.first);
    } }, decls: 46, vars: 14, consts: [[1, "close-btn"], [1, "material-icons", 3, "click"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["examStepper", ""], ["label", "Exam Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["class", "stepper-content", 4, "ngIf"], ["class", "stepper-action", 4, "ngIf"], ["label", "Exam Proper"], [1, "stepper-content"], ["id", "question-area"], ["id", "question-index"], ["id", "question-item", 4, "ngIf"], [1, "stepper-action"], ["class", "onecap-outline-btn accent-2", "matStepperPrevious", "", 4, "ngIf"], ["class", "onecap-outline-btn accent-2", 3, "click", 4, "ngIf"], ["class", "onecap-btn accent-2", 3, "disabled", "click", 4, "ngIf"], ["class", "onecap-btn accent-2", "matStepperNext", "", 3, "disabled", "click", 4, "ngIf"], ["label", "Review and Submit Answers"], ["id", "question-list"], ["id", "question-item", 4, "ngFor", "ngForOf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], [1, "button-wrapper"], [1, "material-icons"], [1, "onecap-btn", "accent-2", 3, "click"], ["label", "Results"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], [1, "stepper-loader"], [1, "description-container"], ["class", "content", 3, "innerHTML", 4, "ngIf"], ["id", "no-description", 4, "ngIf"], ["id", "exam-details"], ["id", "passing-score"], ["id", "number-of-questions"], ["id", "add-exam", 4, "ngIf"], ["id", "courses-related"], ["id", "label"], ["id", "course-list", 4, "ngIf"], ["id", "no-data-message", 4, "ngIf"], [1, "content", 3, "innerHTML"], ["id", "no-description"], ["id", "add-exam"], [1, "onecap-outline-btn", "primary", 3, "click"], ["id", "course-list"], ["id", "course-table", 1, "onecap-table"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "section", "details"], [1, "col-name"], [1, "onecap-icon-btn", 3, "click"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "section"], [1, "onecap-btn", "primary", 3, "click"], [1, "status-badge", 3, "ngClass"], ["id", "no-data-message"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["id", "question-item"], [1, "question-title"], [1, "answers-container", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "onecap-radio-group", 3, "ngModel", "ngModelChange"], ["class", "onecap-radio-button primary", 3, "value", 4, "ngFor", "ngForOf"], [1, "onecap-radio-button", "primary", 3, "value"], ["class", "onecap-checkbox primary", 3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "onecap-checkbox", "primary", 3, "ngModel", "ngModelChange"], [1, "onecap-outline-btn", "accent-2", 3, "click"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], ["matStepperNext", "", 1, "onecap-btn", "accent-2", 3, "disabled", "click"], ["id", "passed", "class", "result-container", 4, "ngIf"], ["id", "failed", "class", "result-container", 4, "ngIf"], ["id", "courses-related", 4, "ngIf"], ["id", "passed", 1, "result-container"], [1, "message"], [1, "score-card-container"], [1, "score-card"], [1, "label"], [1, "value"], ["id", "failed", 1, "result-container"], [1, "value", "failed-score"]], template: function ExaminationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_Template_span_click_1_listener() { return ctx.cancelExam(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ExaminationDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExaminationDialogComponent_div_11_Template, 21, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ExaminationDialogComponent_div_12_Template, 6, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-step", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ExaminationDialogComponent_div_18_Template, 7, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ExaminationDialogComponent_button_20_Template, 5, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ExaminationDialogComponent_button_21_Template, 5, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ExaminationDialogComponent_button_22_Template, 5, 1, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ExaminationDialogComponent_button_23_Template, 5, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-step", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ExaminationDialogComponent_div_27_Template, 7, 5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_Template_button_click_34_listener() { return ctx.submitExam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-step", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ExaminationDialogComponent_div_40_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExaminationDialogComponent_Template_button_click_42_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ExaminationDialogComponent_ng_template_44_Template, 1, 1, "ng-template", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ExaminationDialogComponent_ng_template_45_Template, 1, 1, "ng-template", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.ActiveItem == null ? null : ctx.ActiveItem.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("completed", !ctx.ExamIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ExamIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ExamIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.ExamIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Question ", ctx.CurrentQuestionIdx + 1, " of ", ctx.QuestionCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.QuestionCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CurrentQuestionIdx === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CurrentQuestionIdx > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CurrentQuestionIdx < ctx.QuestionCount - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CurrentQuestionIdx === ctx.QuestionCount - 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.QuestionList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ActiveItem.Record);
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperIcon"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__["MatStepperNext"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioButton"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckbox"]], styles: [".stepper-content[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.description-container[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  height: 35px;\n}\n\n#exam-details[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  align-items: center;\n  justify-content: center;\n}\n\n#exam-details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#exam-details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-lg);\n  line-height: var(--linespace-lg);\n  letter-spacing: var(--no-char-spacing);\n  background-color: #f4f4f4;\n  border-radius: 5px;\n}\n\n#exam-details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div#passing-score[_ngcontent-%COMP%] {\n  background-color: #6cc24a26;\n  color: var(--onecaplite-lightgreen);\n}\n\n#exam-details[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n#add-exam[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n#courses-related[_ngcontent-%COMP%]   #label[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: sticky;\n  padding: 20px 15px;\n  top: -1px;\n  z-index: 2;\n  background-color: var(--onecaplite-white);\n}\n\n#courses-related[_ngcontent-%COMP%]   #course-list[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n\n#courses-related[_ngcontent-%COMP%]   #course-list[_ngcontent-%COMP%]   #course-table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 3fr 2fr;\n}\n\n#courses-related[_ngcontent-%COMP%]   #course-list[_ngcontent-%COMP%]   #course-table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: max-content 1fr 1fr;\n}\n\n#courses-related[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  box-sizing: border-box;\n  background-color: rgba(217, 217, 217, 0.25);\n  border-radius: 5px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-sm);\n  color: var(--onecaplite-purple);\n}\n\n.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:first-of-type {\n  border-top: solid var(--onecaplite-darkwhite) 1px;\n}\n\n#question-area[_ngcontent-%COMP%], #question-list[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n}\n\n#question-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n\n#question-index[_ngcontent-%COMP%] {\n  color: var(--onecaplite-purple);\n  font-weight: bold;\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n  margin-bottom: 30px;\n}\n\n#question-item[_ngcontent-%COMP%] {\n  font-size: var(--font-md);\n  line-height: var(--linespace-md);\n  letter-spacing: var(--no-char-spacing);\n}\n\n#question-item[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-size: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  margin-bottom: 5px;\n}\n\n#question-item[_ngcontent-%COMP%]   .answers-container[_ngcontent-%COMP%] {\n  font-size: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  background-color: rgba(217, 217, 217, 0.25);\n  box-sizing: border-box;\n  padding: 15px;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: 1fr;\n  gap: 20px;\n}\n\n.result-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n\n.result-container[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-sizing: border-box;\n}\n\n.result-container[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%]   .score-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n\n.result-container[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%]   .score-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.result-container[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%]   .score-card[_ngcontent-%COMP%]   .value.failed-score[_ngcontent-%COMP%] {\n  color: var(--onecaplite-red);\n}\n\n.result-container#passed[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.result-container#passed[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 34px;\n}\n\n.result-container#passed[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 350px;\n  height: 117px;\n  background-color: rgba(108, 194, 74, 0.15);\n  color: var(--onecaplite-lightgreen);\n}\n\n.result-container#failed[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n}\n\n.result-container#failed[_ngcontent-%COMP%]   .score-card-container[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 75px;\n  width: 225px;\n  background-color: rgba(159, 0, 15, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9leGFtaW5hdGlvbi1kaWFsb2cvZXhhbWluYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUlFO0VBRUUsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhKOztBQUtJO0VBQ0UsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtBQU5OOztBQVFNO0VBQ0UsMkJBQUE7RUFDQSxtQ0FBQTtBQU5SOztBQVVNO0VBQ0UsaUJBQUE7QUFSUjs7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaRjs7QUFnQkU7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0FBYko7O0FBZ0JFO0VBQ0Usa0JBQUE7QUFkSjs7QUFpQk07RUFDRSw4QkFBQTtBQWZSOztBQWdCUTtFQUNFLDBDQUFBO0FBZFY7O0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSx5QkFBQTtFQUNBLCtCQUFBO0FBcEJKOztBQTBCSTtFQUNFLGlEQUFBO0FBdkJOOztBQStCQTtFQUNFLGdCQUFBO0FBNUJGOztBQStCQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBNUJGOztBQStCQTtFQUNFLCtCQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7RUFFQSxtQkFBQTtBQTlCRjs7QUFpQ0E7RUFFRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7QUEvQkY7O0FBaUNFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBRUEsa0JBQUE7QUFoQ0o7O0FBbUNFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBRUEsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFuQ0o7O0FBeUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUF0Q0Y7O0FBd0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBdENKOztBQXVDSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFyQ047O0FBdUNNO0VBQ0Usa0JBQUE7QUFyQ1I7O0FBdUNRO0VBQ0UsNEJBQUE7QUFyQ1Y7O0FBMkNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUF6Q0o7O0FBMkNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF6Q047O0FBNENJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtBQTFDTjs7QUFpREk7RUFDRSx5QkFBQTtBQS9DTjs7QUFrREk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQWhETiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvZXhhbWluYXRpb24tZGlhbG9nL2V4YW1pbmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyBFeGFtIERldGFpbHMgU2VjdGlvblxyXG4uZGVzY3JpcHRpb24tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbiNleGFtLWRldGFpbHMge1xyXG4gIG1hcmdpbi10b3AgICAgICAgIDogMjBweDtcclxuICBkaXNwbGF5ICAgICAgICAgICA6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3cgICAgOiBjb2x1bW47XHJcbiAgZ3JpZC1hdXRvLWNvbHVtbnMgOiAxZnI7XHJcblxyXG4gIGFsaWduLWl0ZW1zICAgICAgIDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudCAgIDogY2VudGVyO1xyXG5cclxuICBzZWN0aW9uIHtcclxuXHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb24gIDogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmcgICAgICAgICA6IDhweCAxNXB4O1xyXG5cclxuICAgICAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb24gIDogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtbGcpO1xyXG4gICAgICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2UtbGcpO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG5cclxuICAgICAgJiNwYXNzaW5nLXNjb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmNjMjRhMjY7XHJcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1saWdodGdyZWVuKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogMjBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiNhZGQtZXhhbSB7XHJcbiAgbWFyZ2luOiAzMHB4IDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb3Vyc2VzLXJlbGF0ZWQge1xyXG4gICNsYWJlbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb24gIDogc3RpY2t5O1xyXG4gICAgcGFkZGluZyAgIDogMjBweCAxNXB4O1xyXG4gICAgdG9wICAgICAgIDogLTFweDtcclxuICAgIHotaW5kZXggICA6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXdoaXRlKTtcclxuICB9XHJcblxyXG4gICNjb3Vyc2UtbGlzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgI2NvdXJzZS10YWJsZS5vbmVjYXAtdGFibGUge1xyXG4gICAgICAudGFibGUtcm93IHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XHJcbiAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmciAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjbm8tZGF0YS1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0ICAgICA6IDE1cHg7XHJcbiAgICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiA3NXB4O1xyXG5cclxuICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1zbSk7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtYXJlYSB7XHJcbiAgLnRhYmxlLXJvdyB7XHJcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCB2YXIoLS1vbmVjYXBsaXRlLWRhcmt3aGl0ZSkgMXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEV4YW0gUHJvcGVyIFNlY3Rpb25cclxuXHJcbiNxdWVzdGlvbi1hcmVhLCAjcXVlc3Rpb24tbGlzdCB7XHJcbiAgbWFyZ2luOiAwcHggMjBweDtcclxufVxyXG5cclxuI3F1ZXN0aW9uLWxpc3Qge1xyXG4gIGRpc3BsYXkgOiBncmlkO1xyXG4gIGdhcCAgICAgOiAyMHB4O1xyXG59XHJcblxyXG4jcXVlc3Rpb24taW5kZXgge1xyXG4gIGNvbG9yICAgICAgICAgICA6IHZhcigtLW9uZWNhcGxpdGUtcHVycGxlKTtcclxuXHJcbiAgZm9udC13ZWlnaHQgICAgIDogYm9sZDtcclxuICBmb250LXNpemUgICAgICAgOiB2YXIoLS1mb250LW1kKTtcclxuICBsaW5lLWhlaWdodCAgICAgOiB2YXIoLS1saW5lc3BhY2UtbWQpO1xyXG4gIGxldHRlci1zcGFjaW5nICA6IHZhcigtLW5vLWNoYXItc3BhY2luZyk7XHJcblxyXG4gIG1hcmdpbi1ib3R0b20gICA6IDMwcHg7XHJcbn1cclxuXHJcbiNxdWVzdGlvbi1pdGVtIHtcclxuXHJcbiAgZm9udC1zaXplICAgICAgIDogdmFyKC0tZm9udC1tZCk7XHJcbiAgbGluZS1oZWlnaHQgICAgIDogdmFyKC0tbGluZXNwYWNlLW1kKTtcclxuICBsZXR0ZXItc3BhY2luZyAgOiB2YXIoLS1uby1jaGFyLXNwYWNpbmcpO1xyXG5cclxuICAucXVlc3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplICAgICA6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodCAgIDogaW5oZXJpdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b20gOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYW5zd2Vycy1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplICAgICA6IGluaGVyaXQ7XHJcbiAgICBsaW5lLWhlaWdodCAgIDogaW5oZXJpdDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3IgIDogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4yNSk7XHJcbiAgICBib3gtc2l6aW5nICAgICAgICA6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nICAgICAgICAgICA6IDE1cHg7XHJcblxyXG4gICAgZGlzcGxheSAgICAgICAgICAgOiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3cgICAgOiByb3c7XHJcbiAgICBncmlkLWF1dG8tcm93cyAgICA6IDFmcjtcclxuICAgIGdhcCAgICAgICAgICAgICAgIDogMjBweDtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnJlc3VsdC1jb250YWluZXIge1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb24gIDogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgZ2FwICAgICAgICAgICAgIDogMzBweDtcclxuXHJcbiAgLnNjb3JlLWNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXkgICAgICAgICA6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQgOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcbiAgICBib3gtc2l6aW5nICAgICAgOiBib3JkZXItYm94O1xyXG4gICAgLnNjb3JlLWNhcmQge1xyXG4gICAgICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnMgOiAxZnIgMWZyO1xyXG4gICAgICBnYXAgICAgICAgICAgICAgICAgICAgOiAxNXB4O1xyXG5cclxuICAgICAgLnZhbHVlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICYuZmFpbGVkLXNjb3JlIHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXJlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmI3Bhc3NlZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcblxyXG4gICAgLm1lc3NhZ2Uge1xyXG4gICAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZSAgIDogMzBweDtcclxuICAgICAgbGluZS1oZWlnaHQgOiAzNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY29yZS1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICAgIDogMjRweDtcclxuICAgICAgd2lkdGggICAgICAgICAgICAgOiAzNTBweDtcclxuICAgICAgaGVpZ2h0ICAgICAgICAgICAgOiAxMTdweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvciAgOiByZ2JhKCRjb2xvcjogIzZjYzI0YSwgJGFscGhhOiAwLjE1KTtcclxuICAgICAgY29sb3IgICAgICAgICAgICAgOiB2YXIoLS1vbmVjYXBsaXRlLWxpZ2h0Z3JlZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICYjZmFpbGVkIHtcclxuXHJcbiAgICAubWVzc2FnZSB7XHJcbiAgICAgIGZvbnQtc2l6ZSA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgfVxyXG5cclxuICAgIC5zY29yZS1jYXJkLWNvbnRhaW5lciB7XHJcbiAgICAgIGZvbnQtc2l6ZSAgICAgICAgIDogMTZweDtcclxuICAgICAgaGVpZ2h0ICAgICAgICAgICAgOiA3NXB4O1xyXG4gICAgICB3aWR0aCAgICAgICAgICAgICA6IDIyNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yICA6IHJnYmEoJGNvbG9yOiAjOWYwMDBmLCAkYWxwaGE6IDAuMTUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExaminationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './examination-dialog.component.html',
                styleUrls: ['./examination-dialog.component.scss'],
            }]
    }], function () { return [{ type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_7__["CurriculumService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_9__["UserExamService"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_11__["CourseDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { examStepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['examStepper']
        }] }); })();


/***/ }),

/***/ "I09t":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/dialog/course-dialog/course-confirmation-dialog/course-confirmation-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CourseConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseConfirmationDialogComponent", function() { return CourseConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function CourseConfirmationDialogComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseConfirmationDialogComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.saveToMyCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Add to My Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseConfirmationDialogComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseConfirmationDialogComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.saveToMyCourse(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Mark as Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseConfirmationDialogComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Status: Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CourseConfirmationDialogComponent {
    constructor(dialogRef, dialogService, userCourseService, data) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.userCourseService = userCourseService;
        this.data = data;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"];
        this.item = null;
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form']);
        if (this.data) {
            const { item } = this.data;
            this.item = item;
        }
    }
    saveToMyCourse(IsComplete = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { item } = this;
            if (item) {
                const loaderDialog = this.dialogService.loaderDialog();
                const { Record } = item;
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["UserCourse"]({ CourseId: item.Id });
                if (IsComplete) {
                    activeRecord.Status = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"].Completed;
                }
                const updatedRecord = yield this.userCourseService.save(activeRecord);
                item.Record = updatedRecord;
                this.item = item;
                loaderDialog.close();
                this.closeDialog();
            }
        });
    }
    cancel() {
        this.dialogRef.close(null);
    }
    closeDialog() {
        this.dialogRef.close(this.item);
    }
}
CourseConfirmationDialogComponent.ɵfac = function CourseConfirmationDialogComponent_Factory(t) { return new (t || CourseConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_5__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CourseConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseConfirmationDialogComponent, selectors: [["ng-component"]], decls: 14, vars: 4, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [1, "content-container"], [1, "action-container"], [1, "onecap-btn", 3, "click"], ["class", "onecap-outline-btn primary", 3, "click", 4, "ngIf"], ["class", "onecap-btn completed light", 3, "click", 4, "ngIf"], ["class", "onecap-btn completed light", 4, "ngIf"], [1, "onecap-outline-btn", "primary", 3, "click"], [1, "onecap-btn", "completed", "light", 3, "click"], [1, "button-wrapper"], [1, "onecap-btn", "completed", "light"]], template: function CourseConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Content was opened in a new window. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseConfirmationDialogComponent_Template_button_click_9_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CourseConfirmationDialogComponent_button_11_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CourseConfirmationDialogComponent_button_12_Template, 5, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CourseConfirmationDialogComponent_button_13_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.Status) === ctx.CourseStatus.NotRegistered);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.Status !== ctx.CourseStatus.Completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.item.Status === ctx.CourseStatus.Completed);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 5px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  height: 100px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 25px;\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jb3Vyc2UtZGlhbG9nL2NvdXJzZS1jb25maXJtYXRpb24tZGlhbG9nL2NvdXJzZS1jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvY291cnNlLWRpYWxvZy9jb3Vyc2UtY29uZmlybWF0aW9uLWRpYWxvZy9jb3Vyc2UtY29uZmlybWF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctYm9keSB7XHJcbiAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG4gIGdhcCAgICAgICAgICAgOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5ICAgICAgIDogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGdhcCAgICAgICAgICAgOiAyNXB4O1xyXG4gIGp1c3RpZnktc2VsZiAgOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './course-confirmation-dialog.component.html',
                styleUrls: ['./course-confirmation-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_5__["UserCourseService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "KYOD":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/dialog/confirm-delete-dialog/confirm-delete-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfirmDeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteDialogComponent", function() { return ConfirmDeleteDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ConfirmDeleteDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
ConfirmDeleteDialogComponent.ɵfac = function ConfirmDeleteDialogComponent_Factory(t) { return new (t || ConfirmDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmDeleteDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDeleteDialogComponent, selectors: [["ng-component"]], decls: 15, vars: 1, consts: [[1, "dialog-body"], [1, "onecap-lbl", "error"], [1, "item-name"], [1, "dialog-action"], [1, "onecap-outline-btn", "accent-2", 3, "click"], [1, "onecap-btn", "error", 3, "click"]], template: function ConfirmDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Are you sure you want to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This action cannot be undone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_button_click_11_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDeleteDialogComponent_Template_button_click_13_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.itemName, " ? ");
    } }, styles: ["[_nghost-%COMP%] {\n  width: 300px;\n  min-height: 125px;\n  display: grid;\n  grid-template-rows: 1fr max-content;\n  gap: 5px;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  grid-auto-flow: column;\n  gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cvY29uZmlybS1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9nL2NvbmZpcm0tZGVsZXRlLWRpYWxvZy9jb25maXJtLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEyNXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgbWF4LWNvbnRlbnQ7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctYm9keSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctYWN0aW9uIHtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGdhcDogMTVweFxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDeleteDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './confirm-delete-dialog.component.html',
                styleUrls: ['./confirm-delete-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Ka/f":
/*!*******************************************!*\
  !*** ./src/app/core/data/model/_model.ts ***!
  \*******************************************/
/*! exports provided: Person, SPModel, SPItem, SPEmployeeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPModel", function() { return SPModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPItem", function() { return SPItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEmployeeItem", function() { return SPEmployeeItem; });
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _util_date_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/date.util */ "tnDu");


class Person {
    constructor(args) {
        this.Id = -1;
        this.Title = '';
        this.EMail = '';
        this.LoginName = '';
        Object.assign(this, args);
    }
}
class SPModel {
    constructor() {
        this.Id = -1;
        this.Title = '';
        this._Modified = null;
        this._DateModified = '';
        this._DateModifiedExport = '';
    }
    get Modified() { return this._Modified; }
    set Modified(value) {
        this._Modified = value;
        if (value) {
            this._DateModified = Object(_util_date_util__WEBPACK_IMPORTED_MODULE_1__["dateToDateString"])(value);
            this._DateModifiedExport = Object(_util_date_util__WEBPACK_IMPORTED_MODULE_1__["dateToExportDateString"])(value);
        }
    }
    get DateModified() { return this._DateModified; }
    get DateModifiedExport() { return this._DateModifiedExport; }
    toSPData() {
        throw new Error(`toSPData() is not implemented!`);
    }
}
class SPItem extends SPModel {
    constructor() {
        super(...arguments);
        this._Description = '';
        this._RawDescription = '';
        this._HasDescription = false;
        this.Editor = null;
        this.Owners = [];
        this.IsOwner = false;
    }
    get Description() { return this._Description; }
    set Description(value) {
        this._Description = value;
        this._RawDescription = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__["getHTMLText"])(value);
        this._HasDescription = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__["getDescriptionCount"])(value) > 0;
    }
    get RawDescription() { return this._RawDescription; }
    get HasDescription() { return this._HasDescription; }
}
class SPEmployeeItem extends SPModel {
    constructor() {
        super(...arguments);
        this.User = null;
    }
}


/***/ }),

/***/ "LFci":
/*!******************************************************!*\
  !*** ./src/app/core/data/service/account.service.ts ***!
  \******************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_profiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/profiles */ "eKJE");
/* harmony import */ var _pnp_sp_site_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/site-users */ "vX5r");
/* harmony import */ var _pnp_sp_site_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/site-groups */ "6l60");
/* harmony import */ var _model_account_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/account.model */ "uwMn");









class AccountService {
    constructor() {
        this.accountIsLoaded = false;
        this.account = null;
    }
    initializeProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentUser = _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.currentUser;
            const [currentAccount, currentGroups,] = yield Promise.all([
                currentUser(),
                currentUser.groups(),
            ]);
            const { Id, Title, Email, LoginName, IsSiteAdmin } = currentAccount;
            this.account = new _model_account_model__WEBPACK_IMPORTED_MODULE_7__["Account"]({
                Id,
                Title,
                LoginName,
                IsSiteAdmin,
                EMail: Email,
                Groups: currentGroups.map(e => e.Title)
            });
            this.accountIsLoaded = true;
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "OLgZ":
/*!***********************************************************!*\
  !*** ./src/app/core/data/service/user-profile.service.ts ***!
  \***********************************************************/
/*! exports provided: UserProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileService", function() { return UserProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/user-profile.model */ "Ew+s");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_service */ "ECYA");
/* harmony import */ var _pnp_sp_site_groups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pnp/sp/site-groups */ "6l60");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");









class UserProfileService extends _service__WEBPACK_IMPORTED_MODULE_5__["SPModelService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'User Profile Service';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_2__["SPList"].USER).items
            .expand('User', 'Manager').select('*', 'User/Id', 'User/Name', 'User/Title', 'User/EMail', 'Manager/Id', 'Manager/Title', 'Manager/EMail')
            .orderBy('User/Title');
    }
    getItemByUserId(UserId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield this.query.filter(`UserId eq ${UserId}`).get();
            if (tempList.length > 0) {
                return this.toObject(tempList[0]);
            }
            return null;
        });
    }
    toObject(data) {
        const { Id, User, Manager, CountryId, OrgLvl2Id, } = data;
        const UserObj = User ? new _model_model__WEBPACK_IMPORTED_MODULE_4__["Person"]({
            Id: User.Id,
            Title: User.Title,
            EMail: User.EMail,
            LoginName: User.Name,
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_4__["Person"]({});
        const ManagerObj = Manager ? new _model_model__WEBPACK_IMPORTED_MODULE_4__["Person"]({
            Id: Manager.Id,
            Title: Manager.Title,
            EMail: Manager.EMail,
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_4__["Person"]({});
        return new _model_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfile"]({
            Id,
            User: UserObj,
            Manager: ManagerObj,
            CountryId,
            OrgLvl2Id,
        });
    }
    validateUserExistence(email, id = -1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const safeEmail = this.odataEscapeString(email);
            let filter = `User/EMail eq '${safeEmail}'`;
            if (id !== -1) {
                filter += `and ID ne ${id}`;
            }
            const result = yield this.query.filter(filter).get();
            return result.length === 0;
        });
    }
    save(data) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.Id === -1) {
                yield this.sp.web.siteGroups.getByName(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["GROUP"].Employee).users.add(data.User.LoginName);
            }
            return yield _super.save.call(this, data);
        });
    }
    batchSave(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const userIdArr = dataArr.map(e => e.User.Id);
            const itemsArr = yield this.getItemsByUserIdArr(userIdArr);
            const itemMap = itemsArr.reduce((returnValue, element) => {
                var _a;
                return (Object.assign(Object.assign({}, returnValue), { [((_a = element === null || element === void 0 ? void 0 : element.User) === null || _a === void 0 ? void 0 : _a.Id) || -1]: element }));
            }, {});
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => {
                    const { User } = e;
                    if (!itemMap[User.Id]) {
                        return this.save(e).then(res => ({
                            status: e.Id !== -1 ? _service__WEBPACK_IMPORTED_MODULE_5__["itemStatus"].UPDATED : _service__WEBPACK_IMPORTED_MODULE_5__["itemStatus"].CREATED,
                            data: e
                        }));
                    }
                    console.error(`[${this.serviceName}] User '${User.Title}' already exist.`);
                    return Promise.resolve({ status: _service__WEBPACK_IMPORTED_MODULE_5__["itemStatus"].CANCELED, data: e });
                });
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
    delete(data) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sp.web.siteGroups.getByName(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["GROUP"].Employee).users.removeByLoginName(data.User.LoginName);
            return yield _super.delete.call(this, data);
        });
    }
    getItemsByUserIdArr(UserIdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk, batch } = this;
            const batchSize = (chunk * batch);
            let returnArr = [];
            for (let idx = 0; idx < UserIdArr.length; idx += batchSize) {
                const batchArr = UserIdArr.slice(idx, (idx + batchSize));
                let queryArr = [];
                for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
                    const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
                    let query = '';
                    for (const [itemIdx, UserId] of chunkArr.entries()) {
                        query += `UserId eq ${UserId}`;
                        if (itemIdx < chunkArr.length - 1) {
                            query += ' or ';
                        }
                    }
                    queryArr = [...queryArr, query];
                }
                const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
                const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                returnArr = [...returnArr, ...tempData];
            }
            return returnArr;
        });
    }
}
UserProfileService.ɵfac = function UserProfileService_Factory(t) { return ɵUserProfileService_BaseFactory(t || UserProfileService); };
UserProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserProfileService, factory: UserProfileService.ɵfac, providedIn: 'root' });
const ɵUserProfileService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UserProfileService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/loader/loader.component */ "HEbm");
/* harmony import */ var _ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/nav-bar/nav-bar.component */ "0MLi");
/* harmony import */ var _ui_nav_bar_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/nav-bar/nav-list-item/nav-list-item.component */ "0HMM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _dialog_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/alert-dialog/alert-dialog.component */ "gGB7");
/* harmony import */ var _dialog_prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dialog/prompt-dialog/prompt-dialog.component */ "ajl6");
/* harmony import */ var _dialog_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog/confirm-delete-dialog/confirm-delete-dialog.component */ "KYOD");
/* harmony import */ var _dialog_loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dialog/loader-dialog/loader-dialog.component */ "tss9");
/* harmony import */ var _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/star-rating/star-rating.component */ "abAR");
/* harmony import */ var _dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog/learning-maps-dialog/learning-maps-dialog.component */ "BVpE");
/* harmony import */ var _dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog/examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var _dialog_course_dialog_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dialog/course-dialog/course-confirmation-dialog/course-confirmation-dialog.component */ "I09t");
/* harmony import */ var _dialog_course_dialog_course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dialog/course-dialog/course-description-dialog/course-description-dialog.component */ "q/ev");
/* harmony import */ var _dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dialog/course-dialog/course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var _dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialog/curriculum-description-dialog/curriculum-description-dialog.component */ "UGwT");
/* harmony import */ var _dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialog/report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var _dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog/user-feedback-dialog/user-feedback-dialog.component */ "cDpi");
/* harmony import */ var _ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ui/progress-bar/progress-bar.component */ "aPzQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _dialog_edit_profile_dialog_edit_profile_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dialog/edit-profile-dialog/edit-profile-dialog.component */ "y0HF");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");




































const UIComponents = [
    _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
    _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_22__["StarRatingComponent"],
    _ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
    _ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_31__["ProgressBarComponent"],
];
const DialogComponents = [
    _dialog_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AlertDialogComponent"],
    _dialog_prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_19__["PromptDialogComponent"],
    _dialog_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDeleteDialogComponent"],
    _dialog_loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoaderDialogComponent"],
    _dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ReportProblemDialogComponent"],
    _dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserFeedbackDialogComponent"],
    _dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_23__["LearningMapsDialogComponent"],
    _dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_28__["CurriculumDescriptionDialogComponent"],
    _dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ExaminationDialogComponent"],
    _dialog_course_dialog_course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_26__["CourseDescriptionDialogComponent"],
    _dialog_course_dialog_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_25__["CourseConfirmationDialogComponent"],
    _dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CourseRateDialogComponent"],
];
const AppModules = [
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"],
];
const matDialogConfig = {
    maxWidth: '100vw',
    hasBackdrop: true,
    disableClose: true,
    data: null,
};
const matSnackBarConfig = {
    duration: 1500,
    panelClass: ['onecap-snackbar'],
};
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: matDialogConfig },
        { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: matSnackBarConfig }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            ...AppModules,
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
        _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_22__["StarRatingComponent"],
        _ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_31__["ProgressBarComponent"], _dialog_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AlertDialogComponent"],
        _dialog_prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_19__["PromptDialogComponent"],
        _dialog_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDeleteDialogComponent"],
        _dialog_loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoaderDialogComponent"],
        _dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ReportProblemDialogComponent"],
        _dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserFeedbackDialogComponent"],
        _dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_23__["LearningMapsDialogComponent"],
        _dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_28__["CurriculumDescriptionDialogComponent"],
        _dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ExaminationDialogComponent"],
        _dialog_course_dialog_course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_26__["CourseDescriptionDialogComponent"],
        _dialog_course_dialog_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_25__["CourseConfirmationDialogComponent"],
        _dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CourseRateDialogComponent"], _ui_nav_bar_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_4__["NavListItemComponent"],
        _dialog_edit_profile_dialog_edit_profile_dialog_component__WEBPACK_IMPORTED_MODULE_33__["EditProfileDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"]], exports: [_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"],
        _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_22__["StarRatingComponent"],
        _ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavBarComponent"],
        _ui_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_31__["ProgressBarComponent"], _dialog_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_18__["AlertDialogComponent"],
        _dialog_prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_19__["PromptDialogComponent"],
        _dialog_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmDeleteDialogComponent"],
        _dialog_loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_21__["LoaderDialogComponent"],
        _dialog_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_29__["ReportProblemDialogComponent"],
        _dialog_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_30__["UserFeedbackDialogComponent"],
        _dialog_learning_maps_dialog_learning_maps_dialog_component__WEBPACK_IMPORTED_MODULE_23__["LearningMapsDialogComponent"],
        _dialog_curriculum_description_dialog_curriculum_description_dialog_component__WEBPACK_IMPORTED_MODULE_28__["CurriculumDescriptionDialogComponent"],
        _dialog_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ExaminationDialogComponent"],
        _dialog_course_dialog_course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_26__["CourseDescriptionDialogComponent"],
        _dialog_course_dialog_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_25__["CourseConfirmationDialogComponent"],
        _dialog_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_27__["CourseRateDialogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_17__["CKEditorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_32__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    ...UIComponents,
                    ...DialogComponents,
                    _ui_nav_bar_nav_list_item_nav_list_item_component__WEBPACK_IMPORTED_MODULE_4__["NavListItemComponent"],
                    _dialog_edit_profile_dialog_edit_profile_dialog_component__WEBPACK_IMPORTED_MODULE_33__["EditProfileDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                    ...AppModules,
                ],
                exports: [
                    ...UIComponents,
                    ...DialogComponents,
                    ...AppModules,
                ],
                providers: [
                    { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: matDialogConfig },
                    { provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MAT_SNACK_BAR_DEFAULT_OPTIONS"], useValue: matSnackBarConfig }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QeiP":
/*!**************************************!*\
  !*** ./src/constant/app.constant.ts ***!
  \**************************************/
/*! exports provided: ContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
var ContentType;
(function (ContentType) {
    ContentType["ALL_TYPE"] = "All Types";
    ContentType["LEARNING_MAPS"] = "Learning Maps";
    ContentType["CURRICULA"] = "Curricula";
    ContentType["COURSES"] = "Courses";
    ContentType["EXAMS"] = "Exams";
})(ContentType || (ContentType = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _shared_ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/ui/nav-bar/nav-bar.component */ "0MLi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Initializing Profile. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-nav-bar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(accountService, titleService) {
        this.accountService = accountService;
        this.titleService = titleService;
        this.PageIsLoading = true;
    }
    ngOnInit() {
        this.titleService.setTitle(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].AppTitle);
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.PageIsLoading = true;
            yield this.accountService.initializeProfile();
            this.PageIsLoading = false;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [["class", "loader-page", 4, "ngIf"], ["class", "app-page", 4, "ngIf"], [1, "loader-page"], [1, "loader-wrapper"], [1, "loader-label"], [1, "app-page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 5, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.PageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.PageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__["LoaderComponent"], _shared_ui_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]], styles: [".loader-page[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n}\n.loader-page[_ngcontent-%COMP%]   .loader-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n.loader-page[_ngcontent-%COMP%]   .loader-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.app-page[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUU7RUFDRSxlQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXBhZ2Uge1xyXG4gIGhlaWdodCAgOiAxMDAlO1xyXG4gIHdpZHRoICAgOiAxMDAlO1xyXG4gIGRpc3BsYXkgICAgICAgOiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zICAgOiBjZW50ZXI7XHJcbiAganVzdGlmeS1pdGVtcyA6IGNlbnRlcjtcclxuICAubG9hZGVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zIDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXMgICA6IGNlbnRlcjtcclxuICB9XHJcbiAgLmxvYWRlci1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwLXBhZ2Uge1xyXG4gIGhlaWdodCAgOiAxMDAlO1xyXG4gIHdpZHRoICAgOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_data_service_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }]; }, null); })();


/***/ }),

/***/ "TXAO":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dialog/course-dialog/course-dialog.service.ts ***!
  \**********************************************************************/
/*! exports provided: CourseDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDialogService", function() { return CourseDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var _course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-confirmation-dialog/course-confirmation-dialog.component */ "I09t");
/* harmony import */ var _course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-description-dialog/course-description-dialog.component */ "q/ev");
/* harmony import */ var _course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");









class CourseDialogService {
    constructor(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let updatedItem = null;
            if (!item.IsClassroom) {
                window.open(item.MaterialLink, '_blank');
                updatedItem = yield this.courseConfirmationDialog(item).afterClosed().toPromise();
            }
            else {
                updatedItem = yield this.courseDescriptionDialog(item).afterClosed().toPromise();
            }
            if (updatedItem) {
                const { Record } = updatedItem;
                if (Record) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_2__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackBar.open(message);
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_2__["CourseStatus"].Completed) {
                        const isRated = yield this.dialog.open(_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
                        if (isRated) {
                            this.snackBar.open('Rated Successfully!');
                        }
                    }
                }
            }
            return updatedItem;
        });
    }
    courseDescriptionDialog(item) {
        return this.dialog.open(_course_description_dialog_course_description_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CourseDescriptionDialogComponent"], { data: { item } });
    }
    courseConfirmationDialog(item) {
        return this.dialog.open(_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CourseConfirmationDialogComponent"], { data: { item } });
    }
}
CourseDialogService.ɵfac = function CourseDialogService_Factory(t) { return new (t || CourseDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"])); };
CourseDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CourseDialogService, factory: CourseDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "TZOz":
/*!***********************************************!*\
  !*** ./src/app/core/data/model/role.model.ts ***!
  \***********************************************/
/*! exports provided: UserRole, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_model */ "Ka/f");


class UserRole extends _model__WEBPACK_IMPORTED_MODULE_1__["SPEmployeeItem"] {
    constructor(args) {
        super();
        this.RoleId = -1;
        this.RoleName = '';
        Object.assign(this, args);
    }
    toSPData() {
        const { User, RoleId } = this;
        return {
            RoleId,
            UserId: User.Id,
        };
    }
}
class Role extends _model__WEBPACK_IMPORTED_MODULE_1__["SPItem"] {
    constructor(args) {
        super();
        // Data Fields
        this.SubCategoryId = -1;
        this.CurriculaId = new Set();
        this.CoursesId = new Set();
        this.ExamsId = new Set();
        // Utility Fields
        this.CategoryName = '';
        this.SubCategoryName = '';
        this._TotalDuration = '';
        this._TotalDurationString = 'No duration';
        this._DurationList = [];
        this._Record = null;
        this._IsCurrentRole = false;
        Object.assign(this, args);
    }
    get TotalDuration() { return this._TotalDuration; }
    get TotalDurationString() { return this._TotalDurationString; }
    get DurationList() { return this._DurationList; }
    set DurationList(value) {
        this._DurationList = value.filter(e => e);
        this._TotalDuration = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__["totalDurationList"])(this._DurationList);
        if (this._TotalDuration) {
            try {
                const [hrs, min] = this._TotalDuration.split(':').map(e => parseInt(e, 10));
                this._TotalDurationString = `${hrs} hours ${min} mins`;
            }
            catch (_a) {
                console.error(`Invalid Course Duration! [Name: ${this.Title}]`);
                this._TotalDurationString = 'No duration';
            }
        }
        else {
            this._TotalDurationString = 'No duration';
        }
    }
    get Record() { return this._Record; }
    set Record(value) {
        this._Record = value;
        this._IsCurrentRole = value ? true : false;
    }
    get IsCurrentRole() { return this._IsCurrentRole; }
    set IsCurrentRole(value) {
        this._IsCurrentRole = value;
    }
    toSPData() {
        const { Title, Description, SubCategoryId, CurriculaId, CoursesId, ExamsId, Owners, Editor, Modified, } = this;
        return {
            Title,
            Description,
            RoleSubCategoryId: SubCategoryId,
            CurriculaId: {
                results: Array.from(CurriculaId)
            },
            CoursesId: {
                results: Array.from(CoursesId)
            },
            ExamsId: {
                results: Array.from(ExamsId)
            },
            OwnersId: {
                results: Owners.map(e => e.Id)
            },
            OwnerModifiedById: Editor ? Editor.Id : undefined,
            OwnerModified: Modified,
        };
    }
}


/***/ }),

/***/ "UGwT":
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/dialog/curriculum-description-dialog/curriculum-description-dialog.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: CurriculumDescriptionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumDescriptionDialogComponent", function() { return CurriculumDescriptionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/exam.model */ "dKUA");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_constant_app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constant/app.constant */ "QeiP");
/* harmony import */ var _course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../course-dialog/course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var _examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../examination-dialog/examination-dialog.component */ "HdzN");
/* harmony import */ var _report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../report-problem-dialog/report-problem-dialog.component */ "kFYn");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/exam.service */ "7OpA");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/user-exam.service */ "dpZn");
/* harmony import */ var _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../course-dialog/course-dialog.service */ "TXAO");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/loader/loader.component */ "HEbm");






















function CurriculumDescriptionDialogComponent_ng_container_6_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.ActiveItem.Description, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No description available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r14.openCourseDescription(course_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "info_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r16.launchCourse(course_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-menu", null, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r17.moreInfoCourse(course_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "More information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r18.addToMyCourse(course_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r19.markCourseAsComplete(course_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r20.copyToClipBoard(course_r12.Title, ctx_r20.ContentType.COURSES); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const course_r12 = ctx.ngIf; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r21.reportProblem(course_r12, "Course"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Contact Us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const course_r12 = ctx.ngIf;
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25);
    const idx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idx_r10 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r12 == null ? null : course_r12.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r12 == null ? null : course_r12.DurationString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](10, _c0, course_r12.Status === ctx_r11.CourseStatus.Completed, course_r12.Status === ctx_r11.CourseStatus.Pending, course_r12.Status === ctx_r11.CourseStatus.NotRegistered));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r12.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", course_r12.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r12.HasRecord ? "Added" : "Add to My Courses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", course_r12.Status === ctx_r11.CourseStatus.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", course_r12.Status === ctx_r11.CourseStatus.Completed ? "Completed" : "Mark as Complete", " ");
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_ng_container_1_Template, 36, 14, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.CourseMap[id_r9]);
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurriculumDescriptionDialogComponent_ng_container_6_div_13_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.CoursesIdArr);
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No course assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1, a2) { return { "completed": a0, "failed": a1, "not-started": a2 }; };
function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const exam_r27 = ctx.ngIf; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r29.launchExam(exam_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-menu", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const exam_r27 = ctx.ngIf; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r31.addToMyExam(exam_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const exam_r27 = ctx.ngIf; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r32.copyToClipBoard(exam_r27.Title, ctx_r32.ContentType.EXAMS); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Copy Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const exam_r27 = ctx.ngIf; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r33.reportProblem(exam_r27, "Exam"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const exam_r27 = ctx.ngIf;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    const idx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", idx_r25 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exam_r27 == null ? null : exam_r27.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](7, _c1, exam_r27.Status === ctx_r26.ExamStatus.PASSED, exam_r27.Status === ctx_r26.ExamStatus.FAILED, exam_r27.Status === ctx_r26.ExamStatus.NOT_YET_TAKEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", exam_r27.Status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", exam_r27.HasRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exam_r27.HasRecord ? "Added" : "Add to My Exams");
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_ng_container_1_Template, 27, 11, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r23.ExamMap[id_r24]);
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurriculumDescriptionDialogComponent_ng_container_6_div_18_div_2_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.ExamsIdArr);
} }
function CurriculumDescriptionDialogComponent_ng_container_6_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No exams assigned ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CurriculumDescriptionDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CurriculumDescriptionDialogComponent_ng_container_6_div_5_Template, 1, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CurriculumDescriptionDialogComponent_ng_container_6_div_6_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CurriculumDescriptionDialogComponent_ng_container_6_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r35.addCoursesAndExams(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add All to My Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CurriculumDescriptionDialogComponent_ng_container_6_div_13_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CurriculumDescriptionDialogComponent_ng_container_6_div_14_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Exams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CurriculumDescriptionDialogComponent_ng_container_6_div_18_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CurriculumDescriptionDialogComponent_ng_container_6_div_19_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Duration: ", ctx_r0.ActiveItem.TotalDurationString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ActiveItem == null ? null : ctx_r0.ActiveItem.HasDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r0.ActiveItem == null ? null : ctx_r0.ActiveItem.HasDescription));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.CoursesIdArr.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.CoursesIdArr.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ExamsIdArr.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.ExamsIdArr.length === 0);
} }
function CurriculumDescriptionDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CurriculumDescriptionDialogComponent {
    constructor(courseService, examService, userCourseService, userExamService, courseDialogService, dialogService, dialogRef, snackbar, data) {
        this.courseService = courseService;
        this.examService = examService;
        this.userCourseService = userCourseService;
        this.userExamService = userExamService;
        this.courseDialogService = courseDialogService;
        this.dialogService = dialogService;
        this.dialogRef = dialogRef;
        this.snackbar = snackbar;
        this.data = data;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"];
        this.ExamStatus = src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["ExamStatus"];
        this.ContentType = src_constant_app_constant__WEBPACK_IMPORTED_MODULE_6__["ContentType"];
        this.ActiveItem = null;
        this.CurriculumIsLoading = true;
        this.CoursesIdArr = [];
        this.ExamsIdArr = [];
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'curriculum-description']);
        if (this.data) {
            const { item } = this.data;
            this.ActiveItem = item;
            this.loadData();
        }
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.CurriculumIsLoading = true;
            if (this.ActiveItem) {
                if (!this.userCourseService.DataIsLoaded &&
                    !this.userExamService.DataIsLoaded) {
                    yield Promise.all([
                        this.userCourseService.getAll(),
                        this.userExamService.getAll(),
                    ]);
                }
                const { CoursesId, ExamsId } = this.ActiveItem;
                this.CoursesIdArr = Array.from(CoursesId);
                this.ExamsIdArr = Array.from(ExamsId);
                const [CourseArr, ExamsArr,] = yield Promise.all([
                    this.courseService.getItemsByIdArr(this.CoursesIdArr),
                    this.examService.getItemsByIdArr(this.ExamsIdArr),
                ]);
                const recordedCourses = CourseArr.map(e => {
                    e.Record = this.userCourseService.getRecord(e.Id);
                    return e;
                });
                const recordedExams = ExamsArr.map(e => {
                    e.Record = this.userExamService.getRecord(e.Id);
                    return e;
                });
                this.CourseMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__["convertToFilterMap"])(recordedCourses, 'Id');
                this.ExamMap = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__["convertToFilterMap"])(recordedExams, 'Id');
                this.ActiveItem.DurationList = this.CoursesIdArr.map(e => this.CourseMap[e].Duration);
            }
            this.CurriculumIsLoading = false;
        });
    }
    copyToClipBoard(Title, contentType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__["copyToClipBoard"])(Title, contentType);
            this.snackbar.open('Link Copied!');
        });
    }
    reportProblem(item, itemType) {
        this.dialogService.open(_report_problem_dialog_report_problem_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ReportProblemDialogComponent"], {
            data: { item, itemType }
        });
    }
    // #region Courses
    moreInfoCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const updatedItem = yield this.courseDialogService.courseDescriptionDialog(item).afterClosed().toPromise();
            if (updatedItem) {
                const { Record } = updatedItem;
                if (Record) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackbar.open(message);
                }
            }
        });
    }
    launchCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.courseDialogService.launchCourse(item);
        });
    }
    addToMyCourse(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialogService.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["UserCourse"]({ CourseId: item.Id });
            const updatedRecord = yield this.userCourseService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackbar.open('Added to My Courses!');
        });
    }
    markCourseAsComplete(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (item) {
                const loaderDialog = this.dialogService.loaderDialog();
                const { Record } = item;
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["UserCourse"]({ CourseId: item.Id });
                activeRecord.Status = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["CourseStatus"].Completed;
                const updatedRecord = yield this.userCourseService.save(activeRecord);
                item.Record = updatedRecord;
                loaderDialog.close();
                this.snackbar.open(`Course completed!`);
                const isRated = yield this.dialogService.open(_course_dialog_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
                if (isRated) {
                    this.snackbar.open('Rated Successfully!');
                }
            }
        });
    }
    openCourseDescription(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.courseDialogService.courseDescriptionDialog(item);
        });
    }
    // #endregion Courses
    // #region Exams
    addToMyExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialogService.loaderDialog();
            const { Record } = item;
            const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["UserExam"]({ ExamId: item.Id });
            const updatedRecord = yield this.userExamService.save(activeRecord);
            item.Record = updatedRecord;
            loaderDialog.close();
            this.snackbar.open('Added to My Exams!');
        });
    }
    launchExam(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogService.open(_examination_dialog_examination_dialog_component__WEBPACK_IMPORTED_MODULE_8__["ExaminationDialogComponent"], {
                data: { item }
            });
        });
    }
    // #endregion Exams
    addCoursesAndExams() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loaderDialog = this.dialogService.loaderDialog();
            const { CoursesIdArr, ExamsIdArr } = this;
            const CoursePromises = CoursesIdArr.map((e) => {
                const { Record } = this.CourseMap[e];
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_3__["UserCourse"]({ CourseId: e });
                if (activeRecord.Id === -1) {
                    return this.userCourseService.save(activeRecord)
                        .then((res) => this.CourseMap[e].Record = res)
                        .then(() => true);
                }
                return Promise.resolve(true);
            });
            const ExamPromises = ExamsIdArr.map((e) => {
                const { Record } = this.ExamMap[e];
                const activeRecord = Record || new src_app_core_data_model_exam_model__WEBPACK_IMPORTED_MODULE_4__["UserExam"]({ ExamId: e });
                if (activeRecord.Id === -1) {
                    return this.userExamService.save(activeRecord)
                        .then((res) => this.ExamMap[e].Record = res)
                        .then(() => true);
                }
                return Promise.resolve(true);
            });
            yield Promise.all([
                ...CoursePromises,
                ...ExamPromises
            ]);
            loaderDialog.close();
            this.snackbar.open('Added to My Courses and My Exams!');
        });
    }
}
CurriculumDescriptionDialogComponent.ɵfac = function CurriculumDescriptionDialogComponent_Factory(t) { return new (t || CurriculumDescriptionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_10__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_11__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_13__["UserExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__["CourseDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CurriculumDescriptionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CurriculumDescriptionDialogComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [4, "ngIf"], ["class", "dialog-loader", 4, "ngIf"], [1, "duration"], [1, "onecap-lbl", "primary"], [1, "description-container"], ["class", "content", 3, "innerHTML", 4, "ngIf"], ["id", "no-description", 4, "ngIf"], [1, "button-section"], [1, "onecap-outline-btn", "primary", 3, "click"], ["id", "course-section"], ["id", "header"], ["id", "list", 4, "ngIf"], ["id", "no-data-message", 4, "ngIf"], ["id", "exam-section"], [1, "content", 3, "innerHTML"], ["id", "no-description"], ["id", "list"], ["id", "table", 1, "onecap-table"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "section", "buttons"], [1, "col-name"], [1, "onecap-icon-btn", 3, "click"], [1, "section", "details"], [1, "col-name", "action"], [1, "onecap-btn", "primary", 3, "click"], [1, "col-name", "status"], [1, "status-badge", 3, "ngClass"], [1, "col-name", "more"], ["id", "more-info", 1, "onecap-icon-btn", 3, "matMenuTriggerFor"], ["courseMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "click"], ["id", "no-data-message"], ["examMenu", "matMenu"], [1, "dialog-loader"]], template: function CurriculumDescriptionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CurriculumDescriptionDialogComponent_ng_container_6_Template, 20, 7, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CurriculumDescriptionDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.ActiveItem == null ? null : ctx.ActiveItem.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.CurriculumIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CurriculumIsLoading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuItem"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]], styles: [".dialog-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.dialog-loader[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  align-content: center;\n  justify-content: center;\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 30px;\n}\n\n.button-section[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n#course-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #header[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: sticky;\n  padding: 20px 0px;\n  top: -1px;\n  z-index: 2;\n  background-color: var(--onecaplite-white);\n  font-weight: bold;\n}\n\n#course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  border-top: 1px solid #d9d9d9;\n  grid-template-columns: 65px 1fr;\n  gap: 10px;\n}\n\n#course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n\n#course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.buttons[_ngcontent-%COMP%] {\n  grid-template-columns: 30px 30px;\n}\n\n#course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.onecap-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 2.5fr 1fr 130px 120px 30px;\n}\n\n#course-section[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%], #exam-section[_ngcontent-%COMP%]   #no-data-message[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  box-sizing: border-box;\n  background-color: rgba(217, 217, 217, 0.25);\n  border-radius: 5px;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: var(--font-sm);\n  color: var(--onecaplite-purple);\n}\n\n#exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 120px 120px 30px;\n}\n\n@media only screen and (max-width: 949px) {\n  #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-flow: row;\n    grid-auto-rows: max-content;\n  }\n  #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    order: 2;\n    justify-content: center;\n  }\n  #course-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    order: 1;\n  }\n\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-flow: row;\n    grid-auto-rows: max-content;\n  }\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n    order: 2;\n    justify-content: center;\n  }\n  #exam-section[_ngcontent-%COMP%]   #list[_ngcontent-%COMP%]   #table.table-area[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .section.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jdXJyaWN1bHVtLWRlc2NyaXB0aW9uLWRpYWxvZy9jdXJyaWN1bHVtLWRlc2NyaXB0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFJRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtBQURKOztBQU9NO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUFMUjs7QUFNUTtFQUFXLFlBQUE7QUFIbkI7O0FBSVE7RUFDRSxnQ0FBQTtBQUZWOztBQUlRO0VBQ0UsaURBQUE7QUFGVjs7QUFRRTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEseUJBQUE7RUFDQSwrQkFBQTtBQVJKOztBQWdCUTtFQUNFLDJDQUFBO0FBYlY7O0FBb0JBO0VBS1U7SUFDRSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUFyQlY7RUF1QlU7SUFDRSxRQUFBO0lBQ0EsdUJBQUE7RUFyQlo7RUF3QlU7SUFDRSxRQUFBO0VBdEJaOztFQWtDUTtJQUNFLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtFQS9CVjtFQWlDVTtJQUNFLFFBQUE7SUFDQSx1QkFBQTtFQS9CWjtFQWtDVTtJQUNFLFFBQUE7RUFoQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvY3VycmljdWx1bS1kZXNjcmlwdGlvbi1kaWFsb2cvY3VycmljdWx1bS1kZXNjcmlwdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRpYWxvZy1ib2R5IHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmRpYWxvZy1sb2FkZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXR1cy1iYWRnZSB7XHJcbiAgd2lkdGggOiAxMjBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjb3Vyc2Utc2VjdGlvbiwgI2V4YW0tc2VjdGlvbiB7XHJcbiAgI2hlYWRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb24gIDogc3RpY2t5O1xyXG4gICAgcGFkZGluZyAgIDogMjBweCAwcHg7XHJcbiAgICB0b3AgICAgICAgOiAtMXB4O1xyXG4gICAgei1pbmRleCAgIDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtd2hpdGUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAjbGlzdCB7XHJcblxyXG4gICAgI3RhYmxlLm9uZWNhcC10YWJsZSB7XHJcbiAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjVweCAxZnI7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIC5zZWN0aW9uIHsgZ2FwOiBpbmhlcml0OyB9XHJcbiAgICAgICAgLnNlY3Rpb24uYnV0dG9ucyB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIuNWZyIDFmciAxMzBweCAxMjBweCAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI25vLWRhdGEtbWVzc2FnZSB7XHJcbiAgICBtYXJnaW4tbGVmdCAgICAgOiAxNXB4O1xyXG4gICAgYm94LXNpemluZyAgICAgIDogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZDlkOWQ5LCAkYWxwaGE6IDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogNzVweDtcclxuXHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXMgICAgIDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IHZhcigtLWZvbnQtc20pO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gIH1cclxufVxyXG5cclxuI2V4YW0tc2VjdGlvbiB7XHJcbiAgI2xpc3Qge1xyXG4gICAgI3RhYmxlLnRhYmxlLWFyZWEge1xyXG4gICAgICAudGFibGUtcm93IHtcclxuICAgICAgICAuc2VjdGlvbi5kZXRhaWxzIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4IDEyMHB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0OXB4KSB7XHJcbiAgI2NvdXJzZS1zZWN0aW9uIHtcclxuICAgICNsaXN0IHtcclxuICAgICAgI3RhYmxlLnRhYmxlLWFyZWEge1xyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjZXhhbS1zZWN0aW9uIHtcclxuICAgICNsaXN0IHtcclxuICAgICAgI3RhYmxlLnRhYmxlLWFyZWEge1xyXG4gICAgICAgIC50YWJsZS1yb3cge1xyXG4gICAgICAgICAgLnNlY3Rpb24uZGV0YWlscyB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG5cclxuICAgICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdGF0dXMge1xyXG4gICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurriculumDescriptionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './curriculum-description-dialog.component.html',
                styleUrls: ['./curriculum-description-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_10__["CourseService"] }, { type: src_app_core_data_service_exam_service__WEBPACK_IMPORTED_MODULE_11__["ExamService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_12__["UserCourseService"] }, { type: src_app_core_data_service_user_exam_service__WEBPACK_IMPORTED_MODULE_13__["UserExamService"] }, { type: _course_dialog_course_dialog_service__WEBPACK_IMPORTED_MODULE_14__["CourseDialogService"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_15__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBar"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "UJO1":
/*!*****************************************************!*\
  !*** ./src/app/core/data/service/course.service.ts ***!
  \*****************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/course.model */ "7rYE");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_service */ "ECYA");






class CourseService extends _service__WEBPACK_IMPORTED_MODULE_4__["SPItemService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'CourseService';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__["SPList"].COURSE).items
            .expand('Owners', 'OwnerModifiedBy')
            .select('*', 'Owners/Id', 'Owners/Title', 'Owners/EMail', 'OwnerModifiedBy/Id', 'OwnerModifiedBy/Title', 'OwnerModifiedBy/EMail')
            .orderBy('Title');
    }
    toObject(data) {
        const { Id, Title, Description, Duration, Tags, MaterialLink, IsClassroom, LearningSubCategoryId, Owners, OwnerModifiedBy, OwnerModified, } = data;
        const ownerArray = Owners ? Owners.map(p => new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id: p.Id,
            Title: p.Title,
            EMail: p.EMail
        })) : [];
        const editorObj = OwnerModifiedBy ? new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id: OwnerModifiedBy.Id,
            Title: OwnerModifiedBy.Title,
            EMail: OwnerModifiedBy.EMail
        }) : new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({});
        return new _model_course_model__WEBPACK_IMPORTED_MODULE_2__["Course"]({
            Id,
            Title,
            Description,
            Duration,
            IsClassroom,
            LearningSubCategoryId,
            MaterialLink,
            Tags,
            Owners: ownerArray,
            Editor: editorObj,
            Modified: OwnerModified ? new Date(OwnerModified) : null,
            IsOwner: ownerArray.some(e => e.Id === this.UserId) || this.IsSiteOwner,
        });
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return ɵCourseService_BaseFactory(t || CourseService); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });
const ɵCourseService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CourseService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "VFaj":
/*!*********************************************!*\
  !*** ./src/app/core/util/validator.util.ts ***!
  \*********************************************/
/*! exports provided: isNotString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotString", function() { return isNotString; });
const isNotString = (control) => {
    return (typeof control.value === 'string' && control.value.trim() !== '') ? {
        valueIsString: {
            value: control.value
        }
    } : null;
};


/***/ }),

/***/ "WN5f":
/*!*************************************************!*\
  !*** ./src/app/shared/dialog/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-dialog/alert-dialog.component */ "gGB7");
/* harmony import */ var _confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-delete-dialog/confirm-delete-dialog.component */ "KYOD");
/* harmony import */ var _loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader-dialog/loader-dialog.component */ "tss9");
/* harmony import */ var _prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt-dialog/prompt-dialog.component */ "ajl6");







class DialogService extends _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] {
    loaderDialog(hasMessage = false, message = null) {
        return this.open(_loader_dialog_loader_dialog_component__WEBPACK_IMPORTED_MODULE_4__["LoaderDialogComponent"], { data: { hasMessage, message } });
    }
    alertDialog(title, message, btnOkText = 'Ok', hideBtnOk = false) {
        return this.open(_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AlertDialogComponent"], { data: { title, message, btnOkText, hideBtnOk } });
    }
    promptDialog(title, message, btnOkText = 'Yes', btnCancelText = 'No') {
        return this.open(_prompt_dialog_prompt_dialog_component__WEBPACK_IMPORTED_MODULE_5__["PromptDialogComponent"], {
            data: { title, message, btnOkText, btnCancelText }
        });
    }
    deleteDialog(itemName) {
        return this.open(_confirm_delete_dialog_confirm_delete_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDeleteDialogComponent"], { data: { itemName } });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return ɵDialogService_BaseFactory(t || DialogService); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
const ɵDialogService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DialogService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/access-denied/access-denied.component */ "Bwnv");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_6__["AccessDeniedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_6__["AccessDeniedComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aPzQ":
/*!******************************************************************!*\
  !*** ./src/app/shared/ui/progress-bar/progress-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { width: a0 }; };
function ProgressBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r0.acquiredPercentage + "%"));
} }
const _c1 = function (a0) { return { height: a0 }; };
function ProgressBarComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r1.acquiredPercentage + "%"));
} }
class ProgressBarComponent {
    constructor() {
        this.isVertical = false;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { isVertical: "isVertical", acquiredPercentage: "acquiredPercentage" }, decls: 2, vars: 2, consts: [["class", "progress-bar-container", 4, "ngIf"], [1, "progress-bar-container"], [1, "percentage-acquired", 3, "ngStyle"], [1, "percentage-acquired-vertical", 3, "ngStyle"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProgressBarComponent_div_0_Template, 2, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProgressBarComponent_div_1_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isVertical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVertical);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".progress-bar-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border: 1px solid var(--onecaplite-darkwhite);\n  background-color: var(--onecaplite-white);\n  overflow: hidden;\n  height: inherit;\n  width: inherit;\n  position: relative;\n  min-height: 20px;\n  min-width: 60px;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .percentage-acquired[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-blue);\n  height: inherit;\n  min-height: inherit;\n  transition: ease-out width 0.25s;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .percentage-acquired-vertical[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-blue);\n  width: inherit;\n  min-width: inherit;\n  position: absolute;\n  bottom: 0px;\n  transition: ease-out height 0.25s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLDZDQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjtBQUNFO0VBQ0Usd0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBRUU7RUFDRSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdWkvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXItY29udGFpbmVyIHtcclxuICBib3gtc2l6aW5nICAgICAgICA6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyICAgICAgICAgICAgOiAxcHggc29saWQgdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgb3ZlcmZsb3cgICAgICAgICAgOiBoaWRkZW47XHJcbiAgaGVpZ2h0ICAgICAgICAgICAgOiBpbmhlcml0O1xyXG4gIHdpZHRoICAgICAgICAgICAgIDogaW5oZXJpdDtcclxuICBwb3NpdGlvbiAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQgICAgICAgIDogMjBweDtcclxuICBtaW4td2lkdGggICAgICAgICA6IDYwcHg7XHJcblxyXG4gIC5wZXJjZW50YWdlLWFjcXVpcmVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3IgIDogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICAgIGhlaWdodCAgICAgICAgICAgIDogaW5oZXJpdDtcclxuICAgIG1pbi1oZWlnaHQgICAgICAgIDogaW5oZXJpdDtcclxuICAgIHRyYW5zaXRpb24gICAgICAgIDogZWFzZS1vdXQgd2lkdGggMC4yNXM7XHJcbiAgfVxyXG5cclxuICAucGVyY2VudGFnZS1hY3F1aXJlZC12ZXJ0aWNhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yICA6IHZhcigtLW9uZWNhcGxpdGUtYmx1ZSk7XHJcbiAgICB3aWR0aCAgICAgICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICBtaW4td2lkdGggICAgICAgICA6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbiAgICAgICAgICA6IGFic29sdXRlO1xyXG4gICAgYm90dG9tICAgICAgICAgICAgOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgICA6IGVhc2Utb3V0IGhlaWdodCAwLjI1cztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-bar',
                templateUrl: './progress-bar.component.html',
                styleUrls: ['./progress-bar.component.scss']
            }]
    }], function () { return []; }, { isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], acquiredPercentage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "abAR":
/*!****************************************************************!*\
  !*** ./src/app/shared/ui/star-rating/star-rating.component.ts ***!
  \****************************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function StarRatingComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", val_r1, " ");
} }
const _c0 = function (a0) { return { "active": a0 }; };
function StarRatingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarRatingComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateValue(); })("mouseover", function StarRatingComponent_div_1_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const val_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.checkValue(val_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " star ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StarRatingComponent_div_1_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("material-icons " + ctx_r0._size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.tempValue >= val_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showValues);
} }
class StarRatingComponent {
    constructor() {
        this.updates = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewOnly = false;
        this.showValues = false;
        this._max = 5;
        this._size = 'lg';
        this.valueHolder = 0;
        this.tempValue = 0;
        this.starArr = [1, 2, 3, 4, 5];
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    set max(value) {
        this._max = value;
        this.starArr = new Array(value).map((e, i) => i + 1);
    }
    set size(value) { this._size = value; }
    writeValue(obj) {
        this.valueHolder = obj;
        this.tempValue = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    get value() { return this.valueHolder; }
    set value(v) {
        this.valueHolder = v;
        this.tempValue = v;
        this.onChange(this.valueHolder);
        this.updates.emit({ value: this.valueHolder });
        this.onTouched();
    }
    resetValue() {
        if (!this.viewOnly) {
            this.tempValue = this.valueHolder;
        }
    }
    checkValue(value) {
        if (!this.viewOnly) {
            this.tempValue = value;
        }
    }
    updateValue() {
        if (!this.viewOnly) {
            this.value = this.tempValue;
        }
    }
}
StarRatingComponent.ɵfac = function StarRatingComponent_Factory(t) { return new (t || StarRatingComponent)(); };
StarRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRatingComponent, selectors: [["app-star-rating"]], inputs: { viewOnly: "viewOnly", showValues: "showValues", max: "max", size: "size" }, outputs: { updates: "updates" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                multi: true,
                useExisting: StarRatingComponent
            },
        ])], decls: 2, vars: 2, consts: [[1, "rating", 3, "ngClass", "mouseleave"], ["class", "rate-value", 3, "click", "mouseover", 4, "ngFor", "ngForOf"], [1, "rate-value", 3, "click", "mouseover"], [3, "ngClass"], ["class", "label", 4, "ngIf"], [1, "label"]], template: function StarRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function StarRatingComponent_Template_div_mouseleave_0_listener() { return ctx.resetValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_div_1_Template, 4, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx._size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.starArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  color: var(--onecaplite-yellow);\n}\n\n.rating[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n  gap: 10px;\n}\n\n.rate-value[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: grid;\n  grid-auto-flow: row;\n  justify-content: center;\n  text-align: center;\n}\n\n.rate-value[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--onecaplite-darkwhite);\n}\n\n.rate-value[_ngcontent-%COMP%]   .material-icons.lg[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n\n.rate-value[_ngcontent-%COMP%]   .material-icons.md[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.rate-value[_ngcontent-%COMP%]   .material-icons.sm[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.rate-value[_ngcontent-%COMP%]   .material-icons.active[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.rate-value[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--onecaplite-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VpL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFBRTtFQUNFLGtDQUFBO0FBRUo7O0FBQUk7RUFBTyxlQUFBO0FBR1g7O0FBRkk7RUFBTyxlQUFBO0FBS1g7O0FBSkk7RUFBTyxlQUFBO0FBT1g7O0FBTkk7RUFBVyxjQUFBO0FBU2Y7O0FBUEU7RUFDRSw4QkFBQTtBQVNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VpL3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXllbGxvdyk7XHJcbn1cclxuXHJcbi5yYXRpbmcge1xyXG4gIGRpc3BsYXkgICAgICAgICAgIDogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdyAgICA6IGNvbHVtbjtcclxuICBncmlkLWF1dG8tY29sdW1ucyA6IG1heC1jb250ZW50O1xyXG4gIGdhcCAgICAgICAgICAgICAgIDogMTBweDtcclxufVxyXG5cclxuLnJhdGUtdmFsdWUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG5cclxuICAgICYubGcgeyBmb250LXNpemU6IDMycHg7IH1cclxuICAgICYubWQgeyBmb250LXNpemU6IDI0cHg7IH1cclxuICAgICYuc20geyBmb250LXNpemU6IDE4cHg7IH1cclxuICAgICYuYWN0aXZlIHsgY29sb3I6IGluaGVyaXQ7IH1cclxuICB9XHJcbiAgLmxhYmVsIHtcclxuICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWJsYWNrKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StarRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-star-rating',
                templateUrl: './star-rating.component.html',
                styleUrls: ['./star-rating.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        multi: true,
                        useExisting: StarRatingComponent
                    },
                ]
            }]
    }], null, { updates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], viewOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ajl6":
/*!************************************************************************!*\
  !*** ./src/app/shared/dialog/prompt-dialog/prompt-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: PromptDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptDialogComponent", function() { return PromptDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PromptDialogComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.title, " ");
} }
class PromptDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
PromptDialogComponent.ɵfac = function PromptDialogComponent_Factory(t) { return new (t || PromptDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PromptDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromptDialogComponent, selectors: [["ng-component"]], decls: 8, vars: 4, consts: [["class", "dialog-header", 4, "ngIf"], [1, "dialog-body"], [1, "dialog-action"], [1, "onecap-outline-btn", "accent-2", 3, "click"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "dialog-header"], [1, "dialog-title"]], template: function PromptDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PromptDialogComponent_section_0_Template, 3, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptDialogComponent_Template_button_click_4_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.btnCancelText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.btnOkText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: 300px;\n  min-height: 125px;\n  display: grid;\n  grid-template-rows: max-content 1fr max-content;\n  gap: 5px;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  grid-auto-flow: column;\n  gap: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9wcm9tcHQtZGlhbG9nL3Byb21wdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvcHJvbXB0LWRpYWxvZy9wcm9tcHQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAxMjVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyIG1heC1jb250ZW50O1xyXG4gIGdhcDogNXB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWJvZHkge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbiB7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICBnYXA6IDE1cHhcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './prompt-dialog.component.html',
                styleUrls: ['./prompt-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "cDpi":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/dialog/user-feedback-dialog/user-feedback-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserFeedbackDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFeedbackDialogComponent", function() { return UserFeedbackDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/constant/nav-bar.constant */ "cv3T");
/* harmony import */ var src_app_core_data_model_user_feedback_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/user-feedback.model */ "62Tn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_service_user_feedback_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/user-feedback.service */ "ADeA");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function UserFeedbackDialogComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pages_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pages_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pages_r1, " ");
} }
class UserFeedbackDialogComponent {
    constructor(dialogRef, userFeedbackService, dialog, accountService) {
        this.dialogRef = dialogRef;
        this.userFeedbackService = userFeedbackService;
        this.dialog = dialog;
        this.accountService = accountService;
        this.oneCapPages = [];
        this.submitionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            selectedPages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)),
            feedback: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
    }
    ngOnInit() {
        this.dialogRef.addPanelClass('onecaplite-dialog-container');
        const navItems = this.filterNavItems(this.accountService.account.Groups, src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_5__["RouteMap"].map(e => e));
        this.oneCapPages = this.getFAQPages(navItems);
        this.userFeedbackService.getAll().then(console.log);
    }
    filterNavItems(assignedGroups, currentNavItems) {
        if (assignedGroups.some((value) => value === src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["GROUP"].Owner)) {
            return currentNavItems;
        }
        else {
            return currentNavItems.filter((navItem) => {
                if (navItem.AccessGroup) {
                    return navItem.AccessGroup.some((group) => assignedGroups.indexOf(group) > -1);
                }
                return true;
            }).map((navItem) => {
                if (navItem.Children) {
                    navItem.Children = this.filterNavItems(assignedGroups, navItem.Children);
                }
                return navItem;
            });
        }
    }
    getFAQPages(navItems, parent) {
        return navItems.reduce((returnValue, currentItem) => {
            let pageString = currentItem.DisplayName;
            if (parent) {
                pageString = `${parent} > ${currentItem.DisplayName}`;
            }
            if (currentItem.Children) {
                returnValue = [...returnValue, ...this.getFAQPages(currentItem.Children, pageString)];
            }
            else {
                returnValue = [...returnValue, pageString];
            }
            return returnValue;
        }, []);
    }
    submitForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.dialog.loaderDialog();
            const { selectedPages, feedback, } = this.submitionForm.value;
            const requestData = new src_app_core_data_model_user_feedback_model__WEBPACK_IMPORTED_MODULE_6__["UserFeedback"]({
                PageReported: selectedPages.join(', '),
                Feedback: feedback,
                User: this.accountService.account
            });
            yield this.userFeedbackService.save(requestData);
            loader.close();
            const alertDialog = this.dialog.alertDialog('Feedback Form', `Thank you for your feedback. We will respond to you via email.`);
            yield alertDialog.afterClosed().toPromise();
            this.dialogRef.close();
        });
    }
}
UserFeedbackDialogComponent.ɵfac = function UserFeedbackDialogComponent_Factory(t) { return new (t || UserFeedbackDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_feedback_service__WEBPACK_IMPORTED_MODULE_8__["UserFeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"])); };
UserFeedbackDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserFeedbackDialogComponent, selectors: [["ng-component"]], decls: 23, vars: 5, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body", "flex", "flex-column", "align-items-stretch", "justify-content-start", 3, "formGroup"], [1, "mini-label"], [1, "onecap-input-form"], [1, "select-container"], ["formControlName", "selectedPages", "multiple", "", "panelClass", "onecap-option-container"], [3, "value", 4, "ngFor", "ngForOf"], [1, "editor-container"], ["formControlName", "feedback", 1, "flex-grow-1", 3, "editor", "config"], [1, "dialog-action"], [1, "onecap-btn", "primary", 3, "disabled", "click"], [3, "value"]], template: function UserFeedbackDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Feedback Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " We would like to hear your suggestions or concerns to help us improve! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Affected Page/s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserFeedbackDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Feedback* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ckeditor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFeedbackDialogComponent_Template_button_click_21_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.submitionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.oneCapPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.submitionForm.invalid);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy91c2VyLWZlZWRiYWNrLWRpYWxvZy91c2VyLWZlZWRiYWNrLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9nL3VzZXItZmVlZGJhY2stZGlhbG9nL3VzZXItZmVlZGJhY2stZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWFjdGlvbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserFeedbackDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './user-feedback-dialog.component.html',
                styleUrls: ['./user-feedback-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] }, { type: src_app_core_data_service_user_feedback_service__WEBPACK_IMPORTED_MODULE_8__["UserFeedbackService"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"] }]; }, null); })();


/***/ }),

/***/ "cv3T":
/*!******************************************!*\
  !*** ./src/constant/nav-bar.constant.ts ***!
  \******************************************/
/*! exports provided: RouteMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteMap", function() { return RouteMap; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");

const RouteMap = [
    {
        IconName: 'icon-dxc real-estate-house',
        DisplayName: 'Home',
        Route: '/home',
    },
    {
        IconName: 'icon-dxc layers-layers-4',
        DisplayName: 'Learning Library',
        Route: '/learning-library',
    },
    {
        IconName: 'icon-dxc business-management-person-puzzle',
        DisplayName: 'My Progress',
        Route: '/my-progress',
        AccessGroup: [src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Employee],
        Children: [
            {
                DisplayName: 'Role-based Learning',
                Route: '/my-progress/role-based-learning',
                IconName: 'icon-dxc startup-person-lightbulb-2'
            },
            {
                DisplayName: 'My Courses',
                Route: '/my-progress/my-course',
                IconName: 'icon-dxc layers-layers-2'
            },
            {
                DisplayName: 'My Exams',
                Route: '/my-progress/my-exam',
                IconName: 'icon-dxc surveys-form-pencil'
            },
        ]
    },
    {
        IconName: 'icon-dxc tools-person-gear-wrench',
        DisplayName: 'Administrator',
        Route: '/admin',
        AccessGroup: [
            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Admin,
            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Owner,
        ],
        Children: [
            {
                IconName: 'icon-dxc people-orgs-3-people',
                DisplayName: 'Employees',
                Route: '/admin/employee',
                AccessGroup: [
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Owner
                ]
            },
            {
                IconName: 'icon-dxc business-management-person-gear',
                DisplayName: 'Roles',
                Route: '/admin/role',
            },
            {
                IconName: 'icon-dxc layers-layers-4',
                DisplayName: 'Curricula',
                Route: '/admin/curriculum',
            },
            {
                IconName: 'icon-dxc layers-layers-2',
                DisplayName: 'Courses',
                Route: '/admin/course',
            },
            {
                IconName: 'icon-dxc surveys-form-pencil',
                DisplayName: 'Exams',
                Route: '/admin/exam',
            },
            {
                IconName: 'icon-dxc approved-web-check',
                DisplayName: 'Mandatory Training',
                Route: '/admin/mandatory-training',
                AccessGroup: [
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Owner
                ]
            },
        ]
    },
    {
        IconName: 'icon-dxc data-analysis-chart-magnify',
        DisplayName: 'Reports',
        Route: '/reports',
        AccessGroup: [
            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Admin,
            src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].ReportAccess
        ],
        Children: [
            {
                DisplayName: 'Course Based',
                Route: '/reports/course-based',
                IconName: 'icon-dxc layers-layers-2'
            },
            {
                DisplayName: 'Exam Based',
                Route: '/reports/exam-based',
                IconName: 'icon-dxc surveys-form-pencil'
            },
        ]
    },
    {
        DisplayName: 'FAQ',
        Route: '/faq',
        IconName: 'icon-dxc layers-layers-2'
    }
];


/***/ }),

/***/ "dKUA":
/*!***********************************************!*\
  !*** ./src/app/core/data/model/exam.model.ts ***!
  \***********************************************/
/*! exports provided: ExamStatus, UserExam, Exam, QuestionType, Question, Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamStatus", function() { return ExamStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExam", function() { return UserExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exam", function() { return Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionType", function() { return QuestionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

var ExamStatus;
(function (ExamStatus) {
    ExamStatus["NOT_YET_TAKEN"] = "Not yet Taken";
    ExamStatus["PASSED"] = "Passed";
    ExamStatus["FAILED"] = "Failed";
})(ExamStatus || (ExamStatus = {}));
class UserExam extends _model__WEBPACK_IMPORTED_MODULE_0__["SPEmployeeItem"] {
    constructor(args) {
        super();
        this.ExamId = -1;
        this.ExamName = '';
        this._PassingScore = 0;
        this._IsTaken = false;
        this._Score = 0;
        this._Status = ExamStatus.NOT_YET_TAKEN;
        this._Attempts = 0;
        Object.assign(this, args);
    }
    get PassingScore() { return this._PassingScore; }
    set PassingScore(value) {
        this._PassingScore = value;
        this.updateStatus();
    }
    get IsTaken() { return this._IsTaken; }
    set IsTaken(value) {
        this._IsTaken = value;
        this.updateStatus();
    }
    get Score() { return this._Score; }
    set Score(value) {
        this._Score = value;
        this.updateStatus();
    }
    get Status() { return this._Status; }
    get Attempts() { return this._Attempts; }
    set Attempts(value) {
        this._Attempts = value;
    }
    updateStatus() {
        if (!this._IsTaken) {
            this._Status = ExamStatus.NOT_YET_TAKEN;
        }
        else {
            this._Status = (this._Score >= this._PassingScore) ? ExamStatus.PASSED : ExamStatus.FAILED;
        }
    }
    toSPData() {
        const { User, ExamId, Score, IsTaken, Attempts } = this;
        return {
            UserId: User.Id,
            ExamId,
            Score,
            IsTaken,
            Attempts,
        };
    }
}
class Exam extends _model__WEBPACK_IMPORTED_MODULE_0__["SPItem"] {
    constructor(args) {
        super();
        this.LearningCategoryName = '';
        this.LearningSubCategoryId = null;
        this.Tags = '';
        this.PassingRate = 0;
        this.RelatedCoursesId = [];
        this._CurriculumNameArr = [];
        this._CurriculumNames = '';
        this._HasRecord = false;
        this._Status = ExamStatus.NOT_YET_TAKEN;
        this._CompletionDate = '';
        this._Record = null;
        Object.assign(this, args);
    }
    get CurriculumNameArr() { return this._CurriculumNameArr; }
    set CurriculumNameArr(value) {
        this._CurriculumNameArr = value;
        this._CurriculumNames = value.join(', ');
    }
    get CurriculumNames() { return this._CurriculumNames; }
    get HasRecord() { return this._HasRecord; }
    get Status() { return this._Status; }
    get CompletionDate() {
        return this._CompletionDate;
    }
    get Record() { return this._Record; }
    set Record(value) {
        this._Record = value;
        if (value) {
            this._Status = value.Status;
            this._HasRecord = true;
            this._CompletionDate = value.DateModified;
        }
        else {
            this._Status = ExamStatus.NOT_YET_TAKEN;
            this._HasRecord = false;
        }
    }
    toSPData() {
        const { Title, Description, Tags, PassingRate, RelatedCoursesId, LearningSubCategoryId, Owners, Editor, Modified, } = this;
        return {
            Title,
            LearningSubCategoryId,
            Description,
            Tags,
            PassingRate,
            RelatedCoursesId: { results: RelatedCoursesId },
            OwnersId: { results: Owners.map(e => e.Id) },
            OwnerModifiedById: Editor ? Editor.Id : undefined,
            OwnerModified: Modified,
        };
    }
}
var QuestionType;
(function (QuestionType) {
    QuestionType["TRUE_OR_FALSE"] = "True or False";
    QuestionType["SINGLE_ANSWER"] = "Single Answer";
    QuestionType["MULTIPLE_ANSWER"] = "Multiple Answers";
})(QuestionType || (QuestionType = {}));
class Question extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.ExamId = -1;
        this.QuestionText = '';
        this.Type = QuestionType.TRUE_OR_FALSE;
        this.IsTrue = false;
        this.Answers = [];
        this.UserAnswer = undefined;
        this.AnswerIsTrue = undefined;
        Object.assign(this, args);
    }
    IsAnswered() {
        switch (this.Type) {
            case QuestionType.SINGLE_ANSWER:
                return this.UserAnswer !== undefined;
            case QuestionType.MULTIPLE_ANSWER:
                return this.Answers.filter(e => e.IsSelected).length > 0;
            case QuestionType.TRUE_OR_FALSE:
                return this.AnswerIsTrue !== undefined;
            default:
                return false;
        }
    }
    IsCorrect() {
        switch (this.Type) {
            case QuestionType.SINGLE_ANSWER:
                return this.UserAnswer !== undefined && this.UserAnswer.IsAnswer;
            case QuestionType.MULTIPLE_ANSWER:
                const correctAnswers = this.Answers.filter(e => e.IsAnswer);
                const selectedAnswers = this.Answers.filter(e => e.IsSelected);
                const filteredSelectedAnswers = selectedAnswers.filter(e => e.IsAnswer);
                return (filteredSelectedAnswers.length === selectedAnswers.length) &&
                    (filteredSelectedAnswers.length === correctAnswers.length);
            case QuestionType.TRUE_OR_FALSE:
                return this.AnswerIsTrue === this.IsTrue;
            default:
                return false;
        }
    }
    toSPData() {
        const { ExamId, QuestionText, Type, IsTrue, } = this;
        return {
            ExamId,
            QuestionText,
            QuestionType: Type,
            QuestionIsTrue: IsTrue,
        };
    }
}
class Answer extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.QuestionId = -1;
        this.AnswerText = '';
        this.IsAnswer = false;
        this.IsSelected = false;
        Object.assign(this, args);
    }
    toSPData() {
        const { QuestionId, AnswerText, IsAnswer, } = this;
        return {
            QuestionId,
            AnswerText,
            IsCorrect: IsAnswer,
        };
    }
}


/***/ }),

/***/ "dpZn":
/*!********************************************************!*\
  !*** ./src/app/core/data/service/user-exam.service.ts ***!
  \********************************************************/
/*! exports provided: UserExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserExamService", function() { return UserExamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_exam_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/exam.model */ "dKUA");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_service */ "ECYA");






class UserExamService extends _service__WEBPACK_IMPORTED_MODULE_4__["SPEmployeeItemService"] {
    constructor() {
        super(...arguments);
        this.ObjectColumn = 'ExamId';
        this.ItemRecordColumn = 'ExamId';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__["SPList"].USER_EXAM).items
            .expand('User', 'Exam')
            .select('*', 'Exam/Title', 'Exam/PassingRate', 'User/Id', 'User/Title', 'User/EMail');
    }
    toObject(data) {
        const { Id, User, ExamId, Exam, Score, IsTaken, Attempts, Modified, } = data;
        const UserObj = new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id: User.Id,
            Title: User.Title,
            EMail: User.EMail,
        });
        return new _model_exam_model__WEBPACK_IMPORTED_MODULE_2__["UserExam"]({
            Id,
            ExamId,
            IsTaken,
            Score,
            Attempts,
            ExamName: Exam.Title,
            PassingScore: Exam.PassingRate,
            User: UserObj,
            Modified: new Date(Modified),
        });
    }
}
UserExamService.ɵfac = function UserExamService_Factory(t) { return ɵUserExamService_BaseFactory(t || UserExamService); };
UserExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserExamService, factory: UserExamService.ɵfac, providedIn: 'root' });
const ɵUserExamService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UserExamService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserExamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "dt6v":
/*!****************************************************!*\
  !*** ./src/app/core/data/service/email.service.ts ***!
  \****************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_sputilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/sputilities */ "Ku5p");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "00IP");







class EmailService {
    constructor(userService) {
        this.userService = userService;
    }
    sendFeedbackNotification(userFeedback) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Resolving Support Mail');
            const resMail = yield this.userService.resolveEmail(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SupportMail);
            yield this.userService.ensureUser(resMail.Key);
            console.log('Sending Email');
            const res = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].utility.sendEmail({
                From: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SupportMail,
                Subject: '[OneCap] User Feedback Notification',
                To: [src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SupportMail],
                Body: `
      <style>
        * { font-family: "Open Sans", sans-serif; }
        p {
          font-size: 12pt;
        }
      </style>
      <div> Hello <b>${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SupportName}</b> </div>
      <br/>
      <div>
        A new user feeback has been submitted by: ${(_a = userFeedback === null || userFeedback === void 0 ? void 0 : userFeedback.User) === null || _a === void 0 ? void 0 : _a.Title}
      </div>
      <br/>
      <div>
        <b><u> Details: </u></b> <br/>
        <b>Pages Affected:</b> ${userFeedback === null || userFeedback === void 0 ? void 0 : userFeedback.PageReported}
        <b>Feedback:</b> <br/>
        <br/>
        <div>
          ${userFeedback === null || userFeedback === void 0 ? void 0 : userFeedback.Feedback}
        </div>
      </div>
      `
            });
        });
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
EmailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "eDEE":
/*!***************************************!*\
  !*** ./src/constant/list.constant.ts ***!
  \***************************************/
/*! exports provided: SPList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPList", function() { return SPList; });
var SPList;
(function (SPList) {
    SPList["FAQ"] = "tbl_FAQ";
    SPList["ANNOUNCEMENT"] = "tbl_announcement";
    SPList["MANDATORY_TRAINING"] = "tbl_mandatory_training";
    SPList["FEATURED_CURRICULUM"] = "tbl_featured_curriculum";
    // Dropdowns
    SPList["ORG_LVL_1"] = "tbl_org_lvl_1";
    SPList["ORG_LVL_2"] = "tbl_org_lvl_2";
    SPList["COUNTRY"] = "tbl_country";
    SPList["ROLE_CATEGORY"] = "tbl_role_category";
    SPList["ROLE_SUB_CATEGORY"] = "tbl_role_sub_category";
    SPList["LEARNING_CATEGORY"] = "tbl_learning_category";
    SPList["LEARNING_SUB_CATEGORY"] = "tbl_learning_sub_category";
    SPList["ROLE"] = "tbl_role";
    SPList["CURRICULUM"] = "tbl_curriculum";
    SPList["COURSE"] = "tbl_course";
    SPList["EXAM"] = "tbl_exam";
    SPList["EXAM_QUESTION"] = "tbl_exam_question";
    SPList["EXAM_QUESTION_ANSWER"] = "tbl_exam_question_answer";
    SPList["USER"] = "tbl_user";
    SPList["USER_ROLE"] = "tbl_user_role";
    SPList["USER_COURSE"] = "tbl_user_course";
    SPList["USER_COURSE_RATING"] = "tbl_user_course_rating";
    SPList["USER_EXAM"] = "tbl_user_exam";
    SPList["USER_FEEDBACK"] = "tbl_user_feedback";
})(SPList || (SPList = {}));


/***/ }),

/***/ "eMQo":
/*!***************************************************!*\
  !*** ./src/app/core/data/model/dropdown.model.ts ***!
  \***************************************************/
/*! exports provided: OrgLvl1, OrgLvl2, Country, RoleCategory, RoleSubCategory, LearningCategory, LearningSubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgLvl1", function() { return OrgLvl1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgLvl2", function() { return OrgLvl2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCategory", function() { return RoleCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleSubCategory", function() { return RoleSubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningCategory", function() { return LearningCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningSubCategory", function() { return LearningSubCategory; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

// Organization
class OrgLvl1 extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        Object.assign(this, args);
    }
}
class OrgLvl2 extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.OrgLvl1Id = -1;
        Object.assign(this, args);
    }
}
// Country
class Country extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.CountryCode = '';
        Object.assign(this, args);
    }
}
// Role
class RoleCategory extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.RoleSubCategoryList = [];
        Object.assign(this, args);
    }
}
class RoleSubCategory extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.CategoryId = -1;
        Object.assign(this, args);
    }
}
/* Learning */
class LearningCategory extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.SubCategoryList = [];
        Object.assign(this, args);
    }
}
class LearningSubCategory extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.CategoryId = -1;
        this.CategoryName = '';
        Object.assign(this, args);
    }
    get FullName() {
        return [this.CategoryName, this.Title].join(' - ');
    }
}


/***/ }),

/***/ "gGB7":
/*!**********************************************************************!*\
  !*** ./src/app/shared/dialog/alert-dialog/alert-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AlertDialogComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.data.btnOkText, " ");
} }
class AlertDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
}
AlertDialogComponent.ɵfac = function AlertDialogComponent_Factory(t) { return new (t || AlertDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AlertDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertDialogComponent, selectors: [["ng-component"]], decls: 9, vars: 3, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], [1, "content", 3, "innerHTML"], ["class", "dialog-action", 4, "ngIf"], [1, "dialog-action"], ["matDialogClose", "", 1, "onecap-outline-btn", "primary"]], template: function AlertDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlertDialogComponent_section_8_Template, 3, 1, "section", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.hideBtnOk);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: 300px;\n  min-height: 125px;\n  display: grid;\n  grid-template-rows: max-content 1fr max-content;\n  gap: 5px;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  align-items: center;\n  text-align: center;\n}\n\n.dialog-action[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9hbGVydC1kaWFsb2cvYWxlcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvYWxlcnQtZGlhbG9nL2FsZXJ0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWluLWhlaWdodDogMTI1cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmciBtYXgtY29udGVudDtcclxuICBnYXA6IDVweDtcclxufVxyXG5cclxuLmRpYWxvZy1ib2R5IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpYWxvZy1hY3Rpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './alert-dialog.component.html',
                styleUrls: ['./alert-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "hADJ":
/*!******************************************************!*\
  !*** ./src/app/shared/ui/nav-bar/nav-bar.service.ts ***!
  \******************************************************/
/*! exports provided: NavBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarService", function() { return NavBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class NavBarService {
    constructor(router) {
        this.router = router;
        this.IsOpen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.currentUrl = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => event.urlAfterRedirects), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''));
    }
    open() { this.IsOpen.next(true); }
    close() { this.IsOpen.next(false); }
    toggle() { this.IsOpen.next(!this.IsOpen.value); }
}
NavBarService.ɵfac = function NavBarService_Factory(t) { return new (t || NavBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavBarService, factory: NavBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "jeql":
/*!***********************************************************!*\
  !*** ./src/app/core/data/service/access-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AccessGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessGuardService", function() { return AccessGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constant/nav-bar.constant */ "cv3T");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.service */ "LFci");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AccessGuardService {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.accountService.accountIsLoaded) {
                yield this.accountService.initializeProfile();
            }
            const { account } = this.accountService;
            if (account.IsSiteOwner) {
                return true;
            }
            const activePageAccessGroups = this.getActivePageAccessGroups(state.url);
            if (activePageAccessGroups.length === 0) {
                return true;
            }
            if (activePageAccessGroups.some((e) => account.Groups.indexOf(e) > -1)) {
                return true;
            }
            this.router.navigate(['access-denied'], { queryParams: { url: state.url } });
            return false;
        });
    }
    getActivePageAccessGroups(url, activeNavList, activeNavItemAccessGroups) {
        const self = this;
        // checking if activeNavList Parameter is available
        if (activeNavList === undefined) {
            activeNavList = src_constant_nav_bar_constant__WEBPACK_IMPORTED_MODULE_2__["RouteMap"];
        }
        if (activeNavItemAccessGroups === undefined) {
            activeNavItemAccessGroups = [];
        }
        // Finding the active navigation item in the list
        const activeNavItem = activeNavList
            .filter(navItem => !navItem.Children || navItem.Children.length === 0)
            .find(navItem => url.indexOf(navItem.Route) === 0);
        // Return accessGroup if found.
        if (activeNavItem) {
            if (activeNavItem.AccessGroup) {
                activeNavItemAccessGroups = activeNavItem.AccessGroup;
            }
            return activeNavItemAccessGroups;
        }
        // if not found, get the parent navigation item related to current nav item
        const parentNavItem = activeNavList
            .filter(navItem => navItem.Children && navItem.Children.length > 0)
            .find(navItem => url.indexOf(navItem.Route) === 0);
        // do a recursion once parent item is found
        if (parentNavItem) {
            if (parentNavItem.AccessGroup) {
                activeNavItemAccessGroups = parentNavItem.AccessGroup;
            }
            return self.getActivePageAccessGroups(url, parentNavItem.Children, activeNavItemAccessGroups);
        }
        console.error(`Error: (Route ('${url}') not registered in Route Map)`);
        return undefined;
    }
}
AccessGuardService.ɵfac = function AccessGuardService_Factory(t) { return new (t || AccessGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AccessGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccessGuardService, factory: AccessGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccessGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "kFYn":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/dialog/report-problem-dialog/report-problem-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReportProblemDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportProblemDialogComponent", function() { return ReportProblemDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-feedback-dialog/user-feedback-dialog.component */ "cDpi");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ReportProblemDialogComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const people_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", people_r3.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + people_r3.EMail + "?subject=[OneCap Report] " + (ctx_r2.item == null ? null : ctx_r2.item.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", people_r3.EMail, " ");
} }
function ReportProblemDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportProblemDialogComponent_div_14_div_1_Template, 5, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.item == null ? null : ctx_r0.item.Owners);
} }
function ReportProblemDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No owners available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReportProblemDialogComponent {
    constructor(dialogRef, dialog, data) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.itemType = 'Course';
        this.item = null;
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'report-problem']);
        if (this.data) {
            const { item, itemType } = this.data;
            this.itemType = itemType;
            this.item = item;
        }
    }
    submitFeedback() {
        this.dialog.open(_user_feedback_dialog_user_feedback_dialog_component__WEBPACK_IMPORTED_MODULE_2__["UserFeedbackDialogComponent"]);
    }
}
ReportProblemDialogComponent.ɵfac = function ReportProblemDialogComponent_Factory(t) { return new (t || ReportProblemDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ReportProblemDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportProblemDialogComponent, selectors: [["ng-component"]], decls: 23, vars: 6, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [1, "message-section"], [1, "owner-section"], [1, "section-header"], ["class", "section-table", 4, "ngIf"], ["class", "section-message", 4, "ngIf"], [1, "feedback-section"], [1, "message"], [1, "onecap-btn", "primary", 3, "click"], [1, "button-wrapper"], [1, "icon", "wht", "icon-dxc", "communications-envelope"], [1, "section-table"], ["class", "table-item", 4, "ngFor", "ngForOf"], [1, "table-item"], [3, "href"], [1, "section-message"], [1, "onecap-label", "primary"]], template: function ReportProblemDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReportProblemDialogComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReportProblemDialogComponent_div_15_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Got questions, comments, or suggestions for OneCap Lite? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportProblemDialogComponent_Template_button_click_19_listener() { return ctx.submitFeedback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Submit Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Having trouble with this ", ctx.itemType.toLowerCase(), "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Contact the ", ctx.itemType, " Owner. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.itemType, " Owners: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.Owners.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.Owners.length) === 0);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".dialog-header[_ngcontent-%COMP%], .dialog-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n}\n\n.message-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.owner-section[_ngcontent-%COMP%] {\n  margin: 0px 10px;\n  display: grid;\n  min-height: 100px;\n  max-height: 200px;\n  gap: 5px;\n  justify-content: stretch;\n  grid-template-rows: max-content 1fr;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: left;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-table[_ngcontent-%COMP%] {\n  overflow: auto;\n  display: grid;\n  gap: inherit;\n  grid-auto-rows: max-content;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-table[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n  gap: inherit;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-table[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-table[_ngcontent-%COMP%]   .table-item[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.owner-section[_ngcontent-%COMP%]   .section-message[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: center;\n}\n\n.feedback-section[_ngcontent-%COMP%] {\n  background-color: rgba(217, 217, 217, 0.3);\n  border-radius: 5px;\n  padding: 15px;\n  display: grid;\n  gap: 15px;\n}\n\n.feedback-section[_ngcontent-%COMP%]   .onecap-btn[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9yZXBvcnQtcHJvYmxlbS1kaWFsb2cvcmVwb3J0LXByb2JsZW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBQ007RUFDRSxnQkFBQTtBQUNSOztBQUVNO0VBQ0UsaUJBQUE7QUFBUjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSEo7O0FBU0E7RUFDRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBTkY7O0FBUUU7RUFDRSxvQkFBQTtBQU5KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZy9yZXBvcnQtcHJvYmxlbS1kaWFsb2cvcmVwb3J0LXByb2JsZW0tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy1oZWFkZXIsIC5kaWFsb2ctYm9keSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGlhbG9nLWJvZHkge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ub3duZXItc2VjdGlvbiB7XHJcbiAgbWFyZ2luICAgICAgICAgICAgICA6IDBweCAxMHB4O1xyXG4gIGRpc3BsYXkgICAgICAgICAgICAgOiBncmlkO1xyXG4gIG1pbi1oZWlnaHQgICAgICAgICAgOiAxMDBweDtcclxuICBtYXgtaGVpZ2h0ICAgICAgICAgIDogMjAwcHg7XHJcbiAgZ2FwICAgICAgICAgICAgICAgICA6IDVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQgICAgIDogc3RyZXRjaDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3MgIDogbWF4LWNvbnRlbnQgMWZyO1xyXG4gIC5zZWN0aW9uLWhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodCA6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduICA6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXkgOiBncmlkO1xyXG4gICAgZ2FwICAgICA6IGluaGVyaXQ7XHJcbiAgICBncmlkLWF1dG8tcm93cyAgICA6IG1heC1jb250ZW50O1xyXG5cclxuICAgIC50YWJsZS1pdGVtIHtcclxuICAgICAgZGlzcGxheSAgICAgICAgICAgOiBncmlkO1xyXG4gICAgICBncmlkLWF1dG8tZmxvdyAgICA6IGNvbHVtbjtcclxuICAgICAgZ3JpZC1hdXRvLWNvbHVtbnMgOiAxZnI7XHJcbiAgICAgIGdhcCAgICAgICAgICAgICAgIDogaW5oZXJpdDtcclxuXHJcbiAgICAgICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICo6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLW1lc3NhZ2Uge1xyXG4gICAgZGlzcGxheSAgICAgICAgIDogZ3JpZDtcclxuICAgIGFsaWduLWl0ZW1zICAgICA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuLmZlZWRiYWNrLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3IgIDogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4zKTtcclxuICBib3JkZXItcmFkaXVzICAgICA6IDVweDtcclxuICBwYWRkaW5nICAgICAgICAgICA6IDE1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgICAgOiBncmlkO1xyXG4gIGdhcCAgICAgICAgICAgICAgIDogMTVweDtcclxuXHJcbiAgLm9uZWNhcC1idG4ge1xyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportProblemDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './report-problem-dialog.component.html',
                styleUrls: ['./report-problem-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "n44M":
/*!****************************************!*\
  !*** ./src/app/core/util/data.util.ts ***!
  \****************************************/
/*! exports provided: copyToClipBoard, sortItems, totalDurationList, getDescriptionCount, getHTMLText, splitString, convertToFilterMap, convertToMap, searchString, validateEmailFormat, getAllData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipBoard", function() { return copyToClipBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortItems", function() { return sortItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalDurationList", function() { return totalDurationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescriptionCount", function() { return getDescriptionCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHTMLText", function() { return getHTMLText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitString", function() { return splitString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToFilterMap", function() { return convertToFilterMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToMap", function() { return convertToMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchString", function() { return searchString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmailFormat", function() { return validateEmailFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllData", function() { return getAllData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function copyToClipBoard(Title, contentType) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let val = window.location.href.split('#')[0];
        val += `#/learning-library`;
        const contentTypeQuery = 'ContentType=' + encodeURIComponent(contentType);
        const titleQuery = 'Title=' + encodeURIComponent(Title);
        val += `?${contentTypeQuery}&${titleQuery}`;
        yield navigator.clipboard.writeText(val);
        this.snackBar.open('Link Copied!');
    });
}
function sortItems(itemArr) {
    return itemArr.sort((a, b) => {
        const titleA = a.Title.trim().toLowerCase();
        const titleB = b.Title.trim().toLowerCase();
        if (titleA > titleB) {
            return 1;
        }
        if (titleA < titleB) {
            return -1;
        }
        return 0;
    });
}
function totalDurationList(durationList) {
    const tempList = durationList.filter(e => e);
    const durationArr = tempList.map(e => e.split(':').map(i => parseInt(i.trim(), 10)));
    let totalMinutes = 0;
    let totalHours = 0;
    for (const [hours, minutes] of durationArr) {
        if (minutes) {
            totalMinutes += minutes;
        }
        if (hours) {
            totalHours += hours;
        }
    }
    totalHours += Math.floor(totalMinutes / 60);
    totalMinutes = (totalMinutes % 60);
    return `${totalHours}:${totalMinutes}`;
}
function getDescriptionCount(htmlString) {
    const element = document.createElement('div');
    element.innerHTML = htmlString;
    return element.textContent.length;
}
function getHTMLText(htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
    return tempElement.textContent;
}
function splitString(inputStr, delimiter) {
    return inputStr ? inputStr.split(delimiter).map(e => e.trim()) : [];
}
function convertToFilterMap(listToMap, keyField = 'Id') {
    return listToMap.reduce((returnValue, element) => (Object.assign(Object.assign({}, returnValue), { [element[keyField]]: element })), {});
}
function convertToMap(strArr, listToMap, fieldToCompare = 'Title') {
    return strArr.reduce((returnValue, element) => (Object.assign(Object.assign({}, returnValue), { [element]: listToMap.find(e => e[fieldToCompare] === element) })), {});
}
function searchString(baseString, searchKeyWord) {
    searchKeyWord = searchKeyWord || '';
    if (searchKeyWord.trim() !== '') {
        return baseString.toLowerCase().includes(searchKeyWord.toLowerCase());
    }
    return true;
}
function validateEmailFormat(str) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(str);
}
function getAllData(queryItems) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        let pagedData = yield queryItems.getPaged();
        let returnData = [...pagedData.results];
        while (pagedData.hasNext) {
            pagedData = yield pagedData.getNext();
            returnData = [...returnData, ...pagedData.results];
        }
        return returnData;
    });
}


/***/ }),

/***/ "q/ev":
/*!**************************************************************************************************************!*\
  !*** ./src/app/shared/dialog/course-dialog/course-description-dialog/course-description-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CourseDescriptionDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDescriptionDialogComponent", function() { return CourseDescriptionDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../course-rate-dialog/course-rate-dialog.component */ "qQJB");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var _course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../course-confirmation-dialog/course-confirmation-dialog.component */ "I09t");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog.service */ "WN5f");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CourseDescriptionDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.item.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function CourseDescriptionDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No description available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseDescriptionDialogComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CourseDescriptionDialogComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.launchCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Launch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseDescriptionDialogComponent_ng_container_18_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CourseDescriptionDialogComponent_ng_container_18_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.saveToMyCourse(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Mark as Complete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseDescriptionDialogComponent_ng_container_18_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Status: Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CourseDescriptionDialogComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CourseDescriptionDialogComponent_ng_container_18_button_1_Template, 5, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CourseDescriptionDialogComponent_ng_container_18_button_2_Template, 2, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.item.Status !== ctx_r3.CourseStatus.Completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.item.Status === ctx_r3.CourseStatus.Completed);
} }
function CourseDescriptionDialogComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CourseDescriptionDialogComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.saveToMyCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add to My Courses ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "completed": a0, "pending": a1, "not-started": a2 }; };
class CourseDescriptionDialogComponent {
    constructor(dialogRef, dialogService, dialog, snackBar, userCourseService, data) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userCourseService = userCourseService;
        this.data = data;
        this.CourseStatus = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"];
        this.item = null;
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'description']);
        if (this.data) {
            const { item } = this.data;
            this.item = item;
        }
    }
    launchCourse() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { item } = this;
            if (item) {
                window.open(item.MaterialLink, '_blank');
                const updatedItem = yield this.dialog.open(_course_confirmation_dialog_course_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CourseConfirmationDialogComponent"], { data: { item } }).afterClosed().toPromise();
                if (updatedItem) {
                    const { Record } = updatedItem;
                    if (Record) {
                        let message = 'Added to My Courses!';
                        if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed) {
                            message = 'Marked as Complete!';
                        }
                        this.snackBar.open(message);
                        if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed) {
                            const isRated = yield this.dialog.open(_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
                            if (isRated) {
                                this.snackBar.open('Rated Successfully!');
                            }
                        }
                    }
                    this.closeDialog();
                }
            }
        });
    }
    saveToMyCourse(IsComplete = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { item } = this;
            if (item) {
                const loaderDialog = this.dialogService.loaderDialog();
                const { Record } = item;
                const activeRecord = Record || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourse"]({ CourseId: item.Id });
                if (IsComplete) {
                    activeRecord.Status = src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed;
                }
                const updatedRecord = yield this.userCourseService.save(activeRecord);
                item.Record = updatedRecord;
                this.item = item;
                loaderDialog.close();
                this.closeDialog();
                if (updatedRecord) {
                    let message = 'Added to My Courses!';
                    if (Record.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed) {
                        message = 'Marked as Complete!';
                    }
                    this.snackBar.open(message);
                    if (updatedRecord.Status === src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed) {
                        const isRated = yield this.dialog.open(_course_rate_dialog_course_rate_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CourseRateDialogComponent"], { data: { item } }).afterClosed().toPromise();
                        if (isRated) {
                            this.snackBar.open('Rated Successfully!');
                        }
                    }
                }
            }
        });
    }
    closeDialog() {
        this.dialogRef.close(this.item);
    }
}
CourseDescriptionDialogComponent.ɵfac = function CourseDescriptionDialogComponent_Factory(t) { return new (t || CourseDescriptionDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
CourseDescriptionDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CourseDescriptionDialogComponent, selectors: [["ng-component"]], decls: 20, vars: 14, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [1, "duration-container"], [1, "curriculum-container"], [1, "status-container"], [1, "status-badge", 3, "ngClass"], [1, "description-container"], ["class", "content", 3, "innerHTML", 4, "ngIf"], ["id", "no-description", 4, "ngIf"], [1, "action-container"], ["class", "onecap-btn primary", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "onecap-outline-btn primary", 3, "click", 4, "ngIf"], [1, "content", 3, "innerHTML"], ["id", "no-description"], [1, "onecap-btn", "primary", 3, "click"], ["class", "onecap-btn completed light", 3, "click", 4, "ngIf"], ["class", "onecap-btn completed light", 4, "ngIf"], [1, "onecap-btn", "completed", "light", 3, "click"], [1, "button-wrapper"], [1, "onecap-btn", "completed", "light"], [1, "onecap-outline-btn", "primary", 3, "click"]], template: function CourseDescriptionDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CourseDescriptionDialogComponent_div_14_Template, 1, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CourseDescriptionDialogComponent_div_15_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CourseDescriptionDialogComponent_button_17_Template, 2, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CourseDescriptionDialogComponent_ng_container_18_Template, 3, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CourseDescriptionDialogComponent_button_19_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Duration: ", (ctx.item == null ? null : ctx.item.DurationString) || "No duration", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.CurriculumNames) || "No curriculum", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](10, _c0, ctx.item.Status === ctx.CourseStatus.Completed, ctx.item.Status === ctx.CourseStatus.Pending, ctx.item.Status === ctx.CourseStatus.NotRegistered));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Status: ", (ctx.item == null ? null : ctx.item.Status) || "No Course", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.HasDescription);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.item == null ? null : ctx.item.HasDescription));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx.item == null ? null : ctx.item.IsClassroom));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.item == null ? null : ctx.item.IsClassroom);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.item == null ? null : ctx.item.Status) === ctx.CourseStatus.NotRegistered);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 5px;\n}\n\n.duration-container[_ngcontent-%COMP%] {\n  color: var(--onecaplite-purple);\n  font-size: var(--font-sm);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.description-container[_ngcontent-%COMP%], .action-container[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 25px;\n  justify-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jb3Vyc2UtZGlhbG9nL2NvdXJzZS1kZXNjcmlwdGlvbi1kaWFsb2cvY291cnNlLWRlc2NyaXB0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvY291cnNlLWRpYWxvZy9jb3Vyc2UtZGVzY3JpcHRpb24tZGlhbG9nL2NvdXJzZS1kZXNjcmlwdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWJvZHkge1xyXG4gIGRpc3BsYXkgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICBnYXAgICAgICAgICAgIDogNXB4O1xyXG59XHJcblxyXG4uZHVyYXRpb24tY29udGFpbmVyIHtcclxuICBjb2xvciAgICAgICAgIDogdmFyKC0tb25lY2FwbGl0ZS1wdXJwbGUpO1xyXG4gIGZvbnQtc2l6ZSAgICAgOiB2YXIoLS1mb250LXNtKTtcclxuICB3aGl0ZS1zcGFjZSAgIDogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3cgOiBlbGxpcHNpcztcclxuICBvdmVyZmxvdyAgICAgIDogaGlkZGVuO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tY29udGFpbmVyLCAuYWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXkgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgZ2FwICAgICAgICAgICA6IDI1cHg7XHJcbiAganVzdGlmeS1zZWxmICA6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CourseDescriptionDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './course-description-dialog.component.html',
                styleUrls: ['./course-description-dialog.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_8__["UserCourseService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "qQJB":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/dialog/course-dialog/course-rate-dialog/course-rate-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CourseRateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRateDialogComponent", function() { return CourseRateDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/service/user-course-rating.service */ "zUKS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/star-rating/star-rating.component */ "abAR");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/loader/loader.component */ "HEbm");













function CourseRateDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Rate this course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-star-rating", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Write a review");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "textarea", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CourseRateDialogComponent_ng_container_6_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.itemRatingFrm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showValues", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.itemRatingFrm.invalid);
} }
function CourseRateDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CourseRateDialogComponent {
    constructor(dialogRef, dialogService, userCourseRatingService, data) {
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.userCourseRatingService = userCourseRatingService;
        this.data = data;
        this.item = null;
        this.record = null;
        this.dialogIsLoading = true;
        this.itemRatingFrm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, { validators: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1) }),
            Review: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form']);
        if (this.data) {
            const { item } = this.data;
            this.item = item;
            this.initialLoad();
        }
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogIsLoading = true;
            if (!this.userCourseRatingService.DataIsLoaded) {
                yield this.userCourseRatingService.getAll();
            }
            const tempRecord = this.userCourseRatingService.getRecord(this.item.Id);
            this.record = tempRecord || new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourseRating"]({ CourseId: this.item.Id });
            this.itemRatingFrm.setValue({
                Rating: this.record.Rating,
                Review: this.record.Review,
            });
            this.dialogIsLoading = false;
        });
    }
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Loader = this.dialogService.loaderDialog();
            const { Rating, Review } = this.itemRatingFrm.value;
            const tempRecord = this.record;
            tempRecord.Rating = Rating;
            tempRecord.Review = Review;
            this.record = yield this.userCourseRatingService.save(tempRecord);
            Loader.close();
            this.dialogRef.close(true);
        });
    }
}
CourseRateDialogComponent.ɵfac = function CourseRateDialogComponent_Factory(t) { return new (t || CourseRateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__["UserCourseRatingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CourseRateDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseRateDialogComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [4, "ngIf"], ["class", "dialog-loader", 4, "ngIf"], [1, "content-container"], [1, "rating-form", 3, "formGroup"], [1, "rate-form"], [1, "form-header"], [1, "rate-container"], ["formControlName", "Rating", 3, "showValues"], [1, "review-form"], ["formControlName", "Review"], [1, "action-container"], ["matDialogClose", "", 1, "onecap-btn"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "dialog-loader"]], template: function CourseRateDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CourseRateDialogComponent_ng_container_6_Template, 17, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CourseRateDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__["StarRatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], styles: [".dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-rows: max-content;\n  gap: 5px;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  justify-content: stretch;\n}\n\n.rating-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-auto-flow: row;\n}\n\n.rate-form[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-auto-flow: row;\n  gap: 10px;\n}\n\n.rate-form[_ngcontent-%COMP%]   .rate-container[_ngcontent-%COMP%] {\n  justify-self: center;\n  height: 75px;\n}\n\n.review-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  width: 100%;\n  background-color: rgba(217, 217, 217, 0.25);\n  padding: 10px 15px;\n  border-radius: 5px;\n  box-sizing: border-box;\n}\n\n.review-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  height: 75px;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  gap: 25px;\n  justify-self: center;\n}\n\n.dialog-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jb3Vyc2UtZGlhbG9nL2NvdXJzZS1yYXRlLWRpYWxvZy9jb3Vyc2UtcmF0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2RpYWxvZy9jb3Vyc2UtZGlhbG9nL2NvdXJzZS1yYXRlLWRpYWxvZy9jb3Vyc2UtcmF0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWJvZHkge1xyXG4gIGRpc3BsYXkgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICBnYXAgICAgICAgICAgIDogNXB4O1xyXG59XHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5yYXRpbmctZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG59XHJcblxyXG4ucmF0ZS1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC5yYXRlLWNvbnRhaW5lciB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzVweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctZm9ybSB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93ICAgIDogcm93O1xyXG4gIHdpZHRoICAgICAgICAgICAgIDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICA6IHJnYmEoI2Q5ZDlkOSwgMC4yNSk7XHJcbiAgcGFkZGluZyAgICAgICAgICAgOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XHJcbiAgYm94LXNpemluZyAgICAgICAgOiBib3JkZXItYm94O1xyXG4gIHRleHRhcmVhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogNzVweDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5ICAgICAgIDogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gIGdhcCAgICAgICAgICAgOiAyNXB4O1xyXG4gIGp1c3RpZnktc2VsZiAgOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctbG9hZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseRateDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './course-rate-dialog.component.html',
                styleUrls: ['./course-rate-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }, { type: src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__["UserCourseRatingService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "tnDu":
/*!****************************************!*\
  !*** ./src/app/core/util/date.util.ts ***!
  \****************************************/
/*! exports provided: dateToExportDateString, dateToDateString, getCurrentDateString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToExportDateString", function() { return dateToExportDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToDateString", function() { return dateToDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentDateString", function() { return getCurrentDateString; });
function dateToExportDateString(date) {
    return `${date.toISOString().split('T')[0]}`;
}
function dateToDateString(date) {
    return `${date.toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        localeMatcher: 'lookup',
    })}`;
}
function getCurrentDateString() {
    const date = new Date();
    const MonthNumber = (date.getMonth() + 1).toString().padStart(2, '0');
    const DateNumber = date.getDate().toString().padStart(2, '0');
    const YearNumber = date.getFullYear().toString().padStart(4, '0');
    return `${MonthNumber}${DateNumber}${YearNumber}`;
}


/***/ }),

/***/ "tss9":
/*!************************************************************************!*\
  !*** ./src/app/shared/dialog/loader-dialog/loader-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: LoaderDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderDialogComponent", function() { return LoaderDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/loader/loader.component */ "HEbm");



class LoaderDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderDialogComponent.ɵfac = function LoaderDialogComponent_Factory(t) { return new (t || LoaderDialogComponent)(); };
LoaderDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderDialogComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function LoaderDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
    } }, directives: [_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 175px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9sb2FkZXItZGlhbG9nL2xvYWRlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9kaWFsb2cvbG9hZGVyLWRpYWxvZy9sb2FkZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './loader-dialog.component.html',
                styleUrls: ['./loader-dialog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uwMn":
/*!**************************************************!*\
  !*** ./src/app/core/data/model/account.model.ts ***!
  \**************************************************/
/*! exports provided: Account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Account", function() { return Account; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_model */ "Ka/f");


class Account extends _model__WEBPACK_IMPORTED_MODULE_1__["Person"] {
    constructor(args) {
        super(args);
        this.ProfileImgUrl = '';
        this.IsSiteAdmin = false;
        this._IsSiteOwner = false;
        this._IsAdmin = false;
        this._Groups = [];
        Object.assign(this, args);
    }
    get IsSiteOwner() { return this._IsSiteOwner; }
    get IsAdmin() { return this._IsAdmin; }
    get Groups() { return this._Groups; }
    set Groups(value) {
        this._Groups = value;
        this._IsSiteOwner = value.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Owner);
        this._IsAdmin = value.includes(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["GROUP"].Admin);
    }
    hasGroup(groupName) {
        return this.Groups.includes(groupName);
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/data/service/access-guard.service */ "jeql");
/* harmony import */ var _pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/access-denied/access-denied.component */ "Bwnv");






const routes = [
    { path: '', pathMatch: 'prefix', redirectTo: 'Home' },
    {
        path: 'employee-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-employee-profile-employee-profile-module */ "pages-employee-profile-employee-profile-module").then(__webpack_require__.bind(null, /*! ./pages/employee-profile/employee-profile.module */ "V4Fi")).then(m => m.EmployeeProfileModule),
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() | pages-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-home-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule),
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
    },
    {
        path: 'learning-library',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-learning-library-learning-library-module */ "pages-learning-library-learning-library-module").then(__webpack_require__.bind(null, /*! ./pages/learning-library/learning-library.module */ "cRaI")).then(m => m.LearningLibraryModule),
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
    },
    {
        path: 'my-progress',
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
        children: [
            {
                path: 'role-based-learning',
                loadChildren: () => Promise.all(/*! import() | pages-my-progress-my-progress-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("common"), __webpack_require__.e("pages-my-progress-my-progress-module")]).then(__webpack_require__.bind(null, /*! ./pages/my-progress/my-progress.module */ "zmcL")).then(m => m.MyProgressModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'my-course',
                loadChildren: () => Promise.all(/*! import() | pages-my-course-my-course-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-my-course-my-course-module")]).then(__webpack_require__.bind(null, /*! ./pages/my-course/my-course.module */ "vzDE")).then(m => m.MyCourseModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'my-exam',
                loadChildren: () => Promise.all(/*! import() | pages-my-exam-my-exam-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-my-exam-my-exam-module")]).then(__webpack_require__.bind(null, /*! ./pages/my-exam/my-exam.module */ "FDKd")).then(m => m.MyExamModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
        ]
    },
    {
        path: 'admin',
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
        children: [
            {
                path: 'employee',
                loadChildren: () => Promise.all(/*! import() | pages-admin-admin-employee-admin-employee-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-admin-admin-employee-admin-employee-module")]).then(__webpack_require__.bind(null, /*! ./pages/admin/admin-employee/admin-employee.module */ "LTeQ")).then(m => m.AdminEmployeeModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'role',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-admin-admin-role-admin-role-module */ "pages-admin-admin-role-admin-role-module").then(__webpack_require__.bind(null, /*! ./pages/admin/admin-role/admin-role.module */ "SKQd")).then(m => m.AdminRoleModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'curriculum',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-admin-admin-curriculum-admin-curriculum-module */ "pages-admin-admin-curriculum-admin-curriculum-module").then(__webpack_require__.bind(null, /*! ./pages/admin/admin-curriculum/admin-curriculum.module */ "S8A/")).then(m => m.AdminCurriculumModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'course',
                loadChildren: () => Promise.all(/*! import() | pages-admin-admin-course-admin-course-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-admin-admin-course-admin-course-module")]).then(__webpack_require__.bind(null, /*! ./pages/admin/admin-course/admin-course.module */ "W8sE")).then(m => m.AdminCourseModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'exam',
                loadChildren: () => Promise.all(/*! import() | pages-admin-admin-exam-admin-exam-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-admin-admin-exam-admin-exam-module")]).then(__webpack_require__.bind(null, /*! ./pages/admin/admin-exam/admin-exam.module */ "kM8D")).then(m => m.AdminExamModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'mandatory-training',
                loadChildren: () => Promise.all(/*! import() | pages-admin-admin-mandatory-training-admin-mandatory-training-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-admin-admin-mandatory-training-admin-mandatory-training-module")]).then(__webpack_require__.bind(null, /*! ./pages/admin/admin-mandatory-training/admin-mandatory-training.module */ "fZNN")).then(m => m.AdminMandatoryTrainingModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
        ]
    },
    {
        path: 'admin/employee/employee-progress/:Id',
        loadChildren: () => Promise.all(/*! import() | pages-my-progress-my-progress-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("common"), __webpack_require__.e("pages-my-progress-my-progress-module")]).then(__webpack_require__.bind(null, /*! ./pages/my-progress/my-progress.module */ "zmcL")).then(m => m.MyProgressModule),
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
    },
    {
        path: 'reports',
        canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
        children: [
            {
                path: 'course-based',
                loadChildren: () => Promise.all(/*! import() | pages-reports-course-based-course-based-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-reports-course-based-course-based-module")]).then(__webpack_require__.bind(null, /*! ./pages/reports/course-based/course-based.module */ "q1/4")).then(m => m.CourseBasedModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
            {
                path: 'exam-based',
                loadChildren: () => Promise.all(/*! import() | pages-reports-exam-based-exam-based-module */[__webpack_require__.e("default~pages-admin-admin-course-admin-course-module~pages-admin-admin-employee-admin-employee-modul~90058677"), __webpack_require__.e("pages-reports-exam-based-exam-based-module")]).then(__webpack_require__.bind(null, /*! ./pages/reports/exam-based/exam-based.module */ "o3aA")).then(m => m.ExamBasedModule),
                canActivate: [_core_data_service_access_guard_service__WEBPACK_IMPORTED_MODULE_2__["AccessGuardService"]],
            },
        ]
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-faq-faq-module */ "pages-faq-faq-module").then(__webpack_require__.bind(null, /*! ./pages/faq/faq.module */ "BhQr")).then(m => m.FAQModule),
    },
    { path: 'access-denied', component: _pages_access_denied_access_denied_component__WEBPACK_IMPORTED_MODULE_3__["AccessDeniedComponent"] },
    { path: '**', redirectTo: 'home' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y0HF":
/*!************************************************************************************!*\
  !*** ./src/app/shared/dialog/edit-profile-dialog/edit-profile-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditProfileDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileDialogComponent", function() { return EditProfileDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/user-profile.model */ "Ew+s");
/* harmony import */ var src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/validator.util */ "VFaj");
/* harmony import */ var src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/model/role.model */ "TZOz");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/data/service/role.service */ "AmJm");
/* harmony import */ var src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/user-role.service */ "H12w");
/* harmony import */ var src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/user-profile.service */ "OLgZ");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



























const _c0 = ["stepper"];
function EditProfileDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProfileDialogComponent_ng_container_13_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24);
} }
function EditProfileDialogComponent_ng_container_13_ng_template_11_mat_option_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No user found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
function EditProfileDialogComponent_ng_container_13_ng_template_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", profile_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", profile_r24.DisplayText, " ");
} }
function EditProfileDialogComponent_ng_container_13_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditProfileDialogComponent_ng_container_13_ng_template_11_mat_option_0_Template, 2, 1, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditProfileDialogComponent_ng_container_13_ng_template_11_mat_option_1_Template, 2, 2, "mat-option", 16);
} if (rf & 2) {
    const UserList_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", UserList_r13.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", UserList_r13);
} }
function EditProfileDialogComponent_ng_container_13_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "mat-spinner", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("diameter", 24);
} }
function EditProfileDialogComponent_ng_container_13_ng_template_21_mat_option_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No user found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
} }
function EditProfileDialogComponent_ng_container_13_ng_template_21_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", profile_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", profile_r28.DisplayText, " ");
} }
function EditProfileDialogComponent_ng_container_13_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EditProfileDialogComponent_ng_container_13_ng_template_21_mat_option_0_Template, 2, 1, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditProfileDialogComponent_ng_container_13_ng_template_21_mat_option_1_Template, 2, 2, "mat-option", 16);
} if (rf & 2) {
    const UserList_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", UserList_r13.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", UserList_r13);
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
function EditProfileDialogComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Employee Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-autocomplete", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditProfileDialogComponent_ng_container_13_mat_option_10_Template, 3, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EditProfileDialogComponent_ng_container_13_ng_template_11_Template, 2, 2, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Manager ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-autocomplete", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditProfileDialogComponent_ng_container_13_Template_mat_autocomplete_optionSelected_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.ensureManager($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EditProfileDialogComponent_ng_container_13_mat_option_20_Template, 3, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, EditProfileDialogComponent_ng_container_13_ng_template_21_Template, 2, 2, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, ctx_r2.FormDetails.get("Employee").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx_r2.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.IsSearchingUser)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, ctx_r2.FormDetails.get("Manager").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx_r2.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.IsSearchingUser)("ngIfElse", _r20);
} }
function EditProfileDialogComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r32.Title);
} }
function EditProfileDialogComponent_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r33.Title);
} }
function EditProfileDialogComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r34.Title);
} }
function EditProfileDialogComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProfileDialogComponent_ng_container_63_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No role available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true)("value", null);
} }
function EditProfileDialogComponent_ng_container_63_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r38.Title, " ");
} }
function EditProfileDialogComponent_ng_container_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditProfileDialogComponent_ng_container_63_mat_option_1_Template, 2, 2, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditProfileDialogComponent_ng_container_63_mat_option_2_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const List_r35 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", List_r35.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", List_r35);
} }
function EditProfileDialogComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProfileDialogComponent_div_66_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const item_r39 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.AssignedRole.deselect(item_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const i_r40 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r40 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r39.Title, " ");
} }
function EditProfileDialogComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " No role assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProfileDialogComponent_div_81_ng_container_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No role assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditProfileDialogComponent_div_81_ng_container_30_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r48.Title, " ");
} }
function EditProfileDialogComponent_div_81_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditProfileDialogComponent_div_81_ng_container_30_div_1_Template, 2, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditProfileDialogComponent_div_81_ng_container_30_div_2_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const list_r45 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", list_r45.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r45);
} }
function EditProfileDialogComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Employee Name* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " People Manager* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Org Level 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Org Level 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, EditProfileDialogComponent_div_81_ng_container_30_Template, 3, 2, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Detail_r43 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r43 == null ? null : Detail_r43.Employee == null ? null : Detail_r43.Employee.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r43 == null ? null : Detail_r43.Manager == null ? null : Detail_r43.Manager.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r43 == null ? null : Detail_r43.Country == null ? null : Detail_r43.Country.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r43 == null ? null : Detail_r43.OrgLvl1 == null ? null : Detail_r43.OrgLvl1.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (Detail_r43 == null ? null : Detail_r43.OrgLvl2 == null ? null : Detail_r43.OrgLvl2.Title) || "(Blank)", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.AssignedRole.selected);
} }
const isNotValidOrgLvl = (control) => {
    const OrgLvl1Value = control.value.OrgLvl1;
    const OrgLvl2Value = control.value.OrgLvl2;
    if (OrgLvl1Value !== null && OrgLvl2Value === null) {
        control.get('OrgLvl2').setErrors({ isNotValidServiceLine: true });
        return { isNotValidServiceLine: true };
    }
    return null;
};
class EditProfileDialogComponent {
    constructor(dialog, userService, dropdownService, roleService, userRoleService, userProfileService, accountService, dialogRef) {
        this.dialog = dialog;
        this.userService = userService;
        this.dropdownService = dropdownService;
        this.roleService = roleService;
        this.userRoleService = userRoleService;
        this.userProfileService = userProfileService;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        // Data
        this.ActiveProfile = null;
        this.dialogIsLoading = true;
        this.roleIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](-1),
            Employee: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_6__["isNotString"],
                ]
            }),
            Manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    src_app_core_util_validator_util__WEBPACK_IMPORTED_MODULE_6__["isNotString"],
                ]
            }),
            Country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            OrgLvl1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            OrgLvl2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        }, {
            validators: [isNotValidOrgLvl]
        });
        this.CountryList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.OrgLvl1List = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.OrgLvl2List = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.FilteredOrgLvl2List = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.FormDetails.get('OrgLvl1').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.FormDetails.get('OrgLvl2').setValue(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null)),
            this.OrgLvl2List
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([selectedCategory, List]) => {
            if (selectedCategory === null) {
                return [];
            }
            return List.filter(e => e.OrgLvl1Id === selectedCategory.Id);
        }));
        this.IsSearchingUser = false;
        this.SearchUserList = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.FormDetails.get('Employee').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')), this.FormDetails.get('Manager').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((input) => input ? this.userService.searchUser(input) : Promise.resolve([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.IsSearchingUser = false));
        this.SavedRoles = [];
        this.AssignedRole = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true);
        this.AssignedRole$ = this.AssignedRole.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => { var _a; return ((_a = data === null || data === void 0 ? void 0 : data.source) === null || _a === void 0 ? void 0 : _a.selected) || []; }));
        this.RoleSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.RoleList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.FilteredRoleList$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.AssignedRole$,
            this.RoleList,
            this.RoleSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            SearchFilter = typeof SearchFilter !== 'string' ? '' : SearchFilter;
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_9__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = !SelectedItems.includes(e);
            return [
                isSearched,
                isNotSelected,
            ].every(c => c);
        })));
        this.dialogName = () => `Edit Profile`;
        this.displayFn = (data) => (data === null || data === void 0 ? void 0 : data.DisplayText) || (data === null || data === void 0 ? void 0 : data.Title) || '';
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
        this.initialLoad();
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogIsLoading = true;
            this.roleIsLoading = true;
            const [CountryList, OrgLvl1List, OrgLvl2List,] = yield Promise.all([
                this.dropdownService.getCountry(),
                this.dropdownService.getOrgLvl1(),
                this.dropdownService.getOrgLvl2(),
            ]);
            this.CountryList.next(CountryList);
            this.OrgLvl1List.next(OrgLvl1List);
            this.OrgLvl2List.next(OrgLvl2List);
            yield this.updateDetails();
            this.dialogIsLoading = false;
            const roleList = yield this.roleService.getAll();
            this.RoleList.next(roleList);
            yield this.updateRoles();
            this.roleIsLoading = false;
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.ActiveProfile = yield this.userProfileService.getItemByUserId(this.accountService.account.Id);
            const { Id, User, Manager, CountryId, OrgLvl2Id } = this.ActiveProfile;
            const OrgLvl2Obj = this.OrgLvl2List.value.find(e => e.Id === OrgLvl2Id);
            const OrgLvl1Obj = this.OrgLvl1List.value.find(e => e.Id === (OrgLvl2Obj === null || OrgLvl2Obj === void 0 ? void 0 : OrgLvl2Obj.OrgLvl1Id));
            const CountryObj = this.CountryList.value.find(e => e.Id === CountryId);
            this.FormDetails.patchValue({
                Id,
                Manager,
                Employee: User,
                Country: CountryObj || null,
                OrgLvl1: OrgLvl1Obj || null,
                OrgLvl2: OrgLvl2Obj || null,
            });
            this.FormDetails.get('Employee').disable();
        });
    }
    updateRoles() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { User } = this.ActiveProfile;
            this.SavedRoles = yield this.userRoleService.getRolesByUserId(User.Id);
            const assignedRoles = this.SavedRoles
                .map(e => this.RoleList.value.find(i => i.Id === e.RoleId))
                .filter(e => e);
            this.AssignedRole.select(...assignedRoles);
        });
    }
    ensureManager($event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const managerObj = $event.option.value;
            const loginName = managerObj.Key;
            const loader = this.dialog.loaderDialog();
            const managerData = yield this.userService.ensureUser(loginName);
            this.FormDetails.get('Manager').setValue(managerData);
            loader.close();
        });
    }
    save() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = this.dialog.loaderDialog();
            const { Id, Employee, Manager, Country: CountryValue, OrgLvl1: OrgLvl1Value, OrgLvl2: OrgLvl2Value, } = this.FormDetails.getRawValue();
            const requesData = new src_app_core_data_model_user_profile_model__WEBPACK_IMPORTED_MODULE_5__["UserProfile"]({
                Id,
                User: Employee,
                Manager: Manager,
                CountryId: ((_a = CountryValue) === null || _a === void 0 ? void 0 : _a.Id) || -1,
                OrgLvl2Id: ((_b = OrgLvl2Value) === null || _b === void 0 ? void 0 : _b.Id) || -1,
            });
            yield this.userProfileService.save(requesData);
            const currentRoles = this.AssignedRole.selected;
            const rolesToSave = currentRoles
                .filter(e => !this.SavedRoles.some(i => i.RoleId === e.Id))
                .map(e => new src_app_core_data_model_role_model__WEBPACK_IMPORTED_MODULE_7__["UserRole"]({ RoleId: e.Id, User: Employee }));
            const rolesToRemove = this.SavedRoles.filter(e => !currentRoles.some(i => i.Id === e.RoleId));
            yield Promise.all([
                this.userRoleService.batchSave(rolesToSave),
                this.userRoleService.batchDelete(rolesToRemove),
            ]);
            loader.close();
            this.dialogRef.close(true);
        });
    }
}
EditProfileDialogComponent.ɵfac = function EditProfileDialogComponent_Factory(t) { return new (t || EditProfileDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__["UserRoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_15__["UserProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_16__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"])); };
EditProfileDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditProfileDialogComponent, selectors: [["ng-component"]], viewQuery: function EditProfileDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 91, vars: 47, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Employee Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "hidden"], ["id", "single-form", 3, "formGroup"], [4, "ngIf"], [1, "onecap-input-form", 3, "ngClass"], [1, "select-container"], ["formControlName", "Country", 3, "disableOptionCentering", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "OrgLvl1", 3, "disableOptionCentering", "placeholder"], ["formControlName", "OrgLvl2", 3, "disableOptionCentering", "placeholder"], [1, "stepper-action"], [1, "onecap-link-btn", "accent-2", 3, "disabled", "click"], ["matStepperNext", "", 1, "onecap-btn", "accent-2", 3, "disabled"], [1, "button-wrapper"], ["label", "Assign Roles", 3, "optional"], [1, "stepper-content", 3, "hidden"], [1, "selection-table"], [1, "table-label"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search for a curriculum", 3, "formControl", "matAutocomplete"], ["searchField", ""], ["autoActiveFirstOption", "", 3, "optionSelected"], ["itemSelectionRole", "matAutocomplete"], [1, "table-body"], ["class", "table-row selection", 4, "ngFor", "ngForOf"], ["class", "table-row selection", 4, "ngIf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["label", "Confirm Details"], [1, "stepper-content"], ["class", "result-page", 4, "ngIf"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "stepper-loader"], [1, "required"], ["type", "text", "formControlName", "Employee", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["employeeAuto", "matAutocomplete"], [3, "disabled", 4, "ngIf", "ngIfElse"], ["userOptionList", ""], ["type", "text", "formControlName", "Manager", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["managerAuto", "matAutocomplete"], ["managerOptionList", ""], [3, "disabled"], [1, "autocomplete-loader"], [3, "diameter"], [3, "disabled", 4, "ngIf"], [3, "disabled", "value", 4, "ngIf"], [3, "disabled", "value"], [1, "table-row", "selection"], [1, "col"], [1, "onecap-icon-btn", "error", 3, "click"], [1, "onecap-lbl", "error"], [1, "result-page"], [1, "field-row"], [1, "field-list"], [1, "list"], ["class", "onecap-lbl error", 4, "ngIf"], [4, "ngFor", "ngForOf"]], template: function EditProfileDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProfileDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-horizontal-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, EditProfileDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EditProfileDialogComponent_ng_container_13_Template, 23, 14, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EditProfileDialogComponent_mat_option_22_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Org Level 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, EditProfileDialogComponent_mat_option_31_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Org Level 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, EditProfileDialogComponent_mat_option_40_Template, 2, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProfileDialogComponent_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8); return _r0.selectedIndex = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Skip Assigning Roles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-step", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, EditProfileDialogComponent_div_51_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Role Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-autocomplete", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function EditProfileDialogComponent_Template_mat_autocomplete_optionSelected_61_listener($event) { ctx.AssignedRole.select($event.option.value); return ctx.RoleSearchFilter.setValue(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, EditProfileDialogComponent_ng_container_63_Template, 3, 2, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, EditProfileDialogComponent_div_66_Template, 9, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, EditProfileDialogComponent_div_67_Template, 5, 0, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-step", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, EditProfileDialogComponent_div_81_Template, 31, 6, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditProfileDialogComponent_Template_button_click_88_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("completed", ctx.FormDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 31, ctx.SearchUserList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](41, _c1, ctx.FormDetails.get("Country").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 33, ctx.CountryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](43, _c1, ctx.FormDetails.get("OrgLvl1").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 35, ctx.OrgLvl1List));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](45, _c1, ctx.FormDetails.get("OrgLvl2").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 37, ctx.FilteredOrgLvl2List));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.roleIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.roleIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.RoleSearchFilter)("matAutocomplete", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 39, ctx.FilteredRoleList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.AssignedRole.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AssignedRole.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.FormDetails.getRawValue());
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocomplete"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperPrevious"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_23__["LoaderComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"]], styles: [".result-page[_ngcontent-%COMP%] {\n  margin: 0px 60px 30px;\n  display: grid;\n  gap: 20px;\n}\n.result-page[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.result-page[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 175px 1fr;\n}\n.result-page[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.result-page[_ngcontent-%COMP%]   .field-list[_ngcontent-%COMP%]    > .list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RpYWxvZy9lZGl0LXByb2ZpbGUtZGlhbG9nL2VkaXQtcHJvZmlsZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxxQkFBQTtFQUVBLGFBQUE7RUFDQSxTQUFBO0FBREY7QUFFRTtFQUFRLGlCQUFBO0FBQ1Y7QUFBRTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQUVKO0FBQ0U7RUFDRSxTQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBRU4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGlhbG9nL2VkaXQtcHJvZmlsZS1kaWFsb2cvZWRpdC1wcm9maWxlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmVzdWx0LXBhZ2Uge1xyXG4gIG1hcmdpbjogMHB4IDYwcHggMzBweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDIwcHg7XHJcbiAgbGFiZWwgeyBmb250LXdlaWdodDogYm9sZDsgfVxyXG4gIC5maWVsZC1yb3cge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTc1cHggMWZyO1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLWxpc3Qge1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgJiA+IC5saXN0IHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ2FwOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](EditProfileDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                templateUrl: './edit-profile-dialog.component.html',
                styleUrls: ['./edit-profile-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_12__["DropdownService"] }, { type: src_app_core_data_service_role_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"] }, { type: src_app_core_data_service_user_role_service__WEBPACK_IMPORTED_MODULE_14__["UserRoleService"] }, { type: src_app_core_data_service_user_profile_service__WEBPACK_IMPORTED_MODULE_15__["UserProfileService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_16__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "yh7w":
/*!*****************************************************!*\
  !*** ./src/app/core/data/model/curriculum.model.ts ***!
  \*****************************************************/
/*! exports provided: Curriculum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Curriculum", function() { return Curriculum; });
/* harmony import */ var _util_data_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/data.util */ "n44M");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_model */ "Ka/f");


class Curriculum extends _model__WEBPACK_IMPORTED_MODULE_1__["SPItem"] {
    constructor(args) {
        super();
        this.LearningCategoryName = '';
        this.LearningSubCategoryId = null;
        this.CoursesId = new Set([]);
        this.ExamsId = new Set([]);
        this._DurationList = [];
        this._TotalDuration = '';
        this._TotalDurationString = 'No duration';
        this._CompletionPercentage = 0;
        Object.assign(this, args);
    }
    get DurationList() { return this._DurationList; }
    set DurationList(value) {
        this._DurationList = value.filter(e => e);
        this._TotalDuration = Object(_util_data_util__WEBPACK_IMPORTED_MODULE_0__["totalDurationList"])(this._DurationList);
        if (this._TotalDuration) {
            try {
                const [hrs, min] = this._TotalDuration.split(':').map(e => parseInt(e, 10));
                this._TotalDurationString = `${hrs} hours ${min} mins`;
            }
            catch (_a) {
                console.error(`Invalid Course Duration! [Name: ${this.Title}]`);
                this._TotalDurationString = 'No duration';
            }
        }
        else {
            this._TotalDurationString = 'No duration';
        }
    }
    get TotalDuration() { return this._TotalDuration; }
    get TotalDurationString() { return this._TotalDurationString; }
    get CompletionPercentage() { return this._CompletionPercentage; }
    set CompletionPercentage(value) {
        this._CompletionPercentage = value;
    }
    toSPData() {
        const { Title, Description, Owners, CoursesId, ExamsId, LearningSubCategoryId, Editor, Modified, } = this;
        return {
            Title,
            Description,
            LearningSubCategoryId,
            CoursesId: { results: Array.from(CoursesId) },
            ExamsId: { results: Array.from(ExamsId) },
            OwnersId: { results: Owners.map(e => e.Id) },
            OwnerModifiedById: Editor ? Editor.Id : undefined,
            OwnerModified: Modified,
        };
    }
}


/***/ }),

/***/ "z07D":
/*!**********************************************************!*\
  !*** ./src/app/core/data/service/user-course.service.ts ***!
  \**********************************************************/
/*! exports provided: UserCourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCourseService", function() { return UserCourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_service */ "ECYA");
/* harmony import */ var _model_course_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/course.model */ "7rYE");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/_model */ "Ka/f");







class UserCourseService extends _service__WEBPACK_IMPORTED_MODULE_2__["SPEmployeeItemService"] {
    constructor() {
        super(...arguments);
        this.ObjectColumn = 'CourseId';
        this.ItemRecordColumn = 'CourseId';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_4__["SPList"].USER_COURSE).items
            .expand('User', 'Course')
            .select('*', 'Course/Title', 'User/Id', 'User/Title', 'User/EMail');
    }
    toObject(data) {
        const { Id, User, CourseId, Course, Status, Modified, } = data;
        const UserObj = new _model_model__WEBPACK_IMPORTED_MODULE_5__["Person"]({
            Id: User.Id,
            Title: User.Title,
            EMail: User.EMail,
        });
        return new _model_course_model__WEBPACK_IMPORTED_MODULE_3__["UserCourse"]({
            Id,
            Status,
            CourseId,
            CourseName: Course.Title,
            User: UserObj,
            Modified: new Date(Modified),
        });
    }
    getItemsByRecordValue(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { chunk, batch } = this;
            const batchSize = (chunk * batch);
            let returnArr = [];
            for (let idx = 0; idx < dataArr.length; idx += batchSize) {
                const batchArr = dataArr.slice(idx, (idx + batchSize));
                let queryArr = [];
                for (let chunkIdx = 0; chunkIdx < batchArr.length; chunkIdx += chunk) {
                    const chunkArr = batchArr.slice(chunkIdx, (chunkIdx + chunk));
                    const userIdSet = new Set();
                    const courseIdSet = new Set();
                    for (const e of chunkArr) {
                        userIdSet.add(e.User.Id);
                        courseIdSet.add(e.CourseId);
                    }
                    const userQuery = Array.from(userIdSet).map(e => `UserId eq ${e}`)
                        .join(' or ');
                    const courseQuery = Array.from(courseIdSet).map(e => `${this.ItemRecordColumn} eq ${e}`)
                        .join(' or ');
                    const query = `(${userQuery}) and (${courseQuery})`;
                    queryArr = [...queryArr, query];
                }
                const promiseArr = queryArr.map(e => this.query.filter(e).get().then(data => data.map(i => this.toObject(i))));
                const tempData = (yield Promise.all(promiseArr)).reduce((returnVal, currentVal) => [...returnVal, ...currentVal], []);
                returnArr = [...returnArr, ...tempData];
            }
            return returnArr;
        });
    }
    batchUploadOfAttendance(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const itemsArr = yield this.getItemsByRecordValue(dataArr);
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => {
                    const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i.CourseId === e.CourseId);
                    if (FoundItem) {
                        e.Id = FoundItem.Id;
                    }
                    return this.save(e).then(res => ({
                        status: e.Id !== -1 ? _service__WEBPACK_IMPORTED_MODULE_2__["itemStatus"].UPDATED : _service__WEBPACK_IMPORTED_MODULE_2__["itemStatus"].CREATED,
                        data: e
                    }));
                });
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
    batchUploadRegistration(dataArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let returnArr = [];
            const itemsArr = yield this.getItemsByRecordValue(dataArr);
            const { chunk } = this;
            for (let idx = 0; idx < dataArr.length; idx += chunk) {
                const chunkArr = dataArr.slice(idx, (idx + chunk)).map((e) => {
                    const FoundItem = itemsArr.find(i => i.User.Id === e.User.Id && i.CourseId === e.CourseId);
                    if (FoundItem) {
                        return Promise.resolve({
                            status: _service__WEBPACK_IMPORTED_MODULE_2__["itemStatus"].CANCELED,
                            data: FoundItem,
                        });
                    }
                    return this.save(e).then(res => ({
                        status: e.Id !== -1 ? _service__WEBPACK_IMPORTED_MODULE_2__["itemStatus"].UPDATED : _service__WEBPACK_IMPORTED_MODULE_2__["itemStatus"].CREATED,
                        data: e
                    }));
                });
                const tempArr = yield Promise.all(chunkArr);
                returnArr = [...returnArr, ...tempArr];
            }
            return returnArr;
        });
    }
}
UserCourseService.ɵfac = function UserCourseService_Factory(t) { return ɵUserCourseService_BaseFactory(t || UserCourseService); };
UserCourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserCourseService, factory: UserCourseService.ɵfac, providedIn: 'root' });
const ɵUserCourseService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](UserCourseService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserCourseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUKS":
/*!*****************************************************************!*\
  !*** ./src/app/core/data/service/user-course-rating.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserCourseRatingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCourseRatingService", function() { return UserCourseRatingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_course_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/course.model */ "7rYE");
/* harmony import */ var _model_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/_model */ "Ka/f");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_service */ "ECYA");






class UserCourseRatingService extends _service__WEBPACK_IMPORTED_MODULE_4__["SPEmployeeItemService"] {
    constructor() {
        super(...arguments);
        this.ObjectColumn = 'CourseId';
        this.ItemRecordColumn = 'CourseId';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__["SPList"].USER_COURSE_RATING).items
            .expand('User', 'Course')
            .select('*', 'Course/Title', 'User/Id', 'User/Title', 'User/EMail');
    }
    toObject(data) {
        const { User, CourseId, Rating, Review, Modified, } = data;
        const { Id, Title, EMail } = User;
        const UserObj = new _model_model__WEBPACK_IMPORTED_MODULE_3__["Person"]({
            Id,
            Title,
            EMail
        });
        return new _model_course_model__WEBPACK_IMPORTED_MODULE_2__["UserCourseRating"]({
            Id: data.Id,
            User: UserObj,
            Modified: new Date(Modified),
            CourseId,
            Rating,
            Review,
        });
    }
}
UserCourseRatingService.ɵfac = function UserCourseRatingService_Factory(t) { return ɵUserCourseRatingService_BaseFactory(t || UserCourseRatingService); };
UserCourseRatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserCourseRatingService, factory: UserCourseRatingService.ɵfac, providedIn: 'root' });
const ɵUserCourseRatingService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](UserCourseRatingService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserCourseRatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






_pnp_sp__WEBPACK_IMPORTED_MODULE_3__["sp"].setup({
    sp: { baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SPUrl }
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3HJw":
/*!*****************************************************************!*\
  !*** ./src/app/core/data/service/mandatory-training.service.ts ***!
  \*****************************************************************/
/*! exports provided: MandatoryTrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandatoryTrainingService", function() { return MandatoryTrainingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/mandatory-training.model */ "WIjr");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_service */ "ECYA");





class MandatoryTrainingService extends _service__WEBPACK_IMPORTED_MODULE_3__["SPModelService"] {
    constructor() {
        super(...arguments);
        this.serviceName = 'Mandatory Training Service';
    }
    get query() {
        return this.sp.web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_1__["SPList"].MANDATORY_TRAINING).items
            .expand('Courses', 'Exams')
            .select('*', 'Courses/Title', 'Exams/Title')
            .orderBy('DueDate', false);
    }
    toObject(data) {
        const { Id, CoursesId, Courses, ExamsId, Exams, DueDate, FinalDate, NotificationSubject, NotificationMessage, } = data;
        return new _model_mandatory_training_model__WEBPACK_IMPORTED_MODULE_2__["MandatoryTraining"]({
            Id,
            CoursesId: new Set(CoursesId),
            CourseNames: Courses.map(e => e.Title),
            ExamsId: new Set(ExamsId),
            ExamNames: Exams.map(e => e.Title),
            DueDate: DueDate ? new Date(DueDate) : null,
            FinalDate: FinalDate ? new Date(FinalDate) : null,
            NotificationSubject,
            NotificationMessage,
        });
    }
}
MandatoryTrainingService.ɵfac = function MandatoryTrainingService_Factory(t) { return ɵMandatoryTrainingService_BaseFactory(t || MandatoryTrainingService); };
MandatoryTrainingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MandatoryTrainingService, factory: MandatoryTrainingService.ɵfac, providedIn: 'root' });
const ɵMandatoryTrainingService_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MandatoryTrainingService);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MandatoryTrainingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "51mG":
/*!*****************************************************!*\
  !*** ./src/app/core/data/service/others.service.ts ***!
  \*****************************************************/
/*! exports provided: OthersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersService", function() { return OthersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_lists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/lists */ "J7sA");
/* harmony import */ var _pnp_sp_items__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/items */ "lYrR");
/* harmony import */ var src_constant_list_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constant/list.constant */ "eDEE");
/* harmony import */ var _model_others_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/others.model */ "LPRT");









class OthersService {
    getAnnouncements() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_6__["SPList"].ANNOUNCEMENT).items();
            return tempList.map(e => {
                const { Id, Title, Description, Link, BackgroundImage } = e;
                return new _model_others_model__WEBPACK_IMPORTED_MODULE_7__["Announcement"]({
                    Id,
                    Title,
                    Description,
                    Link,
                    BackgroundImageUrl: BackgroundImage,
                });
            });
        });
    }
    getFeaturedCurriculum() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempList = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.lists.getByTitle(src_constant_list_constant__WEBPACK_IMPORTED_MODULE_6__["SPList"].FEATURED_CURRICULUM).items();
            return tempList.map(e => {
                const { Id, Title, CurriculumId } = e;
                return new _model_others_model__WEBPACK_IMPORTED_MODULE_7__["FeaturedCurriculum"]({
                    Id,
                    Title,
                    CurriculumId,
                });
            });
        });
    }
}
OthersService.ɵfac = function OthersService_Factory(t) { return new (t || OthersService)(); };
OthersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OthersService, factory: OthersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OthersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "LPRT":
/*!*************************************************!*\
  !*** ./src/app/core/data/model/others.model.ts ***!
  \*************************************************/
/*! exports provided: Announcement, FeaturedCurriculum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Announcement", function() { return Announcement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedCurriculum", function() { return FeaturedCurriculum; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_model */ "Ka/f");

class Announcement extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.Description = '';
        this.Link = '';
        this.BackgroundImageUrl = '';
        Object.assign(this, args);
    }
}
class FeaturedCurriculum extends _model__WEBPACK_IMPORTED_MODULE_0__["SPModel"] {
    constructor(args) {
        super();
        this.CurriculumId = -1;
        Object.assign(this, args);
    }
}


/***/ }),

/***/ "WIjr":
/*!*************************************************************!*\
  !*** ./src/app/core/data/model/mandatory-training.model.ts ***!
  \*************************************************************/
/*! exports provided: MandatoryTrainingStatus, MandatoryTraining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandatoryTrainingStatus", function() { return MandatoryTrainingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MandatoryTraining", function() { return MandatoryTraining; });
/* harmony import */ var _util_date_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/date.util */ "tnDu");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_model */ "Ka/f");


const DateNow = new Date();
DateNow.setHours(0, 0, 0, 0);
var MandatoryTrainingStatus;
(function (MandatoryTrainingStatus) {
    MandatoryTrainingStatus["ACTIVE"] = "Active";
    MandatoryTrainingStatus["EXPIRED"] = "Expired";
})(MandatoryTrainingStatus || (MandatoryTrainingStatus = {}));
class MandatoryTraining extends _model__WEBPACK_IMPORTED_MODULE_1__["SPModel"] {
    constructor(args) {
        super();
        this.CoursesId = new Set([]);
        this.CourseNames = [];
        this.ExamsId = new Set([]);
        this.ExamNames = [];
        this.NotificationSubject = '';
        this.NotificationMessage = '';
        this.Editor = null;
        this._DueDate = null;
        this._DateDueDate = '';
        this._Status = MandatoryTrainingStatus.EXPIRED;
        this._FinalDate = null;
        this._DateFinalDate = '';
        Object.assign(this, args);
    }
    get DueDate() { return this._DueDate; }
    set DueDate(value) {
        this._DueDate = value;
        this._DateDueDate = Object(_util_date_util__WEBPACK_IMPORTED_MODULE_0__["dateToDateString"])(value);
        const newDueDate = new Date(value.toDateString());
        newDueDate.setDate(value.getDate() + 1);
        this._Status = (DateNow.getTime() > newDueDate.getTime()) ? MandatoryTrainingStatus.EXPIRED : MandatoryTrainingStatus.ACTIVE;
    }
    get DateDueDate() { return this._DateDueDate; }
    get Status() { return this._Status; }
    get FinalDate() { return this._FinalDate; }
    set FinalDate(value) {
        this._FinalDate = value;
        this._DateFinalDate = value ? Object(_util_date_util__WEBPACK_IMPORTED_MODULE_0__["dateToDateString"])(value) : '';
    }
    get DateFinalDate() { return this._DateFinalDate; }
    toSPData() {
        const { CoursesId, ExamsId, DueDate, FinalDate, NotificationSubject, NotificationMessage, } = this;
        return {
            CoursesId: { results: Array.from(CoursesId) },
            ExamsId: { results: Array.from(ExamsId) },
            DueDate: DueDate.toISOString().split('T')[0],
            FinalDate: FinalDate.toISOString().split('T')[0],
            NotificationSubject,
            NotificationMessage,
        };
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map
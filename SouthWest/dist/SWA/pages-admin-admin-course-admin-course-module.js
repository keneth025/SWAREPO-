(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-course-admin-course-module"],{

/***/ "0MvI":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/index.js ***!
  \***********************************************/
/*! exports provided: Folder, Folders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "LZ64");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "vttn");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "ymW/");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "4tXH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Folder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Folders"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "0YVK":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/files/index.js ***!
  \*********************************************/
/*! exports provided: File, Files, CheckinType, MoveOperations, TemplateFileType, Version, Versions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.js */ "JFDc");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.js */ "pGs8");
/* harmony import */ var _web_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web.js */ "SPHc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types.js */ "qfcF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["File"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Files", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Files"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckinType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["CheckinType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoveOperations", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["MoveOperations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateFileType", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["TemplateFileType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Versions", function() { return _types_js__WEBPACK_IMPORTED_MODULE_3__["Versions"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "4tXH":
/*!***********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/types.js ***!
  \***********************************************/
/*! exports provided: _Folders, Folders, _Folder, Folder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folders", function() { return _Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folders", function() { return Folders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Folder", function() { return _Folder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Folder", function() { return Folder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "LVfT");
/* harmony import */ var _pnp_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pnp/common */ "zqEK");
/* harmony import */ var _sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sharepointqueryable.js */ "E6kk");
/* harmony import */ var _odata_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../odata.js */ "5dQz");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../decorators.js */ "hMpi");
/* harmony import */ var _operations_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../operations.js */ "UK2s");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "q1Lp");
/* harmony import */ var _utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/extractweburl.js */ "tSEd");
/* harmony import */ var _telemetry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../telemetry.js */ "h3gW");
/* harmony import */ var _utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/toResourcePath.js */ "t8hP");












var _Folders = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Folders, _super);
    function _Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    _Folders.prototype.getByName = function (name) {
        return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Folder(this).concat("('" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(name) + "')"), "fs.getByName");
    };
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    _Folders.prototype.add = function (url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folders, "add('" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(url) + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    _Folders.prototype.addUsingPath = function (serverRelativeUrl, overwrite) {
        if (overwrite === void 0) { overwrite = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folders, "addUsingPath(DecodedUrl='" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(serverRelativeUrl) + "',overwrite=" + overwrite + ")"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: Folder(Object(_utils_extractweburl_js__WEBPACK_IMPORTED_MODULE_9__["extractWebUrl"])(this.toUrl()), "_api/web/getFolderByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_8__["escapeQueryStrValue"])(serverRelativeUrl) + "')"),
                            }];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("fs.add")
    ], _Folders.prototype, "add", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("fs.addUsingPath")
    ], _Folders.prototype, "addUsingPath", null);
    _Folders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_decorators_js__WEBPACK_IMPORTED_MODULE_6__["defaultPath"])("folders")
    ], _Folders);
    return _Folders;
}(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["_SharePointQueryableCollection"]));

var Folders = Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Folders);
var _Folder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(_Folder, _super);
    function _Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["deleteableWithETag"])("f");
        /**
         * Updates folder's properties
         * @param props Folder's properties to update
         */
        _this.update = _this._update("SP.Folder", function (data) { return ({ data: data, folder: _this }); });
        return _this;
    }
    Object.defineProperty(_Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableCollection"])(this, "contentTypeOrder"), "f.contentTypeOrder");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return Folders(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"])(this, "listItemAllFields"), "f.listItemAllFields");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Folder(this, "parentFolder"), "f.parentFolder");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"])(this, "properties"), "f.properties");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryable"])(this, "serverRelativeUrl"), "f.serverRelativeUrl");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return _telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"].configure(Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableCollection"])(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Folder.prototype.recycle = function () {
        return Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folder, "recycle"));
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var q;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (_a = this.listItemAllFields).select.apply(_a, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(selects), false))()];
                    case 1:
                        q = _b.sent();
                        if (Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["hOP"])(q, "odata.null") && q["odata.null"]) {
                            throw Error("No associated item was found for this folder. It may be the root folder, which does not have an item.");
                        }
                        return [2 /*return*/, Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["assign"])(Object(_items_types_js__WEBPACK_IMPORTED_MODULE_4__["Item"])(Object(_odata_js__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(q)).configureFrom(this), q)];
                }
            });
        });
    };
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.moveTo = function (destUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlInfo, uri;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(urlInfo.ParentWeb.Url, "/_api/SP.MoveCopyUtil.MoveFolder()").configureFrom(this), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl),
                                srcUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.moveByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlInfo, uri;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(uri.origin, "/_api/SP.MoveCopyUtil.MoveFolderByPath()").configureFrom(this), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destPath: Object(_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl)),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.copyTo = function (destUrl) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlInfo, uri;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolder()").configureFrom(this), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl),
                                srcUrl: Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.copyByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlInfo, uri;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolderByPath()").configureFrom(this), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({
                                destPath: Object(_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["isUrlAbsolute"])(destUrl) ? destUrl : Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, destUrl)),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: Object(_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(Object(_pnp_common__WEBPACK_IMPORTED_MODULE_1__["combine"])(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    _Folder.prototype.deleteWithParams = function (parameters) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folder, "DeleteWithParameters"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({ parameters: parameters }))];
            });
        });
    };
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    _Folder.prototype.addSubFolderUsingPath = function (leafPath) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_operations_js__WEBPACK_IMPORTED_MODULE_7__["spPost"])(this.clone(Folder, "AddSubFolderUsingPath"), Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_5__["body"])({ leafPath: Object(_utils_toResourcePath_js__WEBPACK_IMPORTED_MODULE_11__["toResourcePath"])(leafPath) }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.folders.getByName(leafPath)];
                }
            });
        });
    };
    /**
     * Gets the parent information for this folder's list and web
     */
    _Folder.prototype.getParentInfos = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var urlInfo;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")()];
                    case 1:
                        urlInfo = _a.sent();
                        return [2 /*return*/, {
                                Folder: {
                                    ServerRelativeUrl: urlInfo.ServerRelativeUrl,
                                },
                                ParentList: {
                                    Id: urlInfo.ListItemAllFields.ParentList.Id,
                                    RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                                    RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                                    RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
                                },
                                ParentWeb: {
                                    Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                                    ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                                    ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                                    Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Gets the shareable item associated with this folder
     */
    _Folder.prototype.getShareable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var d, shareable;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["SharePointQueryableInstance"], "listItemAllFields", false).select("odata.id")()];
                    case 1:
                        d = _a.sent();
                        shareable = Object(_items_types_js__WEBPACK_IMPORTED_MODULE_4__["Item"])(Object(_odata_js__WEBPACK_IMPORTED_MODULE_3__["odataUrlFrom"])(d)).configureFrom(this);
                        // we need to handle batching
                        if (this.hasBatch) {
                            shareable = shareable.inBatch(this.batch);
                        }
                        return [2 /*return*/, shareable];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.recycle")
    ], _Folder.prototype, "recycle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.getItem")
    ], _Folder.prototype, "getItem", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.moveTo")
    ], _Folder.prototype, "moveTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.moveByPath")
    ], _Folder.prototype, "moveByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.copyTo")
    ], _Folder.prototype, "copyTo", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.copyByPath")
    ], _Folder.prototype, "copyByPath", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.del-params")
    ], _Folder.prototype, "deleteWithParams", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_telemetry_js__WEBPACK_IMPORTED_MODULE_10__["tag"])("f.getShareable")
    ], _Folder.prototype, "getShareable", null);
    return _Folder;
}(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["_SharePointQueryableInstance"]));

var Folder = Object(_sharepointqueryable_js__WEBPACK_IMPORTED_MODULE_2__["spInvokableFactory"])(_Folder);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "8y6V":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/dialog/edit-course-dialog/edit-course-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditCourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseDialogComponent", function() { return EditCourseDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "+z1p");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/model/curriculum.model */ "yh7w");
/* harmony import */ var src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/model/_model */ "Ka/f");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/data/service/dropdown.service */ "+eQ9");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/data/service/curriculum.service */ "+kR4");
/* harmony import */ var src_app_core_data_service_file_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/data/service/file.service */ "ESor");
/* harmony import */ var src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/core/data/service/account.service */ "LFci");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
































const _c0 = ["stepper"];
function EditCourseDialogComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "invalid": a0 }; };
function EditCourseDialogComponent_div_13_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Upload File");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_div_13_div_17_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); return _r23.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EditCourseDialogComponent_div_13_div_17_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.courseMaterialUpdated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " or files with size greater than 250 MB, please contact ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " for assistance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const UploadFile_r22 = ctx.ngIf;
    const Material_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, UploadFile_r22.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", UploadFile_r22.value ? UploadFile_r22.value.name : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", Material_r18.get("SelectedOption").value !== ctx_r19.CourseMaterialOptions.Upload);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "mailto:" + ctx_r19.ContactEmail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.ContactEmail, " ");
} }
function EditCourseDialogComponent_div_13_div_18_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r30);
} }
function EditCourseDialogComponent_div_13_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Folder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, EditCourseDialogComponent_div_13_div_18_mat_option_9_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SelectedFolder_r28 = ctx.ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, SelectedFolder_r28.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 6, ctx_r20.FolderList));
} }
function EditCourseDialogComponent_div_13_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Download current course material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r21.CourseMaterialLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function EditCourseDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Course Material ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-radio-group", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mat-radio-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Input Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "mat-radio-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EditCourseDialogComponent_div_13_div_17_Template, 16, 7, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EditCourseDialogComponent_div_13_div_18_Template, 11, 10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "mat-radio-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Instructor-led Course (no training available on site) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, EditCourseDialogComponent_div_13_a_22_Template, 2, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Material_r18 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, Material_r18.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.CourseMaterialOptions.Link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, Material_r18.get("Link").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.CourseMaterialOptions.Upload);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", Material_r18.get("UploadFile"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", Material_r18.get("SelectedFolder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.CourseMaterialOptions.IstructorLed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.HasCourseMaterial);
} }
function EditCourseDialogComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r31.Title);
} }
function EditCourseDialogComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r32.Title);
} }
function EditCourseDialogComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_div_56_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const i_r34 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.removeOwner(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const owner_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](owner_r33.Title);
} }
function EditCourseDialogComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please use HH:MM format. Maximum of 99hours and 59minutes. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_97_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No curriculum available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_97_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_div_97_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const item_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r41.AssignedCurriculum.select(item_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r40.Title, " ");
} }
function EditCourseDialogComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Curriculum Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EditCourseDialogComponent_div_97_div_5_Template, 4, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditCourseDialogComponent_div_97_div_6_Template, 6, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r37 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", list_r37.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", list_r37);
} }
function EditCourseDialogComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " No curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_div_106_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const item_r43 = ctx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.AssignedCurriculum.deselect(item_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !item_r43.IsOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r43.Title, " ");
} }
function EditCourseDialogComponent_div_119_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "No description available.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_119_div_14_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Instructor-led Course (no training available on site) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function EditCourseDialogComponent_div_119_div_14_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const Material_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Material_r52.Link, " ");
} }
function EditCourseDialogComponent_div_119_div_14_div_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const Material_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", Material_r52.UploadFile.name, " ");
} }
const _c2 = function (a0) { return { "course-link": a0 }; };
function EditCourseDialogComponent_div_119_div_14_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditCourseDialogComponent_div_119_div_14_div_3_ng_container_1_Template, 2, 0, "ng-container", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditCourseDialogComponent_div_119_div_14_div_3_ng_container_2_Template, 2, 1, "ng-container", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditCourseDialogComponent_div_119_div_14_div_3_ng_container_3_Template, 2, 1, "ng-container", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const SelectedOption_r54 = ctx.ngIf;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", SelectedOption_r54)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, SelectedOption_r54 === ctx_r53.CourseMaterialOptions.Link));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r53.CourseMaterialOptions.IstructorLed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r53.CourseMaterialOptions.Link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r53.CourseMaterialOptions.Upload);
} }
function EditCourseDialogComponent_div_119_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Course Material*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EditCourseDialogComponent_div_119_div_14_div_3_Template, 4, 7, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const Material_r52 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", Material_r52.SelectedOption);
} }
function EditCourseDialogComponent_div_119_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r60.Title, " ");
} }
function EditCourseDialogComponent_div_119_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No curriculum assigned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditCourseDialogComponent_div_119_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r61.Title, " ");
} }
function EditCourseDialogComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Course Name*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Course Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditCourseDialogComponent_div_119_div_12_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EditCourseDialogComponent_div_119_div_14_Template, 4, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Course Owner/s*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, EditCourseDialogComponent_div_119_div_19_Template, 2, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Course Duration*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Sub-Category*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "section", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Assigned Curriculum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, EditCourseDialogComponent_div_119_div_43_Template, 2, 0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, EditCourseDialogComponent_div_119_div_44_Template, 2, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r46 = ctx.ngIf;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx_r12.FormDetails.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.Title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", details_r46.Description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, ctx_r12.DescriptionCount) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r12.FormDetails.get("Material").valid && details_r46.Material);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", details_r46.Owners);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.Duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.LearningCategory ? details_r46.LearningCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r46.LearningSubCategory ? details_r46.LearningSubCategory.Title : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.AssignedCurriculum.hasValue());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.AssignedCurriculum.selected);
} }
function EditCourseDialogComponent_ng_template_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r62 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r62 + 1, " ");
} }
function EditCourseDialogComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const index_r64 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", index_r64 + 1, " ");
} }
function EditCourseDialogComponent_mat_option_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-spinner", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("diameter", 24);
} }
function EditCourseDialogComponent_ng_container_133_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", profile_r68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", profile_r68.DisplayText, " ");
} }
function EditCourseDialogComponent_ng_container_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditCourseDialogComponent_ng_container_133_mat_option_1_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const searchedUsers_r66 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", searchedUsers_r66);
} }
var CourseMaterialOption;
(function (CourseMaterialOption) {
    CourseMaterialOption[CourseMaterialOption["Link"] = -1] = "Link";
    CourseMaterialOption[CourseMaterialOption["IstructorLed"] = 1] = "IstructorLed";
    CourseMaterialOption[CourseMaterialOption["Upload"] = 2] = "Upload";
})(CourseMaterialOption || (CourseMaterialOption = {}));
const URLValidation = (control) => {
    if (control.value) {
        try {
            const testUrl = new URL(control.value);
            return null;
        }
        catch (e) {
            return {
                message: 'Enter valid url.',
                data: control.value
            };
        }
    }
    return null;
};
const DurationValidation = (control) => {
    const { value } = control;
    const regExp = /\d{2}:\d{2}/;
    const validPattern = regExp.test(value);
    if (validPattern) {
        const [hour, minutes] = value.split(':').map(e => parseInt(e, 10));
        if (hour < 100 && minutes < 60) {
            return null;
        }
    }
    return {
        message: 'Please use HH:MM format. Maximum of 99hours and 59minutes.',
        data: value
    };
};
const CourseMaterialValidation = (child) => {
    const control = child.parent;
    if (!control) {
        return null;
    }
    const SelectedOption = child;
    const Link = control.get('Link');
    const SelectedFolder = control.get('SelectedFolder');
    const UploadFile = control.get('UploadFile');
    Link.clearValidators();
    SelectedFolder.clearValidators();
    UploadFile.clearValidators();
    Link.disable({ onlySelf: true });
    SelectedFolder.disable({ onlySelf: true });
    UploadFile.disable({ onlySelf: true });
    switch (SelectedOption.value) {
        case CourseMaterialOption.Link:
            Link.enable({ onlySelf: true });
            Link.setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                URLValidation
            ]);
            break;
        case CourseMaterialOption.Upload:
            SelectedFolder.enable({ onlySelf: true });
            UploadFile.enable({ onlySelf: true });
            SelectedFolder.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            UploadFile.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            break;
    }
    Link.updateValueAndValidity({ onlySelf: true });
    SelectedFolder.updateValueAndValidity({ onlySelf: true });
    UploadFile.updateValueAndValidity({ onlySelf: true });
    return null;
};
class EditCourseDialogComponent {
    constructor(dialog, dropdownService, userService, courseService, curriculumService, fileService, accountService, dialogRef, data) {
        this.dialog = dialog;
        this.dropdownService = dropdownService;
        this.userService = userService;
        this.courseService = courseService;
        this.curriculumService = curriculumService;
        this.fileService = fileService;
        this.accountService = accountService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.OneCapDownloadUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SiteURL}_layouts/download.aspx?SourceUrl=`;
        this.HasCourseMaterial = false;
        this.CourseMaterialLink = '';
        this.CourseMaterialOptions = CourseMaterialOption;
        this.ContactEmail = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SupportMail;
        this.dialogTitle = 'Create';
        this.editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorConfig = {
            toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        };
        // Data
        this.dialogIsLoading = true;
        this.curriculumIsLoading = true;
        this.FormDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            Id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](-1),
            Title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            Owners: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([], {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            Duration: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    DurationValidation,
                ]
            }),
            Material: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
                SelectedOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](CourseMaterialOption.Link, {
                    validators: [CourseMaterialValidation]
                }),
                Link: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
                SelectedFolder: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
                UploadFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            }),
            LearningCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            LearningSubCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
        });
        this.DescriptionCount = this.FormDetails.get('Description').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["getDescriptionCount"])(data)));
        this.InitialAssignedCurriculum = [];
        this.AssignedCurriculum = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_12__["SelectionModel"](true);
        this.CurriculumSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.CurriculumList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredCurriculumList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.AssignedCurriculum.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null)),
            this.CurriculumList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
            this.CurriculumSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([SelectedItems, List, SearchFilter]) => List.filter((e) => {
            const isSearched = Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_11__["searchString"])(e.Title, SearchFilter);
            const isNotSelected = SelectedItems ? !SelectedItems.source.isSelected(e) : true;
            return [
                isSearched,
                isNotSelected,
                e.IsOwner,
            ].every(c => c);
        })));
        this.LearningCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.LearningSubCategoryList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredLearningSubCategoryList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.FormDetails.get('LearningCategory').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.FormDetails.get('LearningSubCategory').setValue(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null)),
            this.LearningSubCategoryList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([selectedCategory, List]) => {
            if (selectedCategory === null) {
                return [];
            }
            return List.filter(e => e.CategoryId === selectedCategory.Id);
        }));
        this.FolderList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.OwnersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.IsSearchingUser = false;
        this.SearchUserList = this.OwnersControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.IsSearchingUser = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(750), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((input) => typeof input === 'string' ? input : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((input) => this.userService.searchUser(input)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.IsSearchingUser = false));
        this.dialogName = () => `${this.dialogTitle} Course`;
        this.displayFn = (data) => data ? data.DisplayText : '';
    }
    courseMaterialUpdated($event) {
        this.FormDetails.get('Material').get('UploadFile').setValue($event.target.files[0]);
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
            const [FolderList, LearningCategoryList, LearningSubCategoryList] = yield Promise.all([
                this.fileService.getCourseMaterialFolders(),
                this.dropdownService.getLearningCategory(),
                this.dropdownService.getLearningSubCategory()
            ]);
            this.FolderList.next(FolderList);
            this.LearningCategoryList.next(LearningCategoryList);
            this.LearningSubCategoryList.next(LearningSubCategoryList);
            yield this.updateDetails();
            this.dialogIsLoading = false;
            this.curriculumIsLoading = true;
            const CurriculumList = yield this.curriculumService.getAll();
            this.CurriculumList.next(CurriculumList);
            this.updateAssignedCurriculum();
            this.curriculumIsLoading = false;
        });
    }
    updateDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.data) {
                const { Id, Title, Description, LearningSubCategoryId, Tags, Owners, IsClassroom, Duration, MaterialLink } = this.data.course;
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
                    Description: Description || '',
                    Tags,
                    Owners,
                    Duration,
                    Material: {
                        SelectedOption: IsClassroom ? CourseMaterialOption.IstructorLed : CourseMaterialOption.Link,
                        Link: MaterialLink
                    },
                    LearningCategory: LearningCategoryObj,
                    LearningSubCategory: LearningSubCategoryObj,
                });
                if (!IsClassroom && MaterialLink.indexOf(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].SiteURL) === 0) {
                    this.HasCourseMaterial = true;
                    this.CourseMaterialLink = this.OneCapDownloadUrl + MaterialLink;
                }
            }
            else {
                const profile = yield this.userService.ensureUser(this.accountService.account.LoginName);
                this.FormDetails.patchValue({ Owners: [profile] });
            }
        });
    }
    updateAssignedCurriculum() {
        if (this.data) {
            const { Id } = this.data.course;
            this.InitialAssignedCurriculum = this.CurriculumList.value.filter(e => e.CoursesId.has(Id));
            this.AssignedCurriculum.select(...this.InitialAssignedCurriculum);
        }
    }
    validateName(skip = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { Id, Title, Material } = this.FormDetails.value;
            if (Material.SelectedOption === CourseMaterialOption.Upload) {
                const FileToCheck = Material.UploadFile;
                if (FileToCheck.size > 262144000) {
                    this.dialog.alertDialog(this.dialogName(), `
            The file size exceeds the 250 MB limit.
            Please contact <a href="mailto:${this.ContactEmail}">${this.ContactEmail}</a> for assistance.
          `);
                    return;
                }
            }
            const loaderDialog = this.dialog.loaderDialog();
            const validated = yield this.courseService.validateTitle(Title, Id);
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
            try {
                const details = this.FormDetails.value;
                const { Id, Title, Description, Tags, Owners, Duration, Material, LearningSubCategory: LearningSubCategoryObj } = details;
                let MaterialLink = '';
                let IsClassroom = false;
                switch (Material.SelectedOption) {
                    case CourseMaterialOption.IstructorLed:
                        IsClassroom = true;
                        break;
                    case CourseMaterialOption.Link:
                        MaterialLink = Material.Link;
                        break;
                    case CourseMaterialOption.Upload:
                        const res = yield this.fileService
                            .uploadCourseMaterial(Material.SelectedFolder, Material.UploadFile);
                        console.log('res file', res);
                        MaterialLink = res.data.LinkingUri.split('?')[0];
                        break;
                }
                let EditorObj = new src_app_core_data_model_model__WEBPACK_IMPORTED_MODULE_8__["Person"]({});
                let DateModified = null;
                if (this.data) {
                    const { Editor, Modified } = this.data.course;
                    EditorObj = Editor;
                    DateModified = Modified;
                }
                const requestData = new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_6__["Course"]({
                    Id,
                    Title,
                    Description,
                    Tags,
                    Owners,
                    Duration,
                    MaterialLink,
                    IsClassroom,
                    LearningSubCategoryId: LearningSubCategoryObj.Id,
                    Editor: EditorObj,
                    Modified: DateModified,
                });
                const savedData = yield this.courseService.save(requestData);
                let curriculumsToBeUpdated = [];
                // Curricula to be removed
                for (const curriculum of this.InitialAssignedCurriculum) {
                    if (this.AssignedCurriculum.isSelected(curriculum)) {
                        continue;
                    }
                    const newCurriculum = new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_7__["Curriculum"](curriculum);
                    newCurriculum.CoursesId.delete(savedData.Id);
                    curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
                }
                // Curricula to be added
                for (const curriculum of this.AssignedCurriculum.selected) {
                    if (this.InitialAssignedCurriculum.some(e => e.Id === curriculum.Id)) {
                        continue;
                    }
                    const newCurriculum = new src_app_core_data_model_curriculum_model__WEBPACK_IMPORTED_MODULE_7__["Curriculum"](curriculum);
                    newCurriculum.CoursesId.add(savedData.Id);
                    curriculumsToBeUpdated = [...curriculumsToBeUpdated, newCurriculum];
                }
                yield this.curriculumService.batchSave(curriculumsToBeUpdated);
                loaderDialog.close();
                this.dialogRef.close(true);
            }
            catch (e) {
                loaderDialog.close();
                console.log('Error Object', e);
                this.dialog.alertDialog(this.dialogName(), e.Message);
            }
        });
    }
}
EditCourseDialogComponent.ɵfac = function EditCourseDialogComponent_Factory(t) { return new (t || EditCourseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DropdownService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_file_service__WEBPACK_IMPORTED_MODULE_18__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"])); };
EditCourseDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditCourseDialogComponent, selectors: [["ng-component"]], viewQuery: function EditCourseDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
    } }, decls: 135, vars: 62, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-body"], ["linear", "", 1, "onecap-stepper"], ["stepper", ""], ["label", "Course Details", 3, "completed"], ["class", "stepper-loader", 4, "ngIf"], ["id", "details-section", 1, "stepper-content", 3, "hidden"], ["id", "single-form", 3, "formGroup"], ["class", "course-material", "formGroupName", "Material", 3, "ngClass", 4, "ngIf"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "input-container"], ["type", "text", "formControlName", "Title"], [1, "onecap-input-form"], [1, "editor-container"], ["formControlName", "Description", 1, "", 3, "editor", "config"], [1, "counter"], [1, "select-container"], ["formControlName", "LearningCategory", 3, "panelClass", "disableOptionCentering", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "LearningSubCategory", 3, "panelClass", "disableOptionCentering", "placeholder"], [1, "onecap-input-form", 3, "ngClass", "focus", "click"], [1, "info-message"], [1, "textarea-container"], [1, "item-list"], ["class", "item-selection", 4, "ngFor", "ngForOf"], ["type", "text", 3, "formControl", "matAutocomplete"], ["inputOwner", ""], [1, "input-container", "short"], ["type", "text", "formControlName", "Duration"], [1, "error-container"], ["class", "error-message", 4, "ngIf"], ["type", "text", "formControlName", "Tags"], [1, "stepper-action"], [1, "onecap-link-btn", "accent-2", 3, "disabled", "click"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "button-wrapper"], ["label", "Assign Curricula", 3, "optional"], [1, "stepper-content", "selection", 3, "hidden"], [1, "selection-section"], ["id", "filter"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "tip"], ["id", "selection-container"], ["class", "selection-table", 4, "ngIf"], ["id", "separator"], [1, "selection-table"], [1, "table-header"], [1, "col"], ["class", "table-row", 4, "ngIf"], ["class", "table-row", 4, "ngFor", "ngForOf"], ["matStepperPrevious", "", 1, "onecap-outline-btn", "accent-2"], ["matStepperNext", "", 1, "onecap-btn", "accent-2"], ["label", "Confirm Details"], ["class", "stepper-content", 3, "hidden", 4, "ngIf"], [1, "onecap-btn", "accent-2", 3, "click"], ["matStepperIcon", "done"], ["matStepperIcon", "edit"], ["autoActiveFirstOption", "", 3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "disabled", 4, "ngIf"], [4, "ngIf"], [1, "stepper-loader"], ["formGroupName", "Material", 1, "course-material", 3, "ngClass"], [1, "material-options"], ["formControlName", "SelectedOption", 1, "onecap-radio-group", "form"], [1, "radio-row", "input"], [1, "onecap-radio-button", "primary", 3, "value"], [1, "onecap-input-form", "row-form", 3, "ngClass"], ["type", "text", "formControlName", "Link"], [1, "upload-container"], ["class", "onecap-input-form row-form", 3, "ngClass", 4, "ngIf"], [1, "radio-row"], ["class", "onecap-button accent-2 outline", "target", "_blank", 3, "href", 4, "ngIf"], [1, "filepicker-container"], ["id", "file-lbl"], ["id", "browse-btn", 3, "disabled", "click"], ["hidden", "", "type", "file", 3, "change"], ["fileButton", ""], [1, "hint-message"], [3, "href"], ["formControlName", "SelectedFolder", 3, "panelClass", "disableOptionCentering", "placeholder"], [3, "value"], ["target", "_blank", 1, "onecap-button", "accent-2", "outline", 3, "href"], [1, "item-selection"], [1, "onecap-icon-btn", "delete", 3, "click"], [1, "error-message"], [1, "table-row"], [1, "onecap-lbl", "error"], [1, "onecap-icon-btn", "accent-2", 3, "click"], [1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "stepper-content", 3, "hidden"], [1, "basic-form", "summary"], [1, "column"], [1, "field"], [3, "innerHTML"], ["class", "field", 4, "ngIf"], [1, "list"], [4, "ngFor", "ngForOf"], [1, "assigned-section"], ["class", "onecaplite-lbl error", 4, "ngIf"], ["class", "link", 3, "ngSwitch", "ngClass", 4, "ngIf"], [1, "link", 3, "ngSwitch", "ngClass"], [4, "ngSwitchCase"], [1, "onecaplite-lbl", "error"], [3, "disabled"], [1, "flex", "align-items-center", "justify-content-center"], [3, "diameter"]], template: function EditCourseDialogComponent_Template(rf, ctx) { if (rf & 1) {
        const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_0_listener() { return ctx.closeDialog(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, EditCourseDialogComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EditCourseDialogComponent_div_13_Template, 23, 12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Course Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "ckeditor", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mat-select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, EditCourseDialogComponent_mat_option_36_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Sub-Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, EditCourseDialogComponent_mat_option_45_Template, 2, 2, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function EditCourseDialogComponent_Template_div_focus_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58); return _r6.focus(); })("click", function EditCourseDialogComponent_Template_div_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](58); return _r6.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Course Owners");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Search by name or email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, EditCourseDialogComponent_div_56_Template, 6, 1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Course Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, EditCourseDialogComponent_span_67_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_74_listener() { return ctx.validateName(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Skip Assigning Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_76_listener() { return ctx.validateName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "mat-step", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, EditCourseDialogComponent_div_82_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "section", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Curriculum Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, " By default, the course will be added as the last course of each curriculum. You can update the order of the courses in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Admin > Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, EditCourseDialogComponent_div_97_Template, 7, 2, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](98, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " Assigned Curricula ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, EditCourseDialogComponent_div_105_Template, 4, 0, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, EditCourseDialogComponent_div_106_Template, 6, 2, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "mat-step", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, EditCourseDialogComponent_div_119_Template, 45, 13, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "chevron_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " Previous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditCourseDialogComponent_Template_button_click_126_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, EditCourseDialogComponent_ng_template_128_Template, 1, 1, "ng-template", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](129, EditCourseDialogComponent_ng_template_129_Template, 1, 1, "ng-template", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "mat-autocomplete", 61, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function EditCourseDialogComponent_Template_mat_autocomplete_optionSelected_130_listener($event) { return ctx.addOwner($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, EditCourseDialogComponent_mat_option_132_Template, 3, 2, "mat-option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, EditCourseDialogComponent_ng_container_133_Template, 2, 1, "ng-container", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](134, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, " Course ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("completed", ctx.FormDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.FormDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.FormDetails.get("Material"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](50, _c1, ctx.FormDetails.get("Title").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 40, ctx.DescriptionCount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](52, _c1, ctx.FormDetails.get("LearningCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 42, ctx.LearningCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](54, _c1, ctx.FormDetails.get("LearningSubCategory").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 44, ctx.FilteredLearningSubCategoryList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](56, _c1, ctx.FormDetails.get("Owners").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.FormDetails.get("Owners").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.OwnersControl)("matAutocomplete", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](58, _c1, ctx.FormDetails.get("Duration").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.FormDetails.get("Duration").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](60, _c1, ctx.FormDetails.get("Tags").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.FormDetails.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("optional", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.curriculumIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.CurriculumSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](98, 46, ctx.FilteredCurriculumList));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.AssignedCurriculum.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.AssignedCurriculum.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.FormDetails.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayWith", ctx.displayFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.IsSearchingUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.IsSearchingUser && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](134, 48, ctx.SearchUserList));
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStep"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_22__["CKEditorComponent"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgForOf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__["MatStepperIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocomplete"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_25__["LoaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_21__["NgSwitchCase"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__["AsyncPipe"]], styles: [".course-material[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  margin-bottom: 16px;\n}\n.course-material[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.course-material[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: var(--onecaplite-red);\n}\n.course-material[_ngcontent-%COMP%]   .upload-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 5px;\n  width: 100%;\n}\n.course-material[_ngcontent-%COMP%]   .onecap-input-form[_ngcontent-%COMP%] {\n  grid-template-columns: 100px 1fr;\n}\n.selection-section[_ngcontent-%COMP%]   #filter[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n.selection-section[_ngcontent-%COMP%]   #filter[_ngcontent-%COMP%]   .tip[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  padding-top: 25px;\n}\n.basic-form.summary[_ngcontent-%COMP%] {\n  padding: 15px;\n  gap: 20px;\n}\n.basic-form.summary[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  gap: inherit;\n}\n.assigned-section[_ngcontent-%COMP%] {\n  border-top: 1px inset #000000;\n}\n.results[_ngcontent-%COMP%] {\n  margin: 0px 60px;\n  display: grid;\n  gap: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2RpYWxvZy9lZGl0LWNvdXJzZS1kaWFsb2cvZWRpdC1jb3Vyc2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBQUk7RUFDRSw0QkFBQTtBQUVOO0FBR0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQURKO0FBSUU7RUFDRSxnQ0FBQTtBQUZKO0FBUUU7RUFDRSxxQ0FBQTtBQUxKO0FBTUk7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBSk47QUFTQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBTkY7QUFPRTtFQUFVLFlBQUE7QUFKWjtBQU9BO0VBQ0UsNkJBQUE7QUFKRjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2RpYWxvZy9lZGl0LWNvdXJzZS1kaWFsb2cvZWRpdC1jb3Vyc2UtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdXJzZS1tYXRlcmlhbCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAmID4gbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAmIC5yZXF1aXJlZCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXJlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnVwbG9hZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ2FwICAgICAgICAgICA6IDVweDtcclxuICAgIHdpZHRoICAgICAgICAgOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm9uZWNhcC1pbnB1dC1mb3JtIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zZWxlY3Rpb24tc2VjdGlvbiB7XHJcbiAgI2ZpbHRlciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgLnRpcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14cyk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJhc2ljLWZvcm0uc3VtbWFyeSB7XHJcbiAgcGFkZGluZyA6IDE1cHg7XHJcbiAgZ2FwICAgICA6IDIwcHg7XHJcbiAgLmNvbHVtbiB7IGdhcDogaW5oZXJpdCB9XHJcbn1cclxuXHJcbi5hc3NpZ25lZC1zZWN0aW9uIHtcclxuICBib3JkZXItdG9wOiAxcHggaW5zZXQgIzAwMDAwMDtcclxufVxyXG5cclxuLnJlc3VsdHMge1xyXG4gIG1hcmdpbiAgICA6IDBweCA2MHB4O1xyXG4gIGRpc3BsYXkgICA6IGdyaWQ7XHJcbiAgZ2FwICAgICAgIDogNTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EditCourseDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                templateUrl: './edit-course-dialog.component.html',
                styleUrls: ['./edit-course-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_13__["DialogService"] }, { type: src_app_core_data_service_dropdown_service__WEBPACK_IMPORTED_MODULE_14__["DropdownService"] }, { type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_16__["CourseService"] }, { type: src_app_core_data_service_curriculum_service__WEBPACK_IMPORTED_MODULE_17__["CurriculumService"] }, { type: src_app_core_data_service_file_service__WEBPACK_IMPORTED_MODULE_18__["FileService"] }, { type: src_app_core_data_service_account_service__WEBPACK_IMPORTED_MODULE_19__["AccountService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"]]
            }] }]; }, { stepper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['stepper', { static: true }]
        }] }); })();


/***/ }),

/***/ "AZ+z":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/admin-course-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AdminCourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCourseRoutingModule", function() { return AdminCourseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-course.component */ "q2lC");





const routes = [{ path: '', component: _admin_course_component__WEBPACK_IMPORTED_MODULE_2__["AdminCourseComponent"] }];
class AdminCourseRoutingModule {
}
AdminCourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminCourseRoutingModule });
AdminCourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminCourseRoutingModule_Factory(t) { return new (t || AdminCourseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCourseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCourseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "DzKj":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/dialog/upload-attendance-sheet-dialog/upload-attendance-sheet-dialog.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: UploadAttendanceSheetDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAttendanceSheetDialogComponent", function() { return UploadAttendanceSheetDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















const _c0 = function (a0) { return { "invalid": a0 }; };
function UploadAttendanceSheetDialogComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadAttendanceSheetDialogComponent_div_20_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadAttendanceSheetDialogComponent_div_20_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const UploadFile_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, UploadFile_r2.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", UploadFile_r2.value ? UploadFile_r2.value.name : "", " ");
} }
function UploadAttendanceSheetDialogComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r7.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.Title);
} }
class UploadAttendanceSheetDialogComponent {
    constructor(userService, excelService, userCourseService, dialog, dialogRef, data) {
        this.userService = userService;
        this.excelService = excelService;
        this.userCourseService = userCourseService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.templateLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].ATTENDANCE_TEMPLATE_LINK;
        this.CourseList = [];
        this.UploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            CourseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            TemplateFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    }
    dialogName() { return `Upload Attendance`; }
    ngOnInit() {
        if (this.data) {
            this.CourseList = this.data.CourseList.filter(e => e.IsOwner);
        }
    }
    onFileChange($event) {
        this.UploadForm.get('TemplateFile').setValue($event.target.files[0]);
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { CourseId, TemplateFile } = this.UploadForm.value;
            this.validateTemplate(TemplateFile, CourseId);
        });
    }
    validateTemplate(file, courseId) {
        if (!file) {
            throw new Error('No file selected.');
        }
        const reader = new FileReader();
        reader.onload = (fileData) => {
            const data = this.excelService.convertExcelDataToJsonData(fileData.target.result);
            const formattedData = this.formatData(data);
            console.log('Formatted Data', formattedData);
            if (!formattedData.isValid) {
                this.dialog.alertDialog(this.dialogName(), formattedData.message);
            }
            else {
                this.processUploadedData(formattedData, courseId);
            }
        };
        reader.readAsBinaryString(file);
    }
    formatData(data) {
        const wsdata = data['Attendance Template'];
        let isValid = true;
        let message = '';
        let emailData = [];
        let invalidRows = [];
        const emailList = new Set();
        if (!wsdata) {
            isValid = false;
            message = `Uploaded file doesn't have 'Attendance Template' worksheet.`;
        }
        else {
            emailData = wsdata.slice(1);
        }
        if (isValid) {
            for (const [index, item] of emailData.entries()) {
                const [email] = item;
                if (!Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_5__["validateEmailFormat"])(email)) {
                    invalidRows = [...invalidRows, (index + 2)];
                }
                if (invalidRows.length > 0) {
                    continue;
                }
                emailList.add(email);
            }
        }
        return {
            isValid,
            invalidRows,
            message,
            emailList: Array.from(emailList),
        };
    }
    processUploadedData(processedData, selectedCourseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { emailList } = processedData;
            const loaderDialog = this.dialog.loaderDialog();
            const emailObjArr = (yield this.userService.batchResolveEmail(emailList));
            const UserCourseObjArr = emailObjArr.map(e => {
                if (e.found) {
                    return new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["UserCourse"]({
                        User: e.data,
                        CourseId: selectedCourseId,
                        Status: src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_4__["CourseStatus"].Completed
                    });
                }
                return null;
            }).filter(e => e);
            const returnData = yield this.userCourseService.batchUploadOfAttendance(UserCourseObjArr);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
UploadAttendanceSheetDialogComponent.ɵfac = function UploadAttendanceSheetDialogComponent_Factory(t) { return new (t || UploadAttendanceSheetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_9__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
UploadAttendanceSheetDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadAttendanceSheetDialogComponent, selectors: [["ng-component"]], decls: 34, vars: 12, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-sub-title"], [1, "onecap-lbl", "completed"], [1, "dialog-body"], [1, "upload-form", 3, "formGroup"], [1, "header"], [1, "picker-form"], [1, "note"], ["target", "_blank", 3, "href"], ["class", "filepicker-container", 3, "ngClass", 4, "ngIf"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "select-container"], ["formControlName", "CourseId", 3, "panelClass", "disableOptionCentering", "placeholder"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "attendance-form", 1, "dialog-action"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "filepicker-container", 3, "ngClass"], ["id", "file-label"], ["id", "browse-btn", 3, "click"], ["hidden", "", "type", "file", 3, "change"], ["fileButton", ""]], template: function UploadAttendanceSheetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadAttendanceSheetDialogComponent_Template_button_click_0_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Upload Attendance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Upload attendance sheet to mark all attendees as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Attendance Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " and upload the file below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UploadAttendanceSheetDialogComponent_div_20_Template, 7, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UploadAttendanceSheetDialogComponent_mat_option_30_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadAttendanceSheetDialogComponent_Template_button_click_32_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.UploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.templateLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UploadForm.get("TemplateFile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.UploadForm.get("CourseId").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.CourseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.UploadForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  gap: 10px;\n  width: 500px;\n}\n\n.dialog-header[_ngcontent-%COMP%]    > .dialog-sub-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: var(--font-sm);\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background-color: rgba(217, 217, 217, 0.3);\n}\n\n.upload-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 10px;\n}\n\n.upload-form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.upload-form[_ngcontent-%COMP%]   .picker-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 5px;\n}\n\n.upload-form[_ngcontent-%COMP%]   .picker-form[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n}\n\n#attendance-form.dialog-action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2RpYWxvZy91cGxvYWQtYXR0ZW5kYW5jZS1zaGVldC1kaWFsb2cvdXBsb2FkLWF0dGVuZGFuY2Utc2hlZXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBREY7O0FBRUU7RUFDRSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQURKOztBQUVJO0VBQ0UseUJBQUE7QUFBTjs7QUFLQTtFQUNFLHlCQUFBO0FBRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1jb3Vyc2UvZGlhbG9nL3VwbG9hZC1hdHRlbmRhbmNlLXNoZWV0LWRpYWxvZy91cGxvYWQtYXR0ZW5kYW5jZS1zaGVldC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgJiA+IC5kaWFsb2ctc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc20pO1xyXG4gIH1cclxufVxyXG5cclxuLmRpYWxvZy1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4zKTtcclxufVxyXG5cclxuLnVwbG9hZC1mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAucGlja2VyLWZvcm0ge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ2FwICAgICAgICAgICA6IDVweDtcclxuICAgIC5ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNhdHRlbmRhbmNlLWZvcm0uZGlhbG9nLWFjdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadAttendanceSheetDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './upload-attendance-sheet-dialog.component.html',
                styleUrls: ['./upload-attendance-sheet-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_9__["UserCourseService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ESor":
/*!***************************************************!*\
  !*** ./src/app/core/data/service/file.service.ts ***!
  \***************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pnp/sp */ "UKGb");
/* harmony import */ var _pnp_sp_webs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pnp/sp/webs */ "6k7F");
/* harmony import */ var _pnp_sp_folders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pnp/sp/folders */ "0MvI");
/* harmony import */ var _pnp_sp_files__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp/files */ "0YVK");







class FileService {
    constructor() {
        this.CourseMaterialFolderName = 'CourseMaterial';
    }
    getCourseMaterialFolders() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const Folders = yield _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.folders.getByName(this.CourseMaterialFolderName).folders
                .select('*')
                .filter(`Name ne 'Forms'`)
                .orderBy('Name', true)
                .get();
            return Folders.map(e => e.Name);
        });
    }
    uploadCourseMaterial(FolderName, CourseMaterial) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (CourseMaterial.size < 262144000) {
                return yield _pnp_sp__WEBPACK_IMPORTED_MODULE_2__["sp"].web.folders.getByName(this.CourseMaterialFolderName).folders
                    .getByName(FolderName)
                    .files
                    .addChunked(CourseMaterial.name, CourseMaterial, (data) => { console.log(data); }, true);
            }
            else {
                throw { Message: `File sizes greater than 250mb, contact pguniversity@dxc.com for assistance.` };
            }
        });
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "JFDc":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/files/folder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _folders_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../folders/types.js */ "4tXH");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "qfcF");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_folders_types_js__WEBPACK_IMPORTED_MODULE_1__["_Folder"], "files", _types_js__WEBPACK_IMPORTED_MODULE_2__["Files"]);
//# sourceMappingURL=folder.js.map

/***/ }),

/***/ "LZ64":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/item.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__["_Item"], "folder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"], "folder");
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "SPHc":
/*!*******************************************!*\
  !*** ./node_modules/@pnp/sp/files/web.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "qfcF");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "q1Lp");



_webs_types_js__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByServerRelativeUrl('" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileRelativeUrl) + "')");
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileRelativeUrl) + "')");
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileById = function (uniqueId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileById('" + uniqueId + "')");
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_0__["_Web"].prototype.getFileByUrl = function (fileUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["File"])(this, "getFileByUrl('!@p1::" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_2__["escapeQueryStrValue"])(fileUrl) + "')");
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "W8sE":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/admin-course.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdminCourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCourseModule", function() { return AdminCourseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_course_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-course-routing.module */ "AZ+z");
/* harmony import */ var _admin_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-course.component */ "q2lC");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/edit-course-dialog/edit-course-dialog.component */ "8y6V");
/* harmony import */ var _dialog_upload_attendance_sheet_dialog_upload_attendance_sheet_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/upload-attendance-sheet-dialog/upload-attendance-sheet-dialog.component */ "DzKj");
/* harmony import */ var _dialog_course_rating_report_dialog_course_rating_report_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/course-rating-report-dialog/course-rating-report-dialog.component */ "wC8p");
/* harmony import */ var _dialog_upload_registration_dialog_upload_registration_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/upload-registration-dialog/upload-registration-dialog.component */ "wApe");










class AdminCourseModule {
}
AdminCourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminCourseModule });
AdminCourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminCourseModule_Factory(t) { return new (t || AdminCourseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _admin_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCourseRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminCourseModule, { declarations: [_admin_course_component__WEBPACK_IMPORTED_MODULE_3__["AdminCourseComponent"],
        _dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseDialogComponent"],
        _dialog_upload_registration_dialog_upload_registration_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UploadRegistrationDialogComponent"],
        _dialog_upload_attendance_sheet_dialog_upload_attendance_sheet_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UploadAttendanceSheetDialogComponent"],
        _dialog_course_rating_report_dialog_course_rating_report_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CourseRatingReportDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _admin_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCourseRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminCourseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_course_component__WEBPACK_IMPORTED_MODULE_3__["AdminCourseComponent"],
                    _dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseDialogComponent"],
                    _dialog_upload_registration_dialog_upload_registration_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UploadRegistrationDialogComponent"],
                    _dialog_upload_attendance_sheet_dialog_upload_attendance_sheet_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UploadAttendanceSheetDialogComponent"],
                    _dialog_course_rating_report_dialog_course_rating_report_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CourseRatingReportDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _admin_course_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminCourseRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pGs8":
/*!********************************************!*\
  !*** ./node_modules/@pnp/sp/files/item.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _items_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/types.js */ "3DT9");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "qfcF");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_items_types_js__WEBPACK_IMPORTED_MODULE_1__["_Item"], "file", _types_js__WEBPACK_IMPORTED_MODULE_2__["File"], "file");
//# sourceMappingURL=item.js.map

/***/ }),

/***/ "q2lC":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/admin-course.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCourseComponent", function() { return AdminCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var _dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog/edit-course-dialog/edit-course-dialog.component */ "8y6V");
/* harmony import */ var _dialog_upload_registration_dialog_upload_registration_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/upload-registration-dialog/upload-registration-dialog.component */ "wApe");
/* harmony import */ var _dialog_upload_attendance_sheet_dialog_upload_attendance_sheet_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dialog/upload-attendance-sheet-dialog/upload-attendance-sheet-dialog.component */ "DzKj");
/* harmony import */ var _dialog_course_rating_report_dialog_course_rating_report_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialog/course-rating-report-dialog/course-rating-report-dialog.component */ "wC8p");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/data/service/course.service */ "UJO1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ "HEbm");



















function AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r11.update(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r12.showReviews(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r13.delete(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 17);
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
function AdminCourseComponent_section_4_ng_container_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Course Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Last Modified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AdminCourseComponent_section_4_ng_container_27_div_2_div_10_Template, 17, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", list_r3);
} }
function AdminCourseComponent_section_4_ng_container_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No course available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCourseComponent_section_4_ng_container_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AdminCourseComponent_section_4_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AdminCourseComponent_section_4_ng_container_27_div_2_Template, 11, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AdminCourseComponent_section_4_ng_container_27_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminCourseComponent_section_4_ng_container_27_div_4_Template, 2, 0, "div", 23);
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
function AdminCourseComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Course Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Course Owner");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.uploadRegistrationSheet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Upload Registration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.uploadAttendanceSheet(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Upload Attendance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminCourseComponent_section_4_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.create(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Create Course ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AdminCourseComponent_section_4_ng_container_27_Template, 5, 3, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 5, ctx_r0.filteredCourseList));
} }
function AdminCourseComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AdminCourseComponent {
    constructor(dialog, courseService) {
        this.dialog = dialog;
        this.courseService = courseService;
        this.pageIsLoading = false;
        this.dataIsLoading = true;
        this.courseList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.keywordFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.ownerFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1);
        this.ownedCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ownerFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(1)),
            this.courseList,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([isOwner, List]) => {
            if (isOwner === 1) {
                return List.filter(e => e.IsOwner);
            }
            return List;
        }));
        this.filteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.ownedCourseList,
            this.keywordFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(125), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([courseList, keyword]) => {
            if (keyword === '') {
                return courseList;
            }
            return courseList.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_6__["searchString"])(e.Title, keyword));
        }));
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dataIsLoading = true;
            const CourseList = yield this.courseService.getAll();
            this.courseList.next(CourseList);
            this.dataIsLoading = false;
        });
    }
    uploadAttendanceSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uploadDialog = this.dialog.open(_dialog_upload_attendance_sheet_dialog_upload_attendance_sheet_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UploadAttendanceSheetDialogComponent"], { data: { CourseList: this.courseList.value } });
            const isSaved = yield uploadDialog.afterClosed().toPromise();
            if (isSaved) {
                this.loadData();
            }
        });
    }
    uploadRegistrationSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uploadDialog = this.dialog.open(_dialog_upload_registration_dialog_upload_registration_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UploadRegistrationDialogComponent"], { data: { CourseList: this.courseList.value } });
            const isSaved = yield uploadDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addDialog = this.dialog.open(_dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditCourseDialogComponent"]);
            const isSaved = yield addDialog.afterClosed().toPromise();
            if (isSaved) {
                yield this.loadData();
            }
        });
    }
    update(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data.IsOwner) {
                const editDialog = this.dialog.open(_dialog_edit_course_dialog_edit_course_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditCourseDialogComponent"], { data: { course: new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_5__["Course"](data) } });
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
                yield this.courseService.delete(data);
                loaderDialog.close();
                yield this.loadData();
            }
        });
    }
    showReviews(item) {
        const reviewsDialog = this.dialog.open(_dialog_course_rating_report_dialog_course_rating_report_dialog_component__WEBPACK_IMPORTED_MODULE_10__["CourseRatingReportDialogComponent"], { data: { item } });
    }
}
AdminCourseComponent.ɵfac = function AdminCourseComponent_Factory(t) { return new (t || AdminCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__["CourseService"])); };
AdminCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminCourseComponent, selectors: [["app-admin-course"]], decls: 6, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "page-title"], ["class", "page-body", 4, "ngIf"], ["class", "page-loader", 4, "ngIf"], [1, "page-body"], ["id", "filters", 1, "card"], [1, "onecap-input-form"], [1, "input-container"], ["type", "text", "placeholder", "Search", 3, "formControl"], [1, "select-container"], ["placeholder", "All Category", 3, "formControl"], [3, "value"], ["id", "actions"], [1, "onecap-btn", "primary", 3, "click"], [1, "onecap-btn", "accent-2", 3, "click"], [1, "button-wrapper"], [1, "material-icons"], ["id", "data", 1, "card"], [4, "ngIf"], [1, "table-container"], ["id", "course-table", "class", "onecap-table", 4, "ngIf"], ["class", "card-message", 4, "ngIf"], ["class", "status-loading", 4, "ngIf"], ["id", "course-table", 1, "onecap-table"], [1, "table-header"], ["id", "details", 1, "section"], [1, "col-name"], ["id", "action", 1, "section"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "onecap-link-btn", "accent-2", 3, "click"], [1, "col-name", "action-col"], ["matTooltip", "Edit", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent", 3, "disabled", "click"], ["matTooltip", "View Feedback Rating", "matTooltipPosition", "above", 1, "onecap-icon-btn", "accent-2", 3, "disabled", "click"], [1, "icon", "icon-dxc", "testimonials-like-comment-2", "wht"], ["matTooltip", "Delete", "matTooltipPosition", "above", 1, "onecap-icon-btn", "error", 3, "disabled", "click"], [1, "card-message"], [1, "status-loading"], [1, "page-loader"]], template: function AdminCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Courses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AdminCourseComponent_section_4_Template, 29, 7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AdminCourseComponent_section_5_Template, 2, 0, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.pageIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pageIsLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_16__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["#filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  align-items: center;\n  gap: 10px;\n}\n\n#actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n  justify-content: flex-end;\n}\n\n#course-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], #course-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 175px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2FkbWluLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxnQ0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2FkbWluLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmaWx0ZXJzIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgICAgOiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1ucyA6IHJlcGVhdCg0LCAxZnIpO1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICAgICA6IGNlbnRlcjtcclxuICBnYXAgICAgICAgICAgICAgICAgICAgOiAxMHB4O1xyXG59XHJcblxyXG4jYWN0aW9ucyB7XHJcbiAgZGlzcGxheSA6IGdyaWQ7XHJcbiAgZ2FwICAgICA6IDEwcHg7XHJcbiAgZ3JpZC1hdXRvLWZsb3cgIDogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudCA6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4jY291cnNlLXRhYmxlIHtcclxuICAudGFibGUtaGVhZGVyLCAudGFibGUtcm93IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE3NXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdminCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-admin-course',
                templateUrl: './admin-course.component.html',
                styleUrls: ['./admin-course.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_11__["DialogService"] }, { type: src_app_core_data_service_course_service__WEBPACK_IMPORTED_MODULE_12__["CourseService"] }]; }, null); })();


/***/ }),

/***/ "vttn":
/*!**********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/list.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _lists_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lists/types.js */ "hy0S");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");



Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_lists_types_js__WEBPACK_IMPORTED_MODULE_1__["_List"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"], "rootFolder");
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "wApe":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/dialog/upload-registration-dialog/upload-registration-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: UploadRegistrationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadRegistrationDialogComponent", function() { return UploadRegistrationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/data/model/course.model */ "7rYE");
/* harmony import */ var src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/util/data.util */ "n44M");
/* harmony import */ var src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/data/service/user.service */ "00IP");
/* harmony import */ var src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/data/service/excel.service */ "EeKZ");
/* harmony import */ var src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/data/service/user-course.service */ "z07D");
/* harmony import */ var src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/dialog/dialog.service */ "WN5f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















const _c0 = function (a0) { return { "invalid": a0 }; };
function UploadRegistrationDialogComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadRegistrationDialogComponent_div_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); return _r3.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Browse ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function UploadRegistrationDialogComponent_div_18_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onFileChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const UploadFile_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, UploadFile_r2.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", UploadFile_r2.value ? UploadFile_r2.value.name : "", " ");
} }
function UploadRegistrationDialogComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r7.Id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.Title);
} }
class UploadRegistrationDialogComponent {
    constructor(userService, excelService, userCourseService, dialog, dialogRef, data) {
        this.userService = userService;
        this.excelService = excelService;
        this.userCourseService = userCourseService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.templateLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].REGISTRATION_TEMPLATE_LINK;
        this.CourseSearchFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.CourseList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.FilteredCourseList = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            this.CourseList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])([])),
            this.CourseSearchFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''))
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([List, KeyWord]) => {
            if (KeyWord === '') {
                return List;
            }
            return List.filter(e => Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["searchString"])(e.Title, KeyWord));
        }));
        this.UploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            CourseIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([], {
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ],
            }),
            TemplateFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
        });
    }
    dialogName() { return `Upload Attendance`; }
    ngOnInit() {
        if (this.data) {
            this.CourseList.next(this.data.CourseList.filter(e => e.IsOwner));
        }
    }
    onFileChange($event) {
        this.UploadForm.get('TemplateFile').setValue($event.target.files[0]);
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { CourseIds, TemplateFile } = this.UploadForm.value;
            this.validateTemplate(TemplateFile, CourseIds);
        });
    }
    validateTemplate(file, courseIds) {
        if (!file) {
            throw new Error('No file selected.');
        }
        const reader = new FileReader();
        reader.onload = (fileData) => {
            const data = this.excelService.convertExcelDataToJsonData(fileData.target.result);
            const formattedData = this.formatData(data);
            console.log('Formatted Data', formattedData);
            if (!formattedData.isValid) {
                this.dialog.alertDialog(this.dialogName(), formattedData.message);
            }
            else {
                this.processUploadedData(formattedData, courseIds);
            }
        };
        reader.readAsBinaryString(file);
    }
    formatData(data) {
        const wsdata = data['Attendance Template'];
        let isValid = true;
        let message = '';
        let emailData = [];
        let invalidRows = [];
        const emailList = new Set();
        if (!wsdata) {
            isValid = false;
            message = `Uploaded file doesn't have 'Attendance Template' worksheet.`;
        }
        else {
            emailData = wsdata.slice(1);
        }
        if (isValid) {
            for (const [index, item] of emailData.entries()) {
                const [email] = item;
                if (!Object(src_app_core_util_data_util__WEBPACK_IMPORTED_MODULE_8__["validateEmailFormat"])(email)) {
                    invalidRows = [...invalidRows, (index + 2)];
                }
                if (invalidRows.length > 0) {
                    continue;
                }
                emailList.add(email);
            }
        }
        return {
            isValid,
            invalidRows,
            message,
            emailList: Array.from(emailList),
        };
    }
    processUploadedData(processedData, selectedCourseIdArr) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { emailList } = processedData;
            const loaderDialog = this.dialog.loaderDialog();
            const emailObjArr = (yield this.userService.batchResolveEmail(emailList));
            let UserCourseObjArr = [];
            for (const selectedId of selectedCourseIdArr) {
                UserCourseObjArr = [
                    ...UserCourseObjArr,
                    ...emailObjArr
                        .filter(e => e.found)
                        .map(e => {
                        if (e.found) {
                            return new src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_7__["UserCourse"]({
                                User: e.data,
                                CourseId: selectedId,
                                Status: src_app_core_data_model_course_model__WEBPACK_IMPORTED_MODULE_7__["CourseStatus"].Pending
                            });
                        }
                    })
                ];
            }
            const returnData = yield this.userCourseService.batchUploadRegistration(UserCourseObjArr);
            loaderDialog.close();
            this.dialogRef.close(true);
        });
    }
}
UploadRegistrationDialogComponent.ɵfac = function UploadRegistrationDialogComponent_Factory(t) { return new (t || UploadRegistrationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__["UserCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])); };
UploadRegistrationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UploadRegistrationDialogComponent, selectors: [["ng-component"]], decls: 35, vars: 14, consts: [[1, "close-btn", 3, "click"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-title"], [1, "dialog-sub-title"], [1, "dialog-body"], [1, "upload-form", 3, "formGroup"], [1, "header"], [1, "picker-form"], [1, "note"], ["target", "_blank", 3, "href"], ["class", "filepicker-container", 3, "ngClass", 4, "ngIf"], [1, "onecap-input-form", 3, "ngClass"], [1, "required"], [1, "select-container"], ["formControlName", "CourseIds", "multiple", "", 3, "panelClass", "disableOptionCentering", "placeholder"], [1, "search-filter", "flex", "flex-row", "align-items-center"], ["type", "text", "placeholder", "Enter key words", 3, "formControl", "keydown"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "attendance-form", 1, "dialog-action"], [1, "onecap-btn", "accent-2", 3, "disabled", "click"], [1, "filepicker-container", 3, "ngClass"], ["id", "file-label"], ["id", "browse-btn", 3, "click"], ["hidden", "", "type", "file", 3, "change"], ["fileButton", ""], [3, "value"]], template: function UploadRegistrationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadRegistrationDialogComponent_Template_button_click_0_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Upload Registration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Upload registration sheet to register all employees to selected course/s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Registration Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " and upload the file below.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UploadRegistrationDialogComponent_div_18_Template, 7, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Course Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function UploadRegistrationDialogComponent_Template_input_keydown_29_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UploadRegistrationDialogComponent_mat_option_30_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadRegistrationDialogComponent_Template_button_click_33_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.UploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.templateLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UploadForm.get("TemplateFile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.UploadForm.get("CourseIds").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.CourseSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 10, ctx.FilteredCourseList));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.UploadForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  gap: 10px;\n  width: 500px;\n}\n\n.dialog-header[_ngcontent-%COMP%]    > .dialog-sub-title[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: var(--font-sm);\n}\n\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background-color: rgba(217, 217, 217, 0.3);\n}\n\n.upload-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 10px;\n}\n\n.upload-form[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.upload-form[_ngcontent-%COMP%]   .picker-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 5px;\n}\n\n.upload-form[_ngcontent-%COMP%]   .picker-form[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%] {\n  font-size: var(--font-sm);\n}\n\n#attendance-form.dialog-action[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n#attendance-form.dialog-action[_ngcontent-%COMP%]   .onecaplite-btn.ok-btn[_ngcontent-%COMP%] {\n  background-color: var(--onecaplite-blue);\n  color: var(--onecaplite-white);\n}\n\n#attendance-form.dialog-action[_ngcontent-%COMP%]   .onecaplite-btn.ok-btn[_ngcontent-%COMP%]:disabled {\n  background-color: var(--onecaplite-darkwhite);\n  border: none;\n  color: rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2RpYWxvZy91cGxvYWQtcmVnaXN0cmF0aW9uLWRpYWxvZy91cGxvYWQtcmVnaXN0cmF0aW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQURGOztBQUVFO0VBQ0UsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFESjs7QUFFSTtFQUNFLHlCQUFBO0FBQU47O0FBS0E7RUFDRSx5QkFBQTtBQUZGOztBQUdFO0VBQ0Usd0NBQUE7RUFDQSw4QkFBQTtBQURKOztBQUVJO0VBQ0UsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWNvdXJzZS9kaWFsb2cvdXBsb2FkLXJlZ2lzdHJhdGlvbi1kaWFsb2cvdXBsb2FkLXJlZ2lzdHJhdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWhlYWRlciB7XHJcbiAgJiA+IC5kaWFsb2ctc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc20pO1xyXG4gIH1cclxufVxyXG5cclxuLmRpYWxvZy1ib2R5IHtcclxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkOWQ5ZDksICRhbHBoYTogMC4zKTtcclxufVxyXG5cclxuLnVwbG9hZC1mb3JtIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC5oZWFkZXIge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG5cclxuICAucGlja2VyLWZvcm0ge1xyXG4gICAgZGlzcGxheSAgICAgICA6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gICAgZ2FwICAgICAgICAgICA6IDVweDtcclxuICAgIC5ub3RlIHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNhdHRlbmRhbmNlLWZvcm0uZGlhbG9nLWFjdGlvbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAub25lY2FwbGl0ZS1idG4ub2stYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9uZWNhcGxpdGUtYmx1ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS13aGl0ZSk7XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1kYXJrd2hpdGUpO1xyXG4gICAgICBib3JkZXIgICAgICAgICAgOiBub25lO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjI1KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UploadRegistrationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './upload-registration-dialog.component.html',
                styleUrls: ['./upload-registration-dialog.component.scss']
            }]
    }], function () { return [{ type: src_app_core_data_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] }, { type: src_app_core_data_service_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"] }, { type: src_app_core_data_service_user_course_service__WEBPACK_IMPORTED_MODULE_11__["UserCourseService"] }, { type: src_app_shared_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "wC8p":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-course/dialog/course-rating-report-dialog/course-rating-report-dialog.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: CourseRatingReportDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRatingReportDialogComponent", function() { return CourseRatingReportDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/data/service/user-course-rating.service */ "zUKS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/ui/star-rating/star-rating.component */ "abAR");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/ui/loader/loader.component */ "HEbm");















function CourseRatingReportDialogComponent_ng_container_6_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.reviewList.value.length, " Ratings ");
} }
function CourseRatingReportDialogComponent_ng_container_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No ratings. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Rating:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 3, item_r10.Rating, "1.1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.DateModified, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r10.Review, " ");
} }
function CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_1_div_1_Template, 11, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sortedList_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sortedList_r6);
} }
function CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No reviews available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CourseRatingReportDialogComponent_ng_container_6_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CourseRatingReportDialogComponent_ng_container_6_ng_container_27_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sortedList_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sortedList_r6.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sortedList_r6.length === 0);
} }
function CourseRatingReportDialogComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Overall Rating ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-star-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CourseRatingReportDialogComponent_ng_container_6_Template_app_star_rating_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.totalRating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CourseRatingReportDialogComponent_ng_container_6_div_9_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CourseRatingReportDialogComponent_ng_container_6_ng_template_10_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Sort By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CourseRatingReportDialogComponent_ng_container_6_ng_container_27_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 16, ctx_r0.totalRating, "1.1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.totalRating)("viewOnly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.reviewList.value.length > 0)("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("panelClass", "onecaplite-option-container")("disableOptionCentering", true)("placeholder", "-")("formControl", ctx_r0.sortingOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.SortingOptions.Date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.SortingOptions.Date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.SortingOptions.LowestToHighest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.SortingOptions.LowestToHighest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.SortingOptions.HighestToLowest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.SortingOptions.HighestToLowest, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 19, ctx_r0.sortedReviewList));
} }
function CourseRatingReportDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var SortingOptions;
(function (SortingOptions) {
    SortingOptions["Date"] = "Date";
    SortingOptions["LowestToHighest"] = "Lowest to Highest";
    SortingOptions["HighestToLowest"] = "Highest to Lowest";
})(SortingOptions || (SortingOptions = {}));
class CourseRatingReportDialogComponent {
    constructor(dialogRef, userCourseRatingService, data) {
        this.dialogRef = dialogRef;
        this.userCourseRatingService = userCourseRatingService;
        this.data = data;
        this.item = null;
        this.SortingOptions = SortingOptions;
        this.dialogIsLoading = true;
        this.totalRating = 4;
        this.sortingOption = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](SortingOptions.Date);
        this.reviewList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.sortedReviewList = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.sortingOption.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(SortingOptions.Date)),
            this.reviewList
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([sortingOption, List]) => {
            switch (sortingOption) {
                case SortingOptions.Date:
                    return this.sortByDate(List);
                case SortingOptions.HighestToLowest:
                    return this.sortByRate(List, true);
                case SortingOptions.LowestToHighest:
                    return this.sortByRate(List);
                default:
                    return [];
            }
        }));
    }
    ngOnInit() {
        this.dialogRef.addPanelClass(['onecap-dialog-form', 'item-form']);
        if (this.data) {
            const { item } = this.data;
            this.item = item;
            this.initialLoad();
        }
    }
    initialLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialogIsLoading = true;
            const reviewList = yield this.userCourseRatingService.getReport([this.item.Id]);
            this.reviewList.next(reviewList);
            const sum = reviewList.reduce((returnVal, item) => returnVal + item.Rating, 0);
            const length = reviewList.length;
            this.totalRating = length > 0 ? sum / length : 0;
            this.dialogIsLoading = false;
        });
    }
    sortByDate(itemArr) {
        return itemArr.sort((a, b) => {
            const dateA = a.Modified.getTime();
            const dateB = b.Modified.getTime();
            if (dateA > dateB) {
                return -1;
            }
            if (dateA < dateB) {
                return 1;
            }
            return 0;
        });
    }
    sortByRate(itemArr, reverse = false) {
        return itemArr.sort((a, b) => {
            const rateA = a.Rating;
            const rateB = b.Rating;
            if (rateA > rateB) {
                return !reverse ? 1 : -1;
            }
            if (rateA < rateB) {
                return !reverse ? -1 : 1;
            }
            return 0;
        });
    }
}
CourseRatingReportDialogComponent.ɵfac = function CourseRatingReportDialogComponent_Factory(t) { return new (t || CourseRatingReportDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__["UserCourseRatingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CourseRatingReportDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CourseRatingReportDialogComponent, selectors: [["ng-component"]], decls: 8, vars: 3, consts: [["matDialogClose", "", 1, "close-btn"], [1, "material-icons"], [1, "dialog-header"], [1, "dialog-body"], [4, "ngIf"], ["class", "dialog-loader", 4, "ngIf"], [1, "content-container"], [1, "rating-container"], [1, "overall-rating-label"], [3, "ngModel", "viewOnly", "ngModelChange"], ["class", "rating-count", 4, "ngIf", "ngIfElse"], ["noRating", ""], [1, "reviews-container"], [1, "headers"], [1, "onecap-input-form", "row-form"], [1, "select-container"], [3, "panelClass", "disableOptionCentering", "placeholder", "formControl"], [3, "value"], [1, "rating-count"], ["class", "list", 4, "ngIf"], ["class", "no-value", 4, "ngIf"], [1, "list"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "review-item"], [1, "rating-area"], [1, "rate-value"], [1, "date-area"], [1, "review-area"], [1, "no-value"], [1, "dialog-loader"]], template: function CourseRatingReportDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CourseRatingReportDialogComponent_ng_container_6_Template, 29, 21, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CourseRatingReportDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.item == null ? null : ctx.item.Title) || "(No Course)", "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.dialogIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.dialogIsLoading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_ui_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_8__["StarRatingComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".content-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  justify-content: stretch;\n  gap: 10px;\n}\n\n.rating-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  justify-content: center;\n  text-align: center;\n}\n\n.rating-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: var(--font-lg);\n}\n\n.rating-container[_ngcontent-%COMP%]   .overall-rating-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--onecaplite-blue);\n  font-size: var(--font-xl);\n}\n\n.rating-container[_ngcontent-%COMP%]   app-star-rating[_ngcontent-%COMP%] {\n  color: var(--onecaplite-blue);\n}\n\n.reviews-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: rows;\n  grid-auto-rows: max-content;\n  min-height: 350px;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .headers[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%] {\n  width: 175px;\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  align-items: center;\n  gap: 10px;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-rows: max-content;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .no-value[_ngcontent-%COMP%] {\n  height: 150px;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  color: var(--onecaplite-purple);\n}\n\n.reviews-container[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  gap: 5px;\n  padding: 10px 0px;\n  border-bottom: 1px solid var(--onecaplite-darkwhite);\n}\n\n.reviews-container[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .rating-area[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n  gap: 10px;\n  font-weight: bold;\n}\n\n.reviews-container[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .rating-area[_ngcontent-%COMP%]   .rate-value[_ngcontent-%COMP%] {\n  color: var(--onecaplite-blue);\n}\n\n.reviews-container[_ngcontent-%COMP%]   .review-item[_ngcontent-%COMP%]   .date-area[_ngcontent-%COMP%] {\n  color: var(--onecaplite-gray);\n}\n\n.dialog-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY291cnNlL2RpYWxvZy9jb3Vyc2UtcmF0aW5nLXJlcG9ydC1kaWFsb2cvY291cnNlLXJhdGluZy1yZXBvcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLDZCQUFBO0FBQ0o7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUk7RUFBUSxpQkFBQTtBQUNaOztBQUFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUVOOztBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLG9EQUFBO0FBRko7O0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUZOOztBQUdNO0VBQ0UsNkJBQUE7QUFEUjs7QUFJSTtFQUNFLDZCQUFBO0FBRk47O0FBU0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZG1pbi9hZG1pbi1jb3Vyc2UvZGlhbG9nL2NvdXJzZS1yYXRpbmctcmVwb3J0LWRpYWxvZy9jb3Vyc2UtcmF0aW5nLXJlcG9ydC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4ucmF0aW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tZmxvdzogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbGcpO1xyXG4gIH1cclxuICAub3ZlcmFsbC1yYXRpbmctbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC14bCk7XHJcbiAgfVxyXG4gIGFwcC1zdGFyLXJhdGluZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4ucmV2aWV3cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvd3M7XHJcbiAgZ3JpZC1hdXRvLXJvd3M6IG1heC1jb250ZW50O1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIC5oZWFkZXJzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBsYWJlbCB7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcbiAgICAuZmlsdGVyIHtcclxuICAgICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxpc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAubm8tdmFsdWUge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLXB1cnBsZSk7XHJcbiAgfVxyXG5cclxuICAucmV2aWV3LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgICBnYXA6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLW9uZWNhcGxpdGUtZGFya3doaXRlKTtcclxuXHJcbiAgICAucmF0aW5nLWFyZWEge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIGdhcDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIC5yYXRlLXZhbHVlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tb25lY2FwbGl0ZS1ibHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRhdGUtYXJlYSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1vbmVjYXBsaXRlLWdyYXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4uZGlhbG9nLWxvYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CourseRatingReportDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: './course-rating-report-dialog.component.html',
                styleUrls: ['./course-rating-report-dialog.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: src_app_core_data_service_user_course_rating_service__WEBPACK_IMPORTED_MODULE_6__["UserCourseRatingService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "ymW/":
/*!*********************************************!*\
  !*** ./node_modules/@pnp/sp/folders/web.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pnp_odata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pnp/odata */ "xT8B");
/* harmony import */ var _webs_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webs/types.js */ "dVsc");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types.js */ "4tXH");
/* harmony import */ var _utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/escapeQueryStrValue.js */ "q1Lp");




Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "folders", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folders"]);
Object(_pnp_odata__WEBPACK_IMPORTED_MODULE_0__["addProp"])(_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"], "rootFolder", _types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"], "rootFolder");
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderByServerRelativeUrl('" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_3__["escapeQueryStrValue"])(folderRelativeUrl) + "')");
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderByServerRelativePath(decodedUrl='" + Object(_utils_escapeQueryStrValue_js__WEBPACK_IMPORTED_MODULE_3__["escapeQueryStrValue"])(folderRelativeUrl) + "')");
};
_webs_types_js__WEBPACK_IMPORTED_MODULE_1__["_Web"].prototype.getFolderById = function (uniqueId) {
    return Object(_types_js__WEBPACK_IMPORTED_MODULE_2__["Folder"])(this, "getFolderById('" + uniqueId + "')");
};
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-course-admin-course-module.js.map
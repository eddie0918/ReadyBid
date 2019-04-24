(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n\n    <div class=\"header\">\n      Header\n    </div>\n\n    <div class=\"main\">\n      <input type=\"text\" formControlName=\"textData\" class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.textData.errors }\" />\n      <div *ngIf=\"submitted && f.textData.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.textData.errors.required\">Text data is required</div>\n        <div *ngIf=\"f.textData.errors.maxlength\">Text data must be less than 50 characters</div>\n      </div>\n\n      <input type=\"number\" appTwoDigitDecimaNumber formControlName=\"numberData\" class=\"form-control\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.numberData.errors }\" />\n      <div *ngIf=\"submitted && f.numberData.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.numberData.errors.required\">Number data is required</div>\n        <div *ngIf=\"f.numberData.errors.min\">Number data must be greater than 0</div>\n        <div *ngIf=\"f.numberData.errors.max\">Number data must be less than 10000</div>\n      </div>\n\n      <div class=\"request-list\">\n        <table>\n          <tr>\n            <th>Type</th>\n            <th>Timestamp</th>\n            <th>Text</th>\n            <th>Number</th>\n          </tr>\n          <tr *ngFor=\"let request of requestList\">\n            <td>{{request.type}}</td>\n            <td>{{request.timestamp}}</td>\n            <td>{{request.request?.textData}}</td>\n            <td>{{request.request?.numberData}}</td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n\n    <div class=\"footer\">\n      <h4>test</h4>\n      <button>request</button>\n    </div>\n  </form>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 400px;\n  height: 600px;\n  background-color: gray; }\n  .container .header {\n    position: relative;\n    width: 100%;\n    height: 100px;\n    background-color: red;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .container .footer {\n    height: 100px;\n    background-color: blue;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 25px 0 15px; }\n  .container .main {\n    width: 100%;\n    height: 400px;\n    padding: 1rem;\n    box-sizing: border-box; }\n  .container .main input {\n      height: 35px;\n      width: 100%;\n      margin: 0.5rem 0;\n      font-size: 18px; }\n  .container .main .request-list {\n      height: 230px;\n      background-color: white;\n      overflow-y: auto; }\n  .container .main .request-list table th, .container .main .request-list td {\n        width: 25%;\n        text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3dvcmtpbmcvNC4gQW5ndWxhckpTL1JlYWR5QmlkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBUHhCO0lBU0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFmdkI7SUFrQkksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixzQkFBc0IsRUFBQTtFQXZCMUI7SUEwQkksV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUE3QjFCO01BZ0NNLFlBQVk7TUFDWixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtFQW5DckI7TUFzQ00sYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixnQkFBZ0IsRUFBQTtFQXhDdEI7UUEwQ1EsVUFBVTtRQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgLmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDI1cHggMCAxNXB4O1xuICB9XG4gIC5tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJlcXVlc3QtbGlzdCB7XG4gICAgICBoZWlnaHQ6IDIzMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgdGFibGUgdGgsIHRkIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/test.service */ "./src/app/services/test.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder, testService) {
        this.formBuilder = formBuilder;
        this.testService = testService;
        this.submitted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            textData: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            numberData: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10000)]]
        });
    };
    Object.defineProperty(AppComponent.prototype, "requestList", {
        get: function () {
            return this.testService.requestList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.testService.login(this.registerForm.value).subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _decimal_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decimal.directive */ "./src/app/decimal.directive.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _error_dialog_errordialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-dialog/errordialog.component */ "./src/app/error-dialog/errordialog.component.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _error_dialog_errordialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-dialog/errordialog.service */ "./src/app/error-dialog/errordialog.service.ts");
/* harmony import */ var _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interceptor/httpconfig.interceptor */ "./src/app/interceptor/httpconfig.interceptor.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _decimal_directive__WEBPACK_IMPORTED_MODULE_6__["TwoDigitDecimaNumberDirective"],
                _error_dialog_errordialog_component__WEBPACK_IMPORTED_MODULE_10__["ErrorDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [
                _services_test_service__WEBPACK_IMPORTED_MODULE_11__["TestService"],
                _error_dialog_errordialog_service__WEBPACK_IMPORTED_MODULE_12__["ErrorDialogService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _interceptor_httpconfig_interceptor__WEBPACK_IMPORTED_MODULE_13__["HttpConfigInterceptor"], multi: true }
            ],
            entryComponents: [_error_dialog_errordialog_component__WEBPACK_IMPORTED_MODULE_10__["ErrorDialogComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/decimal.directive.ts":
/*!**************************************!*\
  !*** ./src/app/decimal.directive.ts ***!
  \**************************************/
/*! exports provided: TwoDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function() { return TwoDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwoDigitDecimaNumberDirective = /** @class */ (function () {
    function TwoDigitDecimaNumberDirective(el) {
        this.el = el;
        this.regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    TwoDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TwoDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTwoDigitDecimaNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TwoDigitDecimaNumberDirective);
    return TwoDigitDecimaNumberDirective;
}());



/***/ }),

/***/ "./src/app/error-dialog/errordialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/error-dialog/errordialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <p>\n      Reason: {{data.reason}}\n    </p>\n    <p>\n      Status: {{data.status}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error-dialog/errordialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/error-dialog/errordialog.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ErrorDialogComponent = /** @class */ (function () {
    function ErrorDialogComponent(data) {
        this.data = data;
        this.title = 'Angular-Interceptor';
    }
    ErrorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./errordialog.component.html */ "./src/app/error-dialog/errordialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());



/***/ }),

/***/ "./src/app/error-dialog/errordialog.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/error-dialog/errordialog.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogService", function() { return ErrorDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _errordialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errordialog.component */ "./src/app/error-dialog/errordialog.component.ts");




var ErrorDialogService = /** @class */ (function () {
    function ErrorDialogService(dialog) {
        this.dialog = dialog;
    }
    ErrorDialogService.prototype.openDialog = function (data) {
        var dialogRef = this.dialog.open(_errordialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"], {
            width: '300px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            var animal;
            animal = result;
        });
    };
    ErrorDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ErrorDialogService);
    return ErrorDialogService;
}());



/***/ }),

/***/ "./src/app/interceptor/httpconfig.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/interceptor/httpconfig.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: HttpConfigInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptor", function() { return HttpConfigInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _error_dialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-dialog/errordialog.service */ "./src/app/error-dialog/errordialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/test.service */ "./src/app/services/test.service.ts");







var HttpConfigInterceptor = /** @class */ (function () {
    function HttpConfigInterceptor(errorDialogService, testService) {
        this.errorDialogService = errorDialogService;
        this.testService = testService;
    }
    HttpConfigInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.log('event--->>>', event);
                // this.errorDialogService.openDialog(event);
                _this.testService.requestList = { type: 'success', timestamp: Date.now(), request: request.body };
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            var data = {};
            console.log(error);
            data = {
                reason: error.message,
                status: error.status
            };
            _this.errorDialogService.openDialog(data);
            _this.testService.requestList = { type: 'error', timestamp: Date.now(), request: request.body };
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        }));
    };
    HttpConfigInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_error_dialog_errordialog_service__WEBPACK_IMPORTED_MODULE_2__["ErrorDialogService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_6__["TestService"]])
    ], HttpConfigInterceptor);
    return HttpConfigInterceptor;
}());



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TestService = /** @class */ (function () {
    function TestService(http) {
        this.http = http;
        this._requestList = [];
    }
    TestService.prototype.login = function (data) {
        // data = { email: 'admin@example.com', password: 'Test@123' };
        return this.http.post('https://api.ipify.org?format=json', data);
    };
    Object.defineProperty(TestService.prototype, "requestList", {
        get: function () {
            return this._requestList;
        },
        set: function (request) {
            this._requestList.push(request);
        },
        enumerable: true,
        configurable: true
    });
    TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/working/4. AngularJS/ReadyBid/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
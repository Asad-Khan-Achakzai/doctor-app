(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-dashboard-patient-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-dashboard/patient-dashboard.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-dashboard/patient-dashboard.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-header>\n    <ion-toolbar >\n      <ion-buttons slot=\"start\">\n        <ion-back-button  (click)=\"back()\" defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <div class =\"title\">\n        <ion-title>{{title}}</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card (click)=\"navigate('appointment')\">\n          <ion-card-header>\n            {{appointmentsLabel}}\n          </ion-card-header>\n          <ion-card-content>\n            <!-- <ion-icon src =\"../../../assets/appointment.png\" ></ion-icon> -->\n            <ion-icon name=\"layers-outline\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-header>\n            {{RecordsLabel}}\n          </ion-card-header>\n          <ion-card-content>\n            <ion-icon name=\"layers-outline\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-header>\n            {{AccountSettingLabel}}\n          </ion-card-header>\n          <ion-card-content>\n            <ion-icon name=\"layers-outline\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-card>\n          <ion-card-header>\n           {{ForumLabel}}\n          </ion-card-header>\n          <ion-card-content>\n            <ion-icon name=\"layers-outline\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PatientDashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardPageRoutingModule", function() { return PatientDashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _patient_dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-dashboard.page */ "./src/app/patient/patient-dashboard/patient-dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _patient_dashboard_page__WEBPACK_IMPORTED_MODULE_3__["PatientDashboardPage"]
    }
];
let PatientDashboardPageRoutingModule = class PatientDashboardPageRoutingModule {
};
PatientDashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientDashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: PatientDashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardPageModule", function() { return PatientDashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _patient_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-dashboard-routing.module */ "./src/app/patient/patient-dashboard/patient-dashboard-routing.module.ts");
/* harmony import */ var _patient_dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-dashboard.page */ "./src/app/patient/patient-dashboard/patient-dashboard.page.ts");







let PatientDashboardPageModule = class PatientDashboardPageModule {
};
PatientDashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _patient_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientDashboardPageRoutingModule"]
        ],
        declarations: [_patient_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["PatientDashboardPage"]]
    })
], PatientDashboardPageModule);



/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  height: 185px;\n}\n\nion-icon {\n  font-size: 118px;\n}\n\nion-card-header {\n  text-align: center;\n}\n\n.title {\n  text-align: center;\n}\n\nion-content {\n  --background: #edf0fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFFO0VBQ0ksa0JBQUE7QUFHTjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LWRhc2hib2FyZC9wYXRpZW50LWRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICAgIGhlaWdodDogMTg1cHg7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxMThweDtcclxuICB9XHJcbiAgaW9uLWNhcmQtaGVhZGVye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjZWRmMGZhO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/patient/patient-dashboard/patient-dashboard.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patient/patient-dashboard/patient-dashboard.page.ts ***!
  \*********************************************************************/
/*! exports provided: PatientDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDashboardPage", function() { return PatientDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




let PatientDashboardPage = class PatientDashboardPage {
    constructor(router, _translate) {
        this.router = router;
        this._translate = _translate;
        _translate.setDefaultLang('en');
    }
    ngOnInit() {
        this._translate.get("PatientDashboard").subscribe((res) => {
            console.log('translation = ', res);
            this.title = res.title;
            this.appointmentsLabel = res.Appointments;
            this.AccountSettingLabel = res.AccountSetting;
            this.ForumLabel = res.Forum;
            this.RecordsLabel = res.Records;
        });
    }
    back() {
    }
    navigate(value) {
        if (value == 'appointment') {
            this.router.navigateByUrl('/book-appointment');
        }
    }
};
PatientDashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
PatientDashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./patient-dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-dashboard/patient-dashboard.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./patient-dashboard.page.scss */ "./src/app/patient/patient-dashboard/patient-dashboard.page.scss")).default]
    })
], PatientDashboardPage);



/***/ })

}]);
//# sourceMappingURL=patient-patient-dashboard-patient-dashboard-module-es2015.js.map
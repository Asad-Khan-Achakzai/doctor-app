(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-doctor-profile-doctor-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-profile/doctor-profile.page.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-profile/doctor-profile.page.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDoctorDoctorProfileDoctorProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>doctor-profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/doctor/doctor-profile/doctor-profile-routing.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/doctor/doctor-profile/doctor-profile-routing.module.ts ***!
      \************************************************************************/

    /*! exports provided: DoctorProfilePageRoutingModule */

    /***/
    function srcAppDoctorDoctorProfileDoctorProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorProfilePageRoutingModule", function () {
        return DoctorProfilePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _doctor_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctor-profile.page */
      "./src/app/doctor/doctor-profile/doctor-profile.page.ts");

      var routes = [{
        path: '',
        component: _doctor_profile_page__WEBPACK_IMPORTED_MODULE_3__["DoctorProfilePage"]
      }];

      var DoctorProfilePageRoutingModule = function DoctorProfilePageRoutingModule() {
        _classCallCheck(this, DoctorProfilePageRoutingModule);
      };

      DoctorProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorProfilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/doctor/doctor-profile/doctor-profile.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/doctor/doctor-profile/doctor-profile.module.ts ***!
      \****************************************************************/

    /*! exports provided: DoctorProfilePageModule */

    /***/
    function srcAppDoctorDoctorProfileDoctorProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorProfilePageModule", function () {
        return DoctorProfilePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _doctor_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-profile-routing.module */
      "./src/app/doctor/doctor-profile/doctor-profile-routing.module.ts");
      /* harmony import */


      var _doctor_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctor-profile.page */
      "./src/app/doctor/doctor-profile/doctor-profile.page.ts");

      var DoctorProfilePageModule = function DoctorProfilePageModule() {
        _classCallCheck(this, DoctorProfilePageModule);
      };

      DoctorProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doctor_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorProfilePageRoutingModule"]],
        declarations: [_doctor_profile_page__WEBPACK_IMPORTED_MODULE_6__["DoctorProfilePage"]]
      })], DoctorProfilePageModule);
      /***/
    },

    /***/
    "./src/app/doctor/doctor-profile/doctor-profile.page.scss":
    /*!****************************************************************!*\
      !*** ./src/app/doctor/doctor-profile/doctor-profile.page.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDoctorDoctorProfileDoctorProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3Rvci9kb2N0b3ItcHJvZmlsZS9kb2N0b3ItcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/doctor/doctor-profile/doctor-profile.page.ts":
    /*!**************************************************************!*\
      !*** ./src/app/doctor/doctor-profile/doctor-profile.page.ts ***!
      \**************************************************************/

    /*! exports provided: DoctorProfilePage */

    /***/
    function srcAppDoctorDoctorProfileDoctorProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorProfilePage", function () {
        return DoctorProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DoctorProfilePage = /*#__PURE__*/function () {
        function DoctorProfilePage() {
          _classCallCheck(this, DoctorProfilePage);
        }

        _createClass(DoctorProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DoctorProfilePage;
      }();

      DoctorProfilePage.ctorParameters = function () {
        return [];
      };

      DoctorProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctor-profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-profile/doctor-profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctor-profile.page.scss */
        "./src/app/doctor/doctor-profile/doctor-profile.page.scss"))["default"]]
      })], DoctorProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=doctor-doctor-profile-doctor-profile-module-es5.js.map
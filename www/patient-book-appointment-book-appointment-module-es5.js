(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-book-appointment-book-appointment-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/book-appointment/book-appointment.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/book-appointment/book-appointment.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPatientBookAppointmentBookAppointmentPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"title\">\n      <ion-title>Book an appointment</ion-title>\n    </div>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar placeholder=\"Filter Doctor name\"></ion-searchbar>\n  <ion-searchbar placeholder=\"Filter Specialities\"></ion-searchbar>\n  <ion-searchbar placeholder=\"Filter location\"></ion-searchbar>\n  <ion-button shape=\"round\" size=\"full\">Search</ion-button>\n\n  <ion-list class=\"ion-no-padding\">\n    <div>\n\n      <div *ngFor=\"let chat of doctors; let i=index\">\n        <ion-item (click)=\"goforDoctorProfile(chat)\">\n          <ion-thumbnail slot=\"start\">\n            <ion-img class=\"user-img\" [src]=\"chat.imageUrl\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <div class=\"withcount\">\n              <div class=\"nameAvatar\">\n                <h2>{{chat.username}}\n                </h2>\n              </div>\n\n              <div class=\"timeEnd\">\n                <ion-text slot=\"end\">Rating</ion-text>\n\n              </div>\n            </div>\n            <div>\n              <div class=\"withcount\">\n                <p class=\"widthHalf2\">location</p>\n                <p class=\"widthHalf1\">Speciality</p>\n              </div>\n\n            </div>\n\n          </ion-label>\n        </ion-item>\n\n      </div>\n    </div>\n\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/patient/book-appointment/book-appointment-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/patient/book-appointment/book-appointment-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: BookAppointmentPageRoutingModule */

    /***/
    function srcAppPatientBookAppointmentBookAppointmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookAppointmentPageRoutingModule", function () {
        return BookAppointmentPageRoutingModule;
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


      var _book_appointment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./book-appointment.page */
      "./src/app/patient/book-appointment/book-appointment.page.ts");

      var routes = [{
        path: '',
        component: _book_appointment_page__WEBPACK_IMPORTED_MODULE_3__["BookAppointmentPage"]
      }];

      var BookAppointmentPageRoutingModule = function BookAppointmentPageRoutingModule() {
        _classCallCheck(this, BookAppointmentPageRoutingModule);
      };

      BookAppointmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookAppointmentPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/patient/book-appointment/book-appointment.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/patient/book-appointment/book-appointment.module.ts ***!
      \*********************************************************************/

    /*! exports provided: BookAppointmentPageModule */

    /***/
    function srcAppPatientBookAppointmentBookAppointmentModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookAppointmentPageModule", function () {
        return BookAppointmentPageModule;
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


      var _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./book-appointment-routing.module */
      "./src/app/patient/book-appointment/book-appointment-routing.module.ts");
      /* harmony import */


      var _book_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./book-appointment.page */
      "./src/app/patient/book-appointment/book-appointment.page.ts");

      var BookAppointmentPageModule = function BookAppointmentPageModule() {
        _classCallCheck(this, BookAppointmentPageModule);
      };

      BookAppointmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_appointment_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookAppointmentPageRoutingModule"]],
        declarations: [_book_appointment_page__WEBPACK_IMPORTED_MODULE_6__["BookAppointmentPage"]]
      })], BookAppointmentPageModule);
      /***/
    },

    /***/
    "./src/app/patient/book-appointment/book-appointment.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/patient/book-appointment/book-appointment.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPatientBookAppointmentBookAppointmentPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  text-align: center;\n}\n\n.searchbar-search-icon {\n  background-image: url(\"http://i.imgur.com/ATn5jLZ.png\");\n}\n\nion-content {\n  --background: #edf0fa;\n}\n\nion-toolbar {\n  --background: linear-gradient(197deg, rgba(100,100,100,1) 0%, rgba(63,63,63,1) 13.5%, rgba(29,29,29,1) 33.33%, rgba(0,0,0,1) 100%) !important;\n  color: white;\n}\n\nion-item {\n  --background: #edf0fa;\n}\n\nion-item:hover {\n  cursor: pointer;\n}\n\n.title {\n  text-align: center;\n}\n\nbutton {\n  color: red;\n}\n\n.plusClass {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  background: white;\n  border-radius: 50%;\n  right: 15px;\n  position: relative;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nion-header:after {\n  background-image: none;\n  left: 0;\n  bottom: -8px;\n  background-position: left 0 top 0;\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  content: \"\";\n}\n\n.contentCenter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.padding_right {\n  padding-right: 8px;\n}\n\n.tab-icon {\n  font-size: 20px;\n}\n\n.withcount {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chatCount {\n  width: 17px !important;\n  height: 17px !important;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 10px;\n  font-weight: bold;\n  color: var(--background);\n  margin-left: 8px;\n}\n\n.timeEnd {\n  display: flex;\n  justify-content: flex-end;\n  width: 50%;\n}\n\n.widthHalf {\n  width: 70%;\n  font-size: 12px;\n  color: gray;\n}\n\n.widthHalf1 {\n  width: 70%;\n  font-size: 12px;\n  color: gray;\n  text-align: end;\n}\n\n.widthHalf2 {\n  width: 70%;\n  font-size: 12px;\n  color: gray;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.nameAvatar {\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  width: 50%;\n}\n\n.nameAvatar h2 {\n  font-size: 0.94em;\n  font-weight: bold;\n}\n\nion-text {\n  font-size: 10px;\n}\n\n.sc-ion-label-ios-h {\n  height: 44px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.online {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #92ff92;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.ofline {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #c1c3c1;\n  height: 10px;\n  border-radius: 50%;\n}\n\nion-chip {\n  --background: #9dc912;\n  --color: #fff;\n}\n\n.user-img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 11px;\n  border: 2px solid #fff;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.36);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9ib29rLWFwcG9pbnRtZW50L2Jvb2stYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDRTtFQUNFLHVEQUFBO0FBRUo7O0FBQUE7RUFDRSxxQkFBQTtBQUdGOztBQURBO0VBQ0UsNklBQUE7RUFDQSxZQUFBO0FBSUY7O0FBRkE7RUFDRSxxQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7QUFPRjs7QUFMQTtFQUNFLFVBQUE7QUFRRjs7QUFOQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseURBQUE7QUFTSjs7QUFOSTtFQUVFLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBUU47O0FBSkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUpFO0VBQ0Usa0JBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7QUFRSjs7QUFORTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBTkU7RUFFRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTEU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFTSjs7QUFORTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFQRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVKOztBQVJFO0VBQ0UsaUJBQUE7QUFXSjs7QUFURTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVlKOztBQVhJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQWFOOztBQVZFO0VBQ0UsZUFBQTtBQWFKOztBQVhFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBY0o7O0FBWEU7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBYUo7O0FBVkU7RUFDRSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBWUo7O0FBVkU7RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUFhSjs7QUFYRTtFQUVFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUFhSiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvYm9vay1hcHBvaW50bWVudC9ib29rLWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9pLmltZ3VyLmNvbS9BVG41akxaLnBuZ1wiKTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAtLWJhY2tncm91bmQ6ICAjZWRmMGZhO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxOTdkZWcsIHJnYmEoMTAwLDEwMCwxMDAsMSkgMCUsIHJnYmEoNjMsNjMsNjMsMSkgMTMuNSUsIHJnYmEoMjksMjksMjksMSkgMzMuMzMlLCByZ2JhKDAsMCwwLDEpIDEwMCUpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZDogICNlZGYwZmE7XHJcbn1cclxuaW9uLWl0ZW06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbntcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5wbHVzQ2xhc3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICB9XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgLy9ib3gtc2hhZG93OiAwIDBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAtOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIDA7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29udGVudENlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ19yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC50YWItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIC53aXRoY291bnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgLmNoYXRDb3VudCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aW1lRW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgLndpZHRoSGFsZiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcblxyXG4gIH1cclxuICAud2lkdGhIYWxmMXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcbiAgLndpZHRoSGFsZjJ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIC5ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5uYW1lQXZhdGFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDAuOTRlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgLnNjLWlvbi1sYWJlbC1pb3MtaCB7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAub25saW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHJpZ2h0OiA2cHg7XHJcbiAgICBsZWZ0OiA0OHB4O1xyXG4gICAgdG9wOiA1OCU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM5MmZmOTI7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vZmxpbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gcmlnaHQ6IDZweDtcclxuICAgIGxlZnQ6IDQ4cHg7XHJcbiAgICB0b3A6IDU4JTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2MxYzNjMTtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbiAgaW9uLWNoaXAge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjOWRjOTEyO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG4gIC51c2VyLWltZyB7XHJcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zNik7XHJcbiAgfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/patient/book-appointment/book-appointment.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/patient/book-appointment/book-appointment.page.ts ***!
      \*******************************************************************/

    /*! exports provided: BookAppointmentPage */

    /***/
    function srcAppPatientBookAppointmentBookAppointmentPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookAppointmentPage", function () {
        return BookAppointmentPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/sdk/custom/doctor.service */
      "./src/app/sdk/custom/doctor.service.ts");

      var BookAppointmentPage = /*#__PURE__*/function () {
        function BookAppointmentPage(router, doctorService, alertController) {
          _classCallCheck(this, BookAppointmentPage);

          this.router = router;
          this.doctorService = doctorService;
          this.alertController = alertController;
        }

        _createClass(BookAppointmentPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getDoctor();
          }
        }, {
          key: "getDoctor",
          value: function getDoctor() {
            var _this = this;

            this.doctorService.getAllDoctors().subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log('doctor =', data);
                        this.doctors = data.data.docs;
                        console.log('this.doctors =', this.doctors);
                        this.loading = false; // this.router.navigateByUrl('/home');

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var alert;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        this.loading = false;
                        _context2.next = 3;
                        return this.alertController.create({
                          header: 'Alert',
                          //subHeader: 'Subtitle',
                          message: error.error.message,
                          buttons: ['OK']
                        });

                      case 3:
                        alert = _context2.sent;
                        alert.present();

                      case 5:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "goforDoctorProfile",
          value: function goforDoctorProfile(doctor) {
            this.router.navigateByUrl('/doctor-profile');
          }
        }]);

        return BookAppointmentPage;
      }();

      BookAppointmentPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      BookAppointmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-appointment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./book-appointment.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/book-appointment/book-appointment.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./book-appointment.page.scss */
        "./src/app/patient/book-appointment/book-appointment.page.scss"))["default"]]
      })], BookAppointmentPage);
      /***/
    },

    /***/
    "./src/app/sdk/server.config.ts":
    /*!**************************************!*\
      !*** ./src/app/sdk/server.config.ts ***!
      \**************************************/

    /*! exports provided: Path */

    /***/
    function srcAppSdkServerConfigTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Path", function () {
        return Path;
      });

      var Path = /*#__PURE__*/function () {
        function Path() {
          _classCallCheck(this, Path);
        }

        _createClass(Path, null, [{
          key: "getPath",
          value: function getPath() {
            return Path.path;
          }
        }]);

        return Path;
      }();

      Path.path = 'http://localhost:3000';
      /***/
    }
  }]);
})();
//# sourceMappingURL=patient-book-appointment-book-appointment-module-es5.js.map
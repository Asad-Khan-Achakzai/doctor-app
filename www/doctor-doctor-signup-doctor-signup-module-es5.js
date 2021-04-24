(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctor-doctor-signup-doctor-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDoctorDoctorSignupCheckupTimingCheckupTimingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-button color=\"dark\" (click)=\"closeModal()\">\n          <ion-icon color=\"light\" name=\"arrow-back\"></ion-icon>\n        </ion-button>      </ion-buttons>\n      <div class=\"title\">\n        <ion-title>Checkup Time</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"mainDiv\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"8\" offset-md=\"2\">\n          <div [formGroup]=\"Form\">\n          <ion-item>\n            <ion-label position=\"floating\">\n              Timing From\n            </ion-label>\n            <ion-datetime displayFormat=\"hh-mm-A\" [(ngModel)]=\"timingValueFrom\" [ngModelOptions]=\"{ standalone: true }\">\n            </ion-datetime>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"floating\">\n              Timing End\n            </ion-label>\n            <ion-datetime displayFormat=\"hh-mm-A\" [(ngModel)]=\"timingValueEnd\" [ngModelOptions]=\"{ standalone: true }\">\n            </ion-datetime>\n          </ion-item>\n          <!-- <ion-item>\n            <ion-label position=\"floating\">\n              Diagnose Time\n            </ion-label>\n            <ion-input type=\"text\" formControlName=\"diagnoseTime\">\n            </ion-input>\n          </ion-item> -->\n          <ion-item>\n            <ion-label>Diagnose Time</ion-label>\n            <ion-select formControlName=\"diagnoseTime\">\n              <ion-select-option value=\"1h\">1 Hour</ion-select-option>\n              <ion-select-option value=\"30m\">30 Minutes</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-select multiple=\"true\" text-center interface=\"action-sheet\" formControlName=\"offDays\" interface=\"popover\" placeholder=\"offDays\">\n              <ion-select-option *ngFor=\"let day of Days\" [value]=\"day\">{{day}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-button expand=\"full\" shape=\"round\" (click)=\"submit()\" >\n            Save \n          </ion-button>\n        </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/doctor-signup.page.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/doctor-signup.page.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppDoctorDoctorSignupDoctorSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button (click)=\"back()\" defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <div class=\"title\">\n        <ion-title>Registration</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"mainDiv\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"8\" offset-md=\"2\">\n          <div [formGroup]=\"Form\">\n            <ion-card>\n              <ion-card-header>\n                <div class=\"title\">\n                  <ion-card-title color=\"light\" size=\"large\" text-center>Welcome</ion-card-title>\n                </div>\n              </ion-card-header>\n            </ion-card>\n            <ion-card-content>\n              <ion-row>\n                <ion-col size=\"6\">\n                  <ion-item>\n                    <ion-label position=\"floating\">\n                      User Name\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"username\">\n                    </ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label position=\"floating\">\n                      Cnic Number\n                    </ion-label>\n                    <ion-input type=\"tel\" formControlName=\"cnic\" appCnicMask maxlength=\"15\">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"6\" id=\"imageCol\">\n                  <app-image-picker (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n                </ion-col>\n              </ion-row>\n              <ion-item>\n                <ion-label position=\"floating\">\n                  Phone#\n                </ion-label>\n                <ion-input type=\"tel\" formControlName=\"phone\" appPhoneMask maxlength=\"12\">\n                </ion-input>\n              </ion-item>\n              <ion-row>\n                <ion-col size=\"8\">\n                  <ion-item *ngIf=\"disableEmailColumn\">\n                    <ion-label position=\"floating\">\n                      Valid Gmail Address\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"email\" id=\"emailaddress\">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button *ngIf=\"disableEmailColumn\" expand=\"full\" [disabled]=\"!Form.value['email']\"\n                    (click)=\"sendEmail()\">\n                    Send Code &nbsp;<ion-spinner *ngIf=\"verifyLoading\"></ion-spinner>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col size=\"8\">\n                  <ion-item *ngIf=\"vissible\">\n                    <ion-label position=\"floating\">\n                      Enter code\n                    </ion-label>\n                    <ion-input type=\"text\" formControlName=\"code\">\n                    </ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <ion-button *ngIf=\"vissible\" expand=\"full\" (click)=\"verifyCode()\">\n                    Verify</ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-item>\n                <ion-label position=\"floating\">\n                  Password\n                </ion-label>\n                <ion-input type=\"password\" formControlName=\"password\">\n                </ion-input>\n              </ion-item>\n             \n              <ion-item>\n                <ion-select multiple=\"true\" text-center interface=\"action-sheet\" formControlName=\"specialities\" (ionChange)=\"optionsFn()\" interface=\"popover\" placeholder=\"Specialities\">\n                  <ion-select-option *ngFor=\"let employee of specialities\" [value]=\"employee\">{{employee}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-button expand=\"full\" shape=\"round\" (click) = \"CheckupTIming()\">\n                Checkup Timing\n               </ion-button >\n              <ion-row justify-content: end>\n                <ion-col class=\"ion-text-center\">\n                  <ion-button expand=\"full\" shape=\"round\" (click)=\"signUpButton()\" [disabled]=\"!Form.valid\">\n                    Sign Up &nbsp;<ion-spinner *ngIf=\"loading\"></ion-spinner>\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              <ion-row >\n                <ion-col siz-sm=\"3\" offset-sm=\"3\">\n               <app-location-picker  (locationPick)=\"onLocationPicked($event)\"></app-location-picker>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDoctorDoctorSignupCheckupTimingCheckupTimingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #93F9B9, #1D976C);\n}\n\nion-toolbar {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\nion-list {\n  background-color: transparent;\n}\n\nion-card-content {\n  --background: transparent;\n}\n\nion-menu-toggle {\n  --background: transparent;\n}\n\nion-select-option {\n  color: black;\n}\n\nion-card {\n  --background: transparent;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-button {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\n.title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3Rvci1zaWdudXAvY2hlY2t1cC10aW1pbmcvY2hlY2t1cC10aW1pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx1REFBQTtBQUZKOztBQUtFO0VBQ0UsOEVBQUE7QUFGSjs7QUFJRTtFQUNFLDZCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtBQUFKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx5QkFBQTtBQUVKOztBQUFFO0VBQ0UsOEVBQUE7QUFHSjs7QUFERTtFQUNJLGtCQUFBO0FBSU4iLCJmaWxlIjoic3JjL2FwcC9kb2N0b3IvZG9jdG9yLXNpZ251cC9jaGVja3VwLXRpbWluZy9jaGVja3VwLXRpbWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICNzY3JvbHtcclxuLy8gaGVpZ2h0OiAxODBweDtcclxuLy8gfVxyXG5pb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzkzRjlCOSwgIzFEOTc2Qyk7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzRFNUUgMCUsICM3MUIyODAgNTElLCAjMTM0RTVFIDEwMCUpO1xyXG4gIH1cclxuICBpb24tbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLW1lbnUtdG9nZ2xle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICBcclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0RTVFIDAlLCAjNzFCMjgwIDUxJSwgIzEzNEU1RSAxMDAlKTtcclxuICB9XHJcbiAgLnRpdGxle1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: CheckupTimingComponent */

    /***/
    function srcAppDoctorDoctorSignupCheckupTimingCheckupTimingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckupTimingComponent", function () {
        return CheckupTimingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/sdk/custom/doctor.service */
      "./src/app/sdk/custom/doctor.service.ts");

      var CheckupTimingComponent = /*#__PURE__*/function () {
        function CheckupTimingComponent(modalCtrl, datepipe, doctorService, menu, toastController, router, formBuilder, platform, alertController) {
          _classCallCheck(this, CheckupTimingComponent);

          this.modalCtrl = modalCtrl;
          this.datepipe = datepipe;
          this.doctorService = doctorService;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.alertController = alertController;
          this.slots = [];
          this.Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        }

        _createClass(CheckupTimingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Form = this.formBuilder.group({
              timingStart: [],
              timingEnd: [],
              diagnoseTime: [],
              slots: [[]],
              numberOfSlots: [],
              offDays: [[]] //confirmPassword: [null, [Validators.required]],

            });
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalCtrl.dismiss();
          }
        }, {
          key: "submit",
          value: function submit() {
            this.createSlots();
            this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');
            this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');
            this.Form.patchValue({
              slots: this.slots,
              numberOfSlots: this.count,
              timingStart: this.timingValueFrom,
              timingEnd: this.timingValueEnd
            });
            console.log('form =', this.Form.value);
            this.doctorService.doctorTiming = this.Form.value;
            this.modalCtrl.dismiss();
          }
        }, {
          key: "createSlots",
          value: function createSlots() {
            var diagnoseTIme;

            if (this.Form.value['diagnoseTime'] == '1h') {
              diagnoseTIme = 3600000;
            } else {
              diagnoseTIme = 30 * 60000;
            }

            this.timingValueFrom = new Date(this.timingValueFrom); //this.timingValueFrom = this.datepipe.transform(this.timingValueFrom, 'shortTime');

            this.timingValueEnd = new Date(this.timingValueEnd); // this.timingValueEnd = this.datepipe.transform(this.timingValueEnd, 'shortTime');

            console.log('start time ', this.timingValueFrom);
            console.log('end time ', this.timingValueEnd);
            this.count = 0;
            var dif = this.timingValueFrom.getTime();

            while (dif < this.timingValueEnd.getTime()) {
              var slotN = 'slot' + Math.floor(Math.random() * 1000) + 1;
              this.count++;
              var slot = new Date(dif);
              this.slots.push({
                DateAndTime: this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'),
                status: 'empty',
                slotNumber: this.count,
                slotId: slotN
              }); // console.log("Hour Slot --->" + this.datepipe.transform(slot, 'dd/MM/yyyy hh:mm a'));

              dif += diagnoseTIme;
            }

            this.slots.splice(this.slots.length - 1, 1);
            console.log('this.slots --->', this.slots);
          }
        }]);

        return CheckupTimingComponent;
      }();

      CheckupTimingComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
        }, {
          type: src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_6__["DoctorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      CheckupTimingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-checkup-timing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkup-timing.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkup-timing.component.scss */
        "./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.scss"))["default"]]
      })], CheckupTimingComponent);
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/doctor-signup-routing.module.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/doctor-signup-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: DoctorSignupPageRoutingModule */

    /***/
    function srcAppDoctorDoctorSignupDoctorSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorSignupPageRoutingModule", function () {
        return DoctorSignupPageRoutingModule;
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


      var _doctor_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctor-signup.page */
      "./src/app/doctor/doctor-signup/doctor-signup.page.ts");

      var routes = [{
        path: '',
        component: _doctor_signup_page__WEBPACK_IMPORTED_MODULE_3__["DoctorSignupPage"]
      }];

      var DoctorSignupPageRoutingModule = function DoctorSignupPageRoutingModule() {
        _classCallCheck(this, DoctorSignupPageRoutingModule);
      };

      DoctorSignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorSignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/doctor-signup.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/doctor-signup.module.ts ***!
      \**************************************************************/

    /*! exports provided: DoctorSignupPageModule */

    /***/
    function srcAppDoctorDoctorSignupDoctorSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorSignupPageModule", function () {
        return DoctorSignupPageModule;
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


      var _doctor_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-signup-routing.module */
      "./src/app/doctor/doctor-signup/doctor-signup-routing.module.ts");
      /* harmony import */


      var _doctor_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctor-signup.page */
      "./src/app/doctor/doctor-signup/doctor-signup.page.ts");
      /* harmony import */


      var src_app_shared_masks_masks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/masks/masks.module */
      "./src/app/shared/masks/masks.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _checkup_timing_checkup_timing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./checkup-timing/checkup-timing.component */
      "./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.ts");

      var DoctorSignupPageModule = function DoctorSignupPageModule() {
        _classCallCheck(this, DoctorSignupPageModule);
      };

      DoctorSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_masks_masks_module__WEBPACK_IMPORTED_MODULE_7__["MasksModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _doctor_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorSignupPageRoutingModule"]],
        declarations: [_doctor_signup_page__WEBPACK_IMPORTED_MODULE_6__["DoctorSignupPage"], _checkup_timing_checkup_timing_component__WEBPACK_IMPORTED_MODULE_9__["CheckupTimingComponent"]],
        entryComponents: [_checkup_timing_checkup_timing_component__WEBPACK_IMPORTED_MODULE_9__["CheckupTimingComponent"]]
      })], DoctorSignupPageModule);
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/doctor-signup.page.scss":
    /*!**************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/doctor-signup.page.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppDoctorDoctorSignupDoctorSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #93F9B9, #1D976C);\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-card-title {\n  --background: transparent;\n}\n\nion-card {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-button {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\n.title {\n  text-align: center;\n}\n\n#image {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n}\n\n#imageButton {\n  width: 180px;\n  height: 155px;\n}\n\n#imageCol {\n  text-align: center;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9jdG9yL2RvY3Rvci1zaWdudXAvZG9jdG9yLXNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtBQUNKOztBQUVFO0VBQ0MseUJBQUE7QUFDSDs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSw4RUFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFGRTtFQUNFLDhFQUFBO0FBS0o7O0FBSEU7RUFDSSxrQkFBQTtBQU1OOztBQUpJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBT047O0FBSkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQU9OOztBQUxJO0VBQ0Usa0JBQUE7QUFRTjs7QUFOSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBU047O0FBUEk7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQVVOOztBQVJJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVdOOztBQVBJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVVOOztBQVBJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFVTjs7QUFQSTtFQUNFLGtCQUFBO0FBVU47O0FBUk07RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVVSIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9yL2RvY3Rvci1zaWdudXAvZG9jdG9yLXNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzkzRjlCOSwgIzFEOTc2Qyk7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0RTVFIDAlLCAjNzFCMjgwIDUxJSwgIzEzNEU1RSAxMDAlKTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzRFNUUgMCUsICM3MUIyODAgNTElLCAjMTM0RTVFIDEwMCUpO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNpbWFnZXtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgXHJcbiAgICB9XHJcbiAgICAjaW1hZ2VCdXR0b257XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiAxNTVweDtcclxuICAgIH1cclxuICAgICNpbWFnZUNvbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZpbGVJbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgaGVpZ2h0OiAwLjFweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5maWxlSW5wdXQgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAjbWFwX2NhbnZhcyB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgI2FkZHJlc3Mge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAjbWFwIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNzB2aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hcC13cmFwcGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAgICNtYXBfY2VudGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgICAgIH1cclxuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/doctor/doctor-signup/doctor-signup.page.ts":
    /*!************************************************************!*\
      !*** ./src/app/doctor/doctor-signup/doctor-signup.page.ts ***!
      \************************************************************/

    /*! exports provided: DoctorSignupPage */

    /***/
    function srcAppDoctorDoctorSignupDoctorSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorSignupPage", function () {
        return DoctorSignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/sdk/custom/doctor.service */
      "./src/app/sdk/custom/doctor.service.ts");
      /* harmony import */


      var src_app_sdk_custom_patient_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/sdk/custom/patient-service.service */
      "./src/app/sdk/custom/patient-service.service.ts");
      /* harmony import */


      var _checkup_timing_checkup_timing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./checkup-timing/checkup-timing.component */
      "./src/app/doctor/doctor-signup/checkup-timing/checkup-timing.component.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      function base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = window.atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          var begin = sliceIndex * sliceSize;
          var end = Math.min(begin + sliceSize, bytesLength);
          var bytes = new Array(end - begin);

          for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
          }

          byteArrays[sliceIndex] = new Uint8Array(bytes);
        }

        return new Blob(byteArrays, {
          type: contentType
        });
      }

      var DoctorSignupPage = /*#__PURE__*/function () {
        function DoctorSignupPage(geolocation, nativeGeocoder, modalController, datepipe, patientService, doctorService, menu, toastController, router, formBuilder, platform, alertController) {
          _classCallCheck(this, DoctorSignupPage);

          this.geolocation = geolocation;
          this.nativeGeocoder = nativeGeocoder;
          this.modalController = modalController;
          this.datepipe = datepipe;
          this.patientService = patientService;
          this.doctorService = doctorService;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.formBuilder = formBuilder;
          this.platform = platform;
          this.alertController = alertController;
          this.loading = false;
          this.vissible = false;
          this.verifyLoading = false;
          this.emailVerified = false;
          this.disableEmailColumn = true;
          this.specialities = ['Apple', 'Orange', 'Banana'];
        }

        _createClass(DoctorSignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.Form = this.formBuilder.group({
              username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z ]*$')]],
              cnic: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(13)]],
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(12)]],
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
              imageUrl: [],
              timing: [],
              specialities: [[]],
              Location: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }, {
          key: "onLocationPicked",
          value: function onLocationPicked(location) {
            console.log('location = ', location);
            var n = "".concat(location.address).split(",");
            var loc = "".concat(location.address).split(",")[n.length - 2]; //const loc = location.address.slice(location.address.lastIndexOf(',') + 2);

            console.log('loc = ', loc);
            this.Form.patchValue({
              Location: location.address
            });
            this.Form.patchValue({
              city: loc
            });
          }
        }, {
          key: "onImagePicked",
          value: function onImagePicked(imageData) {
            //console.log('imageData = ',imageData);
            var imageFile;

            if (typeof imageData === 'string') {
              try {
                imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
              } catch (error) {
                console.log(error);
                return;
              }
            } else {
              imageFile = imageData;
            }

            console.log('image path = ', imageFile);
            this.Form.patchValue({
              image: imageFile
            });
          }
        }, {
          key: "signUpButton",
          value: function signUpButton() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
                      this.Form.patchValue({
                        timing: this.doctorService.doctorTiming
                      }); // this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);

                      console.log('form value = ', this.Form.value);
                      this.doctorService.doctorRegister(this.Form.value).subscribe(function (data) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var toast;
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  console.log('got response from server', data);
                                  _context.next = 3;
                                  return this.toastController.create({
                                    message: data.message,
                                    // message: `${name} has been saved successfully.`,
                                    duration: 3500
                                  });

                                case 3:
                                  toast = _context.sent;
                                  toast.present();

                                  if (data.message === 'Signup successful') {
                                    this.router.navigateByUrl('/home');
                                  }

                                  this.loading = false; // this.router.navigateByUrl('/home');

                                case 7:
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

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "sendEmail",
          value: function sendEmail() {
            var _this2 = this;

            this.patientService.sendMail({
              email: this.Form.controls['email'].value
            }).subscribe(function (data) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var toast;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        this.verifyLoading = false;
                        console.log('got response from server', data);
                        _context4.next = 4;
                        return this.toastController.create({
                          message: data.message,
                          // message: `${name} has been saved successfully.`,
                          duration: 3500
                        });

                      case 4:
                        toast = _context4.sent;
                        this.code = data.code;
                        toast.present();

                        if (data.message === 'Email sent successfuly') {
                          this.vissible = true;
                          this.disableEmailColumn = false;
                        }

                        this.loading = false; // this.router.navigateByUrl('/home');

                      case 9:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var toast;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        this.loading = false;
                        _context5.next = 3;
                        return this.toastController.create({
                          message: error.error.message,
                          // message: `${name} has been saved successfully.`,
                          duration: 3500
                        });

                      case 3:
                        toast = _context5.sent;

                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, this);
              }));
            });
          }
        }, {
          key: "CheckupTIming",
          value: function CheckupTIming() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var modal;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.modalController.create({
                        component: _checkup_timing_checkup_timing_component__WEBPACK_IMPORTED_MODULE_9__["CheckupTimingComponent"]
                      });

                    case 2:
                      modal = _context6.sent;
                      _context6.next = 5;
                      return modal.present();

                    case 5:
                      return _context6.abrupt("return", _context6.sent);

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "optionsFn",
          value: function optionsFn() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }]);

        return DoctorSignupPage;
      }();

      DoctorSignupPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_10__["Geolocation"]
        }, {
          type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
        }, {
          type: src_app_sdk_custom_patient_service_service__WEBPACK_IMPORTED_MODULE_8__["PatientServiceService"]
        }, {
          type: src_app_sdk_custom_doctor_service__WEBPACK_IMPORTED_MODULE_7__["DoctorService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      DoctorSignupPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['map', {
            "static": false
          }]
        }]
      };
      DoctorSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-doctor-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctor-signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/doctor/doctor-signup/doctor-signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctor-signup.page.scss */
        "./src/app/doctor/doctor-signup/doctor-signup.page.scss"))["default"]]
      })], DoctorSignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=doctor-doctor-signup-doctor-signup-module-es5.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-pass/forgot-pass.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-pass/forgot-pass.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeForgotPassForgotPassComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"dark\" (click)=\"closeModal()\">\n        <ion-icon color=\"dark\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <div id=\"title\">\n    <ion-title>Get Password</ion-title>\n  </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n \n  <ion-grid>\n    <ion-row>\n<ion-col>\n  <ion-item *ngIf=\"sendCodeButton\">\n    <ion-label  position = \"floating\" >\n      Email\n    </ion-label>\n    <ion-input type=\"email\" [(ngModel)]=\"email\"  >\n    </ion-input>\n  </ion-item>\n</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button *ngIf=\"sendCodeButton\" [disabled]=\"!email\" expand=\"full\" shape = \"round\" (click)=\"sendEmail()\">send code\n          &nbsp;<ion-spinner *ngIf=\"loading\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngIf=\"vissible && verifyCodeButton\">\n          <ion-label position = \"floating\" >\n            Enter code\n          </ion-label>\n          <ion-input type =\"text\" [(ngModel)]=\"code\"  >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col  >\n        <ion-button *ngIf=\"vissible && verifyCodeButton\" expand=\"full\" shape = \"round\" (click)=\"verifyCode()\" >\n          Verify</ion-button>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngIf=\"emailVerified\">\n          <ion-label position = \"floating\" >\n            new password\n          </ion-label>\n          <ion-input type =\"password\" [(ngModel)]=\"password\"  >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngIf=\"emailVerified\">\n          <ion-label position = \"floating\" >\n            Conform password\n          </ion-label>\n          <ion-input type =\"password\" [(ngModel)]=\"conformPassword\"  >\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-button *ngIf=\"emailVerified \" [disabled]=\"password !== conformPassword\" expand=\"full\" shape = \"round\" (click)=\"changePassword()\">Save\n        &nbsp;<ion-spinner *ngIf=\"loading\"></ion-spinner>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n  </ion-grid>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <div [formGroup]=\"Form\">\n          <ion-card>\n            <ion-card-header>\n              \n                <ion-select [(ngModel)]=\"language\"  [ngModelOptions]=\"{ standalone: true }\" (ionChange)=\"optionsFn()\">\n                  <ion-select-option value=\"English\">English</ion-select-option>\n                  <ion-select-option value=\"Pashtoo\">Pashtoo</ion-select-option>\n                </ion-select>\n                <div class=\"title\">\n                  <ion-card-title >{{title}}</ion-card-title>\n                </div>\n            </ion-card-header>\n          </ion-card>\n          <ion-card-content>\n            <ion-item>\n              <ion-label color=\"light\" position=\"floating\">\n                {{username }}\n              </ion-label>\n              <ion-input type=\"text\" formControlName=\"email\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"light\" position=\"floating\">\n                {{password}}\n              </ion-label>\n              <ion-input type=\"password\" formControlName=\"password\">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"light\">{{userType}}</ion-label>\n              <ion-select formControlName=\"slectedGender\" >\n                <ion-select-option value=\"patient\">Patient</ion-select-option>\n                <ion-select-option value=\"doctor\">Doctor</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"7\">\n              </ion-col>\n              <ion-col size=\"5\">\n                <ion-row>\n                  <a (click)=\"forgotPass()\" id=\"pass\">{{forgotPassword}}</a>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row justify-content-center>\n              <div padding id=\"buttonDIv\">\n                <ion-button size=\"large\" id=\"logButton\" expand=\"full\" shape=\"round\" (click)=\"loginButton()\"\n                  [disabled]=\"!Form.valid\">\n                  {{login}} &nbsp;<ion-spinner *ngIf=\"loading\"></ion-spinner>\n                </ion-button>\n              </div>\n            </ion-row>\n            <ion-row justify-content-center>\n              <div padding id=\"buttonDIv\">\n                <ion-button size=\"large\" color=\"light\" expand=\"full\" shape=\"round\" fill=\"outline\" (click)=\"signUp()\">\n                  {{sign_Up}}</ion-button>\n              </div>\n            </ion-row>\n          </ion-card-content>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/home/forgot-pass/forgot-pass.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/home/forgot-pass/forgot-pass.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeForgotPassForgotPassComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #93F9B9, #1D976C);\n}\n\nion-toolbar {\n  --background: linear-gradient(to right, #e8faff 0%, #71B280 51%, #134E5E 100%);\n  color: white;\n}\n\nion-card-title {\n  --background: transparent;\n}\n\nion-card {\n  --background: linear-gradient(to right, #e8faff 0%, #71B280 51%, #134E5E 100%);\n  color: white;\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-button {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\n#title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb3Jnb3QtcGFzcy9mb3Jnb3QtcGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0FBQ0o7O0FBRUU7RUFDRSw4RUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSw4RUFBQTtFQUNBLFlBQUE7QUFHSjs7QUFERTtFQUNFLHlCQUFBO0FBSUo7O0FBRkU7RUFDRSw4RUFBQTtBQUtKOztBQUhFO0VBQ0Usa0JBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZm9yZ290LXBhc3MvZm9yZ290LXBhc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzkzRjlCOSwgIzFEOTc2Qyk7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlOGZhZmYgMCUsICM3MUIyODAgNTElLCAjMTM0RTVFIDEwMCUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZThmYWZmIDAlLCAjNzFCMjgwIDUxJSwgIzEzNEU1RSAxMDAlKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzRFNUUgMCUsICM3MUIyODAgNTElLCAjMTM0RTVFIDEwMCUpO1xyXG4gIH1cclxuICAjdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/home/forgot-pass/forgot-pass.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/home/forgot-pass/forgot-pass.component.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPassComponent */

    /***/
    function srcAppHomeForgotPassForgotPassComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPassComponent", function () {
        return ForgotPassComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { AuthService } from 'src/app/sdk/core/auth.service';
      // import { CustomersService } from 'src/app/sdk/custom/customers.service';
      // import { ServiceProvidersService } from 'src/app/sdk/custom/service-providers.service';
      // import { MixedService } from 'src/app/sdk/custom/mixed.service';
      // import { serviceProvider } from 'src/app/customer-dashboard/service-provider.model';


      var ForgotPassComponent = /*#__PURE__*/function () {
        function ForgotPassComponent(modalController, menu, toastController, router, alertController) {
          _classCallCheck(this, ForgotPassComponent);

          this.modalController = modalController;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.alertController = alertController;
          this.loading = false;
          this.vissible = false;
          this.emailVerified = false;
          this.sendCodeButton = true;
          this.verifyCodeButton = true;
        }

        _createClass(ForgotPassComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgotPassComponent;
      }();

      ForgotPassComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      ForgotPassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-pass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-pass.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/forgot-pass/forgot-pass.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-pass.component.scss */
        "./src/app/home/forgot-pass/forgot-pass.component.scss"))["default"]]
      })], ForgotPassComponent);
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");
      /* harmony import */


      var _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./forgot-pass/forgot-pass.component */
      "./src/app/home/forgot-pass/forgot-pass.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../app.module */
      "./src/app/app.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: _app_module__WEBPACK_IMPORTED_MODULE_10__["HttpLoaderFactory"],
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        })],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"]],
        entryComponents: [_forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPassComponent"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".title {\n  text-align: center;\n}\n\na:hover {\n  cursor: pointer;\n}\n\na {\n  color: black;\n}\n\nion-content {\n  --background: radial-gradient(#ff5e7c 10%, #26032e 50%, #6bbae8 80%);\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-card {\n  --background: linear-gradient(to right, #603813 0%, #b29f94 51%, #603813 100%);\n}\n\nion-card-title {\n  color: white;\n  font-weight: bold;\n  font-size: x-large;\n  font-family: serif;\n}\n\n#logButton {\n  --background: linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%);\n}\n\n#buttonDIv {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxvRUFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLDhFQUFBO0FBS0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSw4RUFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtBQU9GIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYXtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW9uLWNvbnRlbnR7XG4gIC0tYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNmZjVlN2MgMTAlLCAjMjYwMzJlIDUwJSwgIzZiYmFlOCA4MCUpO1xufVxuaW9uLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjAzODEzIDAlLCAjYjI5Zjk0IDUxJSwgIzYwMzgxMyAxMDAlKTtcbiAgXG59XG5pb24tY2FyZC10aXRsZXtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LWZhbWlseTogc2VyaWY7XG59XG4jbG9nQnV0dG9ue1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFBMjk4MCAwJSwgIzI2RDBDRSA1MSUsICMxQTI5ODAgMTAwJSk7XG59XG4jYnV0dG9uREl2e1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-pass/forgot-pass.component */
      "./src/app/home/forgot-pass/forgot-pass.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js"); //import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
      // import { CustomersService } from '../sdk/custom/customers.service';
      // import { ServiceProvidersService } from '../sdk/custom/service-providers.service';
      // import { AuthService } from '../sdk/core/auth.service';
      // import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


      var HomePage = /*#__PURE__*/function () {
        function HomePage(_translate, modalController, menu, toastController, router, formBuilder, alertController) {
          _classCallCheck(this, HomePage);

          this._translate = _translate;
          this.modalController = modalController;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.loading = false;
          this.menu.enable(false, 'first');
          this.menu.enable(false, 'custom');
          this.menu.enable(false, 'end');

          _translate.setDefaultLang('en');
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.formInitializer();

            this._translate.get("Home").subscribe(function (res) {
              console.log('translation = ', res);
              _this.title = res.title;
              _this.username = res.username;
              _this.password = res.password;
              _this.userType = res.userType;
              _this.login = res.login;
              _this.sign_Up = res.signUp;
              _this.forgotPassword = res.forgotPassword;
            });
          }
        }, {
          key: "forgotPass",
          value: function forgotPass() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('clicked');
                      _context.next = 3;
                      return this.modalController.create({
                        component: _forgot_pass_forgot_pass_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPassComponent"]
                      });

                    case 3:
                      modal = _context.sent;
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "formInitializer",
          value: function formInitializer() {
            this.Form = this.formBuilder.group({
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              slectedGender: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.formInitializer();
            this.menu.enable(false, 'first');
            this.menu.enable(false, 'custom');
            this.menu.enable(false, 'end');
          }
        }, {
          key: "signUp",
          value: function signUp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.Form.value['slectedGender'] === null)) {
                        _context2.next = 5;
                        break;
                      }

                      _context2.next = 3;
                      return this.alertController.create({
                        header: 'Alert',
                        //subHeader: 'Subtitle',
                        message: 'please select user type',
                        buttons: ['OK']
                      });

                    case 3:
                      alert = _context2.sent;
                      alert.present();

                    case 5:
                      if (this.Form.value['slectedGender'] === "patient") {
                        this.router.navigateByUrl('/patient-signup');
                      }

                      if (this.Form.value['slectedGender'] === "doctor") {
                        this.router.navigateByUrl('/doctor-signup');
                      }

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "optionsFn",
          value: function optionsFn() {
            var _this2 = this;

            if (this.language == 'Pashtoo') {
              this._translate.setDefaultLang('es');

              this._translate.get("Home").subscribe(function (res) {
                console.log('translation = ', res);
                _this2.title = res.title;
                _this2.username = res.username;
                _this2.password = res.password;
                _this2.userType = res.userType;
                _this2.login = res.login;
                _this2.sign_Up = res.signUp;
                _this2.forgotPassword = res.forgotPassword;
              });
            } else {
              this._translate.setDefaultLang('en');

              this._translate.get("Home").subscribe(function (res) {
                console.log('translation = ', res);
                _this2.title = res.title;
                _this2.username = res.username;
                _this2.password = res.password;
                _this2.userType = res.userType;
                _this2.login = res.login;
                _this2.sign_Up = res.signUp;
                _this2.forgotPassword = res.forgotPassword;
              });
            }
          }
        }, {
          key: "loginButton",
          value: function loginButton() {
            this.router.navigateByUrl('/patient-dashboard');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map
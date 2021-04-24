(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patient-patient-signup-patient-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-signup/patient-signup.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-signup/patient-signup.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-header>\n    <ion-toolbar >\n      <ion-buttons slot=\"start\">\n        <ion-back-button  (click)=\"back()\" defaultHref=\"/home\"></ion-back-button>\n      </ion-buttons>\n      <div class =\"title\">\n        <ion-title>Registration</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <div class = \"mainDiv\" >\n    <ion-grid>\n      <ion-row>\n        \n        <ion-col size-md =\"8\" offset-md = \"2\">\n            <div [formGroup]=\"Form\">\n          <ion-card>\n            <ion-card-header>\n          \n              <div class =\"title\">\n            <ion-card-title color=\"light\" size=\"large\" text-center>Welcome</ion-card-title>\n          </div>\n\n\n            </ion-card-header>\n          </ion-card>\n          <ion-card-content>\n            <ion-row>\n                \n              <ion-col size = \"6\">\n            <ion-item>\n              <ion-label position = \"floating\" >\n                User Name\n              </ion-label>\n              <ion-input type =\"text\"  formControlName=\"username\" >\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label position = \"floating\">\n                Cnic Number\n              </ion-label>\n              <ion-input type =\"tel\"  formControlName=\"cnic\" appCnicMask \n              maxlength=\"15\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          \n          <ion-col size = \"6\"  id =\"imageCol\" >\n            <app-image-picker (imagePick)=\"onImagePicked($event)\"></app-image-picker>\n           </ion-col>  \n          </ion-row>   \n          <ion-item>\n            <ion-label position = \"floating\">\n              Phone#\n            </ion-label>\n            <ion-input type =\"tel\"  formControlName=\"phone\" appPhoneMask\n            maxlength=\"12\">\n            </ion-input>    \n          </ion-item>\n          <ion-row>\n            <ion-col size=\"8\">\n            <ion-item *ngIf=\"disableEmailColumn\"> \n              <ion-label position = \"floating\">\n                Valid Gmail Address\n              </ion-label>\n              <ion-input type =\"text\"  formControlName=\"email\" id = \"emailaddress\">\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" >\n            <ion-button *ngIf=\"disableEmailColumn\" expand=\"full\" [disabled]=\"!Form.value['email']\" (click)=\"sendEmail()\" >\n              Send Code &nbsp;<ion-spinner *ngIf=\"verifyLoading\"></ion-spinner></ion-button>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"8\">\n            <ion-item *ngIf=\"vissible\">\n              <ion-label position = \"floating\" >\n                Enter code\n              </ion-label>\n              <ion-input type =\"text\" formControlName=\"code\"  >\n              </ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"4\" >\n            <ion-button *ngIf=\"vissible\" expand=\"full\" (click)=\"verifyCode()\" >\n              Verify</ion-button>\n            </ion-col>\n          </ion-row>\n            <ion-item>\n                <ion-label position = \"floating\">\n                  Password\n                </ion-label>\n                <ion-input type =\"password\" formControlName=\"password\">\n                </ion-input>\n              </ion-item>\n              \n              <ion-row justify-content: end>\n                <ion-col class=\"ion-text-center\">\n                  \n              <ion-button expand=\"full\" shape=\"round\" (click) = \"signUpButton()\" [disabled]=\"!Form.valid\">\n                Sign Up &nbsp;<ion-spinner *ngIf=\"loading\"></ion-spinner>\n              </ion-button >\n            </ion-col>\n          </ion-row>\n            </ion-card-content>\n          </div>  \n          </ion-col>\n           </ion-row>\n        </ion-grid>\n      </div>\n      \n</ion-content>\n");

/***/ }),

/***/ "./src/app/patient/patient-signup/patient-signup-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/patient/patient-signup/patient-signup-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PatientSignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSignupPageRoutingModule", function() { return PatientSignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _patient_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-signup.page */ "./src/app/patient/patient-signup/patient-signup.page.ts");




const routes = [
    {
        path: '',
        component: _patient_signup_page__WEBPACK_IMPORTED_MODULE_3__["PatientSignupPage"]
    }
];
let PatientSignupPageRoutingModule = class PatientSignupPageRoutingModule {
};
PatientSignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PatientSignupPageRoutingModule);



/***/ }),

/***/ "./src/app/patient/patient-signup/patient-signup.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/patient/patient-signup/patient-signup.module.ts ***!
  \*****************************************************************/
/*! exports provided: PatientSignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSignupPageModule", function() { return PatientSignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _patient_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-signup-routing.module */ "./src/app/patient/patient-signup/patient-signup-routing.module.ts");
/* harmony import */ var _patient_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patient-signup.page */ "./src/app/patient/patient-signup/patient-signup.page.ts");
/* harmony import */ var src_app_shared_masks_masks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/masks/masks.module */ "./src/app/shared/masks/masks.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");









let PatientSignupPageModule = class PatientSignupPageModule {
};
PatientSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_masks_masks_module__WEBPACK_IMPORTED_MODULE_7__["MasksModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _patient_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["PatientSignupPageRoutingModule"]
        ],
        declarations: [_patient_signup_page__WEBPACK_IMPORTED_MODULE_6__["PatientSignupPage"]]
    })
], PatientSignupPageModule);



/***/ }),

/***/ "./src/app/patient/patient-signup/patient-signup.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/patient/patient-signup/patient-signup.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(to top, #93F9B9, #1D976C);\n}\n\nion-toolbar {\n  --background: transparent;\n}\n\nion-card-title {\n  --background: transparent;\n}\n\nion-card {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-button {\n  --background: linear-gradient(to right, #134E5E 0%, #71B280 51%, #134E5E 100%);\n}\n\n.title {\n  text-align: center;\n}\n\n#image {\n  width: 150px;\n  height: 150px;\n  margin: auto;\n}\n\n#imageButton {\n  width: 180px;\n  height: 155px;\n}\n\n#imageCol {\n  text-align: center;\n}\n\n.fileInput {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.fileInput label {\n  color: #717171;\n  background-color: white;\n  display: inline-block;\n  cursor: pointer;\n  padding: 0.5em 1em;\n  border: 1px solid #ccc;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC9wYXRpZW50LXNpZ251cC9wYXRpZW50LXNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBQTtBQUNKOztBQUVFO0VBQ0MseUJBQUE7QUFDSDs7QUFDRTtFQUNFLHlCQUFBO0FBRUo7O0FBQUU7RUFDRSw4RUFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFGRTtFQUNFLDhFQUFBO0FBS0o7O0FBSEU7RUFDSSxrQkFBQTtBQU1OOztBQUpJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBT047O0FBSkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQU9OOztBQUxJO0VBQ0Usa0JBQUE7QUFRTjs7QUFOSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBU047O0FBUEk7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQVVOIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC9wYXRpZW50LXNpZ251cC9wYXRpZW50LXNpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzkzRjlCOSwgIzFEOTc2Qyk7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi10b29sYmFye1xyXG4gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMTM0RTVFIDAlLCAjNzFCMjgwIDUxJSwgIzEzNEU1RSAxMDAlKTtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxMzRFNUUgMCUsICM3MUIyODAgNTElLCAjMTM0RTVFIDEwMCUpO1xyXG4gIH1cclxuICAudGl0bGV7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgICNpbWFnZXtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgXHJcbiAgICB9XHJcbiAgICAjaW1hZ2VCdXR0b257XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiAxNTVweDtcclxuICAgIH1cclxuICAgICNpbWFnZUNvbHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmZpbGVJbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAwLjFweDtcclxuICAgICAgaGVpZ2h0OiAwLjFweDtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5maWxlSW5wdXQgICBsYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/patient/patient-signup/patient-signup.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/patient/patient-signup/patient-signup.page.ts ***!
  \***************************************************************/
/*! exports provided: PatientSignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSignupPage", function() { return PatientSignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_sdk_custom_patient_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sdk/custom/patient-service.service */ "./src/app/sdk/custom/patient-service.service.ts");






function base64toBlob(base64Data, contentType) {
    contentType = contentType || '';
    const sliceSize = 1024;
    const byteCharacters = window.atob(base64Data);
    const bytesLength = byteCharacters.length;
    const slicesCount = Math.ceil(bytesLength / sliceSize);
    const byteArrays = new Array(slicesCount);
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        const begin = sliceIndex * sliceSize;
        const end = Math.min(begin + sliceSize, bytesLength);
        const bytes = new Array(end - begin);
        for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
            bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    return new Blob(byteArrays, { type: contentType });
}
let PatientSignupPage = class PatientSignupPage {
    constructor(patientService, menu, toastController, router, formBuilder, platform, alertController) {
        this.patientService = patientService;
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
    }
    ngOnInit() {
        this.Form = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z ]*$')]],
            cnic: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(13)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12)]],
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            imageUrl: [],
            code: []
            //confirmPassword: [null, [Validators.required]],
        });
    }
    onImagePicked(imageData) {
        //console.log('imageData = ',imageData);
        let imageFile;
        if (typeof imageData === 'string') {
            try {
                imageFile = base64toBlob(imageData.replace('data:image/jpeg;base64,', ''), 'image/jpeg');
            }
            catch (error) {
                console.log(error);
                return;
            }
        }
        else {
            imageFile = imageData;
        }
        console.log('image path = ', imageFile);
        this.Form.patchValue({ image: imageFile });
    }
    signUpButton() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
            console.log('form value = ', this.Form.value);
            this.patientService.userRegister(this.Form.value).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('got response from server', data);
                const toast = yield this.toastController.create({
                    message: data.message,
                    // message: `${name} has been saved successfully.`,
                    duration: 3500
                });
                toast.present();
                if (data.message === 'Signup successful') {
                    this.router.navigateByUrl('/home');
                }
                this.loading = false;
                // this.router.navigateByUrl('/home');
            }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading = false;
                const alert = yield this.alertController.create({
                    header: 'Alert',
                    //subHeader: 'Subtitle',
                    message: error.error.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    sendEmail() {
        console.log('email = ', this.Form.controls['email'].value);
        this.patientService.sendMail({ email: this.Form.controls['email'].value }).subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.verifyLoading = false;
            console.log('got response from server', data);
            const toast = yield this.toastController.create({
                message: data.message,
                // message: `${name} has been saved successfully.`,
                duration: 3500
            });
            this.code = data.code;
            toast.present();
            if (data.message === 'Email sent successfuly') {
                this.vissible = true;
                this.disableEmailColumn = false;
            }
            this.loading = false;
            // this.router.navigateByUrl('/home');
        }), (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = false;
            const toast = yield this.toastController.create({
                message: error.error.message,
                // message: `${name} has been saved successfully.`,
                duration: 3500
            });
        }));
    }
};
PatientSignupPage.ctorParameters = () => [
    { type: src_app_sdk_custom_patient_service_service__WEBPACK_IMPORTED_MODULE_5__["PatientServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
PatientSignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./patient-signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patient/patient-signup/patient-signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./patient-signup.page.scss */ "./src/app/patient/patient-signup/patient-signup.page.scss")).default]
    })
], PatientSignupPage);



/***/ })

}]);
//# sourceMappingURL=patient-patient-signup-patient-signup-module-es2015.js.map
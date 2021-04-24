
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CustomersService } from '../sdk/custom/customers.service';
// import { ServiceProvidersService } from '../sdk/custom/service-providers.service';
import { AlertController, ToastController, MenuController, ModalController } from '@ionic/angular';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
// import { AuthService } from '../sdk/core/auth.service';
// import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { TranslateService } from '@ngx-translate/core';
import { DoctorService } from '../sdk/custom/doctor.service';
import { Storage } from '@ionic/storage';
import { PatientServiceService } from '../sdk/custom/patient-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading = false;
  Form: FormGroup;
  language;
  title: string;
  username: any;
  password: any;
  userType: any;
  login: any;
  sign_Up: any;
  forgotPassword: any;
  Language: any;
  constructor(private patientService:PatientServiceService,private storage: Storage,private doctorService:DoctorService, private _translate: TranslateService, private modalController: ModalController, private menu: MenuController,public toastController: ToastController, private router: Router, private formBuilder: FormBuilder, public alertController: AlertController) {
    _translate.setDefaultLang('en');
   }

  ngOnInit() {
    this.storage.clear();

    this.formInitializer();
    this._translate.get("Home").subscribe((res: any) => {
      console.log('translation = ',res)
      this.title = res.title;
      this.username = res.username;
      this.password = res.password;
      this.userType = res.userType;
      this.login = res.login;
      this.sign_Up = res.signUp;
      this.forgotPassword = res.forgotPassword;
      this.Language = res.Language;

    }); 
  }
  async forgotPass(){
    console.log('clicked');
    const modal = await this.modalController.create({
      component: ForgotPassComponent
    });
    return await modal.present();
  }
  formInitializer() {
    this.Form = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      slectedGender: [null, [Validators.required]]
    });
  }
  ionViewWillEnter(){
    this.formInitializer();
    this.menu.enable(false);
    this.storage.clear();
  }
  async signUp() {
    if(this.Form.value['slectedGender'] === null){
      const alert = await this.alertController.create({
        header: 'Alert',
        //subHeader: 'Subtitle',
        message: 'please select user type',
        buttons: ['OK']
      });
      alert.present();
    }
    if (this.Form.value['slectedGender'] === "patient") {
      this.router.navigateByUrl('/patient-signup');
    }
    if (this.Form.value['slectedGender'] === "doctor") {
      this.router.navigateByUrl('/doctor-signup');
    }
  }
  public optionsFn(): void { //here item is an object 
    if(this.language == 'Pashtoo'){
      this.storage.set('language', 'es');

      this._translate.setDefaultLang('es');
      this._translate.get("Home").subscribe((res: any) => {
        console.log('translation = ',res)
        this.title = res.title;
        this.username = res.username;
        this.password = res.password;
        this.userType = res.userType;
        this.login = res.login;
        this.sign_Up = res.signUp;
        this.forgotPassword = res.forgotPassword;
        this.Language = res.Language;
      }); 
    }
    else{
      this.storage.set('language', 'en');
      this._translate.setDefaultLang('en');
      this._translate.get("Home").subscribe((res: any) => {
        console.log('translation = ',res)
        this.title = res.title;
        this.username = res.username;
        this.password = res.password;
        this.userType = res.userType;
        this.login = res.login;
        this.sign_Up = res.signUp;
        this.forgotPassword = res.forgotPassword;
        this.Language = res.Language;
      }); 
    }
  }
  //  loginButton() {
  //   if (this.Form.value['slectedGender'] === "doctor") {
  //     this.router.navigateByUrl('/doctor-profile');
  //   }
  //   if (this.Form.value['slectedGender'] === "patient") {
  //     this.router.navigateByUrl('/patient-dashboard');
  //   }
  //  }
  loginButton() {
    this.loading = true;
    const loginData = this.Form.value;
    if (this.Form.value['slectedGender'] === "patient") {
      this.patientService.login(loginData).subscribe(
        async data => {
          if(data.message=='Successfully Logged in'){
            this.storage.set('patientId', data.id);
            if(this.language == 'Pashtoo'){
              this.storage.set('language', 'es');
              this.doctorService.publishSomeData({
                user: 'patient',
                language:'es'
              });
            }
            else{
              this.storage.set('language', 'en');
              this.doctorService.publishSomeData({
                user: 'patient',
                language:'en'
              });
            }
         
          }
         // this.serviceProvidersService.saveServiceProviderId(data.id);
          console.log('got response from server', data);
          //this.authService.saveTokenToStorage(data.token);
          this.loading = false;
          
         const toast = await this.toastController.create({
          message: data.message,
         // message: `${name} has been saved successfully.`,
          duration: 3500
        });
        toast.present();
        this.router.navigateByUrl('/patient-profile');
      },
        async error => {
          // this.loading = false;
          const toast = await this.toastController.create({
            message: error.error.message,
           // message: `${name} has been saved successfully.`,
            duration: 3500
          });
          toast.present();
          this.loading = false;
        });
    }
    else {
      console.log('loginData', loginData);
      this.doctorService.login(loginData).subscribe(
        async data => {
          if(data.message=='Successfully Logged in'){
            console.log('doctor id = ',data);
            this.storage.set('doctorId', data.id);
            console.log(' id = ',await this.storage.get('doctorId'));

            if(this.language == 'Pashtoo'){
              this.storage.set('language', 'es');
              this.doctorService.publishSomeData({
                user: 'doctor',
                language:'es'
              });
            }
            else{
              this.storage.set('language', 'en');
              this.doctorService.publishSomeData({
                user: 'doctor',
                language:'en'
              });
            }
          }
         // this.serviceProvidersService.saveServiceProviderId(data.id);
          console.log('got response from server', data);
          //this.authService.saveTokenToStorage(data.token);
          this.loading = false;
         const toast = await this.toastController.create({
          message: data.message,
         // message: `${name} has been saved successfully.`,
          duration: 3500
        });
        toast.present();
        this.router.navigateByUrl('/doctor-profile');        },
        async error => {
          // this.loading = false;
          const toast = await this.toastController.create({
            message: error.error.message,
           // message: `${name} has been saved successfully.`,
            duration: 3500
          });
          toast.present();
          this.loading = false;
        });
    }
  }
}



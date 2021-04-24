import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, ToastController, Platform, AlertController } from '@ionic/angular';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { Storage } from '@ionic/storage';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';

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
@Component({
  selector: 'app-patient-edit-profile',
  templateUrl: './patient-edit-profile.page.html',
  styleUrls: ['./patient-edit-profile.page.scss'],
})
export class PatientEditProfilePage implements OnInit {

  Form: FormGroup;
  loading = false;
  img1: any;
  email;
  vissible =false;
  code;
  verifyLoading = false;
  emailVerified = false;
  disableEmailColumn = true;
  id: any;
  constructor(        private doctorService: DoctorService,
    private storage: Storage,private patientService: PatientServiceService,private menu: MenuController,public toastController: ToastController, private router :Router,private formBuilder: FormBuilder,private platform: Platform, public alertController: AlertController) { }

  ngOnInit() {
    this.getPatient();
    this.Form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cnic: [null, [Validators.required,Validators.maxLength(15),Validators.minLength(13)]],
      email: [null, [Validators.required,Validators.email]],
      password: [],
      phone: [null, [Validators.required,Validators.minLength(12)]],
      image: new FormControl(null),
      shortID:new FormControl(null),
      imageUrl:[],
      code:[]
      //confirmPassword: [null, [Validators.required]],
    });
  }
  async getPatient(){
      console.log('patientId = ', await this.storage.get('patientId'));
  
      this.id =await this.storage.get('patientId');
      this.patientService.getPatient({id:this.id}).subscribe(
        async data => {
          console.log('patient = ', data);
          // this.storage.set('doctorCheckupTime',JSON.stringify(data.data.timing));
           this.Form.patchValue(data.data);
          // console.log('form value = ', this.Form.value);
           this.doctorService.doctorImage = data.data.imageUrl;
           this.patientService.imageURL = data.data.imageUrl;
          // this._id = data.data._id;
          // console.log('this.doctorService.doctorImage = ', this.doctorService.doctorImage);
  
        });
    
  }
  onImagePicked(imageData: string | File) {
    //console.log('imageData = ',imageData);
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(
          imageData.replace('data:image/jpeg;base64,', ''),
          'image/jpeg'
        );
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }
    console.log('image path = ',imageFile);
    this.Form.patchValue({ image: imageFile });
    
  }
  async signUpButton( ){
    if(this.patientService.imageURL){
      this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
    }
        console.log('form value = ',this.Form.value);
    this.patientService.updatePatient(this.Form.value,this.id).subscribe(
      async data => {
        
        console.log('got response from server', data);

        const toast = await this.toastController.create({
          message: data.message,
        // message: `${name} has been saved successfully.`,
          duration: 3500
        });
        toast.present();
        if(data.message === 'Signup successful'){
          this.router.navigateByUrl('/home');
        }

        this.loading = false;
      // this.router.navigateByUrl('/home');
      },
      async error => {
        this.loading = false;
        const alert = await this.alertController.create({
          header: 'Alert',
          //subHeader: 'Subtitle',
          message: error.error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
  sendEmail(){
    console.log('email = ',this.Form.controls['email'].value);
    this.patientService.sendMail({email:this.Form.controls['email'].value}).subscribe(
      async data => {
        this.verifyLoading = false;
        console.log('got response from server', data);
    
        const toast = await this.toastController.create({
          message: data.message,
        // message: `${name} has been saved successfully.`,
          duration: 3500
        });
  
        this.code = data.code;
        toast.present();
        if(data.message === 'Email sent successfuly'){
          this.vissible = true;
          this.disableEmailColumn = false;
        }
    
        this.loading = false;
      // this.router.navigateByUrl('/home');
      },
      async error => {
        this.loading = false;
        const toast = await this.toastController.create({
          message: error.error.message,
        // message: `${name} has been saved successfully.`,
          duration: 3500
        });
      });
  }}
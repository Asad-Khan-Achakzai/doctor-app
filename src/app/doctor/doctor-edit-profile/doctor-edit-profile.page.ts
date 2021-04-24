import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { ModalController, MenuController, ToastController, Platform, AlertController } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { PlaceLocation } from '../doctor-signup/location.model';
import { Storage } from '@ionic/storage';
import { CheckupTimingComponent } from './checkup-timing/checkup-timing.component';

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
  selector: 'app-doctor-edit-profile',
  templateUrl: './doctor-edit-profile.page.html',
  styleUrls: ['./doctor-edit-profile.page.scss'],
})
export class DoctorEditProfilePage implements OnInit {


  Form: FormGroup;
  loading = false;
  img1: any;
  email;
  vissible = false;
  code;
  verifyLoading = false;
  emailVerified = false;
  disableEmailColumn = true;
  timingValueFrom;
  timingValueEnd;
  specialities: string[] = ['Apple', 'Orange', 'Banana'];
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  private _id: any;
  //constructor(private modalController: ModalController,private storage: Storage, private formBuilder: FormBuilder, private doctorService: DoctorService) { }
  constructor(
     private modalController: ModalController,
      public datepipe: DatePipe,
       private patientService: PatientServiceService,
        private doctorService: DoctorService,
         private menu: MenuController,
          public toastController: ToastController,
           private router: Router,
            private formBuilder: FormBuilder,
             public alertController: AlertController,
             private storage: Storage,) { }

  ngOnInit() {
    this.getDoctor();
    this.Form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cnic: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(13)]],
      email: [null, [Validators.required, Validators.email]],
      password: [],
      phone: [null, [Validators.required, Validators.minLength(12)]],
      imageUrl: [],
      timing: [],
      specialities: [[]],
      location: [null, [Validators.required]],
      city: [null, [Validators.required]],
      shortID:[]  
      //confirmPassword: [null, [Validators.required]],
    });
  }
  async getDoctor() {
    console.log('id = ', await this.storage.get('doctorId'));

    let id:any =await this.storage.get('doctorId');
    this.doctorService.getDoctor({id:id}).subscribe(
      async data => {
        console.log('doctor = ', data);
        this.storage.set('doctorCheckupTime',JSON.stringify(data.data.timing));
        this.Form.patchValue(data.data);
        console.log('form value = ', this.Form.value);
        this.doctorService.doctorImage = data.data.imageUrl;
        this.patientService.imageURL = data.data.imageUrl;
        this._id = data.data._id;
        console.log('this.doctorService.doctorImage = ', this.doctorService.doctorImage);

      });
  }
  onLocationPicked(location: PlaceLocation) {
    console.log('location = ',location);
    let n = `${location.address}`.split(",");
    const loc = `${location.address}`.split(",")[n.length - 2];
    //const loc = location.address.slice(location.address.lastIndexOf(',') + 2);
    console.log('loc = ',loc);
    this.Form.patchValue({ location: location.address });
    this.Form.patchValue({ city: loc });
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
    console.log('image path = ', imageFile);
    this.Form.patchValue({ image: imageFile });

  }
  async signUpButton() {
    if(this.patientService.imageURL){
      this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
    }
    if(this.doctorService.doctorTiming){
      this.Form.patchValue({ timing: this.doctorService.doctorTiming })
    }
    // // this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
    console.log('form value = ', this.Form.value);
    this.doctorService.udpateDoctor(this.Form.value,this._id).subscribe(
      async data => {
        console.log('got response from server', data);

        const toast = await this.toastController.create({
          message: data.message,
          // message: `${name} has been saved successfully.`,
          duration: 3500
        });
        toast.present();
        // if (data.message === 'Signup successful') {
        //   this.router.navigateByUrl('/home');
        // }

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
  sendEmail() {
    this.patientService.sendMail({ email: this.Form.controls['email'].value }).subscribe(
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
        if (data.message === 'Email sent successfuly') {
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
  }
  async CheckupTIming() {
    const modal = await this.modalController.create({
      component: CheckupTimingComponent
    });
    return await modal.present();
  }

  async optionsFn() {
  }
}
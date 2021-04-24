import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { MenuController, ToastController, Platform, AlertController, ModalController } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { CheckupTimingComponent } from './checkup-timing/checkup-timing.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PlaceLocation } from './location.model';

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
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.page.html',
  styleUrls: ['./doctor-signup.page.scss'],
})
export class DoctorSignupPage implements OnInit {

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
  

  specialities: string[] = 
  [
  'Allergy and immunology',
  'Anesthesiology',
  'Dermatology',
  'Diagnostic radiology',
  'Emergency medicine',
  'Family medicine',
  'Internal medicine',
  'Medical genetics',
  'Neurology',
  'Nuclear medicine',
  'Obstetrics and gynecology',
  'Ophthalmology',
  'Pathology',
  'Pediatrics',
  'Physical medicine and rehabilitation',
  'Preventive medicine',
  'Psychiatry',
  'Radiation oncology',
  'Surgery',
  'Urology'];
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder, private modalController: ModalController, public datepipe: DatePipe, private patientService: PatientServiceService, private doctorService: DoctorService, private menu: MenuController, public toastController: ToastController, private router: Router, private formBuilder: FormBuilder, private platform: Platform, public alertController: AlertController) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cnic: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(13)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.minLength(12)]],
      image: new FormControl(null),
      imageUrl: [],
      timing: [],
      specialities: [[]],
      location: [null, [Validators.required]],
      city: [null, [Validators.required]],

      //confirmPassword: [null, [Validators.required]],
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
    this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
    this.Form.patchValue({ timing: this.doctorService.doctorTiming })
    // this.Form.controls['imageUrl'].setValue(this.patientService.imageURL);
    console.log('form value = ', this.Form.value);
    this.doctorService.doctorRegister(this.Form.value).subscribe(
      async data => {

        console.log('got response from server', data);

        const toast = await this.toastController.create({
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
  // loadMap() {
  //   this.geolocation.getCurrentPosition().then((resp) => {

  //     this.latitude = resp.coords.latitude;
  //     this.longitude = resp.coords.longitude;

  //     let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
  //     let mapOptions = {
  //       center: latLng,
  //       zoom: 15,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     }

  //     this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //     this.map.addListener('dragend', () => {

  //       this.latitude = this.map.center.lat();
  //       this.longitude = this.map.center.lng();

  //       this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
  //     });

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

  // getAddressFromCoords(lattitude, longitude) {
  //   console.log("getAddressFromCoords " + lattitude + " " + longitude);
  //   let options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5
  //   };

  //   this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
  //     .then((result: NativeGeocoderResult[]) => {
  //       this.address = "";
  //       let responseAddress = [];
  //       for (let [key, value] of Object.entries(result[0])) {
  //         if (value.length > 0)
  //           responseAddress.push(value);

  //       }
  //       responseAddress.reverse();
  //       for (let value of responseAddress) {
  //         this.address += value + ", ";
  //       }
  //       this.address = this.address.slice(0, -2);
  //     })
  //     .catch((error: any) => {
  //       this.address = "Address Not Available!";
  //     });

  // }

}



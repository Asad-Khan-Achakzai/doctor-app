import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController, ToastController, AlertController, IonSlides } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.page.html',
  styleUrls: ['./patient-profile.page.scss'],
})
export class PatientProfilePage implements OnInit {
  private _id: any;
  phone: any;
  cnic: any;
  cities: any;
  routes: any;
  companyName: any;
  officeLocation: any;
  routesArr: any;
  image: any;
  ranking: any;
  rank: any;
  email: any;
  userName: any;
  days: number;
  @ViewChild('slides', { static: true }) slider: IonSlides;
  segment = 0;
  dateArray: Date[] = new Array(7).fill(new Date());
  public selectedWeek: Date = new Date();
  docOffDays = [];
  slots: any;

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
  async ngOnInit() {
    this.menu.enable(true);

    this.getDoctor();
  }
  setDate() {
    // var date = new Date();
    // date.setDate(date.getDate() + 1);
    // for(let i=1;i<8;i++){
    //   this.dateArray.push(date.setDate(date.getDate() + i));
    // }
    var dte = new Date();
    dte = this.selectedWeek;
    this.days = 8;
    let counterDay = 1;
    for (counterDay; counterDay < this.days; counterDay++) {
      let day: Date = new Date(dte.setDate(dte.getDate() + 1));
      let weeaday;
      if (day.getDay() == 0) {
        weeaday = "Monday"
      } else if (day.getDay() == 1) {
        weeaday = "Tuesday"
      } else if (day.getDay() == 2) {
        weeaday = "Wednesday"
      } else if (day.getDay() == 3) {
        weeaday = "Thursday"
      } else if (day.getDay() == 4) {
        weeaday = "Friday"
      } else if (day.getDay() == 5) {
        weeaday = "Saturday"
      } else {
        weeaday = "Sunday"
      }
      if (this.docOffDays.includes(weeaday)) {
        // counterDay++;
        // this.days++;
        continue;
      }
      console.log('', weeaday);

      //if(day.getDay())    
      this.dateArray[counterDay - 1] = new Date(dte.setDate(dte.getDate() + 1));
    }

    console.log('7 days after', this.dateArray);
  }
  daySelected(date) {
    let obj={
      date:date,
      slots: this.slots 
    }
    this.storage.set('doctorSlots', JSON.stringify(obj));
    this.router.navigateByUrl('/slots-list');
  }
  goToDoctorEditProfile() {
    this.router.navigateByUrl('/doctor-edit-profile');
  }
  async segmentChanged(ev: any) {
    //await this.slider.slideTo(this.segment);  
  }
  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
  async getDoctor() {
    let id: any = await this.storage.get('patientId');
    this.patientService.getPatient({ id: id }).subscribe(
      async data => {
        console.log('doctor = ', data);
        this.storage.set('doctorCheckupTime', JSON.stringify(data.data.timing));
        //this.Form.patchValue(data.data);
        //console.log('form value = ', this.Form.value);
        this.doctorService.doctorImage = data.data.imageUrl;
        this.patientService.imageURL = data.data.imageUrl;
        this._id = data.data._id;
        this.phone = data.data.phone;
        this.cnic = data.data.cnic;
        this.email = data.data.email;
        this.userName = data.data.username;
        this.storage.set('patientName', JSON.stringify(this.userName));
        // this.cities = this.serviceProviderInfo.citiesArray;
        // this.routes = this.serviceProviderInfo.servicesArray;
        // this.companyName = this.serviceProviderInfo.companyName;
        // this.officeLocation = data.data.location;
        // this.docOffDays = data.data.timing.offDays;
        // this.slots = data.data.timing.slots;
        // this.setDate();

        // console.log('offdays= ', this.docOffDays);
        // // this.routesArr = this.serviceProviderInfo.servicesArray;
         this.image = data.data.imageUrl;
        // console.log('this.image = ', this.image);

        // this.ranking = this.serviceProviderInfo.rank;
        // this.rank = this.ranking.toFixed(1);

      });
  }
}

//   constructor(private router: Router) { }
//   ngOnInit() {
//   }
//   goToDoctorEditProfile(){
//     this.router.navigateByUrl('/patient-edit-profile');  
//   }

// }

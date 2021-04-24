import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
import { DoctorService } from 'src/app/sdk/custom/doctor.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {
  loading: boolean;
doctors = [];
searchedDoctor = [];
doctorName;
doctorLocation;
doctorSpeciality;
  title: any;
  searchLabel: any;
  filterDoc: any;
  filterSpecialities: any;
  filterCity: any;
  constructor( private _translate: TranslateService,private menu: MenuController, private storage: Storage,private router: Router,private doctorService: DoctorService,private alertController:AlertController) { }

  async ngOnInit() {
    this.menu.enable(true);
this.getDoctor();
this._translate.setDefaultLang(await this.storage.get('language'));
this._translate.get("BookAppointment").subscribe((res: any) => {
  console.log('translation = ',res)

  this.title = res.title;
  this.searchLabel = res.search;
  this.filterDoc=res.filterDoc;
  this.filterSpecialities = res.filterSpecialities;
this.filterCity = res.filterCity;
});
  }
  getDoctor(){
    this.doctorService.getAllDoctors().subscribe(
      async data => {
     console.log('doctor =',data);
        this.doctors = data.data.docs;
        this.searchedDoctor = this.doctors;
        console.log('this.doctors =',this.doctors);

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
  goforDoctorProfile(doctor){
    console.log('doctor',doctor);

    this.storage.set('doctorId', doctor._id);

    this.router.navigateByUrl('/doctor-profile');
  }
  searchDoctor(){
    if(this.doctorName==''){
      this.doctorName= undefined    }
      if(this.doctorSpeciality==''){
        this.doctorSpeciality= undefined    }
        if(this.doctorLocation==''){
          this.doctorLocation= undefined    }
    console.log('doctorName',this.doctorName);
    console.log('doctorLocation',this.doctorLocation);
    console.log('doctorSpeciality',this.doctorSpeciality);


if(this.doctorName && this.doctorLocation &&this.doctorSpeciality ){
  this.doctors = this.filter(this.doctors,{username:this.doctorName,city:this.doctorLocation,specialities:this.doctorSpeciality});
  //console.log('search result ===',this.filter(this.doctors,{username:this.doctorName,location:this.doctorLocation}))
}else if(this.doctorName && this.doctorSpeciality  && !this.doctorLocation){
  this.doctors = this.filter(this.doctors,{username:this.doctorName,specialities:this.doctorSpeciality});
}else if(this.doctorName && !this.doctorSpeciality  && this.doctorLocation){
  this.doctors = this.filter(this.doctors,{username:this.doctorName,city:this.doctorLocation});
}else if(this.doctorName && !this.doctorSpeciality  && !this.doctorLocation){
  this.doctors = this.filter(this.doctors,{username:this.doctorName});
}else if(!this.doctorName && this.doctorSpeciality  && this.doctorLocation){
  this.doctors = this.filter(this.doctors,{specialities:this.doctorSpeciality,city:this.doctorLocation});
}else if(!this.doctorName && this.doctorSpeciality  && !this.doctorLocation){
  this.doctors = this.filter(this.doctors,{specialities:this.doctorSpeciality});
}else if(!this.doctorName && !this.doctorSpeciality  && this.doctorLocation){
  this.doctors = this.filter(this.doctors,{city:this.doctorLocation});
}else{
  alert('Insuficient search result');
}
if(this.doctors.length==0){
  alert('Insuficient Search');
}
console.log('search result ===',this.doctors)

    // for (let doc of this.doctors) {
    //   debugger;
    //   if(doc.username == this.doctorName && doc.specialities[0]==this.doctorSpeciality && this.doctorLocation == doc.location){
        
    //     this.searchedDoctor = doc;
    //   }
    // } 
  }
  filter(arr, criteria) {
    return arr.filter(function(obj) {
      return Object.keys(criteria).every(function(c) {
        return new RegExp(criteria[c].toLowerCase()).test(obj[c].toLowerCase());
      });
    });
  }
}

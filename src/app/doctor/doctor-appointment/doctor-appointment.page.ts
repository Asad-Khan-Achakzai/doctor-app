import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BookingsService } from 'src/app/sdk/custom/bookings.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.page.html',
  styleUrls: ['./doctor-appointment.page.scss'],
})
export class DoctorAppointmentPage implements OnInit {

  loading = false;
  appointments = [];
  constructor(private bookingService:BookingsService,private patientService: PatientServiceService,private storage: Storage) { }

  async ngOnInit() {
    let id: any = await this.storage.get('doctorId');
    console.log('id=====>>>>>>>>> ',id);

    this.bookingService.getDoctorAppointments({id:id}).subscribe(
      async data => {
        console.log('data=====>>>>>>>>> ',data);
        this.appointments = data.data;
      });
  }
  Diagnosed(i){
    console.log('this.appointments[i]._id',this.appointments[i]._id);
    this.bookingService.appointmentDiagnosed({id:this.appointments[i]._id}).subscribe(
      async data => {
        console.log('update response=====>>>>>>>>> ',data);
      });
  }
}
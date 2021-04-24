import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BookingsService } from 'src/app/sdk/custom/bookings.service';
import { PatientServiceService } from 'src/app/sdk/custom/patient-service.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.page.html',
  styleUrls: ['./my-bookings.page.scss'],
})
export class MyBookingsPage implements OnInit {
  loading = false;
  appointments = [];
  constructor(private bookingService: BookingsService, private patientService: PatientServiceService, private storage: Storage) { }

  async ngOnInit() {
    let id: any = await this.storage.get('patientId');
    console.log('id=====>>>>>>>>> ', id);

    this.bookingService.getMyAppointments({ id: id }).subscribe(
      async data => {
        console.log('data=====>>>>>>>>> ', data);
        this.appointments = data.data;
      });
  }
  delete(i) {
    console.log('this.appointments=====>>>>>>>>> ', this.appointments[i]);
    this.bookingService.deleteAppointments({ _id: this.appointments[i]._id }).subscribe(
      async data => {
        console.log('data=====>>>>>>>>> ', data);
        let id: any = await this.storage.get('patientId');
        this.bookingService.getMyAppointments({ id: id }).subscribe(
          async data => {
            console.log('data=====>>>>>>>>> ', data);
            this.appointments = data.data;
          });
      });
  }

}

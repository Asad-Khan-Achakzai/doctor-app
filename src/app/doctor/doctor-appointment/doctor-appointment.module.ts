import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorAppointmentPageRoutingModule } from './doctor-appointment-routing.module';

import { DoctorAppointmentPage } from './doctor-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorAppointmentPageRoutingModule
  ],
  declarations: [DoctorAppointmentPage]
})
export class DoctorAppointmentPageModule {}

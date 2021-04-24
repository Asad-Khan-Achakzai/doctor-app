import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorAppointmentPage } from './doctor-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorAppointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorAppointmentPageRoutingModule {}

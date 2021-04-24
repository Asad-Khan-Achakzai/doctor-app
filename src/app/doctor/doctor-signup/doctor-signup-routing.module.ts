import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorSignupPage } from './doctor-signup.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorSignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorSignupPageRoutingModule {}

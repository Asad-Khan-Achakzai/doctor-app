import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorSignupPageRoutingModule } from './doctor-signup-routing.module';

import { DoctorSignupPage } from './doctor-signup.page';
import { MasksModule } from 'src/app/shared/masks/masks.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckupTimingComponent } from './checkup-timing/checkup-timing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasksModule,
    SharedModule,
    ReactiveFormsModule,
    DoctorSignupPageRoutingModule
  ],
  declarations: [DoctorSignupPage,CheckupTimingComponent],
  entryComponents: [CheckupTimingComponent]

})
export class DoctorSignupPageModule {}

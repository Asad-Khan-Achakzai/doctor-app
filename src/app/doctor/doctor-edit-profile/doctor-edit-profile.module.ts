import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorEditProfilePageRoutingModule } from './doctor-edit-profile-routing.module';

import { DoctorEditProfilePage } from './doctor-edit-profile.page';
import { CheckupTimingComponent } from './checkup-timing/checkup-timing.component';
import { MasksModule } from 'src/app/shared/masks/masks.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasksModule,
    SharedModule,
    ReactiveFormsModule,
    DoctorEditProfilePageRoutingModule
  ],
  declarations: [DoctorEditProfilePage,CheckupTimingComponent],
  entryComponents: [CheckupTimingComponent]
})
export class DoctorEditProfilePageModule {}

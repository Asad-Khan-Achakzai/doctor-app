import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorProfilePageRoutingModule } from './doctor-profile-routing.module';

import { DoctorProfilePage } from './doctor-profile.page';
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
    DoctorProfilePageRoutingModule
  ],
  declarations: [DoctorProfilePage]
})
export class DoctorProfilePageModule {}

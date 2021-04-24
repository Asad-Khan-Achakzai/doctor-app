import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientEditProfilePageRoutingModule } from './patient-edit-profile-routing.module';

import { PatientEditProfilePage } from './patient-edit-profile.page';
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
    PatientEditProfilePageRoutingModule
  ],
  declarations: [PatientEditProfilePage]
})
export class PatientEditProfilePageModule {}

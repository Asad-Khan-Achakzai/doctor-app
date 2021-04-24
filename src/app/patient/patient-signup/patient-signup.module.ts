import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientSignupPageRoutingModule } from './patient-signup-routing.module';

import { PatientSignupPage } from './patient-signup.page';
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
    PatientSignupPageRoutingModule
  ],
  declarations: [PatientSignupPage]
})
export class PatientSignupPageModule {}

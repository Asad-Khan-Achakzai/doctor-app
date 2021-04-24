import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlotsListPageRoutingModule } from './slots-list-routing.module';

import { SlotsListPage } from './slots-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlotsListPageRoutingModule
  ],
  declarations: [SlotsListPage]
})
export class SlotsListPageModule {}

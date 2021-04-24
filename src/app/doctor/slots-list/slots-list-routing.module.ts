import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlotsListPage } from './slots-list.page';

const routes: Routes = [
  {
    path: '',
    component: SlotsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotsListPageRoutingModule {}

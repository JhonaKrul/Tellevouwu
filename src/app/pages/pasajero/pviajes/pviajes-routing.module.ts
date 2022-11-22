import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PviajesPage } from './pviajes.page';

const routes: Routes = [
  {
    path: '',
    component: PviajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PviajesPageRoutingModule {}

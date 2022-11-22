import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NviajePage } from './nviaje.page';

const routes: Routes = [
  {
    path: '',
    component: NviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NviajePageRoutingModule {}

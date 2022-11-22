import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhistorialPage } from './phistorial.page';

const routes: Routes = [
  {
    path: '',
    component: PhistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhistorialPageRoutingModule {}

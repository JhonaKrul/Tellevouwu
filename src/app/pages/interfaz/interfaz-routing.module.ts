import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterfazPage } from './interfaz.page';

const routes: Routes = [
  {
    path: '',
    component: InterfazPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterfazPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PperfilPage } from './pperfil.page';

const routes: Routes = [
  {
    path: '',
    component: PperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PperfilPageRoutingModule {}

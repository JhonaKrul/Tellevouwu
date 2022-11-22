import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CperfilPage } from './cperfil.page';

const routes: Routes = [
  {
    path: '',
    component: CperfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CperfilPageRoutingModule {}

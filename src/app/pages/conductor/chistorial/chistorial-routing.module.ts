import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChistorialPage } from './chistorial.page';

const routes: Routes = [
  {
    path: '',
    component: ChistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChistorialPageRoutingModule {}

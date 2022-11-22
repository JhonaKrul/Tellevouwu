import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhistorialPageRoutingModule } from './phistorial-routing.module';

import { PhistorialPage } from './phistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhistorialPageRoutingModule
  ],
  declarations: [PhistorialPage]
})
export class PhistorialPageModule {}

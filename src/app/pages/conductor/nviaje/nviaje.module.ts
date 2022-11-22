import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NviajePageRoutingModule } from './nviaje-routing.module';

import { NviajePage } from './nviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NviajePageRoutingModule
  ],
  declarations: [NviajePage]
})
export class NviajePageModule {}

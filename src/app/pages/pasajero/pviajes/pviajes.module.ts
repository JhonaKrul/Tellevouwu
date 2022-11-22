import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PviajesPageRoutingModule } from './pviajes-routing.module';

import { PviajesPage } from './pviajes.page';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PviajesPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PviajesPage]
})
export class PviajesPageModule {}

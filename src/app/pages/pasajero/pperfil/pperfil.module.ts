import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PperfilPageRoutingModule } from './pperfil-routing.module';

import { PperfilPage } from './pperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PperfilPageRoutingModule
  ],
  declarations: [PperfilPage]
})
export class PperfilPageModule {}

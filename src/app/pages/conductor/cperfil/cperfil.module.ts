import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CperfilPageRoutingModule } from './cperfil-routing.module';

import { CperfilPage } from './cperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CperfilPageRoutingModule
  ],
  declarations: [CperfilPage]
})
export class CperfilPageModule {}

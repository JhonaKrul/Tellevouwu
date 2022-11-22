import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChistorialPageRoutingModule } from './chistorial-routing.module';

import { ChistorialPage } from './chistorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChistorialPageRoutingModule
  ],
  declarations: [ChistorialPage]
})
export class ChistorialPageModule {}

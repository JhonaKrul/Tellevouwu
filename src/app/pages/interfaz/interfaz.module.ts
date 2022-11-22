import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterfazPageRoutingModule } from './interfaz-routing.module';

import { InterfazPage } from './interfaz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterfazPageRoutingModule
  ],
  declarations: [InterfazPage]
})
export class InterfazPageModule {}

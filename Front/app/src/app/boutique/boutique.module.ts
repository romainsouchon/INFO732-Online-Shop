import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BoutiquePage } from './boutique.page';

import { BoutiquePageRoutingModule } from './boutique-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoutiquePageRoutingModule
  ],
  declarations: [BoutiquePage]
})
export class BoutiquePageModule {}

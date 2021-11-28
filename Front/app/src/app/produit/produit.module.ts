import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProduitPage } from './produit.page';

import { ProduitPageRoutingModule } from './produit-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitPageRoutingModule
  ],
  declarations: [ProduitPage]
})
export class ProduitPageModule {}

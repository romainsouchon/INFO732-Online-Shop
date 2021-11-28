import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CategoriePage } from './categorie.page';

import { CategoriePageRoutingModule } from './categorie-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriePageRoutingModule
  ],
  declarations: [CategoriePage]
})
export class CategoriePageModule {}

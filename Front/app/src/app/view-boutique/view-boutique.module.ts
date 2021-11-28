import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewBoutiquePage } from './view-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBoutiquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewBoutiquePage]
})
export class ViewBoutiquePageModule {}

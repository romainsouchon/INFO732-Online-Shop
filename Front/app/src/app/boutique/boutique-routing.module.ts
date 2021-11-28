import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiquePage } from './boutique.page';

const routes: Routes = [
  {
    path: '',
    component: BoutiquePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoutiquePageRoutingModule {}

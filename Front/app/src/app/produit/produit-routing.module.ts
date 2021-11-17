import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitPage } from './produit.page';

const routes: Routes = [
  {
    path: '',
    component: ProduitPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitPageRoutingModule {}

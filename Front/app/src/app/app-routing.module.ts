import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'boutique',
    loadChildren: () => import('./boutique/boutique.module').then( m => m.BoutiquePageModule)
  },
  {
    path: '',
    redirectTo: 'boutique',
    pathMatch: 'full'
  },
  {
    path: 'add-boutique',
    loadChildren: () => import('./add-boutique/add-boutique.module').then( m => m.AddBoutiquePageModule)
  },
  {
    path: 'view-boutique/:id',
    loadChildren: () => import('./view-boutique/view-boutique.module').then( m => m.ViewBoutiquePageModule)
  },

  {
    path: 'categorie',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'categorie/:id',
    loadChildren: () => import('./categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: '',
    redirectTo: 'categorie',
    pathMatch: 'full'
  },
  {
    path: 'add-categorie',
    loadChildren: () => import('./add-categorie/add-categorie.module').then( m => m.AddCategoriePageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view-categorie/view-categorie.module').then( m => m.ViewCategoriePageModule)
  },

  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then( m => m.ProduitPageModule)
  },
  {
    path: '',
    redirectTo: 'produit',
    pathMatch: 'full'
  },
  {
    path: 'add-produit',
    loadChildren: () => import('./add-produit/add-produit.module').then( m => m.AddProduitPageModule)
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view-produit/view-produit.module').then( m => m.ViewProduitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

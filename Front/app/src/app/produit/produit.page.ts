import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: 'produit.page.html',
  styleUrls: ['produit.page.scss'],
})
export class ProduitPage {

  produits : any;
  api : RestService;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController, 
    public router : Router) {

    this.api = restapi;
  }

  async getProduits() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits()
      .subscribe(res => {
        console.log(res);
        this.produits = res.filter((aProduit) => {
          return true
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteProduit(id:any){
    await this.api.deleteProduit(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteProduit(id);
  }

  ngOnInit() {
    this.getProduits();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}

import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: 'produit.page.html',
  styleUrls: ['produit.page.scss'],
})
export class ProduitPage {

  produits : any;
  api : RestService;
  id : String;
  categorie: any;
  idboutique:String;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController,
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;
  }

  async getProduits() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduits(this.id)
      .subscribe(res => {
        this.produits = res
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async getCategorie() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(this.id)
      .subscribe(res => {
        this.categorie = res;
        console.log(this.categorie);
        this.idboutique = this.categorie.idboutique;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteProduit(id:any){
    await this.api.deleteProduit(id)
    .subscribe(res => {
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteProduit(id);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getCategorie();
    this.getProduits();
  } 

  ionViewWillEnter() {
    this.ngOnInit();
  }

}

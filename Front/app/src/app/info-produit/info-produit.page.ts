import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-produit-info',
  templateUrl: './info-produit.page.html',
  styleUrls: ['./info-produit.page.scss'],
})
export class InfoProduitPage implements OnInit {
  produit : any;
  api : RestService;
  id : string;
  name : string;
  price : number;
  description : string;
  idcategorie: String;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getProduit(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProduit(this.id)
      .subscribe(res => {
        console.log(res);
        this.produit = res;
        this.name = this.produit.name;
        this.description = this.produit.description;
        this.price = this.produit.price;
        this.idcategorie = this.produit.idcategorie;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduit(this.id);
  }
}

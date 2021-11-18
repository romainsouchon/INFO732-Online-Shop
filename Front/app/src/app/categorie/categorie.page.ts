import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: 'categorie.page.html',
  styleUrls: ['categorie.page.scss'],
})
export class CategoriePage {

  categories : any;
  api : RestService;
  boutique : string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    public navController : NavController, 
    public router : Router) {

    this.api = restapi;
  }

  async getCategories() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res.filter((aCategorie) => {
          return true
        });
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async deleteCategorie(id:any){
    await this.api.deleteCategorie(id)
    .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      }, (err) => {
        console.log(err);
      });
  }

  delete(id:any) {
    this.deleteCategorie(id);
  }

  ngOnInit() {
    this.getCategories();
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }

}

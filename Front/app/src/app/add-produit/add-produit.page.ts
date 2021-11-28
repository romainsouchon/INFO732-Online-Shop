import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-produit-add',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage implements OnInit {

  private produit : FormGroup;
  public api : RestService;
  private id : any;
  private categorie: any;
  private price: number;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.produit = this.formBuilder.group({
            name: [''],
            description: [''],
            price: [''],
            idcategorie: [''],
          });
      this.api = restapi;
  }

  async saveProduit(){
    await this.api.createProduit(this.produit.value)
    .subscribe(res => {
        this.router.navigate(['/produit/' + this.id]);
      }, (err) => {
        console.log(err);
      });
  }

  async getCategorie() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getCategorie(this.id)
      .subscribe(res => {
        this.categorie = res
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {
    console.log(this.produit.value);
    this.produit.value['idcategorie'] = this.id;
    this.saveProduit();

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getCategorie();
  }

}

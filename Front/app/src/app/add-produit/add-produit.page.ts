import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './add-produit.page.html',
  styleUrls: ['./add-produit.page.scss'],
})
export class AddProduitPage implements OnInit {

  private produit : FormGroup;
  public api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.produit = this.formBuilder.group({
            name: [''],
            description: [''],
          });
      this.api = restapi;
  }

  async saveProduit(){
    await this.api.createProduit(this.produit.value)
    .subscribe(res => {
        this.router.navigate(['/produit/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.produit.value);
    this.saveProduit();

  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-categorie-add',
  templateUrl: './add-categorie.page.html',
  styleUrls: ['./add-categorie.page.scss'],
})
export class AddCategoriePage implements OnInit {

  private categorie : FormGroup;
  public api : RestService;
  private id : any;
  private boutique: any;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.categorie = this.formBuilder.group({
            name: [''],
            description: [''],
            idboutique: [''],
          });
      this.api = restapi;
  }

  async saveCategorie(){
    console.log(this.categorie.value);
    await this.api.createCategorie(this.categorie.value)
    .subscribe(res => {
        this.router.navigate(['/categorie/' + this.id]);
      }, (err) => {
        console.log(err);
      });
  }

  async getBoutique() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getBoutique(this.id)
      .subscribe(res => {
        this.boutique = res
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  save() {
    console.log(this.categorie.value);
    this.categorie.value['idboutique'] = this.id;
    this.saveCategorie();

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    this.getBoutique();
  }
  
}

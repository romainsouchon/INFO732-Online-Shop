import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProduitPage } from './add-produit.page';

describe('AddProduitPage', () => {
  let component: AddProduitPage;
  let fixture: ComponentFixture<AddProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

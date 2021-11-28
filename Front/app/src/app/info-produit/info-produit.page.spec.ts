import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoProduitPage } from './info-produit.page';

describe('InfoPage', () => {
  let component: InfoProduitPage;
  let fixture: ComponentFixture<InfoProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

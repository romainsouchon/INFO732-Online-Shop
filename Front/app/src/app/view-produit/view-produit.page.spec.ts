import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewProduitPage } from './view-produit.page';

describe('ViewPage', () => {
  let component: ViewProduitPage;
  let fixture: ComponentFixture<ViewProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

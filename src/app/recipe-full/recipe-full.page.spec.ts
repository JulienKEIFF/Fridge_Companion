import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeFullPage } from './recipe-full.page';

describe('RecipeFullPage', () => {
  let component: RecipeFullPage;
  let fixture: ComponentFixture<RecipeFullPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFullPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeFullPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

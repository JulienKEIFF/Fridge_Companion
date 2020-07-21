import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FridgeComponent} from './fridge/fridge.component';
import {RecipeComponent} from './recipe/recipe.component';
import {ShopComponent} from './shop/shop.component';
import {SettingComponent} from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

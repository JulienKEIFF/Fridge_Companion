import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeFullPageRoutingModule } from './recipe-full-routing.module';

import { RecipeFullPage } from './recipe-full.page';

@NgModule({
  imports: [
    RecipeFullPage,
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeFullPageRoutingModule
  ],
  declarations: [RecipeFullPage]
})
export class RecipeFullPageModule {}

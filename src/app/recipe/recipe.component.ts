import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

import { AddRecipePage } from '../add-recipe/add-recipe.page';
import { RecipeFullPage } from '../recipe-full/recipe-full.page';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  private recipeDb: Storage;
  recipeList = [];

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    await this.openRecipeDb();
    await this.getRecipe();
  }

  async openRecipeDb(){
    this.recipeDb = new Storage({
      name: 'fridge_db',
      storeName: 'recipe',
      driverOrder: ['indexeddb']
    })
  }
  async getRecipe(){
    this.recipeDb.forEach(recipe =>{
      this.recipeList.push(recipe)
    })
  }

  async addRecipe(){
    const modal = await this.modalController.create({
      component: AddRecipePage,
    });
    await modal.present();
    await modal.onWillDismiss().then(_=>{
      this.recipeList = [];
      this.ngOnInit()
    })
  }

  async recipeDescrModal(item){
    const modal = await this.modalController.create({
      component: RecipeFullPage,
      componentProps: {item: item}
    })
    await modal.present()
  }

}
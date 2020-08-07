import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';

import { RecipeFullPage } from '../recipe-full/recipe-full.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  recipeDb: Storage;
  fridgeDb: Storage;

  recipeList = [];
  fridgeList = [];

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    await this.openRecipeDb();
    await this.openFridgeDb();
    await this.proposeRecipe();
    await this.proposeCart();
  }

  async openRecipeDb(){
    this.recipeDb = await new Storage({
      name: 'fridge_db',
      storeName: 'recipe',
      driverOrder: ['indexeddb']
    })
  }
  async openFridgeDb(){
    this.fridgeDb = await new Storage({
      name: 'fridge_db',
      storeName: 'fridge',
      driverOrder: ['indexeddb']
    })
  }

  async proposeRecipe(){
    await this.recipeDb.forEach(recipe => {
      const random = Math.random()
      if(random > 0.5){
        this.recipeList.push(recipe)
      }
    })
  }

  async proposeCart(){
    await this.fridgeDb.forEach(ingr =>{
      const random = Math.random()
      if(random > 0.5 && ingr.count == 0){
        this.fridgeList.push(ingr)
      }
    })
  }

  async viewRecipe(recipe){
    const modal = await this.modalController.create({
      component: RecipeFullPage,
      componentProps: {
        item: recipe,
        viewButton: false
      }
    })
    await modal.present()
  }
}

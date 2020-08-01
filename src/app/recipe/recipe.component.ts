import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AddRecipePage } from '../add-recipe/add-recipe.page'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {

  private recipeDb: Storage;
  private fridgeDb: Storage;

  recipeList = [];
  fridgeList = [];

  recipes = [{name: 'Quiche Lorraine', ingredient: ['oeuf', 'farine', 'lait', 'lardon', 'pâte brisée', 'gruyere rapé']}];

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    await this.openFridgeDb();
    await this.openRecipeDb();
  }

  async openFridgeDb(){
    this.fridgeDb = new Storage({
      name: 'fridge_db',
      storeName: 'fridge',
      driverOrder: ['indexeddb']
    })
  }
  async openRecipeDb(){
    this.recipeDb = new Storage({
      name: 'fridge_db',
      storeName: 'recipe',
      driverOrder: ['indexeddb']
    })
  }

  async addRecipe(){
    const modal = await this.modalController.create({
      component: AddRecipePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
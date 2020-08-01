import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  private dbIngredient: Storage;
  private dbRecipe: Storage;

  recipeName: string;
  recipeIngredients = [];
  recipe = {};

  items = [];

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    await this.openFridgeDb();
    await this.openRecipeDb();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async openFridgeDb(){
    this.dbIngredient = await new Storage({
      name: 'fridge_db',
      storeName: 'fridge',
      driverOrder: ['indexeddb']
    })
    await this.dbIngredient.forEach(item => {
      this.items.push(item)
    })
  }

  async openRecipeDb(){
    this.dbRecipe = await new Storage({
      name: 'fridge_db',
      storeName: 'recipe',
      driverOrder: ['indexeddb']
    })
  }

  setRecipeName(event){
    this.recipeName = event.detail.value
  }

  setRecipeIngredients(event){
    this.recipeIngredients = event.detail.value
  }

  async validateRecipe(){
    this.recipe = {
      name: this.recipeName,
      ingredient: this.recipeIngredients
    }
    await this.dbRecipe.set(this.recipeName, this.recipe)
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

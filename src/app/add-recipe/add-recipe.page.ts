import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  private dbIngredient: Storage
  items = [];

  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    await this.openItemDb()
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async openItemDb(){
    this.dbIngredient = await new Storage({
      name: 'fridge_db',
      storeName: 'fridge',
      driverOrder: ['indexeddb']
    })
    await this.dbIngredient.forEach(item => {
      this.items.push(item)
    })
    console.log(this.items)
  }

}

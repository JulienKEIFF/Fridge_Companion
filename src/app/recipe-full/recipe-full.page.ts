import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.page.html',
  styleUrls: ['./recipe-full.page.scss'],
})
export class RecipeFullPage implements OnInit {

  @Input() item;
  @Input() viewButton;
  recipeDb: Storage;

  constructor(private modalController: ModalController, private alertController: AlertController, private db: Storage) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async delete(){
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Etes-vous sur de vouloir suprimer cette recette ?',
      buttons: [{
        text: 'Oui',
        handler: async _=>{
          this.recipeDb = await new Storage({
            name: 'fridge_db',
            storeName: 'recipe',
            driverOrder: ['indexeddb']
          })
          this.recipeDb.remove(this.item.name)
          this.dismiss()
        }
      },
    {
      text: 'Annuler'
    }]
    });

    await alert.present();
  }
}

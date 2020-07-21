import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss'],
})
export class FridgeComponent implements OnInit {
  items = [];
  constructor(private alertController: AlertController, private db: Storage) { }

  async ngOnInit() {
    await this.itemList()
  }

  async launchAlert() {
    const popup = await this.alertController.create({
      header: 'Ajouter un aliment',
      inputs: [{
        name: "name",
        type: "text",
        placeholder: "Farine"
      },
      {
        name: "count",
        type: "number",
        placeholder: "1"
      }],
      buttons: [{
        text: 'OK',
        handler: (data)=>{
          if(data.name !== "" && data.count !== undefined){this.newItem(data.name, data.count)}
        }
      },
      {
        text: "Annuler",
        role: "cancel"
      }]
    });

    await popup.present()
  }

  async itemList(){
    this.items = []
    await this.db.forEach(item => {
      this.items.push(item);
    })
    this.items.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
  }

  async newItem(name, count){
    if(await this.db.get(name)){
      const popup = await this.alertController.create({
        header: "Erreur",
        subHeader: "L'aliment indiqué existe déja.",
        buttons: ['OK']
      })
      await popup.present()
    }else{
      await this.db.set(name, {name: name, count: count, key: name})
      await this.ngOnInit()
    }
  }

  async delItem(item){
    await this.db.remove(item.key)
    await this.ngOnInit()
  }

  async modifyItem(item){
    const popup = await this.alertController.create({
      header: 'Modifier un aliment',
      inputs: [{
        name: "name",
        type: "text",
        value: item.name,
        placeholder: "Farine"
      },
      {
        name: "count",
        type: "number",
        value: item.count,
        placeholder: "1"
      }],
      buttons: [{
        text: 'OK',
        handler: async (data)=>{
          await this.db.set(item.key, {name: data.name, count: data.count, key: item.key})
          await this.ngOnInit()
        }
      },
      {
        text: "Annuler",
        role: "cancel"
      }]
    });

    await popup.present()
  }

  async search(item){
    const searchItem = item.srcElement.value

    if (searchItem === null || searchItem === '') {
      await this.itemList()
      return
    } else {
      this.items = this.items.filter(item => {
        return item.name.toLowerCase().includes(searchItem.toLowerCase())
      })
    }
  }
}

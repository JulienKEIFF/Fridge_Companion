import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {

  items = [];
  constructor(private db: Storage, private alertController: AlertController) { }

  ngOnInit() { 
    this.generate()
  }

  async generate(){
    this.items = []
    await this.db.forEach(item =>{
      if(item.count == 0){
        this.items.push(item)
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  blackTheme: boolean = true;
  private dbSetting: Storage

  constructor() {
  }
  
  async ngOnInit() {
    await this.openSettingDb()
    await this.dbSetting.set('theme', 'dark')
  }

  async theme(event){
    await this.openSettingDb()
  }

  openSettingDb(){
    this.dbSetting = new Storage({
      name: 'fridge_db',
      storeName: 'setting',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  }

  openFridgeDb(){
    this.dbSetting = new Storage({
      name: 'fridge_db',
      storeName: 'fridge',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  }

  clear(){
    this.openFridgeDb()
    this.dbSetting.clear()
  }
}

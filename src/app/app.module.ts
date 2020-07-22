import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FridgeComponent} from './fridge/fridge.component';
import {ShopComponent} from './shop/shop.component'

@NgModule({
  declarations: [AppComponent, FridgeComponent, ShopComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot({name: 'fridge_db', driverOrder: ['indexeddb', 'sqlite', 'websql']})],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

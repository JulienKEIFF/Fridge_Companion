import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-full',
  templateUrl: './recipe-full.page.html',
  styleUrls: ['./recipe-full.page.scss'],
})
export class RecipeFullPage implements OnInit {

  @Input() item

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

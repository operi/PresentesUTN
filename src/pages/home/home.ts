import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AgregarPlanillaPage } from '../agregarPlanilla/agregarPlanilla';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAgregarPlanilla() : void {
    this.navCtrl.push(AgregarPlanillaPage, {});
  }
}

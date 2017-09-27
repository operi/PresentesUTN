import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * Realiza el log in del usuario. Si es exitoso, lo redirige a la HomePage de la aplicación
   * 
   */
  logIn(event){
    this.navCtrl.push(HomePage , {})
  }
}
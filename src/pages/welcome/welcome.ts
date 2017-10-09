import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  authorizedUsers: Map<string, string> = new Map<string, string>();
  email: string;
  password: string;

  constructor(public navCtrl: NavController) {
    this.authorizedUsers.set("admin@frlp.utn.edu.ar", "password1");
    this.authorizedUsers.set("octavio@gmail.com", "password2");
  }

  /**
   * Realiza el log in del usuario. Si es exitoso, lo redirige a la HomePage de la aplicación
   * 
   */
  logIn(event) : void {
    if (this.userIsAuthorized(this.email, this.password)) {
      this.navCtrl.push(HomePage , {})
    } else {
      console.log("Authentication error");
    }
  }

  /**
   * Mocking authentication
   */
  userIsAuthorized(email, password) : boolean {
    return this.authorizedUsers.get(email) === password;
  }
}

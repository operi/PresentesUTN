import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'nuevo-dia',
  templateUrl: 'nuevo-dia.html'
})
export class NuevoDiaPage {
  
  clase:number;
  dia:string;

  constructor(public navCtrl: NavController) {
  }

  nuevoDia(event) : void {
      this.navCtrl.pop()
  } 

}
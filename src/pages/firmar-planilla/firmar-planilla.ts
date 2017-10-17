import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'firmar-planilla',
  templateUrl: 'firmar-planilla.html'
})
export class FirmarPlanillaPage {
  
  tema:string;
  firma:string;

  constructor(public navCtrl: NavController) {
  }

  firmar(event) : void {
      this.navCtrl.pop()
  } 

}
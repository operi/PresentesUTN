import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { Service } from '../../app/services/service';


@Component({
  selector: 'firmar-planilla',
  templateUrl: 'firmar-planilla.html'
})
export class FirmarPlanillaPage {
  
  tema:string;
  firma:string;
  fecha: string;
  planillaId: number;

  constructor(public navCtrl: NavController, private service: Service, private navParams: NavParams) {
    this.fecha = navParams.get('fecha');
    this.planillaId = navParams.get('planillaId');
  }

  firmar() : void {
    this.service.firmarPlanilla(this.planillaId, this.fecha);
    this.navCtrl.pop()
  } 

}
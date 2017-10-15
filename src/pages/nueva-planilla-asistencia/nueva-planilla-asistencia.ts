import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'nueva-planilla-asistencia',
  templateUrl: 'nueva-planilla-asistencia.html'
})
export class NuevaPlanillaAsistenciaPage {
  
  materia:string;
  docente:string;
  auxiliar:string;
  año:string;
  ausenciasMax:string;
  ausenciasPromo:string;
  autor:string;
  fechaCreacion:string;

  constructor(public navCtrl: NavController) {
  }

  nuevaPlanilla(event) : void {
      this.navCtrl.pop()
  } 

}
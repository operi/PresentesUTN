import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { Alumno } from '../../app/model/alumno';

@Component({
  templateUrl: 'detalle-asistencia-dia.html'
})
export class DetalleAsistenciaDiaPage { 

  alumnos : Array<Alumno>;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.alumnos = navParams.get('alumnos');
  }
}
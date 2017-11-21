import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Service } from '../../app/services/service';
import { Alumno } from '../../app/model/alumno';
import { EstadoAlumno } from '../../app/model/enum-estado-alumno';


@Component({
  selector: 'nuevo-alumno',
  templateUrl: 'nuevo-alumno.html'
})
export class NuevoAlumnoPage {
  
  nombre:string;
  legajo:string;
  apellido:string;
  ausencias:string;
  estado:string;
  planillaId: number;

  constructor(public navCtrl: NavController,
              private planillaService: Service) {
  }

  nuevoAlumno(event) : void {
    var estado: EstadoAlumno = new EstadoAlumno(this.estado);
    var alumno: Alumno = new Alumno(this.legajo, this.nombre, this.apellido, this.ausencias, estado);  
    this.planillaService.addAlumnoToPlanilla(this.planillaId, alumno);
    this.navCtrl.pop();
  } 

}
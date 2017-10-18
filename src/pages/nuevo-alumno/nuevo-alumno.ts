import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlanillaService } from '../../app/services/planilla.service';
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
  estado:EstadoAlumno;
  planillaId: number;

  constructor(public navCtrl: NavController,
              private planillaService: PlanillaService) {
  }

  nuevoAlumno(event) : void {
    var alumno: Alumno = new Alumno(this.legajo, this.nombre, this.apellido, this.ausencias, this.estado)  
    this.planillaService.addAlumnoToPlanilla(this.planillaId, alumno);
    this.navCtrl.pop();
  } 

}
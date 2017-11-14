import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';
import { Service } from '../../app/services/planilla.service';
import { Alumno } from '../../app/model/alumno';
import { Docente } from '../../app/model/docente';

@Component({
  selector: 'nueva-planilla-asistencia',
  templateUrl: 'nueva-planilla-asistencia.html'
})
export class NuevaPlanillaAsistenciaPage {
  
  nombreMateria:string;
  docenteACargo:Docente;
  docenteAuxiliar:Docente;
  anio:string;
  horasMateria:string;
  diaCursada:string;
  cuatrimestre: string;
  horasAusenciaMaximasCursada:string;
  horasAusenciaMaximaPromocion:string;
  horasPorAusencia:string;
  autor:string;
  fechaCreacion:Date;
  planilla: PlanillaAsistencia;

  constructor(public navCtrl: NavController, 
              private planillaService: Service) {
  }

  nuevaPlanilla(event) : void {
      this.planilla = new PlanillaAsistencia(this.nombreMateria, this.docenteACargo, this.docenteAuxiliar,
          this.anio, this.diaCursada, this.cuatrimestre, this.horasPorAusencia, this.horasMateria,
          this.horasAusenciaMaximasCursada, this.horasAusenciaMaximaPromocion, "admin", this.fechaCreacion, new Array<Alumno>());
      this.planillaService.addPlanilla(this.planilla);
      this.navCtrl.pop();
  } 

}
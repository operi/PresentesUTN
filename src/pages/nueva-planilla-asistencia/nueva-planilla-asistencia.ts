import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';
import { PlanillaService } from '../../app/services/planilla.service';

@Component({
  selector: 'nueva-planilla-asistencia',
  templateUrl: 'nueva-planilla-asistencia.html'
})
export class NuevaPlanillaAsistenciaPage {
  
  nombreMateria:string;
  docenteACargo:string;
  docenteAuxiliar:string;
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
              private planillaService: PlanillaService) {
  }

  nuevaPlanilla(event) : void {
      this.planilla = new PlanillaAsistencia(this.nombreMateria, this.docenteACargo, this.docenteAuxiliar,
          this.anio, this.diaCursada, this.cuatrimestre, this.horasPorAusencia, this.horasMateria,
          this.horasAusenciaMaximasCursada, this.horasAusenciaMaximaPromocion, "admin", this.fechaCreacion);
      this.planillaService.addPlanilla(this.planilla);
      this.navCtrl.pop();
  } 

}
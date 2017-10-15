import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePlanillaAsistenciaPage } from '../../pages/detalle-planilla-asistencia/detalle-planilla-asistencia';
import { NuevaPlanillaAsistenciaPage } from '../../pages/nueva-planilla-asistencia/nueva-planilla-asistencia';


@Component({
  templateUrl: 'planillas-asistencia.html'
})
export class PlanillasAsistenciaPage { 

	constructor(
		public navCtrl: NavController) {
  }

	verDetallePlanilla() : void {
		this.navCtrl.push(DetallePlanillaAsistenciaPage , {})    
  }

	nuevaPlanilla() : void {
		this.navCtrl.push(NuevaPlanillaAsistenciaPage , {})    
  }
}
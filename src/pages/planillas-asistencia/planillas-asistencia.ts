import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePlanillaAsistenciaPage } from '../../pages/detalle-planilla-asistencia/detalle-planilla-asistencia';
import { NuevaPlanillaAsistenciaPage } from '../../pages/nueva-planilla-asistencia/nueva-planilla-asistencia';
import { PlanillaService } from '../../app/services/planilla.service';
import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';

@Component({
	templateUrl: 'planillas-asistencia.html'
})
export class PlanillasAsistenciaPage {

	planillas: PlanillaAsistencia[];

	constructor(
		public navCtrl: NavController,
		private planillaService: PlanillaService) {
	}

	verDetallePlanilla(event, planilla): void {
		this.navCtrl.push(DetallePlanillaAsistenciaPage, {planillaAsistencia: planilla});
	}

	nuevaPlanilla(event): void {
		this.navCtrl.push(NuevaPlanillaAsistenciaPage, {})
	}

	borrarPlanilla(id): void {
		this.planillaService.removePlanilla(id);
	}

	ngOnInit(): void {
		this.planillaService.getPlanillas().then(
			// when promise resolves correctly
			(planillas) => this.planillas = planillas,
			// when promise fails
			() => alert('error')
		);
	}

}
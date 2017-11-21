import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePlanillaAsistenciaPage } from '../../pages/detalle-planilla-asistencia/detalle-planilla-asistencia';
import { NuevaPlanillaAsistenciaPage } from '../../pages/nueva-planilla-asistencia/nueva-planilla-asistencia';
import { Service } from '../../app/services/service';
import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';
import { Docente } from '../../app/model/docente';

@Component({
	templateUrl: 'planillas-asistencia.html'
})
export class PlanillasAsistenciaPage {

	planillas: PlanillaAsistencia[];

	constructor(
		public navCtrl: NavController,
		private service: Service) {
	}

	verDetallePlanilla(event, planilla): void {
		this.navCtrl.push(DetallePlanillaAsistenciaPage, {planillaAsistencia: planilla});
	}

	nuevaPlanilla(event): void {
		this.navCtrl.push(NuevaPlanillaAsistenciaPage, {})
	}

	borrarPlanilla(id): void {
		this.service.removePlanilla(id);
	}

	ngOnInit(): void {
		var docente: Docente = this.service.getLoggedDocente();
		this.service.getPlanillasForDocente(docente.id).then(
			// when promise resolves correctly
			(planillas) => this.planillas = planillas,
			// when promise fails
			() => alert('error')
		);
	}

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { DetalleAsistenciaDiaPage } from '../../pages/detalle-asistencia-dia/detalle-asistencia-dia';
import { NuevoAlumnoPage } from '../../pages/nuevo-alumno/nuevo-alumno';
import { NuevoDiaPage } from '../../pages/nuevo-dia/nuevo-dia'; 
import { TomarAsistenciaPage } from '../../pages/tomar-asistencia/tomar-asistencia';
import { FirmarPlanillaPage } from '../../pages/firmar-planilla/firmar-planilla';
import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';
import { Service } from '../../app/services/planilla.service';


@Component({
  templateUrl: 'detalle-planilla-asistencia.html'
})
export class DetallePlanillaAsistenciaPage { 

  planillaAsistencia: PlanillaAsistencia;
  data: Object;
  legajo: string;
	constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public planillaService: Service) {
      this.planillaAsistencia = navParams.get('planillaAsistencia');
  }

	verAsistenciaDia() : void {
		this.navCtrl.push(DetalleAsistenciaDiaPage , {alumnos: this.planillaAsistencia.getAlumnos()})
  }

  	nuevoAlumno() : void {
		this.navCtrl.push(NuevoAlumnoPage , {})    
  }

  	nuevoDia() : void {
		this.navCtrl.push(NuevoDiaPage , {})    
  }

    tomarAsistencia() : void {
    this.navCtrl.push(TomarAsistenciaPage , {})    
  }

    firmarPlanilla() : void {
    this.navCtrl.push(FirmarPlanillaPage , {})    
  }

  borrarAlumno(legajo: string): void {
    this.planillaAsistencia.removeAlumno(legajo);
  }

}


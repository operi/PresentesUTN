import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleAsistenciaDiaPage } from '../../pages/detalle-asistencia-dia/detalle-asistencia-dia';
import { NuevoAlumnoPage } from '../../pages/nuevo-alumno/nuevo-alumno';
import { NuevoDiaPage } from '../../pages/nuevo-dia/nuevo-dia'; 
import { TomarAsistenciaPage } from '../../pages/tomar-asistencia/tomar-asistencia';
import { FirmarPlanillaPage } from '../../pages/firmar-planilla/firmar-planilla';


@Component({
  templateUrl: 'detalle-planilla-asistencia.html'
})
export class DetallePlanillaAsistenciaPage { 

	constructor(
		public navCtrl: NavController) {
  }

	verAsistenciaDia() : void {
		this.navCtrl.push(DetalleAsistenciaDiaPage , {})    
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

}

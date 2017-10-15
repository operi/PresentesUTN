import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalleAsistenciaDiaPage } from '../../pages/detalle-asistencia-dia/detalle-asistencia-dia';
import { NuevoAlumnoPage } from '../../pages/nuevo-alumno/nuevo-alumno';
import { NuevoDiaPage } from '../../pages/nuevo-dia/nuevo-dia'; 


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

}


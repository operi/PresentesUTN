import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DetalleAsistenciaDiaPage } from '../../pages/detalle-asistencia-dia/detalle-asistencia-dia';
import { NuevoAlumnoPage } from '../../pages/nuevo-alumno/nuevo-alumno';
import { NuevoDiaPage } from '../../pages/nuevo-dia/nuevo-dia'; 
import { TomarAsistenciaPage } from '../../pages/tomar-asistencia/tomar-asistencia';
import { FirmarPlanillaPage } from '../../pages/firmar-planilla/firmar-planilla';
import { PlanillaAsistencia } from '../../app/model/planilla-asistencia';
import { Service } from '../../app/services/service';


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
    public service: Service,
    private alertCtrl: AlertController) {
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

  firmarPlanilla(fecha: string) : void {
    console.log(this.planillaAsistencia);
    this.navCtrl.push(FirmarPlanillaPage , {"planillaId": this.planillaAsistencia.getId(), "fecha": fecha })    
  }

  borrarAlumno(legajo: string): void {
    let alert = this.alertCtrl.create({
      title: 'Confirmar eliminación',
      message: '¿Está seguro de querer borrar este alumno?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.planillaAsistencia.removeAlumno(legajo);
          }
        }
      ]
    });
    alert.present();
  }

}


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlanillasAsistenciaPage } from '../planillas-asistencia/planillas-asistencia';
import { Docente } from '../../app/model/docente';
import { Service } from '../../app/services/planilla.service';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  authorizedUsers: Map<string, Docente> = new Map<string, Docente>();
  dni: string;
  password: string;

  constructor(public navCtrl: NavController, public service: Service) {
    this.authorizedUsers.set("38000000-agiles", new Docente(1, "38000000", "Nombre 1", "Apellido 1"));
    this.authorizedUsers.set("39000000-agiles", new Docente(2, "39000000", "Nombre 2", "Apellido 2"));
    this.authorizedUsers.set("40000000-agiles", new Docente(3, "40000000", "Nombre 3", "Apellido 3"));
    this.authorizedUsers.set("50000000-agiles", new Docente(4, "41000000", "Nombre 4", "Apellido 4"));
  }

  /**
   * Realiza el log in del usuario. Si es exitoso, lo redirige a la HomePage de la aplicación
   * 
   */
  logIn(event) : void {
    let docente: Docente = this.userIsAuthorized(this.dni, this.password);
    if (docente) {
      console.log(docente);
      this.service.setLoggedDocente(docente);
      this.navCtrl.push(PlanillasAsistenciaPage);
    } else {
      alert("Authentication error");
    }
  }

  /**
   * Mocking authentication
   */
  userIsAuthorized(dni, password) : Docente {
    var mapKey = dni + "-" + password;
    return this.authorizedUsers.get(mapKey);
  }
}

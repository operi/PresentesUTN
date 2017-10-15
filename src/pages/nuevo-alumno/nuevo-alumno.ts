import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'nuevo-alumno',
  templateUrl: 'nuevo-alumno.html'
})
export class NuevoAlumnoPage {
  
  nombre:string;
  apellido:string;
  ausencias:number;
  estado:string;

  constructor(public navCtrl: NavController) {
  }

  nuevoAlumno(event) : void {
      this.navCtrl.pop()
  } 

}
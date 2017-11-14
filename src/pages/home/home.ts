import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Docente } from '../../app/model/docente';
/** import { NavController } from 'ionic-angular'; **/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  docente: Docente;
  
  constructor(public navParams: NavParams) {
  }
}
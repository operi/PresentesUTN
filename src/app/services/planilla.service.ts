import { Injectable } from '@angular/core';
import { PlanillaAsistencia } from '../model/planilla-asistencia';

@Injectable()
export class PlanillaService {

  planillas: Array<PlanillaAsistencia>;
  
  constructor() {
    this.planillas = [
      new PlanillaAsistencia('Metodologias Agiles', 'Martin', 'Emilio', '4', 'Miercoles de 20:15 a 22:30, Sábado de 9:15 a 11',
       '2', '1', '100', '20', '25', 'admin', new Date()), 
      new PlanillaAsistencia('Materia 2', 'Un docente', 'Otro docente', '4', 'Martes de 20:15 a 22:30, Jueves de 9:15 a 11',
       '1', '3', '200', '40', '50', 'admin2', new Date())
    ];
  }

  getPlanillas(): Promise<PlanillaAsistencia[]> {
    return Promise.resolve(this.planillas);
  }

  addPlanilla(planilla: PlanillaAsistencia) {
    var nextId: number = this.planillas.length;
    planilla.setId(nextId);
    this.planillas.push(planilla);
  }

  removePlanilla(id: number) {
    this.planillas.splice(id,1);
  }
}
import { Injectable } from '@angular/core';
import { PlanillaAsistencia } from '../model/planilla-asistencia';
import { Alumno } from '../model/alumno';
import { EstadoAlumno } from '../model/enum-estado-alumno';

@Injectable()
export class PlanillaService {

  planillas: Array<PlanillaAsistencia>;
  alumno1;
  constructor() {
    var alumno1: Alumno = new Alumno('25253', 'Matias','Navarro', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno2: Alumno = new Alumno('25251', 'Julieta', 'Sanchez', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno3: Alumno = new Alumno('25252', 'Octavio', 'Peri', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno4: Alumno = new Alumno('25254', 'Angelo', 'Raso', '0', EstadoAlumno.APTO_PROMOCION);
    
    var lista1: Array<Alumno> = new Array<Alumno>();
    lista1.push(alumno1);
    lista1.push(alumno2);
    lista1.push(alumno3);
    lista1.push(alumno4);
    var lista2: Array<Alumno> = new Array<Alumno>();
    lista2.push(alumno2);
    lista2.push(alumno4);
    
    this.planillas = [
      new PlanillaAsistencia('Metodologias Agiles', 'Martin', 'Emilio', '4', 'Miercoles de 20:15 a 22:30, Sábado de 9:15 a 11',
       '2', '1', '100', '20', '25', 'admin', new Date(), lista1), 
      new PlanillaAsistencia('Materia 2', 'Un docente', 'Otro docente', '4', 'Martes de 20:15 a 22:30, Jueves de 9:15 a 11',
       '1', '3', '200', '40', '50', 'admin2', new Date(), lista2)
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

  addAlumnoToPlanilla(planillaId: number, alumno: Alumno) {
    var planilla: PlanillaAsistencia = this.planillas.find(element => element.getId() === planillaId);
    if (planilla === undefined) {
      alert("No existe la planilla");
      return;
    }

    var alumnoInList: Alumno = planilla.getAlumnos().find(element => element.getLegajo() === alumno.getLegajo());
    if (alumnoInList !== undefined) {
      alert("El alumno ya esta agregado");
      return;
    }
    planilla.addAlumno(alumno);
    this.planillas.push(planilla);
  }

}
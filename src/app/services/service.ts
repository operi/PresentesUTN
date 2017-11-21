import { Injectable } from '@angular/core';
import { PlanillaAsistencia } from '../model/planilla-asistencia';
import { Alumno } from '../model/alumno';
import { Docente } from '../model/docente';
import { EstadoAlumno } from '../model/enum-estado-alumno';

@Injectable()
export class Service {

  planillas: Array<PlanillaAsistencia>;
  loggedDocente: Docente;
  planillasFirmadas: Array<string> = new Array<string>();
  constructor() {
    var alumno1: Alumno = new Alumno('25253', 'Matias','Navarro', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno2: Alumno = new Alumno('25251', 'Julieta', 'Sanchez', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno3: Alumno = new Alumno('25252', 'Octavio', 'Peri', '0', EstadoAlumno.APTO_PROMOCION);
    var alumno4: Alumno = new Alumno('25254', 'Angelo', 'Raso', '0', EstadoAlumno.APTO_PROMOCION);
    var docente38: Docente = new Docente(1, "380000000", "Nombre 1", "Apellido 1");
    var docenteAuxiliar39: Docente = new Docente(2, "39000000", "Nombre 2", "Apellido 2");
    var docenteAuxiliar40: Docente = new Docente(3, "40000000", "Nombre 3", "Apellido 3");
    var lista1: Array<Alumno> = new Array<Alumno>();
    lista1.push(alumno1);
    lista1.push(alumno2);
    lista1.push(alumno3);
    lista1.push(alumno4);
    var lista2: Array<Alumno> = new Array<Alumno>();
    lista2.push(alumno2);
    lista2.push(alumno4);
    
    this.planillas = [
      new PlanillaAsistencia(1, 'Metodologias Agiles', docente38, docenteAuxiliar39, '4', 'Miercoles de 20:15 a 22:30, Sábado de 9:15 a 11',
       '2', '1', '100', '20', '25', 'admin', new Date(), lista1), 
      new PlanillaAsistencia(2,'Materia 2', docente38, docenteAuxiliar40, '4', 'Martes de 20:15 a 22:30, Jueves de 9:15 a 11',
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

  getPlanillasForDocente(docenteId: number): Promise<PlanillaAsistencia[]> {
    return Promise.resolve(this.planillas.filter(element => 
      element.getDocenteACargo().id === docenteId 
        || 
      element.getDocenteAuxiliar().id === docenteId));
  }

  getLoggedDocente() {
    return this.loggedDocente;
  }

  setLoggedDocente(docente: Docente) {
    this.loggedDocente = docente;
  }

  firmarPlanilla(planillaId: number, fecha: string){
    try {
      this.planillasFirmadas.push(planillaId + "-" + fecha);
      alert("Planilla firmada con exito");
    } catch (e){
      alert("Error al firmar planilla");
    }
    
    
  }

  isPlanillaFirmada(planillaId: number, fecha: string): boolean {
    return this.planillasFirmadas.indexOf(planillaId + "-" + fecha) !== -1;
  }

}
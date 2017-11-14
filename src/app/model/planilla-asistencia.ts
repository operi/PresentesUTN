import { Alumno } from './alumno';
import { Docente } from './docente';
export class PlanillaAsistencia {
  private id: number;
  private nombre: string;
  private docenteACargo: Docente;
  private docenteAuxiliar: Docente;
  private anioCursada: string;
  private diaCursada: string;
  private cuatrimestre: string;
  private private // cantidad de horas que se computaran por cada falta
  private horasPorAusencia: string;
  private horasMateria: string;
  // 80% horasMateria
  private horasAusenciaMaximasCursada: string;
  // 75% horasMateria
  private horasAusenciaMaximaPromocion: string;
  private usuarioCreador: string;
  private fechaCreacionPlanilla: Date;
  private alumnos: Array<Alumno>;

  constructor(nombre: string, docenteACargo: Docente, docenteAuxiliar: Docente, anioCursada: string, diaCursada: string,
    cuatrimestre: string, horasPorAusencia: string, horasMateria: string, horasAusenciaMaximasCursada: string, 
    horasAusenciaMaximaPromocion: string, usuarioCreador: string, fechaCreacionPlanilla: Date, alumnos: Array<Alumno>) {
      this.nombre = nombre;
      this.docenteACargo = docenteACargo;
      this.docenteAuxiliar = docenteAuxiliar;
      this.anioCursada = anioCursada;
      this.diaCursada = diaCursada;
      this.cuatrimestre = cuatrimestre;
      this.horasPorAusencia = horasPorAusencia;
      this.horasMateria = horasMateria;
      this.horasAusenciaMaximasCursada = horasAusenciaMaximasCursada;
      this.horasAusenciaMaximaPromocion = horasAusenciaMaximaPromocion;
      this.usuarioCreador = usuarioCreador;
      this.fechaCreacionPlanilla = fechaCreacionPlanilla;
      this.alumnos = alumnos;
    }

  public setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  public setAlumnos(alumnos: Array<Alumno>) {
    this.alumnos = alumnos;
  }

  public removeAlumno(legajo: string) {
    var alumnos: Array<Alumno> = this.getAlumnos().filter(element => element.getLegajo() !== legajo)
    this.setAlumnos(alumnos);
  }

  public getAlumnos() {
    return this.alumnos;
  }

  public getDocenteACargo() {
    return this.docenteACargo;
  }

  public getDocenteAuxiliar() {
    return this.docenteAuxiliar;
  }
}
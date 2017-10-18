export class PlanillaAsistencia {
  nombre: string;
  docenteACargo: string;
  docenteAuxiliar: string;
  anioCursada: string;
  diaCursada: string;
  cuatrimestre: string;
  // cantidad de horas que se computaran por cada falta
  horasPorAusencia: string;
  horasMateria: string;
  // 80% horasMateria
  horasAusenciaMaximasCursada: string;
  // 75% horasMateria
  horasAusenciaMaximaPromocion: string;
  usuarioCreador: string;
  fechaCreacionPlanilla: Date;

  constructor(nombre: string, docenteACargo: string, docenteAuxiliar: string, anioCursada: string, diaCursada: string,
    cuatrimestre: string, horasPorAusencia: string, horasMateria: string, horasAusenciaMaximasCursada: string, 
    horasAusenciaMaximaPromocion: string, usuarioCreador: string, fechaCreacionPlanilla: Date) {
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
    }
}
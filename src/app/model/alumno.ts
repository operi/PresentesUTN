import { EstadoAlumno } from './enum-estado-alumno';

export class Alumno {
  legajo: string;
  nombre: string;
  apellido: string;
  cantidadAusencias: string;
  estado: EstadoAlumno;

  constructor(legajo: string, nombre: string, 
    apellido: string, cantidadAusencias: string,
    estado: EstadoAlumno) {
      this.legajo = legajo;
      this.nombre = nombre;
      this.apellido = apellido;
      this.cantidadAusencias = cantidadAusencias;
      this.estado = estado;
  }

  getLegajo() {
    return this.legajo;
  }
}
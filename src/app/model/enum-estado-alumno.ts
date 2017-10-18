export class EstadoAlumno {
  
  constructor(public value: string){

  }

  toString() {
    return this.value;
  }

  static APTO_PROMOCION = new EstadoAlumno("Apto Promocion");
  static REGULAR_SIN_PROMOCION = new EstadoAlumno('Regular Sin Promocion');
  static CONDICIONAL = new EstadoAlumno('Condicional');
  static PROVISIONAL = new EstadoAlumno('Provisional');
  static LIBRE = new EstadoAlumno('Libre');
}
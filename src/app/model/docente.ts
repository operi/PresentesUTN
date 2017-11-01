export class Docente {
  private _id: number;
  private _dni: string;
  private _nombre: string;
  private _apellido: string;

  constructor(id: number, dni: string, nombre: string, apellido: string ) {
    this._id = id;
    this._dni = dni;
    this._nombre = nombre;
    this._apellido = apellido;
	}

	public get id(): number {
		return this._id;
	}

	public set id(value: number) {
		this._id = value;
	}

	public get dni(): string {
		return this._dni;
	}

	public set dni(value: string) {
		this._dni = value;
	}

	public get nombre(): string {
		return this._nombre;
	}

	public set nombre(value: string) {
		this._nombre = value;
	}

	public get apellido(): string {
		return this._apellido;
	}

	public set apellido(value: string) {
		this._apellido = value;
	}

}
import { Capacidad } from './capacidad.interface';
export interface Trabajador {
    nombre: string;
    apellidos: string;
    edad: number;
    estadoCivil: string;
    sexo: string;
    correo: string;
    telefono: string;
    fotoPerfil: string;
    id?: string;
    evaluaciones?: Capacidad[];
}
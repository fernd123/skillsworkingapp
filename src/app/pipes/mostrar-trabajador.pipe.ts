import { Pipe, PipeTransform } from '@angular/core';
import { Trabajador } from './../interfaces/trabajador.interface';

@Pipe({
  name: 'mostrarTrabajador',
  pure: false
})
export class MostrarTrabajadorPipe implements PipeTransform {

  trabajadores: Trabajador[] = [];
  transform(value: any, param:any): any {
    debugger;
    this.trabajadores = [];
    for(let v in value){
      const data = value[v].payload.doc.data();
      const id = value[v].payload.doc.id;

      let trabajador: Trabajador = data;
      trabajador.id = id;

      this.trabajadores.push(trabajador);
    }

    return this.trabajadores;
  }

}

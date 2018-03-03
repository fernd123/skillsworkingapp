import { TrabajadorService } from './../../providers/trabajador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styles: []
})
export class TrabajadoresComponent implements OnInit {

  constructor(private trabajadorService: TrabajadorService) {
    this.trabajadorService.cargarTrabajadores().subscribe(); // No devuelve nada
   }

  ngOnInit() {
  }

}

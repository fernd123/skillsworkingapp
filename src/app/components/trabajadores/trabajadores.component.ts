import { TrabajadorService } from './../../providers/trabajador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styles: []
})
export class TrabajadoresComponent implements OnInit {

  cargando: boolean = true;
  constructor(private trabajadorService: TrabajadorService) {
    this.trabajadorService.cargarTrabajadores().subscribe( data=> {
      this.cargando = false;
    });

    this.trabajadorService.cargarEvaluaciones().subscribe( data=> {
      
    });
    
  }

  ngOnInit() {
  }

}

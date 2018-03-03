import { TrabajadorService } from './../../providers/trabajador.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Capacidad } from './../../interfaces/capacidad.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styles: []
})
export class EvaluacionComponent implements OnInit {

  id:string;
  capacidad: Capacidad = {
    trabajoEquipo: 50,
    capacidadAnalisis: 50,
    racionalizacion: 50,
    controlEstres: 50,
    liderazgo: 50,
    iniciativa: 50,
    respeto: 50,
    sinceridad: 50
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private trabajadorService: TrabajadorService) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data['id'];
    });

    this.trabajadorService.cargarEvaluaciones().subscribe(data => {

    });
   }

  ngOnInit() {
  }

  evaluar(){
    console.log(this.capacidad);
    console.log(this.id);
    this.trabajadorService.guardarEvaluacion(this.id, this.capacidad);
    this.route.navigate(['/trabajadores']);
  }

}

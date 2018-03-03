import { Capacidad } from './../../interfaces/capacidad.interface';
import { TrabajadorService } from './../../providers/trabajador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../interfaces/trabajador.interface';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  id: string;
  evaluaciones: any[] = [];
  cargando: boolean = true;

  trabajador: Trabajador = {
    nombre: "",
    apellidos: "",
    edad: null,
    estadoCivil: "",
    sexo: "",
    correo: "",
    telefono: "",
    fotoPerfil: ""
  };

  numEvaluaciones: number = this.evaluaciones.length;
  evaluacionMedia: Capacidad = {
    trabajoEquipo: 0,
    capacidadAnalisis: 0,
    racionalizacion: 0,
    controlEstres: 0,
    liderazgo: 0,
    iniciativa: 0,
    respeto: 0,
    sinceridad: 0
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private trabajadorService: TrabajadorService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      // Cargar las evaluaciones
      this.trabajadorService.getEvaluaciones(this.id).subscribe(data => {
        this.evaluaciones = data;
        this._getMedia();
        this.radarChartData = [
          {
            data: [this.evaluacionMedia.trabajoEquipo,
            this.evaluacionMedia.capacidadAnalisis,
            this.evaluacionMedia.racionalizacion,
            this.evaluacionMedia.controlEstres,
            this.evaluacionMedia.liderazgo,
            this.evaluacionMedia.iniciativa,
            this.evaluacionMedia.respeto,
            this.evaluacionMedia.sinceridad], label: 'Media'
          }
        ];
        this.cargando = false;
      });

      // Cargo los trabajadores
      if (trabajadorService.trabajadores.length == 0) {
        this.trabajadorService.cargarTrabajadores().subscribe(data => {
          this.trabajador = this.trabajadorService.cargarTrabajador(this.id);
        });
      } else {
        this.trabajador = this.trabajadorService.cargarTrabajador(this.id);
      }
      
    });

  }

  ngOnInit() {
  }

  volver() {
    this.route.navigate(['/trabajadores']);
  }

  evaluar(id: string) {
    this.route.navigate(['/evaluar', id]);
  }

  _getMedia() {

    this.numEvaluaciones = this.evaluaciones.length;
    if (this.numEvaluaciones > 0) {
      for (let ev of this.evaluaciones) {
        this.evaluacionMedia.trabajoEquipo = (this.evaluacionMedia.trabajoEquipo + ev.trabajoEquipo);
        this.evaluacionMedia.capacidadAnalisis = (this.evaluacionMedia.capacidadAnalisis + ev.capacidadAnalisis);
        this.evaluacionMedia.racionalizacion = (this.evaluacionMedia.racionalizacion + ev.racionalizacion);
        this.evaluacionMedia.controlEstres = (this.evaluacionMedia.controlEstres + ev.controlEstres);
        this.evaluacionMedia.liderazgo = (this.evaluacionMedia.liderazgo + ev.liderazgo);
        this.evaluacionMedia.iniciativa = (this.evaluacionMedia.iniciativa + ev.iniciativa);
        this.evaluacionMedia.respeto = (this.evaluacionMedia.respeto + ev.respeto);
        this.evaluacionMedia.sinceridad = (this.evaluacionMedia.sinceridad + ev.sinceridad);
      }

      this.evaluacionMedia.trabajoEquipo = this.evaluacionMedia.trabajoEquipo / this.numEvaluaciones;
      this.evaluacionMedia.capacidadAnalisis = this.evaluacionMedia.capacidadAnalisis / this.numEvaluaciones;
      this.evaluacionMedia.racionalizacion = this.evaluacionMedia.racionalizacion / this.numEvaluaciones;
      this.evaluacionMedia.controlEstres = this.evaluacionMedia.controlEstres / this.numEvaluaciones;
      this.evaluacionMedia.liderazgo = this.evaluacionMedia.liderazgo / this.numEvaluaciones;
      this.evaluacionMedia.iniciativa = this.evaluacionMedia.iniciativa / this.numEvaluaciones;
      this.evaluacionMedia.respeto = this.evaluacionMedia.respeto / this.numEvaluaciones;
      this.evaluacionMedia.sinceridad = this.evaluacionMedia.sinceridad / this.numEvaluaciones;
      console.log(this.evaluacionMedia);
    }
  }

  // Radar
  public radarChartLabels: string[] = ['Trabajo en Equipo', 'Capacidad Análisis', 'Racionalización', 'Control de Estrés', 'Liderazgo', 'Iniciativa', 'Respeto', 'Sinceridad'];

  public radarChartData: any = [
    {
      data: [this.evaluacionMedia.trabajoEquipo,
      this.evaluacionMedia.capacidadAnalisis,
      this.evaluacionMedia.racionalizacion,
      this.evaluacionMedia.controlEstres,
      this.evaluacionMedia.liderazgo,
      this.evaluacionMedia.iniciativa,
      this.evaluacionMedia.respeto,
      this.evaluacionMedia.sinceridad], label: 'Media'
    }
  ];
  public radarChartType: string = 'radar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
    debugger;
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

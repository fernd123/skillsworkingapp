import { TrabajadorService } from './../../providers/trabajador.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { Trabajador } from './../../interfaces/trabajador.interface';

@Component({
  selector: 'app-altatrabajador',
  templateUrl: './altatrabajador.component.html',
  styles: []
})
export class AltaTrabajadorComponent implements OnInit {

  trabajador: Trabajador = {
    nombre: "",
    apellidos: "",
    edad: null,
    estadoCivil: "Soltero",
    sexo: "Hombre",
    correo: "",
    telefono: "",
    fotoPerfil: ""
  };

  imagen: any = {
    nombre: "",
    file: ""
  };

  constructor(private trabajadorService: TrabajadorService,
    private route: Router) {
      this.trabajadorService.cargarTrabajadores().subscribe();
  }

  ngOnInit() {
  }

  guardarTrabajador() {
    this.trabajadorService.guardarTrabajador(this.trabajador, this.imagen);
    this.route.navigate(['/trabajadores']);
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name + Math.random();

    this.imagen.nombre = filePath;
    this.imagen.file = file;
  }

}

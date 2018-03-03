import { TrabajadorService } from './providers/trabajador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private trabajadorService: TrabajadorService){
    this.trabajadorService.cargarTrabajadores().subscribe();
  }

  ngOnInit(){
    this.trabajadorService.cargarTrabajadores().subscribe();
  }
}

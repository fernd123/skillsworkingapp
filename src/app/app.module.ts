import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';

// Rutas
import { APP_ROUTING } from '../app.routes';


@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    TrabajadoresComponent,
    PerfilComponent,
    EvaluacionComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { EvaluacionComponent } from './app/components/evaluacion/evaluacion.component';
import { PerfilComponent } from './app/components/perfil/perfil.component';
import { TrabajadoresComponent } from './app/components/trabajadores/trabajadores.component';
import { TrabajadorComponent } from './app/components/trabajador/trabajador.component';


const APP_ROUTES: Routes = [
    { path: 'trabajadores', component: TrabajadoresComponent },
    { path: 'trabajador', component: TrabajadorComponent },
    { path: 'perfil/:id', component: PerfilComponent },
    { path: 'evaluar/:id', component: EvaluacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'trabajadores' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

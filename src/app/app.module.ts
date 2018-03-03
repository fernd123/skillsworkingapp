import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Componentes
import { AppComponent } from './app.component';
import { TrabajadorComponent } from './components/trabajador/trabajador.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AltaTrabajadorComponent } from './components/altatrabajador/altatrabajador.component';

// Rutas
import { APP_ROUTING } from '../app.routes';

// Services
import { TrabajadorService } from './providers/trabajador.service';

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorComponent,
    TrabajadoresComponent,
    PerfilComponent,
    EvaluacionComponent,
    NavbarComponent,
    AltaTrabajadorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [TrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

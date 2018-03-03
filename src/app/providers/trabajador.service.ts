import { Capacidad } from './../interfaces/capacidad.interface';
import { Trabajador } from './../interfaces/trabajador.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrabajadorService {

  private trabajadoresCollection: AngularFirestoreCollection<Trabajador>;
  private evaluacionCollection: AngularFirestoreCollection<Capacidad>;

  public trabajadores: Trabajador[] = [];
  public evaluaciones: Capacidad[] = [];

  uploadPercent: Observable<number>;

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage) {

  }

  // Cargar Datos
  cargarTrabajadores() {
    this.trabajadoresCollection = this.afs.collection<Trabajador>('trabajadores');
    return this.trabajadoresCollection.snapshotChanges()
      .map((value: any) => {
        let trabajadores: any = [];
        for (let v in value) {
          const data = value[v].payload.doc.data();
          const id = value[v].payload.doc.id;

          let trabajador: Trabajador = data;
          trabajador.id = id;
          trabajadores.push(trabajador);
        }
        this.trabajadores = trabajadores;
      });
  }

  cargarEvaluaciones() {
    this.evaluacionCollection = this.afs.collection<Capacidad>('evaluaciones');
    return this.evaluacionCollection.snapshotChanges()
      .map((value: any) => {
        let evaluaciones: any = [];
        for (let v in value) {
          const data = value[v].payload.doc.data();
          const id = value[v].payload.doc.id;

          let evaluacion: Capacidad = data;
          evaluacion.id = id;
          evaluaciones.push(evaluacion);
        }
        this.evaluaciones = evaluaciones;
      });
  }

  cargarTrabajador(id: string) {
    for (let trabajador of this.trabajadores) {
      if (trabajador.id == id) {
        return trabajador;
      }
    }
    return null;
  }

  getEvaluaciones(idTrabajador: string) {
    
    return this.afs.collection('evaluaciones', ref => ref.where('idTrabajador', '==', idTrabajador)).valueChanges()
      .map(data => {
        return data;
      });
  }

  // Guardar Datos
  guardarTrabajador(trabajador: Trabajador, imagen: any): void {
    if (imagen.nombre != null && imagen.nombre != undefined && imagen.nombre.length != 0) {
      this._uploadFile(imagen.file, imagen.nombre).subscribe(data => {
        trabajador.fotoPerfil = data;
        this._guardarTrabajador(trabajador);
      })
    } else {
      this._guardarTrabajador(trabajador);
    }
  }

  guardarEvaluacion(id: string, capacidad: Capacidad) {
    capacidad.idTrabajador = id;
    this._guardarEvaluacion(capacidad);
  }

  // Métodos privados
  private _uploadFile(file: File, path: string) {
    const task = this.storage.upload(path, file);
    let url = "";
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    return task.downloadURL();
  }

  _guardarTrabajador(trabajador: Trabajador) {
    this.trabajadoresCollection.add(trabajador).then(respuesta => {
      trabajador.id = respuesta.id;
    }).catch(error => {
      console.log('Ha ocurrido un error: ', error);
    });
  }

  _guardarEvaluacion(capacidad: Capacidad) {
    this.evaluacionCollection.add(capacidad).then(respuesta => {

    }).catch(error => {
      console.log('Ha ocurrido un error: ', error);
    });
  }

}

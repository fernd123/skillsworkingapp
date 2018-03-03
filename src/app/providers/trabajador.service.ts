import { Trabajador } from './../interfaces/trabajador.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TrabajadorService {

  private trabajadoresCollection: AngularFirestoreCollection<Trabajador>;
  private trabajadores: Trabajador[] = [];
  //<li *ngFor="let t of trabajadorService.trabajadores"> {{ t.nombre }}</li>

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afs: AngularFirestore,
    private storage: AngularFireStorage) {
      
  }

  guardarTrabajador(trabajador: Trabajador, imagen: any): void {

    if(imagen.nombre != null && imagen.nombre != undefined && imagen.nombre.length != 0){
      this._uploadFile(imagen.file, imagen.nombre);
    }
    
    this.trabajadoresCollection.add(trabajador).then(respuesta => {
      trabajador.id = respuesta.id;
    }).catch(error => {
      console.log('Ha ocurrido un error: ', error);
    });
  }

  cargarTrabajadores() {
    this.trabajadoresCollection = this.afs.collection<Trabajador>('trabajadores');
    return this.trabajadoresCollection.valueChanges()
      .map((trabajadores: Trabajador[]) => {
        this.trabajadores = trabajadores;
      });
  }

  private _uploadFile(file: File, path:string) {
    const task = this.storage.upload(path, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();

    console.log(this.uploadPercent);
    console.log(this.downloadURL);
  }

}

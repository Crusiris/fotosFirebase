import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore'
import * as firebase  from 'firebase';
import { FileItem } from '../models/file-item';



@Injectable({
  providedIn: 'root'
})
export class CargaImagenesService {

  saveFirebase( imagenes: FileItem[] ){

    console.log( imagenes );
  }

  private folder_images = 'img';

  constructor( private db: AngularFirestore) { }

  private guardarImagen( imagen: { nombre: string, url: string } ){

    this.db.collection(`/${this.folder_images}`)
            .add( imagen );
  }
}

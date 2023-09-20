import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import Usuario from '../interfaces/usuario.interface';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private firestore: Firestore) { }

  addUsuario(usuario: Usuario){
    const placeRef = collection(this.firestore, 'usuarios');
    usuario.activo = true;
    usuario.log = formatDate(new Date(), 'dd-MMM-yyyy hh:mm a', 'en-US');
    return addDoc(placeRef, usuario);
  }
}

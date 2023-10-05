import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  getDocs,
  query,
  setDoc,
  updateDoc,
  addDoc
} from '@angular/fire/firestore';

import { from, Observable, of, switchMap } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioChat } from '../interfaces/usuarioChat.interface';
import {AuthService} from 'src/app/services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  
  constructor(
    private firestore: Firestore,
    private authService: AuthService
  ) {}

  get currentUserProfile$(): Observable<UsuarioChat | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'usuariosChat', user?.uid);
        return docData(ref) as Observable<UsuarioChat>;
      })
    );
  }

  get allUsers$(): Observable<UsuarioChat[]> {
    const ref = collection(this.firestore, 'usuariosChat');
    const queryAll =  query(ref);
    return collectionData(queryAll) as Observable<UsuarioChat[]>;
  }



  // addUser(user: UsuarioChat): Observable<any> {
  //   const ref = doc(this.firestore, 'usuariosChat', user?.uid);
  //   return from(setDoc(ref, user));
  // }

  addUser(user: UsuarioChat): Observable<any> {
      const ref = collection(this.firestore, 'usuariosChat');
      user.uid = user?.uid;
      return from(addDoc(ref, user));
    }

  // updateUser(user: UsuarioChat): Observable<any> {
  //   const ref = doc(this.firestore, 'usuariosChat', user?.uid);
  //   return from(updateDoc(ref, { ...user }));
  // }
}
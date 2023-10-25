import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatePipe } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })
  export class ChatService {

    private itemsCollections: AngularFirestoreCollection<Mensaje> | undefined;
    public chats: Mensaje[] =[];
    //public nombreUser: any = localStorage.getItem('email');
    public nombreUser: any;

    private value? : Timestamp


    constructor(public aFire: AngularFirestore, public authFire: AngularFireAuth, private datePipe: DatePipe) { 

        this.authFire.authState.subscribe(res=>{
          if(res && res.uid){
            this.nombreUser = res.email;        
          }
        });
      }

      CargarMensaje(){

        this.itemsCollections = this.aFire.collection<Mensaje>('chats', ref=>ref.orderBy('fecha','desc').limit(17));
    
        return this.itemsCollections.valueChanges().pipe(
    
          map( (mensajes: Mensaje[]) => {
    
              this.chats = [];
    
              for(let sms of mensajes){ this.chats.unshift(sms); }
    
              return this.chats;
          })
    
        )
      } //Fin CargarMensaje


      AgregarMensaje(sms: string){

        let dato: Date = new Date();
        let tiempo =  dato.getDay() + "/" +dato.getMonth() + "/" + dato.getFullYear()+ "      " + dato.getHours() + ":" + dato.getMinutes();
        let tiempoPipe =  this.datePipe.transform(this.value?.toMillis(), 'short') ?? '';

        
        let retMensaje: Mensaje = {
          nombre: this.nombreUser,
          mensaje: sms,
          fecha: new Date().getTime(),
          hora: tiempo
        }
    
        return this.itemsCollections?.add(retMensaje)
    
      }

  }
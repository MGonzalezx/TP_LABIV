import { Component, OnInit } from '@angular/core';

import { AdivinarNumero } from '../../clases/logica/adivinarNumero';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adivinar-numero',
  templateUrl: './adivinar-numero.component.html',
  styleUrls: ['./adivinar-numero.component.scss']
})
export class AdivinarNumeroComponent implements OnInit {

  formAdivinar: FormGroup;
  juego: AdivinarNumero;
  numeroAdivinar: number;
  numeroIngresado?: number;
  intentos: number;
  inputTexto?: string;
  //mensaje: string;
  respuesta: string;
  respuestaDos?: string;
  arrayNumerosUsados: number[] = [];


  constructor(
    private formBuilder: FormBuilder,
  ){
    this.formAdivinar = this.formBuilder.group({
      numero: [
        
        '',
        [Validators.required,
        Validators.maxLength(3),
        Validators.max(100),
        Validators.min(1)],
        
      ],
    
    });
    //this.mensaje = "Introducí un numero del 1 al 100";
    this.respuesta = "Ya podés empezar."
    this.juego = new AdivinarNumero();
    this.numeroAdivinar = this.juego.getNumeroAdivinar();
    this.intentos = 10;
    console.log(this.numeroAdivinar);
    
   
  }

  ngOnInit(): void {
  }

  public jugar(numeroString: string){


    if(this.intentos > 0){
      this.numeroIngresado = +numeroString;
      if(this.arrayNumerosUsados.includes(this.numeroIngresado)){
          this.respuesta = "Numero ya usado";
      }else{
        let prueba = this.juego.adivinarNumero(this.numeroIngresado);
        //console.log(prueba);
        switch(prueba){
          case 0:
            this.respuesta = "Te pasaste, probá de nuevo";
            this.intentos--;
            this.arrayNumerosUsados.push(this.numeroIngresado);
            break;
          case 1:
            this.respuesta = "GANASTE, adivinaste el número";
            this.respuestaDos = "El número era " + this.numeroAdivinar;
          this.formAdivinar.disable();
            break;
          case 2:
            this.respuesta = "Es muy chico, probá de nuevo";
            this.intentos--;
            this.arrayNumerosUsados.push(this.numeroIngresado);
            break;
          default:
            this.respuesta = "error"
        }
        if(this.intentos == 0){
            this.respuesta = "GAME OVER, no hay más intentos";
            this.respuestaDos = "El número era " + this.numeroAdivinar;
            //this.puntuacion.perdidas++;
            //this.puntuacion.cantidad++;
            //this.cloudStorageService.setPuntuacion(1, this.puntuacion);
        }
      }
      
    }
    this.formAdivinar.reset();
  }

  public jugarDeNuevo(){
    this.formAdivinar.reset();
    this.respuesta = "Ya podés empezar."
    this.respuestaDos = "";
    this.intentos = 10;
    this.juego.setNumeroAdivinar();
    this.numeroAdivinar = this.juego.getNumeroAdivinar();
    this.arrayNumerosUsados = [];
    this.formAdivinar.enable();
  }
}

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {

  puntos: number = 0;

  vidas: number = 5;
  vidasTotal: number = 5;
  win: boolean = false;
  lose: boolean = false;
  

  arrayNumeros: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  numero: number = 0;
  siguienteNumero: number = 0;




  mensajePuntosWin: string = '';
  mensajePuntosLose: string = '';
  mensajeFinal: string = '';
  smsFinal: boolean = false;

  constructor() { 
    this.numero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];
  }
    

  ngOnInit(): void {
  }



  Jugar(botonElegido: any){
    this.SiguienteRonda(this.numero, botonElegido);
  } 

  SiguienteRonda(numero:any, botonElegido:any){

    if(this.arrayNumeros.length == 1){
      this.mensajeFinal = 'Ya no quedan más cartas!!';
    }else{
      this.siguienteNumero = this.arrayNumeros[Math.floor(Math.random() * this.arrayNumeros.length)];

      if( (botonElegido == 'menor') && (this.siguienteNumero < numero) ){
        this.puntos++;
        this.mensajePuntosWin = 'BIEN, suma punto';
        this.win = true;
        this.lose = false;
        const index = this.arrayNumeros.indexOf(numero);
        this.arrayNumeros.splice(index, 1);
        console.log(this.arrayNumeros);
        
      }
  
      if( (botonElegido == 'menor') && (this.siguienteNumero > numero) ){
        //this.puntos++;
        this.mensajePuntosLose = 'INCORRECTO, no suma punto';
        this.vidas = this.vidas - 1;
        this.lose = true;
        this.win = false;
        const index = this.arrayNumeros.indexOf(numero);
        this.arrayNumeros.splice(index, 1);
        console.log(this.arrayNumeros);
  
      }
  
      if( (botonElegido == 'mayor') && (this.siguienteNumero > numero) ){
        this.puntos++;
        this.mensajePuntosWin = 'BIEN, suma punto';
        this.win = true;
        this.lose = false;
        const index = this.arrayNumeros.indexOf(numero);
        this.arrayNumeros.splice(index, 1);
        console.log(this.arrayNumeros);
  
      }
  
      if( (botonElegido == 'mayor') && (this.siguienteNumero < numero) ){
        //this.puntos++;
        this.mensajePuntosLose = 'INCORRECTO, no suma punto';
        this.vidas = this.vidas - 1;
        this.lose = true;
        this.win = false;
        const index = this.arrayNumeros.indexOf(numero);
        this.arrayNumeros.splice(index, 1);
        console.log(this.arrayNumeros);
  
      }
      this.numero = this.siguienteNumero;
  
      if(this.puntos === 5){
        
        //this.res.agregarResultado('Win', 'Mayor o Menor');
  
        this.mensajeFinal = 'GANASTE!!!';
        this.smsFinal = true;
        this.win = false;
        this.lose = false;
  
      }
  
  
      if(this.vidas === 0){
  
        //this.res.agregarResultado('Lose', 'Mayor o Menor');
  
        this.mensajeFinal = 'Fin del juego!!!';
        this.smsFinal = true;
        this.win = false;
        this.lose = false;
      }
    }

    
  }

  Repetir(){
    this.vidas = 5;
    this.puntos = 0;
    this.mensajePuntosLose = '';
    this.mensajePuntosWin = '';
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
    this.arrayNumeros= [1,2,3,4,5,6,7,8,9,10,11,12,13];
  }
}

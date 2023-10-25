import { Component, OnInit } from '@angular/core';

import { Ahorcado } from '../../clases/logica/ahorcado';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {
  title = 'Ahorcado';
  puntos: number = 0;
  diccPosition: number = 0;

  //palabras en juego
  palClave = ["PRUEBA", "PARED", "TIJERA", "ELEFANTE","COLECTIVO"];

  palabra:string = '';
  palabraOculta:string = '';
  
  intentos:number = 3;
  intentos_usuarios:number = 0;
  win:boolean = false;
  lose:boolean = false;
  message:string = '';

  letters = ['A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','Ñ','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];
  
  constructor(){
    this.selectWord();
  }

  ngOnInit(): void {
  }

  setAttempts(intnetos:number){
    this.intentos = intnetos;
  }

  getAttempts():number{
    return this.intentos;
  }


  checkLetter(letter:string):void{
    if(!this.palabra.includes(letter)){
      this.intentos_usuarios += 1;
      const index = this.letters.indexOf(letter);
      this.letters.splice(index, 1);
    }
    this.replaceWord(letter);
  }

  selectWord(){
    this.diccPosition = Math.floor(Math.random() * 5);
    this.palabra = this.palClave[this.diccPosition];
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  winVerification(){
    const WordArray = this.palabraOculta.split(' ');
    const WordString = WordArray.join('');
    if(WordString == this.palabra){

     

      this.message = 'Ganaste';
      this.puntos =+ 1;
      this.win = true;
      this.hideInterface();
    }

    if(this.intentos_usuarios >= this.intentos){

     

      this.intentos_usuarios = 3;
      this.message = 'Perdiste, la palabra es : ' + this.palabra;
      this.lose = true;
      this.hideInterface();
    }
  }

  hideInterface(){
    if((this.win || this.lose) == true){
      const lettersBox = document.querySelector('.letters__container');
      if(lettersBox != null){lettersBox.classList.add('hide');}
    }
  }
  
  replaceWord(letter:string){
    const ArrayWord = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letter){
        ArrayWord[i] = letter;
      }
    }

    this.palabraOculta = ArrayWord.join(' ');
    this.winVerification();
  }

  restartGame(){
    this.win = false;
    this.lose = false;
    this.intentos_usuarios = 0;
    document.querySelector('.letters__container')?.classList.remove('hide');
    this.selectWord();
    this.letters = ['A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','Ñ','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];
  }
}
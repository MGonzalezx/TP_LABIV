import { Component, OnInit } from '@angular/core';

import { MayorMenor } from '../../clases/logica/mayorOMenor';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss']
})
export class MayorMenorComponent implements OnInit {
  formAdivinar: FormGroup;
  juego: MayorMenor;
  cartaAdivinar?: any;
  textoIngresado?: string;
  intentos: number;
  inputTexto?: string;
  mensaje: string;
  respuesta: string;
  respuestaDos?: string;
  carta: string;
  

  constructor(
   
    private formBuilder: FormBuilder,
  ){
    this.formAdivinar = this.formBuilder.group({
      texto: [
        '',
        [Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]
      ]
    });
    
    this.mensaje = "Adivina si la siguiente carta es 'mayor' o 'menor' a la carta actual";
    this.respuesta = "Ya podés empezar."
    this.juego = new MayorMenor();
    this.cartaAdivinar = this.juego.getCartaAdivinar();
    this.carta = `La carta actual es ${this.cartaAdivinar.valor} de ${this.cartaAdivinar.palo}. ¿Es la siguiente carta mayor o menor? (responde 'mayor' o 'menor')`
    this.intentos = 2;
    
  }

  ngOnInit(): void {
  }

  public jugar(texto: string){
    if(this.intentos > 0){
      this.textoIngresado = texto.toLowerCase().trim();
      
      let prueba = this.juego.adivinarCarta(this.textoIngresado);
      
      console.log(prueba);
      switch(prueba){
        case 0:
          this.respuesta = "Probá de nuevo";
          this.intentos--;
          break;
        case 1:
          this.respuesta = "Bien, adivinaste correctamente";
          this.cartaAdivinar = this.juego.getCartaAdivinar();
          this.carta = `La carta actual es ${this.cartaAdivinar.valor} de ${this.cartaAdivinar.palo}. ¿Es la siguiente carta mayor o menor? (responde 'mayor' o 'menor')`
          break;
        default:
          this.respuesta = "error"
      }
      if(this.intentos == 0){
          this.respuesta = "GAME OVER, no hay más intentos";
         
      }
    }
    this.formAdivinar.reset();
  }

  public jugarDeNuevo(){
    this.formAdivinar.reset();
    this.respuesta = "Ya podés empezar."
    this.respuestaDos = "";
    this.intentos = 2;
    this.juego = new MayorMenor();
    this.cartaAdivinar = this.juego.getCartaAdivinar();
    this.carta = `La carta actual es ${this.cartaAdivinar.valor} de ${this.cartaAdivinar.palo}. ¿Es la siguiente carta mayor o menor? (responde 'mayor' o 'menor')`
    //this.numeroAdivinar = this.juego.getNumeroAdivinar();
  }
}

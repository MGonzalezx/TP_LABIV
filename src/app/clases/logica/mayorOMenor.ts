import { NumeroRandom } from '../numeroRandom';
import { Carta } from '../logica/carta'

export class MayorMenor {
  
    mazo: Carta[] = [];


    private cartaAdivinar: any;
    private miCarta: any;
    private indice = 1;
    private cartaActual: any;

    constructor() {
        this.crearMazo()
        this.mezclarMazo(this.mazo);
        this.cartaActual = this.mazo[this.indice]
        this.setCartaAdivinar(this.cartaActual);
        
      }


    public crearMazo(){
    

        for (let valor = 1; valor <= 13; valor++) {
          this.mazo.push(new Carta(valor, 'Picas'));
          this.mazo.push(new Carta(valor, 'Corazones'));
          this.mazo.push(new Carta(valor, 'Diamantes'));
          this.mazo.push(new Carta(valor, 'Tréboles'));
        }
     }
    
     public mezclarMazo(mazo: Carta[]) {
        for (let i = mazo.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
        }
      }



      public adivinarCarta(respuestaElegida: string){

        let numeroRetorno;
        

        this.indice ++;
        const cartaSiguiente = this.mazo[this.indice];
       
        

        if ((respuestaElegida === 'mayor' && cartaSiguiente.valor >= this.cartaActual.valor) ||
            (respuestaElegida === 'menor' && cartaSiguiente.valor <= this.cartaActual.valor)) 
            {
                numeroRetorno = 1;
                this.setCartaAdivinar(cartaSiguiente);
                console.log(cartaSiguiente);
            } else {
                numeroRetorno = 0;
                console.log(cartaSiguiente);
            }

        return numeroRetorno;

    }

    public setCartaAdivinar(carta: any){
        this.cartaAdivinar = carta;
      }
    
      public getCartaAdivinar(): number{
        return this.cartaAdivinar;
      }

       
 
}
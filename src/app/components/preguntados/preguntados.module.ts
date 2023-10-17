import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntadosComponent } from './preguntados.component';
import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { SpinnerJuegoModule } from '../spinner-juego/spinner-juego.module';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    NavbarModule,
    FormsModule,
    SpinnerJuegoModule
  ]
})
export class PreguntadosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { ButtonResetearModule } from '../button-resetear/button-resetear.module';
import { SpinnerJuegoModule } from '../spinner-juego/spinner-juego.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MayorMenorComponent } from './mayor-menor.component';



@NgModule({
  declarations: [
    MayorMenorComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule,
    NavbarModule,
    ButtonResetearModule,
    SpinnerJuegoModule,
    ReactiveFormsModule
  ]
})
export class MayorMenorModule { }

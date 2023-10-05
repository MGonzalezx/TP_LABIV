import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { NavbarModule } from '../navbar/navbar.module';
import { AhorcadoComponent } from './ahorcado.component';
import { ButtonResetearModule } from '../button-resetear/button-resetear.module';
import { SpinnerJuegoModule } from '../spinner-juego/spinner-juego.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule,
    NavbarModule,
    ButtonResetearModule,
    SpinnerJuegoModule,
    ReactiveFormsModule
  ]
})
export class AhorcadoModule { }

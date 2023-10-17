import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdivinarNumeroComponent } from './adivinar-numero.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AdivinarNumeroRoutingModule } from './adivinar-numero-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonResetearModule } from '../button-resetear/button-resetear.module';
import { SpinnerJuegoModule } from '../spinner-juego/spinner-juego.module';


@NgModule({
  declarations: [
    AdivinarNumeroComponent
  ],
  imports: [
    CommonModule,
    AdivinarNumeroRoutingModule,
    NavbarModule,
    ReactiveFormsModule,
    ButtonResetearModule,
    SpinnerJuegoModule,
  ]
})
export class AdivinarNumeroModule { }

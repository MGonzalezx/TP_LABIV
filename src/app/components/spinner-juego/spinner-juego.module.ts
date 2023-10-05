import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerJuegoComponent } from './spinner-juego.component';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [SpinnerJuegoComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [SpinnerJuegoComponent]
})
export class SpinnerJuegoModule { }

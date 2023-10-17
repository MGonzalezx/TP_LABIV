import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinarNumeroComponent } from './adivinar-numero.component';

const routes: Routes = [{ path: '', component: AdivinarNumeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdivinarNumeroRoutingModule { }

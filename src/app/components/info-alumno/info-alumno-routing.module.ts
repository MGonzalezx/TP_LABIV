import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoAlumnoComponent } from './info-alumno.component';

const routes: Routes = [{ path: '', component: InfoAlumnoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoAlumnoRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoAlumnoRoutingModule } from './info-alumno-routing.module';
import { InfoAlumnoComponent } from './info-alumno.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InfoAlumnoComponent
  ],
  imports: [
    CommonModule,
    InfoAlumnoRoutingModule,
    FontAwesomeModule
  ]
})
export class InfoAlumnoModule { }

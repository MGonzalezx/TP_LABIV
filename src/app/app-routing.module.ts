import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
   
  },
  {
    path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'infoAlumno', loadChildren: () => import('./components/info-alumno/info-alumno.module').then(m => m.InfoAlumnoModule) 
   
  },
  { 
    path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) 
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

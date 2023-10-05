import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   
    
   
  },
  {
    path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    
  },
  {
    path: 'infoAlumno', loadChildren: () => import('./components/info-alumno/info-alumno.module').then(m => m.InfoAlumnoModule) 
   
  },
  { 
    path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    
  },

  { 
    path: 'registro', loadChildren: () => import('./components/registro/registro.module').then(m => m.RegistroModule),
    
  },

  { 
    path: 'chat', loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule),
    
  },

  { 
    path: 'ahorcado', loadChildren: () => import('./components/ahorcado/ahorcado.module').then(m => m.AhorcadoModule),
    
  },

  { 
    path: 'mayorMenor', loadChildren: () => import('./components/mayor-menor/mayor-menor.module').then(m => m.MayorMenorModule),
    
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

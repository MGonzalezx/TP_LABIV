import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs';
import {authState, Auth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
    private serviceToast: ToastrService,
    private router: Router,
    ) 
    { }

    currentUser$ = this.afauth.authState;

  async register({email ,password}: {email: string, password: string}){

    try {
			const user = await this.afauth.createUserWithEmailAndPassword(email,password);
			return user;
		} catch (e) {
      this.showToast('Error al registrarse','Usuario ya registrado');
			console.log("error en registro: ", e);
      return null;
		}
   }

  async login({email, password} : {email: string, password: string}) {
    try {
			const user = await this.afauth.signInWithEmailAndPassword(email,password);
			return user;
		} catch (e) {
      this.showToast('Error','Email o contraseña incorrectos');
			console.log("error en login: ", e);
      return null;
      
		}
  }

  

  logout() {
	this.afauth.signOut().then(() =>{
    this.router.navigateByUrl('/login', { replaceUrl: false });
  });
}

getUserLogged(){
  return this.afauth.authState;
}


async showToast(header: string, message: string) {
  this.serviceToast.error(header, message, {
    enableHtml: true,
    positionClass: 'toast-bottom-right',
    timeOut: 3000,
   
  });
}
}

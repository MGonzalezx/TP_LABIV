import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  credentials!: FormGroup;
  constructor(
		private router: Router,
		private authService: AuthService,
		private fb: FormBuilder,
    private placeService: LogService,
	) {}

 // Easy access for form fields
 get email() {
  return this.credentials.get('email');
}

get password() {
  return this.credentials.get('password');
}

ngOnInit() {
  this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

async infoAlumnoRouter() {
  this.router.navigateByUrl('/infoAlumno', { replaceUrl: false });
}

async registro() {
 


  const user = await this.authService.register(this.credentials.value);
  

  if (user) {
    const response = await this.placeService.addUsuario(this.credentials.value);
    this.router.navigateByUrl('/home', { replaceUrl: true });
  } 
  else if(user == this.credentials.value){
    console.log("Usuario ya registrado");
  }
  else {
   
    console.log("Registro fallido", user);
    
  }
}

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/log.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

	@Output() emitData = new EventEmitter<any>();

	credentials!: FormGroup;

  constructor(
		private router: Router,
		private authService: AuthService,
		private fb: FormBuilder,
		private placeService: LogService
	) {
		
	}
  
	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}


	get password() {
		return this.credentials.get('password'); 
	}

	ngOnInit() 
	{
		this.credentials = this.fb.group({
				email: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required, Validators.minLength(6)]]
			});
	}

  	async infoAlumnoRouter() {
		this.router.navigateByUrl('/infoAlumno', { replaceUrl: false });
	}

	

	async login() {
		

		const user = await this.authService.login(this.credentials.value);
		

		if (user) {

			
			this.router.navigateByUrl('/home', { replaceUrl: true });
			const response = await this.placeService.addUsuario(this.credentials.value);
			console.log(response);
		} else {
			console.log("Inicio de sesion fallido");
			

			
		}
	}

  	async registro() {
		this.router.navigateByUrl('/registro', { replaceUrl: false });
	}

	public onSubmit(loginData: any){
		this.emitData.emit(loginData);
	  }

	async rellenarInputs(){
		this.credentials.get('email')?.setValue('a@a.de');
		this.credentials.get('password')?.setValue('123456');
	}

}

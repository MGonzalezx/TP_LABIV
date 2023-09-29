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

	credentialsEmail!: FormGroup;

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


		this.credentialsEmail =this.fb.group({
			email: ['', [Validators.required, Validators.email]],
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

	public precargarUsuario(tipo: number) {
		try{
		  switch (tipo) {
			case 1:
			  this.credentials.controls['email'].setValue('a@a.de');
			  this.credentials.controls['password'].setValue('123456');
			  break;
			case 2:
			  this.credentials.controls['email'].setValue('b@b.de');
			  this.credentials.controls['password'].setValue('654321');
			  break;
			case 3:
				this.credentials.controls['email'].setValue('c@c.de');
				this.credentials.controls['password'].setValue('123456');
				break;
			default:
			  console.log("default");
			  break;
		  }
		} catch(error){
		  console.log('Error en precargar:', error);
		}
		
	  }
	  
	   

}

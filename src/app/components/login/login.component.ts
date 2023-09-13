import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
		private router: Router
	) {}
  

  async infoAlumnoRouter() {
		this.router.navigateByUrl('/infoAlumno', { replaceUrl: true });
	}

  async login() {
		this.router.navigateByUrl('/home', { replaceUrl: true });
	}
}

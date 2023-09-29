import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  
  constructor(
    private authService: AuthService,
		private router: Router
	) {}


  async infoAlumnoRouter() {
		this.router.navigateByUrl('/infoAlumno', { replaceUrl: false });
	}

  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

}

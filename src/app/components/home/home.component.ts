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

  /*public card = new Card({
    buttons: ['read more'],
    content: `New York City comprises 5 boroughs sitting where the
              Hudson River meets the Atlantic Ocean. At its core is Manhattan,
              a densely populated borough that's among the world's major commercial,
              financial and cultural centers.`,
    icons: ['favorite', 'share', 'bookmark'],
    imageUrl: 'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg',
    subtitle: 'City in New York',
    title: 'New York City'
});*/

  async infoAlumnoRouter() {
		this.router.navigateByUrl('/infoAlumno', { replaceUrl: false });
	}

  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

}

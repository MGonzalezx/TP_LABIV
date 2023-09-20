import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  userLogged=this.authService.getUserLogged();

  constructor(private authService: AuthService,
    private router: Router){

  }

  async logOut() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

}

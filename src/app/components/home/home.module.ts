import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule, 
  IgxAvatarModule} from 'igniteui-angular';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxRippleModule,
    IgxAvatarModule,
    NavbarModule
  ]
})
export class HomeModule { }

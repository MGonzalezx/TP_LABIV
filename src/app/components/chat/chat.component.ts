import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  user$ = this.userService.currentUserProfile$;

  users$ = this.userService.allUsers$;

  searchControl = new FormControl('');

  constructor(private userService : UsersService){

  }
  ngOnInit(): void {
   
  }
 

  }



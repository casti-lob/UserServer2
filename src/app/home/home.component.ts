import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  user = '';
  password = '';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  login(){

  }
  
}

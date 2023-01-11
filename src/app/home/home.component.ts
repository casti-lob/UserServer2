import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/services/users.service';
import { User } from 'src/app/servers/interfaces/client.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  userName = '';
  password = '';
  user!: User;
  userLogin:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  
  }
  


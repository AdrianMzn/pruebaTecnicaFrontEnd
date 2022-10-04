import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  name: string = '';
  
  constructor(private usersService : UsersService, private router: Router) { 
    this.name = sessionStorage.getItem('name') || '';
  }

  ngOnInit(): void {

    if (sessionStorage.getItem('logged') != 'true'){
      alert('You need to login to access this page.');
      this.router.navigate(['login']);
    }
  }

  logout(){
    alert('You have been logged out.');
    this.usersService.setToken('');
    sessionStorage.setItem('logged', 'false');
    this.router.navigate(['login']);
  }

}

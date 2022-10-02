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
      alert('Necesitas iniciar sesion para acceder a esta pagina');
      this.router.navigate(['login']);
    }
  }

  logout(){
    alert('Se ha cerrado sesion');
    this.usersService.setToken('');
    sessionStorage.setItem('logged', 'false');
    this.router.navigate(['login']);
  }

}

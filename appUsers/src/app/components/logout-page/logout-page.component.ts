import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent implements OnInit {

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('logged') == 'false'){
      this.router.navigate(['login']);
      alert('Necesitas iniciar sesion para acceder a esta pagina');
    }
  }

  logout(){
    alert('Se ha cerrado sesion');
    this.usersService.setToken('');
    localStorage.setItem('logged', 'false');
    this.router.navigate(['login']);
  }

}

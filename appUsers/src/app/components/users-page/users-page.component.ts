import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('logged') == 'false'){
      this.router.navigate(['login']);
      alert('Necesitas iniciar sesion para acceder a esta pagina');
    }
  }

}

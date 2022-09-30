import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('logged') == 'false'){
      alert('Necesitas iniciar sesion para acceder a esta pagina');
      this.router.navigate(['login']);
    }
    else{
      this.usersService.getUsers().subscribe( (data: any) => {
        this.usuarios = data.items;
        console.log(this.usuarios);
        
      }), (error: any) => {
        console.log(error);
      }
    }
  }

}

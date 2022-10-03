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

    if (sessionStorage.getItem('logged') == 'true'){
      this.usersService.getUsers().subscribe( (data: any) => {
        this.usuarios = data.items;
        this.usuarios.forEach((element,index)=>{
            if( element.email==sessionStorage.getItem('email') ) this.usuarios.splice(index,1);
        });
        console.log(this.usuarios);
        
      }), (error: any) => {
        console.log(error);
      }
    }
    else{

      alert('Necesitas iniciar sesion para acceder a esta pagina');
      this.router.navigate(['login']);
    }
  }

  esAdmin(email: string) : boolean {
    return email.includes('@hiberus');
  }

  hasPermissions(email: string) : boolean {
    if (email.includes('@hiberus') ){
      return sessionStorage.getItem('email')?.includes('@hiberus') || false;
    }
    return true;
  }

  deleteUser(user: any){
    alert("Se eliminará el usuario " + user['name'])
  }

}

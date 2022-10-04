import { HttpErrorResponse } from '@angular/common/http';
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
  usuariosFilted: any[] = [];

  tipos: string[] = [ 'Default users', 'Administrators'];

  nameInput: string = '';
  typeInput: string = 'All';

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {

    if (sessionStorage.getItem('logged') == 'true'){
      this.usersService.getUsers().subscribe( (data: any) => {
        this.usuarios = data.items;
        this.usuarios.forEach((element,index)=>{
            if( element.email==sessionStorage.getItem('email') ) this.usuarios.splice(index,1);
        });

        this.usuariosFilted = this.usuarios;
        console.log(this.usuarios);
        
      }), (error: any) => {
        console.log(error);
      }
    }
    else{

      alert('You need to login to access this page.');
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

  applyFilters(){
    
    switch (this.typeInput) {
      case 'Default users':
        this.usuariosFilted = this.usuarios.filter( user => !user['email'].includes('@hiberus') );
        break;
      case 'Administrators':
        this.usuariosFilted = this.usuarios.filter( user => user['email'].includes('@hiberus') );
        break;
      default:
        this.usuariosFilted = this.usuarios;
        break;
    }

    if(this.nameInput != ''){
      this.usuariosFilted = this.usuariosFilted.filter( user => ( user['name'].includes(this.nameInput) 
                                                                  || user['surname'].includes(this.nameInput)
                                                                  || user['email'].includes(this.nameInput) ) );
    }
  }
}

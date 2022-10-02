import { Component } from '@angular/core';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router  } from '@angular/router';
import { UsersService } from './services/usersService/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appUsers';

   //Codigo para saber si se ha recargado la pagina y volver a poner el token en el service
  constructor(private usersService : UsersService, private router: Router){
    this.router.events
    .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
    .subscribe(event => {
      if (
        event.id === 1 &&
        event.url === event.urlAfterRedirects
      ) { //Si ha recargado la pagina y estaba logeado
          if( sessionStorage.getItem('logged') == 'true' ){
            this.usersService.setToken(sessionStorage.getItem('token') || "[]" );
          }
          
          //alert("Refresh");
      }
      else{
        //alert("No Refresh");
      }
    })

  }
  
}





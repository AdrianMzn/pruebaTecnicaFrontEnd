import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = "http://51.38.51.187:5050/api/v1";
  headers = new HttpHeaders( { "Content-type" : "application/json" } );

  constructor(private http:HttpClient) { }

  public login( user: any ): Observable<any>{
      console.log("Aqui logeariamos el usuario: " + user.email + " " + user.password )

      return this.http.post( this.apiURL + "/auth/log-in", 
                            user, 
                            { "headers": this.headers } );
  }

  public signup( newUser: any ): any{
    console.log("Aqui creariamos el usuario: " + newUser.name + " " + newUser.surname + " " + newUser.email + " " + newUser.password );
    return true;

    /*
    return this.http.post( this.apiURL + "/auth/sign-up", 
                            { "name" : newUser.name, "surname": newUser.surname, "email" : newUser.email, "password": newUser.password }, 
                            { "headers": this.headers } );*/
    
    //EMPTY_RESPONSE => https://ncu.libanswers.com/faq/221768
}
}

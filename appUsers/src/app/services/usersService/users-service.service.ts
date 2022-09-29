import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL: string = "http://51.38.51.187:5050/api/v1";
  headers = new HttpHeaders( { "Content-type" : "application/json" } );

  constructor(private http:HttpClient) { }

  public login( newUser: any): any{
      console.log("Aqui creariamos el usuario: " + newUser.email + " " + newUser.password )
      return true;
      /*
      return this.http.post( this.apiURL + "/auth/log-in", 
                            newUser, 
                            { "headers": this.headers } );*/
  }

  public signup( name: string, surname: string, email: string, password: string){
    return this.http.post( this.apiURL + "/auth/sign-up", 
                            { "name" : name, "surname": surname, "email" : email, "password": password }, 
                            { "headers": this.headers } );
    
    //EMPTY_RESPONSE => https://ncu.libanswers.com/faq/221768
}
}

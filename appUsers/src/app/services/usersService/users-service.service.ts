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

  public signup( newUser: any ):  Observable<any>{
    console.log("Aqui creariamos el usuario: " + newUser.name + " " + newUser.surname + " " + newUser.email + " " + newUser.password );

    return this.http.post( this.apiURL + "/auth/sign-up", 
                            { "name": newUser.name, "surname": newUser.surname, "email": newUser.email, "password": newUser.password }, 
                            { "headers": this.headers } );
    
    //EMPTY_RESPONSE => https://ncu.libanswers.com/faq/221768
  } 

  public updateUser( idUser: string, emailUser: string, newUser: any ):  Observable<any>{

    console.log("Modificamos el usuario: " + this.apiURL + "/users/" + idUser);
    return this.http.put( this.apiURL + "/users/" + idUser, 
                            { "email": emailUser, "password": newUser.password, "name": newUser.name, "surname": newUser.surname, "id": idUser }, 
                            { "headers": this.headers } );
    
    //EMPTY_RESPONSE => https://ncu.libanswers.com/faq/221768
  } 

  public deleteUser( idUser: string ):  Observable<any>{

    console.log("Modificamos el usuario: " + this.apiURL + "/users/" + idUser);
    return this.http.delete( this.apiURL + "/users/" + idUser, 
                            { "headers": this.headers } );
    
    //EMPTY_RESPONSE => https://ncu.libanswers.com/faq/221768
  } 

  public setToken(accessToken: string){
    this.headers = new HttpHeaders( {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
    } );
  }

  public getInfo():  Observable<any>{
    console.log("Obtenemos informacion de mi usuario");

    console.log( this.headers);

    return this.http.get( this.apiURL + "/users/me", 
                            { "headers": this.headers } );
    
  } 

  public getUsers():  Observable<any>{
    console.log("Obtenemos informacion de todos los usuarios");

    console.log( this.headers);

    return this.http.get( this.apiURL + "/users", 
                            { "headers": this.headers } );
    
  } 
}

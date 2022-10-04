import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/usersService/users-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailErrors: boolean = false;
  passwordErrors: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('.*@.+[\.].+') ] ),
    password: new FormControl('', [Validators.required])
  });

  constructor(private usersService : UsersService, private router: Router) {}

  ngOnInit(): void {
      
  }

  public get email(){
    return this.loginForm.get('email');
  }

  public get password(){
    return this.loginForm.get('password');
  }

  login(){
  
    if( this.loginForm.valid ){
      this.usersService.login(this.loginForm.value).subscribe( (data: any) => {
        console.log(data);
        this.usersService.setToken(data.accessToken);
        sessionStorage.setItem('logged', 'true');
        sessionStorage.setItem('token', data.accessToken);
        sessionStorage.setItem('refreshToken', data.refreshToken);
        this.router.navigate(['home']);
      },
      (error: HttpErrorResponse) => {
          switch (error.status) {

            case 404:
              alert("User email not found or password invalid")
              break;

            case 601:
              alert("User is not validated")
              break;

            default:
              alert("Unknown error")
              break;
          }

          this.loginForm.reset();
      }), (error: any) => {
        console.log(error);
      }
    }
    else{
      this.loginForm.reset();
      this.emailErrors = true; 
      this.passwordErrors=true; 
    }
    
  }

}

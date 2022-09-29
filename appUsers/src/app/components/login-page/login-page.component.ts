import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailErrors: boolean = false;
  passwordErrors: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('.*@.+') ] ),
    password: new FormControl('', [Validators.required])
  });

  constructor(private usersService : UsersService) {}

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
      console.log("Logeamos: " + this.loginForm.get('email')?.value + " " + this.loginForm.get('password')?.value )
      this.usersService.login(this.loginForm.value).then( () => {
        alert("Alumno creado");
        this.loginForm.reset();
      }), (error: any) => {
        console.log(error)
      }
    }
    
  }

}

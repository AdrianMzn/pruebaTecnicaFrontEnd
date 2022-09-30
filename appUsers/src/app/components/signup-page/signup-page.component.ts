import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  emailErrors: boolean = false;
  passwordErrors: boolean = false;
  nameErrors: boolean = false;
  surnameErrors: boolean = false;

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('.*@.+[\.].+') ] ),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required])
  });

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
  }

  public get email(){
    return this.signupForm.get('email');
  }

  public get password(){
    return this.signupForm.get('password');
  }

  public get name(){
    return this.signupForm.get('name');
  }

  public get surname(){
    return this.signupForm.get('surname');
  }


  signup(){

    if( this.signupForm.valid ){

      console.log("Registramos: " + this.signupForm.get('email')?.value + " " + this.signupForm.get('password')?.value )
      this.usersService.signup(this.signupForm.value).subscribe( (data: any) => {
        alert("Usuario registrado");
        console.log(data)
        this.signupForm.reset();
      }), (error: any) => {
        console.log(error)
      }

    }
    else{
      this.signupForm.reset();
      this.emailErrors = true; 
      this.passwordErrors=true; 
      this.nameErrors=true; 
      this.surnameErrors=true;
    }

  }

}

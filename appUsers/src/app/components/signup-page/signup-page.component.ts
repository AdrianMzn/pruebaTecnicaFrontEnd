import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';
import { CustomValidators } from 'src/app/validators/customValidators';

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
  passwordConfirmErrors: boolean = false;

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('.*@.+[\.].+') ] ),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required])
  }, [CustomValidators.MatchValidator('password', 'passwordConfirm')]);

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  public get email(){
    return this.signupForm.get('email');
  }

  public get password(){
    return this.signupForm.get('password');
  }

  public get passwordConfirm(){
    return this.signupForm.get('passwordConfirm');
  }

  public get name(){
    return this.signupForm.get('name');
  }

  public get surname(){
    return this.signupForm.get('surname');
  }

  get passwordMatchError() {
    return (
      this.signupForm.getError('mismatch')
    );
  }


  signup(){

    if( this.signupForm.valid ){

      console.log("Registramos: " + this.signupForm.get('email')?.value + " " + this.signupForm.get('password')?.value )
      this.usersService.signup(this.signupForm.value).subscribe( (data: any) => {
        alert("Usuario registrado");
        console.log(data)
        this.router.navigate(['login']);
      },
      (error: HttpErrorResponse) => {
          switch (error.status) {
            case 204:
              this.signupForm.reset();
              alert("Data is not being sent/transmitted correctly, please check your internet connection.")
              break;

            case 409:
              this.signupForm.get('email')?.reset();
              this.signupForm.get('password')?.reset();
              this.signupForm.get('passwordConfirm')?.reset();
              alert("Email already exists")
              break;

            default:
              break;
          }

          
      }), (error: any) => {
        console.log(error)
      }

    }
    else{
      this.emailErrors = true; 
      this.passwordErrors=true; 
      this.nameErrors=true; 
      this.surnameErrors=true;
      this.passwordConfirmErrors=true;
    }

  }

}

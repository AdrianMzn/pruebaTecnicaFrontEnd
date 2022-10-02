import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';
import { CustomValidators } from 'src/app/validators/customValidators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userInfo: any = [];

  updateForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('.*@.+[\.].+') ] ),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    id: new FormControl('')
  }, [CustomValidators.MatchValidator('password', 'passwordConfirm')]);


  emailErrors: boolean = false;
  passwordErrors: boolean = false;
  nameErrors: boolean = false;
  surnameErrors: boolean = false;
  passwordConfirmErrors: boolean = false;

  constructor(private usersService : UsersService, private router: Router) { }


  ngOnInit(): void {

    if (sessionStorage.getItem('logged') == 'true'){
      console.log("Token: " + sessionStorage.getItem('token'));
      console.log("refreshToken: " + sessionStorage.getItem('refreshToken'));
      this.usersService.getInfo().subscribe( (data: any) => {
        console.log(data);
        sessionStorage.setItem('name', data.name);
        this.userInfo = data;
      }), (error: any) => {
        console.log(error);
      }

    }
    else{
      alert('Necesitas iniciar sesion para acceder a esta pagina');
      this.router.navigate(['login']);
      
    }

  }

  public get email(){
    return this.updateForm.get('email');
  }

  public get password(){
    return this.updateForm.get('password');
  }

  public get passwordConfirm(){
    return this.updateForm.get('passwordConfirm');
  }

  public get name(){
    return this.updateForm.get('name');
  }

  public get surname(){
    return this.updateForm.get('surname');
  }

  public get id(){
    return this.updateForm.get('id');
  }

  get passwordMatchError() {
    return (
      this.updateForm.getError('mismatch')
    );
  }

  update(){
    if( this.updateForm.valid ){

      this.usersService.updateUser(this.userInfo.id, this.updateForm.value).subscribe( (data: any) => {
        alert("Usuario actual modificado, se cerrará esta sesion.");
        
        sessionStorage.setItem('logged','false');
        this.router.navigate(['login']);
      },
      (error: HttpErrorResponse) => {
          switch (error.status) {
            case 404:
              this.updateForm.reset();
              alert("User not found.")
              break;

            default:
              alert("Unknown error")
              break;
          }

          
      }), (error: any) => {
        console.log(error)
      }

    }
    else{
      console.log("No es valido");
      this.emailErrors = true; 
      this.passwordErrors=true; 
      this.nameErrors=true; 
      this.surnameErrors=true;
      this.passwordConfirmErrors=true;
    }

  }
}

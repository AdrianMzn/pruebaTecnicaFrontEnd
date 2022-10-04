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
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required])
  }, [CustomValidators.MatchValidator('password', 'passwordConfirm')]);

  passwordErrors: boolean = false;
  nameErrors: boolean = false;
  surnameErrors: boolean = false;
  passwordConfirmErrors: boolean = false;

  constructor(private usersService : UsersService, private router: Router) { }


  ngOnInit(): void {

    if (sessionStorage.getItem('logged') == 'true'){
      this.usersService.getInfo().subscribe( (data: any) => {
        console.log(data);
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('email',data.email);
        this.userInfo = data;
      }), (error: any) => {
        console.log(error);
      }

    }
    else{
      alert('You need to login to access this page.');
      this.router.navigate(['login']);
      
    }

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

  get passwordMatchError() {
    return (
      this.updateForm.getError('mismatch')
    );
  }

  update(){
    if( this.updateForm.valid ){

      this.usersService.updateUser(this.userInfo.id, this.userInfo.email, this.updateForm.value).subscribe( (data: any) => {
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
      this.passwordErrors=true; 
      this.nameErrors=true; 
      this.surnameErrors=true;
      this.passwordConfirmErrors=true;
    }

  }
}

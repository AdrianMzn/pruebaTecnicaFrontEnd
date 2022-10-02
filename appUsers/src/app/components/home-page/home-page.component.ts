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
    id: new FormControl('boolean', [Validators.required])
  }, [CustomValidators.MatchValidator('password', 'passwordConfirm')]);


  emailErrors: boolean = false;
  passwordErrors: boolean = false;
  nameErrors: boolean = false;
  surnameErrors: boolean = false;
  passwordConfirmErrors: boolean = false;

  constructor(private usersService : UsersService, private router: Router) { }


  ngOnInit(): void {

    if (localStorage.getItem('logged') == 'true'){
      console.log("Token: " + localStorage.getItem('token'));
      console.log("refreshToken: " + localStorage.getItem('refreshToken'));
      this.usersService.getInfo().subscribe( (data: any) => {
        console.log(data);
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

  get passwordMatchError() {
    return (
      this.updateForm.getError('mismatch')
    );
  }

  update(){

  }

}

import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/customValidators';
import { UsersService } from 'src/app/services/usersService/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ngbd-modal-update',
  templateUrl: './modal-update.html'
})
export class NgbdModalUpdate {
    
  closeResult = '';

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

  @Input() userToUpdate: any;

  constructor(private modalService: NgbModal, private usersService : UsersService) {}

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  update(){
    if( this.updateForm.valid ){

        this.usersService.updateUser(this.userToUpdate['id'], this.userToUpdate['email'], this.updateForm.value).subscribe( (data: any) => {
          alert("El usuario " + this.userToUpdate['id'] + " va ha ser modificado.");
          
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
        this.passwordErrors=true; 
        this.nameErrors=true; 
        this.surnameErrors=true;
        this.passwordConfirmErrors=true;
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
}

import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/usersService/users-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngbd-modal-delete',
  templateUrl: './modal-delete.html'
})
export class NgbdModalDelete {
    
  closeResult = '';

  @Input() userToUpdate: string;
  @Input() userName: string;
  

  constructor(private modalService: NgbModal, private usersService : UsersService, private router: Router) {}

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

  delete(){
    this.usersService.deleteUser(this.userToUpdate).subscribe( (data: any) => {

      if( this.userToUpdate == sessionStorage.getItem('id') ){
        alert("Actual user has been deleted, the session will be closed.");
        sessionStorage.setItem('logged','false');
        this.router.navigate(['login']);
      }
      else{
        alert("The user has been deleted.");
        window.location.reload();
      }
      
    },
    (error: HttpErrorResponse) => {
        switch (error.status) {

          case 404:
            alert("User not found")
            break;

          default:
            alert("Unknown error")
            break;
        }
    }), (error: any) => {
      console.log(error);
    }
  }
}

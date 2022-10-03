import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalDelete } from './modal-delete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [NgbdModalDelete],
  exports: [NgbdModalDelete],
  bootstrap: [NgbdModalDelete]
})
export class NgbdModalDeleteModule {}

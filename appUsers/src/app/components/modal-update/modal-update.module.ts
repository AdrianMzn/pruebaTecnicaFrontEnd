import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalUpdate } from './modal-update';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, NgbModule, FormsModule, ReactiveFormsModule],
  declarations: [NgbdModalUpdate],
  exports: [NgbdModalUpdate],
  bootstrap: [NgbdModalUpdate]
})
export class NgbdModalUpdateModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { UsersService } from './services/usersService/users-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterCComponent } from './components/footer-c/footer-c.component';

const misRutas: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'}, 
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'home', component:HomePageComponent},
  {path:'logout', component:LogoutPageComponent},
  {path:'users', component:UsersPageComponent},
  {path: '**', component: ErrorPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoutPageComponent,
    UsersPageComponent,
    SignupPageComponent,
    HomePageComponent,
    ErrorPageComponent,
    NavbarComponent,
    FooterCComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(misRutas),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

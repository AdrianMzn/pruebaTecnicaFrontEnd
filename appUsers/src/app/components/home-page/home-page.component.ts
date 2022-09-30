import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/usersService/users-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private usersService : UsersService, private router: Router) { }

  ngOnInit(): void {

    this.usersService.getUsers().subscribe( (data: any) => {
      console.log(data);
    }), (error: any) => {
      console.log(error);
    }
  }

}

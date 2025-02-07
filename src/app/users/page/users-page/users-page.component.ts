import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../interface/user-interface';
import { GetUsersService } from '../../usersServices/get-users.service';

@Component({
  selector: 'users-page',
  standalone: false,

  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent implements OnInit{

  users: UserInterface [] = []

  constructor (
    private userServ: GetUsersService
  ){}

  ngOnInit(): void {
    this.userServ.getUsers().subscribe(data => {
      console.log("Usuarios recibidos:", data)
      this.users = data.map(u => ({
        ID: u.ID,
        Name: u.Name,
        phone_number: u.phone_number
      }));
    });
  }

}

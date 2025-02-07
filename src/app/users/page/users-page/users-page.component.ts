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

  ngOnInit():void{
    this.userServ.getUsers().subscribe(data => {
      this.users = data.map(u => ({
        Id:u.Id,
        Name:u.Name,
        PhoneNumber:u.PhoneNumber
      }))
    })

  }
}

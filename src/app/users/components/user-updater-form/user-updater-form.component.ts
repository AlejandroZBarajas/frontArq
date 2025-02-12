import { Component, Input } from '@angular/core';
import { UserInterface } from '../../interface/user-interface';
import { EditUsersService } from '../../usersServices/edit-users.service';

@Component({
  selector: 'user-updater-form',
  standalone: false,
  templateUrl: './user-updater-form.component.html',
  styleUrl: './user-updater-form.component.css'
})
export class UserUpdaterFormComponent {
  @Input() user:UserInterface = {ID:"", Name:"", Phone:""}

  constructor(private editUserServ: EditUsersService){}

  onSubmit(){
    if(!this.user){
      console.error("No hay usuario a editar")
      return
    }

    this.editUserServ.updateUser(this.user).subscribe(
      updatedUser => {
        console.log("usuario actualizado", updatedUser)
        alert("usuario actualizado")
      },
      error => {
        console.log("error: ", error)
      }
    )
  }

  resentUser(){
    this.user = {ID:"", Name:"", Phone:""}
  }
}

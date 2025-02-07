import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostUsersService } from '../../usersServices/post-users.service';
import { UserInterface } from '../../interface/user-interface';


@Component({
  selector: 'users-form',
  standalone: false,
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private postUserService: PostUsersService) {
    this.userForm = this.fb.group({

      Name: ['', Validators.required],
      phone_number: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: UserInterface = {
        Name: this.userForm.value.Name,
        phone_number: this.userForm.value.phone_number
      };
      console.log(user)
      this.postUserService.createUser(user).subscribe(response => {
        console.log('usuario creado:', response);
        this.userForm.reset();
      });
    }
   // window.location.reload()
  }

}

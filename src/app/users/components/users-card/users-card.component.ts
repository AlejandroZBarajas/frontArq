import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeleteUsersService } from '../../usersServices/delete-users.service';

@Component({
  selector: 'users-card',
  standalone: false,
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css'
})
export class UsersCardComponent {
  isDeleted = false;

  constructor (private deleteServ: DeleteUsersService){}

  @Input() Id?: number;
  @Input() name!: string;
  @Input() phoneNumber!: number;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit();
  }

  onDelete(){
    console.log("Entra en onDelete");
    console.log("ID recibido:", this.Id);
    if (this.Id === undefined) {
      console.error("No se puede eliminar: ID no definido.");
      return;
    }
    this.deleteServ.deleteUser(this.Id).subscribe(() => {
      console.log(`User con ID ${this.Id} eliminado correctamente.`);
    }, error => {
      console.error("Error al eliminar el user", error);
    });
    window.location.reload()
  }
}

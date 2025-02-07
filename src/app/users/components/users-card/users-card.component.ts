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

  @Input() ID?: number;
  @Input() Name!: string;
  @Input() Phone!: string;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit();
  }

  onDelete(){
    console.log("Entra en onDelete");
    console.log("ID recibido:", this.ID);
    if (this.ID === undefined) {
      console.error("No se puede eliminar: ID no definido.");
      return;
    }
    this.deleteServ.deleteUser(this.ID).subscribe(() => {
      console.log(`User con ID ${this.ID} eliminado correctamente.`);
    }, error => {
      console.error("Error al eliminar el user", error);
    });
    window.location.reload()
  }
}

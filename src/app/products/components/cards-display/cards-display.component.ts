import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DeleteProductsService } from '../../productsServices/delete-products.service';

@Component({
  selector: 'cards-display',
  standalone: false,
  templateUrl: './cards-display.component.html',
  styleUrls: ['./cards-display.component.css']
})
export class CardsDisplayComponent {

  isDeleted = false;

  constructor (private deleteService: DeleteProductsService){}

  @Input() Id?: number;
  @Input() name!: string;
  @Input() price!: number;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    console.log("Entra en onDelete");
    console.log("ID recibido:", this.Id);
    if (this.Id === undefined) {
      console.error("No se puede eliminar: ID no definido.");
      return;
    }

    this.deleteService.deleteProduct(this.Id).subscribe(() => {
      console.log(`Producto con ID ${this.Id} eliminado correctamente.`);
    }, error => {
      console.error("Error al eliminar el producto", error);
    });
    window.location.reload()
  }

}


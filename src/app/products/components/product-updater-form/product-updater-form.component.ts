import { Component, Input } from '@angular/core';
import { EditProductsService } from '../../productsServices/edit-products.service';
import { ProductInterface } from '../../interface/product-interface';

@Component({
  selector: 'product-updater-form',
  standalone: false,
  templateUrl: './product-updater-form.component.html',
  styleUrls: ['./product-updater-form.component.css']
})
export class ProductUpdaterFormComponent {
  @Input() product: ProductInterface  = { Id: 0, Name: '', Price: 0 };

  constructor(private editService: EditProductsService) {}

  onSubmit() {
    if (!this.product) {
      console.error('No hay producto para actualizar');
      return;
    }

    this.editService.editProduct(this.product).subscribe(
      updatedProduct => {
        console.log('Producto actualizado:', updatedProduct);
        alert('Producto actualizado correctamente');
      },
      error => {
        console.error('Error al actualizar el producto', error);
      }
    );
  }

  resetProduct(){
    this.product= { Id:0, Name:"", Price:0}
  }
}

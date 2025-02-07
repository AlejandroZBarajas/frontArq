import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostProductsService } from '../../productsServices/post-products.service';
import { ProductInterface } from '../../interface/product-interface';



@Component({
  selector: 'product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})



export class ProductFormComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private postProductsService: PostProductsService) {
    this.productForm = this.fb.group({

      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: ProductInterface = this.productForm.value;
      this.postProductsService.postProduct(product).subscribe(response => {
        console.log('Producto creado:', response);
        this.productForm.reset();
      });
    }
    window.location.reload()
  }
}

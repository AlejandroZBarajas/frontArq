import { Component , OnInit} from '@angular/core';
import { ProductInterface } from '../../interface/product-interface';
import { GetProductsService } from '../../productsServices/get-products.service';

@Component({
  selector: 'products-page',
  standalone: false,

  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{

  products: ProductInterface [] = []

  constructor (
    private prodService: GetProductsService,
  ){}

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(data => {
      this.products=data.map(p => ({
        Id:p.Id,
        Name:p.Name,
        Price:p.Price
      }))
    })
  }
}

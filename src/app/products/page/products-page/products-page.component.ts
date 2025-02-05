import { Component , OnInit} from '@angular/core';
import { ProductInterface } from '../../interface/product-interface';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'products-page',
  standalone: false,

  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit{

  products: ProductInterface [] = []

  constructor (private prodService: ProductsService){}

  ngOnInit(): void {
    this.prodService.getProducts().subscribe(data => {
      this.products=data
    })
  }

}

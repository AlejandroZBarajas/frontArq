import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';


@Injectable({
  providedIn: 'root'
})
export class EditProductsService {
  private apiUrl = 'http://localhost:8080/products/update';

  constructor(private http: HttpClient) {}

  editProduct(product: ProductInterface): Observable<ProductInterface> {
    return this.http.put<ProductInterface>(this.apiUrl, product);
  }
}

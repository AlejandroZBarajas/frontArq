import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductsService {
  private apiUrl = 'http://localhost:8080/products/delete';

  constructor(private http: HttpClient) {}

  deleteProduct(productId: number): Observable<void> {
    return this.http.request<void>('DELETE', this.apiUrl, {
      body: { id: productId }
    });
  }
}

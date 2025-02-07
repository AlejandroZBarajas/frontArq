import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class PostProductsService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  postProduct(product: ProductInterface): Observable<ProductInterface> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<ProductInterface>(this.apiUrl, product, {headers});

  }
}

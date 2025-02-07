import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  private apiUrl = 'http://localhost:8080/products/all';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.apiUrl);
  }
}

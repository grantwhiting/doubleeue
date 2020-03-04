import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../types/product.type';
import { productsApi } from '../apis';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(productsApi);
  }

  getProductByProductId(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${productsApi}/${productId}`);
  }
}

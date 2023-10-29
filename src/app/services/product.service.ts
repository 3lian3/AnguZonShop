import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: Product[] = [];
  private api: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api)
  }

  addProduct(product: Product): void {
    this.product.push(product);
  }

  deleteProduct(product: Product): void {
    this.product = this.product.filter(p => p.id !== product.id);
  }

  updateProduct(product: Product): void {
    this.product = this.product.map(p => {
      if (p.id === product.id) {
        p = product;
      }
      return p;
    });
  }
}

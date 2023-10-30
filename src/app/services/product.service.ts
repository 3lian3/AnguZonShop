import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultRequest } from '../models/result-request';


 @Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product: Product[] = [];
  // private apiUrl: string = environment.serverUrl.products;
  // private api: string = "assets/api/products.json";
  private productsApi: string = 'http://localhost:4200/assets/api/products.json';



  constructor(private http: HttpClient) {
    console.log("Type de 'environment':", typeof environment);
    console.log("Valeur de 'environment':", environment);
   }

  getProducts(): Observable<ResultRequest<Product>> {
    return this.http.get<ResultRequest<Product>>(this.productsApi)
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

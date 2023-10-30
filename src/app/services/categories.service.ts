
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesApi: string = 'http://localhost:4200/assets/api/categories.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.categoriesApi)
  }
}

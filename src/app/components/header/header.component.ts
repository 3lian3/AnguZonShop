import { CategoriesService } from 'src/app/services/categories.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { auth_items, nav_items } from 'src/app/api/nav';
import { Category } from 'src/app/models/category';
import { Item } from 'src/app/models/item';
import { ResultRequest } from 'src/app/models/result-request';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy{

  navs_data: Item[] = nav_items
  auths_data: Item[] = auth_items;
  categories: ResultRequest<Category> | undefined;
  categoriesSub: Subscription | undefined;
  productSub: Subscription | undefined;
  products: Product[] | undefined;


  constructor(private CategoriesService: CategoriesService) { }

  handleClick(event: any, category: Category) {
    event.preventDefault();
    console.log(category)
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    if (this.categoriesSub) {
  
    }
  }
}

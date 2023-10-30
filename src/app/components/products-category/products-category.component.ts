import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent implements OnDestroy {

  filteredProducts: Product[] | undefined;
  resultData: ResultRequest<Product> | undefined;
  categories: ResultRequest<Category> | undefined;
  categoriesSub: Subscription | undefined;
  productSub: Subscription | undefined;
  products: Product[] = [];
  currentCategory: Category | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.getCategories()
      .subscribe({
        next: (value: ResultRequest<Category>) => {
          if (value.isSuccess) {
            this.categories = value
            this.handleClick(null, this.categories.results[0]);
          }
      },
    });
  }

  handleClick(event: any, category: Category) {
    this.currentCategory = category;
    if (event) {
      event.preventDefault();
    }
    console.log(category);

    this.productSub = this.productService.getProducts()
      .subscribe({
        next: (resultData: ResultRequest<Product>) => {
          console.log('tous les produits:', resultData);
          if (resultData.isSuccess) {
          this.resultData = resultData;
          let products = resultData.results;
          products = products.filter((product: Product) => {
            for (let i = 0; i < product.categories.length; i++) {
              if (product.categories[i].slug === category.slug) {
                return true;
              }
            }
            return false;
          });
          this.filteredProducts = products;
          console.log(products);

        }
      },
    });
  }

  ngOnDestroy(): void {
    if (this.categoriesSub) {
      this.categoriesSub?.unsubscribe();
      this.productSub?.unsubscribe();
    }
  }
}

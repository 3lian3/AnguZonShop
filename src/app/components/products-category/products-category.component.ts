import { Component, OnDestroy, Input } from '@angular/core';
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
  isLoading: boolean = true;
  displayModal: boolean = false;
  modalProduct: Product | undefined;

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
    this.isLoading = true
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
          this.isLoading = false;


        }
      },
    });
  }


  handleDisplayModalProduct(product: Product) {
    if(product) {
      console.log(product);
      this.displayModal = true;
      this.modalProduct = product;
    }
  }

  handleCloseModal() {
    this.displayModal = false;
    this.modalProduct = undefined;
  }

  ngOnDestroy(): void {
    if (this.categoriesSub) {
      this.categoriesSub?.unsubscribe();
      this.productSub?.unsubscribe();
    }
  }
}

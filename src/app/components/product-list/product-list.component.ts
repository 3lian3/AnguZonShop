import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements  OnInit, OnDestroy {

  resultData: ResultRequest<Product> | undefined;
  @Input() products: Product[] = [];
  displayModal: boolean = false;
  modalProduct: Product | undefined;
  productsSub: Subscription | undefined;
  @Input() isLoading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts()
      .subscribe({
        next: (resultData: ResultRequest<Product>) => {
          console.log('service produits =>', resultData);

          if (resultData.isSuccess) {
            this.products = resultData.results
          }
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log("Error: ", error);
          this.isLoading = true;
        },
        complete: () => {
          console.log("Subscription completed");
        }
      });

    }

  ngOnDestroy() {
      this.productsSub?.unsubscribe();
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


}


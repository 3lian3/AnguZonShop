import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements  OnInit, OnDestroy {

  products: Product[] = []
  displayModal: boolean = false;
  modalProduct: Product | undefined;
  productsSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productsSub = this.productService.getProducts()
      .subscribe({
        next: (products: Product[]) => {
          this.products = products;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log("Error: ", error);
          this.isLoading = true;
        },
        complete: () => {
          console.log("Subscription completed");
         }
    })

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


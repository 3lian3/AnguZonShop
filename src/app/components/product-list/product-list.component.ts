import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { CartService } from 'src/app/services/cart.service';


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
  @Input() isLoading: boolean = true;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }


  ngOnInit(): void {
  }

  ngOnDestroy() {
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


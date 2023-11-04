import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ResultRequest } from 'src/app/models/result-request';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnDestroy{

  productsSub: Subscription | undefined;
  products: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productsSub = this.productService.getProducts()
      .subscribe({
        next: (resultData: ResultRequest<Product>) => {

          if (resultData.isSuccess) {
            this.products = resultData.results
            this.isLoading = false;
          }
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

  ngOnDestroy(): void {
     this.productsSub?.unsubscribe();
    }
}

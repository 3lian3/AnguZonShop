import { Subscription } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ResultRequest } from 'src/app/models/result-request';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy{

  slug: string | undefined;
  currentImage: string | undefined;
  product: Product | undefined;
  resultData: ResultRequest<Product> | undefined;
  productSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService

  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.slug = this.route.snapshot.params['slug']
    this.productSub = this.productService.getProducts()
      .subscribe({
        next: (resultData: ResultRequest<Product>) => {
          if (resultData.isSuccess) {
            this.product = resultData.results.filter(p => p.slug === this.slug)[0]
            this.currentImage = this.product?.imageUrl[0];
          }
          this.isLoading = false;
      },
        error: (error: any) => {
          console.log("Error: ", error);
          this.isLoading = true;
        }
      });
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }

  handleChangeImage(url: string): void {
    this.currentImage = url;
  }
}

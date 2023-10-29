import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-composition',
  templateUrl: './product-composition.component.html',
  styleUrls: ['./product-composition.component.css']
})
export class ProductCompositionComponent {
  product: Product | undefined;

  ngOnInit() {
    console.log('ProductCompisitionComponent');
    console.log(this.product);

  }
}

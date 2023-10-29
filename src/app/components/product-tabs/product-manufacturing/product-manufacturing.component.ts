import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-manufacturing',
  templateUrl: './product-manufacturing.component.html',
  styleUrls: ['./product-manufacturing.component.css']
})
export class ProductManufacturingComponent {

  product: Product | undefined;

  ngOnInit() {
    console.log('ProductManufacturingComponent');
    console.log(this.product);

  }
}

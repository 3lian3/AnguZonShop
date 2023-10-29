import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-descriptions',
  templateUrl: './product-descriptions.component.html',
  styleUrls: ['./product-descriptions.component.css']
})
export class ProductDescriptionComponent {

  product: Product | undefined;

  ngOnInit() {
    console.log('ProductDescriptionComponent');
    console.log(this.product);

  }
}

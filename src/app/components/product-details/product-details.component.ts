import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

    @Input() product: Product | undefined;

  handleChangeDetails(component: any) {
    component.product = this.product;
   }
}

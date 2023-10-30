import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | undefined;
  @Output() displayModalProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    console.log('Produit reçu :', this.product);
  }

  handleClickProduct(product: Product | undefined) {
    this.displayModalProduct.emit(product);
  }


}

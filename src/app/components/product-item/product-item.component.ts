import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product: Product | undefined;
  @Output() displayModalProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log('Produit reçu :', this.product);
  }

  handleClickProduct(product: Product | undefined) {
    this.displayModalProduct.emit(product);
  }

  addToCart(event: any): void {
    event.stopPropagation();
    if (this.product) {
        this.cartService.addProduct(this.product);
    } else {
        console.error('Product is undefined');
    }
}

}

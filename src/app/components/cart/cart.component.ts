import { Article } from './../../models/article';
import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart?: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.cartService.cart$?.subscribe({
      next: (cart: Cart) => {
        this.cart = cart;
      }
    });
  }

  handleSetQuantity(event: any, product?: Product, quantity?: number) {
    if (quantity) {
      if (quantity == -1) {
        this.cartService.removeProduct(product!)
      } else if (quantity == 1) {
        this.cartService.addProduct(product!)
      }
    } else {
      const { value } = event.target;
      const newValue = parseInt(value);
      if (!isNaN(newValue) && product) {
        this.cartService.setProductQuantity(product, newValue);
        console.log(newValue);
      } else {
        event.target.value = 1;
        if(product)
        this.cartService.setProductQuantity(product, 1);
      }
    }
  }

  removeProduct(event: any, article: Article) {
    event.preventDefault();
    this.cartService.removeProduct(article.product!, article.quantity);


   }
}

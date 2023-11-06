import { Component } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

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
}

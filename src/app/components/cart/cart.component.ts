import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCartItems } from 'src/app/selectors/cart.selector';
import { removeFromCart } from 'src/app/actions/cart.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private store: Store) {
    this.store.pipe(select(selectCartItems)).subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }
  removeFromCart(product: any) {
    this.store.dispatch(removeFromCart({ itemId: product.idCategory }));
  }
}

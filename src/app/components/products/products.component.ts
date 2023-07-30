import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Store, select } from '@ngrx/store';
import { addToCart, removeFromCart } from 'src/app/actions/cart.action';
import { selectCartItems } from 'src/app/selectors/cart.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  cartItems: any[] = [];
  constructor(private productsService: ProductsService, private store: Store) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.store.pipe(select(selectCartItems)).subscribe((cartItems) => {
      this.cartItems = cartItems;
    });
  }

  public getAllProducts() {
    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res.categories;
      },
      error: (err) => console.log(err),
    });
  }

  addToCart(product: any) {
    this.store.dispatch(addToCart({ item: product }));
  }

  removeFromCart(product: any) {
    this.store.dispatch(removeFromCart({ itemId: product.idCategory }));
  }

  isInCart(product: any): boolean {
    return this.cartItems.some((item) => item.idCategory === product.idCategory);
  }
}

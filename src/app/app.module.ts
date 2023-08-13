import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './reducers/cart.reducer';
import { LoginModule } from './modules/login/login.module';

@NgModule({
  declarations: [AppComponent, ProductsComponent, CartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

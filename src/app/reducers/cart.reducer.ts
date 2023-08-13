import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from '../actions/cart.action';

export const initialState: any[] = [];

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { item }) => [...state, item]),
  on(removeFromCart, (state, { itemId }) => state.filter((item) => {
    return item.idCategory !== itemId
  }))
);

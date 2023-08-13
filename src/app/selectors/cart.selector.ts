// cart.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCartState = createFeatureSelector<any[]>('cart');

export const selectCartItems = createSelector(
  selectCartState,
  (cartState) => cartState
);

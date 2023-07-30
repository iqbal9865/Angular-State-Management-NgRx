import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ item: any }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ itemId: number }>()
);

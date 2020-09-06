import { createSelector } from 'reselect';
import { select, SelectEffect } from 'redux-saga/effects';
import { State } from '../index';
import { CartItem } from '../../models/CardItem';

export const getCartState = (state: State) => state.cart;

export const getItemsCart = createSelector([getCartState], (cart) => cart.items);

export const getItem = (itemId: string) =>
    createSelector([getItemsCart], (items: CartItem[]) => {
        return items.find((item) => item.productId === itemId) || null;
    });

export function selectState<T>(selector: (s: State) => T): SelectEffect {
    return select(selector);
}

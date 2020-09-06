import produce from 'immer';
import { CartItem } from '../../models/CardItem';
import { ActionCard } from './cart.actions';

export interface CardState {
    items: CartItem[];
    totalAmount: number;
}

const initialState: CardState = {
    items: [],
    totalAmount: 0
};

export const CartReducer = produce((state = initialState, action) => {
    switch (action.type) {
        case ActionCard.AddToCart: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
});

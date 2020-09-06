import { Product } from '../../models/Product';

export const ActionCard = {
    AddToCart: '[Cart] Add to cart'
};

export interface IAddToCart {
    type: string;
    product: Product;
}

export const addToCart = (product: Product): IAddToCart => {
    return {
        type: ActionCard.AddToCart,
        product
    };
};

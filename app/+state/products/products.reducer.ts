import produce from 'immer';
import { Product } from '../../models/Product';
import { mockProducts } from '../../data/data.mock';

export interface ProductState {
    availableProducts: Product[];
    userProducts: Product[];
}

const initialState: ProductState = {
    availableProducts: mockProducts,
    userProducts: mockProducts.filter((product) => product.ownerId === 'u1')
};

export const ProductReducer = produce((state = initialState, action) => {
    return state;
});

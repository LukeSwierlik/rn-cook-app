import { select, takeEvery, put } from 'redux-saga/effects';
import { ActionCard, IAddToCart } from './cart.actions';
import { getItem } from './cart.selectors';
import { CartItem } from '../../models/CardItem';

function* addToCart(action: IAddToCart): Generator {
    const { price, title, id } = action.product;

    const item: any = yield select(getItem(id));
    const productPrice = price;
    const productTitle = title;

    let updatedOrNewCartItem: CartItem;

    if (item) {
        updatedOrNewCartItem = {
            productId: id,
            productPrice,
            productTitle,
            quantity: item.quantity + 1,
            sum: item.sum + productPrice
        };
    } else {
        updatedOrNewCartItem = {
            productId: id,
            productPrice,
            productTitle,
            quantity: 1,
            sum: productPrice
        };
    }

    yield put({
        type: ActionCard.AddToCart,
        product: updatedOrNewCartItem
    });
}

export function* watchCart(): Generator {
    yield takeEvery(ActionCard.AddToCart, addToCart);
}

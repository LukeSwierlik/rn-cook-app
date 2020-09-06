import { all, fork } from 'redux-saga/effects';
import { watchCart } from './cart/cart.saga';

export function* rootSaga() {
    yield all([fork(watchCart)]);
}

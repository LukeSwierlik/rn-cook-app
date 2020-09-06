import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ProductReducer } from './products/products.reducer';
import { rootSaga } from './rootSaga';
import { CartReducer } from './cart/cart.reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    products: ProductReducer,
    cart: CartReducer
});

export type State = ReturnType<typeof rootReducer>;

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

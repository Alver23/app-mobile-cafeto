import { applyMiddleware, createStore } from 'redux';

import middlewares from './middleware';
import reducer from './reducers';

const enhancers = [
    applyMiddleware(...middlewares),
];

// create the store
export const configureStore = () => {
    return createStore(
        reducer,
        {},
        applyMiddleware(...middlewares),
    );
}

import { applyMiddleware, createStore } from 'redux';

import middlewares from './middleware';
import reducer from './reducers';

// create the store
export const configureStore = () => {
	return createStore(reducer, {}, applyMiddleware(...middlewares));
};

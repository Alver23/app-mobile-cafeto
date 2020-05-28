import { applyMiddleware, createStore } from 'redux';
import middlewares from './middleware';
import reducer from './reducers';

export const configureStore = () => {
	return createStore(reducer, {}, applyMiddleware(...middlewares));
};

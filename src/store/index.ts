import { applyMiddleware, createStore, compose } from 'redux';

import middlewares from './middleware';
import reducer from './reducers';

const enhancers = [
    applyMiddleware(...middlewares),
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
    reducer,
    {},
    enhancer
);

export default store;

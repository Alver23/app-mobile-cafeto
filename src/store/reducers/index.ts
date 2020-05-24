// Dependencies
import {combineReducers} from 'redux';

// Reducers
import { loginReducer, loginFeatureKey } from "./login";
import { authenticationTokenReducer, authenticationTokenFeatureKey } from './authentication-token';

export default combineReducers({
    [loginFeatureKey]: loginReducer,
    [authenticationTokenFeatureKey]: authenticationTokenReducer,
});

import {combineReducers} from 'redux';

import { loginReducer, loginFeatureKey } from './../../containers/login/reducers';

export default combineReducers({
    [loginFeatureKey]: loginReducer,
});

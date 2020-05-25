// Dependencies
import { combineReducers } from 'redux';

// Reducers
import { loginReducer, loginFeatureKey } from './login';
import {
  eventReducer,
  eventFeatureKey,
} from '../../containers/events/reducers';
import {
  authenticationTokenReducer,
  authenticationTokenFeatureKey,
} from './authentication-token';

export default combineReducers({
  [loginFeatureKey]: loginReducer,
  [eventFeatureKey]: eventReducer,
  [authenticationTokenFeatureKey]: authenticationTokenReducer,
});

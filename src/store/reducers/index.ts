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
import {
	eventFormFeatureKey,
	eventFormReducers,
} from '../../containers/event-form/reducers';
import {
	eventDetailFeatureKey,
	eventDetailReducer,
} from '../../containers/event-detail/reducers';

export default combineReducers({
	[loginFeatureKey]: loginReducer,
	[eventFeatureKey]: eventReducer,
	[authenticationTokenFeatureKey]: authenticationTokenReducer,
	[eventFormFeatureKey]: eventFormReducers,
	[eventDetailFeatureKey]: eventDetailReducer,
});

import { ApiResponseEvent } from '../event-interface';
import { EVENTS_ACTION_TYPES, EventActionTypes } from '../actions/interfaces';

export const eventFeatureKey = 'events';

export interface EventState {
	data: ApiResponseEvent[];
	error: string;
	loading: boolean;
	refreshing: boolean;
}

export const initialState: EventState = {
	data: null,
	error: null,
	loading: null,
	refreshing: null,
};

export const eventReducer = (state = initialState, action: EventActionTypes) => {
	switch (action.type) {
		case EVENTS_ACTION_TYPES.eventLoading:
			const { refreshing } = action.payload;
			return { ...state, loading: !refreshing && action.payload, refreshing: !!refreshing };
		case EVENTS_ACTION_TYPES.loadEventsSuccess:
			return { ...state, data: action.payload, loading: false, error: null, refreshing: false };
		case EVENTS_ACTION_TYPES.loadEventsFailure:
			return { ...state, error: action.payload, isRefreshing: false };
		default:
			return state;
	}
};

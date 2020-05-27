import {
	EVENT_DETAIL_ACTION_TYPES,
	EventDetailActionTypes,
} from '../actions/interface';

export const eventDetailFeatureKey = 'eventDetail';

export interface EventDetailState {
	loading: boolean;
	error: string;
	response: string;
}

const initialState: EventDetailState = {
	loading: null,
	error: null,
	response: null,
};

export const eventDetailReducer = (
	state = initialState,
	action: EventDetailActionTypes,
) => {
	switch (action.type) {
		case EVENT_DETAIL_ACTION_TYPES.loading:
			return { ...state, loading: action.payload };
		case EVENT_DETAIL_ACTION_TYPES.removeEventSuccess:
			return { ...state, response: action.payload };
		case EVENT_DETAIL_ACTION_TYPES.removeEventFailure:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

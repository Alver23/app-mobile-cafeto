import {
	EVENT_FORM_ACTION_TYPES,
	EventFormActionTypes,
} from '../actions/interface';

export const eventFormFeatureKey = 'eventForm';

export interface EventFormState {
	loading: boolean;
	error: string;
	response: string;
}

const initialState: EventFormState = {
	loading: null,
	error: null,
	response: null,
};

export const eventFormReducers = (
	state = initialState,
	action: EventFormActionTypes,
) => {
	switch (action.type) {
		case EVENT_FORM_ACTION_TYPES.loading:
			return { ...state, loading: action.payload };
		case EVENT_FORM_ACTION_TYPES.saveFormSuccess:
			return { ...state, response: action.payload };
		case EVENT_FORM_ACTION_TYPES.saveFormFailure:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

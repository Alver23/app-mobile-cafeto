// Dependencies
import { createSelector } from 'reselect';
import { eventFormFeatureKey, EventFormState } from '../reducers';

const selectEventForm = (state) => state[eventFormFeatureKey];

export const selectLoading = createSelector(
	selectEventForm,
	(state: EventFormState) => state.loading,
);

export const selectError = createSelector(
	selectEventForm,
	(state: EventFormState) => state.error,
);

export const selectResponse = createSelector(
	selectEventForm,
	(state: EventFormState) => state.response,
);

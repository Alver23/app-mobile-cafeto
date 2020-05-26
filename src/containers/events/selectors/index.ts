import { createSelector } from 'reselect';

import { eventFeatureKey, EventState } from '../reducers';

export const selectEventState = (state) => state[eventFeatureKey];

export const selectEvents = createSelector(
	selectEventState,
	(state: EventState) => state.data,
);

export const selectLoading = createSelector(
	selectEventState,
	(state: EventState) => state.loading,
);

export const selectEventById = createSelector(
	selectEvents,
	(_, props) => props.route.params.id,
	(events, value) => events.find((item) => item.id === value) || {},
);

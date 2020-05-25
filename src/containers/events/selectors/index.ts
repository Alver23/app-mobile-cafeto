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

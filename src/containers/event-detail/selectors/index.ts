import { createSelector } from 'reselect';
import { eventDetailFeatureKey, EventDetailState } from '../reducers';

const selectEventDetail = (state) => state[eventDetailFeatureKey];

export const selectLoading = createSelector(selectEventDetail, (state: EventDetailState) => state.loading);

export const selectError = createSelector(selectEventDetail, (state: EventDetailState) => state.error);

export const selectResponse = createSelector(selectEventDetail, (state: EventDetailState) => state.response);

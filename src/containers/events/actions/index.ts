import { eventService } from '../../../services';
import { EventActionTypes, EVENTS_ACTION_TYPES } from './interfaces';

export const eventLoading = (payload: any): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.eventLoading,
});

export const loadEventSuccess = (payload): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.loadEventsSuccess,
});

export const loadEventFailure = (payload: string): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.loadEventsFailure,
});

export const getEvents = (refreshing: boolean) => (dispatch) => {
	dispatch(eventLoading({ loading: true, refreshing }));
	eventService
		.getEvents()
		.then((response) => dispatch(loadEventSuccess(response)))
		.catch((error) => {
			dispatch(loadEventFailure(error));
			dispatch(eventLoading({ loading: false, isRefreshing: false }));
		});
};

import { eventService } from '../../../services';
import { authenticationService } from '../../../core';
import { clearToken } from '../../../store/actions/authentication-token';
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

export const getEvents = (refreshing: boolean = false) => (dispatch) => {
	dispatch(eventLoading({ loading: true, refreshing }));
	eventService
		.getEvents()
		.then((response) => dispatch(loadEventSuccess(response)))
		.catch(async ({ status, message }) => {
			if (status === 401) {
				await authenticationService.clearToken();
				dispatch(clearToken());
			}
			dispatch(loadEventFailure(message));
			dispatch(eventLoading({ loading: false, isRefreshing: false }));
		});
};

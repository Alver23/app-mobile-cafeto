// Services
import { eventService } from '../../../services/event-service';

// Models
import { EventActionTypes, EVENTS_ACTION_TYPES } from './interfaces';
import { ApiResponseEvent } from '../event-interface';

export const eventLoading = (payload: boolean = true): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.eventLoading,
});

export const loadEventSuccess = (
	payload: ApiResponseEvent[],
): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.loadEventsSuccess,
});

export const loadEventFailure = (payload: string): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.loadEventsFailure,
});

export const getEvents = () => (dispatch) => {
	dispatch(eventLoading());
	eventService
		.getEvents()
		.then((response) => {
			const { data } = response;
			dispatch(loadEventSuccess(data));
		})
		.catch((error) => {
			dispatch(loadEventFailure(error));
			dispatch(eventLoading(false));
		});
};

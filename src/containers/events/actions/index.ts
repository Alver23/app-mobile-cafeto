// Utils
import { internalAxiosInstance } from '../../../utils/axios-instance/axios-instance';

import { config } from '../../../config';
const {
	api: {
		basePath,
		events: { getUrl },
	},
} = config;

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

export const loadEventFailure = (payload: Error): EventActionTypes => ({
	payload,
	type: EVENTS_ACTION_TYPES.loadEventsFailure,
});

export const getEvents = () => (dispatch) => {
	dispatch(eventLoading());
	internalAxiosInstance
		.get(`${basePath}${getUrl}`)
		.then((response) => {
			const { data } = response;
			dispatch(loadEventSuccess(data));
		})
		.catch((error) => {
			dispatch(loadEventFailure(error));
			dispatch(eventLoading(false));
		});
};

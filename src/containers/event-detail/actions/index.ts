import { EVENT_DETAIL_ACTION_TYPES, EventDetailActionTypes } from './interface';
import { eventService } from '../../../services/event';

export const loading = (payload: boolean = true): EventDetailActionTypes => ({
	payload,
	type: EVENT_DETAIL_ACTION_TYPES.loading,
});

export const removeEventSuccess = (payload: string): EventDetailActionTypes => ({
	payload,
	type: EVENT_DETAIL_ACTION_TYPES.removeEventSuccess,
});

export const removeEventFailure = (payload: string): EventDetailActionTypes => ({
	payload,
	type: EVENT_DETAIL_ACTION_TYPES.removeEventFailure,
});

export const deleteEvent = (payload: number) => (dispatch) => {
	dispatch(loading());
	eventService
		.delete(payload)
		.then((_) => {
			dispatch(loading(false));
			dispatch(removeEventSuccess('The Record was deleted successfully'));
		})
		.catch((error) => {
			dispatch(removeEventFailure(error));
			dispatch(loading(false));
		});
};

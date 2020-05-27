import { EventFormActionTypes, EVENT_FORM_ACTION_TYPES } from './interface';
import { getEvents } from '../../events/actions';

// Services
import { eventService } from '../../../services/event-service';

export const loading = (payload: boolean = true): EventFormActionTypes => ({
	payload,
	type: EVENT_FORM_ACTION_TYPES.loading,
});

export const saveFormSuccess = (payload: any): EventFormActionTypes => ({
	payload,
	type: EVENT_FORM_ACTION_TYPES.saveFormSuccess,
});

export const saveFormFailure = (payload: string): EventFormActionTypes => ({
	payload,
	type: EVENT_FORM_ACTION_TYPES.saveFormFailure,
});

export const createOrUpdate = (payload: any, id: number | null) => (
	dispatch,
) => {
	dispatch(loading());
	eventService
		.createOrUpdate(payload, id)
		.then((response: any) => {
			const { message } = response;
			dispatch(saveFormSuccess(message));
			dispatch(loading(false));
		})
		.catch((error) => {
			dispatch(saveFormFailure(error));
			dispatch(loading(false));
		});
};

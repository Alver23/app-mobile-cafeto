import { EventFormActionTypes, EVENT_FORM_ACTION_TYPES } from './interface';
import { getEvents } from '../../events/actions';

// Services
import { configService } from '../../../config';
import { internalAxiosInstance } from '../../../core/axios-instance/axios-instance';

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

export const saveForm = (payload: any) => (dispatch) => {
	const {
		basePath,
		events: { post },
	} = configService.get('api');
	const url = `${basePath}${post}`;
	dispatch(loading());
	internalAxiosInstance
		.post(
			url,
			{ ...payload },
			{ headers: { 'Content-Type': 'multipart/form-data' } },
		)
		.then((response: any) => {
			const { message } = response;
			dispatch(saveFormSuccess(message));
			dispatch(loading(false));
			dispatch(getEvents());
		})
		.catch(
			({
				response: {
					data: { message },
				},
			}) => {
				dispatch(saveFormFailure(message));
				dispatch(loading(false));
			},
		);
};

export enum EVENT_FORM_ACTION_TYPES {
	loading = '[EVENT FORM] Loading',
	saveFormFailure = '[EVENT FORM] failure to save form',
	saveFormSuccess = '[EVENT FORM] saved form successfully',
}

export interface Loading {
	payload: boolean;
	type: EVENT_FORM_ACTION_TYPES.loading;
}

export interface SaveFormFailure {
	payload: string;
	type: EVENT_FORM_ACTION_TYPES.saveFormFailure;
}

export interface SaveFormSucess {
	payload: any;
	type: EVENT_FORM_ACTION_TYPES.saveFormSuccess;
}

export type EventFormActionTypes = Loading | SaveFormFailure | SaveFormSucess;

export enum EVENT_DETAIL_ACTION_TYPES {
	loading = '[EVENT DETAIL] loading',
	removeEventSuccess = '[EVENT DETAIL] Remove event success',
	removeEventFailure = '[EVENT DETAIL] Remove event failure',
}

export interface Loading {
	payload: boolean;
	type: EVENT_DETAIL_ACTION_TYPES.loading;
}

export interface RemoveEventSuccess {
	payload: string;
	type: EVENT_DETAIL_ACTION_TYPES.removeEventSuccess;
}

export interface RemoveEventFailure {
	payload: string;
	type: EVENT_DETAIL_ACTION_TYPES.removeEventFailure;
}

export type EventDetailActionTypes = Loading | RemoveEventFailure | RemoveEventSuccess;

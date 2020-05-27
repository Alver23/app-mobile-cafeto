import { ApiResponseEvent } from '../event-interface';

export enum EVENTS_ACTION_TYPES {
	eventLoading = '[EVENTS] Loading',
	loadEventsSuccess = '[EVENTS] Load events success',
	loadEventsFailure = '[EVENST] Load events failure',
}

export interface EventLoading {
	payload: boolean;
	type: EVENTS_ACTION_TYPES.eventLoading;
}

export interface LoadEventSuccess {
	payload: ApiResponseEvent[];
	type: EVENTS_ACTION_TYPES.loadEventsSuccess;
}

export interface LoadEventFailure {
	payload: string;
	type: EVENTS_ACTION_TYPES.loadEventsFailure;
}

export type EventActionTypes =
	| EventLoading
	| LoadEventSuccess
	| LoadEventFailure;

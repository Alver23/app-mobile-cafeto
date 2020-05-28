import { EventResponse } from '../../../services/event/interface';

export enum EVENTS_ACTION_TYPES {
	eventLoading = '[EVENTS] Loading',
	loadEventsSuccess = '[EVENTS] Load events success',
	loadEventsFailure = '[EVENST] Load events failure',
}

export interface EventLoading {
	payload: {
		loading: boolean;
		refreshing?: boolean;
	};
	type: EVENTS_ACTION_TYPES.eventLoading;
}

export interface LoadEventSuccess {
	payload: EventResponse[];
	type: EVENTS_ACTION_TYPES.loadEventsSuccess;
}

export interface LoadEventFailure {
	payload: string;
	type: EVENTS_ACTION_TYPES.loadEventsFailure;
}

export type EventActionTypes = EventLoading | LoadEventSuccess | LoadEventFailure;

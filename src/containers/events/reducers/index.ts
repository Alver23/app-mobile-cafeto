import { ApiResponseEvent } from '../event-interface';
import { EVENTS_ACTION_TYPES, EventActionTypes } from '../actions/interfaces';

export const eventFeatureKey = 'events';

export interface EventState {
  data: ApiResponseEvent[];
  error: Error;
  loading: boolean;
}

export const initialState: EventState = {
  data: null,
  error: null,
  loading: null,
};

export const eventReducer = (
  state = initialState,
  action: EventActionTypes,
) => {
  switch (action.type) {
    case EVENTS_ACTION_TYPES.eventLoading:
      return { ...state, loading: action.payload };
    case EVENTS_ACTION_TYPES.loadEventsSuccess:
      return { ...state, data: action.payload, loading: false, error: null };
    case EVENTS_ACTION_TYPES.loadEventsFailure:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

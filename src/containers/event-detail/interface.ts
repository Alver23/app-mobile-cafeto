import { ApiResponseEvent } from '../events/event-interface';

export interface Props {
	route: any;
	event: ApiResponseEvent;
	loading: boolean;
	error: string;
	response: string;
	resetActions: () => void;
}

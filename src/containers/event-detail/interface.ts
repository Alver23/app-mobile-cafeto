import { EventResponse } from '../../services/event/interface';

export interface Props {
	route: any;
	event: EventResponse;
	loading: boolean;
	error: string;
	response: string;
	resetActions: () => void;
}

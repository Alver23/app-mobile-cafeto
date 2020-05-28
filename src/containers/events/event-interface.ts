import { EventResponse } from '../../services/event/interface';

export interface Props {
	events: EventResponse[];
	getEvents: () => any;
	navigation: any;
	logout: () => any;
	loading: boolean;
}

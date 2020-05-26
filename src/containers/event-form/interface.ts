// Models
import { ApiResponseEvent } from '../events/event-interface';

export interface Props {
	loading: boolean;
	error: string;
	response: string;
	createOrUpdate: (payload, id) => void;
	resetActions: () => void;
	event: ApiResponseEvent;
}
export interface State {
	title: string;
	description?: string;
	address?: string;
	imageUrl?: string;
	latitude: string;
	longitude: string;
}
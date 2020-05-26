export interface Props {
	loading: boolean;
	error: string;
	response: string;
	saveForm: (payload) => void;
	resetActions: () => void;
}
export interface State {
	title: string;
	description?: string;
	address?: string;
	imageUrl?: string;
	latitude: string;
	longitude: string;
}

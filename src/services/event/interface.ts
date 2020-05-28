export interface EventRequest {
	id: number;
	title: string;
	description?: string;
	address?: string;
	latitude: number;
	longitude: number;
}

export interface EventResponse {
	id: number;
	title: string;
	description?: string;
	address?: string;
	imageUrl?: string;
	latitude: number;
	longitude: number;
	isOwner: boolean;
	user: {
		id: number;
		name: string;
		email: string;
	};
}

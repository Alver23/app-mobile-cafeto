export interface LoginResponse {
	user: {
		id: number;
		name: string;
		email: string;
	};
	token: string;
	refreshToken: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginProviderRequest extends LoginRequest {
	name: string;
}

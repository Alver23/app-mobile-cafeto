export enum LOGIN_ACTION_TYPES {
	loginRequest = '[LOGIN] Login request',
	loginSuccess = '[LOGIN] Login success',
	loginFailure = '[LOGIN] Login failure',
	logoutRequest = '[LOGIN] Logout request',
}

export interface LoginRequestPayload {
	email: string;
	password: string;
}

export interface User {
	id: number;
	email: string;
	name: string;
}

export interface LoginLoading {
	payload: boolean;
	type: LOGIN_ACTION_TYPES.loginRequest;
}

export interface LoginSuccessPayload {
	user: User;
}
export interface LoginSuccess {
	payload: LoginSuccessPayload;
	type: LOGIN_ACTION_TYPES.loginSuccess;
}

export interface LoginFailure {
	payload: Error;
	type: LOGIN_ACTION_TYPES.loginFailure;
}

export interface LogoutRequest {
	type: LOGIN_ACTION_TYPES.logoutRequest;
}

export type LoginActionTypes = LoginLoading | LoginSuccess | LoginFailure | LogoutRequest;

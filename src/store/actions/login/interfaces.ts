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

export interface User extends LoginRequestPayload {
	id: number;
}

export interface LoginLoading {
	type: LOGIN_ACTION_TYPES.loginRequest;
}

export interface LoginSuccessPayload {
	user: User;
	token: string;
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

export type LoginActionTypes =
	| LoginLoading
	| LoginSuccess
	| LoginFailure
	| LogoutRequest;

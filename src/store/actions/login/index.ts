// Dependencies
import { AxiosError } from 'axios';

// Models
import {
	LOGIN_ACTION_TYPES,
	LoginActionTypes,
	LoginSuccessPayload,
	User,
} from './interfaces';

// Utils
import { externalAxiosInstance } from '../../../core/axios-instance/axios-instance';
import {
	clearAuthenticationToken,
	setAuthenticationToken,
} from '../../../core/authentication';

// Actions
import { clearToken, saveToken, tokenLoading } from '../authentication-token';

// Configurations
import { config } from '../../../config';
const {
	api: {
		basePath,
		auth: { login: loginUrl },
	},
} = config;

export const loginLoading = (): LoginActionTypes => ({
	type: LOGIN_ACTION_TYPES.loginRequest,
});

export const loginSuccess = (
	payload: LoginSuccessPayload,
): LoginActionTypes => ({
	payload,
	type: LOGIN_ACTION_TYPES.loginSuccess,
});

export const loginFailure = (payload: Error): LoginActionTypes => ({
	payload,
	type: LOGIN_ACTION_TYPES.loginFailure,
});

export const logout = () => ({
	type: LOGIN_ACTION_TYPES.logoutRequest,
});

export const login = (payload: { email: string; password: string }) => (
	dispatch,
) => {
	dispatch(loginLoading());
	dispatch(tokenLoading());
	const { email, password } = payload;
	const auth = {
		password,
		username: email,
	};
	const url = `${basePath}${loginUrl}`;
	externalAxiosInstance
		.post(url, {}, { auth })
		.then(async (response: { data: { user: User; token: string } }) => {
			const { user, token } = response.data;
			await setAuthenticationToken(token);
			dispatch(loginSuccess({ user, token }));
			dispatch(saveToken(token));
		})
		.catch((error: AxiosError) => {
			const { response } = error;
			const { message } = response.data;
			dispatch(loginFailure(message));
			dispatch(tokenLoading(false));
		});
};

export const logoutRequest = () => (dispatch) => {
	dispatch(loginLoading());
	clearAuthenticationToken()
		.then((_) => {
			dispatch(logout());
			dispatch(clearToken());
		})
		.catch((error: AxiosError) => dispatch(loginFailure(error)));
};

// Models
import { LOGIN_ACTION_TYPES, LoginActionTypes, LoginSuccessPayload, User } from './interfaces';

// Service
import { externalAxiosInstance } from '../../../core/axios-instance/axios-instance';

// Utils
import {
	clearAuthenticationToken,
	setAuthenticationToken,
	setRefreshToken,
	clearRefreshToken,
} from '../../../core/authetication/authentication';

// Actions
import { clearToken, saveToken, tokenLoading } from '../authentication-token';

// Configurations
import { configService } from '../../../config';

const {
	basePath,
	auth: { login: loginUrl },
} = configService.get('api');
export const loginLoading = (payload: boolean = true): LoginActionTypes => ({
	payload,
	type: LOGIN_ACTION_TYPES.loginRequest,
});

export const loginSuccess = (payload: LoginSuccessPayload): LoginActionTypes => ({
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

export const login = (payload: { email: string; password: string }) => (dispatch) => {
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
		.then(async (response: { data: { user: User; token: string; refreshToken: string } }) => {
			const { user, token, refreshToken } = response.data;
			await setAuthenticationToken(token);
			await setRefreshToken(refreshToken);
			dispatch(loginSuccess({ user, token }));
			dispatch(loginLoading(false));
			dispatch(saveToken({ token, refreshToken }));
		})
		.catch(
			({
				response: {
					data: { message },
				},
			}) => {
				dispatch(loginFailure(message));
				dispatch(loginLoading(false));
				dispatch(tokenLoading(false));
			},
		);
};

export const logoutRequest = () => (dispatch) => {
	dispatch(loginLoading());
	clearAuthenticationToken()
		.then(async (_) => {
			await clearRefreshToken();
			dispatch(logout());
			dispatch(clearToken());
			dispatch(loginLoading(false));
		})
		.catch(
			({
				response: {
					data: { message },
				},
			}) => {
				dispatch(loginFailure(message));
			},
		);
};

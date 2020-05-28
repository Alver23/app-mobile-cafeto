import { LOGIN_ACTION_TYPES, LoginActionTypes, LoginSuccessPayload } from './interfaces';
import { authService } from '../../../services';
import { authenticationService } from '../../../core';
import { clearToken, saveToken, tokenLoading } from '../authentication-token';

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
	authService
		.login(payload)
		.then(async (response) => {
			const { user, token, refreshToken } = response;
			await authenticationService.setToken(token);
			await authenticationService.setRefreshToken(refreshToken);
			dispatch(loginSuccess({ user }));
			dispatch(loginLoading(false));
			dispatch(saveToken({ token, refreshToken }));
		})
		.catch(({ message }) => {
			dispatch(loginFailure(message));
			dispatch(loginLoading(false));
			dispatch(tokenLoading(false));
		});
};

export const logoutRequest = () => (dispatch) => {
	dispatch(loginLoading());
	authenticationService
		.clearToken()
		.then(async (_) => {
			await authenticationService.clearRefreshToken();
			dispatch(logout());
			dispatch(clearToken());
			dispatch(loginLoading(false));
		})
		.catch((error) => {
			dispatch(loginFailure(error));
		});
};

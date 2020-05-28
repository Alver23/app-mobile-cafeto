import { saveToken } from '../authentication-token';
import { loginSuccess, loginFailure, loginLoading } from './index';
import { authService } from '../../../services';
import { authenticationService, auth0Service } from '../../../core';

export const loginProvider = () => (dispatch) => {
	dispatch(loginLoading());
	auth0Service
		.authorize()
		.then(async (response) => {
			const { name, email, sub } = response;
			const newEmail = email || `${name.replace(' ', '')}@email.com`;
			const data = await authService.loginProvider({ name, email: newEmail, password: sub });
			const { user, token, refreshToken } = data;
			await authenticationService.setToken(token);
			await authenticationService.setRefreshToken(refreshToken);
			dispatch(saveToken({ token, refreshToken }));
			dispatch(loginSuccess({ user }));
			dispatch(loginLoading(false));
		})
		.catch((error) => {
			dispatch(loginFailure(error));
			dispatch(loginLoading(false));
		});
};

// Actions
import { saveToken } from '../authentication-token';
import { loginSuccess, loginFailure, loginLoading } from './index';

import { setAuthenticationToken } from '../../../core/authetication/authentication';

// Services
import { configService } from '../../../config';
import { jwtService } from '../../../core/jwt/jwt-service';
import { auth0Service } from '../../../core/authetication/auth0';
import { externalAxiosInstance } from '../../../core/axios-instance/axios-instance';

export const loginProvider = () => (dispatch) => {
	const {
		basePath,
		auth: { loginProvider: loginProviderUrl },
	} = configService.get('api');
	const url = `${basePath}${loginProviderUrl}`;
	dispatch(loginLoading());
	auth0Service.webAuth
		.authorize({
			scope: 'openid profile email',
		})
		.then(async (credentials) => {
			const { idToken } = credentials;
			const response = jwtService.decodeToken(idToken);
			const { name, email, sub } = response;
			const newEmail = email || `${name.replace(' ', '')}@email.com`;
			const { data } = await externalAxiosInstance.post(url, {
				name,
				email: newEmail,
				password: sub,
			});
			const { user, token } = data;
			await setAuthenticationToken(token);
			dispatch(saveToken(token));
			dispatch(loginSuccess(user));
			dispatch(loginLoading(false));
		})
		.catch(
			({
				response: {
					data: { message },
				},
			}) => {
				dispatch(loginFailure(message));
				dispatch(loginLoading(false));
			},
		);
};

import { TokenActionTypes, TOKEN_ACTION_TYPES } from './interfaces';
import {
	clearAuthenticationToken,
	clearRefreshToken,
	getAuthenticationToken,
	getRefreshToken,
} from '../../../core/authetication/authentication';

export const tokenLoading = (payload: boolean = true): TokenActionTypes => ({
	payload,
	type: TOKEN_ACTION_TYPES.tokenLoading,
});

export const saveToken = (payload: { token: string; refreshToken: string }): TokenActionTypes => ({
	payload,
	type: TOKEN_ACTION_TYPES.saveToken,
});

export const tokenFailure = (payload: Error): TokenActionTypes => ({
	payload,
	type: TOKEN_ACTION_TYPES.tokenFailure,
});

export const clearToken = (): TokenActionTypes => ({
	type: TOKEN_ACTION_TYPES.clearToken,
});

export const getToken = () => (dispatch) => {
	dispatch(tokenLoading());
	Promise.all([getAuthenticationToken(), getRefreshToken()])
		.then((response) => {
			const [token, refreshToken] = response;
			dispatch(saveToken({ token, refreshToken }));
		})
		.catch((error) => dispatch(tokenFailure(error)));
};

export const removeToken = () => (dispatch) => {
	dispatch(tokenLoading());
	Promise.all([clearAuthenticationToken(), clearRefreshToken()])
		.then((_) => dispatch(clearToken()))
		.catch((error) => dispatch(tokenFailure(error)));
};

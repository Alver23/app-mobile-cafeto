import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { authenticationService } from '../../authetication/authentication';
import { configService } from '../../../config';

export const headerAsBearerTokenInterceptor = () => async (requestConfig: AxiosRequestConfig) => {
	const token = await authenticationService.getToken();
	requestConfig.headers = {
		...requestConfig.headers,
		Authorization: `Bearer ${token}`,
	};
	return requestConfig;
};

export const responseInterceptor = () => (response: AxiosResponse) => response.data;

export const refresTokenInterceptor = () => async (error: AxiosError) => {
	const originalRequest: any = error.config;
	const { response = { status: 500 } } = error;
	const { status = 503 } = response;
	if (status === 401 && !originalRequest.retry) {
		const {
			basePath,
			auth: { token: url },
		} = configService.get('api');
		const uri = `${basePath}${url}`;
		const refreshToken = await authenticationService.getRefreshToken();
		originalRequest.retry = true;
		return new Promise<any>((resolve, reject) => {
			return axios
				.post(uri, { refreshToken })
				.then(async ({ data }) => {
					const { token: newToken, refreshToken: newRefreshToken } = data.data;
					await authenticationService.setToken(newToken);
					await authenticationService.setRefreshToken(newRefreshToken);
					originalRequest.headers.Authorization = `Bearer ${newToken}`;
					axios(originalRequest)
						.then((res: AxiosResponse) => resolve(res.data))
						.catch(reject);
				})
				.catch(reject);
		});
	}
	return Promise.reject(error);
};

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAuthenticationToken } from '../../authentication';

export const headerAsBearerTokenInterceptor = () => async (
	requestConfig: AxiosRequestConfig,
) => {
	const token = await getAuthenticationToken();
	requestConfig.headers = {
		...requestConfig.headers,
		Authorization: `Bearer ${token}`,
	};
	return requestConfig;
};

export const responseInterceptor = () => (response: AxiosResponse) => {
	return response.data;
};

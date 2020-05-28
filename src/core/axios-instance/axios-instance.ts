import axios, { AxiosInstance } from 'axios';
import { configService } from '../../config';
import { headerAsBearerTokenInterceptor, responseInterceptor, refresTokenInterceptor } from './interceptors';

export class InternalAxiosInstanceFactory {
	private readonly http: AxiosInstance;

	constructor(config = {}) {
		this.http = axios.create(config);
	}

	instance(): AxiosInstance {
		this.http.interceptors.request.use(headerAsBearerTokenInterceptor());
		this.http.interceptors.response.use(responseInterceptor(), refresTokenInterceptor());
		return this.http;
	}
}

export class ExternalAxiosInstanceFactory {
	private http: AxiosInstance;

	constructor(config = {}) {
		this.http = axios.create(config);
	}

	instance(): AxiosInstance {
		this.http.interceptors.response.use(responseInterceptor());
		return this.http;
	}
}

const defaultTimeout = configService.get('defaultTimeout');
export const internalAxiosInstance: AxiosInstance = new InternalAxiosInstanceFactory({
	timeout: defaultTimeout,
	headers: { 'content-type': 'application/json' },
}).instance();

export const externalAxiosInstance: AxiosInstance = new ExternalAxiosInstanceFactory({
	timeout: defaultTimeout,
	headers: { 'content-type': 'application/json' },
}).instance();

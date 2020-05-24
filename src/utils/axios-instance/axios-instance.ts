import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

import { headerAsBearerTokenInterceptor, responseInterceptor } from "./interceptors";

import { config } from "../../config";

export class InternalAxiosInstanceFactory {

    private readonly http: AxiosInstance;

    constructor(config = {}) {
        this.http = axios.create(config);
    }

    instance(): AxiosInstance {
        this.http.interceptors.request.use(headerAsBearerTokenInterceptor());
        this.http.interceptors.response.use(responseInterceptor());
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

const { defaultTimeout } = config;
export const internalAxiosInstance: AxiosInstance = new InternalAxiosInstanceFactory({
    timeout: parseInt(defaultTimeout, 10),
    headers: { 'content-type': 'application/json'}
}).instance();

export const externalAxiosInstance: AxiosInstance = new ExternalAxiosInstanceFactory({
    timeout: parseInt(defaultTimeout, 10),
    headers: { 'content-type': 'application/json'}
}).instance();

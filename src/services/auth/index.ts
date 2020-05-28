import { configService } from '../../config';
import { Connector, externalAxiosInstance } from '../../core';
import { LoginResponse, LoginRequest, LoginProviderRequest } from './interface';

export class AuthService {
	private readonly authPath: any;
	private readonly basePath: string;

	constructor(private readonly http: Connector) {
		({ basePath: this.basePath, auth: this.authPath } = configService.get('api'));
	}

	public login(payload: LoginRequest): Promise<LoginResponse> {
		const url = `${this.basePath}${this.authPath.login}`;
		const { email, password } = payload;
		const auth = {
			password,
			username: email,
		};
		return this.http.post<LoginResponse>(url, {}, { auth }).then((response: any) => response.data);
	}

	public loginProvider(payload: LoginProviderRequest): Promise<LoginResponse> {
		const url = `${this.basePath}${this.authPath.loginProvider}`;
		return this.http.post<LoginResponse>(url, payload).then((response: any) => response.data);
	}
}

export const authService = new AuthService(new Connector(externalAxiosInstance));

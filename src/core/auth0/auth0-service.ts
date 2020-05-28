import Auth0 from 'react-native-auth0';
import { configService } from '../../config';
import { jwtService } from '../jwt/jwt-service';
import { Auth0Response } from './interfaces';

const { domain, clientId } = configService.get('auth0');

export class Auth0Service {
	constructor(private readonly auth0) {}

	public authorize(): Promise<Auth0Response> {
		return new Promise<Auth0Response>((resolve, reject) => {
			this.auth0.webAuth
				.authorize({
					scope: 'openid profile email',
				})
				.then((credentials) => {
					const { idToken } = credentials;
					const response = jwtService.decodeToken(idToken);
					resolve(response);
				})
				.catch(reject);
		});
	}
}

export const auth0Service = new Auth0Service(new Auth0({ domain, clientId }));

import Config from 'react-native-config';

console.log('Config', Config);

export const config = {
	api: {
		basePath: 'http://localhost:3000/cafeto/api',
		auth: {
			login: '/auth/login',
			loginProvider: '/auth/login-provider',
		},
		events: {
			getUrl: '/events',
		},
	},
	defaultTimeout: 5000,
	mapBoxToken:
		'pk.eyJ1IjoiYWx2ZXIyMyIsImEiOiJja2FtNnZobTEwMjd5MnFsdTBmd2c5bGI2In0.tU-ldGBRyBON1FQLpzKvCA',
	auth0: {
		domain: 'astrosoftwaresolutions.auth0.com',
		clientId: 'AKvTeIgfkBfUsEfaJoKCO1fMeFFHPaIs',
	},
};

export class ConfigService {
	constructor(private readonly config: any) {}

	get(key: string) {
		return this.config[key];
	}
}

export const configService = new ConfigService(config);

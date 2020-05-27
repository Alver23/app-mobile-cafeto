const configuration = {
	api: {
		basePath: 'http://localhost:3000/cafeto/api',
		auth: {
			login: '/auth/login',
			loginProvider: '/auth/login-provider',
		},
		events: {
			get: '/events',
			post: '/events',
			delete: '/events/',
			put: '/events/',
		},
	},
	defaultTimeout: 20000,
	mapBoxToken: 'pk.eyJ1IjoiYWx2ZXIyMyIsImEiOiJja2FtNnZobTEwMjd5MnFsdTBmd2c5bGI2In0.tU-ldGBRyBON1FQLpzKvCA',
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

export const configService = new ConfigService(configuration);

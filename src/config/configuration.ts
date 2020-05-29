export default {
	api: {
		basePath: 'https://api-cafeto.herokuapp.com/cafeto/api',
		auth: {
			login: '/auth/login',
			loginProvider: '/auth/login-provider',
			token: '/auth/token',
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

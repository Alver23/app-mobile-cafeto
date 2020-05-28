import AsyncStorage from '@react-native-community/async-storage';

export class AuthenticationService {
	private readonly TOKEN_STORAGE_KEY = 'Cafeto:token';
	private readonly REFRESH_TOKEN_STORAGE_KEY = 'Cafeto:refreshToken';

	constructor(private readonly asyncStorageSrvice) {}

	getToken(): Promise<any> {
		return this.asyncStorageSrvice.getItem(this.TOKEN_STORAGE_KEY);
	}

	setToken(token): Promise<any> {
		return this.asyncStorageSrvice.setItem(this.TOKEN_STORAGE_KEY, token);
	}

	clearToken(): Promise<any> {
		return this.asyncStorageSrvice.removeItem(this.TOKEN_STORAGE_KEY);
	}

	getRefreshToken(): Promise<any> {
		return this.asyncStorageSrvice.getItem(this.REFRESH_TOKEN_STORAGE_KEY);
	}

	setRefreshToken(token): Promise<any> {
		return this.asyncStorageSrvice.setItem(this.REFRESH_TOKEN_STORAGE_KEY, token);
	}

	clearRefreshToken(): Promise<any> {
		return this.asyncStorageSrvice.removeItem(this.REFRESH_TOKEN_STORAGE_KEY);
	}
}

export const authenticationService = new AuthenticationService(AsyncStorage);

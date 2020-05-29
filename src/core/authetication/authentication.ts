import AsyncStorage from '@react-native-community/async-storage';

export class AuthenticationService {
	private readonly TOKEN_STORAGE_KEY = 'Cafeto:token';
	private readonly REFRESH_TOKEN_STORAGE_KEY = 'Cafeto:refreshToken';

	constructor(private readonly asyncStorageService) {}

	getToken(): Promise<any> {
		return this.asyncStorageService.getItem(this.TOKEN_STORAGE_KEY);
	}

	setToken(token): Promise<any> {
		return this.asyncStorageService.setItem(this.TOKEN_STORAGE_KEY, token);
	}

	clearToken(): Promise<any> {
		return this.asyncStorageService.removeItem(this.TOKEN_STORAGE_KEY);
	}

	getRefreshToken(): Promise<any> {
		return this.asyncStorageService.getItem(this.REFRESH_TOKEN_STORAGE_KEY);
	}

	setRefreshToken(token): Promise<any> {
		return this.asyncStorageService.setItem(this.REFRESH_TOKEN_STORAGE_KEY, token);
	}

	clearRefreshToken(): Promise<any> {
		return this.asyncStorageService.removeItem(this.REFRESH_TOKEN_STORAGE_KEY);
	}
}

export const authenticationService = new AuthenticationService(AsyncStorage);

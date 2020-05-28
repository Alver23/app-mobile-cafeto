import AsyncStorage from '@react-native-community/async-storage';

const AUTHENTICATION_STORAGE_KEY = 'Cafeto:Authentication';
const REFRESH_TOKEN_STORAGE_KEY = 'Cafeto:refreshToken';

export const getAuthenticationToken = async () => {
	return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
};

export const setAuthenticationToken = async (token: string) => {
	return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
};

export const clearAuthenticationToken = async () => {
	return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
};

export const getRefreshToken = async () => {
	return AsyncStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
};

export const setRefreshToken = async (token: string) => {
	return AsyncStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, token);
};

export const clearRefreshToken = async () => {
	return AsyncStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
};

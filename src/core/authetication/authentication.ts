import AsyncStorage from '@react-native-community/async-storage';

const AUTHENTICATION_STORAGE_KEY = 'Cafeto:Authentication';

export const getAuthenticationToken = async () => {
	return AsyncStorage.getItem(AUTHENTICATION_STORAGE_KEY);
};

export const setAuthenticationToken = async (token: string) => {
	return AsyncStorage.setItem(AUTHENTICATION_STORAGE_KEY, token);
};

export const clearAuthenticationToken = async () => {
	return AsyncStorage.removeItem(AUTHENTICATION_STORAGE_KEY);
};

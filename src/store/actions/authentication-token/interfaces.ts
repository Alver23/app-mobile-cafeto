export enum TOKEN_ACTION_TYPES {
	tokenLoading = '[TOKEN] Token loading',
	saveToken = '[TOKEN] Save token',
	tokenFailure = '[TOKEN] Load token failure',
	clearToken = '[TOKEN] Clear Token',
}

export interface TokenLoading {
	payload: boolean;
	type: TOKEN_ACTION_TYPES.tokenLoading;
}

export interface SaveToken {
	type: TOKEN_ACTION_TYPES.saveToken;
	payload: string;
}

export interface TokenFailure {
	payload: Error;
	type: TOKEN_ACTION_TYPES.tokenFailure;
}

export interface ClearToken {
	type: TOKEN_ACTION_TYPES.clearToken;
}

export type TokenActionTypes =
	| TokenLoading
	| SaveToken
	| TokenFailure
	| ClearToken;

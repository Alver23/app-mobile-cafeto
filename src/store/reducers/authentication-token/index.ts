import {
	TokenActionTypes,
	TOKEN_ACTION_TYPES,
} from '../../actions/authentication-token/interfaces';

export const authenticationTokenFeatureKey = 'authenticationToken';

export interface AuthenticationTokenState {
	token: string;
	error: Error;
	loading: boolean;
}
const initialState: AuthenticationTokenState = {
	token: null,
	error: null,
	loading: false,
};

export const authenticationTokenReducer = (
	state = initialState,
	action: TokenActionTypes,
) => {
	switch (action.type) {
		case TOKEN_ACTION_TYPES.tokenLoading:
			return { ...state, loading: action.payload };
		case TOKEN_ACTION_TYPES.saveToken:
			return { ...state, loading: false, token: action.payload };
		case TOKEN_ACTION_TYPES.clearToken:
			return { ...state, loading: false, token: null };
		case TOKEN_ACTION_TYPES.tokenFailure:
			return { ...state, loading: false, token: null, error: action.payload };
		default:
			return state;
	}
};

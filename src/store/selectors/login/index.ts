// Dependencies
import { createSelector } from 'reselect';

// Reducers
import { loginFeatureKey, LoginState } from '../../reducers/login';

export const selectLoginState = (state) => state[loginFeatureKey];

export const selectUser = createSelector(
	selectLoginState,
	(state: LoginState) => state.user,
);

export const selectLoginLoading = createSelector(
	selectLoginState,
	(state: LoginState) => state.loading,
);

export const selectLoginError = createSelector(
	selectLoginState,
	(state: LoginState) => state.error,
);

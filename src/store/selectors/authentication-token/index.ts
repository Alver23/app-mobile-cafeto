import { createSelector } from 'reselect';
import { authenticationTokenFeatureKey, AuthenticationTokenState } from "../../reducers/authentication-token";

export const selectAuthenticationState = state => state[authenticationTokenFeatureKey];

export const selectAuthenticationToken = createSelector(
    selectAuthenticationState,
    (state: AuthenticationTokenState) => state.token,
);


export const selectAuthenticationLoading = createSelector(
    selectAuthenticationState,
    (state: AuthenticationTokenState) => state.loading,
);

export const selectAuthenticationError = createSelector(
    selectAuthenticationState,
    (state: AuthenticationTokenState) => state.error,
);

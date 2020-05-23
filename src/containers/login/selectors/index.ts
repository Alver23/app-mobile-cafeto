import { createSelector } from 'reselect';
import { loginFeatureKey } from "../reducers";
import { LoginState } from "../reducers";

export const selectLoginState = state => state[loginFeatureKey]

export const selectToken = createSelector(
    selectLoginState,
    (state: LoginState) => state.token,
);

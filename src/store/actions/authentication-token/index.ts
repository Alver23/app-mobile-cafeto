import { TokenActionTypes, TOKEN_ACTION_TYPES} from "./interfaces";
import {clearAuthenticationToken, getAuthenticationToken} from "../../../utils/authentication";

export const tokenLoading = (payload: boolean = true): TokenActionTypes  => ({
    payload,
    type: TOKEN_ACTION_TYPES.tokenLoading,
});

export const saveToken = (payload: string): TokenActionTypes => ({
    payload,
    type: TOKEN_ACTION_TYPES.saveToken,
});

export const tokenFailure = (payload: Error): TokenActionTypes => ({
    payload,
    type: TOKEN_ACTION_TYPES.tokenFailure
});

export const clearToken = (): TokenActionTypes => ({
    type: TOKEN_ACTION_TYPES.clearToken,
});

export const getToken = () => dispatch => {
    dispatch(tokenLoading())
    getAuthenticationToken()
        .then(token => dispatch(saveToken(token)))
        .catch(error => dispatch(tokenFailure(error)))

}

export const removeToken = () => dispatch => {
    dispatch(tokenLoading())
    clearAuthenticationToken()
        .then(_ => dispatch(clearToken()))
        .catch(error => dispatch(tokenFailure(error)))
}

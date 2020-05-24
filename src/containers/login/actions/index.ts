import { AxiosError } from 'axios';
import { User, Login } from "../login-interface";
import { getAuthenticationToken, setAuthenticationToken, clearAuthenticationToken } from "../../../utils/authentication";

import { externalAxiosInstance } from "../../../utils/axios-instance/axios-instance";

import { config } from "../../../config";

const { api: { basePath, auth: { login: loginUrl }}} = config;


export enum LoginActionTypes {
    loginRequest = '[LOGIN] LOGIN_REQUEST',
    loginSuccess = '[LOGIN] LOGIN_SUCCESS',
    loginFailure = '[LOGIN] LOGIN_FAILURE',
    saveToken = '[AUTH] SAVE_TOKEN',
    tokenLoading = '[AUTH] TOKEN_LOADING',
    logoutRequest = '[LOGOUT] LOGOUT_REQUEST',
}


export const login = () => ({
    type: LoginActionTypes.loginRequest,
});

export const loginSuccess = (payload: {user: User, token: string}) => ({
    payload,
    type: LoginActionTypes.loginSuccess,
});

export const loginFailure = (payload: Error) => ({
    payload,
    type: LoginActionTypes.loginFailure,
});

export const saveToken = (payload: string) => ({
    payload,
    type: LoginActionTypes.saveToken,
});

export const tokenLoading = (payload: boolean) => ({
    payload,
    type: LoginActionTypes.tokenLoading,
});

export const logout = () => ({
    type: LoginActionTypes.logoutRequest,
})

export const logoutRequest = () => dispatch => {
    clearAuthenticationToken()
        .then(_ => dispatch(logout()));
}

export const getToken = () => dispatch => {
    dispatch(tokenLoading(true))
    getAuthenticationToken()
        .then(token => {
            dispatch(saveToken(token));
            dispatch(tokenLoading(false))
        })

}

export const loginRequest = (payload: Login) => dispatch => {
    dispatch(login());
    const { email, password } = payload;
    const auth = {
        password,
        username: email,
    };
    const url = `${basePath}${loginUrl}`;
    externalAxiosInstance
        .post(url, {}, {auth})
        .then(async (response: { data: {user: User, token: string} }) => {
            const { user, token } = response.data;
            await setAuthenticationToken(token);
            dispatch(loginSuccess({user, token}));
        })
        .catch((error: AxiosError) => dispatch(loginFailure(error)));
}

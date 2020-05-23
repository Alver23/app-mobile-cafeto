import { User, Login } from "../login-interface";
import { getAuthenticationToken } from "../../../utils/authentication";

export enum LoginActionTypes {
    loginRequest = '[LOGIN] LOGIN_REQUEST',
    loginSuccess = '[LOGIN] LOGIN_SUCCESS',
    loginFailure = '[LOGIN] LOGIN_FAILURE',
    saveToken = '[LOGIN] SAVE_TOKEN',
}


export const login = (payload: Login) => ({
    payload,
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

export const getToken = () => dispatch => {
    getAuthenticationToken()
        .then(token => {
            dispatch(saveToken(token));
        })

}

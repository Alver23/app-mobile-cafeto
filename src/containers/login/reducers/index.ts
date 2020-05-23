import { User } from "../login-interface";
import { LoginActionTypes } from "../actions";


export interface LoginState {
    user: User;
    token: string;
    error: Error;
    loading: boolean;
}
const initialState: LoginState = {
    user: null,
    token: null,
    error: null,
    loading: false,
}

export const loginFeatureKey = 'login';

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LoginActionTypes.loginRequest:
            return {
                ...state,
                loading: true,
            }
        case LoginActionTypes.loginSuccess:
            const { payload: { user, token }} = action;
            return {
                ...state,
                token,
                user: {...user},
                error: null,
                loading: false,
            }
        case LoginActionTypes.loginFailure:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        case LoginActionTypes.saveToken:
            return { ...state, token: action.payload };
        default:
            return state;
    }
}

import {
  User,
  LOGIN_ACTION_TYPES,
  LoginActionTypes,
} from '../../actions/login/interfaces';

export const loginFeatureKey = 'login';

export interface LoginState {
  user: User;
  error: Error;
  loading: boolean;
}
const initialState: LoginState = {
  user: null,
  error: null,
  loading: false,
};

export const loginReducer = (
  state = initialState,
  action: LoginActionTypes,
) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.loginRequest:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ACTION_TYPES.loginSuccess:
      const {
        payload: { user },
      } = action;
      return {
        ...state,
        user: { ...user },
        error: null,
        loading: false,
      };
    case LOGIN_ACTION_TYPES.loginFailure:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case LOGIN_ACTION_TYPES.logoutRequest:
      return { ...state, user: null, loading: false };
    default:
      return state;
  }
};

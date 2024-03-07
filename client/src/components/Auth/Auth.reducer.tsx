import { SIGN_IN, SIGN_OUT } from './Auth.action';
import { IUser, AuthState, AuthAction } from 'src/@types/auth.d'

let userType:IUser = {
    id: '',
    username: '',
    email: undefined,
    password: '',
    accessToken: '',
  };
  const initialState: AuthState = {
    loading: true,
    isAuthenticated: false,
    token: null,
    user: userType,
  };

const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        token: action.payload?.accessToken || null,
        user: action.payload || userType,
      };
    case SIGN_OUT:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        token: null,
        user: userType
      };
    default:
      return state;
  }
};

export default AuthReducer;

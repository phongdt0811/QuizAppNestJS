interface IUser {
    id: string;
    username: string;
    email?: string;
    password: string;
    accessToken?: string;
}

interface AuthState {
    loading: boolean,
    isAuthenticated: boolean,
    token?: string | null,
    user: IUser,
}

interface AuthAction {
    type: string,
    payload?: IUser
}
export type {
    IUser, AuthState, AuthAction
}
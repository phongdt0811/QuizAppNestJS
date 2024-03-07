import { RootState } from 'src/store';

export const getIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;

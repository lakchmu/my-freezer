import { createContext, Dispatch } from 'react';

export interface ContextProvider<T> {
  state: T;
  dispatch: Dispatch<Partial<T>>;
}

export interface AuthState {
  isAuthorized: boolean;
  email?: string;
  name?: string;
}

export const initialState: AuthState = {
  isAuthorized: false,
};

const AuthContext = createContext<ContextProvider<AuthState>>({
  state: initialState,
  dispatch: () => {},
});

export default AuthContext;

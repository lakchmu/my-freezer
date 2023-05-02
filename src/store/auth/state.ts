import { createContext } from 'react';

import type { ContextProvider } from '../types';

export interface AuthState {
  isAuthorized: boolean;
  email?: string;
  name?: string;
}

export const authInitialState: AuthState = {
  isAuthorized: false,
};

const AuthContext = createContext<ContextProvider<AuthState>>({
  state: authInitialState,
  dispatch: () => {},
});

export default AuthContext;

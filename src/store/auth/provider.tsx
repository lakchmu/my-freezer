import React, { FC, useCallback, useEffect, useReducer } from 'react';

import { CookieService } from '../../utils';

import AuthContext, { AuthState, authInitialState } from './state';

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<(state: AuthState, action: Partial<AuthState>) => AuthState>(
    (currentState: AuthState, action: Partial<AuthState>): AuthState => ({
      ...currentState,
      ...action,
    }),
    authInitialState,
  );

  const init = useCallback(async () => {
    const isAuthorized = await CookieService.isUserAuthenticated();

    if (isAuthorized) {
      const { name, email } = await CookieService.getProfile();

      dispatch({ isAuthorized, name, email });
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { FC, useReducer } from 'react';
import AuthContext, { AuthState, initialState } from './state';

export const AuthProvider: FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer<
    (state: AuthState, action: Partial<AuthState>) => AuthState
  >(
    (currentState: AuthState, action: Partial<AuthState>): AuthState => ({
      ...currentState,
      ...action,
    }),
    initialState,
  );

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

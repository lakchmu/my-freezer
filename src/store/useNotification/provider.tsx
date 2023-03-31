import React, { FC, useReducer } from 'react';
import NotificationContext, { NotificationState, notificationInitialState } from './state';

export const NotificationProvider: FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer<
    (state: NotificationState, action: Partial<NotificationState>) => NotificationState
  >(
    (currentState: NotificationState, action: Partial<NotificationState>): NotificationState => ({
      ...currentState,
      ...action,
    }),
    notificationInitialState,
  );

  return (
    <NotificationContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};

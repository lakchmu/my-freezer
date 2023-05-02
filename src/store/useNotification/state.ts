import { createContext } from 'react';

import type { ContextProvider } from '../types';

export enum NotificationStatus {
  INFO = 'info',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface NotificationState {
  show: boolean;
  text: string;
  status: NotificationStatus;
}

export const notificationInitialState: NotificationState = {
  show: false,
  text: '',
  status: NotificationStatus.INFO,
};

const NotificationContext = createContext<ContextProvider<NotificationState>>({
  state: notificationInitialState,
  dispatch: () => {},
});

export default NotificationContext;

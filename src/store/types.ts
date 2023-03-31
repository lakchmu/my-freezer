import { Dispatch } from 'react';

export interface ContextProvider<T> {
  state: T;
  dispatch: Dispatch<Partial<T>>;
}

import React, { FC, useCallback, useContext, useEffect, useReducer, useState } from 'react';

import { productService } from '../../rest';

import { AuthContext } from '../auth';

import ProductsContext, { ProductsState, productsInitialState } from './state';

import type { Product } from '../../types';

export const ProductProvider: FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  const [state, dispatch] = useReducer<(state: ProductsState, action: Partial<ProductsState>) => ProductsState>(
    (currentState: ProductsState, action: Partial<ProductsState>): ProductsState => ({
      ...currentState,
      ...action,
    }),
    productsInitialState,
  );

  const init = useCallback(async () => {
    try {
      setLoading(true);
      const list = await productService.getAll();
      dispatch({ list });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (auth.state.name && !state.list.length && !loading) {
      init();
    }
  }, [init, auth.state.name, loading, state.list.length]);

  const edit = useCallback((value: Partial<Product>): Promise<void> => productService.edit(value), []);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        edit,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

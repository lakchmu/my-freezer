import React, { FC, useCallback, useContext, useEffect, useReducer, useState } from 'react';

import { productService } from '../../rest';

import { AuthContext } from '../auth';

import ProductsContext, { ProductsState, productsInitialState } from './state';

import type { Product } from '../../types';

export const ProductProvider: FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);

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
      setLoaded(true);
      setLoading(false);
    } catch (error: any) {
      console.error('Error: ', error.message);
    }
  }, []);

  useEffect(() => {
    if (auth.state.isAuthorized && !loaded && !loading) {
      init();
    }
  }, [init, auth.state.isAuthorized, loaded, loading]);

  const create = useCallback((value: FormData): Promise<void> => productService.create(value), []);
  const edit = useCallback(
    (id: number, value: Partial<Product> | FormData): Promise<void> => productService.edit(id, value),
    [],
  );
  const remove = useCallback(
    async (id: number): Promise<void> => {
      await productService.remove(id);
      dispatch({ list: state.list.filter((product: Product) => product.id !== id) });
    },
    [state.list],
  );
  const getById = useCallback(
    (id: number): Product | undefined => state.list.find(product => product.id === id),
    [state.list],
  );
  const getShoppingList = useCallback(async (): Promise<void> => {
    const list = await productService.getAll({ toBuy: true });
    dispatch({ list });
  }, [state.list]);

  return (
    <ProductsContext.Provider
      value={{
        state,
        dispatch,
        getAll: init,
        create,
        edit,
        remove,
        getById,
        getShoppingList,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

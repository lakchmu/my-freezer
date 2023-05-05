import { createContext } from 'react';

import type { ContextProvider } from '../types';

import type { Product } from '../../types';

export interface ProductsState {
  list: Product[];
}

export const productsInitialState: ProductsState = {
  list: [],
};

interface ProductsContextProvider extends ContextProvider<ProductsState> {
  create: (value: FormData) => Promise<void>;
  edit: (id: number, value: Partial<Product> | FormData) => Promise<void>;
  remove: (id: number) => Promise<void>;
  getById: (id: number) => Product | undefined;
}

const ProductsContext = createContext<ProductsContextProvider>({
  state: productsInitialState,
  dispatch: () => {},
  create: async () => {},
  edit: async () => {},
  remove: async () => {},
  getById: () => undefined,
});

export default ProductsContext;

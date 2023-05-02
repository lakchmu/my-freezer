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
  edit: (value: Partial<Product>) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextProvider>({
  state: productsInitialState,
  dispatch: () => {},
  edit: async () => {},
});

export default ProductsContext;

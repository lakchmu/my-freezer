import React from 'react';
import { ScrollView, VStack } from 'native-base';

import { ProductItem } from './ProductItem';

import type { Product } from '../../../types';

export interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <ScrollView>
      <VStack space={2} w="100%">
        {products.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </VStack>
    </ScrollView>
  );
};

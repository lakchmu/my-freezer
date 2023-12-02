import React from 'react';

import { Product } from '../../../types';

import { ListContent } from './ListContent';

interface ListLogicProps {
  products: Product[];
}

export const ListLogic = ({ products }: ListLogicProps) => {
  return <ListContent items={products} />;
};

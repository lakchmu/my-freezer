import React from 'react';
import { ScrollView, VStack } from 'native-base';

import { ItemLogic } from './ItemLogic';

import { Product } from '../../../types';

interface ListContentProps {
  items: Product[];
}

export const ListContent = ({ items }: ListContentProps) => {
  return (
    <ScrollView>
      <VStack>
        {items.map((item: Product) => (
          <ItemLogic {...item} key={item.id} />
        ))}
      </VStack>
    </ScrollView>
  );
};

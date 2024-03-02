import React from 'react';
import { ScrollView, VStack, Stack } from 'native-base';

import { ItemLogic } from './ItemLogic';

import { Product } from '../../../types';

interface ListContentProps {
  items: Product[];
}

export const ListContent = ({ items }: ListContentProps) => {
  return (
    <ScrollView>
      <VStack space="0.5">
        {items.map((item: Product) => (
          <ItemLogic {...item} key={item.id} />
        ))}
        <Stack backgroundColor="white" w="100%" minHeight="4" />
      </VStack>
    </ScrollView>
  );
};

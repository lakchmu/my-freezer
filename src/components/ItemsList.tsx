import React, { ComponentType } from 'react';
import { ScrollView, VStack, Stack } from 'native-base';

import type { Product } from '../types';

interface ItemsListProps {
  items: Product[];
  ItemComponent: ComponentType<Product>;
}

export function ItemsList({ items, ItemComponent }: ItemsListProps) {
  return (
    <ScrollView>
      <VStack space="0.5">
        {items.map((item: Product) => (
          <Stack key={item.id} p={4} backgroundColor="white" w="100%" minHeight="32">
            <ItemComponent {...item} />
          </Stack>
        ))}
        <Stack backgroundColor="white" w="100%" minHeight="4" />
      </VStack>
    </ScrollView>
  );
}

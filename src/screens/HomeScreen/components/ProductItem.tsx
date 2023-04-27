import React, { FC, useState } from 'react';
import { HStack, Avatar, VStack, Text } from 'native-base';

import { Counter } from './Counter';

import type { Product } from '../../../types';

const BASE_URL = process.env.BASE_URL;

export interface ProductItemProps extends Product {}

export const ProductItem: FC<ProductItemProps> = ({ name, uri, amount, limit }: ProductItemProps) => {
  const [count, setCount] = useState<number>(0);

  const source = uri ? { uri: `${BASE_URL}/uploads/${uri}` } : undefined;

  return (
    <HStack alignItems="center" space={2} p={2} backgroundColor="white" w="100%" h="32">
      <Avatar bg="darkBlue.700" source={source} size="xl">
        {!uri && name.slice(0, 2)}
      </Avatar>
      <VStack alignItems="flex-start" flex={1}>
        <Text fontSize="lg" fontWeight="bold" bold color="coolGray.800">
          {name}
        </Text>
        <Text fontSize="md" color="coolGray.800">
          Amount: {amount}, Limit: {limit}
        </Text>
      </VStack>
      <VStack alignItems="flex-end">
        <Counter value={count} onChange={setCount} />
      </VStack>
    </HStack>
  );
};

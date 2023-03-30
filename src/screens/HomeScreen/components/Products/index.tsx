import React from 'react';
import { HStack, Avatar, VStack, Text } from 'native-base';

import type { Product } from '../../../../types';

const baseURL = process.env.BASE_URL;

const Item = ({ name, uri, amount, limit }: Product) => {
  const source = uri ? { uri: `${baseURL}/uploads/${uri}` } : undefined;

  return (
    <HStack alignItems="center" space={2} p={2} backgroundColor="white" w="100%">
      <Avatar bg="darkBlue.700" source={source}>
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
    </HStack>
  );
};

export interface ProductsProps {
  products: Product[];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <VStack space={2} w="100%" h="100%">
      {products.map(product => (
        <Item {...product} key={product.id} />
      ))}
    </VStack>
  );
};

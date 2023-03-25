import React from 'react';
import { HStack, Avatar, VStack, Text } from 'native-base';

import { products } from '../../../../fixtures/products';

import type { Product } from '../../../../types';

const Item = ({ name, uri, amount, limit }: Product) => (
  <HStack alignItems="center" space={2} p={2} backgroundColor="white" w="100%">
    <Avatar source={{ uri }} borderColor="darkBlue.700" />
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

export const Products = () => {
  return (
    <VStack space={2} w="100%" h="100%">
      {products.map(product => (
        <Item {...product} key={product.id} />
      ))}
    </VStack>
  );
};

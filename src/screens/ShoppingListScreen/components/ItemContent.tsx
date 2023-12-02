import React from 'react';
import { Avatar, HStack, Text, VStack } from 'native-base';
import { ImageSourcePropType } from 'react-native';

import { Product } from '../../../types';

export interface ItemContentProps extends Product {
  count?: number;
  source?: ImageSourcePropType;
}

export const ItemContent = ({ name, unit, source, count }: ItemContentProps) => {
  return (
    <HStack alignItems="center" space={2} p={2} backgroundColor="white" w="100%" h="32">
      <Avatar bg="darkBlue.700" source={source} size="xl">
        {name.slice(0, 2)}
      </Avatar>
      <VStack alignItems="flex-start" flex={1}>
        <Text fontSize="lg" fontWeight="bold" bold color="coolGray.800">
          {name}
        </Text>
        <Text fontSize="xs" bold color="coolGray.600">
          10$
        </Text>
      </VStack>
      <VStack alignItems="stretch" justifyContent="flex-end" space={5}>
        <Text fontSize="lg" fontWeight="bold" bold color="coolGray.800">
          {count} {unit}
        </Text>
      </VStack>
    </HStack>
  );
};

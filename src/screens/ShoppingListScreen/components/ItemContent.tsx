import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { ImageSourcePropType } from 'react-native';

import { Avatar } from '../../../components';

import { Product } from '../../../types';

export interface ItemContentProps extends Product {
  count?: number;
  source?: ImageSourcePropType;
}

export const ItemContent = ({ name, unit, source, count, price, barcode }: ItemContentProps) => {
  return (
    <HStack alignItems="center" space={4} p={4} backgroundColor="white" w="100%" minHeight="32">
      <Avatar source={source} name={name} />
      <VStack alignItems="flex-start" flex={1}>
        <HStack marginBottom="2">
          <Text fontSize="xl" bold lineHeight="xs" color="coolGray.800">
            {name}: {count} {unit.toLowerCase()}
          </Text>
        </HStack>
        <Text fontSize="sm" bold color="coolGray.400">
          barcode: {barcode || '-'}
        </Text>
        <Text fontSize="sm" lineHeight="xs" bold color="darkBlue.700">
          price: {price} GEL
        </Text>
      </VStack>
    </HStack>
  );
};

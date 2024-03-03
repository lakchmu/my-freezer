import React, { useMemo } from 'react';
import { HStack, Text, VStack } from 'native-base';

import { Avatar } from '../../../components';
import { HelperService } from '../../../utils';

import { Product } from '../../../types';

export const ItemContent = ({ uri, name, unit, price, barcode, limit, amount }: Product) => {
  const source = useMemo(() => HelperService.getImageUrl(uri), [uri]);

  return (
    <HStack alignItems="center" space={4}>
      <Avatar source={source} name={name} />
      <VStack alignItems="flex-start" flex={1}>
        <HStack marginBottom="2">
          <Text fontSize="xl" bold lineHeight="xs" color="coolGray.800">
            {name}: {limit - amount} {unit.toLowerCase()}
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

import React, { useCallback, useEffect, useState } from 'react';
import { Stack, VStack, Heading } from 'native-base';

import { AppBar, Scanner } from '../../components';
import { getHttpClient } from '../../rest';
import { Product } from '../../types';
import { RootStackScreenProps } from '../../router/type';

import { Products } from '../HomeScreen/components/Products'; // TODO

export const SearchScreen = ({ navigation }: RootStackScreenProps<'Search'>) => {
  const [barcode, setBarcode] = useState<string>('');
  const [items, setItems] = useState<Product[]>([]);

  const getItems = useCallback(async () => {
    const httpClient = await getHttpClient({});
    const res = await httpClient.get(`/product?barcode=${barcode}`);
    setItems(res.data);
  }, [barcode]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar title="Search" onOpen={navigation.openDrawer} />
      <VStack w="100%" p="2" space={2}>
        <Heading mt="4" mb="6">
          Use barcode to find product
        </Heading>
        <Scanner value={barcode} setValue={setBarcode} />
        <Products products={items} />
      </VStack>
    </Stack>
  );
};

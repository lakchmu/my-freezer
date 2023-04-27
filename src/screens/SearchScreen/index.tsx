import React, { useCallback, useEffect, useState } from 'react';
import { Stack, VStack, Heading } from 'native-base';

import { AppBar, Scanner } from '../../components';
import { getHttpClient } from '../../rest';
import { Product } from '../../types';
import { RootStackScreen, RootStackScreenProps } from '../../router/type';

import { ProductList } from '../HomeScreen/components/ProductList'; // TODO

export const SearchScreen = ({}: RootStackScreenProps<RootStackScreen.SEARCH>) => {
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
      <AppBar currentScreen={RootStackScreen.SEARCH} />
      <VStack w="100%" p="2" space={2}>
        <Heading mt="4" mb="6">
          Use barcode to find product
        </Heading>
        <Scanner value={barcode} setValue={setBarcode} />
        <ProductList products={items} />
      </VStack>
    </Stack>
  );
};

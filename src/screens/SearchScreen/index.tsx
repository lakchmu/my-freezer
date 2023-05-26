import React, { useCallback, useEffect, useState } from 'react';
import { Stack, VStack, Heading, Text } from 'native-base';
import { debounce } from 'lodash';

import { AppBar, Scanner } from '../../components';
import { getHttpClient } from '../../rest';
import { Product } from '../../types';
import { RootStackScreen, RootStackScreenProps } from '../../router/type';

import { ProductList } from '../HomeScreen/components/ProductList'; // TODO

export const SearchScreen = ({}: RootStackScreenProps<RootStackScreen.SEARCH>) => {
  const [barcode, setBarcode] = useState<string>('');
  const [epmtyResult, setEpmtyResult] = useState<boolean>(false);
  const [items, setItems] = useState<Product[]>([]);

  const getItems = useCallback(async () => {
    const httpClient = await getHttpClient({});
    const res = await httpClient.get(`/product?barcode=${barcode}`);
    setItems(res.data);
    console.log(res.data);
    setEpmtyResult(barcode.length > 0 && !res.data.length);
  }, [barcode]);

  const debounceGet = useCallback(
    debounce(() => getItems(), 2000),
    [getItems],
  );

  useEffect(() => {
    if (barcode.length > 0) {
      debounceGet();
    } else {
      setItems([]);
    }
  }, [barcode, debounceGet]);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.SEARCH} />
      <VStack w="100%" p="2" space={2}>
        <Heading mt="4" mb="6">
          Use a barcode to find a product
        </Heading>
        <Scanner value={barcode} setValue={setBarcode} />
        {epmtyResult && <Text> There aren't product with the barcode: {barcode} </Text>}
        <ProductList products={items} />
      </VStack>
    </Stack>
  );
};

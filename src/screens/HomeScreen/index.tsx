import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Stack, VStack, Heading } from 'native-base';

import { AuthContext } from '../../store';
import { getHttpClient } from '../../rest';
import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar } from '../../components';

import { ProductList } from './components';

import type { Product } from '../../types';

export const HomeScreen = ({}: RootStackScreenProps<RootStackScreen.HOME>) => {
  const auth = useContext(AuthContext);
  const [items, setItems] = useState<Product[]>([]);

  const getItems = useCallback(async () => {
    const httpClient = await getHttpClient({});
    const res = await httpClient.get('/product');
    setItems(res.data);
  }, []);

  useEffect(() => {
    getItems();
  });

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.HOME} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          Welcome, {auth.state.name}!!!
        </Heading>
        <ProductList products={items} />
      </VStack>
    </Stack>
  );
};

import React, { useContext, useEffect, useState } from 'react';
import { Stack, VStack, Heading } from 'native-base';

import { AppBar } from '../../components';
import { AuthContext } from '../../store';
import { getHttpClient } from '../../rest';
import { Product } from '../../types';
import { RootStackScreenProps } from '../../router/type';

import { Products } from './components/Products';

export const HomeScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  const auth = useContext(AuthContext);
  const [items, setItems] = useState<Product[]>([]);

  const getItems = async () => {
    const httpClient = await getHttpClient({});
    const res = await httpClient.get('/product');
    setItems(res.data);
  };

  useEffect(() => {
    getItems();
  });

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar title="Home" onOpen={navigation.openDrawer} onSearch={() => navigation.navigate('Search', {})} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          Welcome, {auth.state.name}!!!
        </Heading>
        <Products products={items} />
      </VStack>
    </Stack>
  );
};

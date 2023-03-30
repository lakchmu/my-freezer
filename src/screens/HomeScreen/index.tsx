import React, { useContext, useEffect, useState } from 'react';
import { Stack, VStack, Heading } from 'native-base';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { AppBar } from '../../components';
import { AuthContext } from '../../store';
import { getHttpClient } from '../../rest';
import { Product } from '../../types';

import { Products } from './components/Products';

type DrawerParamList = {
  Home: {};
};

type HomeProps = DrawerScreenProps<DrawerParamList, 'Home'>;

export const HomeScreen = ({ navigation }: HomeProps) => {
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
      <AppBar title="Home" onOpen={navigation.openDrawer} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          Welcome, {auth.state.name}!!!
        </Heading>
        <Products products={items} />
      </VStack>
    </Stack>
  );
};

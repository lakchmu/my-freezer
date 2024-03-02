import React, { useContext } from 'react';
import { Stack, ScrollView, Heading } from 'native-base';

import { AuthContext, ProductsContext } from '../../store';
import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar } from '../../components';

import { ProductList } from './components';

export const HomeScreen = ({}: RootStackScreenProps<RootStackScreen.HOME>) => {
  const auth = useContext(AuthContext);
  const { state: produsts } = useContext(ProductsContext);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.HOME} />
      <ScrollView w="100%" p="2">
        <Heading mt="4" mb="6">
          Welcome, {auth.state.name}!!!
        </Heading>
        <ProductList products={produsts.list} />
      </ScrollView>
    </Stack>
  );
};

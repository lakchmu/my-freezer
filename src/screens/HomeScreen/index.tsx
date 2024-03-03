import React, { useContext } from 'react';
import { Stack, ScrollView, Heading } from 'native-base';

import { AuthContext, ProductsContext } from '../../store';
import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar, ItemsList } from '../../components';

import { ProductItem } from './components';

export const HomeScreen = ({}: RootStackScreenProps<RootStackScreen.HOME>) => {
  const auth = useContext(AuthContext);
  const { state: produsts } = useContext(ProductsContext);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.HOME} />
      <ScrollView>
        <Heading mt="6" mb="4" textAlign="center">
          Welcome, {auth.state.name}!!!
        </Heading>
        <ItemsList items={produsts.list} ItemComponent={ProductItem} />
      </ScrollView>
    </Stack>
  );
};

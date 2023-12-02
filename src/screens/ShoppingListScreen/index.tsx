import React, { useContext, useEffect } from 'react';
import { Stack, Heading } from 'native-base';

import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar } from '../../components';
import { ProductsContext } from '../../store';

import { List } from './components';

export const ShoppingListScreen = ({}: RootStackScreenProps<RootStackScreen.SHOPPINGLIST>) => {
  const { state: products, getShoppingList } = useContext(ProductsContext);

  useEffect(() => {
    getShoppingList();
  }, []);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.SHOPPINGLIST} />
      <Heading mt="4" mb="6">
        Shopping list
      </Heading>
      <List products={products.list} />
    </Stack>
  );
};

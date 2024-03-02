import React, { useContext, useEffect } from 'react';
import { Stack, Heading, ScrollView } from 'native-base';

import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar, ItemsList } from '../../components';
import { ProductsContext } from '../../store';

import { ItemContent } from './components';

export const ShoppingListScreen = ({}: RootStackScreenProps<RootStackScreen.SHOPPINGLIST>) => {
  const { state: products, getShoppingList } = useContext(ProductsContext);

  useEffect(() => {
    getShoppingList();
  }, []);

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.SHOPPINGLIST} />
      <ScrollView>
        <Heading mt="6" mb="4" textAlign="center">
          Shopping list
        </Heading>
        <ItemsList items={products.list} ItemComponent={ItemContent} />
      </ScrollView>
    </Stack>
  );
};

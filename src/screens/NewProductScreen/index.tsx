import React from 'react';
import { Heading, Stack, VStack } from 'native-base';

import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar } from '../../components';

import { Form } from './components';

export const NewProductScreen = ({}: RootStackScreenProps<RootStackScreen.NEWPRODUCT>) => {
  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.NEWPRODUCT} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          New Product
        </Heading>
        <Form />
      </VStack>
    </Stack>
  );
};

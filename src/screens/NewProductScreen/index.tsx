import React from 'react';
import { Heading, Stack, VStack } from 'native-base';

import { AppBar } from '../../components';
import { RootStackScreenProps } from '../../router/type';

import { Form } from './components';

export const NewProductScreen = ({ navigation }: RootStackScreenProps<'NewProduct'>) => {
  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar title="NewProduct" onOpen={navigation.openDrawer} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          New Product
        </Heading>
        <Form />
      </VStack>
    </Stack>
  );
};

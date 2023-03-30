import React from 'react';
import { Heading, Stack, VStack } from 'native-base';
import { DrawerScreenProps } from '@react-navigation/drawer';

import { AppBar } from '../../components';

import { Form } from './components';

type DrawerParamList = {
  NewProduct: {};
};

type NewProductProps = DrawerScreenProps<DrawerParamList, 'NewProduct'>;

export const NewProductScreen = ({ navigation }: NewProductProps) => {
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

import React from 'react';
import { Heading, Stack, VStack } from 'native-base';

import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { AppBar } from '../../components';

import { EditingForm } from './components';

export const EditProductScreen = ({ route, navigation }: RootStackScreenProps<RootStackScreen.EDITPRODUCT>) => {
  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.EDITPRODUCT} />
      <VStack w="100%" p="2">
        <Heading mt="4" mb="6">
          Edit Product
        </Heading>
        <EditingForm
          id={route.params.id}
          onCancel={navigation.goBack}
          onSubmit={() => navigation.navigate(RootStackScreen.HOME)}
        />
      </VStack>
    </Stack>
  );
};

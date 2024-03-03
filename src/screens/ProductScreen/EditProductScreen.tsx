import React, { useContext, useState } from 'react';
import { Heading, Stack, VStack, IconButton, Icon, Spinner, Text, HStack } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { RootStackScreen, RootStackScreenProps } from '../../router/type';
import { NotificationStatus, NotificationContext, ProductsContext } from '../../store';
import { AppBar } from '../../components';

import { EditingForm } from './components';

export const EditProductScreen = ({ route, navigation }: RootStackScreenProps<RootStackScreen.EDITPRODUCT>) => {
  const { remove } = useContext(ProductsContext);
  const { dispatch } = useContext(NotificationContext);
  const [removing, setRemoving] = useState<boolean>(false);

  const onRemove = async () => {
    try {
      setRemoving(true);
      await remove(route.params.id);
      dispatch({ show: true, text: 'The Product Was Deleted', status: NotificationStatus.SUCCESS });
    } catch (error: any) {
      dispatch({ show: true, text: error.message, status: NotificationStatus.ERROR });
    } finally {
      setRemoving(false);
    }
  };

  return (
    <Stack w="100%" h="100%" backgroundColor="gray.100">
      <AppBar currentScreen={RootStackScreen.EDITPRODUCT} />
      <VStack w="100%" p="2">
        <HStack justifyContent="space-between" justifyItems="center" mt="4" mb="6">
          <Heading fontSize="3xl" lineHeight="md">
            Edit Product
          </Heading>
          <Stack>
            {removing ? (
              <Spinner fontSize="md" color="red.600" />
            ) : (
              <IconButton
                onPress={onRemove}
                icon={<Icon size="md" as={SimpleLineIcons} name="trash" color="red.600" />}
                height="10"
              />
            )}
          </Stack>
        </HStack>
        <EditingForm
          id={route.params.id}
          onCancel={navigation.goBack}
          onSubmit={() => navigation.navigate(RootStackScreen.HOME)}
        />
      </VStack>
    </Stack>
  );
};

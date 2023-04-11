import React, { useContext } from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Pressable, VStack, Text, HStack, Divider, Image } from 'native-base';

import { AuthContext } from '../../store';
import { RootStackScreen } from '../type';

// if fridge image is used in prod it will need to add "Image by user15245033 on Freepik"

const MapScreenNameLabel = {
  [RootStackScreen.LOGIN]: 'Login',
  [RootStackScreen.HOME]: 'Home',
  [RootStackScreen.SEARCH]: 'Search',
  [RootStackScreen.NEWPRODUCT]: 'Add New Product',
};

export const DrawerContent = (props: DrawerContentComponentProps) => {
  const { state } = useContext(AuthContext);

  const getScreenNameLabel = (name: string) => {
    if (!Object.keys(MapScreenNameLabel).includes(name)) {
      return '';
    }

    return MapScreenNameLabel[name as RootStackScreen];
  };
  return (
    <DrawerContentScrollView {...props}>
      <VStack w="100%">
        <VStack space="2" px="2" pt="8" pb="3" justifyContent="center" alignItems="center" w="100%">
          <Image source={require('../../assets/fridge.jpg')} alt="Smile fridge" resizeMode="contain" size="xl" />
          <Text fontSize="18" mt="2" color="primary.600" fontWeight="700">
            Welcome {state.name}!
          </Text>
        </VStack>
        <VStack space="2" p="2">
          <Divider />
          <VStack space="3">
            {props.state.routeNames.map(
              (name, index) =>
                name !== RootStackScreen.SEARCH && (
                  <Pressable
                    px="5"
                    py="3"
                    rounded="md"
                    bg={index === props.state.index ? 'rgba(6, 182, 212, 0.1)' : 'transparent'}
                    onPress={() => props.navigation.navigate(name)}
                    key={name}>
                    <HStack space="7" alignItems="center">
                      <Text
                        fontWeight="500"
                        color={index === props.state.index ? 'primary.500' : 'muted.800'}
                        letterSpacing="md"
                        fontSize="md">
                        {getScreenNameLabel(name)}
                      </Text>
                    </HStack>
                  </Pressable>
                ),
            )}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
};

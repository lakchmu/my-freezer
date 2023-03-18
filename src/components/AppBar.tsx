import React from 'react';
import { Box, HStack, Icon, IconButton, StatusBar, Text, useDisclose } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Actionsheet } from './Actionsheet';

export interface AppBarProps {
  title: string;
}

export const AppBar = ({ title }: AppBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <StatusBar backgroundColor="#164e63" barStyle="light-content" />
      <Box safeAreaTop bg="primary.900" />
      <HStack bg="primary.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <>
            <IconButton
              onPress={() => onOpen()}
              icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />}
            />
            <Actionsheet isOpen={isOpen} onClose={onClose} />
          </>
          <Text color="white" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </>
  );
};

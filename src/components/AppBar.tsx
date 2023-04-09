import React from 'react';
import { Box, HStack, Icon, IconButton, StatusBar, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { BaseScreenNavigationProp, RootStackScreen } from '../router/type';

export interface AppBarProps {
  title?: string;
  currentScreen: RootStackScreen;
}

export function AppBar({ title, currentScreen }: AppBarProps) {
  const { openDrawer, navigate } = useNavigation<BaseScreenNavigationProp<typeof currentScreen>>();

  const onOpen = () => openDrawer();
  const onSearch = () => navigate(RootStackScreen.SEARCH);

  return (
    <LinearGradient colors={['#899BAE', '#5D7690', '#002851']} start={{ x: 0, y: 0 }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <>
            <IconButton onPress={onOpen} icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          </>
          <Text color="white" fontSize="20" fontWeight="bold">
            {title || 'My Feezer'}
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton onPress={onSearch} icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
    </LinearGradient>
  );
}

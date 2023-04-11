import React from 'react';
import { Box, HStack, Icon, IconButton, StatusBar } from 'native-base';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { BaseScreenNavigationProp, RootStackScreen } from '../router/type';

export interface AppBarProps {
  currentScreen: RootStackScreen;
}

export function AppBar({ currentScreen }: AppBarProps) {
  const { openDrawer, navigate } = useNavigation<BaseScreenNavigationProp<typeof currentScreen>>();

  const onOpen = () => openDrawer();
  const onSearch = () => navigate(RootStackScreen.SEARCH);

  return (
    <LinearGradient colors={['#899BAE', '#5D7690', '#002851']} start={{ x: 0, y: 0 }}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack px="2" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="baseline">
          <IconButton onPress={onOpen} icon={<Icon size="lg" as={SimpleLineIcons} name="menu" color="white" />} />
        </HStack>
        <HStack alignItems="baseline" space={1}>
          <IconButton icon={<Icon as={SimpleLineIcons} name="heart" size="lg" color="white" />} />
          <IconButton
            onPress={onSearch}
            icon={<Icon as={SimpleLineIcons} name="magnifier" size="lg" color="white" />}
          />
        </HStack>
      </HStack>
    </LinearGradient>
  );
}

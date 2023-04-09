import type { CompositeNavigationProp, CompositeScreenProps } from '@react-navigation/native';
import type { DrawerScreenProps, DrawerNavigationProp } from '@react-navigation/drawer';
import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export enum RootStackScreen {
  LOGIN = 'Login',
  HOME = 'Home',
  SEARCH = 'Search',
  NEWPRODUCT = 'NewProduct',
}

export type RootStackParamList = {
  [RootStackScreen.LOGIN]: undefined;
  [RootStackScreen.HOME]: undefined;
  [RootStackScreen.SEARCH]: undefined;
  [RootStackScreen.NEWPRODUCT]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = DrawerScreenProps<RootStackParamList, T>;

export type BaseTabParamList = {};

export type BaseTabScreenProps<T extends keyof BaseTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<BaseTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type BaseScreenNavigationProp<T extends keyof RootStackParamList> = CompositeNavigationProp<
  BottomTabNavigationProp<RootStackParamList, T>,
  DrawerNavigationProp<RootStackParamList, T>
>;

import type { CompositeScreenProps } from '@react-navigation/native';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Search: undefined;
  NewProduct: undefined;
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

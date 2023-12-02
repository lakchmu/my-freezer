import React, { useCallback, useContext, useEffect } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import {
  EditProductScreen,
  HomeScreen,
  LoginScreen,
  NewProductScreen,
  SearchScreen,
  ShoppingListScreen,
} from '../../screens';
import AuthContext from '../../store/auth/state';

import { RootStackParamList, RootStackScreen } from '../type';

import { DrawerContent } from './DrawerContent';

const DrawerNavigator = createDrawerNavigator<RootStackParamList>();

export const Drawer = () => {
  const auth = useContext(AuthContext);

  const getContent = useCallback((props: DrawerContentComponentProps) => <DrawerContent {...props} />, []);

  useEffect(() => {
    console.log('User isAuthorized: ', auth.state.isAuthorized);
  }, [auth.state.isAuthorized]);

  return (
    <DrawerNavigator.Navigator drawerContent={getContent} screenOptions={{ headerShown: false }}>
      {auth.state.isAuthorized ? (
        <>
          <DrawerNavigator.Screen name={RootStackScreen.HOME} component={HomeScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.SEARCH} component={SearchScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.NEWPRODUCT} component={NewProductScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.EDITPRODUCT} component={EditProductScreen} />
          <DrawerNavigator.Screen name={RootStackScreen.SHOPPINGLIST} component={ShoppingListScreen} />
        </>
      ) : (
        <DrawerNavigator.Screen name={RootStackScreen.LOGIN} component={LoginScreen} />
      )}
    </DrawerNavigator.Navigator>
  );
};

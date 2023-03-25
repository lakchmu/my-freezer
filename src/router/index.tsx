import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, HomeScreen } from '../screens';
import AuthContext from '../store/auth/state';
import { Drawer } from '../components';

const Stack = createNativeStackNavigator();

const Router = () => {
  const auth = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        {auth.state.isAuthorized ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator> */}
      <Drawer />
    </NavigationContainer>
  );
};

export default Router;

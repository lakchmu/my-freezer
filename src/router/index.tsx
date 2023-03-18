import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthContext from '../store/auth/state';

const Stack = createNativeStackNavigator();

const Router = () => {
  const auth = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {auth.state.isAuthorized ? (
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Drawer } from './Drawer';

const Router = () => {
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

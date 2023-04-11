import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Drawer } from './components/Drawer';

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default Router;

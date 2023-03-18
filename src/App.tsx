import React from 'react';
import { NativeBaseProvider } from 'native-base';

import Router from './router';
import { AuthProvider } from './store';

const App = () => {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NativeBaseProvider>
  );
};

export default App;

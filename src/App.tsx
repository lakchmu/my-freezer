import React from 'react';

import Router from './router';
import { AuthProvider } from './store';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;

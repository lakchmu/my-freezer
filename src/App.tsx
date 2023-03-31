import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import Router from './router';
import { AuthProvider } from './store';
import { NotificationProvider } from './store/useNotification';
import { Notification } from './components';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#DBF4FF',
        100: '#ADDBFF',
        200: '#7CC2FF',
        300: '#4AA9FF',
        400: '#1A91FF',
        500: '#0077E6',
        600: '#005DB4',
        700: '#004282',
        800: '#002851',
        900: '#000E21',
      },
    },
    fontConfig: {
      Inter: {
        100: {
          normal: 'Inter-Light',
        },
        200: {
          normal: 'Inter-Light',
        },
        300: {
          normal: 'Inter-Light',
        },
        400: {
          normal: 'Inter-Regular',
        },
        500: {
          normal: 'Inter-Medium',
        },
        600: {
          normal: 'Inter-Medium',
        },
        700: {
          normal: 'Inter-Bold',
        },
        800: {
          normal: 'Inter-Bold',
        },
        900: {
          normal: 'Inter-Bold',
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Inter',
      body: 'Inter',
      mono: 'Inter',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <NotificationProvider>
          <Router />
          <Notification />
        </NotificationProvider>
      </AuthProvider>
    </NativeBaseProvider>
  );
};

export default App;

import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { authService } from '../../rest';
import { TokenService } from '../../utils';
import { AuthContext } from '../../store';

const LoginScreen = () => {
  const auth = useContext(AuthContext);

  const onPress = async () => {
    const {
      data: { email, name },
      Authorization,
    } = await authService.login({
      email: 'lakchmu@gmail.com',
      password: '123',
    });
    auth.dispatch({
      email,
      name,
      isAuthorized: true,
    });
    await TokenService.setUserToken(Authorization);
  };

  return (
    <View style={style.root}>
      <Text>Login to your Account</Text>
      <Button
        onPress={onPress}
        title="Login"
        accessibilityLabel="Login button"
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  input: {
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  inputWrapper: {
    width: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});

export default LoginScreen;

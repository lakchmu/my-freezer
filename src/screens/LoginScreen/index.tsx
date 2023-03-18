import React, { useContext } from 'react';
import { Text, Stack, Input, Icon, Pressable, Button } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

import { authService } from '../../rest';
import { TokenService } from '../../utils';
import { AuthContext } from '../../store';

const LoginScreen = () => {
  const auth = useContext(AuthContext);

  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const onPress = async () => {
    try {
      const { data, Authorization } = await authService.login({ email, password });
      auth.dispatch({
        email: data.email,
        name: data.name,
        isAuthorized: true,
      });
      await TokenService.setUserToken(Authorization);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <Stack
      space={2}
      w={{ base: '75%', md: '25%' }}
      h="100%"
      alignContent="center"
      justifyContent="center"
      margin="auto">
      <Text fontSize="2xl" letterSpacing="xl" color="muted.700" mb="2" alignSelf="center">
        Login to your Account
      </Text>
      <Input
        textContentType="emailAddress"
        InputRightElement={<Icon as={Entypo} name="user" size={5} mr="2" color="muted.400" />}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        textContentType="password"
        type={show ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon as={<Entypo name={show ? 'eye' : 'eye-with-line'} />} size={5} mr="2" color="muted.400" />
          </Pressable>
        }
        placeholder="Password"
        secureTextEntry={!show}
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={onPress} accessibilityLabel="Login button">
        Login
      </Button>
      {error && (
        <Text color="error.700" alignSelf="flex-start" mt="2">
          Username or password is incorrect. Try again
        </Text>
      )}
    </Stack>
  );
};

export default LoginScreen;

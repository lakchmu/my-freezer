import React, { useContext } from 'react';
import { Text, Stack, Input, Icon, Pressable, Button } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

import { authService } from '../../rest';
import { TokenService } from '../../utils';
import { AuthContext } from '../../store';

export const LoginScreen = () => {
  const auth = useContext(AuthContext);

  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [email, setEmail] = React.useState<string>('lakchmu@gmail.com');
  const [password, setPassword] = React.useState<string>('123');

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
      console.error(e);
    }
  };

  return (
    <LinearGradient colors={['#fff', '#002851']}>
      <Stack space={4} w="100%" h="100%" px={6} alignContent="center" justifyContent="center" margin="auto">
        <Text fontSize="2xl" letterSpacing="xl" color="white" mb="8" alignSelf="center">
          Login to your Account
        </Text>
        <Input
          textContentType="emailAddress"
          InputRightElement={<Icon as={Entypo} name="user" size={5} mr="2" color="white" />}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          variant="underlined"
          color="white"
          borderColor="white"
          size="2xl"
        />
        <Input
          textContentType="password"
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon as={<Entypo name={show ? 'eye' : 'eye-with-line'} />} size={5} mr="2" color="white" />
            </Pressable>
          }
          placeholder="Password"
          secureTextEntry={!show}
          value={password}
          onChangeText={setPassword}
          variant="underlined"
          color="white"
          borderColor="white"
          size="2xl"
        />
        <Button
          onPress={onPress}
          accessibilityLabel="Login button"
          variant="outline"
          size="lg"
          _text={{ color: 'white' }}
          borderColor="white"
          mt={4}>
          Login
        </Button>
        {error && (
          <Text color="error.700" alignSelf="flex-start" mt="2">
            Username or password is incorrect. Try again
          </Text>
        )}
      </Stack>
    </LinearGradient>
  );
};

import React, { useContext } from 'react';
import { Alert } from 'react-native';
import { Stack, Button, Container, Heading } from 'native-base';

import { AppBar } from '../../components';
import { getHttpClient } from '../../rest';
import { AuthContext } from '../../store';

export const HomeScreen = () => {
  const auth = useContext(AuthContext);

  const onPress = async () => {
    const httpClient = await getHttpClient();
    const res = await httpClient.get('/test');
    Alert.alert(res.data);
  };

  return (
    <Stack w="100%" h="100%">
      <AppBar title="Home" />
      <Container w="100%" p="2">
        <Heading mt="4" mb="6">
          Welcome, {auth.state.name}!!!
        </Heading>
        <Button w="100%" onPress={onPress}>
          Test
        </Button>
      </Container>
    </Stack>
  );
};

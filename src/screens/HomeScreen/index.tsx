import React, { useContext } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import { getHttpClient } from '../../rest';
import { AuthContext } from '../../store';

const HomeScreen = () => {
  const auth = useContext(AuthContext);

  const onPress = async () => {
    const httpClient = await getHttpClient();
    const res = await httpClient.get('/test');
    Alert.alert(res.data);
  };

  return (
    <View style={style.root}>
      <Text>Welcome, {auth.state.name}!!!</Text>
      <Button
        onPress={onPress}
        title="Test"
        color="#841584"
        accessibilityLabel="Login button"
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;

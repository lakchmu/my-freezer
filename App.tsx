import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={style.root}>
      <Text>Hello, world!!!</Text>
    </View>
  );
};

const style = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default App;

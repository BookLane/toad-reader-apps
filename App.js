import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>react-intl</Text>
        <Text>redux + react-redux + redux-persist</Text>
        <Text>react-native-elements</Text>
        <Text>clear code structure</Text>
        <Text>development cycle</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

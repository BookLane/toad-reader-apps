import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Root } from "native-base";

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  
  render() {
    return (
      <Root>
        <View style={styles.container}>
          <Text>native-base</Text>
          <Text>react-navigation</Text>
          <Text>redux + react-redux + redux-persist</Text>
          <Text>react-intl</Text>
          <Text>Downloading and saving books</Text>
          <Text>
            Shared stuff:
              Data fetches and saving (redux + redux-persist)
              Progress bar data
              Search query
              Footnote extraction
          </Text>
          <Text>development cycle</Text>
        </View>
      </Root>
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

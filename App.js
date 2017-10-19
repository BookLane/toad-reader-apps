import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Expo from "expo";

import allReducers from './src/reducers/all.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Root } from "native-base"

import Counter from './src/components/Counter.js'

const store = createStore(allReducers)

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    })
    this.setState({ isReady: true });
  }
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Root>
        <Provider store= {store}>
          <Counter />
        </Provider>
      </Root>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })

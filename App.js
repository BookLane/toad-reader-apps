import React from 'react'
import Expo from "expo";
import { Root } from "native-base"

import allReducers from './src/reducers/all.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import HomeNavigator from './src/navigators/Home.js'

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
          <HomeNavigator />
        </Provider>
      </Root>
    )
  }
}
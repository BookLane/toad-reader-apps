import React from 'react'
import Expo from "expo";
import { Root } from "native-base"

import { AsyncStorage } from 'react-native'
import { createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import allReducers from './src/reducers/all.js'
import { Provider } from 'react-redux'

import GlobalNavigator from './src/navigators/Global.js'

const store = compose(autoRehydrate())(createStore)(allReducers)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    const numPrepItems = 0

    let prepCount = 0
    const prepActionComplete = () => {
      if(++prepCount >= numPrepItems) {
        this.setState({ isReady: true })
      }
    }

    persistStore(store, {storage: AsyncStorage}, prepActionComplete)
        
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    })
    prepActionComplete()
  }
  
  render() {

    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }

    return (
      <Root>
        <Provider store={store}>
          <GlobalNavigator />
        </Provider>
      </Root>
    )
  }
}
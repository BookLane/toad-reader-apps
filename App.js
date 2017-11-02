import React from "react"
import Expo from "expo";
import { Root } from "native-base"

import { AsyncStorage } from "react-native"
import { createStore, compose } from "redux"
import { persistStore, autoRehydrate } from "redux-persist"
import reducers from "./src/redux/reducers.js"
import { Provider } from "react-redux"

import GlobalNavigator from "./src/navigators/Global.js"

import updateReader from "./src/utils/updateReader.js"

const store = compose(autoRehydrate())(createStore)(reducers)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Promise.all([
      new Promise(resolve => persistStore(store, {storage: AsyncStorage}, resolve)),
      Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      }),
      updateReader(),
    ])

    this.setState({ isReady: true })
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
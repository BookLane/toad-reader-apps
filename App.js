import React from "react"
import Expo from "expo";
import { Root } from "native-base"

import { AsyncStorage } from "react-native"
import { createStore, compose, applyMiddleware } from "redux"
import { persistStore, autoRehydrate } from "redux-persist"
import reducers from "./src/redux/reducers.js"
import { Provider } from "react-redux"

import GlobalNavigator from "./src/navigators/Global.js"

import updateDataStructure from "./src/utils/updateDataStructure.js"
import { patch } from "./src/utils/syncUserData.js"

const patchMiddleware = store => next => action => {
  const result = next(action)
  if(action.patchInfo) {
    patch({
      ...action.patchInfo,
      ...store.getState(),
    })
  }
  return result
}

const store = compose(autoRehydrate())(createStore)(reducers, applyMiddleware(patchMiddleware))

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Promise.all([
      new Promise(resolve => persistStore(store, {storage: AsyncStorage}, resolve)),
      Expo.Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      }),
    ])
    
    await updateDataStructure()  // needs to be after the persistStore call above

    this.setState({ isReady: true })

    // no need to wait for the following, but preload anyway
    // Expo.Asset.fromModule(require('./assets/images/drawer.png')).downloadAsync(),
    // the above line was causing a crash in development mode
  }

  render() {
    const { isReady } = this.state

    if(!isReady) {
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
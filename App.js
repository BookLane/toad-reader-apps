import React from "react"
// import { AppLoading } from "expo"
import * as Font from 'expo-font'
import { Root } from "native-base"

import { AsyncStorage, View, Text } from "react-native"
import { Router } from "./src/components/routers/react-router"
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react'
import reducers from "./src/redux/reducers.js"
import { Provider } from "react-redux"

import updateDataStructure from "./src/utils/updateDataStructure.js"
import { patch, reportReadings } from "./src/utils/syncUserData.js"

import Library from "./src/components/screens/Library"

const patchMiddleware = store => next => action => {
  const result = next(action)
  if(action.patchInfo) {
    patch({
      ...action.patchInfo,
      ...store.getState(),
    })
  }
  if(action.reportReadingsInfo) {
    reportReadings({
      ...action.reportReadingsInfo,
      ...store.getState(),
    })
  }
  return result
}

// const store = compose(autoRehydrate())(createStore)(reducers, applyMiddleware(patchMiddleware))

const persistConfig = {
  key: "root",    
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(patchMiddleware))
const persistor = persistStore(store)

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  async componentWillMount() {
    await Promise.all([
      Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      }),
    ])
    
    await updateDataStructure()  // needs to be after the persistStore call above

    this.setState({ isReady: true })

    // no need to wait for the following, but preload anyway
    // Asset.fromModule(require('./assets/images/drawer.png')).downloadAsync(),
    // the above line was causing a crash in development mode
  }

  render() {
    const { isReady } = this.state

    if(!isReady) {
      return <View><Text>Loading</Text></View>
      // return <AppLoading />
    }

    return (
      <Root>
        <PersistGate 
          persistor={persistor} 
          //loading={<AppLoading />}
        >
          <Provider store={store}>
            <Router>
              <Library />
            </Router>
          </Provider>
        </PersistGate>
      </Root>
    )
  }
}

/*

  Navigation:
    - /library
      - /library/drawer
        - /library/drawer/accounts
      - /library/book/:id  (reading mode, or page chooser if there are conflicting latest pages)
        - /library/book/:id/search
          - /library/book/:id/search/:searchStr
        - /library/book/:id/page-browser
        - /library/book/:id/display-settings
        - /library/book/:id/highlights
        - /library/book/:id/tool/:toolId
          - /library/book/:id/tool/:toolId/question/1
          - ... [ depends on the tool ]
        - /library/book/:id/creating-classroom
        - /library/book/:id/student-admin
          - /library/book/:id/student-admin/connecting
          - /library/book/:id/student-admin/analytics
            - /library/book/:id/student-admin/analytics/reading
            - ...
          - /library/book/:id/student-admin/scores
          - /library/book/:id/student-admin/polls
          - /library/book/:id/student-admin/discussions  (shows same content as /library/book/:id/discussions?)
        - /library/book/:id/front-matter
          - /library/book/:id/front-matter/syllabus
          - /library/book/:id/front-matter/reading-schedule
          - /library/book/:id/front-matter/instructors-introduction
          - /library/book/:id/front-matter/options
        - /library/book/:id/my-scores
        - /library/book/:id/discussions

  Navigation add-ons (can be appended to multiple routes)
    - /help
      - /help/creating-a-classroom
      - /help/connecting
      ...
    - /toc  (added on to /library/book/:id+)
    - /error

*/
import React, { useState, useCallback, useEffect } from "react"
import Constants from 'expo-constants'
import './src/themes/style'
// import * as Font from 'expo-font'

import { AppLoading } from "expo"
import { AsyncStorage, Platform } from "react-native"
import { Router } from "./src/components/routers/react-router"
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react'
import reducers from "./src/redux/reducers"
import { Provider } from "react-redux"
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { mapping } from "@eva-design/eva"
import { ApplicationProvider } from "react-native-ui-kitten"
import lightTheme from "./src/themes/light"
import darkTheme from "./src/themes/dark"
import contrastTheme from "./src/themes/contrast"
import customMapping from "./src/themes/custom-mapping"

import updateDataStructure from "./src/utils/updateDataStructure"
import { patch, reportReadings } from "./src/utils/syncUserData"

import { i18nSetup } from "inline-i18n"
import translations from "./src/utils/translations/current.json"
import { getDataOrigin } from './src/utils/toolbox'

import Library from "./src/components/screens/Library"
import CoverAndSpin from "./src/components/basic/CoverAndSpin"

const {
  LANGUAGE_CODE='en',
  IDPS,
} = Constants.manifest.extra

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

const themes = { lightTheme, darkTheme, contrastTheme }

// const store = compose(autoRehydrate())(createStore)(reducers, applyMiddleware(patchMiddleware))

const persistConfig = {
  key: "root",    
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(patchMiddleware))
const persistor = persistStore(store)

window.baseHashInHistory = (Platform.OS === 'web' && location.hash) || '#/'

const App = () => {

  const [ isReady, setIsReady ] = useState(false)
  const [ theme, setTheme ] = useState('lightTheme')

  const changeTheme = useCallback(
    theme => {
      if(!themes[theme]) return
      setTheme(theme)
    },
    [],
  )

  useEffect(
    () => {
      (async () => {

        // re-route old links
        if(Platform.OS === 'web' && !/^\/?$/.test(location.pathname)) {
          if(/^\/book\/[0-9]+$/.test(location.pathname)) {
            const query = {}
        
            location.search.substring(1)
              .split('&')
              .filter(Boolean)
              .forEach(param => {
                const paramPieces = param.split("=")
                if(paramPieces[0]) {
                  query[decodeURI(paramPieces[0])] = decodeURI(paramPieces.slice(1))
                }
              })
        
            if(query.highlight) {  // it is a share quote
              location.href = `${getDataOrigin(Object.values(IDPS)[0])}${location.pathname}${location.search}`
            } else if(query.goto) {
              location.href = `${location.origin}/#${location.pathname}#${query.goto.replace('idref', 'spineIdRef').replace('elementCfi', 'cfi')}`
            } else {
              location.href = `${location.origin}/#${location.pathname}`
            }
        
          } else {
            location.href = `${location.origin}/#/`
          }

          return
        }

        await updateDataStructure()  // needs to be after the persistStore call above

        await i18nSetup({
          locales: [ LANGUAGE_CODE ],
          fetchLocale: async locale => translations,
        })

        setIsReady(true)

        // no need to wait for the following, but preload anyway
        // Asset.fromModule(require('./assets/images/drawer.png')).downloadAsync(),
        // the above line was causing a crash in development mode
      })()
    },
    [],
  )

  const Loading = Platform.OS === 'web' ? CoverAndSpin : AppLoading

  if(!isReady) {
    return <Loading />
  }

  return (
    <Router>
      <ApplicationProvider
        mapping={mapping}
        customMapping={customMapping}
        theme={themes[theme]}
      >
        <SafeAreaProvider>
          <Provider store={store}>
            <PersistGate 
              persistor={persistor} 
              loading={<Loading />}
            >
              <Library changeTheme={changeTheme} />
            </PersistGate>
          </Provider>
        </SafeAreaProvider>
      </ApplicationProvider>
    </Router>
  )
}

export default App

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
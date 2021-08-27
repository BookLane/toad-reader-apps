import React, { useState, useEffect } from "react"
import Constants from 'expo-constants'
import AppLoading from 'expo-app-loading'
import * as SplashScreen from 'expo-splash-screen'
import * as Updates from 'expo-updates'
import { Platform, StatusBar } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Router } from "./src/components/routers/react-router"
import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from "react-redux"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { mapping } from "@eva-design/eva"
import { ApplicationProvider } from "@ui-kitten/components"
import { i18nSetup } from "inline-i18n"

import './src/themes/style'
import reducers from "./src/redux/reducers"
import lightTheme from "./src/themes/light"
import darkTheme from "./src/themes/dark"
import customMapping from "./src/themes/custom-mapping"
import updateDataStructure from "./src/utils/updateDataStructure"
import { setStore, patch, reportReadings } from "./src/utils/syncUserData"
import translations from "./src/utils/translations/current.json"
import { getDataOrigin, setStatusBarHidden, getQueryString } from './src/utils/toolbox'
import { loadIconFonts } from "./src/components/basic/Icon"
import useSetTimeout from './src/hooks/useSetTimeout'
import usePushNotificationsSetup from "./src/hooks/usePushNotificationsSetup"
import * as Sentry from "./src/utils/sentry"
import { logEvent } from "./src/utils/analytics"

import Splash from "./src/components/major/Splash"
import Library from "./src/components/screens/Library"
import CoverAndSpin from "./src/components/basic/CoverAndSpin"

const {
  LANGUAGE_CODE='en',
  IDPS,
  SENTRY_DSN,
} = Constants.manifest.extra

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  release: Constants.manifest.revisionId,
  debug: true,
})

if(Platform.OS === 'web') {
  window.productionLog = (...params) => {
    eval(`console.log("PRODUCTION LOG: ", ${params.map(param => `"${String(param).replace(/"/g, '\\"')}"`).join(',')})`)
  }
}

const patchMiddleware = store => next => action => {
  const result = next(action)
  if(action.doPatch) {
    patch()
  }
  if(action.doReportReadings) {
    reportReadings()
  }
  return result
}

const themes = { lightTheme, darkTheme }

// const store = compose(autoRehydrate())(createStore)(reducers, applyMiddleware(patchMiddleware))

const persistConfig = {
  key: "root",    
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(persistedReducer, applyMiddleware(patchMiddleware))
const persistor = persistStore(store)
setStore(store)

if(Platform.OS === 'android') StatusBar.setTranslucent(false)  // This line shouldn't be needed after I push new apps out to the app stores for all clients
SplashScreen.preventAutoHideAsync()

const App = () => {

  const [ isFirstRender, setIsFirstRender ] = useState(true)
  const [ showDelayText, setShowDelayText ] = useState(false)
  const [ isLoaded, setIsLoaded ] = useState(false)
  const [ updateExists, setUpdateExists ] = useState(false)
  const [ isReady, setIsReady ] = useState(false)

  // TODO: Install and test (expo install react-native-appearance)
  const colorScheme = 'light' // useColorScheme()

  const [ setInitialOpenTimeout ] = useSetTimeout()

  usePushNotificationsSetup()

  useEffect(() => { logEvent({ eventName: `Open app` }) }, [])

  useEffect(() => { setIsFirstRender(false) }, [])

  useEffect(
    () => {
      (async () => {

        let initialTasksComplete = false
        let newVersionCheckComplete = false

        // record number of opens
        const numUserOpensKey = `numUserOpens`
        const numUserOpens = (parseInt(await AsyncStorage.getItem(numUserOpensKey), 10) || 0) + 1
        await AsyncStorage.setItem(numUserOpensKey, `${numUserOpens}`)

        if(Platform.OS !== 'web' && !__DEV__ && numUserOpens === 1) {
          setShowDelayText(true)
        }

        const setIsReadyIfReady = force => {
          if(
            force
            || (
              initialTasksComplete
              && newVersionCheckComplete
            )
          ) {

            setIsReady(true)

          }
        }

        if(Platform.OS !== 'web' && !__DEV__) {
          // listen for a new version
          Updates.addListener(
            ({ type }) => {
              if(type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
                setUpdateExists(true)
              }

              if(
                [
                  Updates.UpdateEventType.NO_UPDATE_AVAILABLE,
                  Updates.UpdateEventType.ERROR,
                  Updates.UpdateEventType.UPDATE_AVAILABLE,
                ].includes(type)
              ) {
                newVersionCheckComplete = true
                setIsReadyIfReady()
              }
            }
          )
        }

        const query = getQueryString()

        // re-route old links
        if(Platform.OS === 'web' && /^\/book\/[0-9]+$/.test(window.location.pathname)) {

          if(query.highlight) {  // it is a share quote
            window.history.replaceState({}, document.title, `${getDataOrigin(Object.values(IDPS)[0])}${window.location.pathname}${window.location.search}`)

          } else if(query.goto) {
            try {
              const { idref: spineIdRef, elementCfi: cfi } = JSON.parse(query.goto)

              query.latestLocation = {
                spineIdRef,
                cfi,
              }
            } catch(e) {}

            delete query.goto

            window.history.replaceState({}, document.title, `${window.location.origin}/#${window.location.pathname}#${encodeURIComponent(JSON.stringify(query))}`)

          } else {
            window.history.replaceState({}, document.title, `${window.location.origin}/#${window.location.pathname}`)
          }

          window.location.reload()

          return

        }

        // remove query string (coming from google analytics and the like)
        if(Platform.OS === 'web' && window.location.search && !query.loginInfo) {
          window.history.replaceState({}, document.title, window.location.href.replace(/\?[^#]*/, ''))
        }

        await Promise.all([
          loadIconFonts(),
          updateDataStructure(),  // needs to be after the persistStore call above
        ])

        await i18nSetup({
          locales: [ LANGUAGE_CODE ],
          fetchLocale: async locale => translations,
        })

        setStatusBarHidden(false)

        setIsLoaded(true)

        initialTasksComplete = true

        if(Platform.OS !== 'web' && !__DEV__ && numUserOpens === 1 && !newVersionCheckComplete) {
          // only wait for 6 seconds at most
          setInitialOpenTimeout(() => setIsReadyIfReady(true), 1000*5)
        } else {
          setIsReadyIfReady(true)
        }

        // no need to wait for the following, but preload anyway
        // Asset.fromModule(require('./assets/images/drawer.png')).downloadAsync(),
        // the above line was causing a crash in development mode
      })()
    },
    [],
  )

  const Loading = Platform.OS === 'web' ? CoverAndSpin : AppLoading

  if(isFirstRender) {
    // needed to prevent an ugly flash on android
    return <Loading />
  }

  return (
    <>
      {!!isLoaded &&
        <Router>
          <ApplicationProvider
            mapping={mapping}
            customMapping={customMapping}
            theme={colorScheme === 'dark' ? darkTheme : lightTheme}
          >
            <SafeAreaProvider>
              <Provider store={store}>
                <PersistGate persistor={persistor}>
                  <Library />
                </PersistGate>
              </Provider>
            </SafeAreaProvider>
          </ApplicationProvider>
        </Router>
      }
      {Platform.OS !== 'web' &&
        <Splash
          showDelayText={showDelayText}
          isReady={isReady}
          updateExists={updateExists}
        />
      }
      {Platform.OS === 'web' && !isLoaded &&
        <Loading />
      }
    </>
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
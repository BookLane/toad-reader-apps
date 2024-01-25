import React, { useState, useEffect, useLayoutEffect, useCallback } from "react"
import Constants from 'expo-constants'
import * as ScreenOrientation from 'expo-screen-orientation'
import { Platform, StyleSheet, View, Text, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import usePrevious from "react-use/lib/usePrevious"
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { updateReader } from "../../utils/updateReader"
import useRouterState from "../../hooks/useRouterState"
import { getReqOptionsWithAdditions, getDataOrigin, getIdsFromAccountId, safeFetch,
         isStaging, isBeta, dashifyDomain, getQueryString, getIDPOrigin, openURL } from "../../utils/toolbox"
import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub"
import useInstanceValue from "../../hooks/useInstanceValue"
import useNetwork from "../../hooks/useNetwork"
import useHasNoAuth from "../../hooks/useHasNoAuth"
import useWideMode from "../../hooks/useWideMode"
import usePushToken from "../../hooks/usePushToken"
import usePushNotifications from "../../hooks/usePushNotifications"
import useLoggedInUser from "../../hooks/useLoggedInUser"
import { setUser } from "../../utils/analytics"

import { Switch, Route } from "../routers/react-router"
import SafeLayout from "../basic/SafeLayout"
import Button from "../basic/Button"
import BookImporter from "../major/BookImporter"
import AccessCodeDialog from "../major/AccessCodeDialog"
import MetadataDialog from "../major/MetadataDialog"
import AudiobookDialog from "../major/AudiobookDialog"
import CopyToolsDialog from "../major/CopyToolsDialog"
import SubscriptionsDialog from "../major/SubscriptionsDialog"
import BookWrapper from "./BookWrapper"
import Reports from "./Reports"
import DeleteMyAccount from "./DeleteMyAccount"
import Users from "./Users"
import ErrorMessage from "./ErrorMessage"
import SideMenu from "react-native-simple-side-menu"
import AppMenu from "../major/AppMenu"
import LibraryHeader from "../major/LibraryHeader"
import LibraryCovers from "../major/LibraryCovers"
import LibraryList from "../major/LibraryList"
import Spin from "../basic/Spin"
import CoverAndSpin from "../basic/CoverAndSpin"
import BookDownloader from "../major/BookDownloader"
import Login from "../major/Login"
import WebView from "../major/WebView"
import Dialog from "../major/Dialog"
import KeyboardAvoidingView from "../basic/KeyboardAvoidingView"
import Icon from "../basic/Icon"

import { addBooks, reSort, setFetchingBooks, updateMetadataKeys,
         removeAccount, updateAccount, setReaderStatus, clearAllSpinePageCfis, setSelectedBookTypeIndex,
         autoUpdateCoreIdps, setCurrentClassroom, setSelectedToolUid, updateSubscriptions } from "../../redux/actions"

const {
  NOT_LOGGED_IN_MESSAGE,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  noBooks: {
    marginTop: 50,
    textAlign: 'center',
  },
  enterAccessCodeButtonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  spinnerContainer: {
    paddingTop: 70,
  },
  content: {
    zIndex: 1,
    backgroundColor: 'rgb(238, 241, 245)',
    flex: 1,
    overflow: 'hidden',
  },
  notLoggedInOuterContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    left: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notLoggedInOuterContainerWithAudiobooks: {
    bottom: 75,
  },
  notLoggedInContainer: {
    maxWidth: '100%',
    width: 400,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.1)',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  notLoggedInMessage: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  notLoggedInButtonContainer: {
    display: 'flex',
  },
  hiddenWebview: {
    position: 'absolute',
    top: -100,
    left: 0,
    width: 1,
    height: 1,
  },
  p: {
    color: 'rgba(0,0,0,.4)',
    marginBottom: 10,
  },
  a: {
    color: 'rgb(6,69,173)',
  },
  exampleP: {
    color: 'rgba(0,0,0,.7)',
    fontSize: 12,
    marginBottom: 10,
  },
  warningP: {
    color: "red",
    marginBottom: 15,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginVertical: 5,
  },
  flex1View: {
    flex: 1,
  },
  bookTypeSelectorContainer: {
    position: 'absolute',
    bottom: -50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bookTypeSelector: {
    top: -65,
    padding: 4,
    overflow: 'hidden',
    borderRadius: 100,
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 15,
    width: 128,
  },
  bottomNavigation: {
    paddingVertical: 0,
    minHeight: 40,
  },
  bottomNavigationTab: {
    marginHorizontal: 10,
    width: 40,
  },
  typeSelectorIndicator: {
    backgroundColor: 'rgb(238, 241, 245)',
    height: 40,
    borderRadius: 20,
  },
  readIcon: {
    position: 'relative',
    top: -1,
  },
})

const Library = ({

  accounts,
  idps,
  books,
  library,
  fetchingBooks,
  selectedBookTypeIndex,

  addBooks,
  reSort,
  setFetchingBooks,
  updateMetadataKeys,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
  setCurrentClassroom,
  setSelectedToolUid,
  updateSubscriptions,
  setSelectedBookTypeIndex,

}) => {

  const { historyPush, historyReplace, historyGoBackToLibrary, routerState, pathname, clearKeyFromRouterState } = useRouterState()
  const { logOutAccountId, widget, parent_domain, doEmailLogin } = routerState

  const [ showLogin, setShowLogin ] = useState(Object.keys(accounts).length === 0)
  const [ importingBooks, setImportingBooks ] = useState(false)
  const [ confirmReplaceExisting, setConfirmReplaceExisting ] = useState(false)
  const [ showEnvironmentUrlsDialog, setShowEnvironmentUrlsDialog ] = useState(false)
  const [ showAccessCodeDialog, setShowAccessCodeDialog ] = useState(false)
  const [ showMetadataDialog, setShowMetadataDialog ] = useState(false)
  const [ showAudiobookDialog, setShowAudiobookDialog ] = useState(false)
  const [ audiobookId, setAudiobookId ] = useState()
  const [ showCopyToolsDialog, setShowCopyToolsDialog ] = useState(false)
  const [ showSubscriptionsDialog, setShowSubscriptionsDialog ] = useState(false)
  const [ replaceExisting, setReplaceExisting ] = useState(false)
  const [ redirectCheckComplete, setRedirectCheckComplete ] = useState(!(widget && parent_domain))
  const [ showLoading, setShowLoading ] = useState(false)
  const loggedInUser = useLoggedInUser(accounts)
  const safeAreaInsets = useSafeAreaInsets()

  const wideModeWithEitherOrientation = useWideMode(true)
  const hasNoAuth = useHasNoAuth(accounts)
  const { online } = useNetwork()

  const getBooks = useInstanceValue(books)
  const getIdps = useInstanceValue(idps)
  
  const previousPathname = usePrevious(pathname)
  const accountIds = Object.keys(accounts).join(',')
  const previousAccountIds = usePrevious(accountIds)

  const { useAudiobooks } = Object.values(idps)[0] || {}

  useEffect(
    () => {
      // If it is a direct load to something other than the Library, then add
      // the Library to the browser history so that calling back on the router
      // works properly.
      if(pathname !== '/' && !widget) {
        historyReplace('/', null, 0)
        historyPush(pathname, routerState, 1)
      } else if(routerState.back) {
        historyReplace(null, routerState, 0)
      }
    },
    [],
  )

  useEffect(
    () => {
      if(widget && parent_domain) {
        const idps = getIdps()

        // check to see if we should redirect to a different domain
        safeFetch(`${getDataOrigin(Object.values(idps)[0])}/check_for_embed_website_redirect?parent_domain=${encodeURIComponent(parent_domain)}`)
          .then(result => result.json())
          .then(({ redirectToDomain }) => {
            if(redirectToDomain && redirectToDomain !== window.location.host) {
              if(isStaging()) {
                redirectToDomain = `${dashifyDomain(redirectToDomain)}.staging.toadreader.com`
              } else if(isBeta()) {
                redirectToDomain = `${dashifyDomain(redirectToDomain)}.beta.toadreader.com`
              }
              window.location.href = `${window.location.protocol}//${redirectToDomain}/${window.location.hash}`
            } else {
              setRedirectCheckComplete(true)
            }
          })
          .catch(() => setRedirectCheckComplete(true))
      }
    },
    [],
  )

  useEffect(
    () => {
      updateReader({ setReaderStatus })
      removeSnapshotsIfANewUpdateRequiresIt({ books, clearAllSpinePageCfis })
      autoUpdateCoreIdps()

      if(Platform.OS === 'ios' && wideModeWithEitherOrientation) {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
        // Switching the orientation in android causes a bug related to the KeyboardAvoidingView
      }
    },
    [],
  )

  useEffect(
    () => {
      (async () => {

        // update metadataKeys

        const idpId = Object.keys(idps)[0]

        console.log(`Getting updated metadata keys (idpId: ${idpId})...`)

        const metadataKeysUrl = `${getDataOrigin(idps[idpId])}/metadatakeys`
        const response = await safeFetch(metadataKeysUrl, getReqOptionsWithAdditions({
          headers: {
            "Content-Type": 'application/json',
          },
        }))

        try {
          const { metadataKeys } = await response.json()
          updateMetadataKeys(metadataKeys)
        } catch(err) {
          console.log(`/metadatakeys GET had an error.`, err.message, response.status)
        }

        console.log(`Updated metadata keys (idpId: ${idpId})...`)

      })()
    },
    [],
  )

  useEffect(
    () => {
      (async () => {

        // update subscriptions

        const idpId = Object.keys(idps)[0]

        console.log(`Getting updated subscriptions (idpId: ${idpId})...`)

        const subscriptionsUrl = `${getDataOrigin(idps[idpId])}/subscriptions`
        const response = await safeFetch(subscriptionsUrl, getReqOptionsWithAdditions({
          headers: {
            "Content-Type": 'application/json',
          },
        }))

        try {
          const { subscriptions } = await response.json()
          updateSubscriptions(subscriptions)
        } catch(err) {
          console.log(`/subscriptions GET had an error.`, err.message, response.status)
        }

        console.log(`Updated subscriptions (idpId: ${idpId})...`)

      })()
    },
    [],
  )

  useEffect(
    () => {
      // This is only necessary since the user may have logged in prior
      // to the setUser function being added to the accounts reducer.

      const accountId = Object.keys(accounts)[0]

      if(accountId) {
        const { userId } = getIdsFromAccountId(accountId)
        const account = accounts[accountId]
        setUser({
          userId,
          properties: {
            name: account.fullname,
            email: account.email,
            admin: !!account.isAdmin,
          },
        })
      }
    },
    [],
  )

  useLayoutEffect(
    () => {
      if(pathname === '/') {
        reSort()
      }
    },
    [],
  )

  const handleNewLibrary = useCallback(
    async ({ response, idpId, accountId }) => {

      if(response.status != 200) {
        // they need to login again
        // TODO: I should probably look for other possibilities like 3XX or 5XX errors
        updateAccount({
          accountId,
          accountInfo: {
            needToLogInAgain: true
          },
        })
        return
      }

      const { books: newBooks, hash, noChange, newBookId } = await response.json()

      if(noChange) {
        console.log(`...done fetching books (accountId: ${accountId}) - no change.`)
        return { noChange, newBookId }
      }

      addBooks({
        books: newBooks,
        accountId,
        hash,
      })
      reSort()

      console.log(`...done fetching books (accountId: ${accountId}).`)

      return { newBookId }

    },
    [],
  )

  const updateBooks = useCallback(
    async ({ accountId }) => {

      console.log(`Fetch books (accountId: ${accountId})...`)

      const { idpId } = getIdsFromAccountId(accountId)
      const { cookie, libraryHash } = accounts[accountId]

      const libraryUrl = `${getDataOrigin(idps[idpId])}/epub_content/epub_library.json?hash=${libraryHash}`
      let response = await safeFetch(libraryUrl, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": cookie,
        },
      }))
      // I do not catch the no internet connection error because I only get here immediately after logging in,
      // which requires the internet.

      await handleNewLibrary({
        response,
        idpId,
        accountId,
      })

      console.log(`...done fetching books (accountId: ${accountId}).`)

    },
    [ idps, accounts, handleNewLibrary ],
  )

  const onLoginSuccess = useCallback(
    () => {
      setShowLogin(false)
      clearKeyFromRouterState('doEmailLogin')
    },
    [],
  )

  const logOutOnLoad = useCallback(
    async ({ accountId=logOutAccountId }={}) => {

      const { idpId } = getIdsFromAccountId(accountId)
      const idp = idps[idpId]
      const dataOrigin = getDataOrigin(idp)

      // make sure the logout callback gets called (safari wasn't doing so; might be a race condition)
      const logOutCallbackUrl = `${dataOrigin}/logout/callback?noredirect=1`
      await safeFetch(logOutCallbackUrl, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": accounts[accountId].cookie,
        },
      }))

      removeAccount({ accountId })
      historyReplace()
    },
    [ idps, accounts, logOutAccountId ],
  )

  useEffect(  // fetch books
    () => {

      const accountId = Object.keys(accounts)[0]
      const account = accounts[accountId]
      if(!account) {
        setShowLogin(true)
        return
      } else if(account.needToLogInAgain) {
        // when I move to multiple accounts, this will instead need to go to the Accounts screen
        (async () => {
          setShowLoading(true)
          try {
            await logOutOnLoad({ accountId })
            historyGoBackToLibrary()
          } catch(err) {}
          setShowLogin(true)
          setShowLoading(false)
        })()
        return
      }

      // remove query string if it still has one (with loginInfo)
      if(Platform.OS === 'web' && window.location.search) {
        window.history.replaceState({}, document.title, window.location.href.replace(/\?[^#]*/, ''))
      }

      if(
        (
          pathname === '/'
          && !['/drawer', '/'].includes(previousPathname)
        )
        || accountIds !== previousAccountIds  // i.e. they just logged in
      ) {
        (async () => {

          // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
          setFetchingBooks({ value: true })
          for(let accountId in accounts) {
            try {

              await updateBooks({ accountId })

            } catch(error) {
              console.log("Update books ERROR", error)

              if(Object.values(books).some(book => book.accounts[accountId])) {
                // if we already have the library listing from before, fail quietly

              } else {
                historyPush("/error", {
                  message: error.message || null,
                })
              }

            }
          }
          setFetchingBooks({ value: false })

        })()
      }
    },
    [ idps, accounts, pathname ],
  )

  const openImportBooks = useCallback(
    () => {
      setImportingBooks(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const openConfirmReplaceExisting = useCallback(
    () => {
      setConfirmReplaceExisting(true)
    },
    [],
  )

  const openEnvironmentUrlsDialog = useCallback(
    () => {
      setShowEnvironmentUrlsDialog(true)
    },
    [],
  )

  const openAccessCodeDialog = useCallback(
    () => {
      setShowAccessCodeDialog(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const openMetadataDialog = useCallback(
    () => {
      setShowMetadataDialog(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const openCreateAudiobookDialog = useCallback(
    () => {
      setAudiobookId()
      setShowAudiobookDialog(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const openCopyToolsDialog = useCallback(
    () => {
      setShowCopyToolsDialog(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const openSubscriptionsDialog = useCallback(
    () => {
      setShowSubscriptionsDialog(true)
      historyGoBackToLibrary()
    },
    [],
  )

  const closeEnvironmentUrlsDialog = useCallback(
    () => {
      setShowEnvironmentUrlsDialog(false)
    },
    [],
  )

  const closeAccessCodeDialog = useCallback(
    () => {
      setShowAccessCodeDialog(false)
    },
    [],
  )

  const closeMetadataDialog = useCallback(
    () => {
      setShowMetadataDialog(false)
    },
    [],
  )

  const closeAudiobookDialog = useCallback(
    () => {
      setShowAudiobookDialog(false)
    },
    [],
  )

  const closeCopyToolsDialog = useCallback(
    () => {
      setShowCopyToolsDialog(false)
    },
    [],
  )

  const closeSubscriptionsDialog = useCallback(
    () => {
      setShowSubscriptionsDialog(false)
    },
    [],
  )

  const closeImportingBooks = useCallback(
    () => {
      setImportingBooks(false)
      setConfirmReplaceExisting(false)
      setReplaceExisting(false)
    },
    [],
  )

  const yesConfirmReplaceExisting = useCallback(
    () => {
      historyGoBackToLibrary()
      setConfirmReplaceExisting(false)
      setReplaceExisting(true)
    },
    [],
  )

  const goDoEmailLogin = useCallback(
    () => {
      historyReplace("/", {
        doEmailLogin: true,
      })
    },
    [],
  )

  const ReadIcon = useCallback(({ style }) => <Icon name='menu-book' pack='material' style={[ styles.readIcon, style ]} />, [])
  const ListenIcon = useCallback(({ style }) => <Icon name='headphones' pack='materialCommunity' style={[ styles.listenIcon, style ]} />, [])

  useEffect(
    () => {
      // If they have clicked on one of the links in the import
      // results, close the import dialog.
      if(pathname !== '/') {
        setImportingBooks(false)
      }
    },
    [],
  )

  const pushToken = usePushToken()
  const notifications = usePushNotifications()

  useEffect(
    () => {
      if(notifications.length === 0) return

      const { clear, notification } = notifications.slice(-1)[0] || {}
      const { data } = notification.request.content

      clear()

      const { bookId, classroomUid } = data || {}

      historyGoBackToLibrary()

      // check if it is valid and downloaded
      if((books[bookId] || {}).downloadStatus !== 2) {
        if(books[bookId]) {
          Alert.alert(
            i18n("Note"),
            i18n("Download “{{title}}” to view your Reading Schedule for this classroom.", "", "enhanced", books[bookId]),    
          )
        }

        return
      }

      // if(spineIdRef) {
      //   setLatestLocation({
      //     bookId,
      //     latestLocation: {
      //       spineIdRef: spineIdRef,
      //     },
      //   })
      // }

      // We need a timeout because we do not know the state of the book and so need
      // the ui to truly exit it to the library to reset things before opening up.
      setShowLoading(true)

      setTimeout(() => {
        if(classroomUid) {
          setCurrentClassroom({
            bookId,
            uid: classroomUid,
          })

          setSelectedToolUid({
            bookId,
            uid: 'FRONT MATTER',
          })
        }

        historyPush(`/book/${bookId}`, { initialSelectedTabId: 'readingSchedule' })

        setShowLoading(false)
      })

    },
    [ notifications ],
  )

  useEffect(
    () => {
      (async () => {

        if(Platform.OS !== 'web' || !logOutAccountId || !redirectCheckComplete) return

        const { idpId } = getIdsFromAccountId(logOutAccountId)
        const idp = idps[idpId]
        const { authMethod, devAuthMethod } = idp
        const dataOrigin = getDataOrigin(idp)

        const usingShibbolethLogin = ['SHIBBOLETH'].includes((__DEV__ && devAuthMethod) || authMethod) || doEmailLogin

        if(usingShibbolethLogin) {

          removeAccount({ accountId: logOutAccountId })

          const logOutUrl = `${dataOrigin}/logout`
          window.location.href = logOutUrl

        } else {

          logOutOnLoad()

        }
        
      })()
    },
    [ logOutAccountId, redirectCheckComplete ],
  )

  const scope = library.scope || "all"

  const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
  const validLibraryBookList = library.bookList.filter(bookId => books[bookId])  // just in case: to prevent error which crashes the app
  let bookList = (
    scope == 'all'
      ? validLibraryBookList
      : (scope == 'device'
        ? validLibraryBookList.filter(bookId => books[bookId].downloadStatus == 2)
        : validLibraryBookList.filter(bookId => (
          Object.keys(books[bookId].accounts).some(accountId => getIdsFromAccountId(accountId).idpId === getIdsFromAccountId(scope).idpId)
        ))
      )
  )

  if((library.filter || {}).type === 'metadata') {
    bookList = bookList.filter(bookId => (
      (books[bookId].metadataValues || []).some(({ metadata_key_id, value }) => (
        metadata_key_id === library.filter.metadataKeyId
        && value === library.filter.value
      ))
    ))
  }

  if(useAudiobooks) {
    bookList = bookList.filter(bookId => !!books[bookId].audiobookInfo === (selectedBookTypeIndex === 1))
  }

  const bookImporterAccountId = Object.keys(accounts).filter(accountId => accounts[accountId].isAdmin)[0]

  if(showLoading || (logOutAccountId && Platform.OS === 'web')) {
    return (
      <CoverAndSpin />
    )
  }

  if(logOutAccountId) {  // native logout
    return (
      <SafeLayout>
        <WebView
          style={styles.flex1}
          source={getReqOptionsWithAdditions({
            uri: `${getDataOrigin(idps[logOutAccountId.split(':')[0]])}/logout${logOutAccountId ? `` : `/callback`}?noredirect=1`,
            headers: {
              "x-cookie-override": (accounts[logOutAccountId] || {}).cookie,
              "x-push-token": pushToken,
            },
          })}
          onLoad={logOutOnLoad}
          onError={logOutOnLoad}  // Even if it fails, log them out on the device at least
          iframeProps={{
            // I am not sure if I need this for BibleMesh only, or in general.
            // I also don't know if it will break things for another tenant.
            // Without it, BibleMesh produces strange space to the right of the iframe.
            // It is the lack of allow-scripts that avoids that issue.
            sandbox: "allow-forms allow-same-origin allow-top-navigation",
          }}
        />
        <CoverAndSpin
          text={
            hasNoAuth
              ? i18n("Finding books...")
              : i18n("Logging out...")
          }
          style={{ backgroundColor: 'white' }}
        />
      </SafeLayout>
    )
  }

  const query = getQueryString()

  if((showLogin || doEmailLogin || query.loginInfo) && ![ '/error' ].includes(pathname)) {
    return (
      <Login
        idpId={Object.keys(idps)[0]}
        onSuccess={onLoginSuccess}
        doEmailLogin={doEmailLogin}
        redirectCheckComplete={redirectCheckComplete}
      />
    )
  }

  const doingInitialFetch = fetchingBooks && bookList.length == 0
  const { accessCodeInfo } = Object.values(idps)[0] || {}
  const showNotLoggedInMessage = !!(NOT_LOGGED_IN_MESSAGE && !loggedInUser)
  const notLoggedInMessage = showNotLoggedInMessage && (
    <View
      style={[
        styles.notLoggedInOuterContainer,
        (useAudiobooks && styles.notLoggedInOuterContainerWithAudiobooks),
      ]}
    >
      <View style={styles.notLoggedInContainer}>
        <Text style={styles.notLoggedInMessage}>
          {NOT_LOGGED_IN_MESSAGE}
        </Text>
        <View style={styles.notLoggedInButtonContainer}>
          <Button
            onPress={goDoEmailLogin}
            size="small"
            status="basic"
            disabled={!online}
          >
            {i18n("Log in with email")}
          </Button>
        </View>
      </View>
    </View>
  )

  return (
    <SideMenu
      open={pathname === '/drawer'}
      onClose={historyGoBackToLibrary}
      menu={
        widget
          ? null
          : (
            <AppMenu
              onImportBooks={openImportBooks}
              onReplaceExisting={openConfirmReplaceExisting}
              onCreateAudiobook={openCreateAudiobookDialog}
              onShowEnvironmentUrls={openEnvironmentUrlsDialog}
              onOpenAccessCodeDialog={openAccessCodeDialog}
              onOpenMetadataDialog={openMetadataDialog}
              onOpenCopyToolsDialog={openCopyToolsDialog}
              onOpenSubscriptionsDialog={openSubscriptionsDialog}
            />
          )
      }
    >

      <KeyboardAvoidingView>
        <Switch>
          <Route path="/error" component={ErrorMessage} />
          {!doingInitialFetch && <Route path="/book/:bookId" render={() => <BookWrapper redirectCheckComplete={redirectCheckComplete} />} />}
          {!doingInitialFetch && <Route path="/reports" component={Reports} />}
          {!doingInitialFetch && <Route path="/delete-my-account" component={DeleteMyAccount} />}
          {!doingInitialFetch && <Route path="/users" component={Users} />}
          <Route>

            <SafeLayout>
              <View style={styles.flex1View}>
                <LibraryHeader
                  scope={scope}
                />
                {doingInitialFetch
                  ? (
                    <View style={styles.spinnerContainer}>
                      <Spin />
                    </View>
                  )
                  : (
                    validLibraryBookList.length == 0
                      ? (
                        <>
                          <Text style={styles.noBooks}>{i18n("No books found.")}</Text>
                          {!!accessCodeInfo && !hasNoAuth &&
                            <View style={styles.enterAccessCodeButtonContainer}>
                              <Button
                                onPress={openAccessCodeDialog}
                                size="small"
                                status="basic"
                                disabled={!online}
                              >
                                {accessCodeInfo.buttonText || i18n("Enter access code")}
                              </Button>
                            </View>
                          }
                          {notLoggedInMessage}
                        </>
                      )
                      : (
                        <View style={styles.content}>

                          {useAudiobooks && bookList.length === 0 &&
                            <Text style={styles.noBooks}>
                              {selectedBookTypeIndex === 0 && i18n("No e-books found.")}
                              {selectedBookTypeIndex === 1 && i18n("No audiobooks found.")}
                            </Text>
                          }

                          <LibraryViewer
                            bookList={bookList}
                            handleNewLibrary={handleNewLibrary}
                            viewingAudiobooks={useAudiobooks && selectedBookTypeIndex === 1}
                          />

                          {notLoggedInMessage}

                          {useAudiobooks &&
                            <View style={styles.bookTypeSelectorContainer}>
                              <View
                                style={[
                                  styles.bookTypeSelector,
                                  {
                                    marginBottom: safeAreaInsets.bottom,
                                  },
                                ]}
                              >
                                <BottomNavigation
                                  style={styles.bottomNavigation}
                                  indicatorStyle={styles.typeSelectorIndicator}
                                  selectedIndex={selectedBookTypeIndex}
                                  onSelect={setSelectedBookTypeIndex}
                                >
                                  <BottomNavigationTab
                                    style={styles.bottomNavigationTab}
                                    icon={ReadIcon}
                                  />
                                  <BottomNavigationTab
                                    style={styles.bottomNavigationTab}
                                    icon={ListenIcon}
                                  />
                                </BottomNavigation>
                              </View>
                            </View>
                          }

                        </View>
                      )
                  )
                }
              </View>
            </SafeLayout>

          </Route>
        </Switch>
      </KeyboardAvoidingView>

      <BookDownloader
        downloadPaused={/^\/book\//.test(pathname)}
      />

      <BookImporter
        open={!!(importingBooks || replaceExisting)}
        accountId={bookImporterAccountId}
        updateBooks={updateBooks}
        onClose={closeImportingBooks}
        replaceExisting={!!replaceExisting}
      />

      <Dialog
        open={!!confirmReplaceExisting}
        title={i18n("Are you sure?")}
        type="confirm"
        onConfirm={yesConfirmReplaceExisting}
        onCancel={closeImportingBooks}
        message={
          <>
            <Text style={styles.warningP}>
              {i18n("Warning: Replacing EPUBs is highly discouraged as it can corrupt user data and enhanced content.", "", "admin")}
            </Text>
            <Text style={styles.p}>
              {i18n("User highlights and notes are based upon the EPUB structure. Therefore, replacing an EPUB will corrupt this user data if any structural elements or content has been changed. In addition, if this is an enhanced book, replacing an EPUB can corrupt the placement of tools. Finally, replacing an EPUB may result in users viewing cached copies of the old EPUB’s content or assets at times, and not the new versions.", "", "admin")}
            </Text>
            <Text style={styles.p}>
              {i18n("For these reasons, replacing an EPUB should only be used as a last resort.", "", "admin")}
            </Text>
            <View style={styles.section}>
              <Text style={styles.heading}>
                {i18n("Reasons NOT to replace an EPUB", "", "admin")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 1: If end users do not yet have access to your EPUB, it is often easiest to simply delete it and then import it afresh.", "", "admin")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 2: If you are wanting to import a new addition of a book, it is often best to do so without deleting the existing version. That way, users with highlights in the existing version will not lose their data while new users can be given access to the new addition.", "", "admin")}
              </Text>
            </View>
            <Text style={styles.p}>
              {i18n("That said, there are some uncommon scenarios when you may want to replace an existing EPUB.", "", "admin")}
            </Text>
            <View style={styles.section}>
              <Text style={styles.heading}>
                {i18n("Valid reasons to consider replacing an EPUB", "", "admin")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 1: If you find your EPUB has an ugly typo and end users already have access to it, replacing the EPUB might be your best option. If the only change to the EPUB is a letter being swapped for another, user highlights and enhanced tools will not be corrupted. If the edit is slightly more involved, minor user data corruption may be introduced.", "", "admin")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 2: If you are building out default enhanced content and end users do not yet have access when you discover a need to correct the EPUB, replacing the EPUB is a good option. However, understand that some inline tools may be misplaced or missing as a result.", "", "admin")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 3: You realize a need to reduce the size of EPUB assets after end users already have access. So long as the assets are not renamed and there are no structure or content changes, user data will not be affected.", "", "admin")}
              </Text>
            </View>
            <Text style={styles.p}>
              {i18n("If you still wish to replace an EPUB, click confirm below and then upload an EPUB file whose ISBN, Title and Author match those of the existing book to be replaced.", "", "admin")}
            </Text>
          </>
        }
      />

      <Dialog
        open={!!showEnvironmentUrlsDialog}
        title={i18n("Environment URLs", "", "admin")}
        onClose={closeEnvironmentUrlsDialog}
        message={
          [
            "staging",
            "beta",
            "production",
          ].map(env => {
            const { domain } = Object.values(idps)[0]
            const url = getIDPOrigin({ domain, env })
            const dataUrl = getDataOrigin({ domain, env })
            return (
              <View>
                <View style={styles.p}>
                  <Text style={styles.heading}>
                    {env.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.exampleP}>
                  {i18n("Frontend", "", "admin")}
                  {`\n`}
                  <Text style={styles.a} onPress={() => openURL({ url, historyPush })}>
                    {url}
                  </Text>
                </View>
                <View style={styles.exampleP}>
                  {i18n("Backend", "", "admin")}
                  {`\n`}
                  <Text style={styles.a} onPress={() => openURL({ url: dataUrl, historyPush })}>
                    {dataUrl}
                  </Text>
                </View>
              </View>
            )
          })
        }
      />

      {!!accessCodeInfo &&
        <AccessCodeDialog
          open={!!showAccessCodeDialog}
          onClose={closeAccessCodeDialog}
          accessCodeInfo={accessCodeInfo}
          handleNewLibrary={handleNewLibrary}
        />
      }

      <MetadataDialog
        open={!!showMetadataDialog}
        onClose={closeMetadataDialog}
        handleNewLibrary={handleNewLibrary}
      />

      <AudiobookDialog
        open={!!showAudiobookDialog}
        bookId={audiobookId}
        setAudiobookId={setAudiobookId}
        onClose={closeAudiobookDialog}
        handleNewLibrary={handleNewLibrary}
      />

      <CopyToolsDialog
        open={!!showCopyToolsDialog}
        onClose={closeCopyToolsDialog}
        handleNewLibrary={handleNewLibrary}
      />

      <SubscriptionsDialog
        open={!!showSubscriptionsDialog}
        onClose={closeSubscriptionsDialog}
        handleNewLibrary={handleNewLibrary}
      />

    </SideMenu>
  )
}

const mapStateToProps = ({ accounts, idps, books, library, fetchingBooks, selectedBookTypeIndex }) => ({
  accounts,
  idps,
  books,
  library,
  fetchingBooks,
  selectedBookTypeIndex,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  reSort,
  setFetchingBooks,
  updateMetadataKeys,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
  setCurrentClassroom,
  setSelectedToolUid,
  updateSubscriptions,
  setSelectedBookTypeIndex,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)

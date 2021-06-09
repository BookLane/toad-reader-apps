import React, { useState, useEffect, useLayoutEffect, useCallback } from "react"
import * as ScreenOrientation from 'expo-screen-orientation'
import * as FileSystem from 'expo-file-system'
import { Platform, StyleSheet, View, Text, Alert } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import usePrevious from "react-use/lib/usePrevious"

import downloadAsync from "../../utils/downloadAsync"
import { updateReader } from "../../utils/updateReader"
import useRouterState from "../../hooks/useRouterState"
import { getReqOptionsWithAdditions, getDataOrigin, getIdsFromAccountId, safeFetch,
         isStaging, isBeta, dashifyDomain, getQueryString, getIDPOrigin, openURL } from "../../utils/toolbox"
import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub"
import useInstanceValue from "../../hooks/useInstanceValue"
import useHasNoAuth from "../../hooks/useHasNoAuth"
import useWideMode from "../../hooks/useWideMode"
import usePushToken from "../../hooks/usePushToken"
import usePushNotifications from "../../hooks/usePushNotifications"

import { Switch, Route } from "../routers/react-router"
import SafeLayout from "../basic/SafeLayout"
import Button from "../basic/Button"
import BookImporter from "../major/BookImporter"
import AccessCodeDialog from "../major/AccessCodeDialog"
import Book from "./Book"
import Reports from "./Reports"
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


import { addBooks, setCoverFilename, reSort, setFetchingBooks,
         removeAccount, updateAccount, setReaderStatus, clearAllSpinePageCfis,
         autoUpdateCoreIdps, setCurrentClassroom, setSelectedToolUid } from "../../redux/actions"

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
  }
})

const Library = ({

  accounts,
  idps,
  books,
  library,
  fetchingBooks,

  addBooks,
  setCoverFilename,
  reSort,
  setFetchingBooks,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
  setCurrentClassroom,
  setSelectedToolUid,

}) => {

  const { historyPush, historyReplace, historyGoBack, historyGoBackToLibrary, routerState, pathname, clearKeyFromRouterState } = useRouterState()
  const { logOutAccountId, widget, parent_domain, doEmailLogin } = routerState

  const [ showLogin, setShowLogin ] = useState(Object.keys(accounts).length === 0)
  const [ importingBooks, setImportingBooks ] = useState(false)
  const [ confirmReplaceExisting, setConfirmReplaceExisting ] = useState(false)
  const [ showEnvironmentUrlsDialog, setShowEnvironmentUrlsDialog ] = useState(false)
  const [ showAccessCodeDialog, setShowAccessCodeDialog ] = useState(false)
  const [ replaceExisting, setReplaceExisting ] = useState(false)
  const [ redirectCheckComplete, setRedirectCheckComplete ] = useState(!(widget && parent_domain))
  const [ showLoading, setShowLoading ] = useState(false)

  const wideModeWithEitherOrientation = useWideMode(true)
  const hasNoAuth = useHasNoAuth(accounts)

  const getBooks = useInstanceValue(books)
  const getIdps = useInstanceValue(idps)

  const previousPathname = usePrevious(pathname)
  const accountIds = Object.keys(accounts).join(',')
  const previousAccountIds = usePrevious(accountIds)

  useEffect(
    () => {
      // If it is a direct load to something other than the Library, then add
      // the Library to the browser history so that calling back on the router
      // works properly.
      if(pathname !== '/' && !widget) {
        historyReplace('/')
        historyPush(pathname, routerState)
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

  useLayoutEffect(
    () => {
      if(pathname === '/') {
        reSort()
      }
    },
    [],
  )

  const getCovers = useCallback(
    ({ idpId }) => {

      const books = getBooks()
      const idps = getIdps()

      if(Platform.OS === 'web') return

      for(let bookId in books) {
        const book = books[bookId]

        if(book.coverHref && !book.coverFilename) {
          const idp = idps[idpId]

          if(idp) {
            const coverFilename = book.coverHref.split('/').pop()

            const downloadOrigin = __DEV__ ? getDataOrigin(idp) : getIDPOrigin(idp)
            downloadAsync(
              `${downloadOrigin}/epub_content/covers/book_${bookId}.png`,
              `${FileSystem.documentDirectory}covers/${bookId}/${coverFilename}`,
            ).then(successful => {
              if(successful) {
                setCoverFilename({
                  bookId,
                  coverFilename,
                })
              }
            })
          }
          
        }
      }
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

      const { books: newBooks, hash, noChange } = await response.json()

      if(noChange) {
        console.log(`...done fetching books (accountId: ${accountId}) - no change.`)
        return
      }

      addBooks({
        books: newBooks,
        accountId,
        hash,
      })
      reSort()

      requestAnimationFrame(() => getCovers({ idpId }))

      console.log(`...done fetching books (accountId: ${accountId}).`)

    },
    [ idps, accounts, books ],
  )

  useEffect(  // fetch books
    () => {

      const account = Object.values(accounts)[0]
      if(!account || account.needToLogInAgain) {
        // when I move to multiple accounts, this will instead need to go to the Accounts screen
        setShowLogin(true)
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
        || accountIds > previousAccountIds  // i.e. they just logged in
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

  const onLoginSuccess = useCallback(
    () => {
      setShowLogin(false)
      clearKeyFromRouterState('doEmailLogin')
    },
    [],
  )

  const logOutOnLoad = useCallback(
    async () => {

      const { idpId } = getIdsFromAccountId(logOutAccountId)
      const idp = idps[idpId]
      const dataOrigin = getDataOrigin(idp)

      // make sure the logout callback gets called (safari wasn't doing so; might be a race condition)
      const logOutCallbackUrl = `${dataOrigin}/logout/callback?noredirect=1`
      await safeFetch(logOutCallbackUrl, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": accounts[logOutAccountId].cookie,
        },
      }))

      removeAccount({ accountId: logOutAccountId })
      historyReplace()
    },
    [ idps, accounts, logOutAccountId ],
  )

  const openImportBooks = useCallback(
    () => {
      setImportingBooks(true)
      historyGoBack()
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
      historyGoBack()
      setConfirmReplaceExisting(false)
      setReplaceExisting(true)
    },
    [],
  )

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
  const bookList = (
    scope == 'all'
      ? validLibraryBookList
      : (scope == 'device'
        ? validLibraryBookList.filter(bookId => books[bookId].downloadStatus == 2)
        : validLibraryBookList.filter(bookId => (
          Object.keys(books[bookId].accounts).some(accountId => getIdsFromAccountId(accountId).idpId === getIdsFromAccountId(scope).idpId)
        ))
      )
  )

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

  return (
    <SideMenu
      open={pathname === '/drawer'}
      onClose={historyGoBack}
      menu={
        widget
          ? null
          : (
            <AppMenu
              onImportBooks={openImportBooks}
              onReplaceExisting={openConfirmReplaceExisting}
              onShowEnvironmentUrls={openEnvironmentUrlsDialog}
              onOpenAccessCodeDialog={openAccessCodeDialog}
            />
          )
      }
    >

      <KeyboardAvoidingView>
        <Switch>
          <Route path="/error" component={ErrorMessage} />
          {!doingInitialFetch && <Route path="/book/:bookId" render={() => <Book redirectCheckComplete={redirectCheckComplete} />} />}
          {!doingInitialFetch && <Route path="/reports" component={Reports} />}
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
                    bookList.length == 0
                      ? (
                        <>
                          <Text style={styles.noBooks}>{i18n("No books found.")}</Text>
                          {!!accessCodeInfo &&
                            <View style={styles.enterAccessCodeButtonContainer}>
                              <Button
                                onPress={openAccessCodeDialog}
                                size="small"
                                status="basic"
                              >
                                {accessCodeInfo.buttonText || i18n("Enter access code")}
                              </Button>
                            </View>
                          }
                        </>
                      )
                      : (
                        <View style={styles.content}>
                          <LibraryViewer
                            bookList={bookList}
                          />
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
              {i18n("Warning: Replacing EPUBs is highly discouraged as it can corrupt user data and enhanced content.")}
            </Text>
            <Text style={styles.p}>
              {i18n("User highlights and notes are based upon the EPUB structure. Therefore, replacing an EPUB will corrupt this user data if any structural elements or content has been changed. In addition, if this is an enhanced book, replacing an EPUB can corrupt the placement of tools. Finally, replacing an EPUB may result in users viewing cached copies of the old EPUB’s content or assets at times, and not the new versions.")}
            </Text>
            <Text style={styles.p}>
              {i18n("For these reasons, replacing an EPUB should only be used as a last resort.")}
            </Text>
            <View style={styles.section}>
              <Text style={styles.heading}>
                {i18n("Reasons NOT to replace an EPUB")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 1: If end users do not yet have access to your EPUB, it is often easiest to simply delete it and then import it afresh.")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 2: If you are wanting to import a new addition of a book, it is often best to do so without deleting the existing version. That way, users with highlights in the existing version will not lose their data while new users can be given access to the new addition.")}
              </Text>
            </View>
            <Text style={styles.p}>
              {i18n("That said, there are some uncommon scenarios when you may want to replace an existing EPUB.")}
            </Text>
            <View style={styles.section}>
              <Text style={styles.heading}>
                {i18n("Valid reasons to consider replacing an EPUB")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 1: If you find your EPUB has an ugly typo and end users already have access to it, replacing the EPUB might be your best option. If the only change to the EPUB is a letter being swapped for another, user highlights and enhanced tools will not be corrupted. If the edit is slightly more involved, minor user data corruption may be introduced.")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 2: If you are building out default enhanced content and end users do not yet have access when you discover a need to correct the EPUB, replacing the EPUB is a good option. However, understand that some inline tools may be misplaced or missing as a result.")}
              </Text>
              <Text style={styles.exampleP}>
                {i18n("Example 3: You realize a need to reduce the size of EPUB assets after end users already have access. So long as the assets are not renamed and there are no structure or content changes, user data will not be affected.")}
              </Text>
            </View>
            <Text style={styles.p}>
              {i18n("If you still wish to replace an EPUB, click confirm below and then upload an EPUB file whose ISBN, Title and Author match those of the existing book to be replaced.")}
            </Text>
          </>
        }
      />

      <Dialog
        open={!!showEnvironmentUrlsDialog}
        title={i18n("Environment URLs")}
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
                  {i18n("Frontend")}
                  {`\n`}
                  <Text style={styles.a} onPress={() => openURL({ url, historyPush })}>
                    {url}
                  </Text>
                </View>
                <View style={styles.exampleP}>
                  {i18n("Backend")}
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
        />
      }

    </SideMenu>
  )
}

const mapStateToProps = ({ accounts, idps, books, library, fetchingBooks }) => ({
  accounts,
  idps,
  books,
  library,
  fetchingBooks,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  setCoverFilename,
  reSort,
  setFetchingBooks,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
  setCurrentClassroom,
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)

import React, { useState, useEffect, useLayoutEffect, useCallback } from "react"
import { ScreenOrientation } from "expo"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { Platform, StyleSheet, View, Text } from "react-native"
import { Switch, Route } from "../routers/react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SafeLayout from "../basic/SafeLayout"
import { i18n } from "inline-i18n"
import downloadAsync from "../../utils/downloadAsync"
import { updateReader } from "../../utils/updateReader"

import BookImporter from "../major/BookImporter"
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

import useRouterState from "../../hooks/useRouterState"
import { getReqOptionsWithAdditions, getDataOrigin, getIdsFromAccountId, safeFetch, isStaging, dashifyDomain } from "../../utils/toolbox"
import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub"
import useInstanceValue from "../../hooks/useInstanceValue"
import useHasNoAuth from "../../hooks/useHasNoAuth"
import usePrevious from "react-use/lib/usePrevious"

import { addBooks, setCoverFilename, reSort, setFetchingBooks,
         removeAccount, updateAccount, setReaderStatus, clearAllSpinePageCfis, autoUpdateCoreIdps } from "../../redux/actions"

const {
  APP_BACKGROUND_COLOR,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  noBooks: {
    marginTop: 50,
    textAlign: 'center',
  },
  spinnerContainer: {
    paddingTop: 70,
  },
  content: {
    zIndex: 1,
    backgroundColor: APP_BACKGROUND_COLOR,
    flex: 1,
  },
  hiddenWebview: {
    position: 'absolute',
    top: -100,
    left: 0,
    width: 1,
    height: 1,
  },
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

}) => {

  const [ downloadPaused, setDownloadPaused ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(Object.keys(accounts).length === 0)
  const [ doSetCookie, setDoSetCookie ] = useState(false)
  const [ importingBooks, setImportingBooks ] = useState(false)

  const hasNoAuth = useHasNoAuth(accounts)

  const { historyPush, historyReplace, historyGoBack, routerState, pathname } = useRouterState()
  const { widget, parent_domain, logOutAccountId } = routerState

  const getBooks = useInstanceValue(books)
  const getIdps = useInstanceValue(idps)

  const previousPathname = usePrevious(pathname)
  const numAccounts = Object.keys(accounts).length
  const previousNumAccounts = usePrevious(numAccounts)

  useEffect(
    () => {
      // If it is a direct load to something other than the Library, then add
      // the Library to the browser history so that calling back on the router
      // works properly.
      if(pathname !== '/') {
        historyReplace('/')
        historyPush(pathname, routerState)
      }
    },
    [],
  )

  useEffect(
    () => {
      if(Platform.OS === 'web' && !showLogin) {
        setDoSetCookie(true)
      }
    },
    [ accounts, showLogin ],
  )

  useEffect(
    () => {
      if(widget && parent_domain) {
        // check to see if we should redirect to a different domain
        safeFetch(`${getDataOrigin({ domain: window.location.host })}/check_for_embed_website_redirect?parent_domain=${encodeURIComponent(parent_domain)}`)
          .then(result => result.json())
          .then(({ redirectToDomain }) => {
            if(redirectToDomain && redirectToDomain !== window.location.host) {
              if(isStaging()) {
                redirectToDomain = `${dashifyDomain(redirectToDomain)}.staging.toadreader.com`
              }
              window.location.href = `${window.location.protocol}//${redirectToDomain}/${window.location.hash}`
            }
          })
      }
    },
    [],
  )

  useEffect(
    () => {
      updateReader({ setReaderStatus })
      removeSnapshotsIfANewUpdateRequiresIt({ books, clearAllSpinePageCfis })
      autoUpdateCoreIdps()

      if(Platform.OS !== 'web') {
        ScreenOrientation.lockAsync(ScreenOrientation.Orientation.PORTRAIT_UP)
      }
    },
    [],
  )

  useEffect(
    () => {
      setDownloadPaused(/^\/book\//.test(pathname))
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

            downloadAsync(
              `${getDataOrigin(idp)}/${book.coverHref}`,
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

      if(
        (
          pathname === '/'
          && !['/drawer', '/'].includes(previousPathname)
        )
        || numAccounts > previousNumAccounts  // i.e. they just logged in
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

  const onLoginSuccess = useCallback(() => setShowLogin(false), [])

  const logOutOnLoad = useCallback(
    async () => {
      // make sure the logout callback gets called (safari wasn't doing so; might be a race condition)
      const logOutCallbackUrl = `${getDataOrigin(idps[logOutAccountId.split(':')[0]])}/logout/callback?noredirect=1`
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

  const closeImportingBooks = useCallback(() => setImportingBooks(false), [])

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

  const scope = library.scope || "all"

  const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
  const bookList = scope == 'all'
    ? library.bookList
    : (scope == 'device'
      ? library.bookList.filter(bookId => books[bookId].downloadStatus == 2)
      : library.bookList.filter(bookId => (
        Object.keys(books[bookId].accounts).some(accountId => getIdsFromAccountId(accountId).idpId === getIdsFromAccountId(scope).idpId)
      ))
    )

  const bookImporterAccountId = Object.keys(accounts).filter(accountId => accounts[accountId].isAdmin)[0]

  if(showLogin) {
    return (
      <Login
        idpId={Object.keys(idps)[0]}
        onSuccess={onLoginSuccess}
      />
    )
  }

  if(logOutAccountId) {
    return (
      <SafeLayout>
        <WebView
          style={styles.flex1}
          source={getReqOptionsWithAdditions({
            uri: `${getDataOrigin(idps[logOutAccountId.split(':')[0]])}/logout${logOutAccountId ? `` : `/callback`}?noredirect=1`,
            headers: {
              "x-cookie-override": (accounts[logOutAccountId] || {}).cookie,
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

  const doingInitialFetch = fetchingBooks && bookList.length == 0

  return (
    <SideMenu
      open={pathname === '/drawer'}
      onClose={historyGoBack}
      menu={<AppMenu onImportBooks={openImportBooks} />}
    >

      <Switch>
        <Route path="/error" component={ErrorMessage} />
        {!doingInitialFetch && <Route path="/book/:bookId" component={Book} />}
        {!doingInitialFetch && <Route path="/reports" component={Reports} />}
        <Route>

          <SafeLayout>
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
                    <Text style={styles.noBooks}>{i18n("No books found.")}</Text>
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

            <BookDownloader
              downloadPaused={downloadPaused}
            />

          </SafeLayout>
          
        </Route>
      </Switch>

      <BookImporter
        open={!!importingBooks}
        accountId={bookImporterAccountId}
        updateBooks={updateBooks}
        onClose={closeImportingBooks}
      />

      {doSetCookie &&
        (Object.keys(accounts).map(accountId => {
          const { idpId } = getIdsFromAccountId(accountId)

          return (
            <WebView
              key={accountId}
              containerStyle={styles.hiddenWebview}
              source={getReqOptionsWithAdditions({
                uri: `${getDataOrigin(idps[idpId])}/setcookie?cookie=${(accounts[accountId].cookie)}`,
              })}
              onLoad={() => setDoSetCookie(false)}
            />
          )
        }))
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react"
import { Updates, ScreenOrientation } from "expo"
import * as FileSystem from 'expo-file-system'
import Constants from 'expo-constants'
import { Platform, StyleSheet, View, Text } from "react-native"
import { Switch, Route } from "../routers/react-router"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SideMenu from "react-native-side-menu"
import SafeLayout from "../basic/SafeLayout"
import i18n from "../../utils/i18n"
import downloadAsync from "../../utils/downloadAsync"
import { updateReader } from "../../utils/updateReader"

import BookImporter from "../major/BookImporter"
import Book from "./Book"
import ErrorMessage from "./ErrorMessage"
import AppMenu from "../major/AppMenu"
import LibraryHeader from "../major/LibraryHeader"
import LibraryCovers from "../major/LibraryCovers"
import LibraryList from "../major/LibraryList"
import Spin from "../basic/Spin"
import CoverAndSpin from "../basic/CoverAndSpin"
import AppHeader from "../basic/AppHeader"
import BookDownloader from "../major/BookDownloader"
import Login from "../major/Login"
import WebView from "../major/WebView"

import useRouterState from "../../hooks/useRouterState"
import { getReqOptionsWithAdditions, getDataOrigin } from "../../utils/toolbox"
import { removeSnapshotsIfANewUpdateRequiresIt } from "../../utils/removeEpub"
import useInstanceValue from "../../hooks/useInstanceValue"

import { addBooks, setCoverFilename, reSort, setSort, setFetchingBooks,
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
  setSort,
  setFetchingBooks,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,

  history,
  location,

}) => {

  const [ downloadPaused, setDownloadPaused ] = useState(false)
  const [ showLogin, setShowLogin ] = useState(false)
  const [ importingBooks, setImportingBooks ] = useState(false)

  const JSUpdateReady = useRef(false)

  const { historyPush, historyReplace, routerState } = useRouterState({ history, location })
  const { logOutAccountId, refreshLibraryAccountId } = routerState
  const logOutUrl = (logOutAccountId || refreshLibraryAccountId)
    ? `${getDataOrigin(idps[(logOutAccountId || refreshLibraryAccountId).split(':')[0]])}/logout${logOutAccountId ? `` : `/callback`}?noredirect=1`
    : null

  const getLocationPathname = useInstanceValue(location.pathname)

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
      const eventSubscription = Updates.addListener(({ type }) => {
        if(type === Updates.EventType.DOWNLOAD_FINISHED) {
          JSUpdateReady.current = true
        }
      })

      return () => {
        eventSubscription.remove()
      }
    },
    [],
  )

  useEffect(
    () => setDownloadPaused(/^\/book\//.test(location.pathname)),
    [ location ],
  )

  useLayoutEffect(
    () => {
      if(location.pathname === '/') {
        reSort()
      }
    },
    [ location ],
  )

  const getCovers = useCallback(
    ({ idpId }) => {

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
    [ books, idps ],
  )

  const updateBooks = useCallback(
    async ({ accountId }) => {

      const [ idpId ] = accountId.split(':')

      const libraryUrl = `${getDataOrigin(idps[idpId])}/epub_content/epub_library.json`
      let response = await fetch(libraryUrl, getReqOptionsWithAdditions({
        headers: {
          "x-cookie-override": accounts[accountId].cookie,
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

      const newBooks = await response.json()

      addBooks({
        books: newBooks,
        accountId,
      })
      reSort()

      requestAnimationFrame(() => getCovers({ idpId }))

    },
    [ idps, accounts, books ],
  )

  useEffect(  // fetch all
    () => {
      (async () => {

        const account = Object.values(accounts)[0]
        if(!account || account.needToLogInAgain) {
          // when I move to multiple accounts, this will instead need to go to the Accounts screen
          setShowLogin(true)
          return
        }

        // TODO: presently it gets the account libraries just one at a time; could get these in parallel to be quicker
        setFetchingBooks({ value: true })
        for(let accountId in accounts) {
          try {

            const [ idpId ] = accountId.split(':')

            // no need to get the library listing if we already have it
            if(!refreshLibraryAccountId && Object.values(books).some(book => book.accounts[accountId])) {
              requestAnimationFrame(() => getCovers({ idpId }))
              continue
            }

            // update books
            await updateBooks({ accountId })

            if(refreshLibraryAccountId) {
              historyReplace()
            }
            
          } catch(error) {
            console.log("ERROR", error)
            historyPush("/error", {
              message: error.message || null,
            })
          }
        }
        setFetchingBooks({ value: false })
      })()
    },
    [ idps, accounts, refreshLibraryAccountId ],
  )

  const onLoginSuccess = useCallback(
    () => {
      if(JSUpdateReady.current) {
        Updates.reloadFromCache()
      } else {
        setShowLogin(false)
      }
    },
    [],
  )

  const logOutUrlOnLoad = useCallback(
    () => {
      if(refreshLibraryAccountId) {
        updateAccount({
          accountId: refreshLibraryAccountId,
          accountInfo: {
            needToLogInAgain: true,
          },
        })
      }

      if(logOutAccountId) {
        removeAccount({ accountId: logOutAccountId })
        historyReplace()
      }
    },
    [ logOutAccountId, refreshLibraryAccountId ],
  )

  const sideMenuOnChange = useCallback(
    isOpen => {
      if(!isOpen && getLocationPathname() === '/drawer') {
        history.goBack()
      }
    },
    [],
  )

  const openImportBooks = useCallback(
    () => {
      setImportingBooks(true)
      history.goBack()
    },
    [],
  )

  const closeImportingBooks = useCallback(() => setImportingBooks(false), [])

  useEffect(
    () => {
      // If they have clicked on one of the links in the import
      // results, close the import dialog.
      if(location.pathname !== '/') {
        setImportingBooks(false)
      }
    },
    [ location ],
  )

  const scope = library.scope || "all"

  const LibraryViewer = library.view == "covers" ? LibraryCovers : LibraryList
  const bookList = scope == 'all'
    ? library.bookList
    : (scope == 'device'
      ? library.bookList.filter(bookId => books[bookId].downloadStatus == 2)
      : library.bookList.filter(bookId => (
        Object.keys(books[bookId].accounts).some(accountId => accountId.split(':')[0] == scope.split(':')[0])
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

  if(logOutUrl) {
    return (
      <SafeLayout>
        <AppHeader hide={true} />
        <WebView
          style={styles.flex1}
          source={getReqOptionsWithAdditions({
            uri: logOutUrl,
            headers: {
              "x-cookie-override": (accounts[logOutAccountId || refreshLibraryAccountId] || {}).cookie,
            },
          })}
          onLoad={logOutUrlOnLoad}
          onError={logOutUrlOnLoad}  // Even if it fails, log them out on the device at least
        />
        <CoverAndSpin
          text={
            Object.values(idps).every(idp => idp.idpNoAuth)
              ? i18n("Finding books...")
              : i18n("Logging out...")
          }
          style={{ backgroundColor: 'white' }}
        />
      </SafeLayout>
    )
  }

  return (
    <SideMenu
      menu={<AppMenu onImportBooks={openImportBooks} />}
      openMenuOffset={280}
      isOpen={location.pathname === '/drawer'}
      onChange={sideMenuOnChange}
      disableGestures={true}
    >

      <Switch>
        <Route path="/error" component={ErrorMessage} />
        <Route path="/book/:id" component={Book} />
        <Route>

          <SafeLayout>
            <LibraryHeader
              scope={scope}
            />
            {fetchingBooks && bookList.length == 0
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
  setSort,
  setFetchingBooks,
  removeAccount,
  updateAccount,
  setReaderStatus,
  clearAllSpinePageCfis,
  autoUpdateCoreIdps,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Library))

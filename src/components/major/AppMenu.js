import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { Route, Link } from "../routers/react-router"
import { withRouter } from "react-router"
import { Image, StyleSheet, Linking, Platform, TouchableOpacity, View, Text } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
import { Layout, Drawer } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"
import { getDataOrigin } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"
import useRouterState from "../../hooks/useRouterState"
import BookImporter from "./BookImporter"

import { confirmRemoveAllEPubs, confirmRemoveAccountEPubs } from "../../utils/removeEpub.js"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines,
         clearUserDataExceptProgress, changeLibraryScope } from "../../redux/actions.js"

const {
  LINK_TO_TOAD_READER_MARKETING_SITE,
  INCLUDE_TOAD_READER_PROMO_TEXT,
} = Constants.manifest.extra
        
const styles = StyleSheet.create({
  separator: {
    backgroundColor: '#e8e8e8',
  },
  image: {
    width: '100%',
    height: 0,
    paddingBottom: '50%',
    resizeMode: 'cover',
    backgroundColor: '#e8e8e8',
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
  },
  createdByContainer: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  createdBy: {
    textAlign: 'center',
    fontSize: 12,
    color: '#cccccc',
  },
  launchYour: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999999',
  },
})

const AppMenu = ({
  history,
  changeLibraryScope,
  accounts,
  idps,
  books,
}) => {

  const [ importingBooks, setImportingBooks ] = useState(false)
  const toggleImportingBooks = () => setImportingBooks(!importingBooks)

  const { online } = useNetwork()
  const [ pushToHistory ] = useRouterState({ history })

  const showAll = useCallback(
    () => {
      changeLibraryScope({ scope: "all" })
      history.goBack()
    },
    [ changeLibraryScope, history ],
  )

  const showDeviceOnly = useCallback(
    () => {
      changeLibraryScope({ scope: "device" })
      history.goBack()
    },
    [ changeLibraryScope, history ],
  )

  const confirmLogOut = useCallback(
    () => {
      const accountId = Object.keys(accounts)[0] || ""
      const idpId = accountId.split(':')[0]

      if(!idpId || !idps[idpId]) return

      confirmRemoveAccountEPubs(
        {
          books,
          removeFromBookDownloadQueue,
          setDownloadStatus,
          clearTocAndSpines,
          clearUserDataExceptProgress,
        },
        () => {
          pushToHistory("/", {
            logOutUrl: `${getDataOrigin(idps[idpId])}/logout`,
            logOutAccountId: accountId,
          })
        },
      )
    },
    [ accounts, idps, history, books ],
  )

  const reLogin = useCallback(
    async () => {
      const accountId = Object.keys(accounts)[0] || ""
      const idpId = accountId.split(':')[0]

      if(!idpId || !idps[idpId]) return
      
      // To force a refresh on the library, I need to call the url below and then open
      // up a webview with the userDataUrl since the shibboleth 
      // login process includes javascript onload calls. When that process was over and it
      // arrives back at the userDataUrl, then I would want to continue to get the library
      // listing. In other words, I basically need to call the next line and run the whole
      // login process again, but hidden.

      pushToHistory("/", {
        logOutUrl: `${getDataOrigin(idps[idpId])}/logout/callback?noredirect=1`,
        refreshLibraryAccountId: accountId,
      })
    },
    [ accounts, idps, history ],
  )

  const removeAllEPubs = useCallback(
    () => {
      confirmRemoveAllEPubs({
        books,
        removeFromBookDownloadQueue,
        setDownloadStatus,
        clearTocAndSpines,
        clearUserDataExceptProgress,
      })
    },
    [ books ],
  )

  const goToToadReaderMarketingSite = useCallback(
    () => {
      Linking.openURL("https://toadreader.com").catch(err => {
        console.log('ERROR: Request to open URL failed.', err)
        pushToHistory("/error", {
          message: i18n("Your device is not allowing us to open this link."),
        })
      })
    },
    [ history ],
  )

  const accountIdpIds = []
  const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
    const idpId = accountId.split(':')[0]
    if(accountIdpIds.includes(idpId)) return true
    accountIdpIds.push(idpId)
  })

  const renderHeader = useCallback(
    () => (
      <Image
        source={require('../../../assets/images/drawer.png')}
        style={styles.image}
      />
    ),
    [],
  )

  // const libraryIcon = useCallback(style => <Ionicons {...style} name="md-book" />, [])
  // const onDeviceIcon = useCallback(style => <Ionicons {...style} name="md-checkmark" />, [])
  // // const accountsIcon = useCallback(style => <Ionicons {...style} name="md-person" />, [])
  // const refreshIcon = useCallback(style => <Ionicons {...style} name="md-refresh" />, [])
  // const removeIcon = useCallback(style => <Ionicons {...style} name="md-remove-circle" />, [])
  // const logOutIcon = useCallback(style => <Ionicons {...style} name="md-log-out" />, [])

  let isAdmin = false
  let bookImporterAccountId
  Object.keys(accounts).some(accountId => {
    if(accounts[accountId].isAdmin) {
      isAdmin = true
      bookImporterAccountId = accountId
      return true
    }
  })

  const drawerData = [
    {
      title: i18n("Library"),
      // icon: libraryIcon,
      onSelect: showAll,
    },
    ...(Platform.OS === 'web' ? [] : [
      {
        title: i18n("On device only"),
        // icon: onDeviceIcon,
        onSelect: showDeviceOnly,
      },
    ]),
    ...(Object.keys(accounts).length === 1 ? [] : Object.keys(accounts).map(id => ({
      title: i18n("{{tenant}} only", { tenant: idps[id.split(':')[0]].idpName }),
      // {!!hasMultipleAccountsForSingleIdp &&
      //   <Text>{accounts[id].email}</Text>
      // }
      // icon: libraryIcon,
      onSelect: () => {
        changeLibraryScope({ scope: id })
        history.goBack()
      },
    }))),
    {
      style: styles.separator,
    },
    // {
    //   title: i18n("Accounts"),
    //   icon: accountsIcon,
    //   path: `${match.url}/accounts`,
    // },
    {
      title: i18n("Refresh book list"),
      // icon: refreshIcon,
      onSelect: online ? reLogin : null,
      disabled: !online,
    },
    {
      title: i18n("Remove all books"),
      // icon: removeIcon,
      onSelect: removeAllEPubs,
    },
    ...(Object.values(idps).every(idp => idp.idpNoAuth) ? [] : [
      {
        title: i18n("Log out"),
        // icon: logOutIcon,
        onSelect: confirmLogOut,
      },
    ]),
    ...(!(isAdmin && Platform.OS === 'web') ? [] : [
      {
        style: styles.separator,
      },
      {
        title: i18n("Import books to server"),
        // icon: onDeviceIcon,
        onSelect: toggleImportingBooks,
      },
    ]),
  ]

  drawerData.forEach(drawerItem => drawerItem.titleStyle = styles.title)

  const onRouteSelect = index => {
    const { [index]: route } = drawerData

    if(route.onSelect) {
      route.onSelect()
    } else if(route.path) {
      history.push(route.path)
    }
  }

  const renderFooter = !LINK_TO_TOAD_READER_MARKETING_SITE ? null : useCallback(
    () => (
      <TouchableOpacity
        onPress={goToToadReaderMarketingSite}
      >
        <View style={styles.createdByContainer}>
          <Text style={styles.createdBy}>{i18n("Created by Toad Reader")}</Text>
          {!!INCLUDE_TOAD_READER_PROMO_TEXT &&
            <Text style={styles.launchYour}>{i18n("Launch your custom eReader")}</Text>
          }
        </View>
      </TouchableOpacity>
    ),
    [],
  )

  return (
    <Layout>
      <Drawer
        data={drawerData}
        onSelect={onRouteSelect}
        header={renderHeader}
        footer={renderFooter}
      />
      <BookImporter
        open={!!importingBooks}
        accountId={bookImporterAccountId}
        onDone={toggleImportingBooks}
      />
    </Layout>
  )
}

const mapStateToProps = ({ accounts, idps, books }) => ({
  accounts,
  idps,
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  changeLibraryScope,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(AppMenu))

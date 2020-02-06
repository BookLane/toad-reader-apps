import React, { useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { Route, Link } from "../routers/react-router"
import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, Alert } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
import { Layout, Drawer } from "@ui-kitten/components"
import { i18n } from "inline-i18n"
import { getIdsFromAccountId, openURL } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"
import useRouterState from "../../hooks/useRouterState"
import BackFunction from '../basic/BackFunction'
import useHasNoAuth from "../../hooks/useHasNoAuth"

import { removeAllEPubs, removeAccountEPubs } from "../../utils/removeEpub"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines,
         clearUserDataExceptProgress, changeLibraryScope } from "../../redux/actions"

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
    fontWeight: '400',
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
  onImportBooks,

  accounts,
  idps,
  books,

  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  changeLibraryScope,
}) => {

  const { online } = useNetwork()
  const { historyPush, historyReplace, historyGoBack, pathname } = useRouterState()

  const hasNoAuth = useHasNoAuth(accounts)

  const showAll = useCallback(
    () => {
      changeLibraryScope({ scope: "all" })
      historyGoBack()
    },
    [ changeLibraryScope ],
  )

  const showDeviceOnly = useCallback(
    () => {
      changeLibraryScope({ scope: "device" })
      historyGoBack()
    },
    [ changeLibraryScope ],
  )

  const confirmLogOut = useCallback(
    () => {
      const accountId = Object.keys(accounts)[0] || ""
      const { idpId } = getIdsFromAccountId(accountId)

      if(!idpId || !idps[idpId]) return

      const doLogOut = () => {
        historyGoBack()
        setTimeout(() => {
          historyReplace("/", {
            logOutAccountId: accountId,
          })
        }, 100)
      }

      if(Platform.OS === 'web') {
        doLogOut()
        return
      }

      Alert.alert(
        i18n("Log out"),
        i18n("Are you sure you want to log out and remove all books from this device?"),
        [
          {
            text: i18n("Cancel"),
            style: 'cancel',
          },
          {
            text: i18n("Log out"),
            onPress: async () => {
              await removeAccountEPubs(
                {
                  books,
                  removeFromBookDownloadQueue,
                  setDownloadStatus,
                  clearTocAndSpines,
                  clearUserDataExceptProgress,
                },
              )

              doLogOut()
            },
            // style: 'destructive',
          },
        ],
        { cancelable: false }
      )
    },
    [ accounts, idps, books ],
  )

  const reLogin = useCallback(
    async () => {
      const accountId = Object.keys(accounts)[0] || ""
      const { idpId } = getIdsFromAccountId(accountId)

      if(!idpId || !idps[idpId]) return
      
      // To force a refresh on the library, I need to call the url below and then open
      // up a webview with the userDataUrl since the shibboleth 
      // login process includes javascript onload calls. When that process was over and it
      // arrives back at the userDataUrl, then I would want to continue to get the library
      // listing. In other words, I basically need to call the next line and run the whole
      // login process again, but hidden.

      historyGoBack()
      setTimeout(() => {
        historyReplace("/", {
          refreshLibraryAccountId: accountId,
        })
      }, 100)
    },
    [ accounts, idps ],
  )

  const confirmRemoveAllEPubs = useCallback(
    () => {
      Alert.alert(
        i18n("Remove all books"),
        i18n("Are you sure you want to remove all books from this device?"),
        [
          {
            text: i18n("Cancel"),
            style: 'cancel',
          },
          {
            text: i18n("Remove all books"),
            onPress: async () => {
              await removeAllEPubs({
                books,
                removeFromBookDownloadQueue,
                setDownloadStatus,
                clearTocAndSpines,
                clearUserDataExceptProgress,
              })

              Alert.alert(i18n("All books have been removed."))
            },
            // style: 'destructive',
          },
        ],
        { cancelable: false }
      )
    },
    [ books ],
  )

  const goToToadReaderMarketingSite = useCallback(
    () => openURL({ url: "https://toadreader.com", historyPush }),
    [],
  )

  const accountIdpIds = []
  const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
    const { idpId } = getIdsFromAccountId(accountId)
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

  const goToReports = useCallback(
    () => {
      historyReplace(`/reports`)
    },
    [ idps ],
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
      title: i18n("{{tenant}} only", { tenant: idps[id.split(':')[0]].name }),
      // {!!hasMultipleAccountsForSingleIdp &&
      //   <Text>{accounts[id].email}</Text>
      // }
      // icon: libraryIcon,
      onSelect: () => {
        changeLibraryScope({ scope: id })
        historyGoBack()
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
      onSelect: confirmLogOut,
      // onSelect: online ? reLogin : null,
      disabled: !online,
    },
    ...(Platform.OS === 'web' ? [] : [
      {
        title: i18n("Remove all books"),
        // icon: removeIcon,
        onSelect: confirmRemoveAllEPubs,
      },
    ]),
    ...(hasNoAuth ? [] : [
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
        onSelect: onImportBooks,
      },
    ]),
    ...(!isAdmin ? [] : [
      {
        title: i18n("Reports"),
        // icon: onDeviceIcon,
        onSelect: goToReports,
      },
    ]),
  ]

  drawerData.forEach(drawerItem => drawerItem.titleStyle = styles.title)

  const onRouteSelect = index => {
    const { [index]: route } = drawerData

    if(route.onSelect) {
      route.onSelect()
    } else if(route.path) {
      historyPush(route.path)
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
      {pathname === '/drawer' && <BackFunction func={historyGoBack} />}
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

export default connect(mapStateToProps, matchDispatchToProps)(AppMenu)

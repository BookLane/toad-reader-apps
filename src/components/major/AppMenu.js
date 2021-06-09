import React, { useState, useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { Route, Link } from "../routers/react-router"
import { Image, StyleSheet, Platform, TouchableOpacity, View, Text, Alert } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
import { Layout, Drawer, DrawerItem } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import { getIdsFromAccountId, openURL } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"
import useRouterState from "../../hooks/useRouterState"
import BackFunction from '../basic/BackFunction'
import useHasNoAuth from "../../hooks/useHasNoAuth"
import CoverAndSpin from "../basic/CoverAndSpin"

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
  subversion: {
    fontSize: 9,
    textAlign: 'center',
    color: '#ddd',
    paddingBottom: 20,
  },
})

const AppMenu = ({
  onImportBooks,
  onReplaceExisting,
  onShowEnvironmentUrls,
  onOpenAccessCodeDialog,

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
  const [ loading, setLoading ] = useState(false)

  const hasNoAuth = useHasNoAuth(accounts)
  const { authMethod, devAuthMethod, accessCodeInfo } = Object.values(idps)[0] || {}
  const isNoneOrEmail = ['NONE_OR_EMAIL'].includes((__DEV__ && devAuthMethod) || authMethod)

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
            onPress: () => {
              
              setLoading(true)  // timeout needed after this to allow it to show

              setTimeout(async () => {
                await removeAccountEPubs(
                  {
                    books,
                    removeFromBookDownloadQueue,
                    setDownloadStatus,
                    clearTocAndSpines,
                    clearUserDataExceptProgress,
                  },
                )

                setLoading(false)

                doLogOut()
              })

            },
            // style: 'destructive',
          },
        ],
        { cancelable: false }
      )
    },
    [ accounts, idps, books ],
  )

  const doEmailLogin = useCallback(
    () => {
      historyGoBack()
      setTimeout(() => {
        historyReplace("/", {
          doEmailLogin: true,
        })
      }, 100)
    },
    [],
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

              setLoading(true)  // timeout needed after this to allow it to show

              setTimeout(async () => {
                await removeAllEPubs({
                  books,
                  removeFromBookDownloadQueue,
                  setDownloadStatus,
                  clearTocAndSpines,
                  clearUserDataExceptProgress,
                })
  
                setLoading(false)

                Alert.alert(i18n("All books have been removed."))
              })

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

  // const accountIdpIds = []
  // const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
  //   const { idpId } = getIdsFromAccountId(accountId)
  //   if(accountIdpIds.includes(idpId)) return true
  //   accountIdpIds.push(idpId)
  // })

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
    ...((Platform.OS === 'web' && hasNoAuth && !isNoneOrEmail) ? [] : [
      {
        style: styles.separator,
      },
    ]),
    // {
    //   title: i18n("Accounts"),
    //   icon: accountsIcon,
    //   path: `${match.url}/accounts`,
    // },
    ...(!(accessCodeInfo && !hasNoAuth) ? [] : [
      {
        title: accessCodeInfo.buttonText || i18n("Enter access code"),
        // icon: removeIcon,
        onSelect: onOpenAccessCodeDialog,
      },
    ]),
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
    ...(!(hasNoAuth && isNoneOrEmail) ? [] : [
      {
        title: i18n("Log in with email"),
        // icon: logOutIcon,
        onSelect: doEmailLogin,
      },
    ]),
    ...(!isAdmin ? [] : [
      {
        style: styles.separator,
      },
    ]),
    ...(!(isAdmin && Platform.OS === 'web') ? [] : [
      {
        title: i18n("Import books to server"),
        // icon: onDeviceIcon,
        onSelect: onImportBooks,
        disabled: !online,
      },
    ]),
    ...(!(isAdmin && Platform.OS === 'web') ? [] : [
      {
        title: i18n("Replace an existing EPUB"),
        // icon: onDeviceIcon,
        onSelect: onReplaceExisting,
        disabled: !online,
      },
    ]),
    ...(!(isAdmin && Platform.OS === 'web') ? [] : [
      {
        title: i18n("Show environment URLs"),
        onSelect: onShowEnvironmentUrls,
        disabled: !online,
      },
    ]),
    ...(!isAdmin ? [] : [
      {
        title: i18n("Reports"),
        // icon: onDeviceIcon,
        onSelect: goToReports,
        disabled: !online,
      },
    ]),
  ]

  const onRouteSelect = ({ row: index }) => {
    const { [index]: route } = drawerData

    if(route.onSelect) {
      route.onSelect()
    } else if(route.path) {
      historyPush(route.path)
    }
  }

  const renderFooter = useCallback(
    () => (
      <>
        {!!LINK_TO_TOAD_READER_MARKETING_SITE &&
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
        }
        <Text style={styles.subversion}>Updated PUSH_DATE_STRING</Text>
      </>
    ),
    [],
  )

  return (
    <Layout>
      <Drawer
        onSelect={onRouteSelect}
        header={renderHeader}
        footer={renderFooter}
      >
        {drawerData.map(({ title, disabled, style }, idx) => (
          <DrawerItem
            key={idx}
            title={title}
            titleStyle={title}
            disabled={disabled}
            style={style}
          />
        ))}
      </Drawer>
      {loading &&
        <CoverAndSpin
          text={i18n("Removing books...")}
        />
      }
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

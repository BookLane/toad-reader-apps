import React, { useCallback } from "react"
import Constants from 'expo-constants'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// import { Route, Link } from "../routers/react-router"
import { withRouter } from "react-router"
import { Image, StyleSheet, Linking, Dimensions, StatusBar, TouchableOpacity, Text, View } from "react-native"
// import { Ionicons } from "@expo/vector-icons"
import { Layout, List, ListItem } from "react-native-ui-kitten"
import i18n from "../../utils/i18n.js"
import { getDataOrigin } from "../../utils/toolbox"
import useNetwork from "../../hooks/useNetwork"

import { confirmRemoveAllEPubs, confirmRemoveAccountEPubs } from "../../utils/removeEpub.js"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines,
         clearUserDataExceptProgress, changeLibraryScope } from "../../redux/actions.js"

const {
  LINK_TO_TOAD_READER_MARKETING_SITE,
  INCLUDE_TOAD_READER_PROMO_TEXT,
} = Constants.manifest.extra
        
const styles = StyleSheet.create({
  separator: {
    flex: 0,
    height: 10,
    backgroundColor: '#e8e8e8',
  },
  image: {
    width: '100%',
    height: 0,
    paddingBottom: '50%',
    resizeMode: 'cover',
    backgroundColor: '#e8e8e8',
  },
  offline: {
    opacity: .25,
  },
  list: {
    flex: 1,
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

const Drawer = ({
  history,
  changeLibraryScope,
  accounts,
  idps,
  books,
}) => {

  const { online } = useNetwork()

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
          history.push("/", {
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

      history.push("/", {
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
        history.push("/error", {
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

  const { height } = Dimensions.get('window')
  const minHeight = height - (StatusBar.currentHeight || 0)

  return (
    <Layout>
      <View>
        <View style={{ minHeight }}>
          <Image
            source={require('../../../assets/images/drawer.png')}
            style={styles.image}
          />
          <List style={styles.list}>
            <ListItem icon
              button
              onPress={showAll}
            >
              {/* <Left>
                <Ionicons name="book" />
              </Left>
              <Body>
                <Text>{i18n("Library")}</Text> 
              </Body> */}
            </ListItem>
            {Object.keys(accounts).length > 1 && Object.keys(accounts).map(id => (
              <ListItem icon
                key={id}
                button
                onPress={() => {
                  changeLibraryScope({ scope: id })
                  history.goBack()
                }}
              >
                {/* <Left>
                  <Ionicons name="book" />
                </Left>
                <Body>
                  <Text>{i18n("{{tenant}} only", { tenant: idps[id.split(':')[0]].idpName })}</Text>
                  {!!hasMultipleAccountsForSingleIdp &&
                    <Text>{accounts[id].email}</Text>
                  }
                </Body> */}
              </ListItem>
            ))}
            <ListItem icon
              button
              onPress={showDeviceOnly}
            >
              {/* <Left>
                <Ionicons name="md-checkmark" />
              </Left>
              <Body>
                <Text>{i18n("On device only")}</Text>
              </Body> */}
            </ListItem>
            {/* TODO */}
            {/* <Separator bordered
              style={styles.separator}
            /> */}
            
            {/* <Link to={`${match.url}/accounts`}>
              <ListItem icon
                button
              >
                <Left>
                  <Ionicons name="person" />
                </Left>
                <Body>
                  <Text>{i18n("Accounts")}</Text> 
                </Body>
              </ListItem>
            </Link> */}

            <ListItem icon
              button
              onPress={online ? reLogin : null}
              style={online ? null : styles.offline}
            >
              {/* <Left>
                <Ionicons name="refresh" />
              </Left>
              <Body>
                <Text>{i18n("Refresh book list")}</Text>
              </Body> */}
            </ListItem>
            <ListItem icon
              button
              onPress={removeAllEPubs}
            >
              {/* <Left>
                <Ionicons name="remove-circle" />
              </Left>
              <Body>
                <Text>{i18n("Remove all books")}</Text>
              </Body> */}
            </ListItem>
            {Object.values(idps).some(idp => !idp.idpNoAuth) &&
              <ListItem icon
                button
                onPress={confirmLogOut}
              >
                {/* <Left>
                  <Ionicons name="log-out" />
                </Left>
                <Body>
                  <Text>{i18n("Log out")}</Text> 
                </Body> */}
              </ListItem>
            }
          </List>
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
        </View>
      </View>
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

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Drawer))

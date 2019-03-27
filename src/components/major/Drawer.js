import React from "react"
import { Constants } from "expo"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, NetInfo, Linking, Dimensions, StatusBar, TouchableOpacity } from "react-native"
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Separator, View } from "native-base"
import i18n from "../../utils/i18n.js"

import { confirmRemoveAllEPubs, confirmRemoveAccountEPubs } from "../../utils/removeEpub.js"
import { debounce, isConnected } from "../../utils/toolbox.js"

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

class Drawer extends React.Component {

  state = {
    offline: false,
  }

  componentDidMount() {
    isConnected().then(this.setOfflineStatus)
    NetInfo.addEventListener('connectionChange', this.setOfflineStatus)
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.setOfflineStatus)
  }

  setOfflineStatus = connectionInfo => {
    this.setState({ offline: connectionInfo.type === 'none' })
  }

  goToLibrary = () => {
    const { navigation } = this.props

    debounce(navigation.navigate, "Library")
  }

  showAll = () => {
    const { changeLibraryScope } = this.props

    changeLibraryScope({ scope: "all" })
    this.goToLibrary()
  }

  showDeviceOnly = () => {
    const { changeLibraryScope } = this.props

    changeLibraryScope({ scope: "device" })
    this.goToLibrary()
  }

  goToAccounts = () => {
    const { navigation } = this.props

    debounce(navigation.navigate, "Accounts")
  }

  confirmLogOut = () => {
    const { accounts, idps, navigation } = this.props

    const accountId = Object.keys(accounts)[0] || ""
    const idpId = accountId.split(':')[0]

    if(!idpId || !idps[idpId]) return

    confirmRemoveAccountEPubs(this.props, () => {
      debounce(navigation.navigate, "Library", {
        logOutUrl: `https://${idps[idpId].domain}/logout`,
        logOutAccountId: accountId,
      })
    })
  }

  reLogin = async () => {
    const { accounts, idps, navigation } = this.props

    const accountId = Object.keys(accounts)[0] || ""
    const idpId = accountId.split(':')[0]

    if(!idpId || !idps[idpId]) return
    
    // To force a refresh on the library, I need to call the url below and then open
    // up a webview with the userDataUrl (with App-Request header) since the shibboleth 
    // login process includes javascript onload calls. When that process was over and it
    // arrives back at the userDataUrl, then I would want to continue to get the library
    // listing. In other words, I basically need to call the next line and run the whole
    // login process again, but hidden.

    debounce(navigation.navigate, "Library", {
      logOutUrl: `https://${idps[idpId].domain}/logout/callback?noredirect=1`,
      refreshLibraryAccountId: accountId,
    })
  }

  removeAllEPubs = () => {
    confirmRemoveAllEPubs(this.props)
  }

  goToToadReaderMarketingSite = () => {
    Linking.openURL("https://toadreader.com").catch(err => {
      console.log('ERROR: Request to open URL failed.', err)
      navigation.navigate("ErrorMessage", {
        message: i18n("Your device is not allowing us to open this link."),
      })
    })
  }

  render() {
    const { accounts, idps, books, navigation } = this.props
    const { offline } = this.state

    const accountIdpIds = []
    const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
      const idpId = accountId.split(':')[0]
      if(accountIdpIds.includes(idpId)) return true
      accountIdpIds.push(idpId)
    })

    const { height } = Dimensions.get('window')
    const minHeight = height - (StatusBar.currentHeight || 0)

    return (
      <Container>
        <Content>
          <View style={{ minHeight }}>
            <Image
              source={require('../../../assets/images/drawer.png')}
              style={styles.image}
            />
            <List style={styles.list}>
              <ListItem icon
                button
                onPress={this.showAll}
              >
                <Left>
                  <Icon name="book" />
                </Left>
                <Body>
                  <Text>{i18n("Library")}</Text> 
                </Body>
              </ListItem>
              {Object.keys(accounts).length > 1 && Object.keys(accounts).map(id => (
                <ListItem icon
                  key={id}
                  button
                  onPress={() => {
                    changeLibraryScope({ scope: id })
                    this.goToLibrary()
                  }}
                >
                  <Left>
                    <Icon name="book" />
                  </Left>
                  <Body>
                    <Text>{i18n("{{tenant}} only", { tenant: idps[id.split(':')[0]].idpName })}</Text>
                    {!!hasMultipleAccountsForSingleIdp &&
                      <Text>{accounts[id].email}</Text>
                    }
                  </Body>
                </ListItem>
              ))}
              <ListItem icon
                button
                onPress={this.showDeviceOnly}
              >
                <Left>
                  <Icon name="md-checkmark" />
                </Left>
                <Body>
                  <Text>{i18n("On device only")}</Text>
                </Body>
              </ListItem>
              <Separator bordered
                style={styles.separator}
              />
              {/* <ListItem icon
                button
                onPress={this.goToAccounts}
              >
                <Left>
                  <Icon name="person" />
                </Left>
                <Body>
                  <Text>{i18n("Accounts")}</Text> 
                </Body>
              </ListItem> */}
              <ListItem icon
                button
                onPress={offline ? null : this.reLogin}
                style={offline ? styles.offline : null}
              >
                <Left>
                  <Icon name="refresh" />
                </Left>
                <Body>
                  <Text>{i18n("Refresh book list")}</Text>
                </Body>
              </ListItem>
              <ListItem icon
                button
                onPress={this.removeAllEPubs}
              >
                <Left>
                  <Icon name="remove-circle" />
                </Left>
                <Body>
                  <Text>{i18n("Remove all books")}</Text>
                </Body>
              </ListItem>
              {Object.values(idps).some(idp => !idp.idpNoAuth) &&
                <ListItem icon
                  button
                  onPress={this.confirmLogOut}
                >
                  <Left>
                    <Icon name="log-out" />
                  </Left>
                  <Body>
                    <Text>{i18n("Log out")}</Text> 
                  </Body>
                </ListItem>
              }
            </List>
            {!!LINK_TO_TOAD_READER_MARKETING_SITE &&
              <TouchableOpacity
                onPress={this.goToToadReaderMarketingSite}
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
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  idps: state.idps,
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  changeLibraryScope,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Drawer)

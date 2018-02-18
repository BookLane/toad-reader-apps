import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet, WebView } from "react-native"
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Separator, View } from "native-base"
import i18n from "../../utils/i18n.js"

import FullScreenSpin from "../basic/FullScreenSpin"

import { confirmRemoveAllEPubs, confirmRemoveAccountEPubs } from "../../utils/removeEpub.js"

import { setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress, removeAccount } from "../../redux/actions.js"

const styles = StyleSheet.create({
  imageContainer: {
    paddingBottom: '50%',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#eeeef3',
  },
  hiddenWebView: {
    position: 'absolute',
    top: -300,
    left: 0,
    width: 1,
    height: 1,
  },
})

class Drawer extends React.Component {

  state = {
    logOutUrl: null,
  }

  showAll = () => {
    const { navigation } = this.props

    navigation.navigate("Library", { scope: "all" })
  }

  showDeviceOnly = () => {
    const { navigation } = this.props

    navigation.navigate("Library", { scope: "device" })
  }

  goToAccounts = () => {
    const { navigation } = this.props

    navigation.navigate("Accounts")
  }

  confirmLogOut = () => {
    const { accounts, idps } = this.props

    const accountId = Object.keys(accounts)[0] || ""
    const idpId = accountId.split(':')[0]

    if(!idpId || !idps[idpId]) return

    const callback = async () => {
      // I need to log out via a webview (and not fetch) because log out urls might contain
      // javascript or iframes needed to fully log the user out.
      const logOutUrl = `https://${idps[idpId].domain}/logout`
      this.setState({ logOutUrl })
    }

    confirmRemoveAccountEPubs(this.props, callback)
  }

  logOurUrlOnLoad = () => {
    const { removeAccount } = this.props

    removeAccount({ accountId })
    this.setState({ logOutUrl: null })
  }

  logOurUrlOnError = () => {
    // TODO: something
  }

  removeAllEPubs = () => {
    confirmRemoveAllEPubs(this.props)
  }

  render() {
    const { accounts, idps, books, navigation } = this.props
    const { logOutUrl } = this.state

    const accountIdpIds = []
    const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
      const idpId = accountId.split(':')[0]
      if(accountIdpIds.includes(idpId)) return true
      accountIdpIds.push(idpId)
    })

    return (
      <Container>
        <Content>
          {logOutUrl && 
            <WebView
              style={styles.hiddenWebView}
              source={{
                uri: logOutUrl,
              }}
              onLoad={this.logOurUrlOnLoad}
              onError={this.logOurUrlOnError}
            />
          }
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: "https://s3-us-west-2.amazonaws.com/biblemesh-readium/tenant_assets/drawer-2.png"
              }}
              style={styles.image}
            />
          </View>
          <List>
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
                onPress={() => navigation.navigate("Library", { scope: id })}
              >
                <Left>
                  <Icon name="book" />
                </Left>
                <Body>
                  <Text>{i18n("{{tenant}} only", { tenant: idps[id.split(':')[0]].idpName })}</Text>
                  {hasMultipleAccountsForSingleIdp &&
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
                <Icon name="checkmark" />
              </Left>
              <Body>
                <Text>{i18n("On device only")}</Text>
              </Body>
            </ListItem>
            <Separator bordered />
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
              onPress={this.removeAllEPubs}
            >
              <Left>
                <Icon name="remove-circle" />
              </Left>
              <Body>
                <Text>{i18n("Remove all books")}</Text>
              </Body>
            </ListItem>
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
          </List>
          {logOutUrl && <FullScreenSpin />}
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
  setDownloadStatus,
  clearTocAndSpines,
  clearUserDataExceptProgress,
  removeAccount,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Drawer)

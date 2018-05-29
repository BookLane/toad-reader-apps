import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet } from "react-native"
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Separator, View } from "native-base"
import i18n from "../../utils/i18n.js"

import { confirmRemoveAllEPubs, confirmRemoveAccountEPubs } from "../../utils/removeEpub.js"
import { debounce } from "../../utils/toolbox.js"

import { removeFromBookDownloadQueue, setDownloadStatus, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions.js"

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 0,
    paddingBottom: '50%',
    resizeMode: 'cover',
    backgroundColor: '#eeeef3',
  },
})

class Drawer extends React.Component {

  showAll = () => {
    const { navigation } = this.props

    debounce(navigation.navigate, "Library", { scope: "all" })
  }

  showDeviceOnly = () => {
    const { navigation } = this.props

    debounce(navigation.navigate, "Library", { scope: "device" })
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

  render() {
    const { accounts, idps, books, navigation } = this.props

    const accountIdpIds = []
    const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
      const idpId = accountId.split(':')[0]
      if(accountIdpIds.includes(idpId)) return true
      accountIdpIds.push(idpId)
    })

    return (
      <Container>
        <Content>
          <Image
            source={require('../../../assets/images/drawer.png')}
            style={styles.image}
          />
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
                onPress={() => debounce(navigation.navigate, "Library", { scope: id })}
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
              onPress={this.reLogin}
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
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Drawer)

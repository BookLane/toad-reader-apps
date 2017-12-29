import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Image, StyleSheet } from "react-native"
import { Container, Content, Text, List, ListItem, Left, Icon, Body, Separator, View } from "native-base"
import i18n from "../../utils/i18n.js"

import { confirmRemoveAllEPubs } from "../../utils/removeEpub.js"

import { setDownloadStatus } from "../../redux/actions.js"

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
})

class Drawer extends React.Component {

  render() {

    const { accounts, idps, books, setDownloadStatus, navigation } = this.props
    const accountIdpIds = []
    const hasMultipleAccountsForSingleIdp = Object.keys(accounts).some(accountId => {
      const idpId = accountId.split(':')[0]
      if(accountIdpIds.includes(idpId)) return true
      accountIdpIds.push(idpId)
    })

    return (
      <Container>
        <Content>
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
              onPress={() => navigation.navigate("Library", { scope: "all" })}
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
              onPress={() => navigation.navigate("Library", { scope: "device" })}
            >
              <Left>
                <Icon name="checkmark" />
              </Left>
              <Body>
                <Text>{i18n("On device only")}</Text>
              </Body>
            </ListItem>
            <Separator bordered />
            <ListItem icon
              button
              onPress={() => navigation.navigate("Accounts")}
            >
              <Left>
                <Icon name="person" />
              </Left>
              <Body>
                <Text>{i18n("Accounts")}</Text> 
              </Body>
            </ListItem>
            <ListItem icon
              button
              onPress={() => confirmRemoveAllEPubs({ books, setDownloadStatus })}
            >
              <Left>
                <Icon name="remove-circle" />
              </Left>
              <Body>
                <Text>{i18n("Remove all books")}</Text>
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
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Drawer)

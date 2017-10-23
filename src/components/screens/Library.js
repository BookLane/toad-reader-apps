import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"
import i18n from "../../utils/i18n.js"

import { addBooks, resort, setFetchingBooks } from '../../redux/actions.js';

class Library extends React.Component {

  async fetchAll() {
    for(accountId in this.props.accounts) {
      try {
        const [ idpId, userId ] = accountId.split(':')
        const libraryUrl = `https://${this.props.idps[idpId].domain}/epub_content/epub_library.json`
        let response = await fetch(libraryUrl)
        if(response.status == 403) {
          await fetch(`https://${this.props.idps[idpId].domain}`)  // gets the cookie situated on the demo acct
          response = await fetch(libraryUrl)
        }
        if(response.status != 200) {
          throw new Error('Unable to fetch library');
        }
        const books = await response.json()
        this.props.addBooks({
          books,
          accountId,
        })
        this.props.resort()
        // TODO: needs to call function to remove books that are no longer in the account
      } catch(error) {
        console.log('error', error)
        // dispatch(error({
        //   books,
        //   accountId,
        // }))
      }
    }
  }
  
  componentDidMount() {
    this.setState({fetchAllInterval: setInterval(() => { this.fetchAll() }, 24*60*60*1000)})
    this.fetchAll()
  }

  componentWillUnmount() {
    clearTimeout(this.state.fetchAllInterval)
  }

  render() {

    let { scope } = this.props.navigation.state.params || {}
    scope = scope || "Library"

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{scope}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>{i18n("Library {{here}}!", { here: "HERE" })}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>{JSON.stringify(this.props.accounts)}</Text>
                <Text>{JSON.stringify(this.props.books)}</Text>
                <Text>{JSON.stringify(this.props.library)}</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>{this.props.fetchingBooks ? 'fetching' : 'not fetching'}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Page")}>
            <Text>Read book</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  idps: state.idps,
  books: state.books,
  library: state.library,
  fetchingBooks: state.fetchingBooks,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addBooks,
  resort,
  setFetchingBooks,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)

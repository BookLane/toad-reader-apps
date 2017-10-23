import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base"
import i18n from "../../utils/i18n.js"

import { addBooks } from '../../redux/actions.js';

class Library extends React.Component {


  async fetchAll() {
    
    for(accountId in this.props.accounts) {
      try {
        const [ ipdId, userId ] = accountId.split(':')
        const response = await fetch(`https://${this.props.idps[idpId].domain}/epub_content/epub_library.json`)
        const books = await response.json()
        dispatch(addBooks({
          books,
          accountId,
        }))
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
    fetchAll()
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
                <Text>{this.props.books.map(book => book.id).join(',')}</Text>
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
  fetchingBooks: state.fetchingBooks,
})

const  matchDispatchToProps = (dispatch) => bindActionCreators({
  addBooks,
  setFetchingBooks,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Library)

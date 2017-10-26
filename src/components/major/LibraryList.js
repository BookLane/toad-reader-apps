import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Content, Button, Text } from "native-base"

// import Cover from "../basic/Cover.js"

// import {  } from '../../redux/actions.js';

class LibraryCovers extends React.Component {

  render() {

    const { bookList=[], navigation, books } = this.props

    return (
      <Content padder>
        {bookList.map(bookId => (
          <Button full rounded dark
            key={bookId}
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Page")}>
            <Text>{books[bookId].title}</Text>
          </Button>
        ))}
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)

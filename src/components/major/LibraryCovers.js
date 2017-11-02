import React from "react"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Content, Button, Text } from "native-base"

import fetchEpub from '../../utils/fetchEpub.js'
// import Cover from "../basic/Cover.js"

import { setDownloadStatus } from '../../redux/actions.js';

class LibraryCovers extends React.Component {

  render() {

    const { bookList=[], navigation, books, idps, setDownloadStatus } = this.props

    return (
      <Content padder>
        {bookList.map(bookId => (
          <Button full rounded dark
            key={bookId}
            style={{ marginTop: 10 }}
            onPress={() => {
              setDownloadStatus({ bookId, downloadStatus: 1 })
              fetchEpub({
                domain: idps[books[bookId].accountIds[0].split(':')[0]].domain,
                bookId,
                success: () => setDownloadStatus({ bookId, downloadStatus: 2 })
              })
            }}>
            {/* onPress={() => navigation.navigate("Page")}> */}
            <Text>{books[bookId].title + books[bookId].downloadStatus}</Text>
          </Button>
        ))}
      </Content>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  idps: state.idps,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryCovers)

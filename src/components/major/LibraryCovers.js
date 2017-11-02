import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Content, Button, Text } from "native-base"
import { Image } from "react-native"
import { FileSystem } from "expo"

import fetchEpub from "../../utils/fetchEpub.js"
// import Cover from "../basic/Cover.js"

import { setDownloadStatus } from "../../redux/actions.js";

class LibraryCovers extends React.Component {

  render() {

    const { bookList=[], navigation, books, idps, setDownloadStatus } = this.props

    bookList.forEach(bookId => console.log(`${FileSystem.documentDirectory}covers/${bookId}/${books[bookId].coverFilename}`))
      
    return (
      <Content padder>
        {bookList.map(bookId => (
          <Content
            key={bookId}
          >
            <Image
              source={{ uri: `${FileSystem.documentDirectory}covers/${bookId}/${books[bookId].coverFilename}` }}
              style={{width: 40, height: 40}}
            />
            <Button full rounded dark
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
          </Content>
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

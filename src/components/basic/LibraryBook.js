import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"

import fetchEpub from "../../utils/fetchEpub.js"
import getToc from "../../utils/getToc.js"
import { confirmRemoveEPub } from "../../utils/removeEpub.js"

import { setDownloadStatus, setTocAndPrepSpines } from "../../redux/actions.js";

class LibraryBook extends React.Component {

  getDownloadStatus(bookId) {
    const { books } = this.props
    return books[bookId].downloadStatus
  }

  async onPress() {
    const { bookId, navigation, setDownloadStatus, setTocAndPrepSpines, idps, books } = this.props
    const downloadStatus = this.getDownloadStatus(bookId)

    if(downloadStatus == 2) {
      navigation.navigate("Page", { bookId })

    } else if(downloadStatus == 0) {
      setDownloadStatus({ bookId, downloadStatus: 1 })
      await fetchEpub({
        domain: idps[books[bookId].accountIds[0].split(':')[0]].domain,
        bookId,
        checkWasCancelled: () => (this.getDownloadStatus(bookId) != 1),
      })
      const toc = await getToc({ bookId })
      setTocAndPrepSpines({ bookId, toc })
      setDownloadStatus({ bookId, downloadStatus: 2 })
    }
  }
  
  onLongPress() {
    const { bookId, books, setDownloadStatus } = this.props

    if(this.getDownloadStatus(bookId) == 0) {
      this.onPress()
    } else {
      confirmRemoveEPub({ books, bookId, setDownloadStatus })
    }
  }

  render() {
    const { children } = this.props

    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
        onLongPress={() => this.onLongPress()}
      >{children}</TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  idps: state.idps,
})

const  matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
  setTocAndPrepSpines,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryBook)

import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"

import fetchEpub from "../../utils/fetchEpub.js"
import parseEpub from "../../utils/parseEpub.js"
import { debounce } from "../../utils/toolbox.js"
import { confirmRemoveEPub } from "../../utils/removeEpub.js"

import { setDownloadStatus, setTocAndSpines, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions.js";

class LibraryBook extends React.Component {

  getDownloadStatus(bookId) {
    const { books } = this.props
    return books[bookId].downloadStatus
  }

  onPress = async () => {
    const { bookId, navigation, setDownloadStatus, setTocAndSpines, idps, books } = this.props
    const downloadStatus = this.getDownloadStatus(bookId)

    if(downloadStatus == 2) {
      debounce(navigation.navigate, "Book", { bookId })
      
    } else if(downloadStatus == 0) {
      setDownloadStatus({ bookId, downloadStatus: 1 })
      await fetchEpub({
        domain: idps[Object.keys(books[bookId].accounts)[0].split(':')[0]].domain,
        bookId,
        checkWasCancelled: () => (this.getDownloadStatus(bookId) != 1),
      })
      const { toc, spines } = await parseEpub({ bookId })
      setTocAndSpines({ bookId, toc, spines })
      setDownloadStatus({ bookId, downloadStatus: 2 })
    }
  }
  
  onLongPress = () => {
    const { bookId } = this.props

    if(this.getDownloadStatus(bookId) == 0) {
      this.onPress()
    } else {
      confirmRemoveEPub(this.props)
    }
  }

  render() {
    const { children } = this.props

    return (
      <TouchableOpacity
        onPress={this.onPress}
        onLongPress={this.onLongPress}
      >{children}</TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  idps: state.idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setDownloadStatus,
  setTocAndSpines,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryBook)

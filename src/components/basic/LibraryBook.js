import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"

import { debounce, getBooksDir } from "../../utils/toolbox.js"
import { confirmRemoveEPub } from "../../utils/removeEpub.js"
import i18n from "../../utils/i18n.js"

import { removeFromBookDownloadQueue, setDownloadStatus, pushToBookDownloadQueue, clearTocAndSpines, clearUserDataExceptProgress } from "../../redux/actions.js";

class LibraryBook extends React.Component {

  getDownloadStatus(bookId) {
    const { books } = this.props
    return books[bookId].downloadStatus
  }

  onPress = async () => {
    const { bookId, navigation, setDownloadStatus, pushToBookDownloadQueue, idps, accounts, books, readerStatus } = this.props
    const downloadStatus = this.getDownloadStatus(bookId)
    const accountId = Object.keys(books[bookId].accounts)[0]

    if(downloadStatus == 2) {
      switch(readerStatus) {
        case 'ready':
        case 'downloading':
          debounce(navigation.navigate, "Book", { bookId })
          break;
        case 'waiting for internet':
          debounce(navigation.navigate, "ErrorMessage", {
            title: i18n("Connection error"),
            message: i18n("The app has been updated and requires an updated reader component to be downloaded. Thus, you must connect to the internet before you will be able to read."),
          })
          break;
        case 'error':
          debounce(navigation.navigate, "ErrorMessage", {
            message: i18n("There has been an update to the reader component that is not downloading properly. Please contact us if this issue persists."),
          })
          break;
        default:
          debounce(navigation.navigate, "ErrorMessage")
      }
      
    } else if(downloadStatus == 0) {
      setDownloadStatus({ bookId, downloadStatus: 1 })
      pushToBookDownloadQueue({ bookId })
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
  accounts: state.accounts,
  readerStatus: state.readerStatus,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  removeFromBookDownloadQueue,
  setDownloadStatus,
  pushToBookDownloadQueue,
  clearTocAndSpines,
  clearUserDataExceptProgress,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LibraryBook)

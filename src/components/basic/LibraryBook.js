import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"
import { View } from "native-base"

import fetchEpub from "../../utils/fetchEpub.js"

import { setDownloadStatus } from "../../redux/actions.js";

class LibraryBook extends React.Component {

  getDownloadStatus(bookId) {
    const { books } = this.props
    return books[bookId].downloadStatus
  }

  onPress() {
    const { bookId, navigation, setDownloadStatus, idps, books } = this.props
    const downloadStatus = this.getDownloadStatus(bookId)

    if(downloadStatus == 2) {
      navigation.navigate("Page", { bookId })

    } else if(downloadStatus == 0) {
      setDownloadStatus({ bookId, downloadStatus: 1 })
      fetchEpub({
        domain: idps[books[bookId].accountIds[0].split(':')[0]].domain,
        bookId,
        checkWasCancelled: () => (this.getDownloadStatus(bookId) != 1),
        success: () => setDownloadStatus({ bookId, downloadStatus: 2 })
      })
    }
  }
  
  onLongPress() {
    const { bookId, confirmRemove } = this.props

    if(this.getDownloadStatus(bookId) == 0) {
      this.onPress()
    } else {
      confirmRemove()
    }
  }

  render() {
    const { children } = this.props

    return (
      <TouchableOpacity
        onPress={() => this.onPress()}
        onLongPress={() => this.onLongPress()}
      >
        <View>{children}</View>
      </TouchableOpacity>
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

export default connect(mapStateToProps, matchDispatchToProps)(LibraryBook)

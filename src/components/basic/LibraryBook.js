import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, TouchableOpacity } from "react-native"

import fetchEpub from "../../utils/fetchEpub.js"

import { setDownloadStatus } from "../../redux/actions.js";

class LibraryBook extends React.Component {

  onPress() {
    const { bookId, navigation, setDownloadStatus, idps, books } = this.props
    const downloadStatus = books[bookId].downloadStatus

    if(downloadStatus == 2) {
      navigation.navigate("Page", { bookId })

    } else if(downloadStatus == 0) {
      setDownloadStatus({ bookId, downloadStatus: 1 })
      fetchEpub({
        domain: idps[books[bookId].accountIds[0].split(':')[0]].domain,
        bookId,
        success: () => setDownloadStatus({ bookId, downloadStatus: 2 })
      })
    }
  }

  render() {
    const { children } = this.props

    return (
      <TouchableOpacity onPress={() => this.onPress()}>
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

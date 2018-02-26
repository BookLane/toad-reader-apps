import React from "react"
import { StyleSheet, TouchableOpacity, Platform, Share } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Icon } from "native-base"
import i18n from "../../utils/i18n.js"

import { getFullName } from '../../utils/toolbox.js'

const styles = StyleSheet.create({
  share: {
    padding: 4,
    fontSize: 22,
    lineHeight: 26,
  },
})

class HighlighterShareIcon extends React.PureComponent {

  goShare = () => {
    const { idps, accounts, books, userDataByBookId, bookId, selectionInfo, highlight } = this.props

    const book = books[bookId] || {}
    const accountId = (book.accountIds || [])[0] || ""
    const idpId = accountId.split(':')[0]
    const { domain } = idps[idpId] || {}
    const { latest_location } = (userDataByBookId[bookId] || {})
    const fullname = getFullName(accounts[accountId])

    if(!domain || !latest_location || !fullname) {
      throw new Error('Unable to share')
    }

    let url = `https://${domain}/book/${bookId}?goto=${encodeURIComponent(latest_location)}&highlight=${encodeURIComponent(selectionInfo.text)}`
    if(highlight.note) {
      url += `&note=${encodeURIComponent(highlight.note)}&sharer=${encodeURIComponent(fullname)}`
    }

    const title = i18n("Quote from {{book}}", {
      book: book.title,
    })

    Share.share(
      {
        message: `“${selectionInfo.text}”${(Platform.OS === 'android' ? `\n\n${url}` : ``)}`,
        title,
        url,  // ios
      },
      {
        subject: title,  // ios share via email
        excludedActivityTypes: [  // ios
        ],
        dialogTitle: title,  // android
      }
    )
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.goShare}
      >
        <Icon
          name="share"
          style={styles.share}
        />
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
  accounts: state.accounts,
  books: state.books,
  userDataByBookId: state.userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterShareIcon)
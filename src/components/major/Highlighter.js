import React from "react"
import { StyleSheet } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "native-base"

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'
import BackFunction from '../basic/BackFunction'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'white',
  },
  containerTop: {
    bottom: 'auto',
    top: 0,
  },
})

class Highlighter extends React.PureComponent {

  getHighlight = () => {
    const { selectionInfo, userDataByBookId, bookId } = this.props
    // example of selectionInfo: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    let highlightToReturn
    const thisBooksHighlights = (userDataByBookId[bookId] || {}).highlights || []

    thisBooksHighlights.some(highlight => {
      if(highlight.spineIdRef === selectionInfo.spineIdRef && highlight.cfi === selectionInfo.cfi) {
        highlightToReturn = highlight
        return true
      }
    })

    return highlightToReturn
  }

  render() {
    const { selectionInfo, bookId, setEditingNote, unselectText } = this.props
    // {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    const highlight = this.getHighlight()

    return [
      <BackFunction key="back" func={unselectText} />,
      <View
        key="container"
        style={[
          styles.container,
          (selectionInfo.copyTooltipInLowerHalf && styles.containerTop),
        ]}
      >
        <HighlighterLabel
          selectionInfo={selectionInfo}
          bookId={bookId}
          highlight={highlight}
          unselectText={unselectText}
        />
        {highlight && 
          <HighlighterNotes
            bookId={bookId}
            highlight={highlight}
            setEditingNote={setEditingNote}
          />
        }
      </View>,
    ]
  }
}

const mapStateToProps = (state) => ({
  userDataByBookId: state.userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlighter)
import React from "react"
import { StyleSheet, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Text, View, Icon, Button } from "native-base"
import i18n from "../../utils/i18n.js"

import HighlighterShareIcon from "./HighlighterShareIcon.js";

import { setHighlight, deleteHighlight, updateAccount, updateBookAccount, setUserData } from "../../redux/actions.js";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    maxWidth: '100%',
  },
  emptySpace: {
    flexGrow: 1,
    minWidth: 30,
  },
  iconAndText: {
    padding: 8,
    flexShrink: 1,
    flexDirection: 'row',
  },
  trash: {
    marginLeft: 10,
    marginTop: -4,
    marginRight: -4,
    marginBottom: -4,
    fontSize: 18,
    backgroundColor: 'rgba(0,0,0,.1)',
    height: 29,
    lineHeight: 24,
    width: 29,
    textAlign: 'center',
    display: 'flex',
    paddingTop: Platform.OS === 'ios' ? 2 : 0,
  },
  highlight1: {
    backgroundColor: 'rgba(28,96,171,.2)',
  },
  highlightText: {
    flexShrink: 1,
  },
  // smallEmptySpace: {
  //   width: 12,
  // },
  close: {
    padding: 4,
    fontSize: 22,
    lineHeight: 26,
  },
  deletedMessageCont: {
    flexShrink: 1,
    flexDirection: 'row',
    padding: 16,
    margin: -8,
  },
  undoButton: {
    marginTop: -11,
    marginBottom: -13,
    marginLeft: 20,
    marginRight: 20,
  },
  doneButton: {
    marginTop: -6,
    marginBottom: -18,
    marginLeft: 0,
    marginRight: 0,
  },
})

const notesForUndo = {}

class HighlighterLabel extends React.PureComponent {

  state = {
    showDeletedMsgAndUndo: false,
  }

  componentWillReceiveProps(nextProps) {
    const { selectionInfo } = this.props

    if(JSON.stringify(nextProps.selectionInfo) !== JSON.stringify(selectionInfo)) {
      this.setState({ showDeletedMsgAndUndo: false })
    }
  }

  toggleHighlight = color => {
    const { selectionInfo, bookId, highlight={}, setSelectionText, setHighlight, deleteHighlight } = this.props
    const { spineIdRef, cfi } = selectionInfo || {}
    
    const note = highlight.note || notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] || ""

    if(highlight && highlight.color === color) {
      // save for if they highlight this selection again in the near future (effectively an "undo")
      if(note) {
        notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] = note
      }

      deleteHighlight({
        bookId,
        spineIdRef,
        cfi,
        patchInfo: this.props,
      })

      // if they were editing the note, then this will not be set
      setSelectionText({
        spineIdRef,
        cfi,
      })

      this.setState({ showDeletedMsgAndUndo: true })
      
    } else {
      setHighlight({
        bookId,
        spineIdRef,
        cfi,
        color,
        note,
        patchInfo: this.props,
      })

      this.setState({ showDeletedMsgAndUndo: false })
    }
  }

  toggleHighlight1 = () => this.toggleHighlight(1)
  // unselectText = () => this.props.setSelectionText()

  render() {
    const { bookId, selectionInfo, highlight, isEditingNote, endEditingNote } = this.props
    const { showDeletedMsgAndUndo } = this.state
    // selectionInfo example: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableHighlight

    let highlightButton = (
      <View
        style={[
          styles.iconAndText,
          styles.highlight1,
        ]}
      >
        <Text
          style={styles.highlightText}
          numberOfLines={1}
        >
          {highlight ? selectionInfo.text : i18n("Highlight the selection")}
        </Text>
        {highlight && !isEditingNote &&
          <TouchableComponent
            onPress={this.toggleHighlight1}
          >
            <Icon
              name="trash"
              style={styles.trash}
            />
          </TouchableComponent>
        }
      </View>
    )

    if(showDeletedMsgAndUndo) {
      highlightButton = (
        <View style={styles.deletedMessageCont}>
          <Text>
            {i18n("Highlight deleted.")}
          </Text>
          <Button primary light
            style={styles.undoButton}
            onPress={this.toggleHighlight1}
          >
            <Text>{i18n("Undo")}</Text>
          </Button>
        </View>
      )

    } else if(!highlight) {
      highlightButton = (
        <TouchableComponent
          onPress={this.toggleHighlight1}
        >
          {highlightButton}
        </TouchableComponent>
      )
    }

    return (
      <View style={styles.container}>
        {highlightButton}
        <View style={styles.emptySpace} />
        {highlight && !isEditingNote &&
          <HighlighterShareIcon
            bookId={bookId}
            selectionInfo={selectionInfo}
            highlight={highlight}
          />
        }
        {isEditingNote &&
          <Button primary
            style={styles.doneButton}
            onPress={endEditingNote}
          >
            <Text>{i18n("Done")}</Text>
          </Button>
        }
        {/* <View style={styles.smallEmptySpace} /> */}
        {/* <TouchableOpacity
          onPress={this.unselectText}
        >
          <Icon
            name="close"
            style={styles.close}
          />
        </TouchableOpacity> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  deleteHighlight,
  updateAccount,
  updateBookAccount,
  setUserData,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterLabel)
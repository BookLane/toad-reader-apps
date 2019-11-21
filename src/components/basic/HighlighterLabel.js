import React, { useState, useLayoutEffect, useCallback } from "react"
import { StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform, Text, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "react-native-ui-kitten"
import { i18n } from "inline-i18n"

import HighlighterShareIcon from "./HighlighterShareIcon"

import { setHighlight, deleteHighlight, updateAccount, updateBookAccount, setUserData } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? 25 : 15,
    paddingRight: 10,
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
    paddingTop: [ 'ios', 'web' ].includes(Platform.OS) ? 2 : 0,
    paddingLeft: 8,
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
  // close: {
  //   padding: 4,
  //   fontSize: 22,
  //   lineHeight: 26,
  // },
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

const HighlighterLabel = React.memo(({
  selectionInfo,
  bookId,
  highlight,
  setHighlight,
  deleteHighlight,
  isEditingNote,
  endEditingNote,
}) => {

  // selectionInfo example: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

  const [ showDeletedMsgAndUndo, setShowDeletedMsgAndUndo ] = useState(false)

  useLayoutEffect(
    () => setShowDeletedMsgAndUndo(false),
    [ JSON.stringify(selectionInfo) ],
  )

  const toggleHighlight = useCallback(
    color => {
      const { spineIdRef, cfi } = selectionInfo || {}
      const note = (highlight || {}).note || notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] || ""

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

        setShowDeletedMsgAndUndo(true)
        
      } else {
        setHighlight({
          bookId,
          spineIdRef,
          cfi,
          color,
          note,
          patchInfo: this.props,
        })

        setShowDeletedMsgAndUndo(false)
      }
    },
    [ selectionInfo, bookId, highlight, setHighlight, deleteHighlight ],
  )

  const toggleHighlight1 = useCallback(() => toggleHighlight(1), [])

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
      {!!(highlight && !isEditingNote) &&
        <TouchableComponent
          onPress={toggleHighlight1}
        >
          <Ionicons
            name="md-trash"
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
          onPress={toggleHighlight1}
        >
          <Text>{i18n("Undo")}</Text>
        </Button>
      </View>
    )

  } else if(!highlight) {
    highlightButton = (
      <TouchableComponent
        onPress={toggleHighlight1}
      >
        {highlightButton}
      </TouchableComponent>
    )
  }

  return (
    <View style={styles.container}>
      {highlightButton}
      <View style={styles.emptySpace} />
      {!!(highlight && !isEditingNote) &&
        <HighlighterShareIcon
          bookId={bookId}
          selectionInfo={selectionInfo}
          highlight={highlight}
        />
      }
      {!!isEditingNote &&
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
        <Ionicons
          name="close"
          style={styles.close}
        />
      </TouchableOpacity> */}
    </View>
  )
})

const mapStateToProps = ({}) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  deleteHighlight,
  updateAccount,
  updateBookAccount,
  setUserData,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterLabel)
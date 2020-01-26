import React, { useState, useLayoutEffect, useCallback } from "react"
import { StyleSheet, TouchableNativeFeedback, TouchableHighlight, Platform, Text, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "react-native-ui-kitten"
import { i18n } from "inline-i18n"

import HighlighterShareIcon from "./HighlighterShareIcon"
import HighlighterEmbedIcon from "./HighlighterEmbedIcon"

import { setHighlight, deleteHighlight } from "../../redux/actions"

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    maxWidth: '100%',
    lineHeight: 34,
  },
  emptySpace: {
    flexGrow: 1,
    minWidth: 30,
  },
  iconAndText: {
    flexShrink: 1,
    flexDirection: 'row',
  },
  trash: {
    marginRight: 4,
    marginTop: 4,
    marginBottom: 4,
    fontSize: 18,
    backgroundColor: '#bec8d6',
    height: 26,
    width: 26,
    lineHeight: 20,
    textAlign: 'center',
    display: 'flex',
    paddingTop: [ 'ios', 'web' ].includes(Platform.OS) ? 2 : 0,
    paddingLeft: 7,
    paddingRight: 7,
  },
  highlight1: {
    backgroundColor: 'rgba(28,96,171,.2)',
  },
  highlightText: {
    lineHeight: 34,
    paddingLeft: 8,
    paddingRight: 8,
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
  },
  deletedMessage: {
    lineHeight: 34,
    marginRight: 8,
  },
  // undoButton: {
  // },
  // doneButton: {
  // },
})

const notesForUndo = {}

const HighlighterLabel = React.memo(({
  selectionInfo,
  endEditingNote,
  bookId,
  highlight,
  isEditingNote,

  setHighlight,
  deleteHighlight,
}) => {

  // selectionInfo example: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

  const [ showDeletedMsgAndUndo, setShowDeletedMsgAndUndo ] = useState(false)

  useLayoutEffect(
    () => setShowDeletedMsgAndUndo(false),
    [ JSON.stringify(selectionInfo) ],
  )

  const toggleHighlightDependencies = [ selectionInfo, bookId, highlight, setHighlight, deleteHighlight ]

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
        })

        setShowDeletedMsgAndUndo(true)
        
      } else {
        setHighlight({
          bookId,
          spineIdRef,
          cfi,
          color,
          note,
        })

        setShowDeletedMsgAndUndo(false)
      }
    },
    toggleHighlightDependencies,
  )

  const toggleHighlight1 = useCallback(() => toggleHighlight(1), toggleHighlightDependencies)

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
        <Text style={styles.deletedMessage}>
          {i18n("Highlight deleted.")}
        </Text>
        <Button
          // style={styles.undoButton}
          onPress={toggleHighlight1}
          size="small"
          status="basic"
        >
          {i18n("Undo")}
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
      {!highlight &&
        <HighlighterEmbedIcon
          bookId={bookId}
          selectionInfo={selectionInfo}
        />
      }
      {!!(highlight && !isEditingNote) &&
        <HighlighterShareIcon
          bookId={bookId}
          selectionInfo={selectionInfo}
          highlight={highlight}
        />
      }
      {!!isEditingNote &&
        <Button
          // style={styles.doneButton}
          onPress={endEditingNote}
          size="small"
          status="basic"
        >
          {i18n("Done")}
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

const mapStateToProps = ({ x }) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  deleteHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterLabel)
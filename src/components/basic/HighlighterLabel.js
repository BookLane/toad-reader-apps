import React, { useState, useLayoutEffect, useCallback } from "react"
import Constants from 'expo-constants'
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform, Text, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import HighlighterShareIcon from "./HighlighterShareIcon"
import HighlighterColorSwitcher from "./HighlighterColorSwitcher"
import HighlighterEmbedIcon from "./HighlighterEmbedIcon"

import { setHighlight, deleteHighlight } from "../../redux/actions"

const {
  NUM_COLOR_OPTIONS=3,
} = Constants.manifest.extra

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    maxWidth: '100%',
  },
  emptySpace: {
    flexGrow: 1,
    minWidth: 10,
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
    backgroundColor: 'rgba(0, 0, 0, .2)',
    height: 26,
    width: 26,
    lineHeight: 20,
    textAlign: 'center',
    display: 'flex',
    paddingTop: 2,
    paddingLeft: 7,
    paddingRight: 7,
  },
  highlight1: {
    backgroundColor: 'rgba(28, 96, 171, .2)',
  },
  highlight2: {
    backgroundColor: 'rgba(179, 17, 45, .2)',
  },
  highlight3: {
    backgroundColor: 'rgba(10, 138, 10, .2)',
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

  const [ showDeletedMsgAndUndoColor, setShowDeletedMsgAndUndoColor ] = useState()

  useLayoutEffect(
    () => setShowDeletedMsgAndUndoColor(),
    [ JSON.stringify(selectionInfo) ],
  )

  const toggleHighlightDependencies = [ selectionInfo, bookId, highlight, setHighlight, deleteHighlight ]

  const toggleHighlight = useCallback(
    color => {
      const { spineIdRef, cfi, text: share_quote } = selectionInfo || {}
      const note = (highlight || {}).note || notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] || ""

      if(highlight) {
        // save for if they highlight this selection again in the near future (effectively an "undo")
        if(note) {
          notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] = note
        }

        deleteHighlight({
          bookId,
          spineIdRef,
          cfi,
        })

        setShowDeletedMsgAndUndoColor(highlight.color)
        
      } else {

        setHighlight({
          bookId,
          spineIdRef,
          cfi,
          color,
          note,
          share_quote,
        })

        setShowDeletedMsgAndUndoColor()
      }
    },
    toggleHighlightDependencies,
  )

  const toggleHighlightByColor = [
    null,
    useCallback(() => toggleHighlight(1), toggleHighlightDependencies),
    useCallback(() => toggleHighlight(2), toggleHighlightDependencies),
    useCallback(() => toggleHighlight(3), toggleHighlightDependencies),
  ]

  const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

  const color = Math.max(1, Math.min(parseInt((highlight || {}).color, 10), NUM_COLOR_OPTIONS)) || 1

  let highlightButton = (
    <View
      style={[
        styles.iconAndText,
        styles[`highlight${color}`],
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
          onPress={toggleHighlightByColor[color]}
        >
          <Ionicons
            name="md-trash"
            style={styles.trash}
          />
        </TouchableComponent>
      }
    </View>
  )

  if(showDeletedMsgAndUndoColor) {
    highlightButton = (
      <View style={styles.deletedMessageCont}>
        <Text style={styles.deletedMessage}>
          {i18n("Highlight deleted.")}
        </Text>
        <Button
          // style={styles.undoButton}
          onPress={toggleHighlightByColor[showDeletedMsgAndUndoColor]}
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
        onPress={toggleHighlightByColor[1]}
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
        <>
          <HighlighterColorSwitcher
            bookId={bookId}
            selectionInfo={selectionInfo}
            highlight={highlight}
          />
          <HighlighterShareIcon
            bookId={bookId}
            selectionInfo={selectionInfo}
            highlight={highlight}
          />
        </>
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
import React, { useState, useLayoutEffect, useCallback, useRef } from "react"
import Constants from 'expo-constants'
import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, Platform, Text, View, Alert, TextInput } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "@ui-kitten/components"
import { i18n } from "inline-i18n"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useRouterState from "../../hooks/useRouterState"
import useNonBlurringOnPress from "../../hooks/useNonBlurringOnPress"

import HighlighterShareIcon from "./HighlighterShareIcon"
import HighlighterColorSwitcher from "./HighlighterColorSwitcher"
import HighlighterEmbedIcon from "./HighlighterEmbedIcon"
import Icon from "./Icon"

import { setHighlight, deleteHighlight } from "../../redux/actions"

const {
  NUM_COLOR_OPTIONS=3,
} = Constants.expoConfig.extra

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
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    height: 26,
    width: 26,
    lineHeight: 26,
    textAlign: 'center',
    display: 'flex',
    paddingTop: 0,
    paddingLeft: 5,
    paddingRight: 5,
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
  draw: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    marginTop: 2,
    fontSize: 21,
    lineHeight: 21,
    height: 28,
    maxHeight: 28,
    position: 'relative',
  },
  sketchIconContainer: {
    position: 'relative',
  },
  check: {
    fontSize: 5,
    position: 'absolute',
    bottom: 18,
    right: 12,
    color: 'rgba(28, 96, 171, .7)',
  },
  hiddenTextInput: {
    display: 'none',
  },
})

const notesForUndo = {}
const sketchesForUndo = {}

const HighlighterLabel = React.memo(({
  selectionInfo,
  endEditingNote,
  bookId,
  idpId,
  highlight,
  isEditingNote,
  hasSketch,
  setEditingSketch,

  idps,
  books,
  userDataByBookId,
  accounts,

  setHighlight,
  deleteHighlight,
}) => {

  // selectionInfo example: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}
  const { sketchingOn } = Object.values(idps)[0] || {}
  const hiddenTextInput = useRef()

  const [ showDeletedMsgAndUndoColor, setShowDeletedMsgAndUndoColor ] = useState()
  const { bookVersion, classrooms } = useClassroomInfo({ books, bookId, userDataByBookId })
  const isAdmin = Object.values(accounts).some(({ isAdmin }) => isAdmin)

  const hasAsInstructorHighlightForSomeClassroom = (
    classrooms.some(({ instructorHighlights=[] }) => (
      instructorHighlights.some(({ isMine, _delete, spineIdRef, cfi }) => (
        isMine
        && spineIdRef === selectionInfo.spineIdRef
        && cfi === selectionInfo.cfi
        && !_delete
      ))
    ))
  )

  useLayoutEffect(
    () => setShowDeletedMsgAndUndoColor(),
    [ JSON.stringify(selectionInfo) ],
  )

  const { routerState } = useRouterState()
  const { widget } = routerState

  const toggleHighlightDependencies = [ books, selectionInfo, bookId, highlight, setHighlight, deleteHighlight, hasAsInstructorHighlightForSomeClassroom ]

  const toggleHighlight = useCallback(
    color => {
      const { spineIdRef, cfi, text: share_quote } = selectionInfo || {}
      const note = (highlight || {}).note || notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] || ""
      const sketch = (highlight || {}).sketch || sketchesForUndo[`${bookId} ${spineIdRef} ${cfi}`] || null

      if(highlight) {

        if(hasAsInstructorHighlightForSomeClassroom) {
          if(Platform.OS === 'web') {
            alert(i18n("You must unshare this highlight with all classrooms before you can delete it.", "", "enhanced"))
          } else {
            Alert.alert(
              i18n("Whoops"),
              i18n("You must unshare this highlight with all classrooms before you can delete it.", "", "enhanced"),
            )
          }
          return
        }

        // save for if they highlight this selection again in the near future (effectively an "undo")
        if(note) {
          notesForUndo[`${bookId} ${spineIdRef} ${cfi}`] = note
        }
        if(sketch) {
          sketchesForUndo[`${bookId} ${spineIdRef} ${cfi}`] = sketch
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
          sketch,
          share_quote,
          bookInfoForAnalytics: books[bookId],
        })

        setShowDeletedMsgAndUndoColor()
      }
    },
    toggleHighlightDependencies,
  )

  const toggleHighlightByColorOnPressProps = [
    null,
    useNonBlurringOnPress(() => toggleHighlight(1), toggleHighlightDependencies),
    useNonBlurringOnPress(() => toggleHighlight(2), toggleHighlightDependencies),
    useNonBlurringOnPress(() => toggleHighlight(3), toggleHighlightDependencies),
  ]

  const endEditingNoteOnPressProps = useNonBlurringOnPress(endEditingNote)

  const goSketchOnPressProps = useNonBlurringOnPress(
    () => {
      setEditingSketch(true)
      // the following two lines take the focus off the webview
      hiddenTextInput.current.focus()
      hiddenTextInput.current.blur()
    },
    [ setEditingSketch ]
  )

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
          {...toggleHighlightByColorOnPressProps[color]}
        >
          <Ionicons
            name="trash"
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
          {...toggleHighlightByColorOnPressProps[showDeletedMsgAndUndoColor]}
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
        {...toggleHighlightByColorOnPressProps[1]}
      >
        {highlightButton}
      </TouchableComponent>
    )
  }

  const idpThatAllowsEmbed = [ 2, 4 ].includes(idpId)
  const roleThatAllowsEmbed = (
    bookVersion === 'PUBLISHER'
    || isAdmin
  )

  return (
    <View style={styles.container}>
      {highlightButton}
      <View style={styles.emptySpace} />
      {!highlight && !widget && idpThatAllowsEmbed && roleThatAllowsEmbed &&
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
          {!!sketchingOn &&
            <View>
              <TouchableOpacity
                {...goSketchOnPressProps}
                style={styles.sketchIconContainer}
              >
                {hasSketch &&
                  <Icon
                    name="check"
                    pack="materialCommunity"
                    style={styles.check}
                  />
                }
                <Icon
                  name="draw"
                  pack="materialCommunity"
                  style={styles.draw}
                />
              </TouchableOpacity>
              <TextInput
                ref={hiddenTextInput}
                style={styles.hiddenTextInput}
              />
            </View>
          }
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
          {...endEditingNoteOnPressProps}
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

const mapStateToProps = ({ idps, books, userDataByBookId, accounts }) => ({
  userDataByBookId,
  idps,
  books,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  deleteHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterLabel)
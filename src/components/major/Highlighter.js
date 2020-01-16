import React, { useRef, useCallback } from "react"
import { StyleSheet, KeyboardAvoidingView, Platform, Dimensions, View } from "react-native"
import { withRouter } from "react-router"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getToolbarHeight } from '../../utils/toolbox'

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'
import BackFunction from '../basic/BackFunction'
import HighlighterInstructorHighlightSection from "./HighlighterInstructorHighlightSection"

import useWideMode from "../../hooks/useWideMode"
import useRouterState from "../../hooks/useRouterState"
import useUnmount from "react-use/lib/useUnmount"

import { setHighlight } from "../../redux/actions"

const styles = StyleSheet.create({
  clearCover: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 3,
  },
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
  containerTopWideMode: {
    paddingTop: Platform.OS === 'web' ? getToolbarHeight() - 1 : 0,
  },
})

const Highlighter = React.memo(({
  noteInEdit,
  selectionInfo,  // Eg: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}
  bookId,
  setSelectionText,
  updateNoteInEdit,
  location,
  
  userDataByBookId,

  setHighlight,
}) => {

  // We do not use useState here, because we don't want to wait until the next render.
  // We do not use a simple local variable here, because we sometimes want it to 
  // not change from the previous value.
  const highlight = useRef()
  const isEditingNote = noteInEdit != null 

  if(noteInEdit == null) {

    const thisBooksHighlights = (userDataByBookId[bookId] || {}).highlights || []

    if(!thisBooksHighlights.some(h => {
      if(h.spineIdRef === selectionInfo.spineIdRef && h.cfi === selectionInfo.cfi) {
        highlight.current = h._delete ? undefined : h
        return true
      }
    })) {
      highlight.current = undefined
    }

  }

  const { routerState } = useRouterState({ location })
  const { widget } = routerState

  const wideMode = useWideMode()

  const noteTextInputRef = useRef()

  const setEditingNote = useCallback(
    (editingNote, skipSetSelectionText) => {
      const { spineIdRef, cfi } = selectionInfo || {}

      if(editingNote) {
        updateNoteInEdit(highlight.current.note)

      } else if(isEditingNote) {
        setHighlight({
          ...highlight.current,
          bookId,
          note: noteInEdit,
        })

        updateNoteInEdit(null)

        if(!skipSetSelectionText) {
          setSelectionText({
            spineIdRef,
            cfi,
          })
        }
      }
    },
    [ bookId, noteInEdit, isEditingNote, selectionInfo, updateNoteInEdit, setSelectionText, highlight.current ],
  )

  const endEditingNote = useCallback(() => noteTextInputRef.current.blur(), [])

  useUnmount(() => setEditingNote(false, true))
  
  return [
    ...(isEditingNote ? [ <View key="cover" style={styles.clearCover} /> ] : []),
    <BackFunction key="back" func={isEditingNote ? endEditingNote : setSelectionText} />,
    <KeyboardAvoidingView
      key="container"
      style={[
        styles.container,
        (selectionInfo.copyTooltipInLowerHalf && styles.containerTop),
        (selectionInfo.copyTooltipInLowerHalf && wideMode && !widget && styles.containerTopWideMode),
      ]}
      data-id="highlighter"
      keyboardVerticalOffset={Platform.OS === 'android' ? 450 - Dimensions.get('window').height : 0}
      behavior="padding"
    >
      <HighlighterInstructorHighlightSection
        bookId={bookId}
        highlight={highlight.current}
        selectionInfo={selectionInfo}
      />
      <HighlighterLabel
        selectionInfo={selectionInfo}
        bookId={bookId}
        highlight={highlight.current}
        // setSelectionText={setSelectionText}
        endEditingNote={endEditingNote}
        isEditingNote={isEditingNote}
      />
      {!!highlight.current && 
        <HighlighterNotes
          note={isEditingNote ? noteInEdit : highlight.current.note}
          updateNoteInEdit={updateNoteInEdit}
          setEditingNote={setEditingNote}
          noteTextInputRef={noteTextInputRef}
        />
      }
    </KeyboardAvoidingView>
  ]
})

const mapStateToProps = ({ userDataByBookId }) => ({
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Highlighter))
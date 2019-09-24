import React, { useRef } from "react"
import { StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from 'native-base'

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'
import BackFunction from '../basic/BackFunction'

import { setHighlight, updateAccount, updateBookAccount, setUserData } from "../../redux/actions.js"

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
})

const Highlighter = React.memo(({
  noteInEdit,
  selectionInfo,  // Eg: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}
  userDataByBookId,
  bookId,
  setHighlight,
  updateNoteInEdit,
  setSelectionText,
  updateAccount,
  updateBookAccount,
}) => {

  // We do not use useState here, because we don't want to wait until the next render.
  // We do not use a simple local variable here, because we sometimes want it to 
  // not change from the previous value.
  const highlight = useRef()

  if(noteInEdit == null) {

    const thisBooksHighlights = (userDataByBookId[bookId] || {}).highlights || []

    thisBooksHighlights.some(h => {
      if(h.spineIdRef === selectionInfo.spineIdRef && h.cfi === selectionInfo.cfi && !h._delete) {
        highlight.current = h
        return true
      }
    })

  }

  const noteTextInputRef = useRef()

  const setEditingNote = useCallback(
    editingNote => {
      const { spineIdRef, cfi } = selectionInfo || {}

      if(editingNote) {
        updateNoteInEdit(highlight.note)

      } else {
        setHighlight({
          ...highlight,
          bookId,
          note: noteInEdit,
          patchInfo: {
            userDataByBookId,
            updateAccount,
            updateBookAccount,
          },
        })

        updateNoteInEdit(null)

        setSelectionText({
          spineIdRef,
          cfi,
        })
      }
    },
    [ bookId, noteInEdit, selectionInfo, setHighlight, updateNoteInEdit, setSelectionText, highlight, userDataByBookId, updateAccount, updateBookAccount ],
  )

  const endEditingNote = useCallback(() => noteTextInputRef.current.blur(), [])
  
  const isEditingNote = noteInEdit != null 

  return [
    ...(isEditingNote ? [ <View key="cover" style={styles.clearCover} /> ] : []),
    <BackFunction key="back" func={isEditingNote ? endEditingNote : setSelectionText} />,
    <KeyboardAvoidingView
      key="container"
      style={[
        styles.container,
        (selectionInfo.copyTooltipInLowerHalf && styles.containerTop),
      ]}
      keyboardVerticalOffset={Platform.OS === 'android' ? 450 - Dimensions.get('window').height : 0}
      behavior="padding"
    >
      <HighlighterLabel
        selectionInfo={selectionInfo}
        bookId={bookId}
        highlight={highlight}
        // setSelectionText={setSelectionText}
        isEditingNote={isEditingNote}
        endEditingNote={endEditingNote}
      />
      {!!highlight && 
        <HighlighterNotes
          note={isEditingNote ? noteInEdit : highlight.note}
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
  updateAccount,
  updateBookAccount,
  setUserData,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlighter)
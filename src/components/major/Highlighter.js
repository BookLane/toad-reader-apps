import React, { useRef, useCallback, useState, useEffect } from "react"
import { StyleSheet, Platform, View, Keyboard } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getToolbarHeight, setStatusBarHidden } from '../../utils/toolbox'

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
    right: 0,
    left: 0,
    zIndex: 3,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    backgroundColor: 'white',
  },
  containerBottom: {
    bottom: 0,
  },
  containerTop: {
    top: 0,
    paddingTop: Platform.OS === 'android' ? 10 : 0,
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

  const { routerState } = useRouterState()
  const { widget } = routerState

  const wideMode = useWideMode()

  const [ keyboardShowing, setKeyboardShowing ] = useState(false)

  useEffect(
    () => {
      const show = () => setKeyboardShowing(true)
      const hide = () => {
        setKeyboardShowing(false)
        setStatusBarHidden(!wideMode || Platform.OS === 'ios')
      }

      const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', show)
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', show)
      const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', hide)
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', hide)

      return () => {
        keyboardDidShowListener.remove()
        keyboardWillShowListener.remove()
        keyboardDidHideListener.remove()
        keyboardWillHideListener.remove()
      }
    },
    [ wideMode ],
  )

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

  const endEditingNote = Keyboard.dismiss

  useUnmount(() => setEditingNote(false, true))
  
  return [
    ...(isEditingNote ? [ <View key="cover" style={styles.clearCover} /> ] : []),
    <BackFunction key="back" func={isEditingNote ? endEditingNote : setSelectionText} />,
    <View
      key="container"
      style={[
        styles.container,
        ((selectionInfo.copyTooltipInLowerHalf || keyboardShowing) ? styles.containerTop : styles.containerBottom),
        ((selectionInfo.copyTooltipInLowerHalf && wideMode && !widget) ? styles.containerTopWideMode : null),
      ]}
      data-id="highlighter"
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
        />
      }
    </View>
  ]
})

const mapStateToProps = ({ userDataByBookId }) => ({
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlighter)
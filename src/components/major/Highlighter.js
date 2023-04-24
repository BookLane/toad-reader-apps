import React, { useRef, useCallback, useState, useEffect } from "react"
import { StyleSheet, Platform, View, Keyboard, StatusBar } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import useUnmount from "react-use/lib/useUnmount"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { setStatusBarHidden } from '../../utils/toolbox'

import useWideMode from "../../hooks/useWideMode"
import useRouterState from "../../hooks/useRouterState"
import useDimensions from "../../hooks/useDimensions"
import { setHighlight } from "../../redux/actions"

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'
import BackFunction from '../basic/BackFunction'
import HighlighterInstructorHighlightSection from "./HighlighterInstructorHighlightSection"

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
  containerTopWideMode: {
    paddingTop: 0,
  },
})

const Highlighter = React.memo(({
  noteInEdit,
  selectionInfo,  // Eg: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}
  bookId,
  idpId,
  setSelectionText,
  updateNoteInEdit,
  
  books,
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
  const safeAreaInsets = useSafeAreaInsets()

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

  useEffect(
    () => {
      if(highlight.current && !highlight.current.share_quote) {
        setHighlight({
          ...highlight.current,
          bookId,
          share_quote: selectionInfo.text,
          bookInfoForAnalytics: books[bookId],
        })
      }
    },
    [ selectionInfo ],
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
          bookInfoForAnalytics: books[bookId],
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
    [ books, bookId, noteInEdit, isEditingNote, selectionInfo, updateNoteInEdit, setSelectionText, highlight.current ],
  )

  const endEditingNote = Keyboard.dismiss

  useUnmount(() => setEditingNote(false, true))

  const windowTooShortToShowNotes = useDimensions().window.height < 350

  const preventDefault = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()
    },
    [],
  )

  return [
    ...(isEditingNote ? [ <View key="cover" style={styles.clearCover} /> ] : []),
    <BackFunction key="back" func={isEditingNote ? endEditingNote : setSelectionText} />,
    <View
      key="container"
      style={[
        styles.container,
        ((selectionInfo.copyTooltipInLowerHalf || keyboardShowing)
          ? {
            top: safeAreaInsets.top > 30 ? (safeAreaInsets.top - 20) * -1 : 0,
            paddingTop: Math.max(safeAreaInsets.top + StatusBar.currentHeight - 10, 0),
          }
          : {
            bottom: 0,
            paddingBottom: safeAreaInsets.bottom,
          }
        ),
        ((selectionInfo.copyTooltipInLowerHalf && wideMode && !widget) ? styles.containerTopWideMode : null),
      ]}
      onTouchEnd={!isEditingNote ? preventDefault : null}
    >
      <HighlighterInstructorHighlightSection
        bookId={bookId}
        highlight={highlight.current}
        selectionInfo={selectionInfo}
      />
      <HighlighterLabel
        idpId={idpId}
        selectionInfo={selectionInfo}
        bookId={bookId}
        highlight={highlight.current}
        // setSelectionText={setSelectionText}
        endEditingNote={endEditingNote}
        isEditingNote={isEditingNote}
      />
      {!!highlight.current && !windowTooShortToShowNotes &&
        <HighlighterNotes
          note={isEditingNote ? noteInEdit : highlight.current.note}
          updateNoteInEdit={updateNoteInEdit}
          setEditingNote={setEditingNote}
          isEditingNote={isEditingNote}
        />
      }
    </View>
  ]
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlighter)
import React, { useCallback } from "react"
import { StyleSheet, TextInput } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  textinput: {
    height: 150,
    textAlignVertical: 'top',
    padding: 15,
    paddingTop: 0,
  },
})

const HighlighterNotes = React.memo(({
  note,
  updateNoteInEdit,
  noteTextInputRef,
  setEditingNote,
}) => {

  const onFocus = useCallback(() => setEditingNote(true), [])
  const onBlur = useCallback(() => setEditingNote(false), [])

  return (
    <TextInput
      style={styles.textinput}
      placeholder={i18n("Notes")}
      multiline={true}
      underlineColorAndroid="transparent"
      value={note}
      onChangeText={updateNoteInEdit}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={noteTextInputRef}
    />
  )
})

export default HighlighterNotes
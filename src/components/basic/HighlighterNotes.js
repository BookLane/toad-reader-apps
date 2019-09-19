import React, { useCallback } from "react"
import { StyleSheet, TextInput } from "react-native"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  textinput: {
    height: 150,
    textAlignVertical: 'top',
    padding: 15,
    paddingTop: 0,
  },
})

const HighlighterNotes = ({
  note,
  updateNoteInEdit,
  setNoteTextInputEl,
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
      ref={setNoteTextInputEl}
    />
  )
}

export default HighlighterNotes
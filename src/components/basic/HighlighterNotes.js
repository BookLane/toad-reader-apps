import React, { useCallback } from "react"
import { StyleSheet, TextInput, Platform } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  textinput: {
    height: 150,
    textAlignVertical: 'top',
    padding: 15,
    paddingTop: 0,
    ...(Platform.OS !== 'web' ? {} : { outlineWidth: 0 }),
  },
})

const HighlighterNotes = React.memo(({
  note,
  updateNoteInEdit,
  setEditingNote,
}) => {

  const onFocus = useCallback(() => setEditingNote(true), [ setEditingNote ])
  const onBlur = useCallback(() => setEditingNote(false), [ setEditingNote ])

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
    />
  )
})

export default HighlighterNotes
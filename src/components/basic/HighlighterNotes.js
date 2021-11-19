import React, { useCallback } from "react"
import { StyleSheet, TextInput, Platform } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  textinput: {
    height: 150,
    textAlignVertical: 'top',
    padding: 15,
    paddingTop: 0,
    ...(Platform.OS !== 'web' ? {} : { outlineStyle: 'none' }),
  },
})

const HighlighterNotes = React.memo(({
  note,
  updateNoteInEdit,
  setEditingNote,
  isEditingNote,
}) => {

  const onTouchStart = useCallback(
    ({ target }) => {
      setEditingNote(true)
      target.focus()
    },
    [ setEditingNote ],
  )

  const onBlur = useCallback(() => setEditingNote(false), [ setEditingNote ])

  return (
    <TextInput
      style={styles.textinput}
      placeholder={i18n("Notes")}
      multiline={true}
      underlineColorAndroid="transparent"
      value={note}
      onChangeText={updateNoteInEdit}
      onTouchStart={!isEditingNote ? onTouchStart : null}
      onBlur={onBlur}
    />
  )
})

export default HighlighterNotes
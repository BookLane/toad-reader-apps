import React from "react"
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

class HighlighterNotes extends React.PureComponent {

  onFocus = () => this.props.setEditingNote(true)
  onBlur = () => this.props.setEditingNote(false)

  render() {
    const { note, updateNoteInEdit } = this.props

    return (
      <TextInput
        style={styles.textinput}
        placeholder={i18n("Notes")}
        multiline={true}
        underlineColorAndroid="transparent"
        value={note}
        onChangeText={updateNoteInEdit}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}
export default HighlighterNotes
import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import i18n from "../../utils/i18n.js"

import { setHighlight } from "../../redux/actions.js";

const styles = StyleSheet.create({
  textinput: {
    height: 180,
    textAlignVertical: 'top',
    padding: 15,
    paddingTop: 0,
  },
})

class HighlighterNotes extends React.PureComponent {

  updateNote = note => {
    const { bookId, highlight, setHighlight } = this.props
    
    setHighlight({
      ...highlight,
      bookId,
      note,
    })
  }

  onFocus = () => this.props.setEditingNote(true)
  onBlur = () => this.props.setEditingNote(false)

  render() {
    const { highlight, setNoteBeingTouched } = this.props

    return (
      <TextInput
        style={styles.textinput}
        placeholder={i18n("Notes")}
        multiline={true}
        underlineColorAndroid="transparent"
        value={highlight.note}
        onChangeText={this.updateNote}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    )
  }
}

const mapStateToProps = (state) => ({
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterNotes)
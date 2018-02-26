import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import i18n from "../../utils/i18n.js"

import { setHighlight } from "../../redux/actions.js";

const styles = StyleSheet.create({
  textinput: {
    height: 100,
    borderWidth: 0,
  },
})

class HighlighterNotes extends React.PureComponent {

  state = {
    note: this.props.highlight.note,
  }

  updateNote = color => {
    const { bookId, highlight, setHighlight } = this.props
    const { note } = this.state
    
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
    const { note } = this.state

    return (
      <TextInput
        style={styles.textinput}
        placeholder={i18n("Notes")}
        value={note}
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
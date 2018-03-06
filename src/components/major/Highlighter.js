import React from "react"
import { StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from 'native-base'

import HighlighterLabel from '../basic/HighlighterLabel'
import HighlighterNotes from '../basic/HighlighterNotes'
import BackFunction from '../basic/BackFunction'

import { setHighlight, updateAccount, updateBookAccount, setUserData } from "../../redux/actions.js";

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

class Highlighter extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      highlight: this.getHighlight(props),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { noteInEdit } = this.state

    if(nextProps.noteInEdit == null) {
      this.setState({
        highlight: this.getHighlight(nextProps),
      })
    }
  }

  getHighlight = props => {
    const { selectionInfo, userDataByBookId, bookId } = props || this.props
    // example of selectionInfo: {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}

    let highlightToReturn
    const thisBooksHighlights = (userDataByBookId[bookId] || {}).highlights || []

    thisBooksHighlights.some(highlight => {
      if(highlight.spineIdRef === selectionInfo.spineIdRef && highlight.cfi === selectionInfo.cfi && !highlight._delete) {
        highlightToReturn = highlight
        return true
      }
    })

    return highlightToReturn
  }

  setEditingNote = editingNote => {
    const { bookId, noteInEdit, setHighlight, updateNoteInEdit } = this.props
    const { highlight } = this.state

    if(editingNote) {
      updateNoteInEdit(highlight.note)

    } else {
      setHighlight({
        ...highlight,
        bookId,
        note: noteInEdit,
        patchInfo: this.props,
      })

      updateNoteInEdit(null)

    }
  }

  setNoteTextInputEl = el => this.noteTextInputEl = el
  endEditingNote = () => this.noteTextInputEl.blur()
  
  render() {
    const { selectionInfo, bookId, noteInEdit, setSelectionText, updateNoteInEdit } = this.props
    // {"text":"Crossway","spineIdRef":"info","cfi":"/4/2/4,/1:16,/1:24","copyTooltipInLowerHalf":false}
    const { highlight } = this.state

    const isEditingNote = noteInEdit != null 

    return [
      ...(isEditingNote ? [ <View key="cover" style={styles.clearCover} /> ] : []),
      <BackFunction key="back" func={isEditingNote ? this.endEditingNote : setSelectionText} />,
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
          setSelectionText={setSelectionText}
          isEditingNote={isEditingNote}
          endEditingNote={this.endEditingNote}
        />
        {highlight && 
          <HighlighterNotes
            note={isEditingNote ? noteInEdit : highlight.note}
            updateNoteInEdit={updateNoteInEdit}
            setEditingNote={this.setEditingNote}
            setNoteTextInputEl={this.setNoteTextInputEl}
          />
        }
      </KeyboardAvoidingView>
    ]
  }
}

const mapStateToProps = (state) => ({
  userDataByBookId: state.userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setHighlight,
  updateAccount,
  updateBookAccount,
  setUserData,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlighter)
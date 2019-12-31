import React, { useState, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import { textToReactNative, combineItems } from '../../utils/toolbox'

import ToolChip from '../basic/ToolChip'
// import Dialog from "./Dialog"

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useInstanceValue from '../../hooks/useInstanceValue'

import { createInstructorHighlight, deleteInstructorHighlight } from "../../redux/actions"

const author = {
  fontWeight: 100,
  fontSize: 12,
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    maxHeight: 150,
    overflowY: 'auto',
  },
  heading: {
    flexDirection: 'row',
    padding: 15,
  },
  note: {
    padding: 15,
    paddingVertical: 0,
  },
  author: {
    ...author,
    paddingTop: 3,
    padding: 15,
  },
  authorInHeading: {
    ...author,
    lineHeight: 28,
    marginLeft: 8,
  },
  mynote: {
    fontStyle: 'italic',
    padding: 15,
    paddingTop: 0,
    fontSize: 13,
    opacity: .5,
  },
  toolChip: {
    opacity: 1,
  },
  unselectedToolChip: {
    opacity: .2,
  },
})

const HighlighterInstructorHighlightSection = React.memo(({
  bookId,
  highlight,

  books,
  userDataByBookId,

  createInstructorHighlight,
  deleteInstructorHighlight,
}) => {

  // const [ showShare, setShowShare ] = useState(false)
  // const setShowShareToFalse = useCallback(() => setShowShare(false), [])

  const getUserDataByBookId = useInstanceValue(userDataByBookId)

  const { classroomUid, isDefaultClassroom, instructorHighlights, myRole } = useClassroomInfo({ books, bookId, userDataByBookId })

  const relevantInstructorHighlights = instructorHighlights.filter(({ spineIdRef, cfi, _delete }) => (spineIdRef === highlight.spineIdRef && cfi === highlight.cfi && !_delete))
  const hasInstructorHighlight = relevantInstructorHighlights.length > 0
  const hasIsMineInstructorHighlight = relevantInstructorHighlights.some(({ isMine, _delete }) => (isMine && !_delete))
  const othersInstructorHighlights = relevantInstructorHighlights.filter(({ isMine }) => !isMine)
  const otherInstructorHighlightsWithNotes = othersInstructorHighlights.filter(({ note }) => (note || "").trim())
  const otherInstructorHighlightsWithoutNotes = othersInstructorHighlights.filter(({ note }) => !(note || "").trim())
  const iHaveANote = !!(highlight.note || "").trim()

  const toggleAsInstructorHighlight = useCallback(
    () => {
      if(!hasIsMineInstructorHighlight) {
        createInstructorHighlight({
          bookId,
          classroomUid,
          spineIdRef: highlight.spineIdRef,
          cfi: highlight.cfi,
          patchInfo: {
            userDataByBookId: getUserDataByBookId(),
          },
        })

      } else {
        deleteInstructorHighlight({
          bookId,
          classroomUid,
          spineIdRef: highlight.spineIdRef,
          cfi: highlight.cfi,
          patchInfo: {
            userDataByBookId: getUserDataByBookId(),
          },
        })
      }
    },
    [ hasIsMineInstructorHighlight, bookId, classroomUid, highlight ],
  )

  if(isDefaultClassroom) return null
  if(myRole !== 'INSTRUCTOR' && !hasInstructorHighlight) return null

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <ToolChip
          toolType="INSTRUCTOR_HIGHLIGHT"
          onPress={othersInstructorHighlights.length === 0 ? toggleAsInstructorHighlight : null}
          style={!hasInstructorHighlight ? styles.unselectedToolChip : styles.toolChip}
        />
        {otherInstructorHighlightsWithoutNotes.length > 0 &&
          <Text style={styles.authorInHeading}>
            {combineItems(...otherInstructorHighlightsWithoutNotes.map(({ author_fullname }) => author_fullname))}
          </Text>
        }
      </View>
      {otherInstructorHighlightsWithNotes.map(({ note, author_id, author_fullname }) => (
        <View key={author_id}>
          <Text style={styles.note}>
            {textToReactNative(note)}
          </Text>
          <Text style={styles.author}>
            {author_fullname}
          </Text>
        </View>
      ))}
      {hasIsMineInstructorHighlight && iHaveANote &&
        <Text style={styles.mynote}>
          {i18n("Students can also view your notes below.")}
          {otherInstructorHighlightsWithNotes.length > 0 && iHaveANote &&
            <Text
              style={styles.clickable}
              onPress={toggleAsInstructorHighlight}
            >
              {i18n("Remove")}
            </Text>
          }
        </Text>
      }
    </View>
      /* <Dialog
        open={!!showShare}
        title={i18n("Instructor’s highlight")}
        message={
          <View style={styles.classroomOptions}>
            <Text style={styles.instructions}>
              {i18n("Share this highlight and any associated note with your classrooms.")}
              {i18n("Changes to the notes will automatically update for students as well.")}
            </Text>
            <View>
              {.map(({ }) => (
                <CheckBox
                  key={id}
                  id={id}
                  // style={styles.checkbox}
                  text={label}
                  checked={!!dataSegment[name]}
                  onChangeInfo={onChangeInfo}
                />
              ))}
            </View>
          </View>
        }
        style={styles.shareDialog}
        onClose={setShowShareToFalse}
      /> */
  )
})

const mapStateToProps = ({ idps, accounts, books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  createInstructorHighlight,
  deleteInstructorHighlight,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(HighlighterInstructorHighlightSection)
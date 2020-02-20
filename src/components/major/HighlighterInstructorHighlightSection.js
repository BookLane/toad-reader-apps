import React, { useCallback } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { Toggle } from '@ui-kitten/components'

import { textToReactNative, combineItems } from '../../utils/toolbox'
import useClassroomInfo from "../../hooks/useClassroomInfo"
import { createInstructorHighlight, deleteInstructorHighlight } from "../../redux/actions"

import InstructorsHighlightLabel from "../basic/InstructorsHighlightLabel"



const author = {
  fontWeight: '100',
  fontSize: 12,
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    maxHeight: 150,
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
    padding: 15,
    paddingTop: 3,
  },
  mynote: {
    fontStyle: 'italic',
    padding: 15,
    paddingTop: 0,
    fontSize: 13,
    opacity: .5,
  },
  clickable: {
    textDecorationLine: 'underline',
    fontStyle: 'normal',
  },
})

const HighlighterInstructorHighlightSection = React.memo(({
  bookId,
  highlight,
  selectionInfo,

  books,
  userDataByBookId,

  createInstructorHighlight,
  deleteInstructorHighlight,
}) => {

  // const [ showShare, setShowShare ] = useState(false)
  // const setShowShareToFalse = useCallback(() => setShowShare(false), [])

  const { classroomUid, isDefaultClassroom, enhancedIsOff, instructorHighlights, myRole } = useClassroomInfo({ books, bookId, userDataByBookId })

  const relevantInstructorHighlights = instructorHighlights.filter(({ spineIdRef, cfi }) => (spineIdRef === selectionInfo.spineIdRef && cfi === selectionInfo.cfi))
  const hasInstructorHighlight = relevantInstructorHighlights.length > 0
  const hasIsMineInstructorHighlight = relevantInstructorHighlights.some(({ isMine }) => isMine)
  const othersInstructorHighlights = relevantInstructorHighlights.filter(({ isMine }) => !isMine)
  const othersInstructorHighlightsWithNotes = othersInstructorHighlights.filter(({ note }) => (note || "").trim())
  const othersInstructorHighlightsWithoutNotes = othersInstructorHighlights.filter(({ note }) => !(note || "").trim())
  const iHaveANote = !!((highlight || {}).note || "").trim()

  const toggleAsInstructorHighlight = useCallback(
    () => {
      if(!hasIsMineInstructorHighlight) {
        createInstructorHighlight({
          bookId,
          classroomUid,
          spineIdRef: highlight.spineIdRef,
          cfi: highlight.cfi,
        })

      } else {
        deleteInstructorHighlight({
          bookId,
          classroomUid,
          spineIdRef: highlight.spineIdRef,
          cfi: highlight.cfi,
        })
      }
    },
    [ hasIsMineInstructorHighlight, bookId, classroomUid, highlight ],
  )

  if(isDefaultClassroom || enhancedIsOff) return null
  if(!(myRole === 'INSTRUCTOR' && highlight) && !hasInstructorHighlight) return null

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heading}>
        {myRole === 'INSTRUCTOR' &&
          <Toggle
            text={
              hasInstructorHighlight
                ? i18n("Shared with this classroom")
                : i18n("Click to share with this classroom")
            }
            checked={!!hasInstructorHighlight}
            onChange={toggleAsInstructorHighlight}
            disabled={othersInstructorHighlights.length !== 0}
          />
        }
        {myRole !== 'INSTRUCTOR' &&
          <InstructorsHighlightLabel />
        }
      </View>
      {othersInstructorHighlightsWithNotes.map(({ note, author_id, author_fullname }) => (
        <View key={author_id}>
          <Text style={styles.note}>
            {textToReactNative(note)}
          </Text>
          <Text style={styles.author}>
            {author_fullname}
          </Text>
        </View>
      ))}
      {othersInstructorHighlightsWithoutNotes.length > 0 &&
        <Text style={styles.author}>
          {combineItems(...othersInstructorHighlightsWithoutNotes.map(({ author_fullname }) => author_fullname))}
        </Text>
      }
      {myRole === 'INSTRUCTOR' && hasIsMineInstructorHighlight && iHaveANote &&
        <Text style={styles.mynote}>
          {i18n("Students can also view your notes below.", "", "enhanced")}
          {othersInstructorHighlights.length > 0 && iHaveANote &&
            <>
              {" "}
              <Text
                style={styles.clickable}
                onPress={toggleAsInstructorHighlight}
              >
                {i18n("Remove", "", "enhanced")}
              </Text>
            </>
          }
        </Text>
      }
      {myRole === 'INSTRUCTOR' && hasInstructorHighlight && !hasIsMineInstructorHighlight && iHaveANote &&
        <Text style={styles.mynote}>
          <Text
            style={styles.clickable}
            onPress={toggleAsInstructorHighlight}
          >
            {i18n("Show students my note", "", "enhanced")}
          </Text>
        </Text>
      }
    </ScrollView>
      /* <Dialog
        open={!!showShare}
        title={i18n("Instructor’s highlight", "", "enhanced")}
        message={
          <View style={styles.classroomOptions}>
            <Text style={styles.instructions}>
              {i18n("Share this highlight and any associated note with your classrooms.", "", "enhanced")}
              {i18n("Changes to the notes will automatically update for students as well.", "", "enhanced")}
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
import React, { useState, useMemo } from "react"
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { CSVLink } from "react-csv"
import { Select } from "@ui-kitten/components"

import { orderSpineIdRefKeyedObj, orderCfiKeyedObj, combineItems } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'

import FAB from '../basic/FAB'

const owner = {
  paddingVertical: 3,
  paddingHorizontal: 7,
  marginRight: 6,
  fontWeight: '600',
  fontSize: 12,
}

const note = {
  paddingLeft: 10,
  borderLeftWidth: 1,
  marginVertical: 5,
}

const noteAuthor = {
  fontSize: 12,
  fontWeight: '100',
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 30,
    flex: 1,
  },
  select: {
    marginRight: 30,
    maxWidth: 400,
  },
  scrollView: {
    flex: 1,
    marginTop: 15,
  },
  scrollViewContent: {
    paddingVertical: 5,
    paddingRight: 30,
  },
  highlight: {
    marginBottom: 25,
  },
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
  types: {
    flexDirection: 'row',
  },
  user: {
    ...owner,
    backgroundColor: 'rgba(28, 96, 171, 0.2)',
  },
  instructor: {
    ...owner,
    backgroundColor: 'rgba(216, 172, 12, .2)',
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
  },
  spineLine: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,.15)',
    position: 'relative',
    top: 10,
  },
  spineTextContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center ',
  },
  spineText: {
    fontWeight: '100',
    fontSize: 16,
    lineHeight: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  myNote: {
    ...note,
    borderLeftColor: 'rgb(63, 146, 239)',
  },
  instructorNote: {
    ...note,
    borderLeftColor: 'rgb(255, 201, 77)',
  },
  noteText: {
    fontWeight: '300',
  },
  noteAuthor: {
    ...noteAuthor,
    marginTop: 5,
  },
  noteAuthors: {
    ...noteAuthor,
  },
})

const selectOptions = [
  {
    id: "user",
    text: i18n("My highlights", "", "enhanced"),
  },
  {
    id: "instructor",
    text: i18n("Instructor’s highlights", "", "enhanced"),
  },
  // {
  //   id: "classroom",
  //   text: i18n("Classroom highlights", "", "enhanced"),
  // },
]

const Highlights = React.memo(({
  bookId,

  books,
  userDataByBookId,
}) => {

  const { book, spines, instructorHighlights } = useClassroomInfo({ books, bookId, userDataByBookId })

  const [ selectedOptions, setSelectedOptions ] = useState(selectOptions)

  const { highlightGroupsToShow, csvData } = useMemo(
    () => {
      const highlightsByLoc = {}
      const csvData = [
        [
          i18n("Location", "", "enhanced"),
          i18n("Highlight", "", "enhanced"),
          i18n("My attached notes", "", "enhanced"),
          i18n("Instructor’s attached Notes", "", "enhanced"),
        ],
      ]

      // function to make objs
      const addHighlightSpot = ({ spineIdRef, cfi }) => {
        if(!highlightsByLoc[spineIdRef]) {
          highlightsByLoc[spineIdRef] = {
            spineIdRef,
            highlightsByCfi: {}
          }
        }
        if(!highlightsByLoc[spineIdRef].highlightsByCfi[cfi]) {
          highlightsByLoc[spineIdRef].highlightsByCfi[cfi] = {
            cfi,
            types: [],
            text: "[[ Quote goes here ]]",
            notes: [],
            instructorHighlightersWithoutNotes: [],
          }
        }
        return highlightsByLoc[spineIdRef].highlightsByCfi[cfi]
      }

      if(selectedOptions.some(({ id }) => id === 'user')) {
        // put in user
        ;((userDataByBookId[bookId] || {}).highlights || [])
          .filter(({ _delete }) => !_delete)
          .forEach(({ spineIdRef, cfi, color, note }) => {
            const highlightToShow = addHighlightSpot({ spineIdRef, cfi })
            highlightToShow.color = color
            if(note) {
              highlightToShow.notes.push({
                note,
              })
            }
            highlightToShow.types.push('user')
          })
      }

      if(selectedOptions.some(({ id }) => id === 'instructor')) {
        // put in instructor
        ;(instructorHighlights || [])
          .forEach(({ spineIdRef, cfi, note, author_fullname }) => {
            const highlightToShow = addHighlightSpot({ spineIdRef, cfi })
            if(note) {
              highlightToShow.notes.push({
                note,
                author_fullname,
              })
            } else if(author_fullname) {
              highlightToShow.instructorHighlightersWithoutNotes.push(author_fullname)
            }
            if(!highlightToShow.types.includes('instructor')) {
              highlightToShow.types.push('instructor')
            }
          })
      }

      // put in classroom highlights
      // TODO

      // put in order and flatten
      const highlightGroupsToShow = orderSpineIdRefKeyedObj({ obj: highlightsByLoc, spines })
      highlightGroupsToShow.forEach(highlightGroupToShow => {
        highlightGroupToShow.highlights = orderCfiKeyedObj({ obj: highlightGroupToShow.highlightsByCfi })
      })

      return { highlightGroupsToShow, csvData }
    },
    [ (userDataByBookId[bookId] || {}).highlights, instructorHighlights, selectedOptions, spines ],
  )

  const spineLabelsByIdRef = useMemo(
    () => {
      const spineLabelsByIdRef = {}

      spines.forEach(({ idref, label }) => {
        spineLabelsByIdRef[idref] = label
      })

      return spineLabelsByIdRef
    },
    [ spines ],
  )

  const typeStrings = useMemo(
    () => ({
      user: i18n("Mine", "", "enhanced"),
      instructor: i18n("Instructor", "", "enhanced"),
    }),
    [],
  )
  
  return (
    <View style={styles.container}>
      <Select
        style={styles.select}
        data={selectOptions}
        multiSelect={true}
        selectedOption={selectedOptions}
        onSelect={setSelectedOptions}
      />
      {highlightGroupsToShow.length === 0 &&
        <Text style={styles.none}>
          {i18n("None.", "", "enhanced")}
        </Text>
      }
      {highlightGroupsToShow.length !== 0 &&
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
        >
          {highlightGroupsToShow.map(({ spineIdRef, highlights }, idx) => (
            <View key={idx}>
              <View style={styles.spineLine} />
              <View style={styles.spineTextContainer}>
                <Text
                  style={styles.spineText}
                  numberOfLines={1}
                >
                  {spineLabelsByIdRef[spineIdRef]}
                </Text>
              </View>
              {highlights.map(({ cfi, types, text, notes, instructorHighlightersWithoutNotes }) => (
                <View style={styles.highlight} key={cfi}>
                  <View style={styles.types}>
                    {types.map(type => (
                      <Text
                        style={styles[type]}
                        key={type}
                      >
                        {typeStrings[type]}
                      </Text>
                    ))}
                    <View style={styles.spacer}/>
                  </View>
                  <Text style={styles.text}>
                    {text}
                  </Text>
                  <View style={styles.notes}>
                    {notes.map((note, idx) => (
                      <View
                        style={note.author_fullname ? styles.instructorNote : styles.myNote}
                        key={idx}
                      >
                        <Text style={styles.noteText}>
                          {note.note}
                        </Text>
                        {!!note.author_fullname &&
                          <Text style={styles.noteAuthor}>
                            {note.author_fullname}
                          </Text>
                        }
                      </View>
                    ))}
                    {instructorHighlightersWithoutNotes.length > 0 &&
                      <View style={styles.note}>
                        <Text style={styles.noteAuthors}>
                          {combineItems(...instructorHighlightersWithoutNotes)}
                        </Text>
                      </View>
                    }
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      }
      {Platform.OS === 'web' &&
        <CSVLink
          data={csvData}
          filename={
            i18n("Highlights")
            + " - "
            + book.title
          }
          target="_blank"
        >
          <FAB
            iconName="md-cloud-download"
            status="primary"
          />
        </CSVLink>
      }
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlights)
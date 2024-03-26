import React, { useState, useMemo, useCallback } from "react"
import { StyleSheet, View, ScrollView, Text, Platform } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { Select, SelectItem, IndexPath } from "@ui-kitten/components"

import { orderSpineIdRefKeyedObj, orderCfiKeyedObj, combineItems, getIDPOrigin } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import { setSelectedToolUid } from "../../redux/actions"
import useWideMode from "../../hooks/useWideMode"
import useRouterState from "../../hooks/useRouterState"

import Icon from "../basic/Icon"
import Button from "../basic/Button"
import SketchPad from "../basic/SketchPad"
import HighlightsDownloadFAB from "./HighlightsDownloadFAB"

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
  marginLeft: 35,
}

const noteAuthor = {
  fontSize: 12,
  fontWeight: '100',
}

const container = {
  paddingLeft: 20,
  flex: 1,
}

const select = {
  marginRight: 20,
  maxWidth: 400,
  marginTop: 20,
  marginBottom: 10,
}

const scrollViewContent = {
  paddingVertical: 5,
  paddingRight: 20,
}

const text = {
  marginVertical: 10,
  fontSize: 16,
  flex: 1,
}


const styles = StyleSheet.create({
  container: {
    ...container,
  },
  containerWideMode: {
    ...container,
    paddingLeft: 30,
  },
  select: {
    ...select,
  },
  selectWideMode: {
    ...select,
    marginRight: 30,
  },
  scrollView: {
    flex: 1,
    paddingTop: 20,
  },
  scrollViewContent: {
    ...scrollViewContent,
  },
  scrollViewContentWideMode: {
    ...scrollViewContent,
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
    zIndex: 1,
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
    ...text,
  },
  missingText: {
    ...text,
    fontWeight: '100',
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
    justifyContent: 'center',
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
  quote: {
    flexDirection: 'row',
  },
  quoteIcon: {
    height: 28,
    marginTop: 5,
    marginHorizontal: 5,
    tintColor: 'rgba(0, 0, 0, 1)',
  },
  buttons: {
    position: 'absolute',
    top: -7,
    right: 0,
    height: 35,
    flexDirection: 'row',
  },
  button: {
    width: 35,
    paddingHorizontal: 0,
    borderRadius: 18,
  },
  sketchButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 35,
  },
  retrieveButton: {
    marginLeft: 10,
    marginVertical: 'auto',
  },
  sketchPadContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

const Highlights = React.memo(({
  bookId,
  goTo,

  idps,
  books,
  userDataByBookId,

  setSelectedToolUid,
}) => {

  const { book, spines, instructorHighlights, enhancedIsOff, isDefaultClassroom, idpId } = useClassroomInfo({ books, bookId, userDataByBookId })
  const { historyReplace } = useRouterState()
  const [ sketchToShow, setSketchToShow ] = useState()

  const wideMode = useWideMode()

  const selectOptions = useMemo(
    () => ([
      {
        id: "user",
        title: i18n("My highlights", "", "enhanced"),
      },
      ...(!(!enhancedIsOff && !isDefaultClassroom) ? [] : [{
        id: "instructor",
        title: i18n("Instructor’s highlights", "", "enhanced"),
      }]),
      // {
      //   id: "classroom",
      //   title: i18n("Classroom highlights", "", "enhanced"),
      // },
    ]),
    [ enhancedIsOff, isDefaultClassroom ],
  )
  
  const [ selectedIndexes, setSelectedIndexes ] = useState(
    selectOptions.map((x, idx) => new IndexPath(idx))
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

  const highlightGroupsToShow = useMemo(
    () => {
      const highlightsByLoc = {}

      // function to make objs
      const addHighlightSpot = ({ spineIdRef, cfi, share_quote, sketch }) => {
        if(!highlightsByLoc[spineIdRef]) {
          highlightsByLoc[spineIdRef] = {
            spineIdRef,
            highlightsByCfi: {},
          }
        }
        if(!highlightsByLoc[spineIdRef].highlightsByCfi[cfi]) {
          highlightsByLoc[spineIdRef].highlightsByCfi[cfi] = {
            cfi,
            types: [],
            text: share_quote,
            notes: [],
            sketch,
            instructorHighlightersWithoutNotes: [],
          }
        }
        return highlightsByLoc[spineIdRef].highlightsByCfi[cfi]
      }

      if(selectedIndexes.some(({ row }) => selectOptions[row].id === 'user')) {
        // put in user
        ;((userDataByBookId[bookId] || {}).highlights || [])
          .filter(({ _delete }) => !_delete)
          .forEach(({ spineIdRef, cfi, share_quote, color, note, sketch }) => {
            const highlightToShow = addHighlightSpot({ spineIdRef, cfi, share_quote, sketch })
            highlightToShow.color = color
            if(note) {
              highlightToShow.notes.push({
                note,
              })
            }
            highlightToShow.types.push('user')
          })
      }

      if(selectedIndexes.some(({ row }) => selectOptions[row].id === 'instructor')) {
        // put in instructor
        ;(instructorHighlights || [])
          .forEach(({ spineIdRef, cfi, share_quote, note, author_fullname }) => {
            const highlightToShow = addHighlightSpot({ spineIdRef, cfi, share_quote })
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

      return highlightGroupsToShow
    },
    [ bookId, (userDataByBookId[bookId] || {}).highlights, instructorHighlights, selectedIndexes, spines ],
  )

  const typeStrings = useMemo(
    () => ({
      user: i18n("Mine", "", "enhanced"),
      instructor: i18n("Instructor", "", "enhanced"),
    }),
    [],
  )

  const ReadIcon = useCallback(({ style }) => <Icon name="book-open-variant" pack="materialCommunity" style={style} />, [])
  // const DrawIcon = useCallback(({ style }) => <Icon name="draw" pack="materialCommunity" style={style} />, [])
  // const ShareIcon = useCallback(style => <Icon name="md-share" style={style} />, [])

  const showSketch = useCallback(({ info: { sketch } }) => setSketchToShow(sketch), [])

  const goRead = useCallback(
    ({ info }) => {
      const newRouterState = goTo(info)
      setSelectedToolUid({  // unselects any tool
        bookId,
        getRouterState: () => newRouterState,
        historyReplace,
      })

    },
    [ bookId ],
  )

  // const goShare = useCallback(
  //   () => {

  //   },
  //   [],
  // )

  return (
    <View style={wideMode ? styles.containerWideMode : styles.container}>
      {selectOptions.length > 1 &&
        <Select
          style={wideMode ? styles.selectWideMode : styles.select}
          multiSelect={true}
          selectedIndex={selectedIndexes}
          value={combineItems(...selectedIndexes.map(({ row }) => selectOptions[row].title))}
          onSelect={setSelectedIndexes}
        >
          {selectOptions.map(({ title }, idx) => (
            <SelectItem
              key={idx}
              title={title}
            />
          ))}
        </Select>
      }
      {highlightGroupsToShow.length === 0 &&
        <Text style={styles.none}>
          {i18n("None.", "", "enhanced")}
        </Text>
      }
      {highlightGroupsToShow.length !== 0 &&
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={wideMode ? styles.scrollViewContentWideMode : styles.scrollViewContent}
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
              {highlights.map(({ cfi, types, text, notes, sketch, instructorHighlightersWithoutNotes }) => (
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
                    <View style={styles.buttons}>
                      <Button
                        style={styles.button}
                        size="small"
                        status="basic"
                        accessoryLeft={ReadIcon}
                        appearance="ghost"
                        onPress={goRead}
                        info={{
                          spineIdRef,
                          cfi,
                        }}
                      />
                      {/* <Button
                        style={styles.button}
                        size="small"
                        status="basic"
                        accessoryLeft={ShareIcon}
                        appearance="ghost"
                        onPress={goShare}
                        info={{
                          spineIdRef,
                          cfi,
                        }}
                      /> */}
                    </View>
                  </View>
                  <View style={styles.quote}>
                    <Icon
                      name="format-quote-open"
                      pack="materialCommunity"
                      style={styles.quoteIcon}
                    />
                    <Text style={text ? styles.text : styles.missingText}>
                      {text || i18n("(Highlighted text unavailable.)", "", "enhanced")}
                    </Text>
                    {!text && types.includes('user') &&
                      <Button
                        style={styles.retrieveButton}
                        onPress={goRead}
                        status="basic"
                        size="tiny"
                        info={{
                          spineIdRef,
                          cfi,
                          autoSelectHighlight: true,
                        }}
                      >
                        {i18n("Retrieve", "", "enhanced")}
                      </Button>
                    }
                  </View>
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
                  {!!sketch &&
                    <Button
                      style={styles.sketchButton}
                      size="small"
                      status="basic"
                      onPress={showSketch}
                      info={{
                        sketch,
                      }}
                    >
                      {i18n("View sketch")}
                    </Button>
                  }
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      }
      {Platform.OS === 'web' && highlightGroupsToShow.length > 0 &&
        <HighlightsDownloadFAB
          filename={`${i18n("Highlights")} - ${book.title}`}
          highlightGroupsToShow={highlightGroupsToShow}
          spineLabelsByIdRef={spineLabelsByIdRef}
          bookUrl={`${getIDPOrigin({ ...idps[idpId], noBeta: true })}/#/book/${bookId}`}
          typeStrings={typeStrings}
        />
      }
      {!!sketchToShow &&
        <View style={styles.sketchPadContainer}>
          <SketchPad
            sketch={sketchToShow}
            mode="view"
            onDone={() => setSketchToShow()}
            doneButtonLabel={i18n("Close")}
          />
        </View>
      }
    </View>
  )
})

const mapStateToProps = ({ idps, books, userDataByBookId }) => ({
  idps,
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Highlights)
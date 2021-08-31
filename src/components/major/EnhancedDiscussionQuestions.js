import React, { useState, useMemo, useCallback, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import { Select, SelectItem, IndexPath } from "@ui-kitten/components"
import usePrevious from "react-use/lib/usePrevious"

import getDummyDiscussionQuestions from '../../utils/getDummyDiscussionQuestions'
import { orderSpineIdRefKeyedObj, orderCfiKeyedObj, combineItems } from '../../utils/toolbox'
import useClassroomInfo from '../../hooks/useClassroomInfo'
import useWideMode from "../../hooks/useWideMode"

import DiscussionQuestionTool from "./DiscussionQuestionTool"

const selectContainer = {
  width: 800,
  maxWidth: '100%',
  paddingHorizontal: 20,
}

const styles = StyleSheet.create({
  none: {
    textAlign: 'center',
    paddingTop: 50,
    fontSize: 16,
    fontWeight: '100',
  },
  genericContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    flex: 1,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  selectContainer: {
    ...selectContainer,
  },
  selectContainerWideMode: {
    ...selectContainer,
    paddingHorizontal: 30,
  },
  discussionsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  discussionContainer: {
    borderRightWidth: 1,
    borderRightColor: 'rgba(0, 0, 0, .15)',
    flex: 1,
  },
  discussionContainerLast: {
    flex: 1,
  },
})

const EnhancedDiscussionQuestions = React.memo(({
  bookId,
  logToolUsageEvent,

  books,
  userDataByBookId,
}) => {

  const { classroomUid, visibleTools, spines } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode: false })

  const wideMode = useWideMode()

  const [ currentQuestionUids, setCurrentQuestionUids ] = useState([])
  const prevCurrentQuestionUids = usePrevious(currentQuestionUids)

  const { orderedQuestions } = useMemo(
    () => {
      const orderedQuestions = []
      const questionsByLoc = {}

      visibleTools.forEach(tool => {
        const { uid, spineIdRef, cfi, name, data } = tool

        if(!data.isDiscussion) return

        if(!questionsByLoc[spineIdRef]) {
          questionsByLoc[spineIdRef] = {}
        }

        const cfiOrNullStr = cfi || 'NULL'

        if(!questionsByLoc[spineIdRef][cfiOrNullStr]) {
          questionsByLoc[spineIdRef][cfiOrNullStr] = []
        }

        questionsByLoc[spineIdRef][cfiOrNullStr].push({
          uid,
          name,
          question: data.question || "",
        })
      })

      orderSpineIdRefKeyedObj({ obj: questionsByLoc, spines }).forEach(questionssByCfi => {
        orderCfiKeyedObj({ obj: questionssByCfi }).forEach(questions => {
          questions.forEach(question => {
            orderedQuestions.push({
              ...question,
              title: question.name || i18n("Question", "", "enhanced"),
            })
          })
        })
      })

      if(orderedQuestions.length === 0) return getDummyDiscussionQuestions()

      return { orderedQuestions }
    },
    [ visibleTools, spines ],
  )

  const onSelect = useCallback(
    selectionInfo => (
      setCurrentQuestionUids(
        wideMode
          ? selectionInfo.map(({ row }) => orderedQuestions[row].uid).slice(-3)
          : [ orderedQuestions[selectionInfo.row].uid ]
      )
    ),
    [ wideMode, orderedQuestions ],
  )

  useEffect(
    () => {
      currentQuestionUids.forEach(toolUid => {
        if(!prevCurrentQuestionUids.includes(toolUid)) {
          logToolUsageEvent({
            toolUid,
            eventName: `View tool`,
          })
        }
      })
    },
    [ currentQuestionUids ],
  )

  const currentQuestions = useMemo(
    () => (
      orderedQuestions.filter(({ uid }) => currentQuestionUids.includes(uid))
    ),
    [ orderedQuestions, JSON.stringify(currentQuestionUids) ],
  )

  if(!classroomUid) return null

  const selectedOptions = wideMode ? currentQuestions : currentQuestions[0]

  return (
    <View style={styles.container}>
      <View style={wideMode ? styles.selectContainerWideMode : styles.selectContainer}>
        <Select
          label={wideMode ? i18n("Questions to display", "", "enhanced") : i18n("Question", "", "enhanced")}
          placeholder={wideMode ? i18n("Select up to three", "", "enhanced") : i18n("Select a question", "", "enhanced") }
          style={styles.select}
          multiSelect={wideMode}
          value={wideMode ? combineItems(...selectedOptions.map(({ title }) => title)) : (selectedOptions || {}).title}
          selectedIndex={
            wideMode
              ? selectedOptions.map(selectedOption => new IndexPath(orderedQuestions.indexOf(selectedOption)))
              : (selectedOptions ? new IndexPath(orderedQuestions.indexOf(selectedOptions)) : undefined)
          }
          onSelect={onSelect}
        >
          {orderedQuestions.map(({ title }, idx) => (
            <SelectItem
              key={idx}
              title={title}
            />
          ))}
        </Select>
      </View>
      <View style={styles.discussionsContainer}>
        {(wideMode ? currentQuestions : currentQuestions.slice(0, 1)).map(({ uid, question }, idx) => (
          <View
            key={uid}
            style={idx === currentQuestions.length-1 ? styles.discussionContainerLast : styles.discussionContainer}
          >
            <DiscussionQuestionTool
              bookId={bookId}
              toolUid={uid}
              question={question}
              extraKeyboardVerticalOffset={92}
              logUsageEvent={logToolUsageEvent}
            />
          </View>
        ))}
      </View>
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(EnhancedDiscussionQuestions)
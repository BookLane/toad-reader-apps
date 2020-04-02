import React, { useMemo, useCallback } from "react"
import { StyleSheet, View, Text } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"

import useClassroomInfo from '../../hooks/useClassroomInfo'

import ReadingScheduleDate from './ReadingScheduleDate'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  instructions: {
    marginBottom: 20,
    fontWeight: '200',
  },
})

const ReadingSchedule = React.memo(({
  bookId,
  inEditMode,
  viewingPreview,
  goUpdateClassroom,

  books,
  userDataByBookId,
}) => {

  const { spines, classroom, myRole, scheduleDatesToDisplay } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const scheduleDatesToDisplayWithAddNew = useMemo(
    () => {
      if(myRole === 'INSTRUCTOR' && inEditMode && !viewingPreview) {
        return [
          ...scheduleDatesToDisplay,
          null,  // For the Add due date button
        ]
      }

      return scheduleDatesToDisplay
    },
    [ scheduleDatesToDisplay, myRole, inEditMode, viewingPreview ],
  )

  const goUpdate = useCallback(
    ({ origDueAt, info, goDelete }) => {

      let updatedScheduleDates = [ ...scheduleDatesToDisplay ]

      let existingScheduleDateMatchingUpdate

      if(!goDelete) {
        updatedScheduleDates.some((scheduleDateInfo, idx) => {
          if(info.due_at !== origDueAt && info.due_at === scheduleDateInfo.due_at) {
            updatedScheduleDates[idx] = existingScheduleDateMatchingUpdate = { ...scheduleDateInfo }
            return true
          }
        })
      }

      const deleteThisScheduleDate = () => {
        updatedScheduleDates = updatedScheduleDates.filter(({ due_at }) => due_at !== origDueAt)
      }

      const combineItemLists = (items1, items2) => {
        // combine the items of the two in the proper order

        const combinedItems = []

        const allIdRefs = [
          ...items1,
          ...items2,
        ].map(({ spineIdRef }) => spineIdRef)

        spines.forEach(({ idref, label }) => {
          if(allIdRefs.includes(idref)) {
            combinedItems.push({
              spineIdRef: idref,
              label,
            })
          }
        })

        return combinedItems
      }

      if(!origDueAt) {  // add

        if(existingScheduleDateMatchingUpdate) {
          existingScheduleDateMatchingUpdate.items = combineItemLists(
            existingScheduleDateMatchingUpdate.items,
            info.items,
          )
        } else {
          let insertIdx
          for(insertIdx=0; insertIdx<updatedScheduleDates.length; insertIdx++) {
            if(info.due_at < updatedScheduleDates[insertIdx].due_at) break
          }
          updatedScheduleDates.splice(insertIdx, 0, info)
        }

      } else if(goDelete) {  // delete

        deleteThisScheduleDate()

      } else {  // update

        if(existingScheduleDateMatchingUpdate) {
          existingScheduleDateMatchingUpdate.items = combineItemLists(
            existingScheduleDateMatchingUpdate.items,
            info.items,
          )
          deleteThisScheduleDate()

        } else {
          updatedScheduleDates = updatedScheduleDates.map(scheduleDate => (
            scheduleDate.due_at === origDueAt
              ? info
              : scheduleDate
          ))
          updatedScheduleDates.sort((a, b) => a.due_at - b.due_at)
        }
      }

      goUpdateClassroom({
        data: {
          scheduleDates: updatedScheduleDates,
        },
      })
    },
    [ scheduleDatesToDisplay ],
  )

  if(!classroom) return null

  return (
    <View style={styles.container}>
      {!!inEditMode && !viewingPreview &&
        <Text style={styles.instructions}>
          {/* {i18n("Adding a reading schedule enables students to receive reminder notifications and allows you to quickly see how students are keeping up with their reading.", "", "enhanced")} */}
          {/* Adding a reading schedule enables students to see due dates in the book table of contents and allows you to quickly see how students are keeping up with their reading. */}
          Adding a reading schedule enables students to see due dates in the book’s table of contents.
        </Text>
      }
      {scheduleDatesToDisplayWithAddNew.map((scheduleDateInfo, idx) => (
        <ReadingScheduleDate
          key={idx}
          bookId={bookId}
          info={scheduleDateInfo}
          editable={!!inEditMode && !viewingPreview}
          goUpdate={goUpdate}
          scheduleDatesToDisplay={scheduleDatesToDisplay}
        />
      ))}
    </View>
  )
})

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReadingSchedule)
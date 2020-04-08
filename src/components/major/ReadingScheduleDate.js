import React, { useState, useCallback, useMemo } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { i18n } from "inline-i18n"
import useToggle from 'react-use/lib/useToggle'

import useClassroomInfo from '../../hooks/useClassroomInfo'
import useInstanceValue from '../../hooks/useInstanceValue'
import { getDateLine, getTimeLine } from "../../utils/toolbox"
import useWideMode from "../../hooks/useWideMode"
import { setSelectedToolUid } from "../../redux/actions"

import Dialog from "./Dialog"
import Button from "../basic/Button"
import Datepicker from "../basic/Datepicker"
import Icon from "../basic/Icon"
import CheckBox from "../basic/CheckBox"
import Input from "../basic/Input"
import ActionText from "../basic/ActionText"

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  insructions: {
    marginBottom: 5,
    fontWeight: '200',
  },
  selectSection: {
    marginVertical: 20,
  },
  selectSectionsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  checkBox: {
    height: 0,
  },
  datePickerContainer: {
    flexDirection: 'row',
  },
  datePickerItem: {
    width: 160,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  spines: {
    flex: 1,
    marginHorizontal: 15,
  },
  spine: {
    fontWeight: '500',
    fontSize: 15,
  },
  dateAndTime: {
    minWidth: 60,
  },
  wideModeDateAndTime: {
    minWidth: 140,
  },
  date: {
    fontWeight: '300',
    fontSize: 15,
  },
  time: {
    fontWeight: '100',
    fontSize: 13,
  },
  wideModeOptions: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginBottom: 4,
    borderColor: 'transparent',
  },
})

const ReadingScheduleDate = React.memo(({
  info,
  bookId,
  editable,
  goUpdate,
  scheduleDatesToDisplay,
  goTo,

  books,

  setSelectedToolUid,
}) => {

  const { spines } = useClassroomInfo({ books, bookId })
  const spinesByIdRef = useMemo(
    () => {
      const spinesObj = {}
      spines.forEach(spine => {
        spinesObj[spine.idref] = spine
      })
      return spinesObj
    },
    [ spines ],
  )
  
  const spineIdRefsAssignedToOtherDueDates = useMemo(
    () => {
      const spineIdRefs = []

      const spineIdRefsForThisDueDate = ((info || {}).items || []).map(({ spineIdRef }) => spineIdRef)

      scheduleDatesToDisplay.forEach(({ items }) => {
        items.forEach(({ spineIdRef }) => {
          if(!spineIdRefsForThisDueDate.includes(spineIdRef)) {
            spineIdRefs.push(spineIdRef)
          }
        })
      })

      return spineIdRefs
    },
    [ scheduleDatesToDisplay, info ],
  )

  const wideMode = useWideMode()

  const [ editing, toggleEditing ] = useToggle(false)
  const [ date, setDate ] = useState()
  const [ timeInEdit, setTimeInEdit ] = useState()
  const [ checkedSpines, setCheckedSpines ] = useState({})

  const getTimeInEdit = useInstanceValue(timeInEdit)
  const today = useMemo(() => new Date(), [])

  const itemsInOrder = useMemo(
    () => {
      if(!info) return null

      const spineIdRefsInOrder = Object.keys(spinesByIdRef)
      const orderedItems = [ ...info.items ]

      orderedItems.sort((a, b) => spineIdRefsInOrder.indexOf(a.spineIdRef) - spineIdRefsInOrder.indexOf(b.spineIdRef))

      return orderedItems
    },
    [ info, spinesByIdRef ],
  )

  const goEdit = useCallback(
    () => {
      const date = new Date(info.due_at)
      const checkedSpines = {}
      ;(info.items || []).forEach(({ spineIdRef }) => {
        checkedSpines[spineIdRef] = true
      })
  
      setDate(date)
      setTimeInEdit(getTimeLine({ date }))
      setCheckedSpines(checkedSpines)
      toggleEditing()
    },
    [ info ],
  )

  const goDelete = useCallback(
    () => {
      goUpdate({
        origDueAt: (info || {}).due_at,
        goDelete: true,
      })
    },
    [ info, goUpdate ],
  )

  const goAdd = useCallback(
    () => {
      const date = new Date()
      date.setHours(23)
      date.setMinutes(59)
      date.setSeconds(0)
      date.setMilliseconds(0)
  
      setDate(date)
      setTimeInEdit(getTimeLine({ date }))
      setCheckedSpines({})
      toggleEditing()
    },
    [],
  )

  const addOrUpdate = useCallback(
    () => {
      const items = Object.keys(checkedSpines)
        .filter(idref => checkedSpines[idref])
        .map(idref => ({
          spineIdRef: idref,
          label: spinesByIdRef[idref].label,
        }))

      goUpdate({
        origDueAt: (info || {}).due_at,
        info: {
          due_at: date.getTime(),
          items,
        },
      })

      toggleEditing()
    },
    [ spinesByIdRef, info, date, checkedSpines, goUpdate ],
  )

  const onTimeInputChangeText = useCallback(timeText => setTimeInEdit(timeText.replace(/[^0-9: apm.]/gi, ''), []))

  const goSetDate = useCallback(
    newDate => {
      newDate.setHours(date.getHours())
      newDate.setMinutes(date.getMinutes())
      setDate(newDate)
    },
    [ date ],
  )

  const goSetTime = useCallback(
    () => {
      let [ all, hours, minutesWithColon, amPm="" ] = getTimeInEdit().trim().match(/^([0-9]{1,2}) *(\:[0-9]{1,2}|) *([amp .]+)$/i) || []

      const isPm = amPm.replace(/[^apm]/gi, '').toUpperCase() === 'PM'
      hours = hours && isPm ? parseInt(hours, 10) + 12 : parseInt(hours, 10)

      if(hours && hours >= 0 && hours <= 23) {
        date.setHours(hours)

        if(minutesWithColon) {
          const minutes = minutesWithColon && parseInt(minutesWithColon.substr(1), 10)

          if(minutes >= 0 && minutes <= 59) {
            date.setMinutes(minutes)
          }
        }

        setDate(date)
      }

      setTimeInEdit(getTimeLine({ date }))
    },
    [ date ],
  )

  const onCheckBoxChangeInfo = useCallback(
    ({ id, value }) => {
      setCheckedSpines({
        ...checkedSpines,
        [id]: value,
      })
    },
    [ checkedSpines ],
  )

  const onItemPress = useCallback(
    ({ id: spineIdRef }) => {
      setSelectedToolUid({ bookId })  // unselects any tool
      goTo({ spineIdRef })
    },
    [ bookId, goTo ],
  )

  const EditButtonIcon = useCallback(
    style => (
      <Icon
        name="pencil"
        pack="materialCommunity"
        style={styles.icon}
      />
    ),
    [],
  )

  const TrashButtonIcon = useCallback(
    style => (
      <Icon
        name="md-trash"
        style={styles.icon}
      />
    ),
    [],
  )

  const CalendarIcon = useCallback(
    style => (
      <Icon
        name="md-calendar"
        style={style}
      />
    ),
    [],
  )

  return (
    <>

      {!!info &&
        <View style={styles.line}>
          <View style={wideMode ? styles.wideModeDateAndTime : styles.dateAndTime}>
            <Text style={styles.date}>
              {getDateLine({ timestamp: info.due_at, short: !wideMode })}
            </Text>
            <Text style={styles.time}>
              {getTimeLine({ timestamp: info.due_at, short: !wideMode })}
            </Text>
          </View>
          <View style={styles.spines}>
            {itemsInOrder.map(({ spineIdRef, label }) => (
              <ActionText
                id={spineIdRef}
                key={spineIdRef}
                style={styles.spine}
                onPress={onItemPress}
              >
                {label}
              </ActionText>
            ))}
          </View>
          {!!editable &&
            <View style={wideMode ? styles.wideModeOptions : styles.options}>
              <Button
                style={styles.button}
                appearance="ghost"
                status="basic"
                icon={EditButtonIcon}
                onPress={goEdit}
              />
              <Button
                style={styles.button}
                appearance="ghost"
                status="basic"
                icon={TrashButtonIcon}
                onPress={goDelete}
              />
            </View>
          }
        </View>
      }

      {!info &&
        <View style={styles.buttonContainer}>
          <Button
            status="primary"
            size="small"
            onPress={goAdd}
          >
            {i18n("Add due date", "", "enhanced")}
          </Button>
        </View>
      }

      <Dialog
        open={editing}
        style={styles.dialog}
        title={
          info
            ? i18n("Update this due date", "", "enhanced")
            : i18n("Create a new due date", "", "enhanced")
        }
        message={(
          <>
            <View style={styles.datePickerContainer}>
              <Datepicker
                label={i18n("Date")}
                date={date}
                min={today}
                max={new Date(Date.now() + (1000*60*60*24*265*10))}
                onSelect={goSetDate}
                icon={CalendarIcon}
                style={styles.datePickerItem}
              />
              <Input
                label={i18n("Time")}
                value={timeInEdit}
                onChangeText={onTimeInputChangeText}
                onBlur={goSetTime}
                style={styles.datePickerItem}
              />
            </View>
            <View style={styles.selectSectionsContainer}>
              <ScrollView>
                <Text style={styles.insructions}>
                  {i18n("Select which sections are due to be read by this date.", "", "enhanced")}
                </Text>
                {spines.map(({ label, idref }) => (
                  <View
                    key={idref}
                    style={styles.selectSection}
                  >
                    <CheckBox
                      id={idref}
                      text={label}
                      checked={checkedSpines[idref]}
                      disabled={spineIdRefsAssignedToOtherDueDates.includes(idref)}
                      onChangeInfo={onCheckBoxChangeInfo}
                      style={styles.checkBox}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </>
        )}
        noScroll={true}
        type="confirm"
        onCancel={toggleEditing}
        onConfirm={addOrUpdate}
        confirmButtonDisabled={Object.values(checkedSpines).filter(Boolean).length === 0}
        confirmButtonText={
          info
            ? i18n("Update", "", "enhanced")
            : i18n("Add", "", "enhanced")
        }
      />

    </>
  )
})

const mapStateToProps = ({ books }) => ({
  books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(ReadingScheduleDate)
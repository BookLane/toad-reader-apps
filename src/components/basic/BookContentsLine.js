import React, { useCallback, useMemo, useEffect } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { useLayout } from '@react-native-community/hooks'
import { styled } from '@ui-kitten/components'

import useClassroomInfo from "../../hooks/useClassroomInfo"
import useThemedStates from "../../hooks/useThemedStates"
import useWideMode from "../../hooks/useWideMode"
import { setSelectedToolUid } from "../../redux/actions"
import { getDateLine, getTimeLine } from "../../utils/toolbox"

import ToolChip from './ToolChip'
import GroupedToolsChip from './GroupedToolsChip'

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemWithTool: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  label: {
    lineHeight: 18,
    flexShrink: 1,
  },
  spacer: {
    flex: 1,
  },
  dateAndTime: {
    marginLeft: 7,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(0, 0, 0, .15)',
    paddingLeft: 4,
    width: 45,
  },
  date: {
    fontWeight: '300',
    fontSize: 11,
  },
  time: {
    fontWeight: '100',
    fontSize: 9,
  },
})

const BookContentsLine = ({
  bookId,
  indentLevel,
  uid,
  label,
  toolType,
  data,
  isDraft,
  numToolsWithin,
  goTo,
  href,
  spineIdRef,
  reportLineHeight,
  index,
  onToolMove,
  onToolRelease,
  setModeToPage,
  inEditMode,
  uiStatus,

  books,
  userDataByBookId,

  setSelectedToolUid,

  eva: {
    style: themedStyle,
    dispatch,
  }={},
}) => {

  const { scheduleDatesToDisplay } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })

  const dueDate = useMemo(
    () => {
      if(!scheduleDatesToDisplay) return null

      let date

      scheduleDatesToDisplay.some(({ due_at, items }) => {
        return items.some(item => {
          if(item.spineIdRef === spineIdRef) {
            date = due_at
            return true
          }
        })
      })

      return date
    },
    [ scheduleDatesToDisplay, spineIdRef ],
  )

  const themedStateEvents = useThemedStates({ dispatch, states: [ 'hover' ] })
  const wideMode = useWideMode()

  const onPress = useCallback(
    event => {
      event.preventDefault()
      event.stopPropagation()

      if(toolType) {
        setModeToPage && setModeToPage()
        setSelectedToolUid({
          bookId,
          uid,
        })
      } else {
        setSelectedToolUid({ bookId })  // unselects any tool
        goTo({ href, spineIdRef })
      }
    },
    [ href, bookId, goTo ],
  )

  const { onLayout, height } = useLayout()

  useEffect(
    () => {
      reportLineHeight({ index, height })
    },
    [ reportLineHeight, index, height ],
  )

  const indentStyle = { paddingLeft: 20 + indentLevel * 20 }

  const line = (
    <View
      {...themedStateEvents}
      onLayout={onLayout}
      style={[
        (toolType ? styles.listItemWithTool : styles.listItem),
        themedStyle,
        indentStyle,
      ]}
    >
      {!!toolType &&
        <ToolChip
          uid={uid}
          label={label}
          toolType={toolType}
          data={data}
          isDraft={isDraft}
          onPress={onPress}
          onToolMove={onToolMove}
          onToolRelease={onToolRelease}
          status={isDraft ? "draft" : "published"}
        />
      }
      {!toolType &&
        <>
          <Text
            style={styles.label}
            selectable={false}
          >
            {label}
          </Text>
          {!!numToolsWithin &&
            <GroupedToolsChip
              status={isDraft ? "draft" : "published"}
              numToolsWithin={numToolsWithin}
              bookId={bookId}
              inEditMode={inEditMode}
              spineIdRef={spineIdRef}
              setModeToPage={setModeToPage}
            />
          }
          <View style={styles.spacer} />
          {dueDate &&
            <View style={styles.dateAndTime}>
              <Text style={styles.date}>
                {getDateLine({ timestamp: dueDate, short: true })}
              </Text>
              <Text style={styles.time}>
                {getTimeLine({ timestamp: dueDate, short: true })}
              </Text>
            </View>
          }
        </>
      }
      
    </View>
  )

  if(uiStatus === 'unselected' || /#/.test(href) || !wideMode) {
    return (
      <TouchableOpacity onPress={onPress}>
        {line}
      </TouchableOpacity>
    )

  } else {
    return line
  }

}

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(styled('BookContentsLine')(BookContentsLine))
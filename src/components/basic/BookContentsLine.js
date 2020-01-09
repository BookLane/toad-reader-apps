import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { getSpineAndPage } from '../../utils/toolbox'

import ToolChip from './ToolChip'

import { useLayout } from 'react-native-hooks'
import useClassroomInfo from "../../hooks/useClassroomInfo"

import { setSelectedToolUid } from "../../redux/actions"

const numWithin = {
  backgroundColor: 'rgb(0, 0, 0)',
  borderRadius: '50%',
  color: 'white',
  width: 19,
  height: 19,
  flexShrink: 0,
  lineHeight: 18,
  textAlign: 'center',
  fontSize: 10,
  fontWeight: 600,
  marginVertical: -6,
  marginLeft: 8,
  paddingRight: 1, // not sure why I need this
}

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
  selected: {
    backgroundColor: 'rgb(199, 211, 234)',
  },
  label: {
    flexShrink: 1,
  },
  numWithin: {
    ...numWithin,
  },
  numWithinDraft: {
    ...numWithin,
    fontStyle: 'italic',
  },
})

const BookContentsLine = ({
  bookId,
  indentLevel,
  uid,
  label,
  toolType,
  isDraft,
  numToolsWithin,
  goTo,
  href,
  spineIdRef,
  reportLineHeight,
  index,
  onToolMove,
  onToolRelease,
  inEditMode,

  books,
  userDataByBookId,

  setSelectedToolUid,
}) => {

  const { selectedToolUid } = useClassroomInfo({ books, bookId, userDataByBookId, inEditMode })
  const { latest_location } = userDataByBookId[bookId] || {}
  const currentSpineIdRef = getSpineAndPage({ latest_location }).spineIdRef

  const onPress = useCallback(
    () => {
      if(toolType) {
        setSelectedToolUid({
          bookId,
          uid,
        })
      } else {
        goTo({ href, spineIdRef })
      }
    },
    [ href, bookId, goTo ],
  )

  const { onLayout, height } = useLayout()

  reportLineHeight({ index, height })

  const selected = toolType
    ? (uid === selectedToolUid)
    : (!selectedToolUid && spineIdRef === currentSpineIdRef)

  const indentStyle = { paddingLeft: 20 + indentLevel * 20 }

  if(toolType) {
    return (
      <View
        onLayout={onLayout}
        style={[
          styles.listItemWithTool,
          indentStyle,
          selected ? styles.selected : null,
        ]}
      >
        <ToolChip
          uid={uid}
          label={label}
          toolType={toolType}
          isDraft={isDraft}
          onPress={onPress}
          onToolMove={onToolMove}
          onToolRelease={onToolRelease}
        />
      </View>
    )
  }

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={!toolType ? onPress : null}
    >
      <View
        style={[
          styles.listItem,
          indentStyle,
          selected ? styles.selected : null,
        ]}
      >
        <Text style={styles.label}>{label}</Text>
        {!!numToolsWithin && <Text style={isDraft ? styles.numWithinDraft : styles.numWithin}>{numToolsWithin}</Text>}
      </View>
    </TouchableOpacity>
  )
}

const mapStateToProps = ({ books, userDataByBookId }) => ({
  books,
  userDataByBookId,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setSelectedToolUid,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookContentsLine)
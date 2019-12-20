import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

import ToolChip from './ToolChip'

import { useLayout } from 'react-native-hooks'

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
  },
})

const BookContentsLine = ({
  indentLevel,
  uid,
  label,
  toolType,
  numToolsWithin,
  goToHref,
  href,
  setToolUidInEdit,
  toolUidInEdit,
  reportLineHeight,
  index,
  onToolMove,
  onToolRelease,
}) => {

  const onPress = useCallback(
    () => {
      if(toolType) {
        setToolUidInEdit(uid)
      } else {
        goToHref({ href })
      }
    },
    [ href ],
  )

  const { onLayout, height } = useLayout()

  reportLineHeight({ index, height })

  const selected = toolType
    ? (uid === toolUidInEdit)
    : false

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
        {!!numToolsWithin && <Text style={styles.numWithin}>{numToolsWithin}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default BookContentsLine
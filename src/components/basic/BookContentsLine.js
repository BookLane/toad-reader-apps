import React, { useCallback } from "react"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

import ToolChip from './ToolChip'

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  listItemWithTool: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    flexDirection: 'row',
  },
  selected: {
    backgroundColor: 'rgb(199, 211, 234)',
  },
})

const BookContentsLine = ({
  indentLevel,
  uid,
  label,
  toolType,
  goToHref,
  href,
  setToolUidInEdit,
  toolUidInEdit,
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

  const selected = toolType
    ? (uid === toolUidInEdit)
    : false

  const indentStyle = { paddingLeft: 20 + indentLevel * 20 }

  if(toolType) {
    return (
      <View
        style={[
          styles.listItemWithTool,
          indentStyle,
          selected ? styles.selected : null,
        ]}
      >
        <ToolChip
          label={label}
          toolType={toolType}
          onPress={onPress}
        />
      </View>
    )
  }

  return (
    <TouchableOpacity
      onPress={!toolType ? onPress : null}
    >
      <View
        style={[
          styles.listItem,
          indentStyle,
          selected ? styles.selected : null,
        ]}
      >
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BookContentsLine
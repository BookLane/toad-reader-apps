import React, { useCallback } from "react"
import { StyleSheet, Text } from "react-native"
import { ListItem } from 'react-native-ui-kitten'

import ToolChip from './ToolChip'

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'transparent',
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

  return (
    <ListItem
      style={[
        styles.listItem,
        { paddingLeft: indentLevel * 20 },
        toolType ? { paddingTop: 3, paddingBottom: 3 } : null,
      ]}
      onPress={!toolType ? onPress : null}
    >
      {!!toolType
        ? (
          <ToolChip
            label={label}
            toolType={toolType}
            onPress={onPress}
          />
        )
        : (
          <Text>{label}</Text>
        )
      }
    </ListItem>
  )
}

export default BookContentsLine
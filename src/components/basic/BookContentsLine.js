import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { Text, ListItem } from "native-base"

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'transparent',
  },
})

const BookContentsLine = ({
  indentLevel,
  label,
  goToHref,
  href,
}) => {

  const onPress = useCallback(
    () => goToHref({ href }),
    [ href ],
  )
  
  return (
    <ListItem
      style={[
        styles.listItem,
        { paddingLeft: indentLevel * 20 },
      ]}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </ListItem>
  )
}

export default BookContentsLine
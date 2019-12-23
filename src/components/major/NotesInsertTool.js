import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { textToReactNative } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
})

const NotesInsertTool = React.memo(({
  content,
  ...other
}) => {
  console.log('other', other)

  return (
    <View style={styles.container}>
      <Text>
        {textToReactNative(content)}
      </Text>
    </View>
  )
})

export default NotesInsertTool
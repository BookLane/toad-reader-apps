import React from "react"
import { StyleSheet, View, Text } from "react-native"

import { textToReactNative } from '../../utils/toolbox'

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
})

const NotesInsertTool = React.memo(({
  content,
}) => {

  return (
    <View style={styles.container}>
      <Text>
        {textToReactNative(content)}
      </Text>
    </View>
  )
})

export default NotesInsertTool
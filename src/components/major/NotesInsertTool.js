import React from "react"
import { StyleSheet, View } from "react-native"

import FlipEditorContent from '../basic/FlipEditorContent'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
  },
})

const NotesInsertTool = React.memo(({
  content,
}) => {

  return (
    <View style={styles.container}>
      <FlipEditorContent
        content={content}
      />
    </View>
  )
})

export default NotesInsertTool
import React from "react"
import { Text } from "react-native"

import FlipEditor from './FlipEditor'

import { textToReactNative } from "../../utils/toolbox"

const FlipEditorContent = React.memo(({
  content,
}) => {

  try {
    // Check if this is JSON. If not, the following
    // line will throw an error and go to the catch block.
    JSON.parse(content)

    return (
      <FlipEditor
        mode="display"
        initialContent={content}
        style={{
          marginVertical: -20,
          marginHorizontal: -30,

        }}
        wrapperStyle={{
          overflow: 'auto',
          padding: '20px 30px',
        }}
      />
    )
  } catch(e) {
    return (
      <Text>
        {textToReactNative(content)}
      </Text>
    )
  }

})

export default FlipEditorContent
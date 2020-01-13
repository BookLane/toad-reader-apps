import React, { useCallback } from "react"
import { TextInput as RNTextInput } from "react-native"

const onStartShouldSetResponder = () => true
const onResponderTerminationRequest = ({ nativeEvent }) => !/^mouse/.test(nativeEvent.type)

const TextInput = React.memo(({
  id,
  info,
  onChangeText,
  onChangeInfo,
  ...otherProps
 }) => {

  const customOnChangeText = useCallback(
    value => {
      onChangeText && onChangeText(value)
      onChangeInfo && onChangeInfo({ id, value, info })
    },
    [ id, info, onChangeText, onChangeInfo ],
  )

  return (
    <RNTextInput
      onStartShouldSetResponder={onStartShouldSetResponder}
      onResponderTerminationRequest={onResponderTerminationRequest}
      {...otherProps}
      onChangeText={customOnChangeText}
    />
  )
})

export default TextInput
import React, { useCallback } from "react"
import { StyleSheet } from "react-native"
import { Input as UIKittenInput } from "react-native-ui-kitten"

const styles = StyleSheet.create({
  input: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  inputText: {
    outlineWidth: 0,
    color: 'rgb(34, 43, 69)',
  },
  inputLabel: {
    fontSize: 15,
    left: -4,
    position: 'relative',
    marginBottom: 8,
  },
})

const Input = React.memo(({
  id,
  info,
  onChangeText,
  onChangeInfo,
  style,
  textStyle,
  labelStyle,
  ...otherProps
 }) => {

  const customOnChangeText = useCallback(
    value => {
      onChangeText && onChangeText(value)
      onChangeInfo && onChangeInfo({ id, value, info })
    },
    [ id, info ],
  )

  return (
    <UIKittenInput
      {...otherProps}
      style={[
        styles.input,
        style,
      ]}
      textStyle={[
        styles.inputText,
        textStyle,
      ]}
      labelStyle={[
        styles.inputLabel,
        labelStyle,
      ]}
      onChangeText={customOnChangeText}
    />
  )
})

export default Input
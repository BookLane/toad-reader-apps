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
  onChangeText,
  onChangeInfo,
  style,
  textStyle,
  labelStyle,
  ...otherProps
 }) => {

  const customOnChangeText = useCallback(
    text => {
      onChangeText && onChangeText(text)
      onChangeInfo && onChangeInfo({ id, text })
    },
    [ id ],
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
import React from "react"
import { StyleSheet, View } from "react-native"

import Input from "./Input"

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
  },
})

const DialogInput = React.memo(({
  value,
  onChangeText,
  label,
  placeholder,
}) => {

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        label={label}
      />
    </View>
  )
})

export default DialogInput
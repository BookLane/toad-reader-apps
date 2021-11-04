import React from "react"
import { StyleSheet, View, Text, Platform } from "react-native"
import { i18n } from "inline-i18n"

const styles = StyleSheet.create({
  noneBox: {
    marginVertical: 70,
    alignSelf: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, .05)',
    borderColor: 'rgba(0, 0, 0, .1)',
    borderWidth: 1,
    maxWidth: Platform.OS === 'web' ? 'calc(100vw - 40px)' : '95%',
  },
  none: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  sample: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
    fontWeight: '200',
  },
})

const NoStudentsBox = React.memo(({
  message,
}) => {

  return (
    <View style={styles.noneBox}>
      <Text style={styles.none}>
        {message || i18n("This classroom does not yet have any students.", "", "enhanced")}
      </Text>
      <Text style={styles.sample}>
        {i18n("Displaying sample data below.", "", "enhanced")}
      </Text>
    </View>
  )
})

export default NoStudentsBox
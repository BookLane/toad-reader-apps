import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    padding: 10,
    fontSize: 22,
    lineHeight: 26,
    color: '#bbbbbb',
    marginLeft: 70,
  },
})

const CapturingThumbnailsInfoIcon = React.memo(() => {

  const showInfo = useCallback(
    () => {
      // TODO
      // Toast.show({
      //   text: i18n("We will create thumbnail images in the background when you are reading."),
      //   buttonText: i18n("Okay"),
      //   duration: 15000,
      // })
    },
    [],
  )

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={showInfo}
      >
        <Ionicons
          name="md-information-circle-outline"
          style={styles.info}
        />
      </TouchableOpacity>
    </View>
  )
})

export default CapturingThumbnailsInfoIcon
import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity, View, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { i18n } from "inline-i18n"

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

const CapturingThumbnailsInfoIcon = React.memo(({
  inEditMode,
}) => {

  const showInfo = useCallback(
    () => Alert.alert(
      i18n("Note"),
      (
        inEditMode
          ? i18n("Thumbnails are not created when a classroom is in edit mode.")
          : i18n("We will create thumbnail images in the background when you are reading.")
      ),
    ),
    [ inEditMode ],
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
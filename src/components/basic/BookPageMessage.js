import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native"
// import { i18n } from "inline-i18n"

import { openURL } from "../../utils/toolbox"
import useRouterState from "../../hooks/useRouterState"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    color: "#AAAAAA",
  },
})

const BookPageMessage = ({
  text,
  moreInfoText,
  externalHref,
}) => {

  const { historyPush } = useRouterState()

  const showMoreInfo = useCallback(
    () =>  {
      if(moreInfoText) {
        // Issue? This probably needs to use alert() if on web
        Alert.alert(text, moreInfoText)
      } else if(externalHref) {
        openURL({ url: externalHref, historyPush })
      }
    },
    [ moreInfoText, externalHref ],
  )

  return (
    <View style={styles.container}>
      {(moreInfoText || externalHref)
        ?
          <TouchableOpacity
            onPress={showMoreInfo}
          >
            <Text style={styles.text}>{text}</Text>
          </TouchableOpacity>
        :
          <Text style={styles.text}>{text}</Text>
      }
    </View>
  )
}

export default BookPageMessage

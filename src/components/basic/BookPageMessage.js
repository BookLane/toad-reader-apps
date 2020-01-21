import React, { useCallback } from "react"
import { StyleSheet, TouchableOpacity, Linking, View, Text, Alert } from "react-native"
import { withRouter } from "react-router"
import { i18n } from "inline-i18n"

import { isIPhoneX } from "../../utils/toolbox"

import useRouterState from "../../hooks/useRouterState"

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: isIPhoneX ? -25 : 0,
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
  history,
}) => {

  const { historyPush } = useRouterState({ history })

  const showMoreInfo = useCallback(
    () =>  {
      if(moreInfoText) {
        Alert.alert(text, moreInfoText)

      } else if(externalHref) {
        Linking.openURL(externalHref).catch(err => {
          console.log('ERROR: Request to open URL failed.', err)
          historyPush("/error", {
            message: i18n("Your device is not allowing us to open this link."),
          })
        })
      }
    },
    [ moreInfoText, externalHref, history ],
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

export default withRouter(BookPageMessage)

import React, { useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import { withRouter } from "react-router"
import AppHeader from "../basic/AppHeader"
import HeaderIcon from "../basic/HeaderIcon"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { isPhoneSize } from '../../utils/toolbox.js'

const leftIconsWidth = 50
const rightIconsWidth = 135

const styles = StyleSheet.create({
  body: {
    ...(
      Platform.OS === 'ios' && isPhoneSize() ?
        {
          alignItems: 'flex-start',
          left: (leftIconsWidth - rightIconsWidth) / 2,
        }
        : {}
    ),
    ...(
      Platform.OS === 'android' && isPhoneSize() ?
        {
          marginLeft: -5,
          marginRight: -20,
        }
        : {}
    ),
  },
})

const BookHeader = React.memo(({
  title,
  subtitle,
  mode,
  showDisplaySettings,
  toggleBookView,
  toggleShowOptions,
  history,
}) => {

  const onBackPress = useCallback(
    () => history.goBack(),
    [ history ],
  )

  const rightControls = [
    <HeaderIcon
      name="format-size"
      IconPack={MaterialCommunityIcons}
      onPress={showDisplaySettings}
    />,
    <HeaderIcon
      name="md-more"
      onPress={toggleShowOptions}
    />,
  ]

  if(Platform.OS !== 'web') {
    rightControls.splice(1, 0, (
      <HeaderIcon
        name={[ 'pages', 'zooming' ].includes(mode) ? "md-list" : "md-apps"}
        onPress={toggleBookView}
      />
    ))
  }

  return (
    <AppHeader
      hide={mode === 'page'}
      title={title}
      subtitle={subtitle}
      leftControl={
        <HeaderIcon
          name="md-arrow-back"
          onPress={onBackPress}
        />
      }
      rightControls={rightControls}
    />
  )
})

export default withRouter(BookHeader)

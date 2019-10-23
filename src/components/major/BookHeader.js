import React, { useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import { withRouter } from "react-router"
import { Link } from "../routers/react-router"
import { Ionicons } from "@expo/vector-icons"
import { TopNavigationAction } from "react-native-ui-kitten"
import AppHeader from "../basic/AppHeader"

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
  // width,
  // history,
}) => {

  // const onBackPress = useCallback(
  //   () => history.go(-2),
  //   [ history ],
  // )

  // width -= (leftIconsWidth + rightIconsWidth)

  const homeIcon = useCallback(
    () => (
      <Link to="/">
        <Ionicons name="ios-home" />
      </Link>
    ),
    [],
  )

  const settingsIcon = useCallback(
    () => <Ionicons name="md-settings" />,
    [],
  )

  const showOptionsIcon = useCallback(
    () => <Ionicons name="md-more" />,
    [],
  )

  const bookViewIcon = useCallback(
    () => <Ionicons name={[ 'pages', 'zooming' ].includes(mode) ? "md-list" : "md-apps"} />,
    [ mode ],
  )

  const rightControls = [
    <TopNavigationAction
      icon={settingsIcon}
      onPress={showDisplaySettings}
    />,
    <TopNavigationAction
      icon={showOptionsIcon}
      onPress={toggleShowOptions}
    />,
  ]

  if(Platform.OS !== 'web') {
    rightControls.splice(1, 0, (
      <TopNavigationAction
        icon={bookViewIcon}
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
        <TopNavigationAction
          icon={homeIcon}
        />
      }
      rightControls={rightControls}

    />
  )
})

export default withRouter(BookHeader)

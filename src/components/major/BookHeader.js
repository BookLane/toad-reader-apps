import React, { useCallback } from "react"
import { StyleSheet, Platform } from "react-native"
import { withRouter } from "react-router"
import { Ionicons } from "@expo/vector-icons"
import { Button } from "react-native-ui-kitten"
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
  width,
  history,
}) => {

  const onBackPress = useCallback(
    () => history.go(-2),
    [ history ],
  )

  width -= (leftIconsWidth + rightIconsWidth)
            
  return (
    <AppHeader
      hide={mode === 'page'}
    >
      {/* <Left>
        <Button
          transparent
          onPress={onBackPress}
        >
          <Ionicons name="home" />
        </Button>
      </Left>
      <Body style={[
        styles.body,
        (
          isPhoneSize()
            ? {
              width,
              minWidth: width,
              maxWidth: width,
            }
            : {}
        ),
      ]}>
        <Title>{title}</Title>
        {subtitle
          ? <Subtitle>{subtitle}</Subtitle>
          : null
        }
      </Body>
      <Right>
        <Button
          transparent
          onPress={showDisplaySettings}
        >
          <Ionicons name="settings" />
        </Button>
        <Button
          transparent
          onPress={toggleBookView}
        >
          <Ionicons name={[ 'pages', 'zooming' ].includes(mode) ? "list" : "md-apps"} />
        </Button>
        <Button
          transparent
          onPress={toggleShowOptions}
        >
          <Ionicons name="more" />
        </Button>
      </Right> */}
    </AppHeader>
  )
})

export default withRouter(BookHeader)

import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { styled } from '@ui-kitten/components'

import useWideMode from "../../hooks/useWideMode"
import useThemedStyleSets from "../../hooks/useThemedStyleSets"
import { getToolbarHeight } from '../../utils/toolbox'

const titleCenteredControlsGroup = {
  flexBasis: 300,
  flexDirection: 'row',
  flexShrink: 9999999999,
}

const styles = StyleSheet.create({
  container: {
    zIndex: 3,
    padding: 8,
    height: getToolbarHeight(),
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  titleView: {
    flexShrink: 1,
    justifyContent: 'center',
  },
  titleViewCentered: {
    justifyContent: 'center',
    flexShrink: 1,
    maxWidth: '45%',
  },
  title: {
    fontSize: 19,
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 13,
    fontWeight: '400',
  },
  controlsGroupRight: {
    flexDirection: 'row',
  },
  titleCenteredControlsGroupLeft: {
    ...titleCenteredControlsGroup,
  },
  titleCenteredControlsGroupRight: {
    ...titleCenteredControlsGroup,
    justifyContent: 'flex-end',
  },
  flex1: {
    flex: 99999,
  },
})

const AppHeader = ({
  hide,
  title,
  subtitle,
  titleCentered,
  leftControl,
  rightControls=[],
  style,
  labelStyle,

  themedStyle,
}) => {

  const { baseThemedStyle, labelThemedStyle } = useThemedStyleSets(themedStyle)

  const wideMode = useWideMode()

  if(hide) return null

  titleCentered = titleCentered && wideMode

  return (
    <View
      style={[
        styles.container,
        baseThemedStyle,
        style,
      ]}
    >
      {!!leftControl &&
        <View style={titleCentered ? styles.titleCenteredControlsGroupLeft : null}>
          {leftControl}
        </View>
      }
      {!!titleCentered && <View style={styles.flex1} />}
      <View style={titleCentered ? styles.titleViewCentered : styles.titleView}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            labelThemedStyle,
            labelStyle,
          ]}
        >
          {title}
        </Text>
        {!!subtitle &&
          <Text
            numberOfLines={1}
            style={styles.subtitle}
          >
            {subtitle}
          </Text>
        }
      </View>
      <View style={styles.flex1} />
      <View style={titleCentered ? styles.titleCenteredControlsGroupRight : styles.controlsGroupRight}>
        {rightControls.map((rightControl, idx) => (
          <View key={idx}>
            {rightControl}
          </View>
        ))}
      </View>
    </View>
  )
}

AppHeader.styledComponentName = 'AppHeader'

export default styled(AppHeader)
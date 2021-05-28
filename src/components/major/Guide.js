import React, { useRef, useCallback, useEffect } from "react"
import { View, Animated } from "react-native"
import { StyleSheet, Platform } from "react-native"
import { i18n } from "inline-i18n"
import { BlurView } from 'expo-blur'

import { bottomSpace, statusBarHeight } from '../../utils/toolbox'
import useSetTimeout from "../../hooks/useSetTimeout"

import Button from "../basic/Button"
import Icon from '../basic/Icon'

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 15,
    backgroundColor: 'transparent',
    top: statusBarHeight * -1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginBottom: bottomSpace + 30,
    marginHorizontal: 30,
    alignSelf: 'center',
  },
  button: {
  },
})

const Guide = ({
  blockUntilReady,
  ready,
  markComplete,
  children,
}) => {

  const opacity = useRef(new Animated.Value(0)).current

  const CheckIcon = useCallback(({ style }) => <Icon name="check" pack="materialCommunity" style={{ }} />, [])

  const [ setShowTimeout ] = useSetTimeout()

  useEffect(
    () => {
      if(ready) {
        setShowTimeout(
          () => {
            Animated.timing(opacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start()
          },
          300,
        )
      }
    },
    [ !!ready ],
  )

  if(Platform.OS === 'web') return null
  if(!ready && !blockUntilReady) return null

  return (
    <AnimatedBlurView
      intensity={70}
      style={[
        styles.container,
        {
          opacity,
        },
      ]}
    >
      {children}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          status="primary"
          accessoryLeft={CheckIcon}
          onPress={markComplete}
        >
          {i18n("Okay")}
        </Button>
      </View>
    </AnimatedBlurView>
  )
}

export default Guide
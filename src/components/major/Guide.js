import React, { useRef, useCallback, useEffect } from "react"
import { View, Animated, StatusBar } from "react-native"
import { StyleSheet } from "react-native"
import { i18n } from "inline-i18n"
import { BlurView } from 'expo-blur'
import { useSafeAreaInsets } from "react-native-safe-area-context"

import useSetTimeout from "../../hooks/useSetTimeout"

import Button from "../basic/Button"
import Icon from '../basic/Icon'

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView)

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 15,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginHorizontal: 30,
    alignSelf: 'center',
  },
  button: {
  },
  checkIcon: {
    paddingHorizontal: 0,
    color: 'white',
    height: 20,
  },
})

const Guide = ({
  blockUntilReady,
  ready,
  markComplete,
  children,
  componentsAfterOkay=[],
}) => {

  const opacity = useRef(new Animated.Value(0)).current

  const CheckIcon = useCallback(({ style }) => <Icon name="check" pack="materialCommunity" style={styles.checkIcon} />, [])

  const [ setShowTimeout ] = useSetTimeout()

  const safeAreaInsets = useSafeAreaInsets()

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

  if(!ready && !blockUntilReady) return null

  return (
    <AnimatedBlurView
      intensity={10}
      style={[
        styles.container,
        {
          top: (safeAreaInsets.top + StatusBar.currentHeight) * -1,
          opacity,
        },
      ]}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          top: safeAreaInsets.top + StatusBar.currentHeight,
          bottom: safeAreaInsets.bottom,
        }}
      >
        {children}
        <View
          style={[
            styles.buttonContainer,
            {
              marginBottom: safeAreaInsets.bottom + 30,
            }
          ]}
        >
          <Button
            style={styles.button}
            status="primary"
            accessoryLeft={CheckIcon}
            onPress={markComplete}
          >
            {i18n("Okay")}
          </Button>
        </View>
        {componentsAfterOkay}
      </View>
    </AnimatedBlurView>
  )
}

export default Guide
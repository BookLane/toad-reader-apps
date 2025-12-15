import React, { useEffect, useRef } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Animated } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

const {
  LIBRARY_COVERS_HORIZONTAL_MARGIN,
  LIBRARY_COVERS_VERTICAL_MARGIN,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  cover: {
    marginRight: LIBRARY_COVERS_HORIZONTAL_MARGIN,
    marginBottom: LIBRARY_COVERS_VERTICAL_MARGIN,
    backgroundColor: '#707070',
    borderRadius: 4,
    overflow: 'hidden',
  },
  shimmerContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  shimmer: {
    width: '200%',
    height: '100%',
  },
})

const CoverSkeleton = ({ bookWidth, bookHeight }) => {
  const shimmerAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(shimmerAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      })
    )
    animation.start()

    return () => animation.stop()
  }, [])

  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-bookWidth * 2, bookWidth * 2],
  })

  return (
    <View
      style={[
        styles.cover,
        {
          width: bookWidth,
          height: bookHeight,
        },
      ]}
    >
      <View style={styles.shimmerContainer}>
        <Animated.View style={[styles.shimmer, { transform: [{ translateX }] }]}>
          <LinearGradient
            colors={['#9f9f9f', '#cdcdcd', '#9f9f9f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      </View>
    </View>
  )
}

export default CoverSkeleton

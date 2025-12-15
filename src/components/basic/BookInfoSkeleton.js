import React, { useEffect, useRef } from "react"
import Constants from 'expo-constants'
import { StyleSheet, View, Animated, useWindowDimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

const {
  LIBRARY_LIST_MARGIN,
} = Constants.expoConfig.extra

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: LIBRARY_LIST_MARGIN,
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
  },
  cover: {
    width: 60,
    height: 90,
    backgroundColor: '#707070',
    borderRadius: 4,
    marginRight: 15,
    overflow: 'hidden',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    height: 18,
    backgroundColor: '#707070',
    borderRadius: 4,
    marginBottom: 10,
    width: '80%',
    overflow: 'hidden',
  },
  author: {
    height: 14,
    backgroundColor: '#707070',
    borderRadius: 4,
    width: '60%',
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

const ShimmerEffect = () => {
  const shimmerAnim = useRef(new Animated.Value(0)).current
  const { width } = useWindowDimensions()

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
    outputRange: [-width, width],
  })

  return (
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
  )
}

const BookInfoSkeleton = ({ isFirstRow }) => {
  return (
    <View style={[styles.container, isFirstRow && { marginTop: LIBRARY_LIST_MARGIN }]}>
      <View style={styles.cover}>
        <ShimmerEffect />
      </View>
      <View style={styles.info}>
        <View style={styles.title}>
          <ShimmerEffect />
        </View>
        <View style={styles.author}>
          <ShimmerEffect />
        </View>
      </View>
    </View>
  )
}

export default BookInfoSkeleton

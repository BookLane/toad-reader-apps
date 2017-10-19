import React from "react"
import { StackNavigator } from "react-navigation"
import { StyleSheet } from 'react-native'

import HomeNavigator from "./Home.js"
import ReaderNavigator from "./Reader.js"

const BaseNavigator = StackNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: ({navigation}) => ({
        headerStyle: styles.hidden,
      }),
    },
    Reader: { screen: ReaderNavigator },
  },
)

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})


export default BaseNavigator
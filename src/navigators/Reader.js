import React from "react"
import { StackNavigator } from "react-navigation"
import { StyleSheet } from 'react-native'

import Page from "../components/screens/Page.js"
import Chooser from "../components/screens/Chooser.js"
import Book from "../components/screens/Book.js"
import Highlights from "../components/screens/Highlights.js"

const noHeader = {
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.hidden,
  }),
}

const ReaderNavigator = StackNavigator(
  {
    Page: { screen: Page, ...noHeader },
    Chooser: { screen: Chooser, ...noHeader },
    Book: { screen: Book, ...noHeader },
    Highlights: { screen: Highlights, ...noHeader },
  },
)

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})

export default ReaderNavigator
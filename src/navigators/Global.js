import React from "react"
import { StackNavigator } from "react-navigation"
import { StyleSheet } from "react-native"

import HomeNavigator from "./Home.js"
import Page from "../components/screens/Page.js"
import Chooser from "../components/screens/Chooser.js"
import Book from "../components/screens/Book.js"
import Highlights from "../components/screens/Highlights.js"
import Accounts from "../components/screens/Accounts.js"

const noHeader = {
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.hidden,
  }),
}

const GlobalNavigator = StackNavigator(
  {
    Home: { screen: HomeNavigator, ...noHeader },
    Page: { screen: Page, ...noHeader },
    Chooser: { screen: Chooser, ...noHeader },
    Book: { screen: Book, ...noHeader },
    Highlights: { screen: Highlights, ...noHeader },
    Accounts: { screen: Accounts, ...noHeader },
  },
)

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})

export default GlobalNavigator
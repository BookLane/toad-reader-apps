import React from "react"
import { createStackNavigator } from "react-navigation"
import { StyleSheet } from "react-native"

import HomeNavigator from "./Home.js"
import Chooser from "../components/screens/Chooser"
import Book from "../components/screens/Book"
import Highlights from "../components/screens/Highlights"
import Accounts from "../components/screens/Accounts"
import Login from "../components/screens/Login"
import ErrorMessage from "../components/screens/ErrorMessage"

const noHeader = {
  navigationOptions: ({navigation}) => ({
    headerStyle: styles.hidden,
  }),
}

const GlobalNavigator = createStackNavigator(
  {
    Home: { screen: HomeNavigator, ...noHeader },
    Chooser: { screen: Chooser, ...noHeader },
    Book: { screen: Book, ...noHeader },
    Highlights: { screen: Highlights, ...noHeader },
    Accounts: { screen: Accounts, ...noHeader },
    Login: { screen: Login, ...noHeader },
    ErrorMessage: { screen: ErrorMessage, ...noHeader },
  },
)

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
})

export default GlobalNavigator
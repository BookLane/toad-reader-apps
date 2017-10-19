import React from "react"
import { DrawerNavigator } from "react-navigation"

import ReaderNavigator from "./Reader.js"
import Accounts from "../components/screens/Accounts.js"
import Drawer from "../components/major/Drawer.js"

const HomeNavigator = DrawerNavigator(
  {
    Reader: { screen: ReaderNavigator },
    Accounts: { screen: Accounts },
  },
  {
    contentComponent: props => <Drawer {...props} />
  },
)

export default HomeNavigator
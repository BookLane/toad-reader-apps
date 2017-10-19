import React from "react"
import { DrawerNavigator } from "react-navigation"

import Library from "../components/screens/Library.js"
import Drawer from "../components/major/Drawer.js"

const HomeNavigator = DrawerNavigator(
  {
    Library: { screen: Library },
  },
  {
    contentComponent: props => <Drawer {...props} />
  },
)

export default HomeNavigator
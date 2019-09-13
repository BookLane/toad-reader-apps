import React from "react"
import { createDrawerNavigator } from "react-navigation"

import Library from "../components/screens/Library"
import Drawer from "../components/major/Drawer"

const HomeNavigator = createDrawerNavigator(
  {
    Library: { screen: Library },
  },
  {
    contentComponent: props => <Drawer {...props} />
  },
)

export default HomeNavigator
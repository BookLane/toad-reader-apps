import React from "react"
import Expo from "expo"
import { Spinner } from "native-base"

const {
  SPINNER_COLOR,
} = Expo.Constants.manifest.extra

class Spin extends React.Component {

  render() {
    return (
      <Spinner color={SPINNER_COLOR} />
    )
  }
}

export default Spin
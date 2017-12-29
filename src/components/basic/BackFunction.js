import React from "react"
import { BackHandler, View } from "react-native"

class BackFunction extends React.Component {

  backPressEvent = () => {
    const { func } = this.props

    func()
    return true
  }
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressEvent)
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backPressEvent)
  }
  
  render() {
    return null
  }
}

export default BackFunction
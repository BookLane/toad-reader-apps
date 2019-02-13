import React from "react"
import { StyleSheet, Platform } from "react-native"
import { Text } from "native-base"
import i18n from "../../utils/i18n.js"
import { setUpTimeout, clearOutTimeout, unmountTimeouts } from "../../utils/toolbox.js"

const styles = StyleSheet.create({
  dotText: {
    fontSize: 10,
    color: Platform.OS === 'android' ? 'black' : 'white',
  },
})

class ProgressDotLabel extends React.Component {

  state = {
    label: '',
  }

  componentDidMount() {
    const { animatedScrollPosition } = this.props

    if(animatedScrollPosition) {
      animatedScrollPosition.addListener(this.leftChangeListener)
    }

    this.timeoutCount = 0
  }

  componentWillUnmount() {
    const { animatedScrollPosition } = this.props
    
    unmountTimeouts.bind(this)()

    if(animatedScrollPosition) {
      animatedScrollPosition.removeListener(this.leftChangeListener)
    }
  }

  leftChangeListener = ({ value }) => {

    if(++this.timeoutCount % 10 !== 0) {
      // don't allow more than 10 updates to be grouped
      clearOutTimeout(this.updateLabelTimeout, this)
    }

    // group updates that are within 1 frame
    this.updateLabelTimeout = setUpTimeout(() => this.updateLabel({ scroll: value }), 16, this)
  }

  updateLabel = ({ scroll }) => {
    const { maxScroll } = this.props

    const scrollPercentage = maxScroll ? Math.round((scroll / maxScroll) * 100) : 0
    const label = i18n("{{percent}}%", { percent: scrollPercentage })
    
    this.setState({ label })
  }

  render() {
    const { label } = this.state

    return (
      <Text style={styles.dotText}>{label}</Text>
    )
  }
}

export default ProgressDotLabel
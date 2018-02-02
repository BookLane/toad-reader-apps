import React from "react"
import { StyleSheet, Platform } from "react-native"
import { Text } from "native-base"
import i18n from "../../utils/i18n.js"

const styles = StyleSheet.create({
  dotText: {
    fontSize: 10,
    color: Platform.OS === 'android' ? 'black' : 'white',
  },
})

class ProgressDotLabel extends React.Component {

  state = {
    label: i18n("{{percent}}%", { percent: 0 }),
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

    if(animatedScrollPosition) {
      animatedScrollPosition.removeListener(this.leftChangeListener)
    }
  }

  leftChangeListener = ({ value }) => {

    if(++this.timeoutCount % 10 !== 0) {
      // don't allow more than 10 updates to be grouped
      clearTimeout(this.updateLabelTimeout)
    }

    // group updates that are within 1 frame
    this.updateLabelTimeout = setTimeout(() => this.updateLabel({ scroll: value }), 16)
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
import React from "react"
import { Icon } from "native-base"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: -10,
    right: 4,
  },
})

class PagesBookmark extends React.Component {

  render() {
    const { children, header } = this.props

    return (
      <Icon name='bookmark' style={styles.icon} />
    )
  }
}

export default PagesBookmark
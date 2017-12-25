import React from "react"
import { View } from "native-base"
import { StyleSheet } from "react-native"

import PagesBookmark from "./PagesBookmark.js"

const styles = StyleSheet.create({
  image: {
  },
})

class PagesPage extends React.Component {

  render() {
    const { children, header, pageWidth, pageHeight } = this.props

    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: '#000000',
          borderRadius: 2,
          backgroundColor: '#ffffff',
          marginBottom: 10,
          marginRight: 10,
          width: pageWidth,
          height: pageHeight,
        }}
      >
        <PagesBookmark />
      </View>
    )
  }
}

export default PagesPage
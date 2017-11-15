import React from "react"
import { Text } from "native-base"

class BookInfoTitle extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Text>{children}</Text>
    )
  }
}

export default BookInfoTitle
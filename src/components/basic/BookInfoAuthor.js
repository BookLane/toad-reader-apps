import React from "react"
import { Text } from "native-base"

class BookInfoAuthor extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Text>{children}</Text>
    )
  }
}

export default BookInfoAuthor
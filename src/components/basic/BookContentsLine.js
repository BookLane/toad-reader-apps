import React from "react"
import { StyleSheet } from "react-native"
import { Text, ListItem } from "native-base"

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'transparent',
  },
})

class BookContentsLine extends React.Component {

  goToHref = () => {
    const { goToHref, href } = this.props

    goToHref({ href })
  }

  render() {
    const { indentLevel, label } = this.props

    return (
      <ListItem
        style={[
          styles.listItem,
          { paddingLeft: indentLevel * 20 },
        ]}
        onPress={this.goToHref}
      >
        <Text>{label}</Text>
      </ListItem>
    )
  }
}

export default BookContentsLine
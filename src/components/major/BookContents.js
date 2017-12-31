import React from "react"
import { FlatList } from "react-native"
import { Text, ListItem } from "native-base"

const baseListItemStyle = {
  backgroundColor: 'transparent',
}

class BookContents extends React.Component {

  getListItems = (toc, indentLevel=0) => {
    let listItems = []

    ;(toc || []).forEach(tocItem => {
      listItems = [
        ...listItems,
        {
          ...tocItem,
          indentLevel,
        },
        ...this.getListItems(tocItem.subNav, indentLevel+1),
      ]
    })

    return listItems
  }

  renderItem = ({ item }) => {
    const { goToHref } = this.props
    const { href, indentLevel } = item

    return (
      <ListItem
        style={{...baseListItemStyle, paddingLeft: indentLevel * 20 }}
        onPress={() => {
          goToHref({ href })
        }}
      >
        <Text>{item.label}</Text>
      </ListItem>
    )
  }

  render() {
    const { toc } = this.props

    if(!toc) return null

    return (
      <FlatList
        data={this.getListItems(toc)}
        renderItem={this.renderItem}
        keyExtractor={item => `${item.label}-${item.href}`}
      />
    )
  }
}

export default BookContents
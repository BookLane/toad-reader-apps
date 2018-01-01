import React from "react"
import { FlatList } from "react-native"

import BookContentsLine from "../basic/BookContentsLine"

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
          key: `${tocItem.label}-${tocItem.href}`,
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
      <BookContentsLine
        indentLevel={indentLevel}
        goToHref={goToHref}
        href={href}
        label={item.label}
      />
    )
  }

  render() {
    const { toc } = this.props

    if(!toc) return null

    return (
      <FlatList
        data={this.getListItems(toc)}
        renderItem={this.renderItem}
      />
    )
  }
}

export default BookContents
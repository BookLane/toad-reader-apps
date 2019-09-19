import React, { useMemo, useCallback } from "react"
import { FlatList } from "react-native"

import BookContentsLine from "../basic/BookContentsLine"

const baseListItemStyle = {
  backgroundColor: 'transparent',
}

const BookContents = React.memo(({
  toc,
  goToHref,
}) => {

  if(!toc) return null

  const getListItems = (toc, indentLevel=0) => {
    let listItems = []

    ;(toc || []).forEach(tocItem => {
      listItems = [
        ...listItems,
        {
          ...tocItem,
          indentLevel,
          key: `${tocItem.label}-${tocItem.href}`,
        },
        ...getListItems(tocItem.subNav, indentLevel+1),
      ]
    })

    return listItems
  }

  const data = useMemo(
    getListItems(toc),
    [ toc ],
  )

  const renderItem = useCallback(
    ({ item }) => {
      const { href, indentLevel, label } = item

      return (
        <BookContentsLine
          indentLevel={indentLevel}
          goToHref={goToHref}
          href={href}
          label={label}
        />
      )
    },
    [ goToHref ],
  )

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
    />
  )
})

export default BookContents
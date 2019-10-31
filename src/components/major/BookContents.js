import React, { useMemo, useCallback } from "react"
import { StyleSheet } from "react-native"
import { List } from "react-native-ui-kitten"

import BookContentsLine from "../basic/BookContentsLine"

const styles = StyleSheet.create({
  list: {
    padding: 20,
    paddingTop: 12,
  },
})

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
    () => getListItems(toc),
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
    <List
      style={styles.list}
      data={data}
      renderItem={renderItem}
    />
  )
})

export default BookContents
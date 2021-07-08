import React, { useCallback } from "react"
import { Select as UIKittenSelect } from "@ui-kitten/components"

const Select = React.memo(({
  id,
  info,
  onSelect,
  ...otherProps
 }) => {

  const customOnSelect = useCallback(
    selectionInfo => {
      onSelect && onSelect({ id, info, ...selectionInfo })
    },
    [ id, info, onSelect ],
  )

  return (
    <UIKittenSelect
      {...otherProps}
      onSelect={customOnSelect}
    />
  )
})

export default Select

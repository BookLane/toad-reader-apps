import React, { useCallback } from "react"
import { Radio as UIKittenRadio } from "@ui-kitten/components"

const Radio = React.memo(({
  id,
  info,
  onChange,
  ...otherProps
 }) => {

  const customOnChange = useCallback(
    value => {
      onChange && onChange({ id, value, info })
    },
    [ id, info, onChange ],
  )

  return (
    <UIKittenRadio
      {...otherProps}
      onChange={customOnChange}
    />
  )
})

export default Radio

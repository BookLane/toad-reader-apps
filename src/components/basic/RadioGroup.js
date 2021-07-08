import React, { useCallback } from "react"
import { RadioGroup as UIKittenRadioGroup } from "@ui-kitten/components"

const RadioGroup = React.memo(({
  id,
  info,
  onChange,
  ...otherProps
 }) => {

  const customOnChange = useCallback(
    index => {
      onChange && onChange({ id, index, info })
    },
    [ id, info, onChange ],
  )

  return (
    <UIKittenRadioGroup
      {...otherProps}
      onChange={customOnChange}
    />
  )
})

export default RadioGroup

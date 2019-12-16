import React, { useCallback } from "react"
import { Radio as UIKittenRadio } from "react-native-ui-kitten"

const Radio = React.memo(({
  id,
  info,
  checked,
  onChange,
  ...otherProps
 }) => {

  const customOnChange = useCallback(
    value => {
      onChange && onChange({ id, value, info })
    },
    [ id, info ],
  )

  return (
    <UIKittenRadio
      {...otherProps}
      checked={checked}
      onChange={customOnChange}
    />
  )
})

export default Radio

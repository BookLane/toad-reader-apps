import React, { useCallback } from "react"
import { Datepicker as UIKittenDatepicker, NativeDateService } from '@ui-kitten/components'

const dateService = new NativeDateService('en', { format: 'MMM D, YYYY' })

const Datepicker = React.memo(({
  id,
  info,
  onSelect,
  ...otherProps
 }) => {

  const customOnSelect = useCallback(
    date => {
      onSelect && onSelect(date, { id, info })
    },
    [ id, info, onSelect ],
  )

  return (
    <UIKittenDatepicker
      dateService={dateService}
      {...otherProps}
      onSelect={customOnSelect}
    />
  )
})

export default Datepicker

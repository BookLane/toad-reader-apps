import React from "react"
import { ModalService } from '@ui-kitten/components'

import ToastContainer from '../components/basic/ToastContainer'

let timeout, hide

const Toast = {
  show: ({
    duration=0,
    onClose,
    ...otherProps
  }) => {

    hide && hide()
    clearTimeout(timeout)

    hide = () => {
      ModalService.hide(id)
      onClose && onClose()
      hide = undefined
    }

    const id = ModalService.show(<ToastContainer {...otherProps} />, { allowBackdrop: true, onBackdropPress: hide })

    timeout = setTimeout(hide, duration)

  },
}

export default Toast
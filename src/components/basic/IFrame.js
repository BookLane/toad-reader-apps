import { createElement } from 'react-native'

const Iframe = ({
  forwardRef,
  ...otherProps
}) => (
   createElement('iframe', { ...otherProps, ref: forwardRef })
)

export default Iframe
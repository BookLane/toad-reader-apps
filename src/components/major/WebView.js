import React from "react"
import { WebView as RDWebView } from 'react-native-webview'

const WebView = ({
  forwardRef,  // I do this so I can be consistent with WebView.web.js
  ...props
}) => (
  <RDWebView
    ref={forwardRef}
    {...props}
  />
)

export default WebView

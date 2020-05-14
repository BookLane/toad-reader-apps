import React from "react"
import { WebView as RDWebView } from 'react-native-webview'

const WebView = ({
  forwardRef,  // I do this so I can be consistent with WebView.web.js
  ...props
}) => (
  <RDWebView
    ref={forwardRef}
    allowsLinkPreview={true}  // Due to a bug, iPhone SE, X, 11, etc don't allow text selection without this.
    {...props}
  />
)

export default WebView

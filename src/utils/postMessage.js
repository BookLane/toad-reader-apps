// This function is needed for iOS
// https://github.com/facebook/react-native/issues/10865
const patchPostMessageFunction = function() {
  var originalPostMessage = window.postMessage;

  var patchedPostMessage = function(message, targetOrigin, transfer) { 
    originalPostMessage(message, targetOrigin, transfer)
  };

  patchedPostMessage.toString = function() { 
    return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')
  };

  window.postMessage = patchedPostMessage
  window.postMessagePatched = true
}

export const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();'


// This function is needed because when the app in android
// sends a postMessage to the WebView, it runs decodeURIComponent
// on it for some reason. To fix this I swap out % for {"} (an
// impossible sequence in JSON) before sending it and then
// swap {"} out for % in the cloud-reader-lite.
const percentageEscape = (str) => str.replace(/%/g, '{"}')

export const postMessage = (webView, identifier, payload) => {

  let attempts = 0

  const goPostMessage = () => {
    if(attempts++ > 1875) {  // i.e. 30 seconds
      console.log(`postMessage (${identifier}) to webview failed due to too many attempts`)
      
    } else if(!webView || webView.unmounted) {
      console.log(`postMessage (${identifier}) to webview failed due to webview no longer existing`)

    } else if(!webView.loaded) {
      setTimeout(goPostMessage, 16)

    } else {
      console.log(`postMessage (${identifier}) to webview`)
      webView.postMessage(percentageEscape(JSON.stringify({
        identifier,
        payload,
      })))
    }
  }

  goPostMessage()

}
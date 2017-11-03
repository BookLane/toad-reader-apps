// This function is needed for iOS
// https://github.com/facebook/react-native/issues/10865
const patchPostMessageFunction = function() {
  var originalPostMessage = window.postMessage;

  var patchedPostMessage = function(message, targetOrigin, transfer) { 
    originalPostMessage(message, targetOrigin, transfer);
  };

  patchedPostMessage.toString = function() { 
    return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
  };

  window.postMessage = patchedPostMessage;
}
export const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();'

// This function is needed because when the app in android
// sends a postMessage to the WebView, it runs decodeURIComponent
// on it for some reason. To fix this I swap out % for {"} (an
// impossible sequence in JSON) before sending it and then
// swap {"} out for % in the cloud-reader-lite.
export const percentageEscape = (str) => str.replace(/%/g, '{"}')
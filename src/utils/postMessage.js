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
      webView.injectJavaScript(`
        window.ReactNativeToWebView({
          identifier: ${JSON.stringify(identifier)},
          payload: ${JSON.stringify(payload)},
        });
      `)
    }
  }

  goPostMessage()

}
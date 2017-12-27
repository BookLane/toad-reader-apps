import React from "react"

import PageWebView from "../major/PageWebView"

import { postMessage } from "../../utils/postMessage.js"

class BookPage extends React.Component {

  onMessageEvent = data => {
    const { navigation, showBook } = this.props
    const { bookId } = navigation.state.params || {}

    switch(data.identifier) {
      case 'showPageListView':
        showBook({
          goToHref: params => postMessage(this.webView, 'goToHref', params),
          goToPage: params => postMessage(this.webView, 'goToPage', params),
        })
        return true
    }
  }

  render() {
    const { navigation } = this.props
    const { bookId } = navigation.state.params || {}

    return (
      <PageWebView
        bookId={bookId}
        setWebViewEl={webViewEl => this.webView = webViewEl}
        onMessage={this.onMessageEvent}
      />
    )
  }
}

export default BookPage
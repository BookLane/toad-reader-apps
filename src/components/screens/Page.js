import React from "react"
import { Container, Content } from "native-base"
import { StatusBar } from "react-native"

import PageWebView from "../major/PageWebView"

import { postMessage } from "../../utils/postMessage.js"

class Page extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  onMessageEvent = data => {
    const { navigation } = this.props
    const { bookId } = navigation.state.params || {}

    switch(data.identifier) {
      case 'showPageListView':
        navigation.navigate("Book", {
          pageKey: navigation.state.key,
          bookId,
          goToHref: href => postMessage(this.webView, 'goToHref', { href }),
        })
        return true
    }
  }

  render() {
    const { navigation } = this.props
    const { bookId } = navigation.state.params || {}

    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <PageWebView
            bookId={bookId}
            setWebViewEl={webViewEl => this.webView = webViewEl}
            onMessage={this.onMessageEvent}
          />
          {/* 
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Chooser")}>
            <Text>Page Chooser (comes up if current location unknown)</Text>
          </Button> */}
        </Content>
      </Container>
    )
  }
}

export default Page
import React from "react"
import { Container, Content } from "native-base"
import { WebView, StatusBar } from "react-native"
import { FileSystem } from "expo"

import { patchPostMessageJsCode, percentageEscape } from "../../utils/fixes.js"

class Page extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  componentWillUnmount() {
    StatusBar.setHidden(false)
  }

  render() {
    const { navigation } = this.props

    let { bookId } = navigation.state.params || {}

    return (
      <Container>
        <Content contentContainerStyle={{flex: 1}}>
          <WebView
            injectedJavaScript={patchPostMessageJsCode}
            ref={view => this.webView = view}
            source={{
              uri: `${FileSystem.documentDirectory}reader/index.html`
                + `?epub=${encodeURIComponent(`${FileSystem.documentDirectory}books/${bookId}`)}`
            }}
            mixedContentMode="always"
            onError={e => console.log('webview error', e)}
            onMessage={event => {
              const data = JSON.parse(event.nativeEvent.data)
              switch(data.identifier) {
                case 'consoleLog':
                  console.log('consoleLog', data.payload.message)
                  break;
                case 'showPageListView':
                  this.props.navigation.navigate("Book", {
                    pageKey: this.props.navigation.state.key,
                    bookId,
                  })
                  break;
                case 'getFileAsText':
                  const uri = data.payload.uri
                  FileSystem.readAsStringAsync(`${uri}`)
                    .then(fileText => {
                      console.log('postMessage to webview: ' + uri)
                      this.webView.postMessage(percentageEscape(JSON.stringify({
                        identifier: 'fileAsText',
                        payload: {
                          uri,
                          fileText,
                        },
                      })))
                    })
                    .catch(fileText => {
                      console.log('postMessage (error) to webview: ' + uri)
                      this.webView.postMessage(percentageEscape(JSON.stringify({
                        identifier: 'fileAsText',
                        payload: {
                          uri: uri,
                          error: true,
                        },
                      })))
                    })
                  break;
                default:
                  console.log(data.identifier, JSON.stringify(data.payload))
                  break;
              }
            }}
          />
          {/* 
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chooser")}>
            <Text>Page Chooser (comes up if current location unknown)</Text>
          </Button> */}
        </Content>
      </Container>
    )
  }
}

export default Page
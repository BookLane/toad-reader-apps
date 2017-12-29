import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "react-native"
import { StyleSheet } from "react-native"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"

import { postMessage } from "../../utils/postMessage.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class BookPage extends React.Component {

  componentDidMount() {
    this.setDisplaySettings()
  }

  componentWillReceiveProps(nextProps) {
    const { displaySettings } = this.props

    if(nextProps.displaySettings != displaySettings) {
      this.setDisplaySettings(nextProps)
    }
  }

  setDisplaySettings = nextProps => {
    const { displaySettings } = nextProps || this.props

    postMessage(this.webView, 'setDisplaySettings', {
      ...displaySettings,
      columns: 'single',
    })
  }

  onMessageEvent = data => {
    const { bookId, requestShowBook } = this.props

    switch(data.identifier) {
      case 'showPageListView':
        requestShowBook({
          goToHref: params => postMessage(this.webView, 'goToHref', params),
          goToPage: params => postMessage(this.webView, 'goToPage', params),
        })
        return true
    }
  }

  render() {
    const { bookId, showSettings, requestHideSettings } = this.props

    return (
      <View style={styles.container}>
        <PageWebView
          bookId={bookId}
          setWebViewEl={webViewEl => this.webView = webViewEl}
          onMessage={this.onMessageEvent}
        />
        {showSettings && 
          <DisplaySettings
            requestHide={requestHideSettings}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  displaySettings: state.displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPage)
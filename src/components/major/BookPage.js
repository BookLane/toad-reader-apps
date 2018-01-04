import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "react-native"
import { StyleSheet } from "react-native"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"

import { incrementSpineImagesIndex } from "../../redux/actions.js"

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

  goToHref = params => postMessage(this.webView, 'goToHref', params)

  goToPage = params => postMessage(this.webView, 'goToPage', params)

  onMessageEvent = async data => {
    const { requestShowPages, indicateLoaded } = this.props

    switch(data.identifier) {
      case 'pageChanged':
        indicateLoaded()
        // this.currentPage = 
        // console.log('data.payload', data.payload)
// - scroll to spot
// - update data in redux
// - trigger server patch        

// how do I get page number from cfi? from webview? kept in data?
      // await this.doTakeSnapshot()
        return false  // i.e. still process pageChanged in the general PageWebView component

      case 'showPageListView':
        requestShowPages({
          goToHref: this.goToHref,
          goToPage: this.goToPage,
        })
        return true
    }
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

//   setView = ref => this.view = ref
  
//   doTakeSnapshot = async () => {
//     const { bookId, incrementSpineImagesIndex } = this.props

// console.log('before')
//     await takeSnapshot({
//       view: this.view,
//       bookId: bookId,
//       fileName: `test.jpg`,
//     })

//     incrementSpineImagesIndex()

//     return true

//   }

  render() {
    const { bookId, showSettings, requestHideSettings } = this.props

    return (
      <View style={styles.container}>
        <PageWebView
          bookId={bookId}
          setWebViewEl={this.setWebViewEl}
          onMessage={this.onMessageEvent}
          // setView={this.setView}
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
  incrementSpineImagesIndex,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPage)
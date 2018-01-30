import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View } from "react-native"
import { StyleSheet } from "react-native"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getDisplaySettingsObj, getSpineAndPage } from "../../utils/toolbox.js"

import { setLatestLocation } from "../../redux/actions.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class BookPage extends React.Component {

  state = {
    spineIdRef: this.props.spineIdRef,
    pageIndexInSpine: this.props.pageIndexInSpine,
  }

  componentWillReceiveProps(nextProps) {
    const { displaySettings } = this.props
    const { spineIdRef, pageIndexInSpine } = this.state

    if(nextProps.displaySettings !== displaySettings) {
      this.setDisplaySettings(nextProps)
    }

    if(nextProps.spineIdRef !== spineIdRef || nextProps.pageIndexInSpine !== pageIndexInSpine) {
      this.goToLatestLocation(nextProps)
      this.setState({
        spineIdRef: nextProps.spineIdRef,
        pageIndexInSpine: nextProps.pageIndexInSpine,
      })
    }
  }

  setDisplaySettings = nextProps => {
    postMessage(this.webView, 'setDisplaySettings', getDisplaySettingsObj(nextProps || this.props))
  }

  goToLatestLocation = nextProps => {
    const { spineIdRef, pageIndexInSpine } = nextProps || this.props

    if(spineIdRef == null || pageIndexInSpine == null) return

    postMessage(this.webView, 'goToPage', {
      spineIdRef,
      pageIndexInSpine,
    })
  }

  goToHref = params => postMessage(this.webView, 'goToHref', params)

  onMessageEvent = async (webView, data) => {
    const { setLatestLocation, bookId, indicateLoaded, requestShowPages, books, displaySettings } = this.props

    if(webView !== this.webView) return // just in case
    
    switch(data.identifier) {
      case 'pageChanged':

        const { newSpineIdRef, newCfi } = data.payload

        const { spineIdRef, pageIndexInSpine } = getSpineAndPage({
          spineIdRef: newSpineIdRef,
          cfi: newCfi,
          book: books[bookId],
          displaySettings,
        })

        this.setState(
          {
            spineIdRef,
            pageIndexInSpine,
          },
          () => {
            setLatestLocation({
              bookId,
              latestLocation: {
                spineIdRef,
                cfi: newCfi,
              },
            })
          }
        )

        indicateLoaded()

        // await this.doTakeSnapshot()

        return false  // i.e. still process pageChanged in the general PageWebView component

      case 'showPageListView':
        requestShowPages({
          goToHref: this.goToHref,
        })
        return true
    }
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

//   setView = ref => this.view = ref
  
//   doTakeSnapshot = async () => {
//     const { bookId } = this.props

// console.log('before')
//     await takeSnapshot({
//       view: this.view,
//       bookId: bookId,
//       fileName: `test.jpg`,
//     })

//     return true

//   }

  render() {
    const { bookId, showSettings, requestHideSettings, latest_location } = this.props

    return (
      <View style={styles.container}>
        <PageWebView
          key={bookId}
          bookId={bookId}
          setWebViewEl={this.setWebViewEl}
          onMessage={this.onMessageEvent}
          initialLocation={latest_location}
          initialDisplaySettings={getDisplaySettingsObj(this.props)}
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
  books: state.books,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPage)
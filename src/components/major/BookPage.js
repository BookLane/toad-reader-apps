import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { View, Linking } from "react-native"
import { StyleSheet } from "react-native"

import PageWebView from "./PageWebView"
import DisplaySettings from "./DisplaySettings"
import Highlighter from "./Highlighter";

import { postMessage } from "../../utils/postMessage.js"
import takeSnapshot from "../../utils/takeSnapshot.js"
import { getDisplaySettingsObj, getSpineAndPage } from "../../utils/toolbox.js"

import { setLatestLocation, updateAccount, updateBookAccount, setUserData } from "../../redux/actions.js"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

class BookPage extends React.Component {

  state = {
    spineIdRef: this.props.spineIdRef,
    pageIndexInSpine: this.props.pageIndexInSpine,
    selectionInfo: null,
    editingNote: false,
  }

  componentWillReceiveProps(nextProps) {
    const { displaySettings, hrefToGoTo } = this.props
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
    } else if(nextProps.hrefToGoTo && nextProps.hrefToGoTo !== hrefToGoTo) {
      postMessage(this.webView, 'goToHref', { href: nextProps.hrefToGoTo })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { showSettings } = this.props
    const { selectionInfo } = this.state

    return nextProps.showSettings !== showSettings || nextState.selectionInfo !== selectionInfo
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

  isEditingNote = () => this.state.editingNote

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
              patchInfo: this.props,
            })
          }
        )

        indicateLoaded()

        // await this.doTakeSnapshot()

        return false  // i.e. still process pageChanged in the general PageWebView component

      case 'openURL':
        Linking.openURL(data.payload.url).catch(err => {
          // TODO: report the error
          console.error('Error in opening URL', err)
        })
        return true

      case 'showPageListView':
        requestShowPages()
        return true

      case 'textUnselected':
        // I tried to find a way to catch the initial tap on the text
        // area so as to prevent the textUnselected before focus issue
        // without using a timeout, but was unable to. This is less
        // graceful, but it works.
        if(!this.isEditingNote()) {
          this.doUnselectText = setTimeout(() => {
            if(!this.isEditingNote()) {
              this.setState({ selectionInfo: data.payload })
            }
          }, 200)
        }
        return true

      case 'textSelected':
        clearTimeout(this.doUnselectText)
        this.setState({ selectionInfo: data.payload })
        return true
    }
  }

  setSelectionText = payload => {
    // The next line is not needed, but avoids the delay in hiding the
    // highlighter panel.
    if(!payload) {
      this.setState({ selectionInfo: undefined })
    }
    postMessage(this.webView, 'setSelectionText', payload)
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

  setEditingNote = editingNote => this.setState({ editingNote })

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
    const { selectionInfo } = this.state

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
        {selectionInfo &&
          <Highlighter
            bookId={bookId}
            selectionInfo={selectionInfo}
            setEditingNote={this.setEditingNote}
            setSelectionText={this.setSelectionText}
          />
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  displaySettings: state.displaySettings,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  setLatestLocation,
  updateAccount,
  updateBookAccount,
  setUserData,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(BookPage)
import React from "react"
import { Updates } from "expo"
import { StyleSheet, WebView, NetInfo } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, View } from "native-base"
import i18n from "../../utils/i18n.js"

import FullScreenSpin from "../basic/FullScreenSpin"

import { getReqOptionsWithAdditions, setUpTimeout, unmountTimeouts } from "../../utils/toolbox.js"

import { addAccount } from "../../redux/actions.js"

const styles = StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  hidden: {
    transform: [
      {
        translateY: -99999,
      },
    ],
  },
})

class Login extends React.Component {

  state = {
    loading: true,
    leaving: false,
    offline: false,
    error: null,
  }

  componentWillUnmount = unmountTimeouts

  onError = err => {
    const { navigation } = this.props

    NetInfo.getConnectionInfo().then(connectionInfo => {
      if(connectionInfo.type === 'none') {
        // They are not connected to the internet

        const reattemptLogin = () => {
          NetInfo.removeEventListener('connectionChange', reattemptLogin)          
          this.webView.reload()
        }

        NetInfo.addEventListener('connectionChange', reattemptLogin)

        this.setState({
          offline: true,
          error: null,
        })
            
      } else {
        // There was an unknown error

        navigation.navigate("ErrorMessage", {
          message: i18n("There was an error connecting to the login portal. Please contact us if you continue to receive this message."),
        })

        setUpTimeout(this.webView.reload, 15000, this)

        this.setState({
          offline: false,
          error: i18n("Error. Trying again..."),
        })
      }
    })
  }

  onNavigationStateChange = async ({ url, loading }) => {
    const { navigation, idps } = this.props
    const { idpId } = navigation.state.params || {}

    if(loading || !this.initialStateChangeAlreadyHappened) {
      this.initialStateChangeAlreadyHappened = true
      this.setState({ loading: true })
      return
    }

    const userSetupUrl = `https://${idps[idpId].domain}/usersetup.json`

    if(url === userSetupUrl) {
      this.setState({ leaving: true })

      this.webView.injectJavaScript(`
        window.postMessage(JSON.stringify({
            identifier: "sendCookieAndContent",
            payload: {
              cookie: document.cookie,
              content: document.body.innerText,
            },
        }), "*");
        document.cookie = "connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      `)
      // we clear the cookie because we want auth status to be completely controlled by the app.

    } else {
      this.askedForLoginInfoAtLeastOnce = true
      this.setState({
        loading: false,
        offline: false,
        error: null,
      })
    }
    
  }

  onMessageEvent = async event => {
    const { navigation, addAccount } = this.props
    const { idpId, hasJSUpdate } = navigation.state.params || {}
    
    const data = JSON.parse(event.nativeEvent.data)

    if(data.identifier === 'sendCookieAndContent') {

      let userData
      try {
        userData = JSON.parse(data.payload.content)
      } catch(e) {}

      if(!userData || !userData.userInfo) {
        navigation.navigate("ErrorMessage", {
          critical: true,
        })
        return
      }

      const { userInfo, currentServerTime } = userData

      addAccount({
        idpId,
        userId: userInfo.id,
        accountInfo: {
          firstname: userInfo.firstname,
          lastname: userInfo.lastname,
          serverTimeOffset: currentServerTime - Date.now(),
          cookie: data.payload.cookie,
        },
      })

      if(hasJSUpdate()) {
        Updates.reloadFromCache()
      } else {
        navigation.goBack()
      }

    }
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

  render() {
    const { navigation, idps } = this.props
    const { idpId } = navigation.state.params || {}
    const { loading, leaving, offline, error } = this.state

    const userSetupUrl = `https://${idps[idpId].domain}/usersetup.json`

    const spinMessage = 
      error ? error :
      offline ? (
        idps[idpId].noCloudSave
          ? i18n("Waiting for an internet connection to get your book list...")
          : i18n("Waiting for an internet connection to log you in...")
      ) :
      idps[idpId].noCloudSave ? i18n("Finding books...") :
      this.askedForLoginInfoAtLeastOnce ? i18n("Logging you in...") :
      i18n("Loading login portal...")

    return (
      <Container>
        <WebView
          style={[
            styles.fullscreen,
            (leaving ? styles.hidden : null),
          ]}
          source={getReqOptionsWithAdditions({
            uri: userSetupUrl,
          })}
          mixedContentMode="always"
          onError={this.onError}
          onNavigationStateChange={this.onNavigationStateChange}
          injectedJavaScript={`
            document.querySelectorAll('input').forEach(el => el.setAttribute("autocomplete", "off"))
          `}  // this is needed to prevent a bug on Android by which the user cannot scroll to the input
          ref={this.setWebViewEl}
          onMessage={this.onMessageEvent}
        />
        {!!(loading || offline || error || leaving) &&
          <FullScreenSpin
            text={spinMessage}
            style={{ backgroundColor: 'white' }}
          />
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  idps: state.idps,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
  addAccount,
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Login)

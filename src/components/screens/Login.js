import React from "react"
import { StyleSheet, WebView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, View } from "native-base"
import i18n from "../../utils/i18n.js"

import FullScreenSpin from "../basic/FullScreenSpin"

import { getReqOptionsWithAdditions } from "../../utils/toolbox.js"

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
  }

  onError = () => {
    // TODO: do something to make this graceful
    // Give them an error message with setErrorMessage?
  }

  onNavigationStateChange = async ({ url, loading }) => {
    const { navigation, idps } = this.props
    const { idpId } = navigation.state.params

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
      this.setState({ loading: false })
    }
    
  }

  onMessageEvent = async event => {
    const { navigation, addAccount } = this.props
    const { idpId } = navigation.state.params
    
    const data = JSON.parse(event.nativeEvent.data)

    if(data.identifier === 'sendCookieAndContent') {

      let userData
      try {
        userData = JSON.parse(data.payload.content)
      } catch(e) {}

      if(!userData || !userData.userInfo) {
        throw new Error('Unexpected data returned')
        // TODO: report the error and attempt relogin
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
      
      navigation.goBack()

    }
  }

  setWebViewEl = webViewEl => this.webView = webViewEl

  render() {
    const { navigation, idps } = this.props
    const { idpId } = navigation.state.params
    const { loading, leaving } = this.state

    const userSetupUrl = `https://${idps[idpId].domain}/usersetup.json`

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
        {!!(loading || leaving) &&
          <FullScreenSpin
            text={this.askedForLoginInfoAtLeastOnce ? i18n("Logging you in...") : i18n("Loading login portal...")}
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

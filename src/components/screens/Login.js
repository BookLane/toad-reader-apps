import React from "react"
import { StyleSheet, WebView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, View } from "native-base"

import FullScreenSpin from "../basic/FullScreenSpin"

import { addAccount } from "../../redux/actions.js"

const {
  REQUEST_OPTIONS,
} = Expo.Constants.manifest.extra

const styles = StyleSheet.create({
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
})

class Login extends React.Component {

  state = {
    loading: true,
  }

  onError = () => {
    alert('error')
  }

  onNavigationStateChange = async ({ url, loading }) => {
    const { navigation, idps, addAccount } = this.props
    const { idpId } = navigation.state.params
    
    if(loading) {
      this.setState({ loading: true })
      return
    }

    const userDataUrl = `https://${idps[idpId].domain}/usersetup.json`

    if(url === userDataUrl) {
      this.setState({ loading: true })
      
      // fetch usersetup.json and add account
      let response = await fetch(userDataUrl, REQUEST_OPTIONS)
      if(response.status != 200) {
        throw new Error('Unable to log in')
      }
      const userData = await response.json()
      if(!userData || !userData.userInfo) {
        throw new Error('Unexpected data returned')
      }
      
      addAccount({
        idpId,
        userId: userData.userInfo.id,
        accountInfo: {
          firstname: userData.userInfo.firstname,
          lastname: userData.userInfo.lastname,
        },
      })
      
      // TODO: need to record currentServerTime
      
      navigation.goBack()

    } else {
      this.setState({ loading: false })
    }
    
  }

  render() {
    const { navigation, idps } = this.props
    const { idpId } = navigation.state.params
    const { loading } = this.state

    const userDataUrl = `https://${idps[idpId].domain}/usersetup.json`

    return (
      <Container>
        <WebView
          style={styles.fullscreen}
          source={{
            uri: userDataUrl,
            ...REQUEST_OPTIONS,
          }}
          mixedContentMode="always"
          onError={this.onError}
          onNavigationStateChange={this.onNavigationStateChange}
        />
        {loading && <FullScreenSpin style={{ backgroundColor: 'white' }} />}
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

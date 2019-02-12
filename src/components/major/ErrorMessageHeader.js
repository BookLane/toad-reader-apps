import React from "react"
import { StyleSheet, Platform } from "react-native"
import { Title, Left, Right, Icon, Button, Body } from "native-base"
import AppHeader from "../basic/AppHeader"
import i18n from "../../utils/i18n.js"

import { isPhoneSize, isStatusBarHidden, setStatusBarHidden, setUpTimeout, unmountTimeouts } from '../../utils/toolbox.js'

const styles = StyleSheet.create({
  title: {
    ...(Platform.OS === 'ios' && isPhoneSize() ? { marginLeft: -50, left: -20 } : {}),
  },
})

class ErrorMessageHeader extends React.PureComponent {

  componentDidMount() {
    this.priorStatusBarHiddenValue = isStatusBarHidden()
    setUpTimeout(() => setStatusBarHidden(false), 20, this)
  }

  componentWillUnmount = unmountTimeouts

  onBackPress = () => {
    const { navigation } = this.props
    
    setStatusBarHidden(this.priorStatusBarHiddenValue)

    navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const { title, critical } = navigation.state.params || {}
    
    return (
      <AppHeader>
        <Left>
          {!critical &&
            <Button
              transparent
              onPress={this.onBackPress}
            >
              <Icon name="arrow-back" />
            </Button>
          }
        </Left>
        <Body>
          <Title style={styles.title}>{title || i18n("Error")}</Title>
        </Body>
        <Right />
      </AppHeader>
    )
  }
}

export default ErrorMessageHeader
